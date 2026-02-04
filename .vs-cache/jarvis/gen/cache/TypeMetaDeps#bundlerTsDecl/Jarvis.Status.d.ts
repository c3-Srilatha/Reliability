declare namespace Jarvis {
  export interface Status {

    static readonly SUCCESS: "SUCCESS";

    static readonly NON_FATAL_ERROR: "NON_FATAL_ERROR";

    static readonly ERROR: "ERROR";

    static readonly NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR";

    static readonly TIMED_OUT: "TIMED_OUT";

    static readonly ABORTED: "ABORTED";
  }
}

