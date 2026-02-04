/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Hierarchy_Heterogeneous';

// TODO: PLAT-43408 enable the next describe block
xdescribe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_Hierarchy_Heterogeneous';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    TestOrganizationDenorm.denormalizeHierarchy();
    TestDepartmentDenorm.denormalizeHierarchy();
    TestApi.waitForSetup(this.ctx, null, 1, 120);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::fetchData', function () {
    describe('for a heterogeneous fetch hierarchy', function () {
      describe('without currentNode ', function () {
        it('should return data in the correct format ', function () {
          var result = Hierarchy.fetchData('TestHeterogeneousHierarchy', {}, {}, null, 1, null, null);
          expect(result.objs[0]).toEqual({
            expanded: null,
            node: {
              nodeId: 'org0',
              name: 'Organization 0',
              nodeType: 'TestOrganization',
              depth: 0.0,
              hasChildren: false,
              context: [],
            },
            obj: jasmine.objectContaining({
              id: 'org0',
              meta: jasmine.objectContaining({ fetchType: 'TestOrganization' }),
            }),
          });
        });

        it('should return the limit number of nodes.', function () {
          var result = Hierarchy.fetchData('TestHeterogeneousHierarchy', {}, {}, null, 6, null, null);
          expect(result.objs.length).toEqual(6);
        });

        it('can sort the data root level by name in descending order.', function () {
          var spec = {
            TestDepartment: {
              include: ['id', 'name'],
            },
            TestOrganization: {
              include: ['id', 'name'],
            },
            order: 'descending(name)',
          };

          var result = Hierarchy.fetchData('TestHeterogeneousHierarchy', {}, spec, null, 5, null, null);
          expect(result.objs.map(function (o) { return o.obj.id; })).toEqual(['org4', 'org3', 'org2', 'org1', 'org0']);
        });

        it('can filter the data of different levelType by id', function () {
          var spec = {
            TestOrganization: {
              include: ['id', 'name'],
            },
            TestDepartment: {
              include: ['id', 'name'],
            },
            filter: "id == 'dept0' || id == 'org0'",
          };
          var result = Hierarchy.fetchData('TestHeterogeneousHierarchy', {}, spec, null, 5, null, null);
          expect(result.objs.length).toEqual(2);
        });

        it('can filter the data of different levelType by different field ', function () {
          var spec = {
            TestOrganization: {
              include: ['id', 'name'],
            },
            TestDepartment: {
              include: ['id', 'name'],
            },
            filter: "id == 'dept1' || name == 'Organization 0'",
          };
          var expendedParents = { 'TestOrganization': ['org4'] };

          var result = Hierarchy.fetchData('TestHeterogeneousHierarchy', {}, spec, null, 15, null, null, expendedParents);
          expect(result.objs.length).toEqual(3);
          expect(result.objs[0].obj.id).toEqual('org0');
          expect(result.objs[2].obj.id).toEqual('dept1');
        });
      });

      describe('with currentNode ', function () {
        describe('with different type of branch in the same hierarchyLevel ', function () {
          it('should sort within each child branch but not across the branches ', function () {
            var currentNode = HierarchyNode.make({
              nodeId: 'org4',
              name: 'Organization 4',
              nodeType: 'TestOrganization',
              hasChildren: true,
              depth: 1,
              context: [],
            }, true);
            var spec = {
              TestDepartment: {
                include: ['id', 'name'],
              },
              TestOrganization: {
                include: ['id', 'name'],
              },
              order: 'descending(name)',
            };
            var expendedParents = { 'TestOrganization': ['org4'] };
            var result = Hierarchy.fetchData('TestHeterogeneousHierarchy', {}, spec, currentNode, null, null, null, expendedParents);
            var resultIds = result.objs.map(function (o) { return o.node.nodeId; });
            expect(resultIds).toEqual(['org4', 'dept1', 'suborg4_4', 'suborg4_3', 'suborg4_2', 'suborg4_1', 'dept2', 'dept0']);
            var resultNames = result.objs.map(function (o) { return o.node.name; });
            expect(resultNames).toEqual(['Organization 4', 'Z Department 1 (Z for testing heterogenerous ordering)', 'Organization 4-4', 'Organization 4-3', 'Organization 4-2', 'Organization 4-1', 'Department 2', 'Department 0']);
          });
        });
      });
    });
  });
});
