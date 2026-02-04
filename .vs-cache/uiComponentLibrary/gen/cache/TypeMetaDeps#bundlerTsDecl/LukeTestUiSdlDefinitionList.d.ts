export interface LukeTestUiSdlDefinitionList {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlDefinitionList;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlDefinitionList;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlDefinitionList;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlDefinitionList;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlDefinitionList;

  readonly definitionList?: string | null;
  withDefinitionList(definitionList: string | null): LukeTestUiSdlDefinitionList;

  readonly definitionListHeaders?: string | null;
  withDefinitionListHeaders(definitionListHeaders: string | null): LukeTestUiSdlDefinitionList;

  readonly definitionListDescriptions?: string | null;
  withDefinitionListDescriptions(definitionListDescriptions: string | null): LukeTestUiSdlDefinitionList;
}

