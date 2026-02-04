export interface LukeTestStudioGenAiFeedbackModal {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioGenAiFeedbackModal;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioGenAiFeedbackModal;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioGenAiFeedbackModal;

  readonly modalBodySelector?: string | null;
  withModalBodySelector(modalBodySelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly closeButtonSelector?: string | null;
  withCloseButtonSelector(closeButtonSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly dimmerSelector?: string | null;
  withDimmerSelector(dimmerSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly subHeaderSelector?: string | null;
  withSubHeaderSelector(subHeaderSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly contentSelector?: string | null;
  withContentSelector(contentSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly primaryButtonSelector?: string | null;
  withPrimaryButtonSelector(primaryButtonSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly dangerButtonSelector?: string | null;
  withDangerButtonSelector(dangerButtonSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly secondaryButtonSelector?: string | null;
  withSecondaryButtonSelector(secondaryButtonSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly secondaryDangerButtonSelector?: string | null;
  withSecondaryDangerButtonSelector(secondaryDangerButtonSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly tertiaryButtonSelector?: string | null;
  withTertiaryButtonSelector(tertiaryButtonSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly topDivisionLineSelector?: string | null;
  withTopDivisionLineSelector(topDivisionLineSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly bottomDivisionLineSelector?: string | null;
  withBottomDivisionLineSelector(bottomDivisionLineSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly questionAnswerSelector?: string | null;
  withQuestionAnswerSelector(questionAnswerSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly whatWentWrongOptionsSelector?: string | null;
  withWhatWentWrongOptionsSelector(whatWentWrongOptionsSelector: string | null): LukeTestStudioGenAiFeedbackModal;

  readonly desiredAnswerAdditionalFeedbackSelector?: string | null;
  withDesiredAnswerAdditionalFeedbackSelector(desiredAnswerAdditionalFeedbackSelector: string | null): LukeTestStudioGenAiFeedbackModal;
}

