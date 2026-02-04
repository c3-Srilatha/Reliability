export interface LukeTestUserManagementAddEditUsersModal {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUserManagementAddEditUsersModal;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUserManagementAddEditUsersModal;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUserManagementAddEditUsersModal;

  readonly modalBodySelector?: string | null;
  withModalBodySelector(modalBodySelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly closeButtonSelector?: string | null;
  withCloseButtonSelector(closeButtonSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly dimmerSelector?: string | null;
  withDimmerSelector(dimmerSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly subHeaderSelector?: string | null;
  withSubHeaderSelector(subHeaderSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly dangerButtonSelector?: string | null;
  withDangerButtonSelector(dangerButtonSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly secondaryDangerButtonSelector?: string | null;
  withSecondaryDangerButtonSelector(secondaryDangerButtonSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly tertiaryButtonSelector?: string | null;
  withTertiaryButtonSelector(tertiaryButtonSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly topDivisionLineSelector?: string | null;
  withTopDivisionLineSelector(topDivisionLineSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly bottomDivisionLineSelector?: string | null;
  withBottomDivisionLineSelector(bottomDivisionLineSelector: string | null): LukeTestUserManagementAddEditUsersModal;

  readonly usersForm?: LukeTestUserManagementAddEditUsersForm | null;
  withUsersForm(usersForm: ILukeTestUserManagementAddEditUsersForm | null): LukeTestUserManagementAddEditUsersModal;
}

