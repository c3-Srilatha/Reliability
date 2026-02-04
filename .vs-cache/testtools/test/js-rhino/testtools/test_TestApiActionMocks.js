/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// TODO: MIG8-2685 Re-enable test
xdescribe('test_TestApiActionMocks', function () {
  beforeAll(function () {
    this.filename = 'test_TestApiActionMocks';
    TestApiEntityType.removeAll();
    this.mockFileRootDir = TestFileSystemConfig.make().configValue('clusterSharedFolder') + '/' + this.filename;
    this.ctx = TestApi.createContext(this.filename);
    this.upsertedEntity = TestApi.createEntity(this.ctx, 'TestApiEntityType', {});
    this.actionMock = TestActionMock.make({
      id: this.filename,
      group: this.filename,
      sequence: 2,
      targetAction: ActionRef.make({
        typeName: 'TestApiEntityType',
        actionName: 'fetch',
      }),
      decl: TestActionMockDecl.forResult({
        result: C3.type('FetchResult<TestApiEntityType>').make({
          objs: [{ id: 'one' }, { id: 'two' }],
          count: 2,
          hasMore: false,
        }),
      }),
    }).upsert();

    this.actionMockAutoDecl = TestActionMock.make({
      id: this.filename + '-Auto',
      group: this.filename,
      sequence: 1,
      targetAction: ActionRef.make({
        typeName: 'TestApiEntityType',
        actionName: 'fetch',
      }),
      decl: TestActionMockDecl.forAuto({
        rootUrl: 'file://' + this.mockFileRootDir + '/',
      }),
    }).upsert();
  });

  it('should do a normal fetch before registering', function () {
    expect(TestActionMock.allRegistered().length).toEqual(0);
    var result = TestApiEntityType.fetch();
    expect(result.count).toEqual(1);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual(this.upsertedEntity.id);
  });

  it('auto mock should return nothing initially', function () {
    this.actionMockAutoDecl.register();
    expect(TestActionMock.allRegistered().length).toEqual(1);
    expect(function () {
      TestApiEntityType.fetch();
    }).toThrow();

    this.actionMockAutoDecl.unregister();
    expect(TestActionMock.allRegistered().length).toEqual(0);
  });

  it('auto mock should record', function () {
    this.actionMockAutoDecl.register();
    expect(TestActionMock.allRegistered().length).toEqual(1);

    // This call will record
    var result = TestApiEntityType.fetch();
    expect(result.count).toEqual(1);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual(this.upsertedEntity.id);
    this.actionMockAutoDecl.unregister();

    this.upsertedEntity.get().putField('intField', 10).update();
    result = TestApiEntityType.fetch();
    expect(result.count).toEqual(1);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual(this.upsertedEntity.id);
    expect(result.at('objs.intField').toString(',')).toEqual('10');

    this.actionMockAutoDecl.register();
    expect(TestActionMock.allRegistered().length).toEqual(1);
    result = TestApiEntityType.fetch();
    expect(result.count).toEqual(1);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual(this.upsertedEntity.id);
    expect(result.at('objs.intField').toString(',')).toEqual('');
  });

  it('multiple mocks work', function () {
    this.actionMock.register();
    this.actionMockAutoDecl.register();
    expect(TestActionMock.allRegistered().length).toEqual(2);

    // Initially it's the recorded mock value
    var result = TestApiEntityType.fetch();
    expect(result.count).toEqual(1);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual(this.upsertedEntity.id);
    expect(result.at('objs.intField').toString(',')).toEqual('');

    // After unregistering the auto-mock, it gets the other mock value
    this.actionMockAutoDecl.unregister();
    expect(TestActionMock.allRegistered().length).toEqual(1);
    result = TestApiEntityType.fetch();
    expect(result.count).toEqual(2);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual('one,two');

    // If auto-mocks are skipped, registering the auto mock doesn't do anything, still the other mock value
    TenantConfig.putConfig('TestActionMock', 'skip-auto-mocks');
    this.actionMockAutoDecl.register();
    expect(TestActionMock.allRegistered().length).toEqual(1);
    result = TestApiEntityType.fetch();
    expect(result.count).toEqual(2);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual('one,two');

    // If all mocks are skipped, registering the any mock does nothing, returns the DB value
    TenantConfig.putConfig('TestActionMock', 'skip');
    this.actionMock.register();
    this.actionMockAutoDecl.register();
    expect(TestActionMock.allRegistered().length).toEqual(0);
    result = TestApiEntityType.fetch();
    expect(result.count).toEqual(1);
    expect(result.hasMore).toBeFalsy();
    expect(result.at('objs.id').toString(',')).toEqual(this.upsertedEntity.id);
    expect(result.at('objs.intField').toString(',')).toEqual('10');

    TenantConfig.putConfig('TestActionMock', null);
    TestActionMock.registerAll(this.ctx);
    expect(TestActionMock.allRegistered().length).toEqual(2);

    // Should unregister and re-register all
    TestActionMock.registerAll(this.ctx);
    expect(TestActionMock.allRegistered().length).toEqual(2);
  });

  it('works with seeded ActionMocks', function () {
    var seededActionMock = TestActionMock.make({ id: 'ActionMockAutoDecl-S3.listFiles' }).get();
    seededActionMock.register();
    expect(TestActionMock.allRegistered().length).toEqual(3);

    var res = S3.listFiles(null, 1);
    expect(res.files.length).toEqual(1);

    // If the action is not mocked, this will not be the first item; instead it'll be something from S3
    expect(res.files[0].url).toEqual('s3://c3-mocked/fs/c3/c3/foo.json.gz');

    res = S3.listFiles();
    expect(res.files.length).toEqual(6);
    expect(res.files[0].url).toEqual(
      's3://c3-mocked/fs/c3/c3/foo2019-05-14T17:00:00.000Z::2019-05-14T18:00:00.000Z.json.gz'
    );
  });

  afterAll(function () {
    expect(TestActionMock.allRegistered().length).toEqual(3);
    TestApi.teardown(this.ctx);

    // Should have unregistered all
    expect(TestActionMock.allRegistered().length).toEqual(0);
    TestActionMock.removeAll(Filter.eq('group', this.filename));
    LocalFileSystem.make({ root: '/' }).deleteDir(this.mockFileRootDir + '/', true);
  });
}).pend('MIG8-2685');
