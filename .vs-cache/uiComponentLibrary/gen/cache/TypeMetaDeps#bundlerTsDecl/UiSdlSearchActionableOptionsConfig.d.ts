export interface UiSdlSearchActionableOptionsConfig {

  readonly show?: boolean;
  withShow(show: boolean): UiSdlSearchActionableOptionsConfig;

  readonly options?: C3.Array<UiSdlSearchActionableOption | null>;
  withOptions(options: C3.Array<UiSdlSearchActionableOption | null> | Array<IUiSdlSearchActionableOption | null>): UiSdlSearchActionableOptionsConfig;
}

