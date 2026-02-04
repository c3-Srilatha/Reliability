// TypeScript definitions for the C3 type BytePushStream

/**
 * @remarks this represents a value passed to a method that expects an instance of BytePushStream
 */
declare interface IBytePushStream {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<BytePushStream | null> | null;

  /**
   * Default size of the block when writing
   */
  DEFAULT_BLOCK_SIZE?: number | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * @remarks this represents a made instance of BytePushStream
 */
declare class BytePushStream {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<BytePushStream | null> | null;
  withOnClose(onClose: λConsumer<BytePushStream | null> | null): BytePushStream;

  /**
   * Default size of the block when writing
   */
  readonly DEFAULT_BLOCK_SIZE?: number | null;
  withDEFAULT_BLOCK_SIZE(DEFAULT_BLOCK_SIZE: number | null): BytePushStream;

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
  static create(onWrite: λBiConsumer<number | null, BytePushStream | null>, onClose?: λConsumer<BytePushStream | null> | null): BytePushStream;

  /**
   * Creates new buffered push stream based on logic in provided callbacks.
   */
  static createBuffered(onWrite: λBiConsumer<C3.Array<number | null>, BytePushStream | null>, onClose?: λConsumer<BytePushStream | null> | null, bufferSize?: number | null): PushStream<number | null>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
   * buffer.
   */
  static createBufferedWithStats(onWrite: λBiFunction<number | null, BytePushStream | null, ObjStats | null>, onClose?: λConsumer<BytePushStream | null> | null, bufferSize?: number | null): PushStreamWithStats<number | null>;

  /**
   * Creates new block push stream based on logic in provided callbacks.
   */
  static createBlock(onWrite: λBiConsumer<any | null, BytePushStream | null>, onClose?: λConsumer<BytePushStream | null> | null, blockSize?: number | null): BytePushStream;

  /**
   * Write the next block of values into push stream.
   *
   * This is generally the more efficient way to process the push stream than using
   * the {@link write} methods.
   */
  writeBlock(blockValue: any | null): void;

  /**
   * Creates a new instance based on the native output/write stream:
   *  - Java: `java.io.OutputStream`
   *  - JavaScript: `WritableStream`
   */
  static fromNative(out: any): BytePushStream;

  /**
   * Creates new byte push stream that will compress data on write.
   */
  compress(contentEncoding: string | null): BytePushStream;

  /**
   * @return character push stream on top of this byte stream.
   */
  toCharPushStream(contentType?: string | null, contentEncoding?: string | null): CharPushStream;

  /**
   * @return java.io.OutputStream if this push stream is backed by it.
   */
  asOutputStream(failIfNot?: boolean): any;
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
