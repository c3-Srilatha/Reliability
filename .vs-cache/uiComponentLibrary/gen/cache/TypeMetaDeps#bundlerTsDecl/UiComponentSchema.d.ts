export interface UiComponentSchema {

  readonly id: string;
  withId(id: string): UiComponentSchema;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiComponentSchema;

  readonly name?: string | null;
  withName(name: string | null): UiComponentSchema;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiComponentSchema;

  readonly version?: number | null;
  withVersion(version: number | null): UiComponentSchema;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiComponentSchema;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): UiComponentSchema;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiComponentSchema;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): UiComponentSchema;

  readonly jsonSchema?: any | null;
  withJsonSchema(jsonSchema: any | null): UiComponentSchema;
}

