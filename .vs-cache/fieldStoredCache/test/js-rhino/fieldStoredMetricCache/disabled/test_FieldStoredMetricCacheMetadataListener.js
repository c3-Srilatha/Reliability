/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/**
 * This test was generated with the help of apps testgen application.
 * To learn more: https://github.com/c3-e/c3server/blob/develop/tools/testgenvsc/README.md
 */

var filename = 'test_FieldStoredMetricCacheMetadataListener.js';

/**
 * These tests use the following types:
 * FieldStoredMetricCacheListenerTestCreated.c3typ
 * FieldStoredMetricCacheListenerTestUpdated.c3typ
 * FieldStoredMetricCacheListenerTestRemoved.c3typ
 * FieldStoredMetricCacheListenerTestControl.c3typ
 */
describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.testBegin = DateTime.nowWithMillis();

    this.updateType = FieldStoredMetricCacheListenerTestUpdated;
    this.createType = FieldStoredMetricCacheListenerTestCreated;
    this.removeType = FieldStoredMetricCacheListenerTestRemoved;
    this.controlType = FieldStoredMetricCacheListenerTestControl;
    this.updateTypeName = FieldStoredMetricCacheListenerTestUpdated.name();
    this.createTypeName = FieldStoredMetricCacheListenerTestCreated.name();
    this.removeTypeName = FieldStoredMetricCacheListenerTestRemoved.name();
    this.controlTypeName = FieldStoredMetricCacheListenerTestControl.name();

    // Remove entities automatically created by provision.
    /*
     * V8 Upgrade Notice: Custom Notice
     * Warning: Take caution when using removeAll(..) as it can be very destructive. Please avoid using removeAll(..) in production code if possible.
     */
    FieldStoredMetricCache.removeAll(
      {
        filter: Filter.intersects('srcType.typeName', [this.createTypeName, this.updateTypeName, this.removeTypeName]),
      },
      true
    );

    TestApi.waitForSetup(this.ctx);
  });

  afterAll(function () {
    /*
     * V8 Upgrade Notice: Custom Notice
     * Warning: Take caution when using removeAll(..) as it can be very destructive. Please avoid using removeAll(..) in production code if possible.
     */
    CronJob.removeAll(
      {
        filter: Filter.eq('correlationKey', 'FieldStoredMetricCacheMetadataListener')
          .and()
          .gt('meta.created', this.testBegin),
      },
      true
    );

    /*
     * V8 Upgrade Notice: Custom Notice
     * Warning: Take caution when using removeAll(..) as it can be very destructive. Please avoid using removeAll(..) in production code if possible.
     */
    FieldStoredMetricCache.removeAll(
      {
        filter: Filter.intersects('srcType.typeName', [this.createTypeName, this.updateTypeName, this.removeTypeName]),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('notify', function () {
    beforeEach(function () {
      /*
       * V8 Upgrade Notice: Custom Notice
       * Warning: Take caution when using removeAll(..) as it can be very destructive. Please avoid using removeAll(..) in production code if possible.
       */
      FieldStoredMetricCache.removeAll(
        {
          filter: Filter.intersects('srcType.typeName', [
            this.createTypeName,
            this.updateTypeName,
            this.removeTypeName,
          ]),
        },
        true
      );
    });

    it('should create a new entity on type creation', function () {
      var notificationSpec = TypeListenerNotifySpec.make(
        {
          created: [this.createType, this.controlType],
        },
        true
      );
      var initialCount = FieldStoredMetricCache.fetchCount();

      FieldStoredMetricCacheMetadataListener.notify(notificationSpec);
      var createdEntities = FieldStoredMetricCache.fetch({
        include: 'this, cronJob.scheduleDef.this, cronJob.this',
        filter: Filter.eq('srcType.typeName', this.createTypeName),
        order: 'ascending(fieldName)',
      });
      var afterCount = FieldStoredMetricCache.fetchCount();

      expect(afterCount - initialCount).toEqual(2);

      // Annotation using default values.
      expect(createdEntities.objs[0]).toEqual(
        jasmine.objectContaining({
          srcType: jasmine.objectContaining({
            typeName: this.createTypeName,
          }),
          fieldName: 'metricField',
          metricExpression: 'identity(1)',
          interval: 'DAY',
          filter: Filter.fromString('1==1'),
          generatedByAnnotation: true,
          enabled: true,
        })
      );

      // Annotation with all values set
      expect(createdEntities.objs[1]).toEqual(
        jasmine.objectContaining({
          srcType: jasmine.objectContaining({
            typeName: this.createTypeName,
          }),
          fieldName: 'metricField2',
          metricExpression: 'identity(2)',
          interval: 'DAY',
          filter: Filter.fromString('nonMetricField > 10'),
          enabled: false,
          generatedByAnnotation: true,
        })
      );

      // Cron job check
      expect(createdEntities.objs[1].cronJob).toEqual(
        jasmine.objectContaining({
          description: 'Populate field metricField2 on ' + this.createTypeName,
          correlationKey: 'FieldStoredMetricCacheMetadataListener',
          action: jasmine.objectContaining({
            actionName: 'startJob',
            typeName: 'FieldStoredMetricCacheBatchJob',
          }),
          scheduleDef: jasmine.objectContaining({
            cronExpression: '0 0 12 1 1 ? *',
            skipOverdue: true,
          }),
        })
      );
    });

    it('should create a new entity on type update', function () {
      var notificationSpec = /*
       * V8 Upgrade Notice: Nested functions or objects
       * Instance: make
       * Nested function call "make" appeared. Ensure that the appropriate fields have been migrated correctly.
       * Please refer to: https://c3energy.atlassian.net/wiki/spaces/DOC/pages/8150679979/v7+to+v8+Changes#Nested-Functions-or-Objects
       */ TypeListenerNotifySpec.make(
        {
          updated: [
            TypeUpdate.make(
              {
                new: this.updateType,
                old: this.updateType,
              },
              true
            ),
          ],
        },
        true
      );
      var initialCount = FieldStoredMetricCache.fetchCount();

      FieldStoredMetricCacheMetadataListener.notify(notificationSpec);
      var createdEntities = FieldStoredMetricCache.fetch({
        filter: Filter.eq('srcType.typeName', this.updateTypeName),
      });
      var afterCount = FieldStoredMetricCache.fetchCount();

      expect(afterCount - initialCount).toEqual(1);
      expect(createdEntities.objs[0]).toEqual(
        jasmine.objectContaining({
          srcType: jasmine.objectContaining({
            typeName: this.updateTypeName,
          }),
          fieldName: 'updatedMetricField',
          metricExpression: 'identity(2)',
          interval: 'DAY',
          generatedByAnnotation: true,
        })
      );
    });

    it('should remove previous field entities and create a new entity on type update', function () {
      var notificationSpec = /*
       * V8 Upgrade Notice: Nested functions or objects
       * Instance: make
       * Nested function call "make" appeared. Ensure that the appropriate fields have been migrated correctly.
       * Please refer to: https://c3energy.atlassian.net/wiki/spaces/DOC/pages/8150679979/v7+to+v8+Changes#Nested-Functions-or-Objects
       */ TypeListenerNotifySpec.make(
        {
          updated: [
            TypeUpdate.make(
              {
                new: this.updateType,
                old: this.updateType,
              },
              true
            ),
          ],
        },
        true
      );

      // There are two existing entities. One for an old version of the field and another that was user generated.
      TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCache', [
        {
          srcType: this.updateTypeName,
          fieldName: 'oldMetricField',
          metricExpression: 'identity(1)',
          interval: 'HOUR',
          cronJob: 'oldCronJobId',
          filter: '1==1',
          generatedByAnnotation: true,
        },
        {
          srcType: this.updateTypeName,
          fieldName: 'otherMetricField',
          metricExpression: 'identity(1)',
          interval: 'HOUR',
          cronJob: 'oldCronJobId',
          filter: '1==1',
          generatedByAnnotation: false,
        },
      ]);
      TestApi.waitForSetup(this.ctx);

      var initialCount = FieldStoredMetricCache.fetchCount();

      FieldStoredMetricCacheMetadataListener.notify(notificationSpec);
      var entities = FieldStoredMetricCache.fetch({
        filter: Filter.eq('srcType.typeName', this.updateTypeName),
      });
      var afterCount = FieldStoredMetricCache.fetchCount();

      // The first existing entity should be deleted and one new entity should be created.
      expect(afterCount - initialCount).toEqual(0);
      expect(entities.objs).toContain(
        jasmine.objectContaining({
          srcType: jasmine.objectContaining({
            typeName: this.updateTypeName,
          }),
          fieldName: 'updatedMetricField',
          metricExpression: 'identity(2)',
          interval: 'DAY',
          generatedByAnnotation: true,
        })
      );

      expect(entities.objs).toContain(
        jasmine.objectContaining({
          srcType: jasmine.objectContaining({
            typeName: this.updateTypeName,
          }),
          fieldName: 'otherMetricField',
        })
      );
    });

    it('should remove all fields for deleted types', function () {
      var notificationSpec = TypeListenerNotifySpec.make(
        {
          removed: [this.removeType],
        },
        true
      );

      // There are two existing entities. One for an old version of the field and another that was user generated.
      TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCache', [
        {
          srcType: this.removeTypeName,
          fieldName: 'metricField1',
          metricExpression: 'identity(3)',
          interval: 'HOUR',
          cronJob: 'cronJobId',
          filter: '1==1',
          generatedByAnnotation: true,
        },
        {
          srcType: this.removeTypeName,
          fieldName: 'metricField2',
          metricExpression: 'identity(4)',
          interval: 'HOUR',
          cronJob: 'cronJobId',
          filter: '1==1',
          generatedByAnnotation: true,
        },
        {
          srcType: this.removeTypeName,
          fieldName: 'fakeField',
          metricExpression: 'identity(5)',
          interval: 'HOUR',
          cronJob: 'cronJobId',
          filter: '1==1',
          generatedByAnnotation: false,
        },
      ]);
      TestApi.waitForSetup(this.ctx);

      var initialCount = FieldStoredMetricCache.fetchCount();

      FieldStoredMetricCacheMetadataListener.notify(notificationSpec);
      var entities = FieldStoredMetricCache.fetch({
        filter: Filter.eq('srcType.typeName', this.removeTypeName),
      });
      var afterCount = FieldStoredMetricCache.fetchCount();

      expect(afterCount - initialCount).toEqual(-2);
      expect(entities.count).toEqual(1);
    });

    it('should remove connected cronJobs for deleted types', function () {
      var notificationSpec = TypeListenerNotifySpec.make(
        {
          removed: [this.removeType],
        },
        true
      );

      // There are two existing entities. One for an old version of the field and another that was user generated.
      TestApi.upsertBatchEntity(this.ctx, 'FieldStoredMetricCache', [
        {
          srcType: this.removeTypeName,
          fieldName: 'metricField1',
          metricExpression: 'identity(3)',
          interval: 'HOUR',
          cronJob: 'automaticallyGeneratedCronJobId',
          filter: '1==1',
          generatedByAnnotation: true,
        },
        {
          srcType: this.removeTypeName,
          fieldName: 'metricField2',
          metricExpression: 'identity(4)',
          interval: 'HOUR',
          cronJob: 'userUpdatedCronJobId',
          filter: '1==1',
          generatedByAnnotation: true,
        },
      ]);

      TestApi.upsertBatchEntity(this.ctx, 'CronJob', [
        {
          id: 'automaticallyGeneratedCronJobId',
          correlationKey: 'FieldStoredMetricCacheMetadataListener',
          action: ActionRef.make(
            {
              actionName: 'startJob',
              typeName: 'FieldStoredMetricCacheBatchJob',
            },
            true
          ),
        },
        {
          id: 'userUpdatedCronJobId',
          correlationKey: 'Another Key',
          action: ActionRef.make(
            {
              actionName: 'startJob',
              typeName: 'FieldStoredMetricCacheBatchJob',
            },
            true
          ),
        },
      ]);
      TestApi.waitForSetup(this.ctx);

      var initialCount = CronJob.fetchCount();

      FieldStoredMetricCacheMetadataListener.notify(notificationSpec);
      FieldStoredMetricCache.fetch({
        filter: Filter.eq('srcType.typeName', this.removeTypeName),
      });
      var afterCount = CronJob.fetchCount();

      expect(afterCount - initialCount).toEqual(-1);
      expect(CronJob.forId('automaticallyGeneratedCronJobId')).toEqual(null);

      CronJob.forId('userUpdatedCronJobId').remove();
    });
  });

  describe('validateAnnotation', function () {
    it('should return issue for missing required interval', function () {
      var annotation = Ann.MetricCache.make(
        {
          metricExpression: 'expression',
          cronExpression: '0 0 12 1 1 ? *',
        },
        true
      );
      var newIssues = FieldStoredMetricCacheMetadataListener.validateAnnotation(
        annotation,
        this.createType,
        'metricField'
      );
      expect(newIssues).toEqual([
        jasmine.objectContaining(
          MetadataIssue.forField(
            this.createType,
            'metricField',
            MetadataIssueSeverity.ERROR,
            'MetricCache annotation missing required field interval'
          )
        ),
      ]);
    });

    it('should return issue for missing required metricExpression', function () {
      var annotation = Ann.MetricCache.make(
        {
          interval: 'DAY',
          cronExpression: '0 0 12 1 1 ? *',
        },
        true
      );
      var newIssues = FieldStoredMetricCacheMetadataListener.validateAnnotation(
        annotation,
        this.createType,
        'metricField'
      );
      expect(newIssues).toEqual([
        jasmine.objectContaining(
          MetadataIssue.forField(
            this.createType,
            'metricField',
            MetadataIssueSeverity.ERROR,
            'MetricCache annotation missing required field metricExpression'
          )
        ),
      ]);
    });
  });

  describe('notify - metadata issues', function () {
    beforeAll(function () {
      this.previousIssue = MetadataIssue.make(
        {
          fileUrl: 'fileUrl',
          lineNum: 0,
          colNum: 0,
          severity: MetadataIssueSeverity.ERROR,
          message: 'previousIssue',
        },
        true
      );
      this.validationIssue = MetadataIssue.forField(
        this.createType,
        'metricField',
        MetadataIssueSeverity.ERROR,
        'MetricCache annotation missing required field metricExpression'
      );
      this.fsmcCreateIssue = MetadataIssue.forType(
        FieldStoredMetricCacheMetadataListener,
        MetadataIssueSeverity.ERROR,
        'Error in creation of new FieldStoredMetricCache entities'
      );
    });

    it('should pass along the metadata issues from validation', function () {
      var validateAnnotationSpy = TestApi.spyOn(
        this.ctx,
        'FieldStoredMetricCacheMetadataListener',
        'validateAnnotation'
      )
        .returnValue([this.validationIssue])
        .register();

      var notificationSpec = TypeListenerNotifySpec.make(
        {
          created: [this.createType, this.controlType],
          existingIssues: [this.previousIssue],
        },
        true
      );
      var issues = FieldStoredMetricCacheMetadataListener.notify(notificationSpec).issues;
      expect(issues.length).toEqual(3);
      expect(issues).toContain(this.validationIssue);
      expect(issues).toContain(this.previousIssue);

      /*
       * V8 Upgrade Notice: Custom Notice
       * Warning: In V8, the TestApiSpy.unregister() function unregisters and removes the ActionMock, making it inaccessible after the function is called. Manual migration may be required so that the ActionMock is not called again after it is unregistered.
       * Please refer to: https://c3energy.atlassian.net/wiki/spaces/DOC/pages/8150679979/v7+to+v8+Changes#TestApiSpy.
       */
      validateAnnotationSpy.unregister();
    });

    it('should add new metadata issues from validation', function () {
      var validateAnnotationSpy = TestApi.spyOn(
        this.ctx,
        'FieldStoredMetricCacheMetadataListener',
        'validateAnnotation'
      )
        .returnValue([this.validationIssue])
        .register();

      var notificationSpec = TypeListenerNotifySpec.make(
        {
          created: [this.createType, this.controlType],
        },
        true
      );
      var issues = FieldStoredMetricCacheMetadataListener.notify(notificationSpec).issues;
      expect(issues.length).toEqual(2);
      expect(issues).toContain(this.validationIssue);

      /*
       * V8 Upgrade Notice: Custom Notice
       * Warning: In V8, the TestApiSpy.unregister() function unregisters and removes the ActionMock, making it inaccessible after the function is called. Manual migration may be required so that the ActionMock is not called again after it is unregistered.
       * Please refer to: https://c3energy.atlassian.net/wiki/spaces/DOC/pages/8150679979/v7+to+v8+Changes#TestApiSpy.
       */
      validateAnnotationSpy.unregister();
    });
  });
});
