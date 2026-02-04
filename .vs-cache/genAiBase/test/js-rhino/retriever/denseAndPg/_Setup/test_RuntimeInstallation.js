/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_pg_RuntimeInstallation';

// Allow time for runtime installation
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120 * 60 * 1000;

describe(filename, function () {
  TestApi.installRuntimes();

  // These are used in testing less-common embedders
  TestApi.installHuggingfaceModels([
    'sentence-transformers/facebook-dpr-ctx_encoder-multiset-base',
    'sentence-transformers/facebook-dpr-question_encoder-multiset-base',
    'sentence-transformers/msmarco-distilbert-base-tas-b',
  ]);
});
