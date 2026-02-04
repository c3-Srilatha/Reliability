// TypeScript definitions for the C3 type Sanitizer

/**
 * @remarks this represents a value passed to a method that expects an instance of Sanitizer
 */
declare interface ISanitizer {
}

/**
 * @remarks this represents a made instance of Sanitizer
 */
declare class Sanitizer {

  /**
   * Clears secret material anywhere in the object tree.
   */
  static sanitizeAll(type: ValueType, value: any): any;
}

