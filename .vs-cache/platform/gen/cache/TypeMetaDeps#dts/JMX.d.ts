// TypeScript definitions for the C3 type JMX

/**
 * @remarks this represents a value passed to a method that expects an instance of JMX
 */
declare interface IJMX {
}

/**
 * @remarks this represents a made instance of JMX
 */
declare class JMX {

  static list(hostname?: string | null, port?: number | null): C3.Array<MBean | null>;

  static listWithValues(hostname?: string | null, port?: number | null): C3.Array<MBean | null>;

  static mbean(name?: string | null, hostname?: string | null, port?: number | null): MBean | null;

  static find(nameSpec?: string | null): C3.Array<MBean | null>;
}

