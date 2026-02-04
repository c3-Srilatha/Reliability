/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_FailureRecommendationFeedback_leaveFeedback', function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext('test_FailureRecommendationFeedback_leaveFeedback');

    this.failureMode = TestApi.upsertEntity(this.ctx, 'FailureMode', {
      name: 'Test Failure Mode',
    });
    this.failureModeItem = TestApi.upsertEntity(this.ctx, 'FailureModeLineItem', {
      name: 'Test Failure Mode',
      description: 'Test Failure Mode Description',
      failureMode: this.failureMode,
      faultCategory: FailureModeFaultCategory.Electrical,
    });
    this.failureModeRelation = TestApi.upsertEntity(this.ctx, 'FailureModeRelation', {
      to: this.failureModeItem,
    });
    this.failureModeRecommendation = TestApi.upsertEntity(this.ctx, 'FailureModeRecommendation', {
      name: 'Test Failure Mode Recommendation',
      failureMode: this.failureMode,
      recommendation: 'test failure mode recommendation',
    });
    this.failureRecommendationRelation = TestApi.upsertEntity(this.ctx, 'FailureRecommendationRelation', {
      to: this.failureModeRecommendation,
    });
  });

  afterAll(function () {
    FailureRecommendationFeedback.removeAll(
      {
        filter: Filter.eq('parent', this.failureRecommendationRelation.id),
      },
      true
    );
    TestApi.teardown(this.ctx);
  });

  describe('when #leaveFeedback function is called', function () {
    describe('with all fields provided', function () {
      beforeAll(function () {
        this.recommendationFailureModeItem = FailureRecommendationFeedback.leaveFeedback(
          0,
          this.failureRecommendationRelation.id
        );
        this.feedback = FailureRecommendationFeedback.fetch({
          filter: Filter.eq('parent', this.failureRecommendationRelation.id),
        }).objs[0];
      });

      it('should return the correct data', function () {
        expect(this.recommendationFailureModeItem).not.toBeNull();
        expect(this.recommendationFailureModeItem.to.description).toEqual('Test Failure Mode Description');
        expect(this.recommendationFailureModeItem.to.failureMode.id).toEqual(this.failureMode.id);
        expect(this.recommendationFailureModeItem.to.failureMode.name).toEqual('Test Failure Mode');
        expect(this.recommendationFailureModeItem.to.faultCategory).toEqual(FailureModeFaultCategory.Electrical);
        expect(this.recommendationFailureModeItem.to.id).toEqual(this.failureModeItem.id);
      });

      it('should create a new FailureRecommendationFeedback entity', function () {
        expect(this.feedback).not.toBeNull();
        expect(this.feedback.feedback).toEqual(0);
        expect(this.feedback.engineer.toString()).toEqual(C3.context().username);
        expect(this.feedback.timestamp).not.toBeNull();
      });

      it('should refresh the FailureRecommendationRelation entity', function () {
        var failureRecommendationRelation = FailureRecommendationRelation.make(
          this.failureRecommendationRelation.id
        ).get('feedbacks,latestFeedback.id');
        expect(failureRecommendationRelation.latestFeedback.id).toEqual(this.feedback.id);
      });
    });
  });
});
