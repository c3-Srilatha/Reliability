export interface TargetNode {

  readonly name?: string | null;
  withName(name: string | null): TargetNode;
}

