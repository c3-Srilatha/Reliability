export interface UiSdlMultiStepModalStep {

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlMultiStepModalStep;

  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): UiSdlMultiStepModalStep;

  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): UiSdlMultiStepModalStep;

  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): UiSdlMultiStepModalStep;

  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): UiSdlMultiStepModalStep;

  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): UiSdlMultiStepModalStep;

  readonly modalType?: UiSdlOneButtonModal | null | UiSdlTwoButtonModal | null | UiSdlThreeButtonModal | null | null;
  withModalType(modalType: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null): UiSdlMultiStepModalStep;

  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): UiSdlMultiStepModalStep;

  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): UiSdlMultiStepModalStep;

  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): UiSdlMultiStepModalStep;

  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): UiSdlMultiStepModalStep;

  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): UiSdlMultiStepModalStep;

  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): UiSdlMultiStepModalStep;

  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): UiSdlMultiStepModalStep;

  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): UiSdlMultiStepModalStep;

  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): UiSdlMultiStepModalStep;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMultiStepModalStep;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMultiStepModalStep;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMultiStepModalStep;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlMultiStepModalStep;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMultiStepModalStep;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMultiStepModalStep;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMultiStepModalStep;
}

