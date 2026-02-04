export interface LukeTestSelfServiceDIMultiStepComponent {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDIMultiStepComponent;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDIMultiStepComponent;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDIMultiStepComponent;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDIMultiStepComponent;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDIMultiStepComponent;

  readonly multiStepComponentNextSelector?: string | null;
  withMultiStepComponentNextSelector(multiStepComponentNextSelector: string | null): LukeTestSelfServiceDIMultiStepComponent;

  readonly multiStepComponentBackSelector?: string | null;
  withMultiStepComponentBackSelector(multiStepComponentBackSelector: string | null): LukeTestSelfServiceDIMultiStepComponent;

  readonly multiStepComponentCancelSelector?: string | null;
  withMultiStepComponentCancelSelector(multiStepComponentCancelSelector: string | null): LukeTestSelfServiceDIMultiStepComponent;

  readonly multiStepComponentCurrentStepSelector?: string | null;
  withMultiStepComponentCurrentStepSelector(multiStepComponentCurrentStepSelector: string | null): LukeTestSelfServiceDIMultiStepComponent;

  readonly testConnectionButtonSelector?: string | null;
  withTestConnectionButtonSelector(testConnectionButtonSelector: string | null): LukeTestSelfServiceDIMultiStepComponent;
}

