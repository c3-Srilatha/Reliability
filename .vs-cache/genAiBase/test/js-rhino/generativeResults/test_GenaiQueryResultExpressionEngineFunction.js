/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiQueryResultExpressionEngineFunction';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.queryResult = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('What is a ML Pipeline?'),
      engineLog: '{"id":101,"name":"Test","active":true,"contact":{"email":"test@example.com","phone":"555-1234"}}',
    });
    this.queryResult2 = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('What is SDL?'),
      engineLog:
        '{"productId":567,"productName":"Wireless Mouse","price":29.99,"inStock":true,"specs":{"color":"black","batteryLife":"12 months","connectivity":"Bluetooth"}}',
    });
    this.queryResult3 = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
      searchQuery: Genai.Query.fromString('How can I create a SDL spinner?'),
    });

    this.includeString = 'latency, parsedEngineLog, engineLog';

    this.status1 = TestApi.upsertBatchEntity(
      this.ctx,
      'Genai.Query.Result.InterimStatusHistory',
      [
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
          meta: { created: DateTime.now().plusMillis(-2000) },
        },
        {
          parent: this.queryResult,
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: DateTime.now() },
        },
        {
          parent: this.queryResult2,
          status: Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY,
          meta: { created: DateTime.now().plusMillis(-2000) },
        },
        {
          parent: this.queryResult3,
          status: Genai.Query.Result.InterimStatusEnum.USE_EVAL_QUERY_TOOL,
          meta: { created: DateTime.now().plusMillis(-5000) },
        },
        {
          parent: this.queryResult3,
          status: Genai.Query.Result.InterimStatusEnum.COMPLETED,
          meta: { created: DateTime.now() },
        },
      ],
      { metaOverride: true }
    );

    TestApi.waitForSetup(this.ctx);
    this.queryResult = Genai.Query.Result.make({ id: this.queryResult }).getMissing({ include: this.includeString });
    this.queryResult2 = Genai.Query.Result.make({ id: this.queryResult2 }).getMissing({ include: this.includeString });
    this.queryResult3 = Genai.Query.Result.make({ id: this.queryResult3 }).getMissing({ include: this.includeString });
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::getQueryLatency', function () {
    it('should return latency of the query in ms', function () {
      expect(this.queryResult.latency).toEqual(2000);
    });

    it('should return -1 if status history is invalid', function () {
      expect(this.queryResult2.latency).toEqual(-1);
    });

    it('should return the latency of the query in milliseconds even when the initial state is different from PROCESS_QUERY', function () {
      expect(this.queryResult3.latency).toEqual(5000);
    });
  });

  describe('::getParsedEngineLog', function () {
    beforeAll(function () {
      this.expectedLog1 = {
        parsed: true,
        parsedEngineLog: {
          id: 101,
          name: 'Test',
          active: true,
          contact: {
            email: 'test@example.com',
            phone: '555-1234',
          },
        },
        engineLog: this.queryResult.engineLog,
      };

      this.expectedLog2 = {
        parsed: true,
        parsedEngineLog: {
          productId: 567,
          productName: 'Wireless Mouse',
          price: 29.99,
          inStock: true,
          specs: {
            color: 'black',
            batteryLife: '12 months',
            connectivity: 'Bluetooth',
          },
        },
        engineLog: this.queryResult2.engineLog,
      };
    });

    it('should return the parsed engine log', function () {
      expect(this.queryResult.parsedEngineLog).toEqual(this.expectedLog1);
      expect(this.queryResult2.parsedEngineLog).toEqual(this.expectedLog2);
    });
  });

  describe('::getretrieveGetForUiResult', function () {
    it('calls the "getForUi() method of the query', function () {
      const getForUiSpy = TestApi.spyOn(this.ctx, 'Genai.Query.Result', 'getForUi').register();
      Genai.Query.Result.fetch({ include: 'getForUiResult' });
      expect(getForUiSpy.toHaveBeenCalled()).toBe(true);
      getForUiSpy.unregister();
    });
  });
});
