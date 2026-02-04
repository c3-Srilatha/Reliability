// TypeScript definitions for the C3 type ReClaim

/**
 * Marker type indicating that it automatically claims all mixin type methods.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReClaim
 */
declare interface IReClaim {
}

/**
 * Marker type indicating that it automatically claims all mixin type methods.
 *
 * @remarks this represents a made instance of ReClaim
 */
declare class ReClaim {

  /**
   * @return executes given action representing method call on one of this type's mixin type.
   */
  static _exec(action: Action): any;
}

