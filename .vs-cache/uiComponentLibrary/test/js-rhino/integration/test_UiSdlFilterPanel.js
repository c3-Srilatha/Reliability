/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_UiSdlFilterPanel';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.savedSearchName = 'TestSavedSearch_' + this.ctx.id;
    this.savedSearchTypeName = 'Facility';
    this.savedSearchSerializedFilterValues = '{"id":1}';
    this.savedSearchSerializedNewFilterValues = '{"id":2}';
    this.metadataId = 'ComponentMetadataId';
    this.testRole = 'C3.UiSdlAccess';
    this.isNotPrivateSearch = false;

    this.fetchSavedSearch = function (self) {
      return UiSdlSavedSearch.fetch({
        filter: Filter.eq('name', self.savedSearchName),
      }).count;
    };

    this.fetchSavedSearchObj = function (self, index) {
      return UiSdlSavedSearch.fetch({
        filter: Filter.eq('name', self.savedSearchName),
      }).objs[index];
    };

    this.callApi = function (
      savedSearchName,
      savedSearchTypeName,
      savedSearchSerializedFilterValues,
      metadataId,
      privateSearch,
    ) {
      return UiSdlFilterPanel.validateAndPersistSavedSearch(
        savedSearchName,
        savedSearchTypeName,
        savedSearchSerializedFilterValues,
        metadataId,
        privateSearch,
      );
    };
  });

  afterAll(function () {
    UiSdlSavedSearch.removeAll({ filter: Filter.eq('name', this.savedSearchName) }, true);
    TestApi.teardown(this.ctx);
  });

  describe('::validateFilterString', function () {
    describe('When type exists', function () {
      describe('when filter is invalid', function () {
        beforeAll(function () {
          this.internalErrorString = 'Internal error';
          this.result = UiSdlFilterPanel.validateFilterString('UiSdlTestType', 'foo == "bar"');
        });

        it('it returns the correct validation result', function () {
          expect(this.result).toContain(this.internalErrorString);
        });
      });

      describe('when filter is incomplete', function () {
        beforeAll(function () {
          this.internalErrorString = 'Internal error';
          this.result = UiSdlFilterPanel.validateFilterString('UiSdlTestType', 'foo = bar"');
        });

        it('it returns the correct validation result', function () {
          expect(this.result).not.toContain(this.internalErrorString);
        });
      });

      describe('when filter is valid', function () {
        beforeAll(function () {
          this.result = UiSdlFilterPanel.validateFilterString('UiSdlTestType', '1 == 1');
        });

        it('it returns the correct validation result', function () {
          expect(this.result).toEqual('true');
        });
      });
    });

    describe('When type does not exist', function () {
      describe('When the filter is invalid', function () {
        beforeAll(function () {
          this.result = UiSdlFilterPanel.validateFilterString('InvalidType', 'foo == "bar"');
        });

        it('returns false', function () {
          expect(this.result).toEqual('false');
        });
      });

      describe('When the filter is valid', function () {
        beforeAll(function () {
          this.result = UiSdlFilterPanel.validateFilterString('InvalidType', '1 == 1');
        });

        it('returns false', function () {
          expect(this.result).toEqual('false');
        });
      });
    });
  });

  describe('::validateAndPersistSavedSearch', function () {
    describe('with valid role', function () {
      beforeEach(function () {
        this.result = TestRunner.asRole(
          this.testRole,
          Lambda.fromJsFunc(this.callApi).partiallyCall([
            this.savedSearchName,
            this.savedSearchTypeName,
            this.savedSearchSerializedFilterValues,
            this.metadataId,
            this.isNotPrivateSearch,
          ]),
        );
      });

      describe('When the search does not exist yet', function () {
        it('should persist the search', function () {
          var fetchCount = TestRunner.asRole(
            this.testRole,
            Lambda.fromJsFunc(this.fetchSavedSearch).partiallyCall([this]),
          );

          expect(fetchCount).toEqual(1);
        });

        it('should return true', function () {
          expect(this.result).toEqual(true);
        });
      });

      describe('When the search already exists', function () {
        // Try to call again with the same name
        beforeEach(function () {
          this.result = TestRunner.asRole(
            this.testRole,
            Lambda.fromJsFunc(this.callApi).partiallyCall([
              this.savedSearchName,
              this.savedSearchTypeName,
              this.savedSearchSerializedNewFilterValues,
              this.metadataId,
              this.isNotPrivateSearch,
            ]),
          );
        });

        it('should persist a new saved search', function () {
          var fetchCount = TestRunner.asRole(
            this.testRole,
            Lambda.fromJsFunc(this.fetchSavedSearch).partiallyCall([this]),
          );
          var savedSearchObj = TestRunner.asRole(
            this.testRole,
            Lambda.fromJsFunc(this.fetchSavedSearchObj).partiallyCall([this, 0]),
          );
          expect(fetchCount).toEqual(1);
          expect(savedSearchObj.serializedFilterFieldValues).toEqual(this.savedSearchSerializedNewFilterValues);
        });

        it('should still return true', function () {
          expect(this.result).toEqual(true);
        });
      });
    });

    describe('with invalid role', function () {
      beforeEach(function () {
        UiSdlSavedSearch.removeAll({ filter: Filter.eq('name', this.savedSearchName) }, true);
      });

      it('should throw an error', function () {
        expect(() => {
          TestRunner.asRole(
            'C3.Anonymous',
            Lambda.fromJsFunc(this.callApi).partiallyCall([
              this.savedSearchName,
              this.savedSearchTypeName,
              this.savedSearchSerializedFilterValues,
              this.metadataId,
              this.isNotPrivateSearch,
            ]),
          );
        }).toThrow();
      });

      it('should not persist the search', function () {
        var fetchCount = TestRunner.asRole(
          this.testRole,
          Lambda.fromJsFunc(this.fetchSavedSearch).partiallyCall([this]),
        );

        expect(fetchCount).toEqual(0);
      });
    });
  });
});
