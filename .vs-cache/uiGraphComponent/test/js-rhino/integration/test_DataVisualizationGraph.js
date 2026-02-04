/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_DataVisualizationGraph';

// TODO MIG8-3437: re-enable this test
xdescribe(filename, function () {
  var filename = 'test_DataVisualizationGraph';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    TestApi.upsertBatchEntity(this.ctx, 'TestGraphVisualizationNode', [
      {
        id: 'N-001',
        name: 'Node 1',
        description: 'This is node 1',
      },
      {
        id: 'N-002',
        name: 'Node 2',
        description: 'This is node 2',
      },
      {
        id: 'N-003',
        name: 'Node 3',
        description: 'This is node 3',
      },
      {
        id: 'N-004',
        name: 'Node 4',
        description: 'This is node 4',
      },
      {
        id: 'N-005',
        name: 'Node 5',
        description: 'This is node 5',
      },
      {
        id: 'N-006',
        name: 'Node 6',
        description: 'This is node 6',
      },
      {
        id: 'N-007',
        name: 'Node 7',
        description: 'This is node 7',
      },
      {
        id: 'N-008',
        name: 'Node 8',
        description: 'This is node 8',
      },
      {
        id: 'N-009',
        name: 'Node 9',
        description: 'This is node 9',
      },
      {
        id: 'N-010',
        name: 'Node 10',
        description: 'This is node 10',
      },
    ]);
    TestApi.upsertBatchEntity(this.ctx, 'TestGraphVisualizationEdge', [
      {
        id: 'E-001',
        name: 'Edge 1',
        description: 'This is edge 1',
        from: {
          id: 'N-001',
        },
        to: {
          id: 'N-002',
        },
      },
      {
        id: 'E-002',
        name: 'Edge 2',
        description: 'This is edge 2',
        from: {
          id: 'N-001',
        },
        to: {
          id: 'N-003',
        },
      },
      {
        id: 'E-003',
        name: 'Edge 3',
        description: 'This is edge 3',
        from: {
          id: 'N-001',
        },
        to: {
          id: 'N-004',
        },
      },
      {
        id: 'E-004',
        name: 'Edge 4',
        description: 'This is edge 4',
        from: {
          id: 'N-002',
        },
        to: {
          id: 'N-005',
        },
      },
      {
        id: 'E-005',
        name: 'Edge 5',
        description: 'This is edge 5',
        from: {
          id: 'N-003',
        },
        to: {
          id: 'N-006',
        },
      },
      {
        id: 'E-006',
        name: 'Edge 6',
        description: 'This is edge 6',
        from: {
          id: 'N-003',
        },
        to: {
          id: 'N-007',
        },
      },
      {
        id: 'E-007',
        name: 'Edge 7',
        description: 'This is edge 7',
        from: {
          id: 'N-004',
        },
        to: {
          id: 'N-008',
        },
      },
      {
        id: 'E-008',
        name: 'Edge 8',
        description: 'This is edge 8',
        from: {
          id: 'N-004',
        },
        to: {
          id: 'N-010',
        },
      },
      {
        id: 'E-009',
        name: 'Edge 9',
        description: 'This is edge 9',
        from: {
          id: 'N-005',
        },
        to: {
          id: 'N-009',
        },
      },
    ]);

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::loadFullGraphInMemory', function () {
    beforeAll(function () {
      this.inMemoryGraph = TestGraphVisualization.loadFullGraphInMemory();
    });

    afterAll(function () {
      TestGraphVisualization.make({ m_cacheKey: this.inMemoryGraph.m_cacheKey }, true).uncache(true);
    });

    it('should return expected number of vertices', function () {
      expect(this.inMemoryGraph.m_vertices.length).toEqual(10);
    });

    it('should return expected number of edges', function () {
      expect(this.inMemoryGraph.m_edges.length).toEqual(9);
    });

    it('should return non-null cache key', function () {
      expect(this.inMemoryGraph.m_cacheKey).toBeTruthy();
    });
  });

  describe('::loadFullGraph', function () {
    beforeAll(function () {
      this.graph = TestGraphVisualization.loadFullGraph();
    });

    it('should return expected number of vertices', function () {
      expect(this.graph.m_vertices.length).toEqual(10);
    });

    it('should return expected number of edges', function () {
      expect(this.graph.m_edges.length).toEqual(9);
    });

    it('should not return cache key', function () {
      expect(this.graph.m_cacheKey).toBeFalsy();
    });
  });

  describe('::getFilteredGraph', function () {
    describe('::when edgesIds are not provided', function () {
      beforeAll(function () {
        this.inMemoryGraph = TestGraphVisualization.loadFullGraphInMemory();
        DataVisualizationGraphSettings.inst().setGraphCacheKey(this.inMemoryGraph.m_cacheKey);

        this.filteredGraph = TestGraphVisualization.getFilteredGraph('N-001,N-002,N-005,N-010', '');
      });

      afterAll(function () {
        TestGraphVisualization.make({ m_cacheKey: this.inMemoryGraph.m_cacheKey }, true).uncache(true);
        DataVisualizationGraphSettings.inst().clearGraphCacheKey();
      });

      it('should return expected vertices', function () {
        expect(this.filteredGraph.m_vertices).toEqual(
          jasmine.arrayContaining([
            jasmine.objectContaining({ id: 'N-001', name: 'Node 1', description: 'This is node 1' }),
            jasmine.objectContaining({ id: 'N-002', name: 'Node 2', description: 'This is node 2' }),
            jasmine.objectContaining({ id: 'N-005', name: 'Node 5', description: 'This is node 5' }),
            jasmine.objectContaining({ id: 'N-010', name: 'Node 10', description: 'This is node 10' }),
          ]),
        );
      });

      it('should return expected edges', function () {
        expect(this.filteredGraph.m_edges).toEqual(
          jasmine.arrayContaining([
            jasmine.objectContaining({ id: 'E-001', name: 'Edge 1', description: 'This is edge 1' }),
            jasmine.objectContaining({ id: 'E-002', name: 'Edge 2', description: 'This is edge 2' }),
            jasmine.objectContaining({ id: 'E-003', name: 'Edge 3', description: 'This is edge 3' }),
            jasmine.objectContaining({ id: 'E-004', name: 'Edge 4', description: 'This is edge 4' }),
            jasmine.objectContaining({ id: 'E-008', name: 'Edge 8', description: 'This is edge 8' }),
            jasmine.objectContaining({ id: 'E-009', name: 'Edge 9', description: 'This is edge 9' }),
          ]),
        );
      });

      it('should return non-null cache key', function () {
        expect(this.filteredGraph.m_cacheKey).toBeTruthy();
      });
    });

    describe('::when edgesIds are provided', function () {
      beforeAll(function () {
        this.inMemoryGraph = TestGraphVisualization.loadFullGraphInMemory();
        DataVisualizationGraphSettings.inst().setGraphCacheKey(this.inMemoryGraph.m_cacheKey);

        this.filteredGraph = TestGraphVisualization.getFilteredGraph(
          'N-001,N-002,N-005,N-010',
          'E-001,E-003,E-004,E-009',
        );
      });

      afterAll(function () {
        TestGraphVisualization.make({ m_cacheKey: this.inMemoryGraph.m_cacheKey }, true).uncache(true);
        DataVisualizationGraphSettings.inst().clearGraphCacheKey();
      });

      it('should return expected vertices', function () {
        expect(this.filteredGraph.m_vertices).toEqual(
          jasmine.arrayContaining([
            jasmine.objectContaining({ id: 'N-001', name: 'Node 1', description: 'This is node 1' }),
            jasmine.objectContaining({ id: 'N-002', name: 'Node 2', description: 'This is node 2' }),
            jasmine.objectContaining({ id: 'N-005', name: 'Node 5', description: 'This is node 5' }),
            jasmine.objectContaining({ id: 'N-010', name: 'Node 10', description: 'This is node 10' }),
          ]),
        );
      });

      it('should return expected edges', function () {
        expect(this.filteredGraph.m_edges).toEqual(
          jasmine.arrayContaining([
            jasmine.objectContaining({ id: 'E-001', name: 'Edge 1', description: 'This is edge 1' }),
            jasmine.objectContaining({ id: 'E-003', name: 'Edge 3', description: 'This is edge 3' }),
            jasmine.objectContaining({ id: 'E-004', name: 'Edge 4', description: 'This is edge 4' }),
            jasmine.objectContaining({ id: 'E-009', name: 'Edge 9', description: 'This is edge 9' }),
          ]),
        );
      });

      it('should return non-null cache key', function () {
        expect(this.filteredGraph.m_cacheKey).toBeTruthy();
      });
    });
  });
});
