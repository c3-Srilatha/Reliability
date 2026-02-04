export interface IconStatusWithSubInformationReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): IconStatusWithSubInformationReact;

  readonly id?: string | null;
  withId(id: string | null): IconStatusWithSubInformationReact;

  readonly name?: string | null;
  withName(name: string | null): IconStatusWithSubInformationReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): IconStatusWithSubInformationReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): IconStatusWithSubInformationReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): IconStatusWithSubInformationReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): IconStatusWithSubInformationReact;

  readonly iconStatus?: IconStatusConfig | null;
  withIconStatus(iconStatus: IIconStatusConfig | null): IconStatusWithSubInformationReact;

  readonly secondaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSecondaryText(secondaryText: string | null | IUiSdlDynamicValueSpec | null | null): IconStatusWithSubInformationReact;
}

