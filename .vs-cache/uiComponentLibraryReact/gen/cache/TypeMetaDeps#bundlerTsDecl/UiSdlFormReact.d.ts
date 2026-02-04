export interface UiSdlFormReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFormReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFormReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFormReact;

  readonly dataSpec?: UiSdlFormDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFormDataSpec | null): UiSdlFormReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFormReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFormReact;

  readonly title?: UiSdlComponentTitle | null;
  withTitle(title: IUiSdlComponentTitle | null): UiSdlFormReact;

  readonly formFieldValues?: any | null;
  withFormFieldValues(formFieldValues: any | null): UiSdlFormReact;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlFormReact;

  readonly formType?: string | null;
  withFormType(formType: string | null): UiSdlFormReact;

  readonly subtitle?: UiSdlComponentTitle | null;
  withSubtitle(subtitle: IUiSdlComponentTitle | null): UiSdlFormReact;

  readonly formStatus?: UiSdlFormStatus | null;
  withFormStatus(formStatus: IUiSdlFormStatus | null): UiSdlFormReact;

  readonly useDefaultConfig?: boolean;
  withUseDefaultConfig(useDefaultConfig: boolean): UiSdlFormReact;

  readonly submitButtonText?: string | null;
  withSubmitButtonText(submitButtonText: string | null): UiSdlFormReact;

  readonly cancelButtonText?: string | null;
  withCancelButtonText(cancelButtonText: string | null): UiSdlFormReact;

  readonly continueButtonText?: string | null;
  withContinueButtonText(continueButtonText: string | null): UiSdlFormReact;

  readonly backButtonText?: string | null;
  withBackButtonText(backButtonText: string | null): UiSdlFormReact;

  readonly hideFooterButtons?: boolean;
  withHideFooterButtons(hideFooterButtons: boolean): UiSdlFormReact;

  readonly primaryActionButtonLoading?: boolean;
  withPrimaryActionButtonLoading(primaryActionButtonLoading: boolean): UiSdlFormReact;

  readonly secondaryActionButtonLoading?: boolean;
  withSecondaryActionButtonLoading(secondaryActionButtonLoading: boolean): UiSdlFormReact;

  readonly primaryActionButtonDisabled?: boolean;
  withPrimaryActionButtonDisabled(primaryActionButtonDisabled: boolean): UiSdlFormReact;

  readonly secondaryActionButtonDisabled?: boolean;
  withSecondaryActionButtonDisabled(secondaryActionButtonDisabled: boolean): UiSdlFormReact;

  readonly fieldValidity?: C3.Map<string | null, boolean>;
  withFieldValidity(fieldValidity: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlFormReact;

  readonly clearOnCancel?: boolean;
  withClearOnCancel(clearOnCancel: boolean): UiSdlFormReact;

  readonly currentStepIndex?: number | null;
  withCurrentStepIndex(currentStepIndex: number | null): UiSdlFormReact;

  readonly customSubmit?: boolean;
  withCustomSubmit(customSubmit: boolean): UiSdlFormReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlFormReact;

  readonly multiStepProgressBarOrientation?: string | null;
  withMultiStepProgressBarOrientation(multiStepProgressBarOrientation: string | null): UiSdlFormReact;

  readonly multiStepAnyOrder?: boolean;
  withMultiStepAnyOrder(multiStepAnyOrder: boolean): UiSdlFormReact;

  readonly width?: number | null | number | null | UiSdlFormWidth | null | null;
  withWidth(width: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlFormReact;

  readonly maxWidth?: number | null | number | null | UiSdlFormWidth | null | null;
  withMaxWidth(maxWidth: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlFormReact;

  readonly submitDataSpec?: UiSdlFormSubmitDataSpec | null;
  withSubmitDataSpec(submitDataSpec: IUiSdlFormSubmitDataSpec | null): UiSdlFormReact;

  readonly submitRecord?: Obj | null;
  withSubmitRecord(submitRecord: IObj | null): UiSdlFormReact;
}

