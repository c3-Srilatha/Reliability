export interface UiSdlSankeyChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSankeyChart;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSankeyChart;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSankeyChart;

  readonly dataSpec?: UiSdlSankeyChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlSankeyChartDataSpec | null): UiSdlSankeyChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSankeyChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSankeyChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSankeyChart;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlSankeyChart;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlSankeyChart;

  readonly data?: UiSdlSankeyChartData | null;
  withData(data: IUiSdlSankeyChartData | null): UiSdlSankeyChart;

  readonly header?: UiSdlComponentTitle | null;
  withHeader(header: IUiSdlComponentTitle | null): UiSdlSankeyChart;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlSankeyChart;

  readonly chartActions?: C3.Array<UiSdlActionGroup | null>;
  withChartActions(chartActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlSankeyChart;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlSankeyChart;

  readonly overlapReduction?: boolean;
  withOverlapReduction(overlapReduction: boolean): UiSdlSankeyChart;

  readonly currentlyClickedNode?: string | null;
  withCurrentlyClickedNode(currentlyClickedNode: string | null): UiSdlSankeyChart;

  readonly currentlyClickedEdge?: C3.Array<string | null>;
  withCurrentlyClickedEdge(currentlyClickedEdge: C3.Array<string | null> | Array<string | null>): UiSdlSankeyChart;
}

