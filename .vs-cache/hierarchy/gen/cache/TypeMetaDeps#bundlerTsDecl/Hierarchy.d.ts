export interface Hierarchy {

  readonly id: string;
  withId(id: string): Hierarchy;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): Hierarchy;

  readonly name: string;
  withName(name: string): Hierarchy;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): Hierarchy;

  readonly version?: number | null;
  withVersion(version: number | null): Hierarchy;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): Hierarchy;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): Hierarchy;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): Hierarchy;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): Hierarchy;

  readonly available?: boolean;
  withAvailable(available: boolean): Hierarchy;

  readonly hierarchyLevels?: C3.Map<string | null, HierarchyLevel | null>;
  withHierarchyLevels(hierarchyLevels: C3.Map<string | null, HierarchyLevel | null> | {[key: string | null]: IHierarchyLevel | null}): Hierarchy;

  readonly rootNodeList?: C3.Array<any>;
  withRootNodeList(rootNodeList: C3.Array<any> | Array<any>): Hierarchy;

  readonly idToObjectMap?: any;
  withIdToObjectMap(idToObjectMap: any): Hierarchy;

  readonly hierarchyMap?: any;
  withHierarchyMap(hierarchyMap: any): Hierarchy;

  readonly hasMore?: boolean;
  withHasMore(hasMore: boolean): Hierarchy;
}

