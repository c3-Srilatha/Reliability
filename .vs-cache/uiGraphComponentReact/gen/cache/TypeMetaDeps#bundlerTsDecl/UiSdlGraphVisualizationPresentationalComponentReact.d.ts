export interface UiSdlGraphVisualizationPresentationalComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly cacheKey?: string | null;
  withCacheKey(cacheKey: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly clearGraphWarningModalComponentId?: string | null;
  withClearGraphWarningModalComponentId(clearGraphWarningModalComponentId: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly clusterConfig?: UiSdlGraphVisualizationNodeClusterConfig | null;
  withClusterConfig(clusterConfig: IUiSdlGraphVisualizationNodeClusterConfig | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly clusterNodeFillColor?: string | null;
  withClusterNodeFillColor(clusterNodeFillColor: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly clusterNodeOutlineColor?: string | null;
  withClusterNodeOutlineColor(clusterNodeOutlineColor: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly collapseCombinedNodesOnLoad?: boolean;
  withCollapseCombinedNodesOnLoad(collapseCombinedNodesOnLoad: boolean): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly data?: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null>;
  withData(data: C3.Map<string | null, UiSdlGraphVisualizationDataNode | null | UiSdlGraphVisualizationDataEdge | null | null> | {[key: string | null]: IUiSdlGraphVisualizationDataNode | null | IUiSdlGraphVisualizationDataEdge | null | null}): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly geoJsonData?: any | null;
  withGeoJsonData(geoJsonData: any | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly graphView?: UiSdlGraphVisualizationDataGraphView | null;
  withGraphView(graphView: IUiSdlGraphVisualizationDataGraphView | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly mapboxUrl?: string | null;
  withMapboxUrl(mapboxUrl: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly mergedEdgesMapping?: any | null;
  withMergedEdgesMapping(mergedEdgesMapping: any | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly nodeColorGroupings?: any | null;
  withNodeColorGroupings(nodeColorGroupings: any | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly nodeCombineColorGroupings?: any | null;
  withNodeCombineColorGroupings(nodeCombineColorGroupings: any | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly nodeInfoGlyph?: any | null;
  withNodeInfoGlyph(nodeInfoGlyph: any | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly pingConfig?: UiSdlGraphVisualizationPingConfig | null;
  withPingConfig(pingConfig: IUiSdlGraphVisualizationPingConfig | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly regionHoverStyle?: any | null;
  withRegionHoverStyle(regionHoverStyle: any | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly regionSelectStyle?: any | null;
  withRegionSelectStyle(regionSelectStyle: any | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly resetGraphWarningModalComponentId?: string | null;
  withResetGraphWarningModalComponentId(resetGraphWarningModalComponentId: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly reversedCombineProperties?: C3.Array<string | null>;
  withReversedCombineProperties(reversedCombineProperties: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly selectionConfig?: UiSdlGraphVisualizationSelectionConfig | null;
  withSelectionConfig(selectionConfig: IUiSdlGraphVisualizationSelectionConfig | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly timeBarBackgroundColor?: string | null;
  withTimeBarBackgroundColor(timeBarBackgroundColor: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly timeBarColor?: string | null;
  withTimeBarColor(timeBarColor: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly timeBarHoverColor?: string | null;
  withTimeBarHoverColor(timeBarHoverColor: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly timeBarIsDimmingMode?: boolean;
  withTimeBarIsDimmingMode(timeBarIsDimmingMode: boolean): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly timeBarIsHistogram?: boolean;
  withTimeBarIsHistogram(timeBarIsHistogram: boolean): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly timeBarScaleHoverColor?: string | null;
  withTimeBarScaleHoverColor(timeBarScaleHoverColor: string | null): UiSdlGraphVisualizationPresentationalComponentReact;

  readonly useSummaryLinks?: boolean;
  withUseSummaryLinks(useSummaryLinks: boolean): UiSdlGraphVisualizationPresentationalComponentReact;
}

