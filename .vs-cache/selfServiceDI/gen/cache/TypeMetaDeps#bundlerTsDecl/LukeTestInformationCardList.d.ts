export interface LukeTestInformationCardList {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestInformationCardList;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestInformationCardList;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestInformationCardList;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestInformationCardList;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestInformationCardList;

  readonly informationCardSelector?: string | null;
  withInformationCardSelector(informationCardSelector: string | null): LukeTestInformationCardList;

  readonly informationCardSelectedSelector?: string | null;
  withInformationCardSelectedSelector(informationCardSelectedSelector: string | null): LukeTestInformationCardList;

  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestInformationCardList;

  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestInformationCardList;
}

