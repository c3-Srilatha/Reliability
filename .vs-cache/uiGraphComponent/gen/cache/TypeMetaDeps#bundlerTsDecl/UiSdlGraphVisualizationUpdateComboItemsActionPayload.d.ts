export interface UiSdlGraphVisualizationUpdateComboItemsActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationUpdateComboItemsActionPayload;

  readonly item?: UiSdlGraphVisualizationDataNode | null;
  withItem(item: IUiSdlGraphVisualizationDataNode | null): UiSdlGraphVisualizationUpdateComboItemsActionPayload;

  readonly items?: C3.Array<UiSdlGraphVisualizationDataNode | null>;
  withItems(items: C3.Array<UiSdlGraphVisualizationDataNode | null> | Array<IUiSdlGraphVisualizationDataNode | null>): UiSdlGraphVisualizationUpdateComboItemsActionPayload;
}

