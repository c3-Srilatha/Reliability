export interface LukeTestUserManagementEditUsersModal {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUserManagementEditUsersModal;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUserManagementEditUsersModal;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUserManagementEditUsersModal;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUserManagementEditUsersModal;

  readonly modalBodySelector?: string | null;
  withModalBodySelector(modalBodySelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly closeButtonSelector?: string | null;
  withCloseButtonSelector(closeButtonSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly dimmerSelector?: string | null;
  withDimmerSelector(dimmerSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly subHeaderSelector?: string | null;
  withSubHeaderSelector(subHeaderSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly dangerButtonSelector?: string | null;
  withDangerButtonSelector(dangerButtonSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly secondaryDangerButtonSelector?: string | null;
  withSecondaryDangerButtonSelector(secondaryDangerButtonSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly tertiaryButtonSelector?: string | null;
  withTertiaryButtonSelector(tertiaryButtonSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly topDivisionLineSelector?: string | null;
  withTopDivisionLineSelector(topDivisionLineSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly bottomDivisionLineSelector?: string | null;
  withBottomDivisionLineSelector(bottomDivisionLineSelector: string | null): LukeTestUserManagementEditUsersModal;

  readonly usersForm?: LukeTestUserManagementAddEditUsersForm | null;
  withUsersForm(usersForm: ILukeTestUserManagementAddEditUsersForm | null): LukeTestUserManagementEditUsersModal;
}

