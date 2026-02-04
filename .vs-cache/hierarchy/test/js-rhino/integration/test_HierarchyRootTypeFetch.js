/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_HierarchyRootTypeFetch';

describe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_HierarchyRootTypeFetch';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // Use HierarchyBranch.c3typ as the root type and specify fetchTableFilter to be exists(path).
    this.rootTypeFetchBranch = {
      'id': 'HierarchyBranchRootFetch',
      'name': 'HierarchyBranch rootType fetch',
      'parentType': 'HierarchyBranch',
      'childType': 'HierarchyBranch',
      'fetchTableType': 'HierarchyBranch',
      'fetchTableFilter': 'exists(path)',
    };

    this.rootTypeFetchHierarchy = {
      id: 'rootTypeFetchHierarchy',
      name: 'rootTypeFetchHierarchy',
      hierarchyLevels: {
        Root: {
          branches: [this.rootTypeFetchBranch],
        },
      },
    };

    // Set up HierarchyBranch test data, only 'testBranch1' and 'testBranch3' have the 'path' field
    this.hierarchyBranchObjs = [{
      'id': 'testBranch1',
      'name': 'testBranch1',
      'path': 'testPath1',
      'parentType': 'TestApiContext',
      'childType': 'TestApiContext',
      'fetchTableType': 'TestApiContext',
    }, {
      'id': 'testBranch2',
      'name': 'testBranch2',
      'parentType': 'TestApiContext',
      'childType': 'TestApiContext',
      'fetchTableType': 'TestApiContext',
    }, {
      'id': 'testBranch3',
      'name': 'testBranch3',
      'path': 'testPath3',
      'parentType': 'TestApiContext',
      'childType': 'TestApiContext',
      'fetchTableType': 'TestApiContext',
    }];

    TestApi.upsertEntity(this.ctx, 'Hierarchy', this.rootTypeFetchHierarchy);
    TestApi.upsertEntity(this.ctx, 'HierarchyBranch', this.rootTypeFetchBranch);
    TestApi.upsertBatchEntity(this.ctx, 'HierarchyBranch', this.hierarchyBranchObjs);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  it('root nodes fetch of HierarchyBranch should be filtered by exists(path)', function () {
    var result = Hierarchy.getChildren(null, 'rootTypeFetchHierarchy');
    var rootFolderNames = result.map(function (node) {
      return node.name;
    });

    expect(rootFolderNames.sorted()).toEqual(['Test Department Children Fetch', 'TestOrganization Children', 'TestOrganization Children Fetch', 'testBranch1', 'testBranch3'].sort());
  });
});
