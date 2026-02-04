export interface HierarchyNode {

  readonly nodeId?: string | null;
  withNodeId(nodeId: string | null): HierarchyNode;

  readonly name?: string | null;
  withName(name: string | null): HierarchyNode;

  readonly nodeType?: string | null;
  withNodeType(nodeType: string | null): HierarchyNode;

  readonly parent?: HierarchyNode | null;
  withParent(parent: IHierarchyNode | null): HierarchyNode;

  readonly context?: C3.Array<string | null>;
  withContext(context: C3.Array<string | null> | Array<string | null>): HierarchyNode;

  readonly depth?: number | null;
  withDepth(depth: number | null): HierarchyNode;

  readonly hasChildren?: boolean;
  withHasChildren(hasChildren: boolean): HierarchyNode;
}

