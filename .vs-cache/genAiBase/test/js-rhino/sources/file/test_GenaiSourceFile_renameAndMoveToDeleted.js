/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_GenaiSourceFile_renameAndMoveToDeleted';
var logger = Logger.for(filename);

describe(filename, function () {
  describe('Genai.SourceFile#renameAndMoveToDeleted', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);
      this.test_file0 = C3.File.createFile('testfile0.txt');
      this.test_file1 = C3.File.createFile('testfile1.txt');

      this.userUploadedFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        id: 'sf0',
        originalFile: this.test_file0,
        userUploaded: true,
      }).get('originalFile.url');
      this.userUploaded_eTag = this.userUploadedFile.get('originalFile.eTag').originalFile.eTag;

      this.connectedFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        id: 'sf1',
        originalFile: this.test_file1,
      }).get('originalFile.url');
      this.connectedFile_eTag = this.connectedFile.get('originalFile.eTag').originalFile.eTag;

      TestApi.waitForSetup(this.ctx);

      Genai.SourceFile.renameAndMoveToDeletedFolder([this.userUploadedFile, this.connectedFile]);
    });

    afterAll(function () {
      this.test_file0.delete();
      this.test_file1.delete();
      TestApi.teardown(this.ctx);
    });

    describe('User uploaded file', function () {
      it('Moves file to "deleted" subfolder', function () {
        const fileUrl = this.userUploadedFile.get('originalFile.url').originalFile.url;
        expect(fileUrl.includes('deleted')).toBe(true);
      });

      it('Appends _<timestamp> to the file name', function () {
        const fileUrl = this.userUploadedFile.get('originalFile.url').originalFile.url;
        expect(fileUrl.includes('_')).toBe(true);
        const fileNoExt = fileUrl.split('.')[0];
        const fileSplitTimestamp = fileNoExt.split('_');
        expect(fileSplitTimestamp.length).toBe(2);
      });

      it('The file etag is changed', function () {
        expect(this.userUploadedFile.get('originalFile.eTag').originalFile.eTag).not.toEqual(this.userUploaded_eTag);
      });
    });

    describe('Non-user uploaded file', function () {
      it('Does not move the file to "deleted" subfolder', function () {
        const fileUrl = this.connectedFile.get('originalFile.url').originalFile.url;
        expect(fileUrl.includes('deleted')).toBe(false);
      });

      it('Does not append _<timestamp> to the file name', function () {
        const fileUrl = this.connectedFile.get('originalFile.url').originalFile.url;
        expect(fileUrl.includes('_')).toBe(false);
      });

      it('The file etag is unchanged', function () {
        expect(this.connectedFile.get('originalFile.eTag').originalFile.eTag).toEqual(this.connectedFile_eTag);
      });
    });
  });

  describe('Genai.SourceFile#getDeletedSourceFiles', function () {
    beforeAll(function () {
      this.ctx = TestApi.createContext(filename);
      this.test_file0 = C3.File.createFile('testfile0.txt');
      this.test_file1 = C3.File.createFile('testfile1.txt');

      this.userUploadedFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        id: 'sf0',
        originalFile: this.test_file0,
        userUploaded: true,
        statusHistory: Genai.SourceFile.StatusHistory.make({
          parent: 'sf0',
          value: Genai.SourceFile.StatusEnum.DELETED,
          timestamp: DateTime.nowWithMillis(),
        }),
      });

      this.connectedFile = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
        id: 'sf1',
        originalFile: this.test_file1,
      });

      TestApi.waitForSetup(this.ctx);
    });

    afterAll(function () {
      this.test_file0.delete();
      this.test_file1.delete();
      TestApi.teardown(this.ctx);
    });

    describe('Returns only deleted files', function () {
      it('returns correct values', function () {
        const deletedFiles = Genai.SourceFile.getDeletedSourceFiles({ include: 'statusHistory[0].value' });
        expect(deletedFiles.length).toEqual(1);
        expect(deletedFiles[0].id).toEqual('sf0');
      });
    });
  });
});
