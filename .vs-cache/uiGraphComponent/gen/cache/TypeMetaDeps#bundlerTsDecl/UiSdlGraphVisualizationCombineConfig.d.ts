export interface UiSdlGraphVisualizationCombineConfig {

  readonly combineLevel?: number | null;
  withCombineLevel(combineLevel: number | null): UiSdlGraphVisualizationCombineConfig;

  readonly collapseCombinedNodesOnLoad?: boolean;
  withCollapseCombinedNodesOnLoad(collapseCombinedNodesOnLoad: boolean): UiSdlGraphVisualizationCombineConfig;

  readonly combineOutlineColor?: string | null;
  withCombineOutlineColor(combineOutlineColor: string | null): UiSdlGraphVisualizationCombineConfig;

  readonly combineProperties?: C3.Array<UiSdlFieldBasedDataSpecSetting | null>;
  withCombineProperties(combineProperties: C3.Array<UiSdlFieldBasedDataSpecSetting | null> | Array<IUiSdlFieldBasedDataSpecSetting | null>): UiSdlGraphVisualizationCombineConfig;

  readonly combineShape?: string | null;
  withCombineShape(combineShape: string | null): UiSdlGraphVisualizationCombineConfig;

  readonly summaryLinkColor?: string | null;
  withSummaryLinkColor(summaryLinkColor: string | null): UiSdlGraphVisualizationCombineConfig;

  readonly summaryLinkLineStyle?: string | null;
  withSummaryLinkLineStyle(summaryLinkLineStyle: string | null): UiSdlGraphVisualizationCombineConfig;

  readonly summaryLinkWidth?: number | null;
  withSummaryLinkWidth(summaryLinkWidth: number | null): UiSdlGraphVisualizationCombineConfig;

  readonly useSummaryLinks?: boolean;
  withUseSummaryLinks(useSummaryLinks: boolean): UiSdlGraphVisualizationCombineConfig;

  readonly enableDragNodesIntoOrOutOfCombo?: boolean;
  withEnableDragNodesIntoOrOutOfCombo(enableDragNodesIntoOrOutOfCombo: boolean): UiSdlGraphVisualizationCombineConfig;

  readonly enableSelectMultipleNodesForNewCombo?: boolean;
  withEnableSelectMultipleNodesForNewCombo(enableSelectMultipleNodesForNewCombo: boolean): UiSdlGraphVisualizationCombineConfig;
}

