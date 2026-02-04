export interface UiSdlErrorBoundaryReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlErrorBoundaryReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlErrorBoundaryReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlErrorBoundaryReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlErrorBoundaryReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlErrorBoundaryReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlErrorBoundaryReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlErrorBoundaryReact;

  readonly fallbackComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withFallbackComponent(fallbackComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlErrorBoundaryReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlErrorBoundaryReact;
}

