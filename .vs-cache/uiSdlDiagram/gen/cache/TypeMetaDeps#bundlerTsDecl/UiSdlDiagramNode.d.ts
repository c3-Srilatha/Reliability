export interface UiSdlDiagramNode {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramNode;

  readonly edge?: boolean;
  withEdge(edge: boolean): UiSdlDiagramNode;

  readonly vertex?: boolean;
  withVertex(vertex: boolean): UiSdlDiagramNode;

  readonly srid?: number | null;
  withSrid(srid: number | null): UiSdlDiagramNode;

  readonly x?: number | null;
  withX(x: number | null): UiSdlDiagramNode;

  readonly y?: number | null;
  withY(y: number | null): UiSdlDiagramNode;

  readonly minimized?: boolean;
  withMinimized(minimized: boolean): UiSdlDiagramNode;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): UiSdlDiagramNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlDiagramNode;

  readonly connectable?: boolean;
  withConnectable(connectable: boolean): UiSdlDiagramNode;

  readonly diagramProps?: any;
  withDiagramProps(diagramProps: any): UiSdlDiagramNode;

  readonly diagramScale?: number | null;
  withDiagramScale(diagramScale: number | null): UiSdlDiagramNode;

  readonly nodeActions?: C3.Array<UiSdlActionGroup | null>;
  withNodeActions(nodeActions: C3.Array<UiSdlActionGroup | null> | Array<IUiSdlActionGroup | null>): UiSdlDiagramNode;

  readonly contextMenuItems?: C3.Array<UiSdlDiagramNodeContextMenuItem | null>;
  withContextMenuItems(contextMenuItems: C3.Array<UiSdlDiagramNodeContextMenuItem | null> | Array<IUiSdlDiagramNodeContextMenuItem | null>): UiSdlDiagramNode;

  readonly inPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withInPorts(inPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramNode;

  readonly outPorts?: C3.Array<UiSdlDiagramNodePort | null>;
  withOutPorts(outPorts: C3.Array<UiSdlDiagramNodePort | null> | Array<IUiSdlDiagramNodePort | null>): UiSdlDiagramNode;
}

