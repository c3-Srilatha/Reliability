export interface StudioFormModalActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): StudioFormModalActionSpec;

  readonly successSpec: StudioActionResultSpec;
  withSuccessSpec(successSpec: IStudioActionResultSpec): StudioFormModalActionSpec;

  readonly failureSpec?: StudioActionResultSpec | null;
  withFailureSpec(failureSpec: IStudioActionResultSpec | null): StudioFormModalActionSpec;

  readonly formId?: string | null;
  withFormId(formId: string | null): StudioFormModalActionSpec;

  readonly modalId?: string | null;
  withModalId(modalId: string | null): StudioFormModalActionSpec;
}

