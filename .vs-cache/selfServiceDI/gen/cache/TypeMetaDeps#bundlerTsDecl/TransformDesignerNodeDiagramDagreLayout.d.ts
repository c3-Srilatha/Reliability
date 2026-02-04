export interface TransformDesignerNodeDiagramDagreLayout {

  readonly autoLayout?: boolean;
  withAutoLayout(autoLayout: boolean): TransformDesignerNodeDiagramDagreLayout;

  readonly ignoreHiddenNodes?: boolean;
  withIgnoreHiddenNodes(ignoreHiddenNodes: boolean): TransformDesignerNodeDiagramDagreLayout;

  readonly localLayout?: boolean;
  withLocalLayout(localLayout: boolean): TransformDesignerNodeDiagramDagreLayout;
}

