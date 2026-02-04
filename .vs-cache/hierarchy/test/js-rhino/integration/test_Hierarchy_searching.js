/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Hierarchy_searching';

describe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_Hierarchy_searching';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::fetchData', function () {
    describe('for a homogeneous fetch hierarchy', function () {
      describe('without currentNode', function () {
        it('should filter root nodes by id', function () {
          // Search root from roots
          var results = Hierarchy.fetchData(
            'TestHomogeneousHierarchy',
            {},
            {
              TestOrganization: {
                include: '[id, name]',
              },
              filter: "id == 'org2'",
            }
          );
          expect(results.objs.length).toEqual(1);
          expect(results.objs[0].expanded).toBe(null);
          expect(results.objs[0].node.nodeId).toBe('org2');
          expect(results.objs[0].obj.id).toBe('org2');

          results = Hierarchy.fetchData(
            'TestHomogeneousHierarchy',
            {},
            {
              TestOrganization: {
                include: '[id,name]',
              },
              filter: "id != 'org0'",
            }
          );
          expect(results.objs.length).toEqual(9);
        });

        it('should filter root nodes with multiple conditions', function () {
          // Search multiple organizations
          var results = Hierarchy.fetchData(
            'TestHomogeneousHierarchy',
            {},
            {
              TestOrganization: {
                include: '[id, name]',
              },
              filter: "id == 'org3' || id == 'org7'",
            }
          );
          expect(results.objs.length).toEqual(2);
          expect(results.objs[0].expanded).toBe(null);
          expect(results.objs[0].node.nodeId).toBe('org3');
          expect(results.objs[0].obj.id).toBe('org3');
          expect(results.objs[1].expanded).toBe(null);
          expect(results.objs[1].node.nodeId).toBe('org7');
          expect(results.objs[1].obj.id).toBe('org7');
        });

        it('should find deeply nested nodes', function () {
          // Search suborg from the roots
          var filter = {
            TestOrganization: {
              include: '[id, name]',
            },
            filter: "id == 'suborg4_2_1'",
          };
          var results = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, filter);
          expect(results.objs.length).toEqual(1);
          expect(results.objs[0].expanded).toBe(null);
          expect(results.objs[0].node.nodeId).toBe('org4');
          expect(results.objs[0].obj.id).toBe('org4');
        });

        it('should return nothing when the filter is empty string', function () {
          var filter = {
            TestOrganization: {
              include: '[id,name]',
            },
            filter: "id==''",
          };
          var expandedParents = { TestOrganization: ['org4', 'suborg4_3'] };
          var results = Hierarchy.fetchData(
            'TestHomogeneousHierarchy',
            {},
            filter,
            null,
            null,
            null,
            null,
            expandedParents
          );
          expect(results.objs.length).toEqual(0);
        });
      });

      describe('with currentNode', function () {
        it('should be able to return if the parent expanded', function () {
          var currentNode = {
            nodeId: 'suborg4_2',
            nodeType: 'TestOrganization',
            hasChildren: true,
            depth: 1,
          };
          var expandedParents = { TestOrganization: ['org4', 'suborg4_2'] };
          var filter = {
            TestOrganization: {
              include: '[id, name]',
            },
            filter: "id == 'suborg4_2_1'",
          };

          // With expandedParents
          var results = Hierarchy.fetchData(
            'TestHomogeneousHierarchy',
            {},
            filter,
            currentNode,
            null,
            null,
            null,
            expandedParents
          );
          expect(results.objs.length).toEqual(2);
          expect(results.objs[0].expanded).toBe(true);
          expect(results.objs[0].node.nodeId).toBe('suborg4_2');
          expect(results.objs[0].obj.id).toBe('suborg4_2');
          expect(results.objs[1].expanded).toBe(false);
          expect(results.objs[1].node.nodeId).toBe('suborg4_2_1');
          expect(results.objs[1].obj.id).toBe('suborg4_2_1');
          expandedParents = { TestOrganization: ['org4'] };
          results = Hierarchy.fetchData(
            'TestHomogeneousHierarchy',
            {},
            filter,
            currentNode,
            null,
            null,
            null,
            expandedParents
          );
          expect(results.objs.length).toEqual(1);
        });
      });
    });
  });
});
