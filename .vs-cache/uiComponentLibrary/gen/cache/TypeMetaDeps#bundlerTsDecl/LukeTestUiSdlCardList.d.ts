export interface LukeTestUiSdlCardList {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlCardList;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlCardList;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlCardList;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlCardList;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlCardList;

  readonly cardListSelector?: string | null;
  withCardListSelector(cardListSelector: string | null): LukeTestUiSdlCardList;

  readonly cardListTitleSelector?: string | null;
  withCardListTitleSelector(cardListTitleSelector: string | null): LukeTestUiSdlCardList;

  readonly cardListHeaderSelector?: string | null;
  withCardListHeaderSelector(cardListHeaderSelector: string | null): LukeTestUiSdlCardList;

  readonly cardSelector?: string | null;
  withCardSelector(cardSelector: string | null): LukeTestUiSdlCardList;

  readonly cardHeadlineSelector?: string | null;
  withCardHeadlineSelector(cardHeadlineSelector: string | null): LukeTestUiSdlCardList;

  readonly indicatorBarSelector?: string | null;
  withIndicatorBarSelector(indicatorBarSelector: string | null): LukeTestUiSdlCardList;

  readonly cardButtonsSelector?: string | null;
  withCardButtonsSelector(cardButtonsSelector: string | null): LukeTestUiSdlCardList;
}

