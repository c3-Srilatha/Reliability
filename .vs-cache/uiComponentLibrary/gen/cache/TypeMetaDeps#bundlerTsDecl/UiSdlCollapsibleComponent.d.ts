export interface UiSdlCollapsibleComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCollapsibleComponent;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCollapsibleComponent;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCollapsibleComponent;

  readonly dataSpec?: UiSdlCollapsibleComponentDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCollapsibleComponentDataSpec | null): UiSdlCollapsibleComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollapsibleComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCollapsibleComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCollapsibleComponent;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlCollapsibleComponent;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlCollapsibleComponent;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlCollapsibleComponent;

  readonly header?: UiSdlCollapsibleComponentHeader | null;
  withHeader(header: IUiSdlCollapsibleComponentHeader | null): UiSdlCollapsibleComponent;

  readonly infoTooltipText?: string | null;
  withInfoTooltipText(infoTooltipText: string | null): UiSdlCollapsibleComponent;
}

