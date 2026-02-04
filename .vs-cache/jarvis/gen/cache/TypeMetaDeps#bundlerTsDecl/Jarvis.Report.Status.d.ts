declare namespace Jarvis.Report {
  export interface Status {

    static readonly PENDING: "PENDING";

    static readonly INITIALIZING: "INITIALIZING";

    static readonly ASSIGNED: "ASSIGNED";

    static readonly RUNNING: "RUNNING";

    static readonly TIMING_OUT: "TIMING_OUT";

    static readonly ABORTING: "ABORTING";

    static readonly DONE: "DONE";

    static readonly SUCCESS: "SUCCESS";

    static readonly NON_FATAL_ERROR: "NON_FATAL_ERROR";

    static readonly ERROR: "ERROR";

    static readonly NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR";

    static readonly TIMED_OUT: "TIMED_OUT";

    static readonly ABORTED: "ABORTED";
  }
}

