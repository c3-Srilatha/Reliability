// TypeScript definitions for the C3 type Grep

/**
 * https://en.wikipedia.org/wiki/Grep
 *
 * @remarks this represents a value passed to a method that expects an instance of Grep
 */
declare interface IGrep {
}

/**
 * https://en.wikipedia.org/wiki/Grep
 *
 * @remarks this represents a made instance of Grep
 */
declare class Grep {

  /**
   * Executes this OS command by passing text input and args and expecting text output.
   */
  static exec(in_?: string | null, args?: C3.Array<string | null>): string | null;

  /**
   * Starts execution of this OS command passing text stream as input and args and expecting text stream as output.
   */
  static stream(in_?: CharStream | null, args?: C3.Array<string | null>): CharStream;

  /**
   * @return short usage description of the CLI command.
   */
  static usage(): string;

  /**
   * @return OS command name.
   */
  static cmd(): string;
}

