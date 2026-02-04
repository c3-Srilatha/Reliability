/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UiSdlSavedSearch';

describe(filename, function () {
  var filename = 'test_UiSdlSavedSearch';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('#create', function () {
    beforeAll(function () {
      this.id = UiSdlSavedSearch.generateNewIds(1)[0];
    });

    afterAll(function () {
      UiSdlSavedSearch.make(this.id).remove();
    });

    it('should be accessible from C3.UiSdlAccess users', function () {
      expect(
        function () {
          TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id) {
              return UiSdlSavedSearch.make({
                id: id,
                name: id,
                typeName: 'UiSdlSavedSearch',
                spec: FetchSpec.make(),
              }).upsert();
            }).partiallyCall([this.id]),
          );
        }.bind(this),
      ).not.toThrow();
    });

    it('should create the UiSdlSavedSearch object', function () {
      const persistedObj = UiSdlSavedSearch.make(this.id).get();

      expect(persistedObj).toBeDefined();
      expect(persistedObj.name).toBe(this.id);
    });
  });

  describe('#get', function () {
    beforeAll(function () {
      this.id = UiSdlSavedSearch.generateNewIds(1)[0];
      this.privateId = UiSdlSavedSearch.generateNewIds(1)[0];
      UiSdlSavedSearch.make({ id: this.id, name: this.id, typeName: 'UiSdlSavedSearch' }).upsert();
      UiSdlSavedSearch.make({
        id: this.privateId,
        name: this.privateId,
        typeName: 'UiSdlSavedSearch',
        privateSearch: true,
      }).upsert();
    });

    afterAll(function () {
      UiSdlSavedSearch.make(this.id).remove();
    });

    it('should be accessible from C3.UiSdlAccess users', function () {
      expect(
        function () {
          this.result = TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id) {
              return UiSdlSavedSearch.make(id).get();
            }).partiallyCall([this.id]),
          );
        }.bind(this),
      ).not.toThrow();

      expect(this.result).toBeDefined();
      expect(this.result.name).toBe(this.id);
    });

    it('should not be accessible from C3.UiSdlAccess if created by other user and privateSearch is true', function () {
      expect(
        function () {
          this.result = TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id) {
              return UiSdlSavedSearch.make(id).get();
            }).partiallyCall([this.privateId]),
          );
        }.bind(this),
      ).not.toThrow();

      expect(this.result).toBeNull();
    });

    it('should be accessible from C3.UiSdlAccess if created by them and privateSearch is true', function () {
      expect(
        function () {
          this.ownedId = UiSdlSavedSearch.generateNewIds(1)[0];
          this.result = TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id) {
              UiSdlSavedSearch.make({ id: id, name: id, typeName: 'UiSdlSavedSearch', privateSearch: true }).upsert();
              return UiSdlSavedSearch.make(id).get();
            }).partiallyCall([this.ownedId]),
          );
        }.bind(this),
      ).not.toThrow();

      expect(this.result).toBeDefined();
      expect(this.result.name).toBe(this.ownedId);
    });
  });

  describe('#fetch', function () {
    beforeAll(function () {
      this.id = UiSdlSavedSearch.generateNewIds(1)[0];
      UiSdlSavedSearch.make({ id: this.id, name: this.id, typeName: 'UiSdlSavedSearch' }).create();
    });

    afterAll(function () {
      UiSdlSavedSearch.make(this.id).remove();
    });

    it('should be accessible from C3.UiSdlAccess users', function () {
      expect(
        function () {
          this.result = TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id) {
              return UiSdlSavedSearch.fetch({ filter: Filter.eq('id', id) });
            }).partiallyCall([this.id]),
          );
        }.bind(this),
      ).not.toThrow();

      expect(this.result).toBeDefined();
      expect(this.result.objs[0]).toBeDefined();
      expect(this.result.objs[0].name).toBe(this.id);
    });
  });

  describe('#fetch including user data', function () {
    beforeAll(function () {
      this.id = UiSdlSavedSearch.generateNewIds(1)[0];
      UiSdlSavedSearch.make({ id: this.id, name: this.id, typeName: 'UiSdlSavedSearch' }).create();
    });

    afterAll(function () {
      UiSdlSavedSearch.make(this.id).remove();
    });

    it('should be accessible from C3.UiSdlAccess users', function () {
      expect(
        function () {
          this.result = TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id) {
              return UiSdlSavedSearch.fetch({ include: 'createdByUser.name' });
            }).partiallyCall([this.id]),
          );
        }.bind(this),
      ).not.toThrow();

      expect(this.result).toBeDefined();
      expect(this.result.objs[0]).toBeDefined();
      expect(this.result.objs[0].createdByUser).toBeDefined();
    });
  });

  describe('#merge', function () {
    beforeAll(function () {
      this.id = UiSdlSavedSearch.generateNewIds(1)[0];
      this.newName = this.id + ' new name';
      UiSdlSavedSearch.make({ id: this.id, name: this.id, typeName: 'UiSdlSavedSearch' }).upsert();
    });

    afterAll(function () {
      UiSdlSavedSearch.make(this.id).remove();
    });

    it('should not edit saved search created by other users', function () {
      expect(
        function () {
          this.result = TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id, name) {
              return UiSdlSavedSearch.make({ id: id, name: name }).merge();
            }).partiallyCall([this.id, this.newName]),
          );
        }.bind(this),
      ).toThrow();
    });
  });

  describe('#remove', function () {
    beforeAll(function () {
      this.id = UiSdlSavedSearch.generateNewIds(1)[0];
      UiSdlSavedSearch.make({ id: this.id, name: this.id, typeName: 'UiSdlSavedSearch' }).create();
    });

    afterAll(function () {
      UiSdlSavedSearch.make(this.id).remove();
    });

    it('should be accessible from C3.UiSdlAccess users', function () {
      // Sanity check that the object does exist before being removed
      const originalObj = UiSdlSavedSearch.make(this.id).get();
      expect(originalObj).toBeDefined();
      expect(originalObj.name).toBe(this.id);

      expect(
        function () {
          TestRunner.asRole(
            'C3.UiSdlAccess',
            Lambda.fromJsFunc(function (id) {
              UiSdlSavedSearch.make({ id: id }).remove();
            }).partiallyCall([this.id]),
          );
        }.bind(this),
      ).not.toThrow();
    });

    it('should remove the UiSdlSavedSearch object', function () {
      const persistedObj = UiSdlSavedSearch.make(this.id).get();
      expect(persistedObj).toBe(null);
    });
  });
});
