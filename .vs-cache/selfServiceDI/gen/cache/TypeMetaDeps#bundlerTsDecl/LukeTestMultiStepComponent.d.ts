export interface LukeTestMultiStepComponent {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestMultiStepComponent;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestMultiStepComponent;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestMultiStepComponent;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestMultiStepComponent;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestMultiStepComponent;

  readonly multiStepComponentNextSelector?: string | null;
  withMultiStepComponentNextSelector(multiStepComponentNextSelector: string | null): LukeTestMultiStepComponent;

  readonly multiStepComponentBackSelector?: string | null;
  withMultiStepComponentBackSelector(multiStepComponentBackSelector: string | null): LukeTestMultiStepComponent;

  readonly multiStepComponentCancelSelector?: string | null;
  withMultiStepComponentCancelSelector(multiStepComponentCancelSelector: string | null): LukeTestMultiStepComponent;

  readonly multiStepComponentCurrentStepSelector?: string | null;
  withMultiStepComponentCurrentStepSelector(multiStepComponentCurrentStepSelector: string | null): LukeTestMultiStepComponent;
}

