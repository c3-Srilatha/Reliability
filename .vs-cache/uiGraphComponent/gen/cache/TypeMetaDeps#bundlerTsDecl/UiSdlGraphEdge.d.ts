export interface UiSdlGraphEdge<V> {

  readonly id: string;
  withId(id: string): UiSdlGraphEdge;

  readonly from?: V | null;
  withFrom(from: V | null): UiSdlGraphEdge;

  readonly to?: V | null;
  withTo(to: V | null): UiSdlGraphEdge;

  readonly relationship?: string | null;
  withRelationship(relationship: string | null): UiSdlGraphEdge;

  readonly fromInfo?: string | null;
  withFromInfo(fromInfo: string | null): UiSdlGraphEdge;

  readonly toInfo?: string | null;
  withToInfo(toInfo: string | null): UiSdlGraphEdge;

  readonly involvement?: number | null;
  withInvolvement(involvement: number | null): UiSdlGraphEdge;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlGraphEdge;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphEdge;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphEdge;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlGraphEdge;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlGraphEdge;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): UiSdlGraphEdge;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlGraphEdge;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): UiSdlGraphEdge;

  readonly annotation?: string | null;
  withAnnotation(annotation: string | null): UiSdlGraphEdge;
}

