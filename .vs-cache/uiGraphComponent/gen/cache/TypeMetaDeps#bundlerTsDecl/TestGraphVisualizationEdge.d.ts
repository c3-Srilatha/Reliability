export interface TestGraphVisualizationEdge {

  readonly id: string;
  withId(id: string): TestGraphVisualizationEdge;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestGraphVisualizationEdge;

  readonly name?: string | null;
  withName(name: string | null): TestGraphVisualizationEdge;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestGraphVisualizationEdge;

  readonly version?: number | null;
  withVersion(version: number | null): TestGraphVisualizationEdge;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestGraphVisualizationEdge;

  readonly description?: string | null;
  withDescription(description: string | null): TestGraphVisualizationEdge;

  readonly from?: TestGraphVisualizationNode | null;
  withFrom(from: ITestGraphVisualizationNode | null): TestGraphVisualizationEdge;

  readonly to?: TestGraphVisualizationNode | null;
  withTo(to: ITestGraphVisualizationNode | null): TestGraphVisualizationEdge;
}

