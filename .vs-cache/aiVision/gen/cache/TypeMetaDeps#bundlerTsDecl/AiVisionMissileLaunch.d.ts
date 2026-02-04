export interface AiVisionMissileLaunch {

  readonly id: string;
  withId(id: string): AiVisionMissileLaunch;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): AiVisionMissileLaunch;

  readonly name?: string | null;
  withName(name: string | null): AiVisionMissileLaunch;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AiVisionMissileLaunch;

  readonly version?: number | null;
  withVersion(version: number | null): AiVisionMissileLaunch;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): AiVisionMissileLaunch;

  readonly base?: string | null;
  withBase(base: string | null): AiVisionMissileLaunch;

  readonly target?: string | null;
  withTarget(target: string | null): AiVisionMissileLaunch;
}

