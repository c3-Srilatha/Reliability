export interface UiSdlModalBody {

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlModalBody;

  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): UiSdlModalBody;

  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): UiSdlModalBody;

  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): UiSdlModalBody;

  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): UiSdlModalBody;

  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): UiSdlModalBody;

  readonly modalType?: UiSdlOneButtonModal | null | UiSdlTwoButtonModal | null | UiSdlThreeButtonModal | null | null;
  withModalType(modalType: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null): UiSdlModalBody;

  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): UiSdlModalBody;

  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): UiSdlModalBody;

  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): UiSdlModalBody;

  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): UiSdlModalBody;

  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): UiSdlModalBody;

  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): UiSdlModalBody;

  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): UiSdlModalBody;

  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): UiSdlModalBody;

  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): UiSdlModalBody;
}

