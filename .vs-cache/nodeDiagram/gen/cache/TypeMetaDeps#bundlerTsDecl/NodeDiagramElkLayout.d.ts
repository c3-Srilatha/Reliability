export interface NodeDiagramElkLayout {

  readonly autoLayout?: boolean;
  withAutoLayout(autoLayout: boolean): NodeDiagramElkLayout;

  readonly ignoreHiddenNodes?: boolean;
  withIgnoreHiddenNodes(ignoreHiddenNodes: boolean): NodeDiagramElkLayout;

  readonly localLayout?: boolean;
  withLocalLayout(localLayout: boolean): NodeDiagramElkLayout;

  readonly direction?: string | null;
  withDirection(direction: string | null): NodeDiagramElkLayout;

  readonly algorithm?: string | null;
  withAlgorithm(algorithm: string | null): NodeDiagramElkLayout;

  readonly advancedOptions?: any | null;
  withAdvancedOptions(advancedOptions: any | null): NodeDiagramElkLayout;

  readonly nodeLayoutContext?: NodeElkLayoutContext | null;
  withNodeLayoutContext(nodeLayoutContext: INodeElkLayoutContext | null): NodeDiagramElkLayout;
}

