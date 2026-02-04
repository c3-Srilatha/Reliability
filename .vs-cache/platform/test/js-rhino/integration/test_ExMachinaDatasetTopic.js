/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaDatasetTopic';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);

    this.origFSDefault = FileSystemConfig.make({}, true).getConfig().default;
    FileSystemConfig.make({}, true).setDefault(FileSystemScheme.c3fs, ConfigOverride.APP);
    this.origDefaultMount = FileSystem.mounts().get(FileSystemMount.DEFAULT);
    this.mountUrl = this.origDefaultMount + 'dataset-storage';

    this.topic = TestApi.upsertEntity(this.ctx, 'ExMachinaDatasetTopic', {
      name: 'topic',
    });

    this.origContent = '"id", "data"\n"1","data1"';
    this.updatedContent = '"id", "data"\n"1","data1"\n"2","data2"';
    this.updatedContentPart2 = '\n"3","data3"';

    this.versions = [];
    this.versions.push(
      TestApi.upsertEntity(this.ctx, 'ExMachinaDatasetMetadata', {
        id: Uuid.create(),
        name: 'topic data',
        format: ExMachinaDatasetFormat.CSV,
        topic: this.topic,
      })
    );
    TestApi.waitForSetup(this.ctx);
    var uuid = Uuid.create();
    var baseUrl = this.mountUrl + this.versions[0].id;
    C3.File.createFile(baseUrl + '/_SUCCESS', '');
    C3.File.make(baseUrl + '/part-000000-' + uuid + '.csv').writeString(this.origContent);

    this.versions.push(
      TestApi.upsertEntity(this.ctx, 'ExMachinaDatasetMetadata', {
        id: Uuid.create(),
        name: 'topic data',
        format: ExMachinaDatasetFormat.CSV,
        topic: this.topic,
      })
    );
    TestApi.waitForSetup(this.ctx);
    uuid = Uuid.create();
    baseUrl = this.mountUrl + this.versions[1].id;
    C3.File.createFile(baseUrl + '/_SUCCESS', '');
    C3.File.make(baseUrl + '/part-000000-' + uuid + '.csv').writeString(this.updatedContent);
    C3.File.make(baseUrl + '/part-000001-' + uuid + '.csv').writeString(this.updatedContentPart2);

    ExMachinaDatasetTopic.refreshCalcFields({
      sync: true,
    });
    this.latestVersion = ExMachinaDatasetTopic.make(this.topic, true).get('latestMetadata').latestMetadata;
  });

  describe('createDatasetTopic', function () {
    it('creates a dataset topic', function () {
      var topicName = 'topic1';
      var createdDatasetTopic = ExMachinaDatasetTopic.createDatasetTopic(topicName).get('this');
      expect(createdDatasetTopic.name).toEqual(topicName);
    });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    _.each(this.versions, function (cur) {
      FileSystem.listFiles(this.mountUrl + cur.id).files.each(function (file) {
        file.delete();
      });
    });
    FileSystemConfig.make({}, true).setDefault(this.origFSDefault, ConfigOverride.APP);
  });
});
