/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlMetadataToFederatedModuleMappingsLoader', function () {
  describe('#produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlMetadataToFederatedModuleMappingsLoader.produceAll();
    });

    it('should return object with generateMetadataToFederatedModuleMappingsFiles', function () {
      expect(this.result.files).toEqual(
        UiSdlMetadataToFederatedModuleMappingsLoader.generateMetadataToFederatedModuleMappingsFiles(C3.pkg().name()),
      );
    });
  });

  describe('#generateMetadataToFederatedModuleMappingsFiles', function () {
    beforeAll(function () {
      this.result = UiSdlMetadataToFederatedModuleMappingsLoader.generateMetadataToFederatedModuleMappingsFiles(
        C3.pkg().name(),
      );
    });

    describe('types', function () {
      beforeAll(function () {
        this.typesResult = this.result.get('typeToFederatedModuleMapping.ts');
      });

      it('should have file with correct path', function () {
        expect(this.typesResult.file.url).toEqual('meta://uiInfrastructure/src/typeToFederatedModuleMapping.ts');
      });

      it('should have the correct category', function () {
        expect(this.typesResult.category).toEqual(UiSdlMetadataFileCategory.CORE);
      });

      // File content is a bit more difficult to verify intelligently
    });

    describe('dataSpecs', function () {
      beforeAll(function () {
        this.dataSpecsResult = this.result.get('typeDataSpecsToFederatedModuleMapping.ts');
      });

      it('should have file with correct path', function () {
        expect(this.dataSpecsResult.file.url).toEqual(
          'meta://uiInfrastructure/src/typeDataSpecsToFederatedModuleMapping.ts',
        );
      });

      it('should have the correct category', function () {
        expect(this.dataSpecsResult.category).toEqual(UiSdlMetadataFileCategory.CORE);
      });

      // File content is a bit more difficult to verify intelligently
    });

    describe('tests', function () {
      beforeAll(function () {
        this.testsResult = this.result.get('testToFederatedModuleMapping.ts');
      });

      it('should have file with correct path', function () {
        expect(this.testsResult.file.url).toEqual('meta://uiInfrastructure/src/testToFederatedModuleMapping.ts');
      });

      it('should have the correct category', function () {
        expect(this.testsResult.category).toEqual(UiSdlMetadataFileCategory.CORE);
      });

      // File content is a bit more difficult to verify intelligently
    });
  });

  describe('#generateTypeToFederatedModuleMapping', function () {
    beforeAll(function () {
      // Get by calling JSON.stringify(UiSdlMetadataToFederatedModuleMappingsLoader.generateTypeToFederatedModuleMapping().keys().sorted())
      this.latestEntries =
        '["UiSdlSementicTokenHelper", "UiSdlInAppDoc", "UiSdlInAppDocShowHideAction", "UiSdlAddDefaultProps", "UiSdlAppInitAction","UiSdlAppGetAction","Ann.UiBuildNestedDataSpecs","Ajax","Ann.UiComponentCategorizer","Ann.UiImportGenerator","Ann.UiSdlDataSpec","Ann.UiSdlDropTargetField","App.Metric.Dashboard.Filter","App.Metric.Dashboard.FilterDeclared","App.Metric.Dashboard.FilterFreeform","App.Metric.Dashboard.FilterTagRange","App.Metric.Variable.AbstractOptions","App.Metric.Variable.TagValue","App.Metric.Variable.DeclaredOptions","App.Metric.Variable","BaseType","BundlerAbstractUiComponent","BundlerTestApp.InnerTypeEpic","BundlerTestAppAmbiguousType","BundlerTestAppChart","BundlerTestAppChartMixing","BundlerTestAppChartMixingReact","BundlerTestAppChartReact","BundlerTestAppComponent","BundlerTestAppComponentReact","BundlerTestAppComposingRefAncestorType","BundlerTestAppComposingRefParentType","BundlerTestAppComposingRefParentTypeReact","BundlerTestAppData","BundlerTestAppDeepNestedComponent","BundlerTestAppDeepNestedComponentDataSpec","BundlerTestAppDeepNestedComponentReact","BundlerTestAppDoDataMerge","BundlerTestAppDoDataMergeReact","BundlerTestAppEnumType","BundlerTestAppField","BundlerTestAppFieldType","BundlerTestAppFieldTypeField","BundlerTestAppFieldTypeReact","BundlerTestAppFormGrid","BundlerTestAppFormGridDataSpec","BundlerTestAppFormGridReact","BundlerTestAppGrid","BundlerTestAppGridDataSpec","BundlerTestAppGridReact","BundlerTestAppHeading","BundlerTestAppHeadingReact","BundlerTestAppInheritanceChild","BundlerTestAppInheritanceChild.Inner","BundlerTestAppInheritanceChild.InheritInner","BundlerTestAppInheritanceParent","BundlerTestAppMultiDataSpecComponentDataSpec","BundlerTestAppNestedComponents","BundlerTestAppNestedComponentsReact","BundlerTestAppNestedType","BundlerTestAppNestedTypeDataSpec","BundlerTestAppNestedTypeReact","BundlerTestAppPrivateConstField","BundlerTestAppSassGlobImport","BundlerTestAppSassGlobImportReact","BundlerTestAppSassImportTitle","BundlerTestAppSassImportTitleReact","BundlerTestAppSearchFilter","BundlerTestAppSingleSearch","BundlerTestAppSingleSearchDataSpec","BundlerTestAppSite","BundlerTestAppSiteReact","BundlerTestAppTabPanel","BundlerTestAppTabPanelReact","BundlerTestAppTitleWithChildrenLayout","BundlerTestAppTitleWithChildrenLayoutReact","BundlerTestAppTypeScriptSourceCodeTypeModule","BundlerTestAppTypeScriptSourceCodeTypeScript","BundlerTestAppTypeScriptType","BundlerTestApplicationState","BundlerTestRenderCondition","TypeWithSourceCodeTypeModule","TypeWithSourceCodeTypeSource","UiSdlApplicationState","UiSdlApplicationStateAddDataEpic","UiSdlApplicationStateDataAddAction","UiSdlApplicationStateDataDeleteAction","UiSdlApplicationStateDataModifyAction","UiSdlApplicationStateDeleteDataEpic","UiSdlApplicationStateInitializeAction","UiSdlApplicationStateModifyDataEpic","UiSdlApplicationStateRef","UiSdlApplicationStateValueParam","UiSdlArbitraryComponentValueDangerouslySetAction","UiSdlArgumentsMergeAction","UiSdlBaseDataGridCheckboxPrimaryButtonAction","UiSdlBaseDataGridCheckboxSecondaryButtonAction","UiSdlCancelDataRequestAction","UiSdlChangeCancelAction","UiSdlChildrenMetadataUpdateAction","UiSdlChildrenUpdateAction","UiSdlChunkLoadingErrorAction","UiSdlComponent","UiSdlComponentAdvancedDataSpec","UiSdlComponentDataSpec","UiSdlComponentDataSpecFieldSetting","UiSdlComponentDataSpecSetting","UiSdlComponentDataSpecSortableFieldSetting","UiSdlComponentDataSpecStateParam","UiSdlComponentHeader","UiSdlComponentSecondaryText","UiSdlComponentStateParam","UiSdlComponentSubtitle","UiSdlComponentTitle","UiSdlComponentsAndPages","UiSdlConditionalOperator","UiSdlConfigGetAction","UiSdlConfigSetAction","UiSdlConnected","UiSdlCrossTypeDataSpecDependence","UiSdlCurrentPathSetAction","UiSdlDataAddAction","UiSdlDataConfigUpdateAction","UiSdlDataContext","UiSdlDataDeleteAction","UiSdlDataLoadAction","UiSdlDataLoadedAction","UiSdlDataModifyAction","UiSdlDataReceiveAction","UiSdlDataRecordMappingDependingField","UiSdlDataRedux","UiSdlDataRequestAction","UiSdlDataRequestEpic","UiSdlDataSaveAction","UiSdlDataSetAction","UiSdlDataSpecArgumentsMergeAction","UiSdlDataSpecDetails","UiSdlDataTransform","UiSdlDataTypeUpdateAction","UiSdlDateTime","UiSdlDateTimeParamKindFormat","UiSdlDateTimeParamKindFormatSpec","UiSdlDefaultStyleIdSetAction","UiSdlDefinedValueParam","UiSdlDensityIdSetAction","UiSdlDuration","UiSdlDynamicComponentMetadata","UiSdlDynamicComponentMountedAction","UiSdlDynamicComponentRenderer","UiSdlDynamicComponentRendererDataSpec","UiSdlDynamicOptionsGeneratable","UiSdlDynamicValueSpec","UiSdlDynamicValueSpecParam","UiSdlDynamicValueSpecParamFormat","UiSdlDynamicValueSpecParamFormatSpec","UiSdlEffectActionSpec","UiSdlEffectPayloadForwarder","UiSdlEffectPayloadStrategyHandler","UiSdlEffectTrigger","UiSdlEffectableState","UiSdlEpic","UiSdlEpicRedirect","UiSdlErrorBoundary","UiSdlErrorReceiveAction","UiSdlEvalBasedDataSpec","UiSdlEvalBasedDataSpecSetting","UiSdlFieldBasedDataDynamicValueSpecSetting","UiSdlFieldBasedDataSpec","UiSdlFieldBasedDataSpecSetting","UiSdlFieldsDependenceMapping","UiSdlFilter","UiSdlGlobalActionType","UiSdlHelpers","UiSdlHiddenThemingIdSetAction","UiSdlI18nContext","UiSdlIdCreateAction","UiSdlInactivityWarningModalShowAction","UiSdlInitialRenderAction","UiSdlLinkTemplate","UiSdlLoadedDataHandleAction","UiSdlLogger","UiSdlMetadataChangeSet","UiSdlMetricBasedDataSpec","UiSdlMetricBasedDataSpecSetting","UiSdlMultiDynamicValueParam","UiSdlNestedComponent","UiSdlNumberParamKindFormat","UiSdlNumberParamKindFormatSpec","UiSdlPageContainer","UiSdlPageParam","UiSdlPageParamsSetAction","UiSdlParamExtractionContext","UiSdlPartiallyAppliedActionInfo","UiSdlPathAndPageParamsConfirmAction","UiSdlPerformance","UiSdlPerformanceMeasurementContext","UiSdlPeriod","UiSdlPersistChangeErrorUpdateAction","UiSdlPersistChangesEpic","UiSdlReduxAction","UiSdlRegisterTriggersAction","UiSdlRouter","UiSdlRoutesSetAction","UiSdlSessionExpiredPage","UiSdlSimpleEpic","UiSdlSingletonApplicationState","UiSdlSite","UiSdlSpecHelperTestTypeChild","UiSdlState","UiSdlStateValueParam","UiSdlStyleContext","UiSdlStyleContextDataSpec","UiSdlStyleIdSetAction","UiSdlTenantTagAwareWorker","UiSdlTestType","UiSdlTestTypeDataSpec","UiSdlThemeContext","UiSdlThemeContextDataSpec","UiSdlThemeIdSetAction","UiSdlThemingUpdateEpic","UiSdlTransformEvaluateResultToTuples","UiSdlTransformFetchResultToArray","UiSdlTunnelConfiguration","UiSdlTunnelConfigurationSetAction","UiSdlTypeWorker","UiSdlTypeWorkerFieldNameFilterSpec","UiSdlUniqueId","UiSdlUniqueIdCreateEpic","UiSdlUpdateDataCountAction","UiSdlUserContextGetAction","UiSdlUserContextInitAction","UiSdlUserGetAction","UiSdlUserInitAction","UiSdlUserSessionExpiredAction","UiSdlWebWorker","WithDataTransforms"]';
      this.result = UiSdlMetadataToFederatedModuleMappingsLoader.generateTypeToFederatedModuleMapping();
    });

    describe('to track type to federated module mapping', function () {
      it('should check size of result', function () {
        /**
         * Track the number of types added so we don't adversely affect bundling times.
         *
         * If the difference contains values, it means you are adding files to the federated modules and since it might happen inadvertedly
         * through code generation or other loaders, we have this test to ensure this only happens on purpose.
         *
         * Update this.latestEntries as needed.
         */
        const diff = this.result.keys().difference(JSON.parse(this.latestEntries)).collect();
        const noExtraFiles =
          Array.isArray(diff) &&
          (diff.length === 0 || (diff.length === 1 && diff[0] === 'DataFusion.Ui.DataIntegUtil'));

        expect(noExtraFiles).withContext('Make sure new files were generated on purpose').toBeTrue();
      });
    });

    describe('for UiSdlComponent types', function () {
      it('includes BundlerTestAppGrid', function () {
        expect(this.result.get('BundlerTestAppGrid')).toEqual('uiInfrastructure');
      });

      it('includes BundlerTestAppGridReact', function () {
        expect(this.result.get('BundlerTestAppGridReact')).toEqual('uiInfrastructure');
      });
    });

    describe('for non-UiSdlComponent types', function () {
      it('does include BundlerTestAppInheritanceParent', function () {
        expect(this.result.get('BundlerTestAppInheritanceParent')).toBeDefined();
      });

      it('does include BundlerTestAppInheritanceChild', function () {
        expect(this.result.get('BundlerTestAppInheritanceChild')).toBeDefined();
      });

      it('does include BundlerTestAppData', function () {
        expect(this.result.get('BundlerTestAppData')).toBeDefined();
      });

      it('does include BundlerTestAppGridDataSpec', function () {
        expect(this.result.get('BundlerTestAppGridDataSpec')).toBeDefined();
      });
    });

    describe('for React renderer types', function () {
      it('includes BundlerTestAppComponentReact', function () {
        expect(this.result.get('BundlerTestAppComponentReact')).toEqual('uiInfrastructure');
      });
    });

    describe('for infrastructure types', function () {
      it('does include UiSdlComponent', function () {
        expect(this.result.get('UiSdlComponent')).toEqual('uiInfrastructure');
      });

      it('does include UiSdlApplicationState', function () {
        expect(this.result.get('UiSdlApplicationState')).toEqual('uiInfrastructure');
      });

      it('does include UiSdlConnected', function () {
        expect(this.result.get('UiSdlConnected')).toEqual('uiInfrastructure');
      });

      it('does include UiSdlLogger', function () {
        expect(this.result.get('UiSdlLogger')).toEqual('uiInfrastructure');
      });
    });
  });

  describe('#generateTypeDataSpecsToFederatedModuleMapping', function () {
    beforeAll(function () {
      this.result = UiSdlMetadataToFederatedModuleMappingsLoader.generateTypeDataSpecsToFederatedModuleMapping();
      this.dataSpecSuffix = 'DataSpecs';
    });

    it('should check size of result', function () {
      // Track the number of type data specs added so we don't adversely affect bundling times
      expect(this.result.size).toEqual(42);
    });

    it('should ignore abstract UiSdlComponent types', function () {
      expect(this.result.get('BundlerAbstractUiComponent' + this.dataSpecSuffix)).toBeNull();
    });

    it('should ignore ReactComponent types', function () {
      expect(this.result.get('BundlerTestAppComponentReact' + this.dataSpecSuffix)).toBeNull();
    });

    it('should not have non UiSdlComponent types', function () {
      expect(this.result.get('UiSdlComponentTitle' + this.dataSpecSuffix)).toBeNull();
    });

    it('should have correct keys', function () {
      // Somewhat random sampling of types to check
      expect(this.result.get('BundlerTestAppChart' + this.dataSpecSuffix)).toBe('uiInfrastructure');
      expect(this.result.get('UiSdlSpecHelperTestTypeChild' + this.dataSpecSuffix)).toBe('uiInfrastructure');
      expect(this.result.get('UiSdlNestedComponent' + this.dataSpecSuffix)).toBe('uiInfrastructure');
    });
  });

  describe('#generateComponentToFederatedModuleMapping', function () {
    beforeAll(function () {
      this.result = UiSdlMetadataToFederatedModuleMappingsLoader.generateComponentToFederatedModuleMapping();
    });

    it('should check size of result', function () {
      // Track the number of components added so we don't adversely affect bundling times
      expect(this.result.size).toEqual(51);
    });

    it('includes components', function () {
      expect(this.result.get('BundlerTestApp.ComponentReact')).toContain('uiInfrastructure_');
      expect(this.result.get('BundlerTestApp.ConnectedComponentReact')).toContain('uiInfrastructure_');
      expect(this.result.get('BundlerTestApp.ConnectedGrid')).toContain('uiInfrastructure_');
      expect(this.result.get('BundlerTestApp.ConnectedLayout')).toContain('uiInfrastructure_');
      expect(this.result.get('BundlerTestApp.Dashboard')).toContain('uiInfrastructure_');
      expect(this.result.get('BundlerTestApp.TestReactComponent')).toContain('uiInfrastructure_');
      /*
       * TODO: Include custom components defined in test/ui/src/
       * expect(this.result.get('BundlerTestApp.CustomTsxComponent')).toEqual('uiInfrastructure');
       */
    });
  });

  describe('#generateTestToFederatedModuleMapping', function () {
    beforeAll(function () {
      this.result = UiSdlMetadataToFederatedModuleMappingsLoader.generateTestToFederatedModuleMapping();
    });

    it('should exclude webpack luke tests', function () {
      expect(this.result.get('test_index_html.js')).toBeNull();
    });

    // TODO: UI-11474 The test was moved to uiInfrastructureReact
    xit('should include all webpack ts tests', function () {
      expect(this.result.get('test_webpackDummy.ts')).toEqual('uiInfrastructure_tests_1');
    });
  });

  describe('#populateComponentToFederatedModuleMappingByPage', function () {
    beforeAll(function () {
      // Simulates the metadata returned from UiSdlMetadataBundler.partitionUiMetadata('PAGE', true);
      var pages = {
        PageWithGridAndNav: {
          PageWithGridAndNav: {},
          Grid: {},
          Nav: {},
        },
        PageWithNav: {
          PageWithNav: {},
          Nav: {},
        },
      };
      // Simulates a component to package mapping based on UiSdlMetadataFile package
      var componentToPackage = {
        Nav: 'packageA',
        Grid: 'packageA',
        PageWithGridAndNav: 'packageA',
        PageWithNav: 'packageA',
        // Component that doesn't belong to a page
        UnreferencedComponent: 'packageA',
        // Custom TSX Component, simulates a component that is only imported with code, not referenced in metadata
        CustomTsx: 'packageB',
      };
      this.result = UiSdlMetadataToFederatedModuleMappingsLoader.populateComponentToFederatedModuleMappingByPage(
        pages,
        componentToPackage,
        10,
      );
    });

    it('should include components referenced in a page', function () {
      expect(this.result.get('PageWithNav')).toEqual('packageA_1');
      expect(this.result.get('PageWithGridAndNav')).toEqual('packageA_1');
      expect(this.result.get('Grid')).toEqual('packageA_1');
      expect(this.result.get('Nav')).toEqual('packageA_1');
    });

    it('should include components not referenced in a page', function () {
      /**
       * This one gets added to a separate federated module because we ensure
       * unreferenced components are not included with other packages to avoid
       * too much unnecessary code in the page bundles.
       */
      expect(this.result.get('UnreferencedComponent')).toEqual('packageA_2');
      expect(this.result.get('CustomTsx')).toEqual('packageB_1');
    });
  });
});
