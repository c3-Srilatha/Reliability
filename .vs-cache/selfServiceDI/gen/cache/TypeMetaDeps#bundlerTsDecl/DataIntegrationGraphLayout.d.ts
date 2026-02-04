export interface DataIntegrationGraphLayout {

  readonly autoLayout?: boolean;
  withAutoLayout(autoLayout: boolean): DataIntegrationGraphLayout;

  readonly ignoreHiddenNodes?: boolean;
  withIgnoreHiddenNodes(ignoreHiddenNodes: boolean): DataIntegrationGraphLayout;

  readonly localLayout?: boolean;
  withLocalLayout(localLayout: boolean): DataIntegrationGraphLayout;
}

