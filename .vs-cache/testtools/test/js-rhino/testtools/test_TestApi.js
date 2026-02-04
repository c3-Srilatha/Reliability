/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApi', function () {
  beforeAll(function () {
    var filename = 'test_TestApi';
    this.ctx = TestApi.createContext(filename);
    TestApi.waitForSetup(this.ctx, null, 1, 300);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  xdescribe('::waitForFunction', function () {
    beforeAll(function () {
      this.failingFunction = function () {
        return false;
      };
      this.passedErrorMessage = 'passed error message';
      this.passingFunction = function (argTest) {
        return argTest === 'argTest';
      };
    });

    it('returns when the checked function is truthy', function () {
      expect(
        function () {
          TestApi.waitForFunction(
            Lambda.fromJsFunc(this.passingFunction).partiallyApply({ argTest: 'argTest' }),
            this.passedErrorMessage,
            1,
            1
          );
        }.bind(this)
      ).not.toThrowError();
    });

    it('throws passed error message when condition is not met', function () {
      expect(
        function () {
          TestApi.waitForFunction(Lambda.fromJsFunc(this.failingFunction), this.passedErrorMessage, 1, 1);
        }.bind(this)
      ).toThrowError(new RegExp(this.passedErrorMessage));
    });
  }).pend('MIG8-2684')

  describe('#waitForJob', function () {
    beforeAll(function () {
      /**
       * Helper function to add a teardown filter for InvalidationQueueError for the specific job.  This is necessary
       * because the job will fail and we need to teardown the InvalidationQueueError.
       * @param {TestApiContext} context - The context to add the teardown filter.
       * @param {TestApiMapReduce | TestApiBatchJob | TestApiWorkflow} job - The job to add the teardown filter
       * for.
       */
      this.addTeardownFilterForJob = function (context, job) {
        /*
         * We have to teardown the InvalidationQueueError that we know will come from this job.  Else all the other
         * tests using TestApi.waitForSetup will fail
         */
        var tearDownFilter = Filter.eq('targetTypeId', TypeId.idFromTypeName(job.type().name()))
          .and()
          .eq('targetObjId', job.id);
        TestApi.addExternalTeardownFilter(context, tearDownFilter, InvalidationQueueError);
      };

      /**
       * Helper function to create and register a TestApiSpy for the cancel method of the job.
       * @param {TestApiContext} context - The context to create the spy on.
       * @param {TestApiMapReduce | TestApiBatchJob} job - The job to create the spy for.
       * @returns TestApiSpy - The spy that was created.
       */
      this.createAndRegisterCancelSpy = function (context, job) {
        return TestApi.spyOn(context, job.type().name(), 'cancel').register();
      };

      /**
       * Helper function to create and register a TestApiSpy for TestApiContext.setSetupOK.
       * @param {TestApiContext} context - The context to create the spy on.
       * @returns TestApiSpy - The spy that was created.
       */
      this.createAndRegisterSetSetupOKSpy = function (context) {
        return TestApi.spyOn(context, context.type().name(), 'setSetupOK').register();
      };
    });

    describe('with a BatchJob', function () {
      beforeAll(function () {
        this.jobType = TestApiBatchJob;
        this.jobTypeName = this.jobType.name();
      });

      describe('when job succeeds', function () {
        beforeAll(function () {
          this.job = TestApi.createEntity(this.ctx, this.jobTypeName);
          this.job.start();
        });

        it('does not throw an error', function () {
          var self = this;
          expect(() => {
            return TestApi.waitForJob(self.ctx, self.job);
          }).not.toThrow();
        });
      });

      describe('when job fails', function () {
        describe('in doStart', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { failJobDuringDoStart: true });
            this.addTeardownFilterForJob(this.ctx, this.job);
            this.job.start();
          });

          it('throws an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job);
            }).toThrowError(/Job failed during doStart/);
          });
        });

        describe('in processBatch', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { failJobDuringProcessBatch: true });
            this.addTeardownFilterForJob(this.ctx, this.job);
            this.job.start();
          });

          it('throw an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job);
            }).toThrowError(/Job failed during processBatch/)
          });
        });
      });

      describe('when job times out', function () {
        beforeAll(function () {
          this.timeLimit = 2;
        });

        describe('in doStart', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { doStartStallTime: 6000 });
            this.cancelSpy = this.createAndRegisterCancelSpy(this.ctx, this.job);
            this.scheduleBatchSpy = TestApi.spyOn(this.ctx, this.jobTypeName, 'scheduleBatch').register();
            this.setSetupOKSpy = this.createAndRegisterSetSetupOKSpy(this.ctx);
            this.job.start();
          });

          afterAll(function () {
            this.cancelSpy.unregister();
            this.setSetupOKSpy.unregister();
            this.scheduleBatchSpy.unregister();
          });

          it('throws an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job, 1, self.timeLimit);
            }).toThrowError(/waitForJobs timed out after \d+(\.\d+)? seconds/);
          });

          it('cancels the job', function () {
            expect(this.cancelSpy.toHaveBeenCalled()).toBeTrue();
          });

          it('calls TestApiContext.setSetupOK', function () {
            expect(this.setSetupOKSpy.toHaveBeenCalled()).toBeTrue();
          });

          it('does not call scheduleBatch', function () {
            expect(this.scheduleBatchSpy.toHaveBeenCalled()).toBeFalse();
          });
        });

        describe('in processBatch', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { processBatchStallTime: 3000 });
            this.cancelSpy = this.createAndRegisterCancelSpy(this.ctx, this.job);
            this.setSetupOKSpy = this.createAndRegisterSetSetupOKSpy(this.ctx);
            this.job.start();
          });

          afterAll(function () {
            this.cancelSpy.unregister();
            this.setSetupOKSpy.unregister();
          });

          it('throws an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job, 1, self.timeLimit);
            }).toThrowError(/waitForJobs timed out after \d+(\.\d+)? seconds/);
          });

          it('cancels the job', function () {
            expect(this.cancelSpy.toHaveBeenCalled()).toBeTrue();
          });

          it('calls TestApiContext.setSetupOK', function () {
            expect(this.setSetupOKSpy.toHaveBeenCalled()).toBeTrue();
          });
        });
      });
    });

    describe('with a MapReduce', function () {
      beforeAll(function () {
        this.jobType = TestApiMapReduce;
        this.jobTypeName = this.jobType.name();
        TestApi.createBatchEntity(this.ctx, 'TestApiMapReduceEntity', [
          { codeName: 'Project Nebula' },
          { codeName: 'Task Horizon' },
          { codeName: 'Operation QuantumLeap' },
        ]);
      });

      describe('when job succeeds', function () {
        beforeAll(function () {
          this.job = TestApi.createEntity(this.ctx, this.jobTypeName);
          this.job.start({ include: 'id, codeName' });
        });

        it('does not throw an error', function () {
          var self = this;
          expect(() => {
            return TestApi.waitForJob(self.ctx, self.job);
          }).not.toThrow();
        });
      });

      describe('when job fails', function () {
        describe('in map', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { failJobDuringMap: true });
            this.addTeardownFilterForJob(this.ctx, this.job);
            this.job.start({ include: 'id, codeName' });
          });

          it('throws an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job);
            }).toThrowError(/Job failed during map/);
          });
        });

        describe('in reduce', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { failJobDuringReduce: true });
            this.addTeardownFilterForJob(this.ctx, this.job);
            this.job.start();
          });

          it('throw an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job);
            }).toThrowError(/Job failed during reduce/)
          });
        });
      });

      describe('when job times out', function () {
        beforeAll(function () {
          this.timeLimit = 2;
        });

        describe('in map', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { mapStallTime: 6000 });
            this.cancelSpy = this.createAndRegisterCancelSpy(this.ctx, this.job);
            this.setSetupOKSpy = this.createAndRegisterSetSetupOKSpy(this.ctx);
            this.job.start();
          });

          afterAll(function () {
            this.cancelSpy.unregister();
            this.setSetupOKSpy.unregister();
          });

          it('throws an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job, 1, self.timeLimit);
            }).toThrowError(/waitForJobs timed out after \d+(\.\d+)? seconds/);
          });

          it('cancels the job', function () {
            expect(this.cancelSpy.toHaveBeenCalled()).toBeTrue();
          });

          it('calls TestApiContext.setSetupOK', function () {
            expect(this.setSetupOKSpy.toHaveBeenCalled()).toBeTrue();
          });
        });

        describe('in reduce', function () {
          beforeAll(function () {
            this.job = TestApi.createEntity(this.ctx, this.jobTypeName, { reduceStallTime: 3000 });
            this.cancelSpy = this.createAndRegisterCancelSpy(this.ctx, this.job);
            this.setSetupOKSpy = this.createAndRegisterSetSetupOKSpy(this.ctx);
            this.job.start();
          });

          afterAll(function () {
            this.cancelSpy.unregister();
            this.setSetupOKSpy.unregister();
          });

          it('throws an error', function () {
            var self = this;
            expect(() => {
              return TestApi.waitForJob(self.ctx, self.job, 1, self.timeLimit);
            }).toThrowError(/waitForJobs timed out after \d+(\.\d+)? seconds/);
          });

          it('cancels the job', function () {
            expect(this.cancelSpy.toHaveBeenCalled()).toBeTrue();
          });

          it('calls TestApiContext.setSetupOK', function () {
            expect(this.setSetupOKSpy.toHaveBeenCalled()).toBeTrue();
          });
        });
      });
    });

    describe('with a Workflow', function () {
      describe('when job succeeds', function () {
        beforeAll(function () {
          this.job = TestApiWorkflow.createWorkflow(false);
          this.addTeardownFilterForJob(this.ctx, this.job);
          this.job.start();
        });

        it('does not throw an error', function () {
          var self = this;
          expect(() => {
            return TestApi.waitForJob(self.ctx, self.job);
          }).not.toThrow();
        });
      });

      describe('when job fails', function () {
        beforeAll(function () {
          this.job = TestApiWorkflow.createWorkflow(true);
          this.addTeardownFilterForJob(this.ctx, this.job);
          this.job.start();
        });

        it('throws an error', function () {
          var self = this;
          expect(() => {
            return TestApi.waitForJob(self.ctx, self.job);
          }).toThrowError(/Error thrown from workflowFunction/);
        });
      });

      describe('when job times out', function () {
        beforeAll(function () {
          this.timeLimit = 2;
          this.job = TestApiWorkflow.createWorkflow(false, 3000);
          this.cancelSpy = TestApi.spyOn(this.ctx, Workflow.Run.name(), 'cancel').register();
          this.setSetupOKSpy = this.createAndRegisterSetSetupOKSpy(this.ctx);
          this.job.start();
        });

        afterAll(function () {
          this.job.remove();
          this.cancelSpy.unregister();
          this.setSetupOKSpy.unregister();
        });

        it('throws an error', function () {
          var self = this;
          expect(() => {
            return TestApi.waitForJob(self.ctx, self.job, 1, self.timeLimit);
          }).toThrowError(/waitForJobs timed out after \d+(\.\d+)? seconds/);
        });

        it('cancels the job', function () {
          expect(this.cancelSpy.toHaveBeenCalled()).toBeTrue();
        });

        it('calls TestApiContext.setSetupOK', function () {
          expect(this.setSetupOKSpy.toHaveBeenCalled()).toBeTrue();
        });
      });
    });
  });
})
