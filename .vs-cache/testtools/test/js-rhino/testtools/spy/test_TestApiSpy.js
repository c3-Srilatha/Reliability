/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_TestApiSpy', function () {
  var filename = 'test_TestApiSpy';

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Unregister and remove all spies.
    Action.Spy.fetch().objs.each(o => {
      if (o.isRegistered()) o.unregister();
      o.remove();
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('spyOn', function () {
    describe('before registering the spy', function () {
      describe('TestApiSpyTestType returns the expected value for', function () {
        it('shouldReturnTrue', function () {
          expect(TestApiSpyTestType.shouldReturnTrue()).toBeTruthy();
        });

        it('shouldReturnNull', function () {
          expect(TestApiSpyTestType.shouldReturnNull()).toBeNull();
        });
      });
    });

    describe('after registering the spy', function () {
      beforeAll(function () {
        this.returnTrueSpy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnTrue').returnValue(false).register();
        this.returnNullSpy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnNull').returnValue('notnull').register();
        this.start = DateTime.now();
        this.datetimeMinusSpy = TestApi.spyOn(this.ctx, 'DateTime', 'minusDays').returnValue(this.start).register();
        this.returnTrueSpyMock = this.returnTrueSpy.getActionMock();
        this.returnNullSpyMock = this.returnNullSpy.getActionMock();
      });

      afterAll(function () {
        this.returnTrueSpy.unregister();
        this.returnNullSpy.unregister();
        this.datetimeMinusSpy.unregister();
      });

      describe('creates the expected action mock for', function () {
        it('shouldReturnTrue', function () {
          expect(this.returnTrueSpyMock).toEqual(jasmine.objectContaining({
            targetAction: jasmine.objectContaining({
              typeName: 'TestApiSpyTestType',
              actionName: 'shouldReturnTrue'
            })
          }));
        });

        it('shouldReturnNull', function () {
          expect(this.returnNullSpyMock).toEqual(jasmine.objectContaining({
            targetAction: jasmine.objectContaining({
              typeName: 'TestApiSpyTestType',
              actionName: 'shouldReturnNull'
            })
          }));
        });
      });

      describe('returns the mocked value for', function () {
        it('shouldReturnTrue', function () {
          expect(TestApiSpyTestType.shouldReturnTrue()).toBeFalsy();
        });

        it('shouldReturnNull', function () {
          expect(TestApiSpyTestType.shouldReturnNull()).toBe('notnull');
        });

        it('shouldReturnPast', function () {
          expect(this.start.minusDays(10000)).toEqual(this.start);
          expect(TestApiSpyTestType.shouldReturnPast()).toEqual(this.start);
        });
      });
    });
  });

  describe('withArgs', function () {
    describe('before registering the spy', function () {
      describe('TestApiSpyTestType returns the expected value for', function () {
        it('shouldReturnFirstArgument', function () {
          expect(TestApiSpyTestType.shouldReturnFirstArgument('hello', 'world')).toBeTruthy('hello');
        });
      });
    });

    describe('for a function with a single argument', function () {
      beforeAll(function () {
        this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnFirstArgument')
            .withArgs('hello')
            .returnValue('world')
            .register();
      });

      afterAll(function () {
        this.spy.unregister();
      });

      describe('when called with parameters', function () {
        describe('that matches the args', function () {
          it('returns the expected output', function () {
            expect(TestApiSpyTestType.shouldReturnFirstArgument('hello')).toBe('world');
          });

          it('calls the function', function () {
            expect(this.spy.toHaveBeenCalled()).toBeTruthy();
          });

          it('calls the function once', function () {
            expect(this.spy.toHaveBeenCalledTimes(1)).toBeTruthy();
          });

          it('register a spy call with the expected parameter', function () {
            expect(this.spy.toHaveBeenCalledWith({firstArg: 'hello', secondArg: null})).toBeTruthy();
          });

          it('uses partial matching by default for top level parameters', function () {
            expect(this.spy.toHaveBeenCalledWith({firstArg: 'hello'})).toBeTruthy();
          });
        });

        describe('that doesn\'t match the args', function () {
          it('returns the expected output', function () {
            expect(TestApiSpyTestType.shouldReturnFirstArgument('test1', 'test2')).toBe('test1');
          });
        });
      });
    });

    describe('for a function with multiple arguments', function () {
      beforeAll(function () {
        this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnFirstArgument')
            .withArgs('hello', 'world')
            .returnValue('3.1415926')
            .register();
      });

      afterAll(function () {
        this.spy.unregister();
      });

      describe('when called with parameters', function () {
        describe('that matches the args', function () {
          it('returns the expected output', function () {
            expect(TestApiSpyTestType.shouldReturnFirstArgument('hello', 'world')).toBe('3.1415926');
          });

          it('calls the function', function () {
            expect(this.spy.toHaveBeenCalled()).toBeTruthy();
          });

          it('calls the function once', function () {
            expect(this.spy.toHaveBeenCalledTimes(1)).toBeTruthy();
          });

          it('register a spy call with the expected parameter', function () {
            expect(this.spy.toHaveBeenCalledWith({firstArg: 'hello', secondArg: 'world'})).toBeTruthy();
          });
        });

        describe('that doesn\'t match the args', function () {
          it('returns the expected output', function () {
            expect(TestApiSpyTestType.shouldReturnFirstArgument('test1', 'test2')).toBe('test1');
          });
        });
      });
    });

    describe('on a member function', function () {
      beforeAll(function () {
        this.obj = TestApiSpyTestType.make({});
        this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnArgument')
            .withArgs(this.obj, 'hello')
            .returnValue('world')
            .register();
      });

      afterAll(function () {
        this.spy.unregister();
      });

      it('returns the expected result', function () {
        expect(this.obj.shouldReturnArgument('hello')).toBe('world');
      });

      it('should call the function', function () {
        expect(this.spy.toHaveBeenCalled()).toBeTruthy();
      });

      it('should call the function once', function () {
        expect(this.spy.toHaveBeenCalledTimes(1)).toBeTruthy();
      });

      it('tracks parameter calls of the spy', function () {
        expect(this.spy.toHaveBeenCalledWith({this: this.obj, arg: 'hello'})).toBeTruthy();
      });
    });
  });


  describe('toHaveBeenCalledWith', function () {
    describe('when called', function () {
      beforeAll(function () {
        this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnConcatNestedArgs')
            .register();
      });

      afterAll(function () {
        this.spy.unregister();
      });

      describe('uses partial matching in nested arguments when partial matching objects are expected when the parameters', function () {
        beforeAll(function () {
          TestApiSpyTestType.shouldReturnConcatNestedArgs({
            arrayOfObjects: [{val: 'a'}],
          }, {
            arrayOfObjects: [{val: 'b'}, {val: DateTime.fromString('2021-01-01')}],
          });
        });

        it('are not typed', function () {
          expect(this.spy.toHaveBeenCalledWith({
            firstArg: {
              arrayOfObjects: [
                {val: 'a'}
              ],
            },
            secondArg: {
              arrayOfObjects: [{val: 'b'}, {val: DateTime.fromString('2021-01-01')}],
            }
          })).toBeTruthy();
        });

        it('are of type TestApiObjectContainingArrayTestType', function () {
          expect(this.spy.toHaveBeenCalledWith({
            firstArg: TestApiObjectContainingArrayTestType.make({
              arrayOfObjects: [{val: 'a'}],
            }),
            secondArg: {
              arrayOfObjects: [{val: 'b'}, {val: DateTime.fromString('2021-01-01')}],
            }
          })).toBeTruthy();
        });

        it('are of type TestApiObjectContainingArrayTestSubType', function () {
          expect(this.spy.toHaveBeenCalledWith({
            firstArg: TestApiObjectContainingArrayTestSubType.make({
              arrayOfObjects: [{val: 'a'}],
              a: '123',
            }),
            secondArg: {
              arrayOfObjects: [{val: 'b'}, {val: DateTime.fromString('2021-01-01')}],
            }
          })).toBeFalsy();
        });
      });

      describe('with typed parameters', function () {
        beforeAll(function () {
          TestApiSpyTestType.shouldReturnConcatNestedArgs(TestApiObjectContainingArrayTestSubType.make(
              {
                arrayOfObjects: [{val: 'a'}],
                a: '123',
              }), TestApiObjectContainingArrayTestSubType.make(
              {
                arrayOfObjects: [{val: 'b'}, {val: DateTime.fromString('2021-01-01')}],
              }
          ));

          it('identifies the expected subtypes', function () {
            expect(this.spy.toHaveBeenCalledWith({
              firstArg: TestApiObjectContainingArrayTestSubType.make({
                arrayOfObjects: [{val: 'a'}],
                a: '123',
              }),
              secondArg: TestApiObjectContainingArrayTestSubType.make({
                arrayOfObjects: [{val: 'b'}, {val: DateTime.fromString('2021-01-01')}],
              })
            })).toBeTruthy();
          })
        });
      });
    });
  });

  describe('callFake', function () {
    describe('before registering the spy', function () {
      describe('TestApiSpyTestType returns the expected value for', function () {
        it('shouldReturnConcatArgs', function () {
          expect(TestApiSpyTestType.shouldReturnConcatArgs('a', 'b', 'c')).toBe('a_b_c');
        });

        it('shouldReturnFirstArgument', function () {
          expect(TestApiSpyTestType.shouldReturnFirstArgument('a', 'b')).toBe('a');
        });
      });
    });

    describe('after registering the spy', function () {
      describe('for shouldReturnConcatArgs', function () {
        describe('with a claim', function () {
          beforeAll(function () {
            this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnConcatArgs')
                .withClaim(Lambda.fromJsFunc(function (action, input) {
                  return input.firstArg === '123' && input.secondArg === input.thirdArg;
                }))
                .callFake(Lambda.fromJsFunc(function (action, input) {
                  return input.firstArg;
                }))
                .register();
          });

          afterAll(function () {
            this.spy.unregister();
          });

          describe('TestApiSpyTestType returns the expected output for an input that', function () {
            it('matches the claim', function () {
              expect(TestApiSpyTestType.shouldReturnConcatArgs('123', 'same', 'same')).toBe('123');
            });

            it('doesn\'t match the claim', function () {
              expect(TestApiSpyTestType.shouldReturnConcatArgs('aa', 'bb', 'cc')).toBe('aa_bb_cc');
            });
          });
        });

        describe('without a claim', function () {
          beforeAll(function () {
            this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnConcatArgs')
                .callFake(Lambda.fromJsFunc(function (action, input) {
                  return input.secondArg;
                }))
                .register();
          });

          afterAll(function () {
            this.spy.unregister();
          });

          describe('TestApiSpyTestType returns the expected output for', function () {
            it('the first sample input', function () {
              expect(TestApiSpyTestType.shouldReturnConcatArgs('123', 'same', 'same')).toBe('same');
            });

            it('the second sample input', function () {
              expect(TestApiSpyTestType.shouldReturnConcatArgs('aa', 'bb', 'cc')).toBe('bb');
            });
          });
        });
      });

      describe('for shouldReturnFirstArgument', function () {
        describe('with a claim', function () {
          beforeAll(function () {
            this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnFirstArgument')
                .withClaim(Lambda.fromJsFunc(function (action, input) {
                  return input.firstArg === '123'
                }))
                .callFake(Lambda.fromJsFunc(function (action, input) {
                  return input.secondArg;
                }))
                .register();
          });

          afterAll(function () {
            this.spy.unregister();
          });

          describe('TestApiSpyTestType returns the expected output for an input that', function () {
            it('matches the claim', function () {
              expect(TestApiSpyTestType.shouldReturnFirstArgument('123', 'same')).toBe('same');
            });

            it('doesn\'t match the claim', function () {
              expect(TestApiSpyTestType.shouldReturnFirstArgument('aa', 'bb')).toBe('aa');
            });
          });
        });

        describe('without a claim', function () {
          beforeAll(function () {
            this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnFirstArgument')
                .callFake(Lambda.fromJsFunc(function (action, input) {
                  return input.secondArg;
                }))
                .register();
          });

          afterAll(function () {
            this.spy.unregister();
          });

          describe('TestApiSpyTestType returns the expected output for', function () {
            it('the first sample input', function () {
              expect(TestApiSpyTestType.shouldReturnFirstArgument('123', 'same')).toBe('same');
            });

            it('the second sample input', function () {
              expect(TestApiSpyTestType.shouldReturnFirstArgument('aa', 'bb')).toBe('bb');
            });
          });
        });
      });
    });
  });

  describe('callThrough', function () {
    describe('after registering the spy', function () {
      describe('for an action without args', function () {
        beforeAll(function () {
          this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnTrue')
              .callThrough()
              .register();
        });

        afterAll(function () {
          this.spy.unregister();
        });

        describe('when called', function () {
          it('returns the expected output', function () {
            expect(TestApiSpyTestType.shouldReturnTrue()).toBeTruthy();
          });
        });
      });

      describe('for an action with args', function () {
        beforeAll(function () {
          this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnFirstArgument')
              .withArgs('hello', 'world')
              .callThrough()
              .register();
        });

        afterAll(function () {
          this.spy.unregister();
        });

        describe('before being called', function () {
          it('doesn\'t register a spy call', function () {
            expect(this.spy.getActionMock().callCount()).toEqual(0);
          });
        });

        describe('when called', function () {
          beforeAll(function () {
            this.result = TestApiSpyTestType.shouldReturnFirstArgument('hello', 'world');
          });

          it('returns the expected output', function () {
            expect(this.result).toBe('hello');
          });

          it('registers a spy call', function () {
            expect(this.spy.toHaveBeenCalled()).toBeTruthy();
          });

          it('registers a spy call the expected numnber of times', function () {
            expect(this.spy.toHaveBeenCalledTimes(1)).toBeTruthy();
          });

          it('register a spy call with the expected parameter', function () {
            expect(this.spy.toHaveBeenCalledWith({firstArg: 'hello', secondArg: 'world'})).toBeTruthy();
          });
        });
      });

      describe('for an action with a lambda', function () {
        beforeAll(function () {
          this.spy = TestApi.spyOn(this.ctx, 'TestApiSpyTestType', 'shouldReturnFirstArgument')
              .callFake(Lambda.fromJsFunc(function (action, input) {
                return input.secondArg;
              }))
              .callThrough()
              .register();
        });

        afterAll(function () {
          this.spy.unregister();
        });

        describe('before being called', function () {
          it('doesn\'t register a spy call', function () {
            expect(this.spy.getActionMock().callCount()).toEqual(0);
          });
        });

        describe('when called', function () {
          beforeAll(function () {
            this.result = TestApiSpyTestType.shouldReturnFirstArgument('hello', 'world');
          });

          it('returns the expected output', function () {
            expect(this.result).toBe('hello');
          });

          it('registers a spy call', function () {
            expect(this.spy.toHaveBeenCalled()).toBeTruthy();
          });

          it('registers a spy call the expected numnber of times', function () {
            expect(this.spy.toHaveBeenCalledTimes(1)).toBeTruthy();
          });

          it('register a spy call with the expected parameter', function () {
            expect(this.spy.toHaveBeenCalledWith({firstArg: 'hello', secondArg: 'world'})).toBeTruthy();
          });
        });
      });
    });
  });
});
