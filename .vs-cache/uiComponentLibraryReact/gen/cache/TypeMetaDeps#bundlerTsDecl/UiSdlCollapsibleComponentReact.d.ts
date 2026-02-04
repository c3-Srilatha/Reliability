export interface UiSdlCollapsibleComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCollapsibleComponentReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCollapsibleComponentReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCollapsibleComponentReact;

  readonly dataSpec?: UiSdlCollapsibleComponentDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCollapsibleComponentDataSpec | null): UiSdlCollapsibleComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollapsibleComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCollapsibleComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCollapsibleComponentReact;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlCollapsibleComponentReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlCollapsibleComponentReact;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlCollapsibleComponentReact;

  readonly header?: UiSdlCollapsibleComponentHeader | null;
  withHeader(header: IUiSdlCollapsibleComponentHeader | null): UiSdlCollapsibleComponentReact;

  readonly infoTooltipText?: string | null;
  withInfoTooltipText(infoTooltipText: string | null): UiSdlCollapsibleComponentReact;
}

