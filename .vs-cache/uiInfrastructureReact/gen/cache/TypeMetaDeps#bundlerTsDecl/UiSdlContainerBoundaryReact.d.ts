export interface UiSdlContainerBoundaryReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContainerBoundaryReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContainerBoundaryReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContainerBoundaryReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContainerBoundaryReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContainerBoundaryReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContainerBoundaryReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContainerBoundaryReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlContainerBoundaryReact;
}

