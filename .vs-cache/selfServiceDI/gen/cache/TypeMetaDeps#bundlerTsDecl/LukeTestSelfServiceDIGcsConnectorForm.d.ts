export interface LukeTestSelfServiceDIGcsConnectorForm {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIGcsConnectorForm;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIGcsConnectorForm;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly testConnectionButtonSelector?: string | null;
  withTestConnectionButtonSelector(testConnectionButtonSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly testConnectionStatusSelector?: string | null;
  withTestConnectionStatusSelector(testConnectionStatusSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly bucketUrlDropDownSelector?: string | null;
  withBucketUrlDropDownSelector(bucketUrlDropDownSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly bucketUrlDropDownInputSelector?: string | null;
  withBucketUrlDropDownInputSelector(bucketUrlDropDownInputSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly bucketUrlDropDownInputOption1Selector?: string | null;
  withBucketUrlDropDownInputOption1Selector(bucketUrlDropDownInputOption1Selector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly bucketUrlDropDownInputOptionSelector?: string | null;
  withBucketUrlDropDownInputOptionSelector(bucketUrlDropDownInputOptionSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;

  readonly bucketUrlDropdownClearSelector?: string | null;
  withBucketUrlDropdownClearSelector(bucketUrlDropdownClearSelector: string | null): LukeTestSelfServiceDIGcsConnectorForm;
}

