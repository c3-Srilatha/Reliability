/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_CaseComment';
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, undefined, [CronQueue]);
    ReliabilityTestData.clearFailedQueueEntries();

    TestApi.spyOn(this.ctx, 'User', 'getMissing')
      .returnValue({
        id: 'testuser',
        name: 'testusername',
        firstName: 'testuserfirstname',
        lastName: 'testuserlastname',
        email: 'testuser@c3.ai',
      })
      .register();

    this.user = User.myUser().getMissing({
      include: 'firstName, lastName, name',
    });
    this.username =
      this.user.firstName && this.user.lastName ? this.user.firstName.concat(' ', this.user.lastName) : this.user.name;
    TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'system',
      name: 'systemName1',
    });
    TestApi.upsertEntity(this.ctx, 'ReliabilityAsset', {
      id: 'subsystem',
      name: 'subsystemName1',
    });
    TestApi.upsertEntity(this.ctx, 'ReliabilityAssetHierarchicalRelation', {
      from: 'system',
      to: 'subsystem',
      relationship: 'general',
    });

    TestApi.waitForSetup(this.ctx, undefined, 1, 100);

    TestApi.upsertEntity(this.ctx, 'ReliabilityAssetTestAlert', {
      id: 'alert',
      parent: 'subsystem',
      timestamp: DateTime.nowWithMillis(),
    });

    TestApi.upsertEntity(this.ctx, 'ReliabilityAssetCase', {
      id: 'case',
      name: 'caseName1',
    });

    TestApi.upsertEntity(this.ctx, 'ReliabilityAssetAlertToCaseRelation', {
      from: 'alert',
      to: 'case',
    });

    this.user = TestIdp.createTestUser('testUser', 'Password1');
    TestApi.upsertEntity(this.ctx, 'NotificationUserRecipient', {
      id: 'testNur',
      user: 'testUser',
    });
    TestApi.waitForSetup(this.ctx, null, 1, 30);

    TestApi.upsertEntity(this.ctx, 'CaseComment', {
      parent: 'case',
      comment: '[~testUser] Hi, this is a comment for you.',
      url: 'https://c3.ai',
    });
    TestApi.waitForSetup(this.ctx, null, 1, 30);
  });

  it('notification should have correct subject and content', function () {
    var nh = NotificationHistory.fetch({
      filter: Filter.eq('parent.id', 'testNur'),
    });
    expect(nh.count).toEqual(1);
    expect(nh.objs[0].sent).toEqual(true);
    expect(nh.objs[0].subject).toEqual('[C3 Reliability] '.concat(this.username, ' mentioned you in a comment'));
    expect(nh.objs[0].content).toEqual(
      '<p>' +
        this.username +
        ' <b>mentioned you</b> in a <a href="https://c3.ai">comment</a><br>subsystemName1 > caseName1<br>[~testUser] Hi, this is a comment for you.</p>'
    );
  });

  afterAll(function () {
    ReliabilityAssetHierarchyDenorm.removeAll(null, true);
    NotificationHistory.removeAll({ filter: Filter.eq('parent.id', 'testNur') }, true);
    TestIdp.removeTestUsers([this.user]);
    TestApi.teardown(this.ctx);
  });
});
