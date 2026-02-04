// TypeScript definitions for the C3 type WithContains

/**
 * @remarks this represents a value passed to a method that expects an instance of WithContains
 */
declare interface IWithContains {
}

/**
 * @remarks this represents a made instance of WithContains
 */
declare class WithContains {

  /**
   * @param element
   *         element to check for.
   * @return true iff the given element is present in this object.
   */
  contains(element: any): boolean;
}

