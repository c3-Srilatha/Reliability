export interface UserManagementModalActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): UserManagementModalActionSpec;

  readonly successSpec?: UserManagementModalActionResultSpec | null;
  withSuccessSpec(successSpec: IUserManagementModalActionResultSpec | null): UserManagementModalActionSpec;

  readonly failureSpec?: UserManagementModalActionResultSpec | null;
  withFailureSpec(failureSpec: IUserManagementModalActionResultSpec | null): UserManagementModalActionSpec;

  readonly modalId?: string | null;
  withModalId(modalId: string | null): UserManagementModalActionSpec;
}

