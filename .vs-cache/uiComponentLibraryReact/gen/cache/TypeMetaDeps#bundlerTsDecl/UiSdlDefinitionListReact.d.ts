export interface UiSdlDefinitionListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDefinitionListReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDefinitionListReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDefinitionListReact;

  readonly dataSpec?: UiSdlDefinitionListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDefinitionListDataSpec | null): UiSdlDefinitionListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDefinitionListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDefinitionListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDefinitionListReact;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlDefinitionListReact;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlDefinitionListReact;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlDefinitionListReact;

  readonly equalWidth?: boolean;
  withEqualWidth(equalWidth: boolean): UiSdlDefinitionListReact;

  readonly divider?: boolean;
  withDivider(divider: boolean): UiSdlDefinitionListReact;

  readonly ordering?: string | null;
  withOrdering(ordering: string | null): UiSdlDefinitionListReact;

  readonly rowSpacing?: string | null;
  withRowSpacing(rowSpacing: string | null): UiSdlDefinitionListReact;
}

