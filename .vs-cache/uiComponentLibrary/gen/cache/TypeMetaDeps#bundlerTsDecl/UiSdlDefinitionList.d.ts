export interface UiSdlDefinitionList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDefinitionList;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDefinitionList;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDefinitionList;

  readonly dataSpec?: UiSdlDefinitionListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDefinitionListDataSpec | null): UiSdlDefinitionList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDefinitionList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDefinitionList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDefinitionList;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlDefinitionList;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlDefinitionList;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlDefinitionList;

  readonly equalWidth?: boolean;
  withEqualWidth(equalWidth: boolean): UiSdlDefinitionList;

  readonly divider?: boolean;
  withDivider(divider: boolean): UiSdlDefinitionList;

  readonly ordering?: string | null;
  withOrdering(ordering: string | null): UiSdlDefinitionList;

  readonly rowSpacing?: string | null;
  withRowSpacing(rowSpacing: string | null): UiSdlDefinitionList;
}

