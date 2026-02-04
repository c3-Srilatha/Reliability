// TypeScript definitions for the C3 type EchoPrivileged

/**
 * @remarks this represents a value passed to a method that expects an instance of EchoPrivileged
 */
declare interface IEchoPrivileged {
}

/**
 * @remarks this represents a made instance of EchoPrivileged
 */
declare class EchoPrivileged {

  static echo(msg?: string | null): string | null;

  static echoJs(msg?: string | null): string | null;

  static echoUnprivilegedJs(msg?: string | null): string | null;
}

