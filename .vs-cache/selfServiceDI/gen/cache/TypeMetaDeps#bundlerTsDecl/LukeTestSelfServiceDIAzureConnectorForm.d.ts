export interface LukeTestSelfServiceDIAzureConnectorForm {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIAzureConnectorForm;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIAzureConnectorForm;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly testConnectionButtonSelector?: string | null;
  withTestConnectionButtonSelector(testConnectionButtonSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly testConnectionStatusSelector?: string | null;
  withTestConnectionStatusSelector(testConnectionStatusSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly bucketUrlDropDownSelector?: string | null;
  withBucketUrlDropDownSelector(bucketUrlDropDownSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly bucketUrlDropDownInputSelector?: string | null;
  withBucketUrlDropDownInputSelector(bucketUrlDropDownInputSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly bucketUrlDropDownInputOption1Selector?: string | null;
  withBucketUrlDropDownInputOption1Selector(bucketUrlDropDownInputOption1Selector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly bucketUrlDropDownInputOptionSelector?: string | null;
  withBucketUrlDropDownInputOptionSelector(bucketUrlDropDownInputOptionSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;

  readonly bucketUrlDropdownClearSelector?: string | null;
  withBucketUrlDropdownClearSelector(bucketUrlDropdownClearSelector: string | null): LukeTestSelfServiceDIAzureConnectorForm;
}

