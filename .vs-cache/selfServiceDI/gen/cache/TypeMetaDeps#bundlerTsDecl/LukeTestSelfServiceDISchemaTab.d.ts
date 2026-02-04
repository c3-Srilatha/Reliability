export interface LukeTestSelfServiceDISchemaTab {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestSelfServiceDISchemaTab;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestSelfServiceDISchemaTab;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestSelfServiceDISchemaTab;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestSelfServiceDISchemaTab;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestSelfServiceDISchemaTab;

  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestSelfServiceDISchemaTab;

  readonly cancelButtonSelector?: string | null;
  withCancelButtonSelector(cancelButtonSelector: string | null): LukeTestSelfServiceDISchemaTab;

  readonly editButtonSelector?: string | null;
  withEditButtonSelector(editButtonSelector: string | null): LukeTestSelfServiceDISchemaTab;

  readonly editPageContainer?: string | null;
  withEditPageContainer(editPageContainer: string | null): LukeTestSelfServiceDISchemaTab;

  readonly tableNameList?: LukeTestUiSdlDefinitionList | null;
  withTableNameList(tableNameList: ILukeTestUiSdlDefinitionList | null): LukeTestSelfServiceDISchemaTab;

  readonly tableColumnGrid?: LukeTestSchemaTabTableColumnGrid | null;
  withTableColumnGrid(tableColumnGrid: ILukeTestSchemaTabTableColumnGrid | null): LukeTestSelfServiceDISchemaTab;

  readonly tableDescriptionForm?: LukeTestUiSdlForm | null;
  withTableDescriptionForm(tableDescriptionForm: ILukeTestUiSdlForm | null): LukeTestSelfServiceDISchemaTab;

  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestSelfServiceDISchemaTab;
}

