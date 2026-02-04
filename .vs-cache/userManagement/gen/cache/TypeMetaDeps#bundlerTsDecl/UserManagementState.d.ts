export interface UserManagementState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UserManagementState;

  readonly id?: string | null;
  withId(id: string | null): UserManagementState;

  readonly name?: string | null;
  withName(name: string | null): UserManagementState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UserManagementState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UserManagementState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UserManagementState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UserManagementState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): UserManagementState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UserManagementState;

  readonly selectedUser?: User | null;
  withSelectedUser(selectedUser: IUser | null): UserManagementState;

  readonly selectedUserGroup?: UserGroup | null;
  withSelectedUserGroup(selectedUserGroup: IUserGroup | null): UserManagementState;

  readonly selectedUserGroupState?: string | null;
  withSelectedUserGroupState(selectedUserGroupState: string | null): UserManagementState;

  readonly application?: App | null;
  withApplication(application: IApp | null): UserManagementState;

  readonly userGroups?: C3.Array<UserGroup | null>;
  withUserGroups(userGroups: C3.Array<UserGroup | null> | Array<IUserGroup | null>): UserManagementState;

  readonly uiInfraDependent?: boolean;
  withUiInfraDependent(uiInfraDependent: boolean): UserManagementState;
}

