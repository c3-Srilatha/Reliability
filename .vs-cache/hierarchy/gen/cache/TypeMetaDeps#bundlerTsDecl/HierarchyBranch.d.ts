export interface HierarchyBranch {

  readonly id: string;
  withId(id: string): HierarchyBranch;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): HierarchyBranch;

  readonly name?: string | null;
  withName(name: string | null): HierarchyBranch;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): HierarchyBranch;

  readonly version?: number | null;
  withVersion(version: number | null): HierarchyBranch;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): HierarchyBranch;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): HierarchyBranch;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): HierarchyBranch;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): HierarchyBranch;

  readonly levelType?: string | null;
  withLevelType(levelType: string | null): HierarchyBranch;

  readonly childType: Type;
  withChildType(childType: IType): HierarchyBranch;

  readonly parentType: Type;
  withParentType(parentType: IType): HierarchyBranch;

  readonly fetchTableType: Type;
  withFetchTableType(fetchTableType: IType): HierarchyBranch;

  readonly path?: string | null;
  withPath(path: string | null): HierarchyBranch;

  readonly ancestorDepth?: number | null;
  withAncestorDepth(ancestorDepth: number | null): HierarchyBranch;

  readonly ancestorContext?: string | null;
  withAncestorContext(ancestorContext: string | null): HierarchyBranch;

  readonly relationship?: string | null;
  withRelationship(relationship: string | null): HierarchyBranch;

  readonly fetchTableFilter?: string | null;
  withFetchTableFilter(fetchTableFilter: string | null): HierarchyBranch;

  readonly fetchTableInclude?: string | null;
  withFetchTableInclude(fetchTableInclude: string | null): HierarchyBranch;
}

