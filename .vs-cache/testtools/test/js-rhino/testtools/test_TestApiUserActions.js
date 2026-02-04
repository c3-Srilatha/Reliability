/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_TestApiUserActions';

describe(filename, function () {
  var filename = 'test_TestApiUserActions';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  it('Test upsertUser', function() {
    this.user1 = TestApi.upsertUser(this.ctx, TestApiUserConfig.make({
      email: 'testUser1@c3.ai',
      givenName: 'firstname1',
      familyName: 'lastname1',
      id: 'testUser1'
    }));
    expect(this.ctx.get('testUsers').testUsers.size).toEqual(1);
    expect(this.ctx.get('testUsers').testUsers).toEqual(['testUser1']);
  });


  it('Test upsertUserEntity', function() {
    var configs = [
                    {
                      email: 'testUser2@c3.ai',
                      givenName: 'firstname2',
                      familyName: 'lastname2',
                      id: 'testUser2'
                    },
                    {
                      email: 'testUser3@c3.ai',
                      givenName: 'firstname3',
                      familyName: 'lastname3',
                      id: 'testUser3'
                    }
                  ];
    this.users = TestApi.upsertBatchUser(this.ctx, configs.map(o => TestApiUserConfig.make(o)));
    expect(this.ctx.get('testUsers').testUsers.size).toEqual(3);
    expect(this.ctx.get('testUsers').testUsers.sorted()).toEqual(['testUser1','testUser2','testUser3']);
  });

  it('Test removeTestUsers', function() {
    expect(this.ctx.get('testUsers').testUsers.size).toEqual(3);
    TestApi.removeTestUsers(this.ctx);
    expect(this.ctx.get('testUsers').testUsers.size).toEqual(0);
    expect(TestIdp.user('testUser1')).toBeNull();
    expect(TestIdp.user('testUser2')).toBeNull();
    expect(TestIdp.user('testUser3')).toBeNull();
  })

  it('Test reroute from TestApi.upsertEntity and TestApi.upsertBatchEntity', function() {
    this.user1 = TestApi.upsertUser(this.ctx, {
      email: 'testUser1@c3.ai',
      givenName: 'firstname1',
      familyName: 'lastname1',
      id: 'testUser1'
    });
    expect(this.ctx.get('testUsers').testUsers.size).toEqual(1);
    expect(this.ctx.get('testUsers').testUsers).toEqual(['testUser1']);

    this.users = TestApi.upsertBatchUser(this.ctx, [
      {
        email: 'testUser2@c3.ai',
        givenName: 'firstname2',
        familyName: 'lastname2',
        id: 'testUser2'
      },
      {
        email: 'testUser3@c3.ai',
        givenName: 'firstname3',
        familyName: 'lastname3',
        id: 'testUser3'
      }
    ]);

    this.emptyConfigUser = TestApi.upsertUser(this.ctx, {});
    Logger.for('thomas').warn('msg' + this.emptyConfigUser.toJson());
    expect(this.ctx.get('testUsers').testUsers.size).toEqual(4);
    expect(this.ctx.get('testUsers').testUsers.sorted()).toEqual(['testUser1','testUser2','testUser3', this.emptyConfigUser.id].sort());
  })

  afterAll(function () {
    TestApi.teardown(this.ctx);
    expect(TestIdp.user('testUser1')).toBeNull();
    expect(TestIdp.user('testUser2')).toBeNull();
    expect(TestIdp.user('testUser3')).toBeNull();
    expect(TestIdp.user(this.emptyConfigUser)).toBeNull();
  });
});
