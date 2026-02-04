declare namespace Jarvis {
  export interface State {

    static readonly PENDING: "PENDING";

    static readonly INITIALIZING: "INITIALIZING";

    static readonly ASSIGNED: "ASSIGNED";

    static readonly RUNNING: "RUNNING";

    static readonly TIMING_OUT: "TIMING_OUT";

    static readonly ABORTING: "ABORTING";

    static readonly DONE: "DONE";
  }
}

