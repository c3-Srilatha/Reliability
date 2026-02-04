export interface StudioActionResultSpec {

  readonly bannerId?: string | null;
  withBannerId(bannerId: string | null): StudioActionResultSpec;

  readonly message: UiSdlDynamicValueSpec;
  withMessage(message: IUiSdlDynamicValueSpec): StudioActionResultSpec;

  readonly skipBanner?: boolean;
  withSkipBanner(skipBanner: boolean): StudioActionResultSpec;

  readonly actionGenerator?: λBiFunction<any, boolean, UiSdlActionsObservable | null> | null;
  withActionGenerator(actionGenerator: λBiFunction<any, boolean, IUiSdlActionsObservable | null> | null): StudioActionResultSpec;

  readonly criteria?: λPredicate<any> | null;
  withCriteria(criteria: λPredicate<any> | null): StudioActionResultSpec;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λPredicate<T> {
  (t: T): boolean
}
