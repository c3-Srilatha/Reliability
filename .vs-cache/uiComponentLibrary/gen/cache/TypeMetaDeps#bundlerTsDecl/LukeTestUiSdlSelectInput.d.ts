export interface LukeTestUiSdlSelectInput {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlSelectInput;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlSelectInput;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlSelectInput;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlSelectInput;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlSelectInput;

  readonly multipleSelectClass?: string | null;
  withMultipleSelectClass(multipleSelectClass: string | null): LukeTestUiSdlSelectInput;

  readonly clearButton?: string | null;
  withClearButton(clearButton: string | null): LukeTestUiSdlSelectInput;

  readonly dropdownButtonEl?: string | null;
  withDropdownButtonEl(dropdownButtonEl: string | null): LukeTestUiSdlSelectInput;

  readonly dropdownCollapseButtonSelector?: string | null;
  withDropdownCollapseButtonSelector(dropdownCollapseButtonSelector: string | null): LukeTestUiSdlSelectInput;

  readonly dropdownEl?: string | null;
  withDropdownEl(dropdownEl: string | null): LukeTestUiSdlSelectInput;

  readonly optionItem?: string | null;
  withOptionItem(optionItem: string | null): LukeTestUiSdlSelectInput;

  readonly selectedOptionItem?: string | null;
  withSelectedOptionItem(selectedOptionItem: string | null): LukeTestUiSdlSelectInput;

  readonly selectedOptionItemMultiple?: string | null;
  withSelectedOptionItemMultiple(selectedOptionItemMultiple: string | null): LukeTestUiSdlSelectInput;

  readonly unselectedOptionItem?: string | null;
  withUnselectedOptionItem(unselectedOptionItem: string | null): LukeTestUiSdlSelectInput;
}

