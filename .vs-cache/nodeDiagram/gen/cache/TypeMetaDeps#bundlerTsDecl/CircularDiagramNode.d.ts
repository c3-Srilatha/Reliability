export interface CircularDiagramNode {

  readonly name?: string | null;
  withName(name: string | null): CircularDiagramNode;

  readonly kind?: string | null;
  withKind(kind: string | null): CircularDiagramNode;

  readonly color?: string | null;
  withColor(color: string | null): CircularDiagramNode;

  readonly icon?: string | null;
  withIcon(icon: string | null): CircularDiagramNode;
}

