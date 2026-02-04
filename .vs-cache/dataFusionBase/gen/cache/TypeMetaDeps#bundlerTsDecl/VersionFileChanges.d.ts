export interface VersionFileChanges {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): VersionFileChanges;

  readonly id?: string | null;
  withId(id: string | null): VersionFileChanges;

  readonly name?: string | null;
  withName(name: string | null): VersionFileChanges;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): VersionFileChanges;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): VersionFileChanges;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): VersionFileChanges;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): VersionFileChanges;

  readonly fileChangeList?: C3.Array<Git.FileChange | null>;
  withFileChangeList(fileChangeList: C3.Array<Git.FileChange | null> | Array<IGit.FileChange | null>): VersionFileChanges;
}

