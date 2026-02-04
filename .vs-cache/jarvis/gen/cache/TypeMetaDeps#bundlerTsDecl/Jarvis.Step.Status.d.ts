declare namespace Jarvis.Step {
  export interface Status {

    static readonly IGNORABLE: "IGNORABLE";

    static readonly SUCCESS: "SUCCESS";

    static readonly PARTIAL: "PARTIAL";

    static readonly NON_FATAL_ERROR: "NON_FATAL_ERROR";

    static readonly NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR";

    static readonly SKIPPED: "SKIPPED";

    static readonly ERROR: "ERROR";

    static readonly TIMED_OUT: "TIMED_OUT";

    static readonly ABORTED: "ABORTED";
  }
}

