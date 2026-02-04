export interface UiSdlGraphVisualizationPresentationalComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationPresentationalComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationPresentationalComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationPresentationalComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationPresentationalComponent;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly cacheKey?: string | null;
  withCacheKey(cacheKey: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly clearGraphWarningModalComponentId?: string | null;
  withClearGraphWarningModalComponentId(clearGraphWarningModalComponentId: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly clusterConfig?: UiSdlGraphVisualizationNodeClusterConfig | null;
  withClusterConfig(clusterConfig: IUiSdlGraphVisualizationNodeClusterConfig | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly clusterNodeFillColor?: string | null;
  withClusterNodeFillColor(clusterNodeFillColor: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly clusterNodeOutlineColor?: string | null;
  withClusterNodeOutlineColor(clusterNodeOutlineColor: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly collapseCombinedNodesOnLoad?: boolean;
  withCollapseCombinedNodesOnLoad(collapseCombinedNodesOnLoad: boolean): UiSdlGraphVisualizationPresentationalComponent;

  readonly data?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null>;
  withData(data: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null> | {[key: string | null]: IUiSdlGraphVisualizationDataNode | null | IUiSdlGraphVisualizationDataEdge | null | null}): UiSdlGraphVisualizationPresentationalComponent;

  readonly geoJsonData?: any | null;
  withGeoJsonData(geoJsonData: any | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly graphView?: UiSdlGraphVisualizationDataGraphView | null;
  withGraphView(graphView: IUiSdlGraphVisualizationDataGraphView | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly mapboxUrl?: string | null;
  withMapboxUrl(mapboxUrl: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly mergedEdgesMapping?: any | null;
  withMergedEdgesMapping(mergedEdgesMapping: any | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly nodeColorGroupings?: any | null;
  withNodeColorGroupings(nodeColorGroupings: any | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly nodeCombineColorGroupings?: any | null;
  withNodeCombineColorGroupings(nodeCombineColorGroupings: any | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly nodeInfoGlyph?: any | null;
  withNodeInfoGlyph(nodeInfoGlyph: any | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly pingConfig?: UiSdlGraphVisualizationPingConfig | null;
  withPingConfig(pingConfig: IUiSdlGraphVisualizationPingConfig | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly regionHoverStyle?: any | null;
  withRegionHoverStyle(regionHoverStyle: any | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly regionSelectStyle?: any | null;
  withRegionSelectStyle(regionSelectStyle: any | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly resetGraphWarningModalComponentId?: string | null;
  withResetGraphWarningModalComponentId(resetGraphWarningModalComponentId: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly reversedCombineProperties?: C3.Array<string | null>;
  withReversedCombineProperties(reversedCombineProperties: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationPresentationalComponent;

  readonly selectionConfig?: UiSdlGraphVisualizationSelectionConfig | null;
  withSelectionConfig(selectionConfig: IUiSdlGraphVisualizationSelectionConfig | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly timeBarBackgroundColor?: string | null;
  withTimeBarBackgroundColor(timeBarBackgroundColor: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly timeBarColor?: string | null;
  withTimeBarColor(timeBarColor: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly timeBarHoverColor?: string | null;
  withTimeBarHoverColor(timeBarHoverColor: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly timeBarIsDimmingMode?: boolean;
  withTimeBarIsDimmingMode(timeBarIsDimmingMode: boolean): UiSdlGraphVisualizationPresentationalComponent;

  readonly timeBarIsHistogram?: boolean;
  withTimeBarIsHistogram(timeBarIsHistogram: boolean): UiSdlGraphVisualizationPresentationalComponent;

  readonly timeBarScaleHoverColor?: string | null;
  withTimeBarScaleHoverColor(timeBarScaleHoverColor: string | null): UiSdlGraphVisualizationPresentationalComponent;

  readonly useSummaryLinks?: boolean;
  withUseSummaryLinks(useSummaryLinks: boolean): UiSdlGraphVisualizationPresentationalComponent;
}

