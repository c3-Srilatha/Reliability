export interface UiSdlContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlContainerReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlContainerReact;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlContainerReact;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlContainerReact;

  readonly hoverDescription?: string | null;
  withHoverDescription(hoverDescription: string | null): UiSdlContainerReact;

  readonly dataItem?: any | null;
  withDataItem(dataItem: any | null): UiSdlContainerReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlContainerReact;
}

