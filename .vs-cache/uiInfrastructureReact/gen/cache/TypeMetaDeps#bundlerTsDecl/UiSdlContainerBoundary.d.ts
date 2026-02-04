export interface UiSdlContainerBoundary {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContainerBoundary;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContainerBoundary;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContainerBoundary;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContainerBoundary;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContainerBoundary;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContainerBoundary;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContainerBoundary;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlContainerBoundary;
}

