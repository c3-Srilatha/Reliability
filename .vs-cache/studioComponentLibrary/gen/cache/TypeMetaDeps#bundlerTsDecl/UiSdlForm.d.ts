export interface UiSdlForm {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlForm;

  readonly id?: string | null;
  withId(id: string | null): UiSdlForm;

  readonly name?: string | null;
  withName(name: string | null): UiSdlForm;

  readonly dataSpec?: UiSdlFormDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFormDataSpec | null): UiSdlForm;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlForm;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlForm;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlForm;

  readonly title?: UiSdlComponentTitle | null;
  withTitle(title: IUiSdlComponentTitle | null): UiSdlForm;

  readonly formFieldValues?: any | null;
  withFormFieldValues(formFieldValues: any | null): UiSdlForm;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlForm;

  readonly formType?: string | null;
  withFormType(formType: string | null): UiSdlForm;

  readonly subtitle?: UiSdlComponentTitle | null;
  withSubtitle(subtitle: IUiSdlComponentTitle | null): UiSdlForm;

  readonly formStatus?: UiSdlFormStatus | null;
  withFormStatus(formStatus: IUiSdlFormStatus | null): UiSdlForm;

  readonly useDefaultConfig?: boolean;
  withUseDefaultConfig(useDefaultConfig: boolean): UiSdlForm;

  readonly submitButtonText?: string | null;
  withSubmitButtonText(submitButtonText: string | null): UiSdlForm;

  readonly cancelButtonText?: string | null;
  withCancelButtonText(cancelButtonText: string | null): UiSdlForm;

  readonly continueButtonText?: string | null;
  withContinueButtonText(continueButtonText: string | null): UiSdlForm;

  readonly backButtonText?: string | null;
  withBackButtonText(backButtonText: string | null): UiSdlForm;

  readonly hideFooterButtons?: boolean;
  withHideFooterButtons(hideFooterButtons: boolean): UiSdlForm;

  readonly primaryActionButtonLoading?: boolean;
  withPrimaryActionButtonLoading(primaryActionButtonLoading: boolean): UiSdlForm;

  readonly secondaryActionButtonLoading?: boolean;
  withSecondaryActionButtonLoading(secondaryActionButtonLoading: boolean): UiSdlForm;

  readonly primaryActionButtonDisabled?: boolean;
  withPrimaryActionButtonDisabled(primaryActionButtonDisabled: boolean): UiSdlForm;

  readonly secondaryActionButtonDisabled?: boolean;
  withSecondaryActionButtonDisabled(secondaryActionButtonDisabled: boolean): UiSdlForm;

  readonly fieldValidity?: C3.Map<string | null, boolean>;
  withFieldValidity(fieldValidity: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlForm;

  readonly clearOnCancel?: boolean;
  withClearOnCancel(clearOnCancel: boolean): UiSdlForm;

  readonly currentStepIndex?: number | null;
  withCurrentStepIndex(currentStepIndex: number | null): UiSdlForm;

  readonly customSubmit?: boolean;
  withCustomSubmit(customSubmit: boolean): UiSdlForm;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlForm;

  readonly multiStepProgressBarOrientation?: string | null;
  withMultiStepProgressBarOrientation(multiStepProgressBarOrientation: string | null): UiSdlForm;

  readonly multiStepAnyOrder?: boolean;
  withMultiStepAnyOrder(multiStepAnyOrder: boolean): UiSdlForm;

  readonly width?: number | null | number | null | UiSdlFormWidth | null | null;
  withWidth(width: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlForm;

  readonly maxWidth?: number | null | number | null | UiSdlFormWidth | null | null;
  withMaxWidth(maxWidth: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlForm;

  readonly submitDataSpec?: UiSdlFormSubmitDataSpec | null;
  withSubmitDataSpec(submitDataSpec: IUiSdlFormSubmitDataSpec | null): UiSdlForm;

  readonly submitRecord?: Obj | null;
  withSubmitRecord(submitRecord: IObj | null): UiSdlForm;
}

