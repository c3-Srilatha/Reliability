// TypeScript definitions for the C3 type InMemory

/**
 * Base type and common methods for data structures that reside in memory.
 *
 * @remarks this represents a value passed to a method that expects an instance of InMemory
 */
declare interface IInMemory<E> {
}

/**
 * Base type and common methods for data structures that reside in memory.
 *
 * @remarks this represents a made instance of InMemory
 */
declare class InMemory<E> {

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
  compress(): InMemory<E>;

  /**
   * Return an immutable compress copy of the object or itself if is not compressed.
   */
  uncompress(): InMemory<E>;

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
  pack(): InMemory<E>;

  /**
   * Return an immutable unpacked copy of the object or itself if already unpacked.
   *
   * @see #isPacked
   */
  unpack(): InMemory<E>;
}

