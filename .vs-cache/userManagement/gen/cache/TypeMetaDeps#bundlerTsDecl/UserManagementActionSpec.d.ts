export interface UserManagementActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): UserManagementActionSpec;

  readonly successSpec: UserManagementActionResultSpec;
  withSuccessSpec(successSpec: IUserManagementActionResultSpec): UserManagementActionSpec;

  readonly failureSpec?: UserManagementActionResultSpec | null;
  withFailureSpec(failureSpec: IUserManagementActionResultSpec | null): UserManagementActionSpec;
}

