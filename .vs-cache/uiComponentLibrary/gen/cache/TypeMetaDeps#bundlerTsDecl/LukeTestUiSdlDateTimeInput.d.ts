export interface LukeTestUiSdlDateTimeInput {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDateTimeInput;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlDateTimeInput;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlDateTimeInput;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlDateTimeInput;

  readonly inputEl?: string | null;
  withInputEl(inputEl: string | null): LukeTestUiSdlDateTimeInput;

  readonly confirmableInputActivationSelector?: string | null;
  withConfirmableInputActivationSelector(confirmableInputActivationSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly confirmableButtonContainerSelector?: string | null;
  withConfirmableButtonContainerSelector(confirmableButtonContainerSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly confirmableCheckButtonSelector?: string | null;
  withConfirmableCheckButtonSelector(confirmableCheckButtonSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly confirmableCancelButtonSelector?: string | null;
  withConfirmableCancelButtonSelector(confirmableCancelButtonSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly timePickerSelector?: string | null;
  withTimePickerSelector(timePickerSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly monthSelector?: string | null;
  withMonthSelector(monthSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly yearSelector?: string | null;
  withYearSelector(yearSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly monthOptionSelector?: string | null;
  withMonthOptionSelector(monthOptionSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly yearOptionSelector?: string | null;
  withYearOptionSelector(yearOptionSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly timeOptionSelector?: string | null;
  withTimeOptionSelector(timeOptionSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly dateOptionSelector?: string | null;
  withDateOptionSelector(dateOptionSelector: string | null): LukeTestUiSdlDateTimeInput;

  readonly timeDropdown?: string | null;
  withTimeDropdown(timeDropdown: string | null): LukeTestUiSdlDateTimeInput;

  readonly calendarDropdown?: string | null;
  withCalendarDropdown(calendarDropdown: string | null): LukeTestUiSdlDateTimeInput;

  readonly yearDropdown?: string | null;
  withYearDropdown(yearDropdown: string | null): LukeTestUiSdlDateTimeInput;

  readonly monthDropdown?: string | null;
  withMonthDropdown(monthDropdown: string | null): LukeTestUiSdlDateTimeInput;

  readonly dateDropdown?: string | null;
  withDateDropdown(dateDropdown: string | null): LukeTestUiSdlDateTimeInput;
}

