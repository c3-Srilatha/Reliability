export interface UiSdlGraphNode {

  readonly id: string;
  withId(id: string): UiSdlGraphNode;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlGraphNode;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphNode;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphNode;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlGraphNode;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlGraphNode;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): UiSdlGraphNode;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlGraphNode;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): UiSdlGraphNode;

  readonly annotation?: string | null;
  withAnnotation(annotation: string | null): UiSdlGraphNode;
}

