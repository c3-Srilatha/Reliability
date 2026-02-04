export interface VersionFileChangesReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): VersionFileChangesReact;

  readonly id?: string | null;
  withId(id: string | null): VersionFileChangesReact;

  readonly name?: string | null;
  withName(name: string | null): VersionFileChangesReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): VersionFileChangesReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): VersionFileChangesReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): VersionFileChangesReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): VersionFileChangesReact;

  readonly fileChangeList?: C3.Array<Git.FileChange | null>;
  withFileChangeList(fileChangeList: C3.Array<Git.FileChange | null> | Array<IGit.FileChange | null>): VersionFileChangesReact;
}

