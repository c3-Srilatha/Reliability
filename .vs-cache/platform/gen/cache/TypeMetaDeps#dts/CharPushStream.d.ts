// TypeScript definitions for the C3 type CharPushStream

/**
 * The specialized CharacterStream type provides extra support for streams of characters.
 * In particular, they can be processed as string blocks instead of one character at a time.
 *
 * Note that characters generally do not correspond to bytes, so the number of characters
 * will *not* be the same as the number of bytes processed. For example in UTF-8 encoding
 * each character requires from 1 to 6 bytes.
 *
 * @remarks this represents a value passed to a method that expects an instance of CharPushStream
 */
declare interface ICharPushStream {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<CharPushStream | null> | null;

  /**
   * Default size of the block when writing
   */
  DEFAULT_BLOCK_SIZE?: number | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * The specialized CharacterStream type provides extra support for streams of characters.
 * In particular, they can be processed as string blocks instead of one character at a time.
 *
 * Note that characters generally do not correspond to bytes, so the number of characters
 * will *not* be the same as the number of bytes processed. For example in UTF-8 encoding
 * each character requires from 1 to 6 bytes.
 *
 * @remarks this represents a made instance of CharPushStream
 */
declare class CharPushStream {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<CharPushStream | null> | null;
  withOnClose(onClose: λConsumer<CharPushStream | null> | null): CharPushStream;

  /**
   * Default size of the block when writing
   */
  readonly DEFAULT_BLOCK_SIZE?: number | null;
  withDEFAULT_BLOCK_SIZE(DEFAULT_BLOCK_SIZE: number | null): CharPushStream;

  /**
   * Deallocates any potential resource and calls onClose if provided.
   */
  close(): void;

  /**
   * Callback on stream close.
   */
  doClose(): void;

  /**
   * @returns true if this Closable resource has been closed
   */
  closed(): boolean;

  /**
   * Pushes the next single value into stream. Throws exception if stream is closed.
   */
  write(value: number): void;

  /**
   * Pushes the next batch of values into stream. Throws exception if stream is closed.
   */
  writeBatch(value: C3.Array<number | null> | null): void;

  /**
   * Pushes the next batch of values into stream. Throws exception if stream is closed.
   */
  writeStream(value: Stream<number | null> | null): void;

  /**
   * Creates new push stream based on logic in provided callbacks.
   */
  static create(onWrite: λBiConsumer<number | null, CharPushStream | null>, onClose?: λConsumer<CharPushStream | null> | null): CharPushStream;

  /**
   * Creates new buffered push stream based on logic in provided callbacks.
   */
  static createBuffered(onWrite: λBiConsumer<C3.Array<number | null>, CharPushStream | null>, onClose?: λConsumer<CharPushStream | null> | null, bufferSize?: number | null): PushStream<number | null>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
   * buffer.
   */
  static createBufferedWithStats(onWrite: λBiFunction<number | null, CharPushStream | null, ObjStats | null>, onClose?: λConsumer<CharPushStream | null> | null, bufferSize?: number | null): PushStreamWithStats<number | null>;

  /**
   * Creates new block push stream based on logic in provided callbacks.
   */
  static createBlock(onWrite: λBiConsumer<string | null, CharPushStream | null>, onClose?: λConsumer<CharPushStream | null> | null, blockSize?: number | null): CharPushStream;

  /**
   * Write the next block of values into push stream.
   *
   * This is generally the more efficient way to process the push stream than using
   * the {@link write} methods.
   */
  writeBlock(blockValue: string | null): void;
}


interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
