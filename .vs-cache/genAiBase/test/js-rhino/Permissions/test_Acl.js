/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Acl';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.baseLocation = C3.FileSystem.makeFile(filename).url;

    EnableAclPrivilege.forId('Genai.Project').withEnabled(true).merge();
    EnableAclPrivilege.forId('Genai.SourceCollection').withEnabled(true).merge();
    EnableAclPrivilege.forId('Genai.SourceFile').withEnabled(true).merge();

    this.projectDA = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      name: 'default-access',
      unstructuredQueryEngineConfigName: 'default',
      chunkerConfig: 'default',
    });
    this.projectCA = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      name: 'common-access',
      groups: ['Genai.Common'],
      unstructuredQueryEngineConfigName: 'default',
      chunkerConfig: 'default',
    });
    this.projectAA = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      name: 'admin-access',
      unstructuredQueryEngineConfigName: 'default',
      chunkerConfig: 'default',
      groups: ['Genai.AdminUser'],
    });

    this.sourceCollDA = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'default-access',
      rootUrl: this.baseLocation + '/default-access-root',
      targetUrl: this.baseLocation + '/default-access-target',
    });
    this.sourceCollCA = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'common-access',
      groups: ['Genai.Common'],
      rootUrl: this.baseLocation + '/common-access-root',
      targetUrl: this.baseLocation + '/common-access-target',
    });
    this.sourceCollAA = TestApi.upsertEntity(this.ctx, 'Genai.SourceCollection', {
      name: 'admin-access',
      groups: ['Genai.AdminUser'],
      rootUrl: this.baseLocation + '/admin-access-root',
      targetUrl: this.baseLocation + '/admin-access-target',
    });

    this.sourceFileDA = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      name: 'full-access',
      originalFile: C3.File.make({ url: this.baseLocation + '/originalFileDA.txt' }),
    });
    this.sourceFileLA = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      name: 'limited-access',
      originalFile: C3.File.make({ url: this.baseLocation + '/originalFileLA.txt' }),
    });
    this.sourceFileAA = TestApi.upsertEntity(this.ctx, 'Genai.SourceFile', {
      name: 'admin-access',
      originalFile: C3.File.make({ url: this.baseLocation + '/originalFileAA.txt' }),
    });
    TestApi.waitForSetup(this.ctx);

    this.sourceFileLA
      .get()
      .withAcl([
        {
          member: Role.forId('Genai.BasicUser'),
        },
        {
          canRemove: true,
          member: Role.forId('C3.ClusterAdmin'),
        },
      ])
      .update();

    this.sourceFileAA
      .get()
      .withAcl([
        {
          member: Role.forId('Genai.AdminUser'),
        },
        {
          canRemove: true,
          member: Role.forId('C3.ClusterAdmin'),
        },
      ])
      .update();
    this.basicUser = TestIdp.createTestUsersForGroup('Genai.BasicUser')[0];
    this.adminUser = TestIdp.createTestUsersForGroup('Genai.AdminUser')[0];

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    EnableAclPrivilege.forId('Genai.Project').withEnabled(false).merge();
    EnableAclPrivilege.forId('Genai.SourceCollection').withEnabled(false).merge();
    EnableAclPrivilege.forId('Genai.SourceFile').withEnabled(false).merge();
    TestApi.teardown(this.ctx);
    TestIdp.removeUser(this.basicUser);
    TestIdp.removeUser(this.adminUser);
  });

  describe('Genai.Project', function () {
    it('assigns the default ACL groups if none is specified when creating the project', function () {
      expect(this.projectDA.groups.pluck('id')).toEqual([
        'Genai.Common',
        'C3.ClusterAdmin',
        'C3.EnvAdmin',
        'C3.AppAdmin',
      ]);
    });

    describe('#get', function () {
      it('only returns the collection with default access or Genai.Common for BasicUser', function () {
        TestRunner.asUser(
          this.basicUser,
          Lambda.fromJsFunc(function (da, ca, aa) {
            expect(da.get()).toBeDefined();
            expect(ca.get()).toBeDefined();
            expect(aa.get()).toBeNull();
          }).partiallyCall([this.projectDA, this.projectCA, this.projectAA])
        );
      });

      it('returns all for AdminUser', function () {
        TestRunner.asUser(
          this.adminUser,
          Lambda.fromJsFunc(function (da, ca, aa) {
            expect(da.get()).toBeDefined();
            expect(ca.get()).toBeDefined();
            expect(aa.get()).toBeDefined();
          }).partiallyCall([this.projectDA, this.projectCA, this.projectAA])
        );
      });
    });
  });

  describe('SourceCollection.get', function () {
    it('returns all for the ClusterAdmin', function () {
      expect(this.sourceCollDA.get()).toBeDefined();
      expect(this.sourceCollCA.get()).toBeDefined();
      expect(this.sourceCollAA.get()).toBeDefined();
    });

    it('only returns the collection with default access or Genai.Common for BasicUser', function () {
      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function (da, ca, aa) {
          expect(da.get()).toBeDefined();
          expect(ca.get()).toBeDefined();
          expect(aa.get()).toBeNull();
        }).partiallyCall([this.sourceCollDA, this.sourceCollCA, this.sourceCollAA])
      );
    });

    it('returns all for AdminUser', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (da, ca, aa) {
          expect(da.get()).toBeDefined();
          expect(ca.get()).toBeDefined();
          expect(aa.get()).toBeDefined();
        }).partiallyCall([this.sourceCollDA, this.sourceCollCA, this.sourceCollAA])
      );
    });
  });

  describe('SourceFile.get', function () {
    it('returns all for the ClusterAdmin', function () {
      expect(this.sourceFileDA.get()).toBeDefined();
      expect(this.sourceFileLA.get()).toBeDefined();
      expect(this.sourceFileAA.get()).toBeDefined();
    });

    it('only returns the full and limited access for BasicUser', function () {
      TestRunner.asUser(
        this.basicUser,
        Lambda.fromJsFunc(function (da, la, aa) {
          expect(da.get()).toBeDefined();
          expect(la.get()).toBeDefined();
          expect(aa.get()).toBeNull();
        }).partiallyCall([this.sourceFileDA, this.sourceFileLA, this.sourceFileAA])
      );
    });

    it('returns all for AdminUser', function () {
      TestRunner.asUser(
        this.adminUser,
        Lambda.fromJsFunc(function (da, la, aa) {
          expect(da.get()).toBeDefined();
          expect(la.get()).toBeDefined();
          expect(aa.get()).toBeDefined();
        }).partiallyCall([this.sourceFileDA, this.sourceFileLA, this.sourceFileAA])
      );
    });
  });
});
