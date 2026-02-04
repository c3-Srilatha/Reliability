export interface MappingNode {

  readonly name?: string | null;
  withName(name: string | null): MappingNode;
}

