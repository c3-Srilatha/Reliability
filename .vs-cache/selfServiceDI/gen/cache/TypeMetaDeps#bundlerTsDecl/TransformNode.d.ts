export interface TransformNode {

  readonly name?: string | null;
  withName(name: string | null): TransformNode;
}

