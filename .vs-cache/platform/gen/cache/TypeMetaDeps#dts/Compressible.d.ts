// TypeScript definitions for the C3 type Compressible

/**
 * Base type for values / instances that can by "compressed" - i.e. optimize memory usage at the expense of access time.
 *
 * @remarks this represents a value passed to a method that expects an instance of Compressible
 */
declare interface ICompressible {
}

/**
 * Base type for values / instances that can by "compressed" - i.e. optimize memory usage at the expense of access time.
 *
 * @remarks this represents a made instance of Compressible
 */
declare class Compressible {

  /**
   * Whether or not this object is compressed to optimize memory usage at the expense of access time.
   *
   * @see #compress
   * @see #uncompress
   */
  isCompressed(): boolean;

  /**
   * Return an immutable compact copy of the object or itself if already compressd.
   */
  compress(): Compressible;

  /**
   * Return an immutable compress copy of the object or itself if is not compressed.
   */
  uncompress(): Compressible;
}

