export interface UiSdlGraphVisualizationGraphActionReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationGraphActionReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationGraphActionReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationGraphActionReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlGraphVisualizationGraphActionReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationGraphActionReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationGraphActionReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationGraphActionReact;

  readonly buttonText?: string | null;
  withButtonText(buttonText: string | null): UiSdlGraphVisualizationGraphActionReact;

  readonly iconClass?: string | null;
  withIconClass(iconClass: string | null): UiSdlGraphVisualizationGraphActionReact;

  readonly role?: string | null;
  withRole(role: string | null): UiSdlGraphVisualizationGraphActionReact;
}

