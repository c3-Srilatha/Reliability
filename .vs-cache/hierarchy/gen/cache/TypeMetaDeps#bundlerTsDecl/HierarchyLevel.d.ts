export interface HierarchyLevel {

  readonly branches?: C3.Array<HierarchyBranch | null>;
  withBranches(branches: C3.Array<HierarchyBranch | null> | Array<IHierarchyBranch | null>): HierarchyLevel;
}

