export interface FilterNode {

  readonly name?: string | null;
  withName(name: string | null): FilterNode;
}

