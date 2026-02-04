/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_FailureModeFeedback_leaveFeedback', function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext('test_FailureModeFeedback_leaveFeedback');

    this.failureModeItems = TestApi.upsertEntity(this.ctx, 'FailureModeLineItem', {
      name: 'FailureMode1',
    });

    this.failureModeRelation = TestApi.upsertEntity(this.ctx, 'FailureModeRelation', {
      to: this.failureModeItems,
    });
  });

  afterAll(function () {
    FailureModeFeedback.removeAll(
      {
        filter: Filter.eq('parent', this.failureModeRelation.id),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('when #leaveFeedback function is called', function () {
    describe('with all fields provided', function () {
      beforeAll(function () {
        FailureModeFeedback.leaveFeedback(this.failureModeRelation.id, 0);
        this.feedback = FailureModeFeedback.fetch({
          filter: Filter.eq('parent', this.failureModeRelation.id),
        }).objs[0];
      });

      it('should create a new FailureModeFeedback entity', function () {
        expect(this.feedback).not.toBeNull();
        expect(this.feedback.feedback).toEqual(0);
        expect(this.feedback.engineer.toString()).toEqual(C3.context().username);
        expect(this.feedback.timestamp).not.toBeNull();
      });

      it('should refresh the FailureModeRelation entity', function () {
        var failureModeRelation = FailureModeRelation.make(this.failureModeRelation.id).get('feedbacks,latestFeedback');
        expect(failureModeRelation.latestFeedback.feedback).toEqual(0);
        expect(failureModeRelation.latestFeedback.engineer.toString()).toEqual(C3.context().username);
      });
    });
  });
});
