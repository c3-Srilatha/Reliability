export interface IconStatusWithSubInformation {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): IconStatusWithSubInformation;

  readonly id?: string | null;
  withId(id: string | null): IconStatusWithSubInformation;

  readonly name?: string | null;
  withName(name: string | null): IconStatusWithSubInformation;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): IconStatusWithSubInformation;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): IconStatusWithSubInformation;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): IconStatusWithSubInformation;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): IconStatusWithSubInformation;

  readonly iconStatus?: IconStatusConfig | null;
  withIconStatus(iconStatus: IIconStatusConfig | null): IconStatusWithSubInformation;

  readonly secondaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSecondaryText(secondaryText: string | null | IUiSdlDynamicValueSpec | null | null): IconStatusWithSubInformation;
}

