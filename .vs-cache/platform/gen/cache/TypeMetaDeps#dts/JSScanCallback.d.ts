// TypeScript definitions for the C3 type JSScanCallback

/**
 * @remarks this represents a value passed to a method that expects an instance of JSScanCallback
 */
declare interface IJSScanCallback {
}

/**
 * @remarks this represents a made instance of JSScanCallback
 */
declare class JSScanCallback {

  static process(callback?: string | null, objs?: C3.Array<Obj | null>, context?: Obj | null): void;
}

