// TypeScript definitions for the C3 type DefaultClaim

/**
 * Marker type indicating that it automatically claims abstract sub type methods.
 *
 * @remarks this represents a value passed to a method that expects an instance of DefaultClaim
 */
declare interface IDefaultClaim {
}

/**
 * Marker type indicating that it automatically claims abstract sub type methods.
 *
 * @remarks this represents a made instance of DefaultClaim
 */
declare class DefaultClaim {

  /**
   * @return executes given action representing abstract method call on one of this type's sub-type.
   */
  static _exec(action: Action): any;
}

