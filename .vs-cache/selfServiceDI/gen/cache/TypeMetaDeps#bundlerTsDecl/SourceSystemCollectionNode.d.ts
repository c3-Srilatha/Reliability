export interface SourceSystemCollectionNode {

  readonly name?: string | null;
  withName(name: string | null): SourceSystemCollectionNode;
}

