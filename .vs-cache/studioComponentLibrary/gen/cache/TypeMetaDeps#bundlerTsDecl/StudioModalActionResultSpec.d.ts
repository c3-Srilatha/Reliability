export interface StudioModalActionResultSpec {

  readonly bannerId?: string | null;
  withBannerId(bannerId: string | null): StudioModalActionResultSpec;

  readonly message: UiSdlDynamicValueSpec;
  withMessage(message: IUiSdlDynamicValueSpec): StudioModalActionResultSpec;

  readonly skipBanner?: boolean;
  withSkipBanner(skipBanner: boolean): StudioModalActionResultSpec;

  readonly actionGenerator?: λBiFunction<any, boolean, UiSdlActionsObservable | null> | null;
  withActionGenerator(actionGenerator: λBiFunction<any, boolean, IUiSdlActionsObservable | null> | null): StudioModalActionResultSpec;

  readonly criteria?: λPredicate<any> | null;
  withCriteria(criteria: λPredicate<any> | null): StudioModalActionResultSpec;

  readonly closeModal?: boolean;
  withCloseModal(closeModal: boolean): StudioModalActionResultSpec;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λPredicate<T> {
  (t: T): boolean
}
