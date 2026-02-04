export interface LukeTestSelfServiceDIS3ConnectorForm {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIS3ConnectorForm;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIS3ConnectorForm;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly testConnectionButtonSelector?: string | null;
  withTestConnectionButtonSelector(testConnectionButtonSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly testConnectionStatusSelector?: string | null;
  withTestConnectionStatusSelector(testConnectionStatusSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly bucketUrlDropDownSelector?: string | null;
  withBucketUrlDropDownSelector(bucketUrlDropDownSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly bucketUrlDropDownInputSelector?: string | null;
  withBucketUrlDropDownInputSelector(bucketUrlDropDownInputSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly bucketUrlDropDownInputOption1Selector?: string | null;
  withBucketUrlDropDownInputOption1Selector(bucketUrlDropDownInputOption1Selector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly bucketUrlDropDownInputOptionSelector?: string | null;
  withBucketUrlDropDownInputOptionSelector(bucketUrlDropDownInputOptionSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly bucketUrlDropdownClearSelector?: string | null;
  withBucketUrlDropdownClearSelector(bucketUrlDropdownClearSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly regionDropdownSelector?: string | null;
  withRegionDropdownSelector(regionDropdownSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly regionDropdownOptionSelector?: string | null;
  withRegionDropdownOptionSelector(regionDropdownOptionSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;

  readonly regionDropdownClearSelector?: string | null;
  withRegionDropdownClearSelector(regionDropdownClearSelector: string | null): LukeTestSelfServiceDIS3ConnectorForm;
}

