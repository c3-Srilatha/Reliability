export interface TestGraphVisualization {

  readonly m_vertices?: C3.Array<TestGraphVisualizationNode | null>;
  withM_vertices(m_vertices: C3.Array<TestGraphVisualizationNode | null> | Array<ITestGraphVisualizationNode | null>): TestGraphVisualization;

  readonly m_edges?: C3.Array<TestGraphVisualizationEdge | null>;
  withM_edges(m_edges: C3.Array<TestGraphVisualizationEdge | null> | Array<ITestGraphVisualizationEdge | null>): TestGraphVisualization;

  readonly m_nonTraversableVertices?: C3.Array<TestGraphVisualizationNode | null>;
  withM_nonTraversableVertices(m_nonTraversableVertices: C3.Array<TestGraphVisualizationNode | null> | Array<ITestGraphVisualizationNode | null>): TestGraphVisualization;

  readonly m_cacheKey?: string | null;
  withM_cacheKey(m_cacheKey: string | null): TestGraphVisualization;
}

