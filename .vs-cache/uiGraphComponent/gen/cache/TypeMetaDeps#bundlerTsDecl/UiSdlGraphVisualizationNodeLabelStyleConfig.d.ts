export interface UiSdlGraphVisualizationNodeLabelStyleConfig {

  readonly textCenter?: boolean;
  withTextCenter(textCenter: boolean): UiSdlGraphVisualizationNodeLabelStyleConfig;

  readonly textLabelField?: UiSdlFieldBasedDataSpecSetting | null;
  withTextLabelField(textLabelField: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationNodeLabelStyleConfig;

  readonly imageUrl?: string | null;
  withImageUrl(imageUrl: string | null): UiSdlGraphVisualizationNodeLabelStyleConfig;

  readonly themedIcon?: string | null;
  withThemedIcon(themedIcon: string | null): UiSdlGraphVisualizationNodeLabelStyleConfig;

  readonly imageUrlByProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withImageUrlByProperty(imageUrlByProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationNodeLabelStyleConfig;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlGraphVisualizationNodeLabelStyleConfig;

  readonly iconByProperty?: UiSdlFieldBasedDataSpecSetting | null;
  withIconByProperty(iconByProperty: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationNodeLabelStyleConfig;
}

