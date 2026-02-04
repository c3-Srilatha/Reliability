export interface RenderLoggingNode {

  readonly name?: string | null;
  withName(name: string | null): RenderLoggingNode;
}

