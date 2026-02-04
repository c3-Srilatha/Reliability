declare namespace Jarvis {
  export interface WithState {

    readonly state?: string | null;
    withState(state: string | null): Jarvis.WithState;
  }
}

