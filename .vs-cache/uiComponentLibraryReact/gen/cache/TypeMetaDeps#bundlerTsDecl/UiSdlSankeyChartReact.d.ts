export interface UiSdlSankeyChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSankeyChartReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSankeyChartReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSankeyChartReact;

  readonly dataSpec?: UiSdlSankeyChartDataSpec | null;
  withDataSpec(dataSpec: IUiSdlSankeyChartDataSpec | null): UiSdlSankeyChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSankeyChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSankeyChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSankeyChartReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlSankeyChartReact;

  readonly defaultColors?: C3.Array<string | null>;
  withDefaultColors(defaultColors: C3.Array<string | null> | Array<string | null>): UiSdlSankeyChartReact;

  readonly data?: UiSdlSankeyChartData | null;
  withData(data: IUiSdlSankeyChartData | null): UiSdlSankeyChartReact;

  readonly header?: UiSdlComponentTitle | null;
  withHeader(header: IUiSdlComponentTitle | null): UiSdlSankeyChartReact;

  readonly exportable?: boolean;
  withExportable(exportable: boolean): UiSdlSankeyChartReact;

  readonly chartActions?: C3.Array<UiSdlActionGroup | null>;
  withChartActions(chartActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlSankeyChartReact;

  readonly chartActionsCollapseThreshold?: number | null;
  withChartActionsCollapseThreshold(chartActionsCollapseThreshold: number | null): UiSdlSankeyChartReact;

  readonly overlapReduction?: boolean;
  withOverlapReduction(overlapReduction: boolean): UiSdlSankeyChartReact;

  readonly currentlyClickedNode?: string | null;
  withCurrentlyClickedNode(currentlyClickedNode: string | null): UiSdlSankeyChartReact;

  readonly currentlyClickedEdge?: C3.Array<string | null>;
  withCurrentlyClickedEdge(currentlyClickedEdge: C3.Array<string | null> | Array<string | null>): UiSdlSankeyChartReact;
}

