export interface UiSdlGraphVisualizationContextMenuReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationContextMenuReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationContextMenuReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationContextMenuReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationContextMenuReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationContextMenuReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationContextMenuReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationContextMenuReact;

  readonly itemId?: string | null;
  withItemId(itemId: string | null): UiSdlGraphVisualizationContextMenuReact;

  readonly options?: C3.Array<UiSdlAction | null>;
  withOptions(options: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlGraphVisualizationContextMenuReact;

  readonly visible?: boolean;
  withVisible(visible: boolean): UiSdlGraphVisualizationContextMenuReact;

  readonly x?: number | null;
  withX(x: number | null): UiSdlGraphVisualizationContextMenuReact;

  readonly y?: number | null;
  withY(y: number | null): UiSdlGraphVisualizationContextMenuReact;
}

