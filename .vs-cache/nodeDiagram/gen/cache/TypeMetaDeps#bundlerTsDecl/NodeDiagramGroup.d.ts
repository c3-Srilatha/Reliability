export interface NodeDiagramGroup {

  readonly name?: string | null;
  withName(name: string | null): NodeDiagramGroup;

  readonly kind?: string | null;
  withKind(kind: string | null): NodeDiagramGroup;

  readonly color?: string | null;
  withColor(color: string | null): NodeDiagramGroup;

  readonly icon?: string | null;
  withIcon(icon: string | null): NodeDiagramGroup;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): NodeDiagramGroup;
}

