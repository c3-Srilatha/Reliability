export interface StudioFormActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): StudioFormActionSpec;

  readonly successSpec: StudioActionResultSpec;
  withSuccessSpec(successSpec: IStudioActionResultSpec): StudioFormActionSpec;

  readonly failureSpec?: StudioActionResultSpec | null;
  withFailureSpec(failureSpec: IStudioActionResultSpec | null): StudioFormActionSpec;

  readonly formId?: string | null;
  withFormId(formId: string | null): StudioFormActionSpec;
}

