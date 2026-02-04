/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResultToPassageRelation';

describe(filename, function () {
  beforeAll(function () {
    this.feedback = Genai.Query.Result.BaseFeedback.make({
      helpful: true,
      comment: 'Very informative',
    });

    relationObj = Genai.Query.ResultToPassageRelation.make({
      id: 'relationId',
    });

    this.result = relationObj.leaveFeedback(this.feedback);
  });

  afterAll(function () {
    this.result.remove();
  });

  it('should return an object of type Genai.Query.Result.PassageFeedback', function () {
    expect(this.result).toBeInstanceOf(Genai.Query.Result.PassageFeedback);
  });

  it('returned object should have the correct fields', function () {
    expect(this.result.get().helpful).toEqual(this.feedback.helpful);
    expect(this.result.get().comment).toEqual(this.feedback.comment);
  });
});
