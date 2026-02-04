export interface MultiStepComponentStep {

  readonly name: string;
  withName(name: string): MultiStepComponentStep;

  readonly hideProgress?: boolean;
  withHideProgress(hideProgress: boolean): MultiStepComponentStep;

  readonly label?: string | null | UiSdlDynamicValueSpec | null | null;
  withLabel(label: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponentStep;

  readonly componentId: string;
  withComponentId(componentId: string): MultiStepComponentStep;

  readonly retrieveNextStep: UiSdlDynamicValueSpecParam;
  withRetrieveNextStep(retrieveNextStep: IUiSdlDynamicValueSpecParam): MultiStepComponentStep;

  readonly continueText?: string | null | UiSdlDynamicValueSpec | null | null;
  withContinueText(continueText: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponentStep;

  readonly backText?: string | null | UiSdlDynamicValueSpec | null | null;
  withBackText(backText: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponentStep;

  readonly cancelText?: string | null | UiSdlDynamicValueSpec | null | null;
  withCancelText(cancelText: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponentStep;

  readonly saveText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSaveText(saveText: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponentStep;

  readonly editModeLabel?: string | null | UiSdlDynamicValueSpec | null | null;
  withEditModeLabel(editModeLabel: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponentStep;
}

