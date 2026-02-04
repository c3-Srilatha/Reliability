/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_FilterAPIs';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.files = TestApi.upsertBatchEntity(this.ctx, 'Genai.SourceFile', [
      {
        originalFile: C3.File.make('test-file-1.txt'),
        metadata: Genai.SourceFile.Metadata.make({
          fileName: 'test-file-1',
          fileType: 'txt',
          date: DateTime.make('2018-01-01'),
          author: 'Tom',
          tags: [Genai.SourceFile.Metadata.Tag.fromString('tag 1')],
        }),
      },
      {
        originalFile: C3.File.make('test-file-2.pdf'),
        metadata: Genai.SourceFile.Metadata.make({
          fileName: 'test-file-2',
          fileType: 'pdf',
          date: DateTime.make('2018-02-02'),
          author: 'Bob',
          tags: [Genai.SourceFile.Metadata.Tag.fromString('tag 1'), Genai.SourceFile.Metadata.Tag.fromString('tag 2')],
        }),
      },
      {
        originalFile: C3.File.make('test-file-3.pdf'),
        metadata: Genai.SourceFile.Metadata.make({
          fileName: 'test-file-3',
          fileType: 'pdf',
          date: DateTime.make('2018-01-01'),
          author: 'Tom',
          tags: [Genai.SourceFile.Metadata.Tag.fromString('tag 3')],
        }),
      },
      {
        originalFile: C3.File.make('test-file-1.txt'),
        metadata: Genai.SourceFile.Metadata.make({
          fileName: 'test-file-1',
          fileType: 'txt',
          date: DateTime.make('2018-02-02'),
          author: 'Bob',
          tags: [Genai.SourceFile.Metadata.Tag.fromString('tag 2'), Genai.SourceFile.Metadata.Tag.fromString('tag 4')],
        }),
      },
    ]);
    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('getMetadataFields', function () {
    it('returns the correct fields when no predicate is provided', function () {
      expect(Genai.Source.getMetadataFields().pluck('name')).toEqual([
        'fileName',
        'fileType',
        'author',
        'date',
        'tags',
        'bannedTags',
        'docType',
        'extractMetadata',
        'manufacturer',
      ]);
    });

    it('tests a predicate that filters out datetime fields', function () {
      this.predicate = function (field) {
        return field.valueType.name !== 'datetime';
      };
      expect(Genai.Source.getMetadataFields(this.predicate).pluck('name')).toEqual([
        'fileName',
        'fileType',
        'author',
        'tags',
        'bannedTags',
        'docType',
        'extractMetadata',
        'manufacturer',
      ]);
    });

    it('tests a predicate that filters out fields that do not have "file" in their names', function () {
      this.predicate = function (field) {
        return field.name.includes('file');
      };
      expect(Genai.Source.getMetadataFields(this.predicate).pluck('name')).toEqual(['fileName', 'fileType']);
    });
  });

  describe('getAllMetadataValues', function () {
    it('returns the correct map when no predicate is provided', function () {
      expect(Genai.Source.getAllMetadataValues()).toEqual(
        jasmine.objectContaining({
          fileName: C3.Set.ofAny('test-file-1', 'test-file-2', 'test-file-3'),
          fileType: C3.Set.ofAny('txt', 'pdf'),
          date: C3.Set.ofAny(DateTime.make('2018-01-01'), DateTime.make('2018-01-02')),
          author: C3.Set.ofAny('Tom', 'Bob'),
          tags: C3.Set.ofAny({ label: 'tag 1' }, { label: 'tag 2' }, { label: 'tag 3' }, { label: 'tag 4' }),
        })
      );
    });

    it('returns the correct map with a predicate that filters out fields that do not have "file" in their names', function () {
      this.predicate = function (field) {
        return field.name.includes('file');
      };
      expect(Genai.Source.getAllMetadataValues(this.predicate)).toEqual(
        jasmine.objectContaining({
          fileName: C3.Set.ofAny('test-file-1', 'test-file-2', 'test-file-3'),
          fileType: C3.Set.ofAny('txt', 'pdf'),
        })
      );
    });

    describe('should fetch the count of source files for the user', function () {
      beforeAll(function () {
        this.spyFetchCountUser = TestApi.spyOn(this.ctx, 'Genai.SourceFile', 'fetchCountForUser')
          .returnValue(3)
          .register();
      });

      it('returns the total count of files with a predicate that filters field "fileName""', function () {
        this.predicate = function (field) {
          return field.name.includes('fileName');
        };

        /*
         * Genai.SourceFile.fetchCountForUser is mocked to value 3. The first 3 files that the function is getting are -
         * test-file-1 (2018-01-01), test-file-1 (2018-02-02) and test-file-2 (2018-02-02)
         * The metadata is fileName and since there are only 2 unique file names, the expected value is 2.
         */
        var filenames = Genai.Source.getAllMetadataValues(this.predicate).get('fileName');
        expect(filenames.count())
          .withContext('filesname.count() for ' + filenames)
          .toEqual(2);
      });

      afterAll(function () {
        this.spyFetchCountUser.unregister();
      });
    });
  });
});
