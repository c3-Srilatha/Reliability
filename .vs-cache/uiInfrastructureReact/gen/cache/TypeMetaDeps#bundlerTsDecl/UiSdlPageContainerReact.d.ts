export interface UiSdlPageContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPageContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPageContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPageContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlPageContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPageContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPageContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPageContainerReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlPageContainerReact;
}

