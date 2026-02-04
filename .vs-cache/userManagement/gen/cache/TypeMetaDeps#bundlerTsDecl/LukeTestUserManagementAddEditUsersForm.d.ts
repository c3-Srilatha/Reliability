export interface LukeTestUserManagementAddEditUsersForm {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUserManagementAddEditUsersForm;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUserManagementAddEditUsersForm;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUserManagementAddEditUsersForm;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestUserManagementAddEditUsersForm;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly modalParentSelector?: string | null;
  withModalParentSelector(modalParentSelector: string | null): LukeTestUserManagementAddEditUsersForm;

  readonly selectedGroupsInput?: LukeTestUiSdlSelectInput | null;
  withSelectedGroupsInput(selectedGroupsInput: ILukeTestUiSdlSelectInput | null): LukeTestUserManagementAddEditUsersForm;
}

