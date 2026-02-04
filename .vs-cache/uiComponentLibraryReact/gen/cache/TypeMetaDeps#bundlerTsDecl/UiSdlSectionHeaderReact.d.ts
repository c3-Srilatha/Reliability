export interface UiSdlSectionHeaderReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSectionHeaderReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSectionHeaderReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSectionHeaderReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlSectionHeaderReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSectionHeaderReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSectionHeaderReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSectionHeaderReact;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlSectionHeaderReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlSectionHeaderReact;

  readonly infoTooltipText?: string | null;
  withInfoTooltipText(infoTooltipText: string | null): UiSdlSectionHeaderReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlSectionHeaderReact;

  readonly actionButtonsCollapseThreshold?: number | null;
  withActionButtonsCollapseThreshold(actionButtonsCollapseThreshold: number | null): UiSdlSectionHeaderReact;

  readonly actionButtons?: C3.Array<UiSdlAction | null>;
  withActionButtons(actionButtons: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlSectionHeaderReact;

  readonly category?: string | null;
  withCategory(category: string | null): UiSdlSectionHeaderReact;
}

