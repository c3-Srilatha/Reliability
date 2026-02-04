export interface LukeTestUiSdlDateTimeRangeInput {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDateTimeRangeInput;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlDateTimeRangeInput;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlDateTimeRangeInput;

  readonly inputEl?: string | null;
  withInputEl(inputEl: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly confirmableInputActivationSelector?: string | null;
  withConfirmableInputActivationSelector(confirmableInputActivationSelector: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly confirmableButtonContainerSelector?: string | null;
  withConfirmableButtonContainerSelector(confirmableButtonContainerSelector: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly confirmableCheckButtonSelector?: string | null;
  withConfirmableCheckButtonSelector(confirmableCheckButtonSelector: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly confirmableCancelButtonSelector?: string | null;
  withConfirmableCancelButtonSelector(confirmableCancelButtonSelector: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly startDateSelector?: string | null;
  withStartDateSelector(startDateSelector: string | null): LukeTestUiSdlDateTimeRangeInput;

  readonly endDateSelector?: string | null;
  withEndDateSelector(endDateSelector: string | null): LukeTestUiSdlDateTimeRangeInput;
}

