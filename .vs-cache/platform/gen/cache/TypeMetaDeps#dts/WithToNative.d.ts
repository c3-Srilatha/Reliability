// TypeScript definitions for the C3 type WithToNative

/**
 * Type that provides a way to map an instance to a language-native value. This must be implemented in _every_ language
 * to be fully useful.
 *
 * For some instance/language combinations, the native value may be the same as the C3 "made" type, in which case this
 * will just return the value. For example, in Java, {@link Obj} instances will be returned as-is, but {@link DateTime}
 * values will be converted to `java.time.Instant` values.
 *
 * @remarks this represents a value passed to a method that expects an instance of WithToNative
 */
declare interface IWithToNative {
}

/**
 * Type that provides a way to map an instance to a language-native value. This must be implemented in _every_ language
 * to be fully useful.
 *
 * For some instance/language combinations, the native value may be the same as the C3 "made" type, in which case this
 * will just return the value. For example, in Java, {@link Obj} instances will be returned as-is, but {@link DateTime}
 * values will be converted to `java.time.Instant` values.
 *
 * @remarks this represents a made instance of WithToNative
 */
declare class WithToNative {

  /**
   * The closest native representation of the value.
   *
   * In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
   * access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
   * exposed, copying if necessary.
   *
   * @param doNotCopy return internal state without copying (unsafe access)
   */
  toNative(doNotCopy?: boolean): any;
}

