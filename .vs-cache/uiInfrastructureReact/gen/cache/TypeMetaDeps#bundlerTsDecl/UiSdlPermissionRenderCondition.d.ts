export interface UiSdlPermissionRenderCondition {

  readonly adminGroup?: UserGroup | null;
  withAdminGroup(adminGroup: IUserGroup | null): UiSdlPermissionRenderCondition;
}

