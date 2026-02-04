export interface LukeTestUserManagementAddUsersModal {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUserManagementAddUsersModal;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUserManagementAddUsersModal;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUserManagementAddUsersModal;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUserManagementAddUsersModal;

  readonly modalBodySelector?: string | null;
  withModalBodySelector(modalBodySelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly closeButtonSelector?: string | null;
  withCloseButtonSelector(closeButtonSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly dimmerSelector?: string | null;
  withDimmerSelector(dimmerSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly subHeaderSelector?: string | null;
  withSubHeaderSelector(subHeaderSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly dangerButtonSelector?: string | null;
  withDangerButtonSelector(dangerButtonSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly secondaryDangerButtonSelector?: string | null;
  withSecondaryDangerButtonSelector(secondaryDangerButtonSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly tertiaryButtonSelector?: string | null;
  withTertiaryButtonSelector(tertiaryButtonSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly topDivisionLineSelector?: string | null;
  withTopDivisionLineSelector(topDivisionLineSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly bottomDivisionLineSelector?: string | null;
  withBottomDivisionLineSelector(bottomDivisionLineSelector: string | null): LukeTestUserManagementAddUsersModal;

  readonly usersForm?: LukeTestUserManagementAddEditUsersForm | null;
  withUsersForm(usersForm: ILukeTestUserManagementAddEditUsersForm | null): LukeTestUserManagementAddUsersModal;
}

