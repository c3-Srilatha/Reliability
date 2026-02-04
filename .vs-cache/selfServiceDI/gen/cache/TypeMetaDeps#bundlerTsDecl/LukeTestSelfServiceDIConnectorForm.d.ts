export interface LukeTestSelfServiceDIConnectorForm {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIConnectorForm;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIConnectorForm;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIConnectorForm;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestSelfServiceDIConnectorForm;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly testConnectionButtonSelector?: string | null;
  withTestConnectionButtonSelector(testConnectionButtonSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly testConnectionStatusSelector?: string | null;
  withTestConnectionStatusSelector(testConnectionStatusSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly bucketUrlDropDownSelector?: string | null;
  withBucketUrlDropDownSelector(bucketUrlDropDownSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly bucketUrlDropDownInputSelector?: string | null;
  withBucketUrlDropDownInputSelector(bucketUrlDropDownInputSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly bucketUrlDropDownInputOption1Selector?: string | null;
  withBucketUrlDropDownInputOption1Selector(bucketUrlDropDownInputOption1Selector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly bucketUrlDropDownInputOptionSelector?: string | null;
  withBucketUrlDropDownInputOptionSelector(bucketUrlDropDownInputOptionSelector: string | null): LukeTestSelfServiceDIConnectorForm;

  readonly bucketUrlDropdownClearSelector?: string | null;
  withBucketUrlDropdownClearSelector(bucketUrlDropdownClearSelector: string | null): LukeTestSelfServiceDIConnectorForm;
}

