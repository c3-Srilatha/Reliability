export interface UiSdlContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContainer;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlContainer;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlContainer;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlContainer;

  readonly hoverDescription?: string | null;
  withHoverDescription(hoverDescription: string | null): UiSdlContainer;

  readonly dataItem?: any | null;
  withDataItem(dataItem: any | null): UiSdlContainer;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlContainer;
}

