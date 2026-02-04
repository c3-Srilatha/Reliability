export interface SourceFieldNode {

  readonly name?: string | null;
  withName(name: string | null): SourceFieldNode;
}

