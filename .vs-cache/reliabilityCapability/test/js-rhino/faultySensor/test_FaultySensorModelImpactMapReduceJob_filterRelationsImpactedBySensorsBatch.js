/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FaultySensorModelImpactMapReduceJob_filterRelationsImpactedBySensorsBatch';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Set log level to ensure it runs the debug log paths and they don't have errors.
    C3.app().setLogLevel(null, Logger.Level.DEBUG, '5m');
    ReliabilityTestData.clearFailedQueueEntries();

    this.sensorIds = ['sensor1', 'sensor2', 'sensor3', 'sensor4', 'sensor5'];

    this.defaultFeaturePrepSpec = ReliabilityMlFeaturePreparationSpec.make().withDefaults();
    this.featureSpecWithOnlySensors = ReliabilityMlFeaturePreparationSpec.make()
      .withDefaults()
      .withIncludeSensors(['sensor1', 'sensor2', 'sensor3'])
      .withExcludeSensors(['sensor4', 'sensor5']);
    this.unverifiableFeaturePrepSpec = ReliabilityMlFeaturePreparationSpec.make()
      .withDefaults()
      .withIncludeSensors(['sensor1', 'sensor2', 'sensor3'])
      .withExcludeSensors(['sensor4', 'sensor5'])
      .withOverrideFeatures(['feature1', 'feature2', 'feature3'])
      .withIncludeFeatures(['feature1', 'feature2', 'feature3']);

    this.defaultDatasetPrepRun = ReliabilityMlDatasetPreparationRun.make().withDefaults();
    this.datasetPrepRunWithSensors = ReliabilityMlDatasetPreparationRun.make()
      .withDefaults()
      .withIncludeSensors(['sensor1', 'sensor2', 'sensor3'])
      .withExcludeSensors(['sensor4', 'sensor5']);

    this.defaultMaskPrepSpec = ReliabilityMlMaskPreparationSpec.make().withDefaults();

    this.defaultTargetPrepSpec = ReliabilityMlTargetPreparationSpec.make().withDefaults();
    this.populatedTargetPrepSpec = ReliabilityMlTargetPreparationSpec.make()
      .withDefaults()
      .withTargetOverride('targetFeatureId1');

    this._createRunFromSubSpecs = function (run, featureSpec, maskSpec, targetSpec) {
      return run
        .withId(Uuid.create())
        .withParent('fakeAssetId')
        .withTimestamp('2020-01-01')
        .withSpec(
          ReliabilityMlDatasetPreparationSpec.make()
            .withFeaturePreparationSpec(featureSpec)
            .withMaskPreparationSpec(maskSpec)
            .withTargetPreparationSpec(targetSpec)
        );
    };

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('ReliabilityMlDatasetPreparationRun#filterRelationsImpactedBySensorsBatch', function () {
    beforeAll(function () {
      var ctx = this.ctx;
      var _createRunFromSubSpecs = this._createRunFromSubSpecs;

      var seededProject = MlProject.make('reliabilityRisk');
      var dummyPipeline = ReliabilityTestData.createDummyReliabilityRiskPipeline();
      var fs = TestApi.upsertEntity(this.ctx, 'Feature.Set', {
        id: 'ReliabilityAsset#' + filename,
        name: filename,
        features: ['dummy'],
        subjectType: ReliabilityAsset,
      }).get();

      var createRiskMlModelWithDatasetPrepRun = function (run, featureSpec, maskSpec, targetSpec) {
        var tempModel = ReliabilityRiskMlModel.createModel(
          seededProject,
          dummyPipeline,
          { features: fs },
          { target: fs }
        );
        tempModel.remove();
        var runObj = run ? _createRunFromSubSpecs(run, featureSpec, maskSpec, targetSpec) : null;
        if (run) {
          TestApi.createEntity(ctx, 'ReliabilityMlDatasetPreparationRun', runObj);
        }

        return tempModel.withId(Uuid.create()).withDatasetPreparationRun(runObj).create();
      };

      var createRelationBetweenAssetAndModel = function (assetId, modelId) {
        return TestApi.upsertEntity(ctx, 'ReliabilityAssetToRiskModelRelation', {
          to: assetId,
          from: modelId,
          route: 'fakeRoute',
          status: MlModel.Route.Status.make({
            label: MlModel.Route.Status.Label.CHAMPION,
          }),
        }).get('from.id, to.id');
      };

      this.createMapFromModelIdToModelIdPairs = function (pairs) {
        var map = {};
        pairs.forEach(function (pair) {
          map[pair[0]] = pair[1];
        });
        return map;
      };

      this.impactedModel = createRiskMlModelWithDatasetPrepRun(
        this.datasetPrepRunWithSensors,
        this.featureSpecWithOnlySensors,
        this.defaultMaskPrepSpec,
        this.defaultTargetPrepSpec
      );

      this.nonImpactedModel = createRiskMlModelWithDatasetPrepRun(
        this.defaultDatasetPrepRun.withExcludeSensors(['sensor1']).withIncludeSensors(['sensor2']),
        this.defaultFeaturePrepSpec.withExcludeSensors(['sensor1']).withIncludeSensors(['sensor2']),
        this.defaultMaskPrepSpec,
        this.defaultTargetPrepSpec
      );

      this.unverifiableModel = createRiskMlModelWithDatasetPrepRun(
        this.datasetPrepRunWithSensors,
        this.featureSpecWithOnlySensors,
        this.defaultMaskPrepSpec,
        this.populatedTargetPrepSpec
      );

      this.modelWithNoPrepRun = createRiskMlModelWithDatasetPrepRun(null, null, null, null);

      this.relationToImpactedModel = createRelationBetweenAssetAndModel(this.impactedModel.id, 'fakeAssetId');
      this.relationToNonImpactedModel = createRelationBetweenAssetAndModel(this.nonImpactedModel.id, 'fakeAssetId');
      this.relationToUnverifiableModel = createRelationBetweenAssetAndModel(this.unverifiableModel.id, 'fakeAssetId');
      this.relationToModelWithNoPrepRun = createRelationBetweenAssetAndModel(this.modelWithNoPrepRun.id, 'fakeAssetId');
      TestApi.waitForSetup(ctx);
    });

    afterAll(function () {
      this.impactedModel.remove();
      this.nonImpactedModel.remove();
      this.unverifiableModel.remove();
      this.modelWithNoPrepRun.remove();
    });

    describe('direct relation is source of truth model', function () {
      it('should return impacted when the dataset prep run is impacted', function () {
        var result = FaultySensor.ModelImpactMapReduceJob.filterRelationsImpactedBySensorsBatch(
          [this.relationToImpactedModel],
          this.createMapFromModelIdToModelIdPairs([[this.impactedModel.id, this.impactedModel.id]]),
          ['sensor1']
        );

        expect(result).toEqual(
          C3.type('FaultySensor.ImpactedBatchResult<ReliabilityAssetToRiskModelRelation>').make({
            impacted: [this.relationToImpactedModel],
            notImpacted: [],
            unverifiable: [],
            impactedSensors: [Pair.of(this.relationToImpactedModel, ['sensor1'])],
          })
        );
      });

      it('should return not impacted when the dataset prep run is not impacted', function () {
        var result = FaultySensor.ModelImpactMapReduceJob.filterRelationsImpactedBySensorsBatch(
          [this.relationToNonImpactedModel],
          this.createMapFromModelIdToModelIdPairs([[this.nonImpactedModel.id, this.nonImpactedModel.id]]),
          ['sensor1']
        );

        expect(result).toEqual(
          C3.type('FaultySensor.ImpactedBatchResult<ReliabilityAssetToRiskModelRelation>').make({
            impacted: [],
            notImpacted: [this.relationToNonImpactedModel],
            unverifiable: [],
          })
        );
      });

      it('should return unverifiable when the dataset prep run is unverifiable', function () {
        var result = FaultySensor.ModelImpactMapReduceJob.filterRelationsImpactedBySensorsBatch(
          [this.relationToUnverifiableModel],
          this.createMapFromModelIdToModelIdPairs([[this.unverifiableModel.id, this.unverifiableModel.id]]),
          ['sensor1']
        );

        expect(result).toEqual(
          C3.type('FaultySensor.ImpactedBatchResult<ReliabilityAssetToRiskModelRelation>').make({
            impacted: [],
            notImpacted: [],
            unverifiable: [this.relationToUnverifiableModel],
            impactedSensors: [Pair.of(this.relationToUnverifiableModel, ['sensor1'])],
          })
        );
      });

      it('should return unverifiable when the dataset prep run is not present', function () {
        var result = FaultySensor.ModelImpactMapReduceJob.filterRelationsImpactedBySensorsBatch(
          [this.relationToModelWithNoPrepRun],
          this.createMapFromModelIdToModelIdPairs([[this.modelWithNoPrepRun.id, this.modelWithNoPrepRun.id]]),
          ['sensor1']
        );

        expect(result).toEqual(
          C3.type('FaultySensor.ImpactedBatchResult<ReliabilityAssetToRiskModelRelation>').make({
            impacted: [],
            notImpacted: [],
            unverifiable: [this.relationToModelWithNoPrepRun],
          })
        );
      });
    });

    describe('source of truth model is not the direct relation', function () {
      it('should return impacted if the source of truth is impacted', function () {
        var result = FaultySensor.ModelImpactMapReduceJob.filterRelationsImpactedBySensorsBatch(
          [this.relationToNonImpactedModel],
          this.createMapFromModelIdToModelIdPairs([[this.nonImpactedModel.id, this.impactedModel.id]]),
          ['sensor1']
        );

        expect(result).toEqual(
          C3.type('FaultySensor.ImpactedBatchResult<ReliabilityAssetToRiskModelRelation>').make({
            impacted: [this.relationToNonImpactedModel],
            notImpacted: [],
            unverifiable: [],
            impactedSensors: [Pair.of(this.relationToNonImpactedModel, ['sensor1'])],
          })
        );
      });

      it('should support batch operation where models link to the same source of truth', function () {
        var result = FaultySensor.ModelImpactMapReduceJob.filterRelationsImpactedBySensorsBatch(
          [this.relationToNonImpactedModel, this.relationToUnverifiableModel],
          this.createMapFromModelIdToModelIdPairs([
            [this.nonImpactedModel.id, this.impactedModel.id],
            [this.unverifiableModel.id, this.impactedModel.id],
          ]),
          ['sensor1']
        );
        expect(result.impacted).toEqual(
          jasmine.arrayContaining([this.relationToNonImpactedModel, this.relationToUnverifiableModel])
        );
      });
    });
  });

  describe('ReliabilityMlFeaturePreparationSpec#wereSensorsUsedInSpecsBatch', function () {
    it('should return unverifiable if there is no feature spec applied to the data set', function () {
      var inputRun = this.defaultDatasetPrepRun;
      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(inputRun.at('spec.featurePreparationSpec')).toBeNull();
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('should mark specs as impacted when they contain the sensor', function () {
      var inputRun = this._createRunFromSubSpecs(this.datasetPrepRunWithSensors, this.featureSpecWithOnlySensors);
      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [inputRun],
          notImpacted: [],
          unverifiable: [],
          impactedSensors: [Pair.of(inputRun, ['sensor1'])],
        })
      );
    });

    it('should mark specs as not impacted when they do not contain the sensor', function () {
      var inputRun = this._createRunFromSubSpecs(this.datasetPrepRunWithSensors, this.featureSpecWithOnlySensors);
      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor4']);

      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [inputRun],
          unverifiable: [],
        })
      );
    });

    it('should mark specs as unverifiable when the feature spec and dataset spec do not match', function () {
      var inputRun = this._createRunFromSubSpecs(this.defaultDatasetPrepRun, this.featureSpecWithOnlySensors);

      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('should mark the specs as unverifiable when there are no sensors', function () {
      var inputRun = this._createRunFromSubSpecs(this.defaultDatasetPrepRun, this.defaultFeaturePrepSpec);
      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('should mark the specs as unverifiable when it uses override features', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.datasetPrepRunWithSensors,
        this.featureSpecWithOnlySensors.withOverrideFeatures(['feature1', 'feature2'])
      );

      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('should mark the specs as unverifiable when it uses include features', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.datasetPrepRunWithSensors,
        this.featureSpecWithOnlySensors.withIncludeFeatures(['feature1', 'feature2'])
      );
      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('should support batch processing', function () {
      var inputRuns = [
        this._createRunFromSubSpecs(this.datasetPrepRunWithSensors, this.featureSpecWithOnlySensors),
        this._createRunFromSubSpecs(this.defaultDatasetPrepRun, this.defaultFeaturePrepSpec),
      ];
      var result = ReliabilityMlFeaturePreparationSpec.wereSensorsUsedInSpecsBatch(inputRuns, ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [inputRuns[0]],
          notImpacted: [],
          unverifiable: [inputRuns[1]],
          impactedSensors: [Pair.of(inputRuns[0], ['sensor1'])],
        })
      );
    });
  });

  describe('ReliabilityMlTargetPreparationSpec#wereSensorsUsedInSpecsBatch', function () {
    it('should return not impacted when the run has no spec', function () {
      var inputRun = this.defaultDatasetPrepRun;
      var result = ReliabilityMlTargetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(inputRun.at('spec')).toBeNull();
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [inputRun],
          unverifiable: [],
        })
      );
    });

    it('should return not impacted when the run has no target spec', function () {
      var inputRun = this.defaultDatasetPrepRun.withSpec(ReliabilityMlDatasetPreparationSpec.make());
      var result = ReliabilityMlTargetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [inputRun],
          unverifiable: [],
        })
      );
    });

    it('should return not impacted when there is no targetOverride', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.datasetPrepRunWithSensors,
        this.defaultFeaturePrepSpec,
        this.defaultMaskPrepSpec,
        this.defaultTargetPrepSpec
      );
      var result = ReliabilityMlTargetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [inputRun],
          unverifiable: [],
        })
      );
    });

    it('should return unverifiable when the targetOverride is populated', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.datasetPrepRunWithSensors,
        this.defaultFeaturePrepSpec,
        this.defaultMaskPrepSpec,
        this.populatedTargetPrepSpec
      );
      var result = ReliabilityMlTargetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });
  });

  describe('ReliabilityMlDatasetPreparationSpec#wereSensorsUsedInSpecsBatch', function () {
    it('should work when the run has no spec', function () {
      var inputRun = this.defaultDatasetPrepRun;
      var result = ReliabilityMlDatasetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(inputRun.at('spec')).toBeNull();
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('should work when the run has no feature spec', function () {
      var inputRun = this.defaultDatasetPrepRun.withSpec(ReliabilityMlDatasetPreparationSpec.make());
      var result = ReliabilityMlDatasetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('return impacted when the sensor is in the includeSensors', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.datasetPrepRunWithSensors,
        this.featureSpecWithOnlySensors,
        this.defaultMaskPrepSpec,
        this.defaultTargetPrepSpec
      );
      var result = ReliabilityMlDatasetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [inputRun],
          notImpacted: [],
          unverifiable: [],
          impactedSensors: [Pair.of(inputRun, ['sensor1'])],
        })
      );
    });

    it('return not impacted when the sensor is in the excludeSensors', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.datasetPrepRunWithSensors,
        this.featureSpecWithOnlySensors,
        this.defaultMaskPrepSpec,
        this.defaultTargetPrepSpec
      );
      var result = ReliabilityMlDatasetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor4']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [inputRun],
          unverifiable: [],
        })
      );
    });

    it('returns unverifiable when the feature spec and dataset spec do not match', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.defaultDatasetPrepRun,
        this.featureSpecWithOnlySensors,
        this.defaultMaskPrepSpec,
        this.defaultTargetPrepSpec
      );
      var result = ReliabilityMlDatasetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
        })
      );
    });

    it('returns unverifiable when the target spec cannot be verified', function () {
      var inputRun = this._createRunFromSubSpecs(
        this.datasetPrepRunWithSensors,
        this.featureSpecWithOnlySensors,
        this.defaultMaskPrepSpec,
        this.populatedTargetPrepSpec
      );
      var result = ReliabilityMlDatasetPreparationSpec.wereSensorsUsedInSpecsBatch([inputRun], ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [],
          notImpacted: [],
          unverifiable: [inputRun],
          impactedSensors: [Pair.of(inputRun, ['sensor1'])],
        })
      );
    });

    it('handles batch processing', function () {
      var inputRuns = [
        this._createRunFromSubSpecs(
          this.datasetPrepRunWithSensors,
          this.featureSpecWithOnlySensors,
          this.defaultMaskPrepSpec,
          this.defaultTargetPrepSpec
        ),
        this._createRunFromSubSpecs(
          this.defaultDatasetPrepRun,
          this.defaultFeaturePrepSpec,
          this.defaultMaskPrepSpec,
          this.defaultTargetPrepSpec
        ),
      ];
      var result = ReliabilityMlDatasetPreparationSpec.wereSensorsUsedInSpecsBatch(inputRuns, ['sensor1']);
      expect(result).toEqual(
        C3.type('FaultySensor.ImpactedBatchResult<ReliabilityMlDatasetPreparationRun>').make({
          impacted: [inputRuns[0]],
          notImpacted: [],
          unverifiable: [inputRuns[1]],
          impactedSensors: [Pair.of(inputRuns[0], ['sensor1'])],
        })
      );
    });
  });
});
