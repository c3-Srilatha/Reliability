export interface UiSdlGraphVisualizationGraphAction {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationGraphAction;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationGraphAction;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationGraphAction;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationGraphAction;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationGraphAction;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationGraphAction;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationGraphAction;

  readonly buttonText?: string | null;
  withButtonText(buttonText: string | null): UiSdlGraphVisualizationGraphAction;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlGraphVisualizationGraphAction;

  readonly role?: string | null;
  withRole(role: string | null): UiSdlGraphVisualizationGraphAction;
}

