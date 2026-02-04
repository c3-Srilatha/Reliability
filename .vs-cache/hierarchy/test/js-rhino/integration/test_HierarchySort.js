/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_HierarchySort';
describe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_HierarchySort';
  beforeAll(function () {
    Action.Spy.removeAll(null, true);
    this.ctx = TestApi.createContext(filename);
    // TODO: PLAT-42401 enable the next line
    // TestOrganizationDenorm.denormalizeHierarchy();

    this.specIdAsc = {
      TestOrganization: {
        include: '[id, name]',
      },
      order: 'ascending(id)',
    };

    this.specNameDesc = {
      TestOrganization: {
        include: '[id, name]',
      },
      order: 'descending(name)',
    };

    TestApi.waitForSetup(this.ctx, null, 1, 120);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::fetchData', function () {
    describe('with currentNode ', function () {
      describe('sort name id in descending order ', function () {
        beforeAll(function () {
          var currentNode = {
            nodeId: 'org4',
            nodeType: 'TestOrganization',
            hasChildren: true,
            depth: 0,
          };

          var expandedParentList = {
            TestOrganization: ['org4'],
          };

          this.result = Hierarchy.fetchData(
            'TestHomogeneousHierarchy',
            {},
            this.specNameDesc,
            currentNode,
            null,
            null,
            null,
            expandedParentList
          );
        });

        it('should be sorted with nodeId in descending order within the children of their parent node.', function () {
          expect(
            this.result.objs.map(function (obj) {
              return obj.node.nodeId;
            })
          ).toEqual(['org4', 'suborg4_4', 'suborg4_3', 'suborg4_2', 'suborg4_1']);
        });
      });
    });

    describe('without currentNode ', function () {
      describe('sort by id in ascending order', function () {
        beforeAll(function () {
          this.result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, this.specIdAsc, null, 3, null, null);
        });

        it('should return nodeIds in ascending order.', function () {
          expect(
            this.result.objs.map(function (obj) {
              return obj.node.nodeId;
            })
          ).toEqual(['org0', 'org1', 'org2']);
        });
      });

      describe('sort by name in decending order ', function () {
        beforeAll(function () {
          this.result = Hierarchy.fetchData('TestHomogeneousHierarchy', {}, this.specNameDesc, null, 3, null, null);
        });

        it('should return nodeIds in descending order.', function () {
          expect(
            this.result.objs.map(function (obj) {
              return obj.node.nodeId;
            })
          ).toEqual(['org2', 'org1', 'org0']);
        });
      });
    });
  });

  // TODO: PLAT-42401 enable the next describe block
  xdescribe('::denorm data', function () {
    describe('without currentNode ', function () {
      describe('sort by id in ascending order', function () {
        beforeAll(function () {
          this.result = Hierarchy.fetchData('TestDenormHierarchy', {}, this.specIdAsc, null, 3, null, null);
        });

        it('should sorted id in ascending order', function () {
          expect(
            this.result.objs.map(function (obj) {
              return obj.node.nodeId;
            })
          ).toEqual(['org0', 'org1', 'org2']);
        });
      });

      describe('sort by name in descending order', function () {
        beforeAll(function () {
          this.result = Hierarchy.fetchData('TestDenormHierarchy', {}, this.specNameDesc, null, 3, null, null);
        });

        it('should sorted name in ascending order', function () {
          expect(
            this.result.objs.map(function (obj) {
              return obj.node.nodeId;
            })
          ).toEqual(['org2', 'org1', 'org0']);
        });
      });
    });

    describe('with currentNode ', function () {
      beforeAll(function () {
        var currentNode = {
          nodeId: 'org4',
          nodeType: 'TestOrganization',
          hasChildren: true,
          depth: 0,
        };

        var expandedParentList = {
          TestOrganization: ['org4'],
        };

        this.result = Hierarchy.fetchData(
          'TestDenormHierarchy',
          {},
          this.specNameDesc,
          currentNode,
          null,
          null,
          null,
          expandedParentList
        );
      });

      it('should sort by name in descending order within the children of a node', function () {
        expect(
          this.result.objs.map(function (obj) {
            return obj.node.nodeId;
          })
        ).toEqual(['org4', 'suborg4_4', 'suborg4_3', 'suborg4_2', 'suborg4_1']);
      });
    });
  });

  describe('::file hirearchy', function () {
    beforeAll(function () {
      // Helper function to generate transformed data
      this.generateTransformedData = function (node) {
        return {
          id: node.nodeId,
          name: node.name,
          type: node.nodeType,
          hasChildren: node.hasChildren,
          isFolder: !/[.].+/.test(node.name),
        };
      };

      this.currentNode = {
        nodeId: 'test/js-browser',
        nodeType: 'Pkg.File',
        name: 'js-browser',
        depth: 0,
        hasChildren: true,
      };

      this.childrenHierarchyNodes = [
        {
          nodeId: 'test/js-browser/luke',
          nodeType: 'Pkg.File',
          name: 'luke',
          depth: 1,
          hasChildren: true,
          parent: this.currentNode,
        },
        {
          nodeId: 'test/js-browser/skywalker',
          nodeType: 'Pkg.File',
          name: 'skywalker',
          depth: 1,
          hasChildren: true,
          parent: this.currentNode,
        },
      ];
    });

    describe('fetch data to get folders ', function () {
      beforeAll(function () {
        this.getChildrenMock = TestApi.spyOn(this.ctx, 'Hierarchy', 'getChildren')
          .returnValue(this.childrenHierarchyNodes)
          .register();

        this.hierarchyFetchMock = TestApi.spyOn(this.ctx, 'Hierarchy', 'fetch')
          .returnValue(
            C3.type('FetchResult<Hierarchy>').make({
              objs: [
                {
                  id: 'metadataFileHierarchy',
                  name: 'metadataFileHierarchy',
                  rootNodeList: [this.currentNode],
                  idToObjectMap: {
                    'Pkg.File': {
                      'test/js-browser': this.generateTransformedData(this.currentNode),
                    },
                  },
                },
              ],
              count: 1,
            })
          )
          .register();
      });

      afterAll(function () {
        this.getChildrenMock.unregister();
        this.hierarchyFetchMock.unregister();
      });

      describe('with currentNode ', function () {
        it('sort by name descending on children nodes', function () {
          var parentNode = {
            nodeId: 'test/js-browser',
            nodeType: 'Pkg.File',
            name: 'js-browser',
            depth: 0,
            hasChildren: true,
            context: [],
          };

          var expandedParents = {
            'Pkg.File': ['test/js-browser'],
          };

          var result = Hierarchy.fetchData(
            'metadataFileHierarchy',
            null,
            this.specNameDesc,
            parentNode,
            null,
            null,
            null,
            expandedParents
          );

          var expected = {
            objs: [
              {
                expanded: true,
                node: this.currentNode,
                obj: this.generateTransformedData(this.currentNode),
              },
              {
                expanded: false,
                node: this.childrenHierarchyNodes[1],
                obj: this.generateTransformedData(this.childrenHierarchyNodes[1]),
              },
              {
                expanded: false,
                node: this.childrenHierarchyNodes[0],
                obj: this.generateTransformedData(this.childrenHierarchyNodes[0]),
              },
            ],
          };

          // TODO: MIG8-3246 uncomment next line
          // expect(result).toEqual(expected);

          // TODO: MIG8-3246 Remove all other expectations
          expect(result.hasMore).not.toBeTruthy();
          expect(result.objs[0].expanded).toEqual(expected.objs[0].expanded);
          expect(result.objs[0].node.nodeId).toEqual(expected.objs[0].node.nodeId);
          expect(result.objs[0].node.nodeType).toEqual(expected.objs[0].node.nodeType);
          expect(result.objs[0].node.name).toEqual(expected.objs[0].node.name);
          expect(result.objs[0].node.depth).toEqual(expected.objs[0].node.depth);
          expect(result.objs[0].node.hasChildren).toEqual(expected.objs[0].node.hasChildren);
          expect(result.objs[0].obj.id).toEqual(expected.objs[0].obj.id);
          expect(result.objs[0].obj.name).toEqual(expected.objs[0].obj.name);
          expect(result.objs[0].obj.type).toEqual(expected.objs[0].obj.type);
          expect(result.objs[0].obj.hasChildren).toEqual(expected.objs[0].obj.hasChildren);
          expect(result.objs[0].obj.isFolder).toEqual(expected.objs[0].obj.isFolder);

          expect(result.objs[1].expanded).toEqual(expected.objs[1].expanded);
          expect(result.objs[1].node.nodeId).toEqual(expected.objs[1].node.nodeId);
          expect(result.objs[1].node.nodeType).toEqual(expected.objs[1].node.nodeType);
          expect(result.objs[1].node.name).toEqual(expected.objs[1].node.name);
          expect(result.objs[1].node.depth).toEqual(expected.objs[1].node.depth);
          expect(result.objs[1].node.hasChildren).toEqual(expected.objs[1].node.hasChildren);
          expect(result.objs[1].node.parent.nodeId).toEqual(expected.objs[1].node.parent.nodeId);
          expect(result.objs[1].node.parent.nodeType).toEqual(expected.objs[1].node.parent.nodeType);
          expect(result.objs[1].node.parent.name).toEqual(expected.objs[1].node.parent.name);
          expect(result.objs[1].node.parent.depth).toEqual(expected.objs[1].node.parent.depth);
          expect(result.objs[1].node.parent.hasChildren).toEqual(expected.objs[1].node.parent.hasChildren);
          expect(result.objs[1].obj.id).toEqual(expected.objs[1].obj.id);
          expect(result.objs[1].obj.name).toEqual(expected.objs[1].obj.name);
          expect(result.objs[1].obj.type).toEqual(expected.objs[1].obj.type);
          expect(result.objs[1].obj.hasChildren).toEqual(expected.objs[1].obj.hasChildren);
          expect(result.objs[1].obj.isFolder).toEqual(expected.objs[1].obj.isFolder);

          expect(result.objs[2].expanded).toEqual(expected.objs[2].expanded);
          expect(result.objs[2].node.nodeId).toEqual(expected.objs[2].node.nodeId);
          expect(result.objs[2].node.nodeType).toEqual(expected.objs[2].node.nodeType);
          expect(result.objs[2].node.name).toEqual(expected.objs[2].node.name);
          expect(result.objs[2].node.depth).toEqual(expected.objs[2].node.depth);
          expect(result.objs[2].node.hasChildren).toEqual(expected.objs[2].node.hasChildren);
          expect(result.objs[2].node.parent.nodeId).toEqual(expected.objs[2].node.parent.nodeId);
          expect(result.objs[2].node.parent.nodeType).toEqual(expected.objs[2].node.parent.nodeType);
          expect(result.objs[2].node.parent.name).toEqual(expected.objs[2].node.parent.name);
          expect(result.objs[2].node.parent.depth).toEqual(expected.objs[2].node.parent.depth);
          expect(result.objs[2].node.parent.hasChildren).toEqual(expected.objs[2].node.parent.hasChildren);
          expect(result.objs[2].obj.id).toEqual(expected.objs[2].obj.id);
          expect(result.objs[2].obj.name).toEqual(expected.objs[2].obj.name);
          expect(result.objs[2].obj.type).toEqual(expected.objs[2].obj.type);
          expect(result.objs[2].obj.hasChildren).toEqual(expected.objs[2].obj.hasChildren);
          expect(result.objs[2].obj.isFolder).toEqual(expected.objs[2].obj.isFolder);
        });
      });

      describe('without currentNode ', function () {
        it('sort by name descending on children nodes', function () {
          var result = Hierarchy.fetchData('metadataFileHierarchy', null, this.specNameDesc, null, null, null, null);
          var expected = {
            objs: [
              {
                expanded: null,
                node: this.childrenHierarchyNodes[1],
                obj: this.generateTransformedData(this.childrenHierarchyNodes[1]),
              },
              {
                expanded: null,
                node: this.childrenHierarchyNodes[0],
                obj: this.generateTransformedData(this.childrenHierarchyNodes[0]),
              },
            ],
          };

          // TODO: MIG8-3246 uncomment next line
          // expect(result).toEqual(expected);

          // TODO: MIG8-3246 Remove all other expectations
          expect(result.hasMore).not.toBeTruthy();

          expect(result.objs[0].expanded).not.toBeTruthy();
          expect(result.objs[0].node.nodeId).toEqual(expected.objs[0].node.nodeId);
          expect(result.objs[0].node.nodeType).toEqual(expected.objs[0].node.nodeType);
          expect(result.objs[0].node.name).toEqual(expected.objs[0].node.name);
          expect(result.objs[0].node.depth).toEqual(expected.objs[0].node.depth);
          expect(result.objs[0].node.hasChildren).toEqual(expected.objs[0].node.hasChildren);
          expect(result.objs[0].node.parent.nodeId).toEqual(expected.objs[0].node.parent.nodeId);
          expect(result.objs[0].node.parent.nodeType).toEqual(expected.objs[0].node.parent.nodeType);
          expect(result.objs[0].node.parent.name).toEqual(expected.objs[0].node.parent.name);
          expect(result.objs[0].node.parent.depth).toEqual(expected.objs[0].node.parent.depth);
          expect(result.objs[0].node.parent.hasChildren).toEqual(expected.objs[0].node.parent.hasChildren);
          expect(result.objs[0].obj.id).toEqual(expected.objs[0].obj.id);
          expect(result.objs[0].obj.name).toEqual(expected.objs[0].obj.name);
          expect(result.objs[0].obj.type).toEqual(expected.objs[0].obj.type);
          expect(result.objs[0].obj.hasChildren).toEqual(expected.objs[0].obj.hasChildren);
          expect(result.objs[0].obj.isFolder).toEqual(expected.objs[0].obj.isFolder);

          expect(result.objs[1].expanded).not.toBeTruthy();
          expect(result.objs[1].node.nodeId).toEqual(expected.objs[1].node.nodeId);
          expect(result.objs[1].node.nodeType).toEqual(expected.objs[1].node.nodeType);
          expect(result.objs[1].node.name).toEqual(expected.objs[1].node.name);
          expect(result.objs[1].node.depth).toEqual(expected.objs[1].node.depth);
          expect(result.objs[1].node.hasChildren).toEqual(expected.objs[1].node.hasChildren);
          expect(result.objs[1].node.parent.nodeId).toEqual(expected.objs[1].node.parent.nodeId);
          expect(result.objs[1].node.parent.nodeType).toEqual(expected.objs[1].node.parent.nodeType);
          expect(result.objs[1].node.parent.name).toEqual(expected.objs[1].node.parent.name);
          expect(result.objs[1].node.parent.depth).toEqual(expected.objs[1].node.parent.depth);
          expect(result.objs[1].node.parent.hasChildren).toEqual(expected.objs[1].node.parent.hasChildren);
          expect(result.objs[1].obj.id).toEqual(expected.objs[1].obj.id);
          expect(result.objs[1].obj.name).toEqual(expected.objs[1].obj.name);
          expect(result.objs[1].obj.type).toEqual(expected.objs[1].obj.type);
          expect(result.objs[1].obj.hasChildren).toEqual(expected.objs[1].obj.hasChildren);
          expect(result.objs[1].obj.isFolder).toEqual(expected.objs[1].obj.isFolder);
        });
      });
    });
  });
});
