/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// TODO: MIG8-3166 Renenable test
xdescribe('test_DataApi_generateSampleData', function () {
  describe('#generateSampleData', function () {
    beforeEach(function () {
      this.testCtx = TestApi.createContext('test_DataApi_generateSampleData');
      this.dataCtx = DataApi.createContext(5);

      TestApi.upsertBatchEntity(this.testCtx, 'Unit', [
        { id: 'unitA' },
        { id: 'unitB' },
      ]);
      this.sampleDataPatternFileName = 'testtools_testSamplePattern1.json';
    });

    afterEach(function () {
      DataApi.destroyContext(this.dataCtx);
      TestApi.teardown(this.testCtx);
      DataApi.removeSampleData(this.sampleDataPatternFileName);
    });

    describe('if not given a TestApiContext', function () {
      beforeEach(function () {
        DataApi.generateSampleData(this.sampleDataPatternFileName, 30, null, this.dataCtx, null);
      });

      afterEach(function () {
        DataApiEntityType.removeAll();
        TestApiEntityType.removeAll();
        TestApiOtherEntityType.removeAll();
      });

      it('generates data on the runtime environment', function () {
        expect(DataApiEntityType.fetchCount()).toEqual(60);
        expect(TestApiEntityType.fetchCount()).toEqual(90);
        expect(TestApiOtherEntityType.fetchCount()).toEqual(0);
        TestApi.teardown(this.testCtx);
        expect(DataApiEntityType.fetchCount()).toEqual(60);
        expect(TestApiEntityType.fetchCount()).toEqual(90);
        expect(TestApiOtherEntityType.fetchCount()).toEqual(0);
      });
    });

    describe('if given a TestApiContext', function () {
      it('generates data in the context', function () {
        DataApi.generateSampleData(this.sampleDataPatternFileName, 30, null, this.dataCtx, this.testCtx);
        expect(DataApiEntityType.fetchCount()).toEqual(60);
        expect(TestApiEntityType.fetchCount()).toEqual(90);
        expect(TestApiOtherEntityType.fetchCount()).toEqual(0);
        TestApi.teardown(this.testCtx);
        expect(DataApiEntityType.fetchCount()).toEqual(0);
        expect(TestApiEntityType.fetchCount()).toEqual(0);
        expect(TestApiOtherEntityType.fetchCount()).toEqual(0);
      });
    });

    describe('when given different data multiplier numbers', function () {
      describe('generates right amount of data when the multiplier', function () {
        it('is relatively small', function () {
          var multipliers = [1, 2, 3, 10, 15];
          var self = this;
          multipliers.forEach(function (m) {
            DataApi.generateSampleData(self.sampleDataPatternFileName, m, null, self.dataCtx, self.testCtx);
            expect(DataApiEntityType.fetchCount()).toEqual(2 * m);
            expect(TestApiEntityType.fetchCount()).toEqual(3 * m);
            expect(TestApiOtherEntityType.fetchCount()).toEqual(0);
          });
        });

        it('is relatively big', function () {
          var multipliers = [100, 200, 500, 1000];
          var self = this;
          multipliers.forEach(function (m) {
            DataApi.generateSampleData(self.sampleDataPatternFileName, m, null, self.dataCtx, self.testCtx);
            expect(DataApiEntityType.fetchCount()).toEqual(2 * m);
            expect(TestApiEntityType.fetchCount()).toEqual(3 * m);
            expect(TestApiOtherEntityType.fetchCount()).toEqual(0);
          });
        });
      });
    });

    describe('when sample data contains multiple field types with', function () {
      describe('datetime', function () {
        beforeEach(function () {
          this.multiplier = 7;

          this.verifyDate = function (startDate, endDate, multiplier) {
            var timeInterval = (endDate - startDate) / multiplier;
            var firstEntityDateTime = startDate + 5.2 * 24 * 60 * 60 * 1000;

            var entities = DataApiEntityType.fetch({
              order: 'ascending(datetimeField)',
              include: 'datetimeField',
            }).objs;
            for (var i = 0; i < multiplier; i++) {
              expect(entities[i].datetimeField.millis).toBeCloseTo(firstEntityDateTime + 2 * i * timeInterval, -5);
            }
          };
        });

        it('evenly distributed in the given time range', function () {
          var startDate = DateTime.fromString('2020-05-01').millis;
          var endDate = DateTime.fromString('2020-10-31').millis;
          DataApi.generateSampleData(this.sampleDataPatternFileName, this.multiplier, { start: startDate, end: endDate }, this.dataCtx, this.testCtx);
          this.verifyDate(startDate, endDate, this.multiplier);
        });

        // This case will fail locally if ran front-end due to time zone difference
        it('evenly distributed in the current 2-year time range if not given time range', function () {
          var today = DateTime.nowWithMillis().toDateMidnight();
          var startDate = /*
           * V8 Migration Notice: This function matches a known migrated function but the callee's type or signature do not match:
           * (today.plusYears(-1) is error)
           * DateTime.getTime() => millis
           */ /*
           * V8 Migration Notice: This function matches a known migrated function but the callee's type or signature do not match:
           * (today.plusYears(-1) is error)
           * DateTime.getTime() => millis
           */
          today.plusYears(-1).getTime();
          var endDate = /*
           * V8 Migration Notice: This function matches a known migrated function but the callee's type or signature do not match:
           * (today.plusYears(1) is error)
           * DateTime.getTime() => millis
           */ /*
           * V8 Migration Notice: This function matches a known migrated function but the callee's type or signature do not match:
           * (today.plusYears(1) is error)
           * DateTime.getTime() => millis
           */
          today.plusYears(1).getTime();
          DataApi.generateSampleData(this.sampleDataPatternFileName, this.multiplier, null, this.dataCtx, this.testCtx);
          this.verifyDate(startDate, endDate, this.multiplier);
        });
      });

      describe('dimension', function () {
        it('random value and set unit is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'dimensionField.value, dimensionField.unit',
            filter: 'exists(dimensionField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].dimensionField.value).toBeGreaterThan(-1);
            expect(entities[i].dimensionField.value).toBeLessThan(700);
            expect(entities[i].dimensionField.unit.id).toEqual('unitA');
          }
        });
      });

      describe('double', function () {
        it('random value is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'doubleField',
            filter: 'exists(doubleField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].doubleField).toBeGreaterThan(-1);
            expect(entities[i].doubleField).toBeLessThan(26.1);
          }
        });
      });

      describe('mixin field', function () {
        it('random value is generated with the same rule as other field types', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'mixinIntField',
            filter: 'exists(mixinIntField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].mixinIntField).toBeGreaterThan(-1);
            expect(entities[i].mixinIntField).toBeLessThan(100);
          }
        });
      });

      describe('int', function () {
        it('random value is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'intField',
            filter: 'exists(intField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].intField).toBeGreaterThan(-1);
            expect(entities[i].intField).toBeLessThan(500);
          }
        });
      });

      describe('unit', function () {
        it('same unit is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'unitField',
            filter: 'exists(unitField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].unitField.id).toEqual('unitB');
          }
        });
      });

      describe('boolean', function () {
        it('same boolean field is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'booleanField',
            filter: 'exists(booleanField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].booleanField).toBe(true);
          }
        });
      });

      describe('reference', function () {
        it('updated reference field is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'referenceField',
            filter: 'exists(referenceField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].referenceField.id).toEqual('testEntity' + (1 + 3 * i));
          }
        });
      });

      describe('string', function () {
        it('updated string field is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'id',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < 2 * multiplier; i++) {
            expect(entities[i].id).toEqual('testDataEntity' + i);
          }
        });
      });

      describe('array', function () {
        it('collection of values is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'storedCollectionField',
            filter: 'exists(storedCollectionField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].storedCollectionField[0].id).toEqual('testEntity' + 2 * i);
          }
        });
      });

      describe('duration', function () {
        it('random value in milliseconds is generated', function () {
          var multiplier = 5;
          DataApi.generateSampleData(this.sampleDataPatternFileName, multiplier, null, this.dataCtx, this.testCtx);

          var entities = DataApiEntityType.fetch({
            include: 'durationField',
            filter: 'exists(durationField)',
            order: 'ascending(id)',
          }).objs;
          for (var i = 0; i < multiplier; i++) {
            expect(entities[i].durationField.m_ms).toBeGreaterThan(-1);
            expect(entities[i].durationField.m_ms).toBeLessThan(1000000);
          }
        });
      });
    });
  });

  describe('#removeSampleData', function () {
    beforeAll(function () {
      DataApiOtherEntityType.removeAll();
      DataApiEntityType.make({ requiredField: 10 }).create();
      TestApiEntityType.make({}).create();
      TestApiOtherEntityType.make({}).create();
      DataApiOtherEntityType.make({ id: 'testId' }).create();

      DataApi.removeSampleData('testtools_testSamplePattern1.json');
    });

    afterAll(function () {
      DataApiEntityType.removeAll();
      TestApiEntityType.removeAll();
      TestApiOtherEntityType.removeAll();
      DataApiOtherEntityType.removeAll('id == "testId"');
    });

    it('removes all entity types mentioned in the pattern file', function () {
      expect(DataApiEntityType.fetchCount()).toEqual(0);
      expect(TestApiEntityType.fetchCount()).toEqual(0);
      expect(TestApiOtherEntityType.fetchCount()).toEqual(0);
      expect(DataApiOtherEntityType.fetchCount()).toEqual(1);
    });
  });
});
