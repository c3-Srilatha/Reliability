/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

xdescribe('test_TestApiPermissions', function () {
  var filename = 'test_TestApiPermissions';
  var ctx;
  var contextUsername = C3.context().username;

  it('setup', function () {
    ctx = TestApi.createContext(filename);
    expect(ctx).toBeDefined();
  });

  describe('createImpersonationUser', function () {
    beforeEach(function () {
      this.createImpersonationUserCtx = TestApi.createContext(filename, ctx);
      this.user = TestApi.createImpersonationUser(this.createImpersonationUserCtx);
    });

    it('creates a user', function () {
      expect(this.user).toBeDefined();
      expect(TestIdp.user(this.user.id).groups.length).toEqual(0);
    });

    it('allows impersonation', function () {
      // Before impersonating, confirm that everything in the expect function works as expected
      var self = this;
      expect(function () {
        // The context user should be able to retrieve its User record and add/remove groups for the new user
        UserAdmin.getUser(self.user.id);
        UserAdmin.addUserToGroup(self.user.id, 'C3.Group.TagAdmin');
        UserAdmin.removeUserFromGroup(self.user.id, 'C3.Group.TagAdmin');
        TestApiContextMR.fetch();
      }).not.toThrow();

      TestRunner.asUser(this.user.id, Lambda.fromJsFunc(function () {
        var deniedActions = {
          TestApiContextMR: ['fetch'],
        };
        TestApi.checkPermissions(null, deniedActions);
      }).partiallyCall());
    });

    afterEach(function () {
      TestApi.teardown(this.createImpersonationUserCtx);
      expect(UserAdmin.getUser(this.user.id)).toBeNull();
    });
  });

  describe('checkPermissions', function () {
    it('allowedActions works', function () {
      TestRunner.asRole;
    });

    it('deniedActions works', function () {
      TestRunner.asRole;
    });

    it('allowedActions and deniedActions works', function () {
      TestRunner.asRole;
    });

    it('allowedActions and deniedActions works with no permissions', function () {
      TestRunner.asRole('DefaultAccessRole', Lambda.fromJsFunc(function () {
        var allowedActions = {
          UserAdmin: ['getUser'],
        };

        var deniedActions = {
          Cluster: ['stopAction'],
        };

        TestApi.checkPermissions(allowedActions, deniedActions);
      }).partiallyCall());
    });
  });

  it('teardown', function () {
    TestApi.teardown(ctx);

    // UserAdmin.removeUser(testUsername);
    expect(ctx.numObjects()).toEqual(0);

    // Teardown should have removed the impersonation user
    expect(UserAdmin.getUser(ctx.id)).toBeNull();
    expect(UserAdmin.getUser(contextUsername)).toBeDefined();
  });
}).pend('PLAT-38182');
