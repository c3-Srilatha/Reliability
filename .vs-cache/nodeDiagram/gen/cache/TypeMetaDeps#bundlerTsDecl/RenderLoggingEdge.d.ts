export interface RenderLoggingEdge {

  readonly label?: string | null;
  withLabel(label: string | null): RenderLoggingEdge;
}

