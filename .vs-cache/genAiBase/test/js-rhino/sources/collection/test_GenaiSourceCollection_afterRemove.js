/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceCollection_afterRemove';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.beforeSourceSystemCount = Genai.SourceSystem.S3.fetchCount();
    this.beforeSourceCollectionCount = Genai.SourceCollection.fetchCount();

    this.sourceSystemsS3 = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceSystem.S3', [
      {
        name: 'test aws 1',
        bucketName: '/test-bucket/aws1',
        mountName: '/test-mount/aws1',
      },
      {
        name: 'test aws 2',
        bucketName: '/test-bucket/aws2',
        mountName: '/test-mount/aws2',
      },
    ]);
    this.collections = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceCollection', [
      {
        name: 'Collection Test 1',
        rootUrl: '/collection-test-1',
        targetUrl: '/collection-test-1',
        system: this.sourceSystemsS3[0],
      },
      {
        name: 'Collection Test 2',
        rootUrl: '/collection-test-2',
        targetUrl: '/collection-test-2',
        system: this.sourceSystemsS3[1],
      },
      {
        name: 'Collection Test 3',
        rootUrl: '/collection-test-3',
        targetUrl: '/collection-test-3',
        system: this.sourceSystemsS3[1],
      },
    ]);

    TestApi.waitForSetup(this.ctx, undefined, 1, 100);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  /**
   * Initial Setup:
   * Genai.SourceSystem.S3    Genai.SourceCollection
   * test aws 1               Collection Test 1
   *
   * test aws 2               Collection Test 2
   *                          Collection Test 3
   */
  describe('set up types and relations correctly', function () {
    beforeAll(function () {
      this.sourceSystem1 = Genai.SourceSystem.make({ id: this.sourceSystemsS3[0] }).getMissing({
        include: 'collections',
      });
      this.sourceSystem2 = Genai.SourceSystem.make({ id: this.sourceSystemsS3[1] }).getMissing({
        include: 'collections',
      });
      this.afterSourceSystemCount = Genai.SourceSystem.S3.fetchCount();
      this.afterSourceCollectionCount = Genai.SourceCollection.fetchCount();
    });

    it('should upsert all related instances when a Genai.SourceCollection is upserted', function () {
      expect(Genai.SourceSystem.S3.fetchCount() - this.beforeSourceSystemCount).toEqual(2);
      expect(Genai.SourceCollection.fetchCount() - this.beforeSourceCollectionCount).toEqual(3);
      expect(this.sourceSystem1.collections.length).toEqual(1);
      expect(this.sourceSystem2.collections.length).toEqual(2);
    });
  });

  describe('Genai.SourceCollection#afterRemove removes Genai.SourceSystem associated correctly', function () {
    beforeAll(function () {
      Genai.SourceCollection.make({ id: this.collections[0] }).remove();
      Genai.SourceCollection.make({ id: this.collections[1] }).remove();
    });

    it('should remove Genai.SourceSystem when it does not have any Genai.SourceCollection associated', function () {
      expect(Genai.SourceSystem.S3.forId(this.sourceSystemsS3[0])).toBeNull();
      expect(Genai.SourceCollection.forId(this.collections[0])).toBeNull();
    });

    it('should not remove Genai.SourceSystem if it has any Genai.SourceCollection associated', function () {
      expect(Genai.SourceSystem.S3.forId(this.sourceSystemsS3[1])).toBeDefined();
      expect(Genai.SourceCollection.forId(this.collections[1])).toBeNull();
      expect(Genai.SourceCollection.forId(this.collections[2])).toBeDefined();
    });
  });

  describe('Create a new Genai.SourceSystem with a name used before', function () {
    beforeAll(function () {
      var rootUrls = ['/test-bucket/aws1'];
      var spec = {
        name: 'test aws 1',
        bucketName: 'test-bucket',
        description: 'test aws 1',
        mountName: 'test-mount',
      };

      // Create a spy to avoid the sync files process triggering batch jobs
      this.spyOnSyncFiles = TestApi.spyOn(this.ctx, Genai.SourceCollection.Utils, 'sync').returnValue(null).register();

      this.newSourceSystem = Genai.SourceSystem.S3.createSourceSystem(spec, rootUrls).get('collections');
      TestApi.waitForSetup(this.ctx, undefined, 1, 100);
    });

    afterAll(function () {
      this.spyOnSyncFiles.unregister();
      Genai.SourceCollection.make({ id: this.newSourceSystem.collections[0] }).remove();
    });

    it('should create a new Genai.SourceSystem', function () {
      expect(Genai.SourceSystem.S3.forId(this.newSourceSystem)).toBeDefined();
    });
  });
});
