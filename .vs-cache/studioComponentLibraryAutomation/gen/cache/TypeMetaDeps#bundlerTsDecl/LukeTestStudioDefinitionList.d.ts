export interface LukeTestStudioDefinitionList {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioDefinitionList;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioDefinitionList;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioDefinitionList;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioDefinitionList;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioDefinitionList;

  readonly definitionListSelector?: string | null;
  withDefinitionListSelector(definitionListSelector: string | null): LukeTestStudioDefinitionList;

  readonly listTitleSelector?: string | null;
  withListTitleSelector(listTitleSelector: string | null): LukeTestStudioDefinitionList;

  readonly listContentSelector?: string | null;
  withListContentSelector(listContentSelector: string | null): LukeTestStudioDefinitionList;

  readonly listItemEl?: string | null;
  withListItemEl(listItemEl: string | null): LukeTestStudioDefinitionList;

  readonly listItemLabelSelector?: string | null;
  withListItemLabelSelector(listItemLabelSelector: string | null): LukeTestStudioDefinitionList;

  readonly listItemValueSelector?: string | null;
  withListItemValueSelector(listItemValueSelector: string | null): LukeTestStudioDefinitionList;

  readonly listItemValueTextLinkSelector?: string | null;
  withListItemValueTextLinkSelector(listItemValueTextLinkSelector: string | null): LukeTestStudioDefinitionList;
}

