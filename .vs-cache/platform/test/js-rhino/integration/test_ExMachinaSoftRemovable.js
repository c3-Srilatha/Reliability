/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaSoftRemovable';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    // For this test, we'll test ExMachinaSoftRemovable functionality via ExMachinaProjectRoot
    this.createProjects = function (projectIds) {
      TestApi.upsertBatchEntity(this.ctx, 'ExMachinaProjectRoot', projectIds.map(function (pId) {
        return {
          id: pId,
          name: pId,
          kind: ExMachinaProjectKind.STANDARD,
          softRemoved: false,
        };
      }));
    };

    // Common test objects for testing the "read" functions (fetchAvailable, fetchAvailableCount, and getAvailable).
    this.projectIds = [
      filename + '-soft-removed',
      filename + '-not-soft-removed',
    ];

    this.createProjects(this.projectIds);

    ExMachinaProjectRoot.forId(this.projectIds[0]).withField('softRemoved', true).merge();
  });

  describe('fetchAvailable', function () {
    it('only fetches objects that have not been soft-removed', function () {
      var result = ExMachinaProjectRoot.fetchAvailable({
        filter: Filter.startsWith('id', filename)
      }).at('objs.id');
      expect(result.length).toBe(1);
      expect(result).toContain(this.projectIds[1]);
    });

    it('can apply additional filters to further filter results', function () {
      expect(ExMachinaProjectRoot.fetchAvailable({
        filter: Filter.eq('id', 'non-existent-id'),
      }).at('objs').length).toBe(0);
    });
  });

  describe('fetchAvailableCount', function () {
    it('only fetches objects that have not been soft-removed', function () {
      expect(ExMachinaProjectRoot.fetchAvailableCount({
        filter: Filter.startsWith('id', filename)
      })).toBe(1);
    });

    it('can apply additional filters to further filter results', function () {
      expect(ExMachinaProjectRoot.fetchAvailableCount({
        filter: Filter.eq('id', 'non-existent-id'),
      })).toBe(0);
    });
  });

  describe('getAvailable', function () {
    describe('for an object that has not been soft-removed', function () {
      it('returns the object', function () {
        expect(ExMachinaProjectRoot.make({ id: this.projectIds[1] }, true).getAvailable('kind').at('kind')).toBe(ExMachinaProjectKind.STANDARD);
      });
    });

    describe('for a soft removed object', function () {
      it('returns null', function () {
        expect(ExMachinaProjectRoot.make({ id: this.projectIds[0] }, true).getAvailable()).toBe(null);
      });
    });
  });

  describe('softRemove', function () {
    beforeAll(function () {
      this.projectId = 'to-be-removed';
      this.createProjects([this.projectId]);
      ExMachinaProjectRoot.make({ id: this.projectId }, true).softRemove();
    });

    it('does not fully remove the object from the database', function () {
      expect(ExMachinaProjectRoot.make({ id: this.projectId }, true).get()).toBeDefined();
    });

    it('sets the softRemoved field to true for the object', function () {
      expect(ExMachinaProjectRoot.make({ id: this.projectId }, true).get('softRemoved').at('softRemoved')).toBe(true);
    });
  });

  describe('softRemoveAll', function () {
    beforeAll(function () {
      this.projectIdsToBeRemoved = ['to-be-batch-removed-0', 'to-be-batch-removed-1'];
      this.projectIdsToKeep = ['to-be-kept'];
      this.createProjects(this.projectIdsToBeRemoved.concat(this.projectIdsToKeep));
      ExMachinaProjectRoot.softRemoveAll(Filter.ne('id', this.projectIdsToKeep[0]));
    });

    it('keeps objects that are not caught by the provided filter', function () {
      var keptProject = ExMachinaProjectRoot.make({ id: this.projectIdsToKeep[0] }, true).get();
      expect(keptProject).toBeDefined();
      expect(keptProject.get('softRemoved').at('softRemoved')).toBeFalsy();
    });

    it('does not fully remove the objects from the database', function () {
      expect(ExMachinaProjectRoot.fetch({
        filter: Filter.intersects('id', this.projectIdsToBeRemoved),
      }).at('objs').length).toBe(2);
    });

    it('sets the softRemoved field to true for the objects', function () {
      var removedProjects = ExMachinaProjectRoot.fetch({
        filter: Filter.intersects('id', this.projectIdsToBeRemoved),
        include: 'softRemoved',
      }).at('objs');
      expect(removedProjects[0].softRemoved).toBe(true);
      expect(removedProjects[1].softRemoved).toBe(true);
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });
});
