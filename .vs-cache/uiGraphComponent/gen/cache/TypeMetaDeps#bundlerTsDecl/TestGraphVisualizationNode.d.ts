export interface TestGraphVisualizationNode {

  readonly id: string;
  withId(id: string): TestGraphVisualizationNode;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestGraphVisualizationNode;

  readonly name?: string | null;
  withName(name: string | null): TestGraphVisualizationNode;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestGraphVisualizationNode;

  readonly version?: number | null;
  withVersion(version: number | null): TestGraphVisualizationNode;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestGraphVisualizationNode;

  readonly description?: string | null;
  withDescription(description: string | null): TestGraphVisualizationNode;
}

