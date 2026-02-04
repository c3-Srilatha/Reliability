// TypeScript definitions for the C3 type ArrowAware

/**
 * Base type to make subtypes aware and interoperable with Apache Arrow
 *
 * @remarks this represents a value passed to a method that expects an instance of ArrowAware
 */
declare interface IArrowAware {
}

/**
 * Base type to make subtypes aware and interoperable with Apache Arrow
 *
 * @remarks this represents a made instance of ArrowAware
 */
declare class ArrowAware {

  /**
   * Converts this value into instance of Apache Arrow value
   */
  toArrow(): Arrow | null;

  /**
   * Converts this value into instance of Apache Arrow binary
   */
  toArrowBinary(): any | null;

  /**
   * Writes binary representation of this instance as Arrow into provided content such as file
   */
  writeArrow(content: C): C;

  /**
   * Writes binary representation of this instance as Arrow into provided byte push stream
   */
  writeArrow(stream: any): void;

  /**
   * Makes instance of this type from instance of Apache Arrow value
   */
  static fromArrow(arrow: Arrow | null, failIfInvalid?: boolean): ArrowAware | null;

  /**
   * Makes instance of this type from instance of Apache Arrow content such as file
   */
  static fromArrow(arrow: Content | null, failIfInvalid?: boolean): ArrowAware | null;

  /**
   * Makes instance of this type from instance of Apache Arrow binary value
   */
  static fromArrow(arrow: any | null, failIfInvalid?: boolean): ArrowAware | null;

  /**
   * Makes instance of this type from instance of Apache Arrow byte stream
   */
  static fromArrow(arrow: ByteStream | null, failIfInvalid?: boolean): ArrowAware | null;

  /**
   * Makes instance of this type from instance of Apache Arrow binary stream
   */
  static fromArrow(arrow: Stream<number | null> | null, failIfInvalid?: boolean): ArrowAware | null;
}

