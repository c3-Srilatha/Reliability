export interface UiSdlPageTitleActionGroup {

  readonly actions?: C3.Array<UiSdlPageTitleAction | null>;
  withActions(actions: C3.Array<UiSdlPageTitleAction | null> | Array<IUiSdlPageTitleAction | null>): UiSdlPageTitleActionGroup;

  readonly collapseThreshold?: number | null;
  withCollapseThreshold(collapseThreshold: number | null): UiSdlPageTitleActionGroup;
}

