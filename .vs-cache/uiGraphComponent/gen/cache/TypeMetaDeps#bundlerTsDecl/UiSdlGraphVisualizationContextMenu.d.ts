export interface UiSdlGraphVisualizationContextMenu {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationContextMenu;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationContextMenu;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationContextMenu;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationContextMenu;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationContextMenu;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationContextMenu;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationContextMenu;

  readonly itemId?: string | null;
  withItemId(itemId: string | null): UiSdlGraphVisualizationContextMenu;

  readonly options?: C3.Array<UiSdlAction | null>;
  withOptions(options: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlGraphVisualizationContextMenu;

  readonly visible?: boolean;
  withVisible(visible: boolean): UiSdlGraphVisualizationContextMenu;

  readonly x?: number | null;
  withX(x: number | null): UiSdlGraphVisualizationContextMenu;

  readonly y?: number | null;
  withY(y: number | null): UiSdlGraphVisualizationContextMenu;
}

