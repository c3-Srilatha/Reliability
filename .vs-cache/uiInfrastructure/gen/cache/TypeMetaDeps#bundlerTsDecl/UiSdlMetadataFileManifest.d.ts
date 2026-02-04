export interface UiSdlMetadataFileManifest {

  readonly id: string;
  withId(id: string): UiSdlMetadataFileManifest;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlMetadataFileManifest;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetadataFileManifest;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMetadataFileManifest;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlMetadataFileManifest;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlMetadataFileManifest;

  readonly job?: UiBundler | null;
  withJob(job: IUiBundler | null): UiSdlMetadataFileManifest;

  readonly content?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>;
  withContent(content: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null> | {[key: string | null]: IUiSdlMetadataFileManifestEntry | null}): UiSdlMetadataFileManifest;
}

