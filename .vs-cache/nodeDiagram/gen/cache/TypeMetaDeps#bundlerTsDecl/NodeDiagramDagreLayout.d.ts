export interface NodeDiagramDagreLayout {

  readonly autoLayout?: boolean;
  withAutoLayout(autoLayout: boolean): NodeDiagramDagreLayout;

  readonly ignoreHiddenNodes?: boolean;
  withIgnoreHiddenNodes(ignoreHiddenNodes: boolean): NodeDiagramDagreLayout;

  readonly localLayout?: boolean;
  withLocalLayout(localLayout: boolean): NodeDiagramDagreLayout;

  readonly direction?: string | null;
  withDirection(direction: string | null): NodeDiagramDagreLayout;

  readonly nodesep?: number | null;
  withNodesep(nodesep: number | null): NodeDiagramDagreLayout;

  readonly ranksep?: number | null;
  withRanksep(ranksep: number | null): NodeDiagramDagreLayout;

  readonly edgesep?: number | null;
  withEdgesep(edgesep: number | null): NodeDiagramDagreLayout;

  readonly estimatedNodeWidth?: number | null;
  withEstimatedNodeWidth(estimatedNodeWidth: number | null): NodeDiagramDagreLayout;

  readonly estimatedNodeHeight?: number | null;
  withEstimatedNodeHeight(estimatedNodeHeight: number | null): NodeDiagramDagreLayout;
}

