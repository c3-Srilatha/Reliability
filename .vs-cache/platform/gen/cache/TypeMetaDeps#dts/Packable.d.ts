// TypeScript definitions for the C3 type Packable

/**
 * Base type for values / instances that can by "packed" - i.e. optimize memory usage at the expense of access time.
 *
 * @remarks this represents a value passed to a method that expects an instance of Packable
 */
declare interface IPackable {
}

/**
 * Base type for values / instances that can by "packed" - i.e. optimize memory usage at the expense of access time.
 *
 * @remarks this represents a made instance of Packable
 */
declare class Packable {

  /**
   * Whether or not this object is packed to optimize memory usage at the expense of access time.
   *
   * @see #pack
   * @see #unpack
   */
  isPacked(): boolean;

  /**
   * Return an immutable compact copy of the object or itself if already packed.
   *
   * @see #isPacked
   */
  pack(): Packable;

  /**
   * Return an immutable unpacked copy of the object or itself if already unpacked.
   *
   * @see #isPacked
   */
  unpack(): Packable;
}

