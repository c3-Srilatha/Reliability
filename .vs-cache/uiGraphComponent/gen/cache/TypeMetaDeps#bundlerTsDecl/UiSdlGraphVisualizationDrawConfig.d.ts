export interface UiSdlGraphVisualizationDrawConfig {

  readonly enableDraw?: boolean;
  withEnableDraw(enableDraw: boolean): UiSdlGraphVisualizationDrawConfig;

  readonly drawMenu?: C3.Array<UiSdlGraphVisualizationDrawMenuSetting | null>;
  withDrawMenu(drawMenu: C3.Array<UiSdlGraphVisualizationDrawMenuSetting | null> | Array<IUiSdlGraphVisualizationDrawMenuSetting | null>): UiSdlGraphVisualizationDrawConfig;
}

