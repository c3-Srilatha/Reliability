export interface StudioActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): StudioActionSpec;

  readonly successSpec: StudioActionResultSpec;
  withSuccessSpec(successSpec: IStudioActionResultSpec): StudioActionSpec;

  readonly failureSpec?: StudioActionResultSpec | null;
  withFailureSpec(failureSpec: IStudioActionResultSpec | null): StudioActionSpec;
}

