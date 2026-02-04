export interface LukeTestSchemaTabTableColumnGrid {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSchemaTabTableColumnGrid;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSchemaTabTableColumnGrid;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSchemaTabTableColumnGrid;

  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridSelector?: string | null;
  withGridSelector(gridSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly headerSelector?: string | null;
  withHeaderSelector(headerSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly subtitleSelector?: string | null;
  withSubtitleSelector(subtitleSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly contentEl?: string | null;
  withContentEl(contentEl: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly rowEl?: string | null;
  withRowEl(rowEl: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly columnNameWrapper?: string | null;
  withColumnNameWrapper(columnNameWrapper: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly checkAllCheckbox?: string | null;
  withCheckAllCheckbox(checkAllCheckbox: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly addRowButton?: string | null;
  withAddRowButton(addRowButton: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly saveDataButton?: string | null;
  withSaveDataButton(saveDataButton: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly saveDataButtonLoadingState?: string | null;
  withSaveDataButtonLoadingState(saveDataButtonLoadingState: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly saveDataButtonNonLoadingState?: string | null;
  withSaveDataButtonNonLoadingState(saveDataButtonNonLoadingState: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly rowActionsDropDownSelector?: string | null;
  withRowActionsDropDownSelector(rowActionsDropDownSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly cancelButtonSelector?: string | null;
  withCancelButtonSelector(cancelButtonSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridActionBarWithSaveCancelButtonsSelector?: string | null;
  withGridActionBarWithSaveCancelButtonsSelector(gridActionBarWithSaveCancelButtonsSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridActionBar?: string | null;
  withGridActionBar(gridActionBar: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridTableActionBar?: string | null;
  withGridTableActionBar(gridTableActionBar: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridActionBarButton?: string | null;
  withGridActionBarButton(gridActionBarButton: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridRowActionButton?: string | null;
  withGridRowActionButton(gridRowActionButton: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridCellActionButton?: string | null;
  withGridCellActionButton(gridCellActionButton: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridCellHyperlink?: string | null;
  withGridCellHyperlink(gridCellHyperlink: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly noGridRecords?: string | null;
  withNoGridRecords(noGridRecords: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly searchBarInput?: string | null;
  withSearchBarInput(searchBarInput: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly gridFilterBarEl?: string | null;
  withGridFilterBarEl(gridFilterBarEl: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly tableActionBar?: string | null;
  withTableActionBar(tableActionBar: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly expandIconSelector?: string | null;
  withExpandIconSelector(expandIconSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly detailComponentSelector?: string | null;
  withDetailComponentSelector(detailComponentSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly columnAliasSelector?: string | null;
  withColumnAliasSelector(columnAliasSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly columnDescriptionSelector?: string | null;
  withColumnDescriptionSelector(columnDescriptionSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly dataTypeSelector?: string | null;
  withDataTypeSelector(dataTypeSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly dataTypeValueSelector?: string | null;
  withDataTypeValueSelector(dataTypeValueSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly optionSelector?: string | null;
  withOptionSelector(optionSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly disabledSelector?: string | null;
  withDisabledSelector(disabledSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly notDisabledSelector?: string | null;
  withNotDisabledSelector(notDisabledSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly columnMismatchErrorSelector?: string | null;
  withColumnMismatchErrorSelector(columnMismatchErrorSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly inputHintTextSelector?: string | null;
  withInputHintTextSelector(inputHintTextSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly checkboxSelector?: string | null;
  withCheckboxSelector(checkboxSelector: string | null): LukeTestSchemaTabTableColumnGrid;

  readonly headerCheckboxSelector?: string | null;
  withHeaderCheckboxSelector(headerCheckboxSelector: string | null): LukeTestSchemaTabTableColumnGrid;
}

