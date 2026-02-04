export interface UserManagementModalActionResultSpec {

  readonly bannerId?: string | null;
  withBannerId(bannerId: string | null): UserManagementModalActionResultSpec;

  readonly message: UiSdlDynamicValueSpec;
  withMessage(message: IUiSdlDynamicValueSpec): UserManagementModalActionResultSpec;

  readonly skipBanner?: boolean;
  withSkipBanner(skipBanner: boolean): UserManagementModalActionResultSpec;

  readonly actionGenerator?: λBiFunction<any, boolean, UiSdlActionsObservable | null> | null;
  withActionGenerator(actionGenerator: λBiFunction<any, boolean, IUiSdlActionsObservable | null> | null): UserManagementModalActionResultSpec;

  readonly criteria?: λPredicate<any> | null;
  withCriteria(criteria: λPredicate<any> | null): UserManagementModalActionResultSpec;

  readonly closeModal?: boolean;
  withCloseModal(closeModal: boolean): UserManagementModalActionResultSpec;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λPredicate<T> {
  (t: T): boolean
}
