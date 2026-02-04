/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ReliabilityMetric_modifyMetric';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);

    this.now = DateTime.now();
    this.assets = TestApi.upsertBatchEntity(this.ctx, 'ReliabilityAsset', [
      {
        name: 'Pump-100',
      },
      {
        name: 'Pump-200',
      },
    ]);

    /**
     * Create metrics for testing using ReliabilityMetric#createMetric, because using this method will create the metric
     * and its dependencies.
     */
    this.formObject1 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric1',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'sum(Pump-123, Pump-456)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now,
    });
    this.formObject2 = ReliabilityMetricSpec.make({
      id: 'CustomTestMetric2',
      createdBy: 'TestUser@c3.ai',
      name: 'CustomTestMetric2',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'sum(Pump-123, Pump-456)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now.minusDays(10),
    });
    this.formObject3 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric3',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'sum(Pump-123, Pump-456)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now.minusDays(5),
    });
    this.formObject4 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric4',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'max(CustomTestMetric3, RelMetric)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now,
    });
    this.formObject5 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric5',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'sum(Pump-123, Pump-456)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now.minusDays(5),
    });
    this.formObject6 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric6',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'sum(Pump-123, Pump-456)',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now.minusDays(5),
    });
    this.formObject7 = ReliabilityMetricSpec.make({
      name: 'CustomTestMetric7',
      description: 'User defined test metric',
      permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
      expression: 'CustomTestMetric6 *1',
      expandedExpression: '1==1',
      assets: [this.assets[0], this.assets[1]],
      facility: 'RWC',
      lastUpdated: this.now.minusDays(5),
    });

    ReliabilityMetric.createMetric(this.formObject1);
    ReliabilityMetric.createMetric(this.formObject2);
    ReliabilityMetric.createMetric(this.formObject3);
    ReliabilityMetric.createMetric(this.formObject4);
    ReliabilityMetric.createMetric(this.formObject5);
    ReliabilityMetric.createMetric(this.formObject6);
    ReliabilityMetric.createMetric(this.formObject7);
  });

  afterAll(function () {
    ReliabilityMetric.removeAll(
      {
        filter: Filter.intersects('id', [
          'CustomTestMetric1',
          'CustomTestMetric2',
          'CustomTestMetric3',
          'CustomTestMetric4',
          'CustomTestMetric5',
          'CustomTestMetric6',
          'CustomTestMetric7',
        ]),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('#modifyMetric', function () {
    describe('when the metric that is modified is an invalid metric', function () {
      beforeAll(function () {
        this.invalidEditFormObject = ReliabilityMetricSpec.make({
          id: 'InvalidMetric',
          name: 'UpdatedInvalidMetric',
          description: 'InvalidMetric test metric',
          permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
          expression: 'sum(Pump-123, Pump-456)',
          expandedExpression: '1==1',
          assets: [this.assets[0], this.assets[1]],
          facility: 'RWC',
          lastUpdated: this.now,
        });

        this.result = ReliabilityMetric.modifyMetric(this.invalidEditFormObject);
      });

      it('returns null', function () {
        expect(this.result).toBe(null);
      });
    });

    describe('when the metric that is modified is a valid metric', function () {
      describe('and the metric being modified has no dependencies', function () {
        beforeAll(function () {
          this.editFormObject = ReliabilityMetricSpec.make({
            id: 'CustomTestMetric1',
            name: 'UpdatedCustomTestMetric',
            description: 'Updated User defined test metric',
            permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
            expression: 'sum(Pump-123, Pump-456)',
            expandedExpression: '1==1',
            assets: [this.assets[0], this.assets[1]],
            facility: 'RWC',
            lastUpdated: this.now,
          });

          ReliabilityMetric.modifyMetric(this.editFormObject);

          this.result = ReliabilityMetric.forId(this.editFormObject.id).get('this, name, description');
        });

        it('updates custom metric with correct fields.', function () {
          expect(this.result.name).toEqual(this.editFormObject.name);
          expect(this.result.description).toEqual(this.editFormObject.description);
        });
      });

      describe('and the metric being modified has dependencies', function () {
        describe('when the field that is being changed is not the permission field', function () {
          beforeAll(function () {
            this.editFormObject2 = ReliabilityMetricSpec.make({
              id: 'CustomTestMetric6',
              name: 'CustomTestMetric6',
              description: 'Updated User defined test metric 6',
              permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
              expression: 'sum(Pump-123, Pump-456)',
              expandedExpression: '1==1',
              assets: [this.assets[0], this.assets[1]],
              facility: 'RWC',
              lastUpdated: this.now.minusDays(5),
            });

            ReliabilityMetric.modifyMetric(this.editFormObject2);

            this.updatedCustomTestMetric6 = ReliabilityMetric.forId('CustomTestMetric6')?.get(
              'this, name, description, facility'
            );
          });

          it('updates the specified fields', function () {
            expect(this.updatedCustomTestMetric6.name).toEqual('CustomTestMetric6');
            expect(this.updatedCustomTestMetric6.description).toEqual('Updated User defined test metric 6');
            expect(this.updatedCustomTestMetric6.facility.id).toEqual('RWC');
          });

          it('does not update the child metric', function () {
            this.childMetric = ReliabilityMetric.forId('CustomTestMetric7')?.get('this, name, description, facility');
            expect(this.childMetric.name).toEqual('CustomTestMetric7');
            expect(this.childMetric.description).toEqual('User defined test metric');
            expect(this.childMetric.facility.id).toEqual('RWC');
          });
        });

        describe('when the field that is being changed is the permission field', function () {
          beforeAll(function () {
            this.editFormObject3 = ReliabilityMetricSpec.make({
              id: 'CustomTestMetric6',
              name: 'CustomTestMetric6',
              description: 'Updated User defined test metric 6 second time',
              permission: ReliabilityMetricPermissionEnum.SHARED,
              expression: 'sum(Pump-123, Pump-456)',
              expandedExpression: '1==1',
              assets: [this.assets[0], this.assets[1]],
              facility: 'RWC',
              lastUpdated: this.now.minusDays(5),
            });

            this.childMetrics = ReliabilityMetric.fetch({ filter: Filter.eq('id', 'CustomTestMetric7') }).objs;

            ReliabilityMetric.modifyMetric(this.editFormObject3, this.childMetrics);

            this.updatedCustomTestMetric6 = ReliabilityMetric.forId('CustomTestMetric6')?.get(
              'this, name, description, facility'
            );
          });

          it('updates the specified fields', function () {
            expect(this.updatedCustomTestMetric6.name).toEqual('CustomTestMetric6');
            expect(this.updatedCustomTestMetric6.description).toEqual('Updated User defined test metric 6 second time');
            expect(this.updatedCustomTestMetric6.allowedUser).toBeUndefined();
          });

          it('updates the child metric', function () {
            this.childMetric = ReliabilityMetric.forId('CustomTestMetric7')?.get('this, name, description, facility');
            expect(this.childMetric.name).toEqual('CustomTestMetric7');
            expect(this.childMetric.description).toEqual('User defined test metric');
            expect(this.childMetric.facility.id).toEqual('RWC');
            expect(this.childMetric.allowedUser).toBeUndefined();
          });
        });
      });
    });
  });

  describe('#beforeUpdate', function () {
    describe('when the modified metrics change it original expression', function () {
      beforeAll(function () {
        this.editFormObject4 = ReliabilityMetricSpec.make({
          id: 'CustomTestMetric4',
          name: 'UpdatedCustomTestMetric4',
          description: 'Updated User defined test metric 4',
          permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
          expression: 'max(CustomTestMetric3, RelMetric)',
          expandedExpression: '1==1',
          assets: [this.assets[0], this.assets[1]],
          facility: 'RWC',
          lastUpdated: this.now,
        });

        ReliabilityMetric.modifyMetric(this.editFormObject4);

        this.updatedCustomTestMetric2 = ReliabilityMetric.forId('CustomTestMetric2')?.get(
          'this, dependencyMetrics.relatedMetric'
        );
        this.updatedCustomTestMetric3 = ReliabilityMetric.forId('CustomTestMetric3')?.get(
          'this, dependencyMetrics.relatedMetric'
        );
        this.updatedCustomTestMetric4 = ReliabilityMetric.forId('CustomTestMetric4')?.get(
          'this, childMetrics.relatedMetric'
        );
      });

      it('updates the `childMetrics` and `dependencyMetrics` of metrics used in the expression', function () {
        expect(this.updatedCustomTestMetric2.dependencyMetrics.size).toEqual(0);
        expect(this.updatedCustomTestMetric3.dependencyMetrics[0].relatedMetric.id).toEqual('CustomTestMetric4');
        expect(this.updatedCustomTestMetric4.childMetrics[0].relatedMetric.id).toEqual('CustomTestMetric3');
      });

      it('dependencies will have the updated objects', function () {
        // Updated metric dependencies
        this.updatedCustomTestMetric2 = ReliabilityMetricDependencies.fetch({
          filter: Filter.eq('from.id', 'CustomTestMetric2'),
          include: 'this, relatedMetric, relationType',
        }).objs.first();

        this.updatedCustomTestMetric3 = ReliabilityMetricDependencies.fetch({
          filter: Filter.eq('from.id', 'CustomTestMetric3'),
          include: 'this, relatedMetric, relationType',
        }).objs.first();

        expect(this.updatedCustomTestMetric2).toEqual(null);
        expect(this.updatedCustomTestMetric3.relatedMetric.id).toEqual('CustomTestMetric4');
        expect(this.updatedCustomTestMetric3.relationType).toEqual('dependency');
      });
    });

    describe('when the modified metrics do not change it original expression', function () {
      beforeAll(function () {
        this.editFormObject5 = ReliabilityMetricSpec.make({
          id: 'CustomTestMetric5',
          name: 'UpdatedCustomTestMetric5',
          description: 'Updated User defined test metric 5',
          permission: ReliabilityMetricPermissionEnum.NOT_SHARED,
          expression: 'sum(Pump-123, Pump-456)',
          expandedExpression: '1==1',
          assets: [this.assets[0], this.assets[1]],
          facility: 'PlantA',
          lastUpdated: this.now,
        });

        ReliabilityMetric.modifyMetric(this.editFormObject5);

        this.updatedCustomTestMetric5 = ReliabilityMetric.forId('CustomTestMetric5')?.get(
          'this, name, description, facility'
        );
      });

      it('updates the specified fields', function () {
        expect(this.updatedCustomTestMetric5.name).toEqual('UpdatedCustomTestMetric5');
        expect(this.updatedCustomTestMetric5.description).toEqual('Updated User defined test metric 5');
        expect(this.updatedCustomTestMetric5.facility.id).toEqual('PlantA');
      });
    });
  });
});
