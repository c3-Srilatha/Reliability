// TypeScript definitions for the C3 type ArithmeticProtocol

/**
 * Note that this is missing divideModulo, leftShift, rightShift, as well as reflected versions.
 *
 * @remarks this represents a value passed to a method that expects an instance of ArithmeticProtocol
 */
declare interface IArithmeticProtocol {
}

/**
 * Note that this is missing divideModulo, leftShift, rightShift, as well as reflected versions.
 *
 * @remarks this represents a made instance of ArithmeticProtocol
 */
declare class ArithmeticProtocol {

  addition(other: any): any;

  subtract(other: any): any;

  multiply(other: any): any;

  matrixMultiply(other: any): any;

  trueDivision(other: any): any;

  floorDivision(other: any): any;

  modulo(other: any): any;

  power(other: any, modulus?: any): any;

  reflectedAddition(other: any): any;

  reflectedSubtract(other: any): any;

  reflectedMultiply(other: any): any;

  reflectedMatrixMultiply(other: any): any;

  reflectedTrueDivision(other: any): any;

  reflectedFloorDivision(other: any): any;

  reflectedModulo(other: any): any;

  reflectedPower(other: any, modulus?: any): any;
}

