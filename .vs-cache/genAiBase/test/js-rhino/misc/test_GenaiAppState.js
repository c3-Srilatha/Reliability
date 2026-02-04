/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiAppState';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.defaultAppStateId = 'default';

    // Users
    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];

    this.getAppStateAsUser = function (user) {
      return TestRunner.asUser(
        user,
        Lambda.fromJsFunc(function () {
          return Genai.App.State.inst();
        }).partiallyCall([])
      );
    };
  });

  afterAll(function () {
    TestIdp.removeUser(this.basicUser);
    TestApi.teardown(this.ctx);
  });

  describe('::inst', function () {
    describe('when there is no Genai.App.State instance', function () {
      beforeAll(function () {
        this.appState = this.getAppStateAsUser(this.basicUser);
      });

      afterAll(function () {
        this.appState.remove();
      });

      it('creates a "default" instance and returns it', function () {
        expect(this.appState).not.toBeNull();
        expect(this.appState.id).toEqual(this.defaultAppStateId);
      });
    });

    describe('when a Genai.App.State instance exists', function () {
      beforeAll(function () {
        this.initialAppState = TestApi.upsertEntity(this.ctx, 'Genai.App.State', {
          id: this.defaultAppStateId,
          dataModelState: Genai.App.State.FieldStatus.STALE,
        });
        this.appState = this.getAppStateAsUser(this.basicUser);
      });

      it('returns the existing instance', function () {
        expect(this.appState.id).toEqual(this.defaultAppStateId);
        expect(this.appState.dataModelState).toEqual(Genai.App.State.FieldStatus.STALE);
      });
    });
  });

  describe('::setDataModelState', function () {
    beforeAll(function () {
      this.originalDataModelState = Genai.App.State.inst().dataModelState;
    });

    afterAll(function () {
      if (this.originalDataModelState) {
        Genai.App.State.setState('dataModelState', this.originalDataModelState);
      }
    });

    it('updates the dataModelState', function () {
      Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.SYNCED);
      expect(Genai.App.State.inst().dataModelState).toEqual(Genai.App.State.FieldStatus.SYNCED);
    });

    it('can update the dataModelState multiple times without getting a version conflict', function () {
      // If there was a version conflict, this would throw an error an the test would fail
      Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.SYNCING);
      Genai.App.State.setState('dataModelState', Genai.App.State.FieldStatus.STALE);
    });
  });

  describe('setState', function () {
    beforeAll(function () {
      this.originalConfigsState = Genai.App.State.inst().configsState;
    });

    afterAll(function () {
      Genai.App.State.setState('configsState', this.originalConfigsState);
    });

    it('updates the specified field', function () {
      Genai.App.State.setState('configsState', Genai.App.State.FieldStatus.STALE);
      expect(Genai.App.State.inst().configsState).toEqual(Genai.App.State.FieldStatus.STALE);
    });
  });
});
