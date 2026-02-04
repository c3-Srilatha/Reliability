export interface UserManagementFormModalActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): UserManagementFormModalActionSpec;

  readonly successSpec: UserManagementActionResultSpec;
  withSuccessSpec(successSpec: IUserManagementActionResultSpec): UserManagementFormModalActionSpec;

  readonly failureSpec?: UserManagementActionResultSpec | null;
  withFailureSpec(failureSpec: IUserManagementActionResultSpec | null): UserManagementFormModalActionSpec;

  readonly formId?: string | null;
  withFormId(formId: string | null): UserManagementFormModalActionSpec;

  readonly modalId?: string | null;
  withModalId(modalId: string | null): UserManagementFormModalActionSpec;
}

