/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_ReliabilityMlProjectSchemaUpgrade';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();
    this.cvProjectId = ReliabilityMLConfig.inst().getConfig().configValue('reliabilityRiskControlValveMLProjectId');
  });

  describe('#migrateReliabilityMlProject_1', function () {
    describe('when overrideModelSetupSettingsToWorkflowRun is not initially upserted', function () {
      beforeAll(function () {
        this.asset = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {});
        this.filter = Filter.eq('id', 'testAssetId');
        TestApi.upsertEntity(this.ctx, 'ReliabilityMl.Project', {
          id: this.cvProjectId,
          name: 'project name 1',
          description: 'project description 1',
          assetFilter: Filter.eq('id', this.asset.id),
          alertOutputs: ['testAlOutput'],
          defaultModelTemplate: 'testTemplate',
          modelTemplates: ['testTemplate'],
        });
      });

      it('should initially not have overrideModelSetupSettingsToWorkflowRun property', function () {
        this.cvProject = ReliabilityMl.Project.forId(this.cvProjectId).get('overrideModelSetupSettingsToWorkflowRun');
        expect(Object.prototype.hasOwnProperty.call(this.cvProject, 'overrideModelSetupSettingsToWorkflowRun')).toBe(
          false
        );
      });

      it('should add overrideModelSetupSettingsToWorkflowRun property after migration', function () {
        ReliabilityMlProjectSchemaUpgrade.migrateReliabilityMlProject_1();
        this.cvProject = ReliabilityMl.Project.forId(this.cvProjectId).get('overrideModelSetupSettingsToWorkflowRun');

        expect(Object.prototype.hasOwnProperty.call(this.cvProject, 'overrideModelSetupSettingsToWorkflowRun')).toBe(
          true
        );
      });
    });

    describe('when overrideModelSetupSettingsToWorkflowRun is already upserted', function () {
      beforeAll(function () {
        this.asset = TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {});
        this.implementationString = `def startModelSetup(settings):
        return settings.startCorrelationBulkModelSetup()`;
        this.overrideModelSetupSettingsToWorkflowRun = {
          type: 'Lambda<function(settings: BulkModelSetupUiSettings): Workflow.Run>',
          language: 'Python',
          implementation: this.implementationString,
          actionRequirement: 'py-data',
        };

        TestApi.upsertEntity(this.ctx, 'ReliabilityMl.Project', {
          id: this.cvProjectId,
          name: 'project name 2',
          description: 'project description 2',
          assetFilter: Filter.eq('id', this.asset.id),
          alertOutputs: ['testAlOutput'],
          defaultModelTemplate: 'testTemplate',
          modelTemplates: ['testTemplate'],
          overrideModelSetupSettingsToWorkflowRun: this.overrideModelSetupSettingsToWorkflowRun,
        });
      });

      it('should not modify overrideModelSetupSettingsToWorkflowRun property during migration', function () {
        ReliabilityMlProjectSchemaUpgrade.migrateReliabilityMlProject_1();
        this.cvProject = ReliabilityMl.Project.forId(this.cvProjectId).get('overrideModelSetupSettingsToWorkflowRun');

        expect(this.cvProject.overrideModelSetupSettingsToWorkflowRun).toEqual(
          this.overrideModelSetupSettingsToWorkflowRun
        );
      });
    });
  });

  afterAll(function () {
    ReliabilityMl.Project.removeAll({ filter: Filter.eq('id', this.cvProjectId) }, true);
    TestApi.teardown(this.ctx);
  });
});
