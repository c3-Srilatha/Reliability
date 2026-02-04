/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

// Needs to be deleted?
xdescribe('test_UITestingSupport', function () {
  var filename = 'test_UITestingSupport';

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, null, [AnalyticsQueue]);
    this.url = TestApi.setupVanityUrl(this.ctx);
    TestApi.waitForSetup(this.ctx, null, 1, 10);
    this.hostname = Url.fromString(this.url).host;
    this.vanityUrl = VanityUrl.fetch({
      filter: Filter.eq('id', this.hostname),
      include: 'tenant, tag',
    });
    expect(this.vanityUrl.objs.length).toEqual(1);
    this.vanityUrl = this.vanityUrl.objs.at(0);
  });

  it('should create a vanity url for the current tenant and tag', function () {
    expect(this.vanityUrl.tenant).toEqual(C3.context().env);
    expect(this.vanityUrl.tag).toEqual(C3.context().app);
  });

  it('should create a vanity url with a hostname that matches the configured canonical url domain', function () {
    expect(this.vanityUrl.id.endsWith(ClusterConfig.inst().getConfig().canonicalUrlDomain)).toBeTruthy();
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    expect(this.ctx.numObjects()).toEqual(0);
  });
}).pend('MIG8-2675');
