export interface UiSdlCachedGeneratedFile {

  readonly id?: string | null;
  withId(id: string | null): UiSdlCachedGeneratedFile;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlCachedGeneratedFile;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCachedGeneratedFile;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCachedGeneratedFile;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlCachedGeneratedFile;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlCachedGeneratedFile;

  readonly fingerprintStr?: string | null;
  withFingerprintStr(fingerprintStr: string | null): UiSdlCachedGeneratedFile;

  readonly generatedCode?: string | null;
  withGeneratedCode(generatedCode: string | null): UiSdlCachedGeneratedFile;

  readonly associatedTypeName?: string | null;
  withAssociatedTypeName(associatedTypeName: string | null): UiSdlCachedGeneratedFile;

  readonly sourceContentType?: string | null;
  withSourceContentType(sourceContentType: string | null): UiSdlCachedGeneratedFile;
}

