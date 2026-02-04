// TypeScript definitions for the C3 type UnaryArithmeticProtocol

/**
 * @remarks this represents a value passed to a method that expects an instance of UnaryArithmeticProtocol
 */
declare interface IUnaryArithmeticProtocol {
}

/**
 * @remarks this represents a made instance of UnaryArithmeticProtocol
 */
declare class UnaryArithmeticProtocol {

  toNegative(): any;

  toPositive(): any;

  toAbsolute(): any;

  toInverted(): any;

  toRounded(decimals?: number | null): any;
}

