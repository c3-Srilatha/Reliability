export interface UserManagementFormActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): UserManagementFormActionSpec;

  readonly successSpec: UserManagementActionResultSpec;
  withSuccessSpec(successSpec: IUserManagementActionResultSpec): UserManagementFormActionSpec;

  readonly failureSpec?: UserManagementActionResultSpec | null;
  withFailureSpec(failureSpec: IUserManagementActionResultSpec | null): UserManagementFormActionSpec;

  readonly formId?: string | null;
  withFormId(formId: string | null): UserManagementFormActionSpec;
}

