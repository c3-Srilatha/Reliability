/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFile_manualTag';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testSourceFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      originalFile: C3.File.make('meta://genAiBase/test/resource/metadataTagging/metadataTaggingTest1.pdf'),
      metadata: { fileName: 'metadataTaggingTest1', fileType: Genai.SourceFileTypes.PDF },
    });
    Genai.SourceFile.addTagsByCategoryMap({ [this.testSourceFile.id]: { categoryTest1: ['tag2'] } });
    Genai.SourceFile.transitionFilesToStatus([this.testSourceFile], Genai.SourceFile.StatusEnum.INDEXED);
  });

  afterAll(function () {
    Genai.SourceFile.Metadata.Category.removeAll({ filter: Filter.intersects('label', ['categoryTest1']) }, true);
    TestApi.teardown(this.ctx);
  });

  describe('::addManualTag', function () {
    it('should add a manual tag1, maintain the existing automatic tag2, and change status', function () {
      Genai.SourceFile.addManualTag(this.testSourceFile, 'tag1', 'categoryTest1');
      TestApi.waitForSetup(this.ctx, null, 1, 60);
      var result = Genai.SourceFile.fetch({
        filter: Filter.eq('id', this.testSourceFile.id),
        include: 'metadata.tags.this, status',
        limit: 1,
      }).first();
      expect(result.metadata.tags.length).toEqual(2);
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag1');
      expect(result.metadata.tags.toString()).toContain('AutomaticcategoryTest1tag2');
      expect(result.status.value).toEqual(Genai.SourceFile.StatusEnum.NEEDS_REINDEXING);
    });

    it('should not re-add manual tag1 and maintain the existing status and automatic tag2', function () {
      Genai.SourceFile.transitionFilesToStatus([this.testSourceFile], Genai.SourceFile.StatusEnum.INDEXED);
      Genai.SourceFile.addManualTag(this.testSourceFile, 'tag1', 'categoryTest1');
      TestApi.waitForSetup(this.ctx, null, 1, 60);
      var result = Genai.SourceFile.fetch({
        filter: Filter.eq('id', this.testSourceFile.id),
        include: 'metadata.tags.this, status',
        limit: 1,
      }).first();
      expect(result.metadata.tags.length).toEqual(2);
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag1');
      expect(result.metadata.tags.toString()).toContain('AutomaticcategoryTest1tag2');
      expect(result.status.value).toEqual(Genai.SourceFile.StatusEnum.INDEXED);
    });

    it('should replace automatic tag2 with manual tag2 and change status', function () {
      Genai.SourceFile.addManualTag(this.testSourceFile, 'tag2', 'categoryTest1');
      TestApi.waitForSetup(this.ctx, null, 1, 60);
      var result = Genai.SourceFile.fetch({
        filter: Filter.eq('id', this.testSourceFile.id),
        include: 'metadata.tags.this, status',
        limit: 1,
      }).first();
      expect(result.metadata.tags.length).toEqual(2);
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag1');
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag2');
      expect(result.status.value).toEqual(Genai.SourceFile.StatusEnum.NEEDS_REINDEXING);
    });
  });

  describe('::updateManualTag', function () {
    beforeAll(function () {
      Genai.SourceFile.transitionFilesToStatus([this.testSourceFile], Genai.SourceFile.StatusEnum.INDEXED);
      this.aTag1 = Genai.SourceFile.Metadata.Tag.fetch({
        filter: Filter.eq('label', 'tag1'),
        include: 'this, category.this',
        limit: 1,
      }).first();
    });

    it('should update manual tag1 to tag3, maintain the existing manual tag2, and change status', function () {
      Genai.SourceFile.updateManualTag(this.testSourceFile, this.aTag1, 'tag3');
      TestApi.waitForSetup(this.ctx, null, 1, 120);
      var result = Genai.SourceFile.fetch({
        filter: Filter.eq('id', this.testSourceFile.id),
        include: 'metadata.tags.this, metadata.bannedTags.this, status',
        limit: 1,
      }).first();
      expect(result.metadata.tags.length).toEqual(2);
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag2');
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag3');
      expect(result.metadata.bannedTags.length).toEqual(1);
      expect(result.metadata.bannedTags.toString()).toContain('AutomaticcategoryTest1tag1');
      expect(result.status.value).toEqual(Genai.SourceFile.StatusEnum.NEEDS_REINDEXING);
    });
  });

  describe('::removeManualTag', function () {
    beforeAll(function () {
      Genai.SourceFile.transitionFilesToStatus([this.testSourceFile], Genai.SourceFile.StatusEnum.INDEXED);
      this.aTag2 = Genai.SourceFile.Metadata.Tag.fetch({
        filter: Filter.eq('label', 'tag2').and(Filter.eq('metadataType', Genai.SourceFile.Metadata.TypeEnum.MANUAL)),
        include: 'this, category.this',
        limit: 1,
      }).first();
    });

    it('should remove manual tag2, maintain the existing manual tag3, and change status', function () {
      Genai.SourceFile.removeManualTag(this.testSourceFile, this.aTag2);
      TestApi.waitForSetup(this.ctx, null, 1, 120);
      var result = Genai.SourceFile.fetch({
        filter: Filter.eq('id', this.testSourceFile.id),
        include: 'metadata.tags.this, metadata.bannedTags.this, status',
        limit: 1,
      }).first();
      expect(result.metadata.tags.length).toEqual(1);
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag3');
      expect(result.metadata.bannedTags.length).toEqual(2);
      expect(result.metadata.bannedTags.toString()).toContain('AutomaticcategoryTest1tag1');
      expect(result.metadata.bannedTags.toString()).toContain('AutomaticcategoryTest1tag2');
      expect(result.status.value).toEqual(Genai.SourceFile.StatusEnum.NEEDS_REINDEXING);
    });
  });

  describe('::addTagsByCategoryMap', function () {
    it('should only add automatic tag4', function () {
      Genai.SourceFile.addTagsByCategoryMap({
        [this.testSourceFile.id]: { categoryTest1: ['tag1', 'tag2', 'tag3', 'tag4'] },
      });
      TestApi.waitForSetup(this.ctx, null, 1, 60);
      var result = Genai.SourceFile.fetch({
        filter: Filter.eq('id', this.testSourceFile.id),
        include: 'metadata.tags.this',
        limit: 1,
      }).first();
      expect(result.metadata.tags.length).toEqual(2);
      expect(result.metadata.tags.toString()).toContain('ManualcategoryTest1tag3');
      expect(result.metadata.tags.toString()).toContain('AutomaticcategoryTest1tag4');
    });
  });
});
