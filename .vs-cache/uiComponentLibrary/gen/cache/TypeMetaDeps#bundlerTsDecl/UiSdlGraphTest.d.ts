export interface UiSdlGraphTest {

  readonly m_vertices?: C3.Array<UiSdlGraphTestVertex | null>;
  withM_vertices(m_vertices: C3.Array<UiSdlGraphTestVertex | null> | Array<IUiSdlGraphTestVertex | null>): UiSdlGraphTest;

  readonly m_edges?: C3.Array<UiSdlGraphTestEdge | null>;
  withM_edges(m_edges: C3.Array<UiSdlGraphTestEdge | null> | Array<IUiSdlGraphTestEdge | null>): UiSdlGraphTest;

  readonly m_nonTraversableVertices?: C3.Array<UiSdlGraphTestVertex | null>;
  withM_nonTraversableVertices(m_nonTraversableVertices: C3.Array<UiSdlGraphTestVertex | null> | Array<IUiSdlGraphTestVertex | null>): UiSdlGraphTest;

  readonly m_cacheKey?: string | null;
  withM_cacheKey(m_cacheKey: string | null): UiSdlGraphTest;
}

