/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Hierarchy_DenormHierarchyBranch';

// TODO: PLAT-43408 enable the next describe block
xdescribe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_Hierarchy_DenormHierarchyBranch';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestOrganizationDenorm.denormalizeHierarchy();
    TestApi.waitForSetup(this.ctx, null, 1, 120);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::fetchData', function () {
    describe('for a denorm hierarchy', function () {
      describe('without currentNode', function () {
        it('should return data in the correct format', function () {
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, null, 1);
          expect(result).toEqual({
            objs: [
              {
                expanded: null,
                node: {
                  nodeId: 'org0',
                  name: 'Organization 0',
                  nodeType: 'TestOrganization',
                  depth: 0,
                  hasChildren: false,
                  context: [],
                },
                obj: jasmine.objectContaining({ id: 'org0' }),
              },
            ],
            hasMore: true,
          });
        });

        it('should return data with correct expand field', function () {
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, null, 2, null, null, { 'TestOrganization': ['org1'] });
          expect(result).toEqual({
            objs: [
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'org0',
                }),
                obj: jasmine.objectContaining({ id: 'org0' }),
              },
              {
                expanded: true,
                node: jasmine.objectContaining({
                  nodeId: 'org1',
                }),
                obj: jasmine.objectContaining({ id: 'org1' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg1_1',
                }),
                obj: jasmine.objectContaining({ id: 'suborg1_1' }),
              },
            ],
            hasMore: true,
          });
        });

        it('should return data with correct limit (5) for root nodes', function () {
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, null, 5, null, null);
          expect(result.objs.length).toEqual(5);
        });

        it('should return data with correct limit (7) for root nodes', function () {
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, null, 7, null, null);
          expect(result.objs.length).toEqual(7);
        });

        it('should expand nodes at any depth', function () {
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, null, 5, null, null, { 'TestOrganization': ['org4', 'suborg4_2'] });
          expect(result.objs.length).toEqual(10);
          expect(result.objs.map((o) => o.node.nodeId)).toEqual([
            'org0', 'org1', 'org2', 'org3', 'org4', 'suborg4_1', 'suborg4_2', 'suborg4_2_1', 'suborg4_3', 'suborg4_4',
          ]);
        });

        it('should filter by using the spec.filter field', function () {
          var results = Hierarchy.fetchData('TestDenormHierarchy', {}, {
            TestOrganization: {
              include: [
                'id',
                'name',
              ],
            },
            filter: "id == 'org2'",
          });
          expect(results.objs.length).toEqual(1);
          expect(results).toEqual({
            objs: [
              {
                expanded: null,
                node: jasmine.objectContaining({
                  nodeId: 'org2',
                }),
                obj: jasmine.objectContaining({ id: 'org2' }),
              },
            ],
          });

          results = Hierarchy.fetchData('TestDenormHierarchy', {}, {
            TestOrganization: {
              include: [
                'id',
                'name',
              ],
            },
            filter: "id != 'org0'",
          });
          expect(results.objs.length).toEqual(9);

          // Search multiple organizations
          results = Hierarchy.fetchData('TestDenormHierarchy', {}, {
            TestOrganization: {
              include: [
                'id',
                'name',
              ],
            },
            filter: "id == 'org3' || id == 'org7'",
          });
          expect(results.objs.length).toEqual(2);
          expect(results).toEqual({
            objs: [
              {
                expanded: null,
                node: jasmine.objectContaining({
                  nodeId: 'org3',
                }),
                obj: jasmine.objectContaining({ id: 'org3' }),
              },
              {
                expanded: null,
                node: jasmine.objectContaining({
                  nodeId: 'org7',
                }),
                obj: jasmine.objectContaining({ id: 'org7' }),
              },
            ],
          });

          // Search suborg from the roots
          var filter = {
            TestOrganization: {
              include: [
                'id',
                'name',
              ],
            },
            filter: "id == 'suborg4_2_1'",
          };
          results = Hierarchy.fetchData('TestDenormHierarchy', {}, filter);
          expect(results.objs.length).toEqual(1);
          expect(results).toEqual({
            objs: [
              {
                expanded: null,
                node: jasmine.objectContaining({
                  nodeId: 'org4',
                }),
                obj: jasmine.objectContaining({ id: 'org4' }),
              },
            ],
          });
        });
      });

      describe('with currentNode', function () {
        it('should be able to return if the parent expanded', function () {
          var currentNode = {
            nodeId: 'suborg4_2', nodeType: 'TestOrganization', hasChildren: true, depth: 1,
          };
          var expandedParents = { 'TestOrganization': ['org4', 'suborg4_2'] };
          var filter = {
            TestOrganization: {
              include: [
                'id',
                'name',
              ],
            },
            filter: "id == 'suborg4_2_1'",
          };

          // With expandedParents
          var results = Hierarchy.fetchData('TestDenormHierarchy', {}, filter, currentNode, null, null, null, expandedParents);
          expect(results.objs.length).toEqual(2);
          expect(results).toEqual({
            objs: [
              {
                expanded: true,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_2',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_2' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_2_1',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_2_1' }),
              },
            ],
          });

          expandedParents = { 'TestOrganization': ['org4'] };
          results = Hierarchy.fetchData('TestDenormHierarchy', {}, filter, currentNode, null, null, null, expandedParents);
          expect(results.objs.length).toEqual(1);
        });
      });

      describe('when with currentNode', function () {
        it('should return data with currentNode and expand field', function () {
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, {
            nodeId: 'org1', nodeType: 'TestOrganization', hasChildren: true, depth: 0,
          }, null, null, null, { 'TestOrganization': ['org1'] });
          expect(result).toEqual({
            objs: [
              {
                expanded: true,
                node: jasmine.objectContaining({
                  nodeId: 'org1',
                }),
                obj: jasmine.objectContaining({ id: 'org1' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg1_1',
                }),
                obj: jasmine.objectContaining({ id: 'suborg1_1' }),
              },
            ],
          });
        });

        it('should return nodes related to currentNode', function () {
          var currentNode = {
            nodeId: 'org2', nodeType: 'TestOrganization', hasChildren: true, depth: 0,
          };
          var expandedParents = { 'TestOrganization': ['org2'] };
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, currentNode, null, null, null, expandedParents);

          expect(result).toEqual({
            objs: [
              {
                expanded: true,
                node: jasmine.objectContaining({
                  nodeId: 'org2',
                }),
                obj: jasmine.objectContaining({ id: 'org2' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg2_1',
                }),
                obj: jasmine.objectContaining({ id: 'suborg2_1' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg2_2',
                }),
                obj: jasmine.objectContaining({ id: 'suborg2_2' }),
              },
            ],
          });
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
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, currentNode, null, null, null, expandedParents);

          expect(result).toEqual({
            objs: [
              {
                expanded: true,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_2',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_2' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_2_1',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_2_1' }),
              },
            ],
          });
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
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, currentNode, null, null, null, expandedParents);

          expect(result).toEqual({
            objs: [
              {
                expanded: true,
                node: jasmine.objectContaining({
                  nodeId: 'org4',
                }),
                obj: jasmine.objectContaining({ id: 'org4' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_1',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_1' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_2',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_2' }),
              },
              {
                expanded: true,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_3',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_3' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_3_1',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_3_1' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_3_2',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_3_2' }),
              },
              {
                expanded: false,
                node: jasmine.objectContaining({
                  nodeId: 'suborg4_4',
                }),
                obj: jasmine.objectContaining({ id: 'suborg4_4' }),
              },
            ],
          });
        });

        /**
         * Reason: When a hierarchy visualization wants to close a branch, it can use the same API
         * that it uses when opening the branch. The hierarchy visualization can keep the topological
         * order updated in the same way as when it is opened.
         */
        it('should return single node if not expanded', function () {
          var result = Hierarchy.fetchData('TestDenormHierarchy', {}, {}, {
            nodeId: 'org4', nodeType: 'TestOrganization', hasChildren: true, depth: 0,
          }, null, null, null, { 'TestOrganization': [] });
          expect(result).toEqual({
            objs: [
              {
                expanded: null,
                node: jasmine.objectContaining({
                  nodeId: 'org4',
                }),
                obj: jasmine.objectContaining({ id: 'org4' }),
              },
            ],
          });
        });
      });
    });
  });
});
