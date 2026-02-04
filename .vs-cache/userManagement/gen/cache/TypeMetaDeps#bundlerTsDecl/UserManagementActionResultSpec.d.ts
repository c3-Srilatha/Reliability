export interface UserManagementActionResultSpec {

  readonly bannerId?: string | null;
  withBannerId(bannerId: string | null): UserManagementActionResultSpec;

  readonly message: UiSdlDynamicValueSpec;
  withMessage(message: IUiSdlDynamicValueSpec): UserManagementActionResultSpec;

  readonly skipBanner?: boolean;
  withSkipBanner(skipBanner: boolean): UserManagementActionResultSpec;

  readonly actionGenerator?: λBiFunction<any, boolean, UiSdlActionsObservable | null> | null;
  withActionGenerator(actionGenerator: λBiFunction<any, boolean, IUiSdlActionsObservable | null> | null): UserManagementActionResultSpec;

  readonly criteria?: λPredicate<any> | null;
  withCriteria(criteria: λPredicate<any> | null): UserManagementActionResultSpec;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λPredicate<T> {
  (t: T): boolean
}
