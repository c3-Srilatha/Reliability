export interface LukeTestCreateTableFromFilesForm {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestCreateTableFromFilesForm;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestCreateTableFromFilesForm;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestCreateTableFromFilesForm;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestCreateTableFromFilesForm;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestCreateTableFromFilesForm;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestCreateTableFromFilesForm;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestCreateTableFromFilesForm;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestCreateTableFromFilesForm;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestCreateTableFromFilesForm;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestCreateTableFromFilesForm;

  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestCreateTableFromFilesForm;

  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestCreateTableFromFilesForm;

  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestCreateTableFromFilesForm;

  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestCreateTableFromFilesForm;
}

