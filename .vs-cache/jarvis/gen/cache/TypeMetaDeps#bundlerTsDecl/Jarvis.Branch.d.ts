declare namespace Jarvis {
  export interface Branch {

    readonly id: string;
    withId(id: string): Jarvis.Branch;

    readonly name?: string | null;
    withName(name: string | null): Jarvis.Branch;
  }
}

