/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Hierarchy_MetadataTestFileHierarchyBranch';

describe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_Hierarchy_MetadataTestFileHierarchyBranch';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.MatadataFileHierarchyBranch = {
      id: 'MetadataFileRootFetch',
      name: 'MetadataFile Root Fetch',
      parentType: 'Pkg.File',
      childType: 'Pkg.File',
      fetchTableType: 'Pkg.File',
      levelType: 'MetadataTestFileHierarchyBranch',
    };

    this.MatadataFileHierarchy = {
      id: 'medataFileHierarchy',
      name: 'medataFileHierarchy',
      hierarchyLevels: {
        Root: {
          branches: [this.MatadataFileHierarchyBranch],
        },
        "Pkg.File": {
          branches: [this.MatadataFileHierarchyBranch],
        },
      },
    };

    TestApi.upsertEntity(this.ctx, 'Hierarchy', this.MatadataFileHierarchy);
    TestApi.upsertEntity(this.ctx, 'HierarchyBranch', this.MatadataFileHierarchyBranch);

    this.rootFolderNode = {
      nodeId: 'hierarchy/test/js-rhino',
      nodeType: 'Pkg.File',
      name: 'js-rhino',
      depth: 0,
      hasChildren: true,
    };

    this.childFolderNode = HierarchyNode.make(
      {
        nodeId: 'hierarchy/test/js-rhino/integration',
        nodeType: 'Pkg.File',
        name: 'integration',
        depth: 1,
        hasChildren: true,
        parent: this.rootFolderNode,
      },
      true
    );

    this.childFileNode = HierarchyNode.make({
      nodeId: '/hierarchy/test/js-rhino/integration/test_Hierarchy_MetadataTestFileHierarchyBranch.js',
      nodeType: 'Pkg.File',
      name: 'test_Hierarchy_MetadataTestFileHierarchyBranch.js',
      depth: 2,
      hasChildren: false,
      parent: this.childFolderNode,
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  /**
   * The following tests depend on the folder structure of the hierarchy package.
   */
  describe('fetchData', function () {
    it('should return root level folders of TestHierarchyTestRunnerKind', function () {
      var testRunnerKinds = TestHierarchyTestRunnerKind.values();
      var result = Hierarchy.fetchData('medataFileHierarchy').objs;
      var rootFolderNames = result.map(function (node) {
        return node.node.name;
      });

      expect(rootFolderNames.sorted()).toEqual(testRunnerKinds.sorted());
    });

    it('should return children folders', function () {
      var result = Hierarchy.fetchData('medataFileHierarchy', {}, {}, this.rootFolderNode, null, null, null, {
        "Pkg.File": [this.rootFolderNode.nodeId],
      });

      expect(result.objs[1]).not.toBeUndefined('Second node in list was not properly returned');
      expect(result.objs[1].node.nodeId).toEqual(this.childFolderNode.nodeId);
    });

    it('should return deeply nested children folders', function () {
      var result = Hierarchy.fetchData('medataFileHierarchy', {}, {}, this.rootFolderNode, null, null, null, {
        "Pkg.File": [this.rootFolderNode.nodeId, this.childFolderNode.nodeId],
      });

      expect(result.objs[2]).not.toBeUndefined('Second node in list was not properly returned');
      expect(result.objs[1].node.nodeId).toEqual(this.childFolderNode.nodeId);
    });
  });

  describe('calls getChildren for metadata files', function () {
    it('should return root level folders of TestHierarchyTestRunnerKind', function () {
      var testRunnerKinds = TestHierarchyTestRunnerKind.values();
      var result = Hierarchy.getChildren(null, 'medataFileHierarchy', null, null, null, true);
      var rootFolderNames = result.map(function (node) {
        return node.name;
      });
      expect(rootFolderNames.sorted()).toEqual(testRunnerKinds.sorted());
    });

    it('should return children folders', function () {
      var result = Hierarchy.getChildren(this.rootFolderNode, 'medataFileHierarchy', null, null, null, true);
      expect(result).toEqual([this.childFolderNode]);
    });

    it('should return children files', function () {
      var result = Hierarchy.getChildren(this.childFolderNode, 'medataFileHierarchy', null, null, null, true);

      result = result.findAny(function (fileNode) {
        return fileNode.name === 'test_Hierarchy_MetadataTestFileHierarchyBranch.js';
      });

      expect(HierarchyNode.make(result).toJsonString()).toBe(HierarchyNode.make(this.childFileNode).toJsonString());
    });
  });
});
