export interface StudioModalActionSpec {

  readonly typeAction: PartiallyAppliedAction;
  withTypeAction(typeAction: IPartiallyAppliedAction): StudioModalActionSpec;

  readonly successSpec?: StudioModalActionResultSpec | null;
  withSuccessSpec(successSpec: IStudioModalActionResultSpec | null): StudioModalActionSpec;

  readonly failureSpec?: StudioModalActionResultSpec | null;
  withFailureSpec(failureSpec: IStudioModalActionResultSpec | null): StudioModalActionSpec;

  readonly modalId?: string | null;
  withModalId(modalId: string | null): StudioModalActionSpec;
}

