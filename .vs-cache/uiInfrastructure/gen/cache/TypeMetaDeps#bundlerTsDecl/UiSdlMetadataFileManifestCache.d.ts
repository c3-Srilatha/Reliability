export interface UiSdlMetadataFileManifestCache {

  readonly id: string;
  withId(id: string): UiSdlMetadataFileManifestCache;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlMetadataFileManifestCache;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetadataFileManifestCache;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMetadataFileManifestCache;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlMetadataFileManifestCache;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlMetadataFileManifestCache;

  readonly content?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>;
  withContent(content: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null> | {[key: string | null]: IUiSdlMetadataFileManifestEntry | null}): UiSdlMetadataFileManifestCache;
}

