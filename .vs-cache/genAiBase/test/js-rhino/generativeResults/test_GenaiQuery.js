/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQuery';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  // Helper function to create filter objects
  function createFilter(operator, target, wrappingExp, additionalProps) {
    var filter = {
      target: target,
      wrappingExp: wrappingExp || null,
    };

    // Merge additional properties
    if (additionalProps) {
      for (var key in additionalProps) {
        if (Object.prototype.hasOwnProperty.call(additionalProps, key)) {
          filter[key] = additionalProps[key];
        }
      }
    }

    return {
      [operator]: [filter],
    };
  }

  describe('#ensureValid', function () {
    it('should throw error for empty search query', function () {
      var query = Genai.Query.make({
        rawQuery: '',
        baseQuery: '',
        standaloneQuery: '',
      });

      expect(function () {
        query.ensureValid();
      }).toThrow();
    });

    it('should update query when standaloneQuery is empty but rawQuery exists', function () {
      var query = Genai.Query.make({
        rawQuery: 'test query with ext:pdf',
        baseQuery: 'test query with ext:pdf',
        standaloneQuery: '',
      });

      var updatedQuery = query.ensureValid();

      expect(updatedQuery.standaloneQuery).toEqual('test query with');
      expect(updatedQuery.filters).toBeDefined();
      expect(updatedQuery.filters.fileType).toBeDefined();
    });

    it('should update query when baseQuery and rawQuery are empty but standaloneQuery exists', function () {
      var query = Genai.Query.make({
        rawQuery: '',
        baseQuery: '',
        standaloneQuery: 'standalone query',
      });

      var updatedQuery = query.ensureValid();

      expect(updatedQuery.rawQuery).toEqual('standalone query');
      expect(updatedQuery.baseQuery).toEqual('standalone query');
    });

    it('should preserve existing filters when updating query', function () {
      var existingFilters = createFilter('ext', ['pdf']);

      var query = Genai.Query.make({
        rawQuery: 'test query ext:pdf',
        baseQuery: 'test query ext:pdf',
        standaloneQuery: '',
        filters: existingFilters,
      });

      var updatedQuery = query.ensureValid();

      // The existing filters should be preserved, not replaced by parsed filters
      expect(updatedQuery.filters.ext.length).toEqual(1);
      expect(updatedQuery.filters.ext[0].target).toEqual(['pdf']);
      expect(updatedQuery.standaloneQuery).toEqual('test query');
    });

    it('should preserve original filters when filters exist in both original and query string', function () {
      var originalFilters = createFilter('ext', ['pdf']);

      var query = Genai.Query.make({
        rawQuery: 'test query ext:doc',
        baseQuery: 'test query ext:doc',
        standaloneQuery: '',
        filters: originalFilters,
      });

      var updatedQuery = query.ensureValid();

      // Original filters should be preserved (the warning is logged internally)
      expect(updatedQuery.filters.ext.length).toEqual(1);
      expect(updatedQuery.filters.ext[0].target).toEqual(['pdf']);
    });

    it('should return current query when already valid', function () {
      var query = Genai.Query.make({
        rawQuery: 'test query',
        baseQuery: 'test query',
        standaloneQuery: 'test query',
      });

      var result = query.ensureValid();

      // When query is already valid, ensureValid should return the same query
      expect(result.rawQuery).toEqual(query.rawQuery);
      expect(result.baseQuery).toEqual(query.baseQuery);
      expect(result.standaloneQuery).toEqual(query.standaloneQuery);
    });
  });

  describe('#addFilters', function () {
    it('should add filters with OR operator', function () {
      var query = Genai.Query.make({
        filters: createFilter('ext', ['pdf']),
      });

      var newFilters = createFilter('ext', ['doc']);

      var result = query.addFilters(newFilters, 'OR');

      expect(result.filters.ext.length).toEqual(2);
      expect(result.filters.ext[0].target).toEqual(['pdf']);
      expect(result.filters.ext[1].target).toEqual(['doc']);
    });
  });

  describe('#toC3Filter', function () {
    it('should convert filters to C3 filter with default path', function () {
      var query = Genai.Query.make({
        filters: createFilter('ext', ['pdf']),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should convert filters to C3 filter with custom path', function () {
      var query = Genai.Query.make({
        filters: createFilter('ext', ['pdf']),
      });

      var result = query.toC3Filter('sourceFile');

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should handle before() expression', function () {
      var query = Genai.Query.make({
        filters: createFilter('date', ['2023-01-01'], 'before'),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should handle after() expression', function () {
      var query = Genai.Query.make({
        filters: createFilter('date', ['2023-01-01'], 'after'),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should handle between() expression', function () {
      var query = Genai.Query.make({
        filters: createFilter('date', ['2023-01-01', '2023-12-31'], 'between'),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should throw error for between() with wrong number of arguments', function () {
      var query = Genai.Query.make({
        filters: createFilter('date', ['2023-01-01'], 'between'),
      });

      expect(function () {
        query.toC3Filter();
      }).toThrow();
    });

    it('should handle all() expression', function () {
      var query = Genai.Query.make({
        filters: createFilter('fileName', ['test.pdf', 'test.doc'], 'all'),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should handle empty target array', function () {
      var query = Genai.Query.make({
        filters: createFilter('ext', []),
      });

      expect(function () {
        query.toC3Filter();
      }).toThrow();
    });

    it('should handle wildcard in fileName', function () {
      var query = Genai.Query.make({
        filters: createFilter('fileName', ['test*.pdf']),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should throw error for multiple wildcards', function () {
      var query = Genai.Query.make({
        filters: createFilter('fileName', ['test*.pdf*']),
      });

      expect(function () {
        query.toC3Filter();
      }).toThrow();
    });

    it('should handle AND linking operator', function () {
      var query = Genai.Query.make({
        filters: createFilter('ext', ['pdf'], null, { linkingOperator: 'AND' }),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });

    it('should handle parentheses', function () {
      var query = Genai.Query.make({
        filters: createFilter('ext', ['pdf'], undefined, { openingParens: 1, closingParens: 1 }),
      });

      var result = query.toC3Filter();

      expect(result).toBeDefined();
      expect(result.value).toBeDefined();
    });
  });
});
