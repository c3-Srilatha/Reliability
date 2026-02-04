// TypeScript definitions for the C3 type Binary

/**
 * Uninterpreted data, declared as `binary`.  This is a series of byte values that can be used
 * to store arbitrary data, such as an image.
 *
 * Binary data stored in NoSQL databases is always arbitrary length.
 *
 * Binary should not be used to store strings because this will require extra information on
 * the character encoding to be maintained.  Use `string` instead.
 *
 * There are three types of binary data, backed by different Java implementations: HeapByteBuffer, DirectByteBuffer, and
 * MappedByteBuffer.  The type of binary data is determined by the `isSharedMemory` and `isMemoryMapped` functions.
 * HeapByteBuffer is the default; DirectByteBuffer is used for direct memory access between Java and JEP; MappedByteBuffer
 * is used to implement shared memory between Java and Py4j.
 *
 * @see PrimitiveType
 *
 * @remarks this represents a value passed to a method that expects an instance of Binary
 */
declare interface IBinary {
}

/**
 * Uninterpreted data, declared as `binary`.  This is a series of byte values that can be used
 * to store arbitrary data, such as an image.
 *
 * Binary data stored in NoSQL databases is always arbitrary length.
 *
 * Binary should not be used to store strings because this will require extra information on
 * the character encoding to be maintained.  Use `string` instead.
 *
 * There are three types of binary data, backed by different Java implementations: HeapByteBuffer, DirectByteBuffer, and
 * MappedByteBuffer.  The type of binary data is determined by the `isSharedMemory` and `isMemoryMapped` functions.
 * HeapByteBuffer is the default; DirectByteBuffer is used for direct memory access between Java and JEP; MappedByteBuffer
 * is used to implement shared memory between Java and Py4j.
 *
 * @see PrimitiveType
 *
 * @remarks this represents a made instance of Binary
 */
declare class Binary {

  /**
   * Wrap a Java ByteBuffer as a Binary.
   */
  static wrap(bytes?: any): Binary | null;

  /**
   * Wrap a Java byte array as a Binary on heap.
   */
  static wrap(bytes?: any): Binary | null;

  /**
   * Wrap a Java byte array as a Binary on heap.
   */
  static wrap(bytes?: any, offset?: number | null, length?: number | null): Binary | null;

  /**
   * Allocate a new Binary with the given capacity on heap.
   */
  static allocate(capacity?: number | null): Binary | null;

  /**
   * Allocate a new Binary with the given capacity off heap, using direct memory.
   */
  static allocateDirect(capacity?: number | null): Binary | null;

  /**
   * Allocate a new Binary with the given capacity off heap, using memory mapped file.
   */
  static allocateMapped(capacity?: number | null): Binary | null;

  /**
   * @return true if the binary data is using direct memory. Note that this also returns true for memory mapped files.
   */
  isDirectMemory(): boolean;

  /**
   * @return true if the binary data is backed by a memory mapped file.
   */
  isMemoryMapped(): boolean;

  /**
   * @return the file name of the memory mapped file, if #isMemoryMapped; empty otherwise.
   */
  filename(): string | null;
}

