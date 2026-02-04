declare namespace Jarvis.Content {
  export interface Kind {

    static readonly LOG: "LOG";

    static readonly LOG_CHUNK: "LOG_CHUNK";

    static readonly SCREENSHOT: "SCREENSHOT";

    static readonly STEP_ARTIFACTS: "STEP_ARTIFACTS";

    static readonly TEST_ERROR: "TEST_ERROR";

    static readonly TEST_FAILURE: "TEST_FAILURE";

    static readonly TEST_FAILURES_AND_ERRORS: "TEST_FAILURES_AND_ERRORS";
  }
}

