export interface LukeTestCsvEditForm {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestCsvEditForm;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestCsvEditForm;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestCsvEditForm;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestCsvEditForm;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestCsvEditForm;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestCsvEditForm;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestCsvEditForm;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestCsvEditForm;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestCsvEditForm;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestCsvEditForm;

  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestCsvEditForm;

  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestCsvEditForm;

  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestCsvEditForm;

  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestCsvEditForm;

  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestCsvEditForm;

  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestCsvEditForm;

  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestCsvEditForm;

  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestCsvEditForm;

  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestCsvEditForm;

  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestCsvEditForm;

  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestCsvEditForm;

  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestCsvEditForm;
}

