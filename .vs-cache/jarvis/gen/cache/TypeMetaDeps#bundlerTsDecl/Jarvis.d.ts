export interface Jarvis {

  readonly name: string;
  withName(name: string): Jarvis;

  static readonly name: string;
}

