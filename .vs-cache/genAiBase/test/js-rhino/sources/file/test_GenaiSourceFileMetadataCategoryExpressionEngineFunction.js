/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiSourceFileMetadataCategoryExpressionEngineFunction';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.user1 = TestIdp.createUser('user1@email.com', 'firstname', 'lastname', 'user1');
    this.user2 = TestIdp.createUser('user2@email.com', 'firstname', 'lastname', 'user2');

    this.categories = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.SourceFile.Metadata.Category',
      [
        {
          label: 'categoryTest1',
          metadataType: Genai.SourceFile.Metadata.TypeEnum.MANUAL,
          meta: {
            createdBy: this.user1,
          },
        },
        {
          label: 'categoryTest2',
          metadataType: Genai.SourceFile.Metadata.TypeEnum.AUTOMATIC,
          meta: {
            createdBy: this.user2,
          },
        },
        {
          label: 'categoryTest3',
          metadataType: Genai.SourceFile.Metadata.TypeEnum.MANUAL,
          meta: {
            createdBy: 'unknownUser',
          },
        },
      ],
      {
        metaOverride: true,
      }
    );
    TestApi.waitForSetup(this.ctx);

    TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile.Metadata.Tag', [
      {
        label: 'tag1',
        category: this.categories[0],
      },
      {
        label: 'tag2',
        category: this.categories[0],
      },
      {
        label: 'tag3',
        category: this.categories[0],
      },
      {
        label: 'tag4',
        category: this.categories[1],
      },
    ]);
    this.tags = Genai.SourceFile.Metadata.Tag.fetch({
      filter: Filter.contains('label', 'tag'),
      order: 'descending(label)',
    }).objs;

    this.documents = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', [
      {
        originalFile: C3.File.make('file1.txt'),
        metadata: Genai.SourceFile.Metadata.make({
          fileName: 'file1',
          fileType: 'txt',
          date: DateTime.make('2018-01-01'),
          author: 'Author',
          tags: [this.tags[0], this.tags[1]],
        }),
      },
      {
        originalFile: C3.File.make('file2.txt'),
        metadata: Genai.SourceFile.Metadata.make({
          fileName: 'file2',
          fileType: 'txt',
          date: DateTime.make('2018-01-01'),
          author: 'Author',
          tags: [this.tags[2], this.tags[3]],
        }),
      },
    ]);
  });

  afterAll(function () {
    TestIdp.removeUser(this.user1);
    TestIdp.removeUser(this.user2);
    TestApi.teardown(this.ctx);
  });

  /**
   * Initial Setup:
   * Documents:         Tags Associated
   * file1.txt          tag1, tag2
   *
   * file2.txt          tag3, tag4
   *
   * Categories:        Created By    Tags Associated       Documents associated
   * categoryTest1      user1         tag1, tag2, tag3      file1.txt, file2.txt
   *
   * categoryTest2      user2         tag4                  file2.txt
   *
   * categoryTest3      unknownUser
   */
  describe('::Genai.SourceFile.Metadata.Category.ExpressionEngineFunction', function () {
    beforeAll(function () {
      this.categoryTest1 = Genai.SourceFile.Metadata.Category.fetch({
        filter: Filter.eq('label', 'categoryTest1'),
        include: 'createdBy, documentsCount',
        limit: 1,
      }).first();
      this.categoryTest2 = Genai.SourceFile.Metadata.Category.fetch({
        filter: Filter.eq('label', 'categoryTest2'),
        include: 'createdBy, documentsCount',
        limit: 1,
      }).first();
    });

    describe('::generateCreatedBy', function () {
      it('should return the correct value for field createdBy', function () {
        expect(this.categoryTest1.createdBy).toEqual(this.user1.email);
        expect(this.categoryTest2.createdBy).toEqual('System');
      });
    });

    describe('::getNumberOfDocuments', function () {
      it('should return the correct number of documents', function () {
        expect(this.categoryTest1.documentsCount).toEqual(2);
        expect(this.categoryTest2.documentsCount).toEqual(1);
      });
    });

    describe('::generateCreatedBy when a user does not exist anymore in the DB', function () {
      beforeAll(function () {
        this.categoryTest3 = Genai.SourceFile.Metadata.Category.fetch({
          filter: Filter.eq('label', 'categoryTest3'),
          include: 'createdBy, documentsCount',
          limit: 1,
        }).first();
      });

      it('should return the correct value for field createdBy', function () {
        expect(this.categoryTest3.createdBy).toEqual('Unknown User');
      });
    });
  });
});
