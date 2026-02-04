export interface UiSdlPageGroup {

  readonly id: string;
  withId(id: string): UiSdlPageGroup;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlPageGroup;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPageGroup;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPageGroup;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlPageGroup;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlPageGroup;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlPageGroup;

  readonly pages?: C3.Array<UiSdlPage | null>;
  withPages(pages: C3.Array<UiSdlPage | null> | Array<IUiSdlPage | null>): UiSdlPageGroup;
}

