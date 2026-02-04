/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_DataApiContext';

describe(filename, function () {
  beforeAll(function () {
    this.seed1 = 0;
    this.seed2 = 3;
    this.dataCtx1;
    this.dataCtx2;

    this.dataCtx1 = DataApi.createContext(this.seed1);
    this.dataCtx2 = DataApi.createContext(this.seed2);
  });

  afterAll(function () {
    DataApi.destroyContext(this.dataCtx1);
    DataApi.destroyContext(this.dataCtx2);
  });

  it('DataApi can create a context', function () {
    // Make sure seed and iter are set properly
    expect(this.dataCtx1).toBeDefined();
    expect(this.dataCtx2).toBeDefined();
    expect(this.dataCtx1).toBeDefined();
    expect(this.dataCtx2).toBeDefined();
  });

  it('DataApi contexts are set properly', function () {
    this.dataCtx1 = DataApiContext.make(this.dataCtx1).get();
    this.dataCtx2 = DataApiContext.make(this.dataCtx2).get();
    expect(this.dataCtx1.seed).toEqual(this.seed1);
    expect(this.dataCtx2.seed).toEqual(this.seed2);
    expect(this.dataCtx1.next).toEqual(this.seed1 + 1);
    expect(this.dataCtx2.next).toEqual(this.seed2 + 1);
  });
});
