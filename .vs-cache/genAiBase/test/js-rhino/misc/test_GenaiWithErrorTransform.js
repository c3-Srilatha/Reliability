/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiWithErrorTransform.js';

describe(filename, function () {
  beforeAll(function () {
    this.genericError = Genai.WithErrorTransform.make();
    this.statusHistory = Genai.SourceFile.StatusHistory.make();
  });

  describe('::getErrors', function () {
    it('for a type with no error messages it returns an empty array', function () {
      expect(this.genericError.getErrors().length).toEqual(0);
    });

    it('for a type with existing error messages it returns an array of error messages', function () {
      var errors = this.statusHistory.getErrors();
      expect(errors.length > 0).toBe(true);
      expect(errors.at(0).typeName).toEqual(this.statusHistory.type().name());
    });

    it('the returned error messages are sorted by error code', function () {
      var errors = this.statusHistory.getErrors();
      var expected = [];
      for (let i = 1; i < errors.length + 1; i++) {
        expected.push(i);
      }
      expect(errors.map((a) => a.errorCode)).toEqual(expected);
    });
  });

  describe('::transformErrorString', function () {
    it('translates to correct value 1', function () {
      expect(this.statusHistory.transformErrorString('No Genai.Retriever provided', 'test_fallback')).toEqual(
        Translation.getTranslationForLocale('GenAiUi.DocumentIndexingError.RetrieverError.NoRetriever', 'en')
      );
    });

    it('translates to correct value 2', function () {
      expect(
        this.statusHistory.transformErrorString('Python process died with exit code 137', 'test_fallback')
      ).toEqual(Translation.getTranslationForLocale('GenAiUi.DocumentIndexingError.IndexingError.General', 'en'));
    });

    it('returns the fallback when there is no match', function () {
      expect(this.statusHistory.transformErrorString('test', 'test_fallback')).toEqual('test_fallback');
    });
  });
});
