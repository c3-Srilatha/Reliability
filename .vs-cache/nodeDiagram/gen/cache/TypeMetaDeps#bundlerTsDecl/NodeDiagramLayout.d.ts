export interface NodeDiagramLayout {

  readonly autoLayout?: boolean;
  withAutoLayout(autoLayout: boolean): NodeDiagramLayout;

  readonly ignoreHiddenNodes?: boolean;
  withIgnoreHiddenNodes(ignoreHiddenNodes: boolean): NodeDiagramLayout;

  readonly localLayout?: boolean;
  withLocalLayout(localLayout: boolean): NodeDiagramLayout;
}

