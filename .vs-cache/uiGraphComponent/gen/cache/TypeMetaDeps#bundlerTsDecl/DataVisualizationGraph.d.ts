export interface DataVisualizationGraph<V, E> {

  readonly m_vertices?: C3.Array<V | null>;
  withM_vertices(m_vertices: C3.Array<V | null> | Array<V | null>): DataVisualizationGraph;

  readonly m_edges?: C3.Array<E | null>;
  withM_edges(m_edges: C3.Array<E | null> | Array<E | null>): DataVisualizationGraph;

  readonly m_nonTraversableVertices?: C3.Array<V | null>;
  withM_nonTraversableVertices(m_nonTraversableVertices: C3.Array<V | null> | Array<V | null>): DataVisualizationGraph;

  readonly m_cacheKey?: string | null;
  withM_cacheKey(m_cacheKey: string | null): DataVisualizationGraph;
}

