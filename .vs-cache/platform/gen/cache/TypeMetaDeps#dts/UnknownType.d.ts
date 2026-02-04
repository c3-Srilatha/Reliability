// TypeScript definitions for the C3 type UnknownType

/**
 * System type used in Action#fromJson if typename is not recognized.
 *
 * @remarks this represents a value passed to a method that expects an instance of UnknownType
 */
declare interface IUnknownType {
}

/**
 * System type used in Action#fromJson if typename is not recognized.
 *
 * @remarks this represents a made instance of UnknownType
 */
declare class UnknownType {

  static unknown(): void;
}

