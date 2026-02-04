export interface UiSdlSectionHeader {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSectionHeader;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSectionHeader;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSectionHeader;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlSectionHeader;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSectionHeader;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSectionHeader;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSectionHeader;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlSectionHeader;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlSectionHeader;

  readonly infoTooltipText?: string | null;
  withInfoTooltipText(infoTooltipText: string | null): UiSdlSectionHeader;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlSectionHeader;

  readonly actionButtonsCollapseThreshold?: number | null;
  withActionButtonsCollapseThreshold(actionButtonsCollapseThreshold: number | null): UiSdlSectionHeader;

  readonly actionButtons?: C3.Array<UiSdlAction | null>;
  withActionButtons(actionButtons: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlSectionHeader;

  readonly category?: string | null;
  withCategory(category: string | null): UiSdlSectionHeader;
}

