declare namespace Jarvis.State {
  export interface Detail {

    readonly value?: string | null;
    withValue(value: string | null): Jarvis.State.Detail;

    readonly timestamp?: DateTime | null;
    withTimestamp(timestamp: DateTime | Date | string | null): Jarvis.State.Detail;

    readonly user?: string | null;
    withUser(user: string | null): Jarvis.State.Detail;
  }
}

