export interface UiSdlSavedSearch {

  readonly spec?: FetchSpec | null;
  withSpec(spec: IFetchSpec | null): UiSdlSavedSearch;

  readonly evaluateSpec?: EvaluateSpec | null;
  withEvaluateSpec(evaluateSpec: IEvaluateSpec | null): UiSdlSavedSearch;

  readonly sort?: C3.Array<UiSdlSortSpec | null>;
  withSort(sort: C3.Array<UiSdlSortSpec | null> | Array<IUiSdlSortSpec | null>): UiSdlSavedSearch;

  readonly typeName: string;
  withTypeName(typeName: string): UiSdlSavedSearch;

  readonly acl?: C3.Array<AclEntry | null>;
  withAcl(acl: C3.Array<AclEntry | null> | Array<IAclEntry | null>): UiSdlSavedSearch;

  readonly id: string;
  withId(id: string): UiSdlSavedSearch;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlSavedSearch;

  readonly name: string;
  withName(name: string): UiSdlSavedSearch;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSavedSearch;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlSavedSearch;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlSavedSearch;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): UiSdlSavedSearch;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlSavedSearch;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): UiSdlSavedSearch;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): UiSdlSavedSearch;

  readonly description?: string | null;
  withDescription(description: string | null): UiSdlSavedSearch;

  readonly privateSearch?: boolean;
  withPrivateSearch(privateSearch: boolean): UiSdlSavedSearch;

  readonly metadataId?: string | null;
  withMetadataId(metadataId: string | null): UiSdlSavedSearch;

  readonly serializedFilterFieldValues?: string | null;
  withSerializedFilterFieldValues(serializedFilterFieldValues: string | null): UiSdlSavedSearch;

  readonly createdByUser?: User | null;
  withCreatedByUser(createdByUser: IUser | null): UiSdlSavedSearch;
}

