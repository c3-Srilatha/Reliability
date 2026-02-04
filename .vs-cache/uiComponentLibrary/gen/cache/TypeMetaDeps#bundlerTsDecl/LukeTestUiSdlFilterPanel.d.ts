export interface LukeTestUiSdlFilterPanel {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlFilterPanel;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlFilterPanel;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlFilterPanel;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlFilterPanel;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestUiSdlFilterPanel;

  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly titleElement?: string | null;
  withTitleElement(titleElement: string | null): LukeTestUiSdlFilterPanel;

  readonly filterButton?: string | null;
  withFilterButton(filterButton: string | null): LukeTestUiSdlFilterPanel;

  readonly clearFieldSetButton?: string | null;
  withClearFieldSetButton(clearFieldSetButton: string | null): LukeTestUiSdlFilterPanel;

  readonly clearAllButton?: string | null;
  withClearAllButton(clearAllButton: string | null): LukeTestUiSdlFilterPanel;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly cogButtonSelector?: string | null;
  withCogButtonSelector(cogButtonSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly goBackButtonSelector?: string | null;
  withGoBackButtonSelector(goBackButtonSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly loadFromListOptionSelector?: string | null;
  withLoadFromListOptionSelector(loadFromListOptionSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly saveConfigurationOptionSelector?: string | null;
  withSaveConfigurationOptionSelector(saveConfigurationOptionSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly formFieldSelector?: string | null;
  withFormFieldSelector(formFieldSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly savedConfigurationListSelector?: string | null;
  withSavedConfigurationListSelector(savedConfigurationListSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly savedConfigurationItemSelector?: string | null;
  withSavedConfigurationItemSelector(savedConfigurationItemSelector: string | null): LukeTestUiSdlFilterPanel;

  readonly collapsedFieldSet?: string | null;
  withCollapsedFieldSet(collapsedFieldSet: string | null): LukeTestUiSdlFilterPanel;

  readonly expandFieldSetButton?: string | null;
  withExpandFieldSetButton(expandFieldSetButton: string | null): LukeTestUiSdlFilterPanel;
}

