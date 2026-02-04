/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Hierarchy_FetchHierarchyBranch';

describe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_Hierarchy_FetchHierarchyBranch';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  describe('::fetchData', function () {
    describe('for a homogeneous fetch hierarchy', function () {
      describe('without currentNode', function () {
        it('should return data in the correct format', function () {
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, null, 1);

          expect(result.hasMore).toBe(true);
          expect(result.objs[0].expanded).toBe(null);
          expect(result.objs[0].node.nodeId).toBe('org0');
          expect(result.objs[0].node.name).toBe('Organization 0');
          expect(result.objs[0].node.nodeType).toBe('TestOrganization');
          expect(result.objs[0].node.depth).toBe(0);
          expect(result.objs[0].node.hasChildren).toBe(false);
          expect(result.objs[0].node.nodeId).toBe('org0');
          expect(result.objs[0].obj.id).toBe('org0');
        });

        it('should return data with correct expand field', function () {
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, null, 2, null, null, { 'TestOrganization': ['org1'] });
          expect(result.objs[0].expanded).toBe(false);
          expect(result.objs[0].node.nodeId).toBe('org0');
          expect(result.objs[0].obj.id).toBe('org0');
          expect(result.objs[1].expanded).toBe(true);
          expect(result.objs[1].node.nodeId).toBe('org1');
          expect(result.objs[1].obj.id).toBe('org1');
          expect(result.objs[2].expanded).toBe(false);
          expect(result.objs[2].node.nodeId).toBe('suborg1_1');
          expect(result.objs[2].obj.id).toBe('suborg1_1');
          expect(result.hasMore).toBe(true);
        });

        it('should return data with correct limit (3) for root nodes', function () {
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, null, 3, null, null);
          expect(result.objs.length).toEqual(3);
        });

        it('should return data with correct limit (10) for root nodes', function () {
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, null, 10, null, null);
          expect(result.objs.length).toEqual(10);
        });

        it('should expand nodes at any depth', function () {
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, null, 5, null, null, { 'TestOrganization': ['org4', 'suborg4_2'] });
          expect(result.objs.length).toEqual(10);
          expect(result.objs.map((o) => o.node.nodeId)).toEqual([
            'org0', 'org1', 'org2', 'org3', 'org4', 'suborg4_1', 'suborg4_2', 'suborg4_2_1', 'suborg4_3', 'suborg4_4',
          ]);
        });
      });

      describe('with currentNode', function () {
        it('should return data with currentNode and expand field', function () {
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, {
            nodeId: 'org1', nodeType: 'TestOrganization', hasChildren: true, depth: 0,
          }, null, null, null, { 'TestOrganization': ['org1'] });
          expect(result.objs[0].expanded).toBe(true);
          expect(result.objs[0].node.nodeId).toBe('org1');
          expect(result.objs[0].obj.id).toBe('org1');
          expect(result.objs[1].expanded).toBe(false);
          expect(result.objs[1].node.nodeId).toBe('suborg1_1');
          expect(result.objs[1].obj.id).toBe('suborg1_1');
        });

        it('should return nodes related to currentNode', function () {
          var currentNode = {
            nodeId: 'org2', nodeType: 'TestOrganization', hasChildren: true, depth: 0,
          };
          var expandedParents = { 'TestOrganization': ['org2'] };
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, currentNode, null, null, null, expandedParents);

          expect(result.objs[0].expanded).toBe(true);
          expect(result.objs[0].node.nodeId).toBe('org2');
          expect(result.objs[0].obj.id).toBe('org2');
          expect(result.objs[1].expanded).toBe(false);
          expect(result.objs[1].node.nodeId).toBe('suborg2_1');
          expect(result.objs[1].obj.id).toBe('suborg2_1');
          expect(result.objs[2].expanded).toBe(false);
          expect(result.objs[2].node.nodeId).toBe('suborg2_2');
          expect(result.objs[2].obj.id).toBe('suborg2_2');
        });

        /**
         * Reason: When a hierarchy visualization wants to incrementally load subnodes, the currentNode
         * can be provided no matter how deep in the hierarchy it is.
         */
        it('should find nodes at any depth', function () {
          var currentNode = {
            nodeId: 'suborg4_2', nodeType: 'TestOrganization', hasChildren: true, depth: 1,
          };
          var expandedParents = { 'TestOrganization': ['suborg4_2'] };
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, currentNode, null, null, null, expandedParents);

          expect(result.objs[0].expanded).toBe(true);
          expect(result.objs[0].node.nodeId).toBe('suborg4_2');
          expect(result.objs[0].obj.id).toBe('suborg4_2');
          expect(result.objs[1].expanded).toBe(false);
          expect(result.objs[1].node.nodeId).toBe('suborg4_2_1');
          expect(result.objs[1].obj.id).toBe('suborg4_2_1');
        });

        /*
         * Reason: When a hierarchy visualization reopens a branch that was previously explored and
         * several subnodes were opened inside it.
         */
        it('should expand nodes at any depth', function () {
          var currentNode = {
            nodeId: 'org4', nodeType: 'TestOrganization', hasChildren: true, depth: 0,
          };
          var expandedParents = { 'TestOrganization': ['org4', 'suborg4_3'] };
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, currentNode, null, null, null, expandedParents);

          expect(result.objs[0].expanded).toBe(true);
          expect(result.objs[0].node.nodeId).toBe('org4');
          expect(result.objs[0].obj.id).toBe('org4');

          expect(result.objs[1].expanded).toBe(false);
          expect(result.objs[1].node.nodeId).toBe('suborg4_1');
          expect(result.objs[1].obj.id).toBe('suborg4_1');

          expect(result.objs[2].expanded).toBe(false);
          expect(result.objs[2].node.nodeId).toBe('suborg4_2');
          expect(result.objs[2].obj.id).toBe('suborg4_2');

          expect(result.objs[3].expanded).toBe(true);
          expect(result.objs[3].node.nodeId).toBe('suborg4_3');
          expect(result.objs[3].obj.id).toBe('suborg4_3');

          expect(result.objs[4].expanded).toBe(false);
          expect(result.objs[4].node.nodeId).toBe('suborg4_3_1');
          expect(result.objs[4].obj.id).toBe('suborg4_3_1');

          expect(result.objs[5].expanded).toBe(false);
          expect(result.objs[5].node.nodeId).toBe('suborg4_3_2');
          expect(result.objs[5].obj.id).toBe('suborg4_3_2');

          expect(result.objs[6].expanded).toBe(false);
          expect(result.objs[6].node.nodeId).toBe('suborg4_4');
          expect(result.objs[6].obj.id).toBe('suborg4_4');
        });

        /**
         * Reason: When a hierarchy visualization wants to close a branch, it can use the same API
         * that it uses when opening the branch. The hierarchy visualization can keep the topological
         * order updated in the same way as when it is opened.
         */
        it('should return single node if not expanded', function () {
          var result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, {}, {
            nodeId: 'org4', nodeType: 'TestOrganization', hasChildren: true, depth: 0,
          }, null, null, null, { 'TestOrganization': [] });

          expect(result.objs[0].expanded).toBe(null);
          expect(result.objs[0].node.nodeId).toBe('org4');
          expect(result.objs[0].obj.id).toBe('org4');
        });
      });
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });
});
