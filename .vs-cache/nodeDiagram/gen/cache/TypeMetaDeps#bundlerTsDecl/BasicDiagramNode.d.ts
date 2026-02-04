export interface BasicDiagramNode {

  readonly name?: string | null;
  withName(name: string | null): BasicDiagramNode;

  readonly kind?: string | null;
  withKind(kind: string | null): BasicDiagramNode;

  readonly color?: string | null;
  withColor(color: string | null): BasicDiagramNode;

  readonly icon?: string | null;
  withIcon(icon: string | null): BasicDiagramNode;
}

