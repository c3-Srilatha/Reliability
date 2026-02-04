export interface UiSdlModal {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlModal;

  readonly id?: string | null;
  withId(id: string | null): UiSdlModal;

  readonly name?: string | null;
  withName(name: string | null): UiSdlModal;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlModal;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlModal;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlModal;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlModal;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlModal;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): UiSdlModal;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlModal;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlModal;

  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): UiSdlModal;

  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): UiSdlModal;

  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): UiSdlModal;

  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): UiSdlModal;

  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): UiSdlModal;

  readonly modalType?: UiSdlOneButtonModal | null | UiSdlTwoButtonModal | null | UiSdlThreeButtonModal | null | null;
  withModalType(modalType: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null): UiSdlModal;

  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): UiSdlModal;

  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): UiSdlModal;

  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): UiSdlModal;

  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): UiSdlModal;

  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): UiSdlModal;

  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): UiSdlModal;

  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): UiSdlModal;

  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): UiSdlModal;

  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): UiSdlModal;
}

