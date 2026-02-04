declare namespace Jarvis {
  export interface WithStateHistory {

    readonly state?: string | null;
    withState(state: string | null): Jarvis.WithStateHistory;

    readonly stateHistory?: C3.Array<Jarvis.State.Detail | null>;
    withStateHistory(stateHistory: C3.Array<Jarvis.State.Detail | null> | Array<IJarvis.State.Detail | null>): Jarvis.WithStateHistory;
  }
}

