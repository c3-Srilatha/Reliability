// TypeScript definitions for the C3 type BlockPushStream

/**
 * A block push stream wraps a raw push stream and provides larger block writes to process
 * the low-level stream more efficiently.
 *
 * @var E the fundamental values of the stream
 * @var B the aggregate (block) value
 *
 * @remarks this represents a value passed to a method that expects an instance of BlockPushStream
 */
declare interface IBlockPushStream<E, B> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<BlockPushStream<E, B> | null> | null;

  /**
   * Default size of the block when writing
   */
  DEFAULT_BLOCK_SIZE?: number | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * A block push stream wraps a raw push stream and provides larger block writes to process
 * the low-level stream more efficiently.
 *
 * @var E the fundamental values of the stream
 * @var B the aggregate (block) value
 *
 * @remarks this represents a made instance of BlockPushStream
 */
declare class BlockPushStream<E, B> {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<BlockPushStream<E, B> | null> | null;
  withOnClose(onClose: λConsumer<BlockPushStream<E, B> | null> | null): BlockPushStream;

  /**
   * Default size of the block when writing
   */
  readonly DEFAULT_BLOCK_SIZE?: number | null;
  withDEFAULT_BLOCK_SIZE(DEFAULT_BLOCK_SIZE: number | null): BlockPushStream;

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
  write(value: E): void;

  /**
   * Pushes the next batch of values into stream. Throws exception if stream is closed.
   */
  writeBatch(value: C3.Array<E | null> | null): void;

  /**
   * Pushes the next batch of values into stream. Throws exception if stream is closed.
   */
  writeStream(value: Stream<E | null> | null): void;

  /**
   * Creates new push stream based on logic in provided callbacks.
   */
  static create(onWrite: λBiConsumer<E | null, BlockPushStream<E, B> | null>, onClose?: λConsumer<BlockPushStream<E, B> | null> | null): BlockPushStream<E, B>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks.
   */
  static createBuffered(onWrite: λBiConsumer<C3.Array<E | null>, BlockPushStream<E, B> | null>, onClose?: λConsumer<BlockPushStream<E, B> | null> | null, bufferSize?: number | null): PushStream<E>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
   * buffer.
   */
  static createBufferedWithStats(onWrite: λBiFunction<E | null, BlockPushStream<E, B> | null, ObjStats | null>, onClose?: λConsumer<BlockPushStream<E, B> | null> | null, bufferSize?: number | null): PushStreamWithStats<E>;

  /**
   * Creates new block push stream based on logic in provided callbacks.
   */
  static createBlock(onWrite: λBiConsumer<B | null, BlockPushStream<E, B> | null>, onClose?: λConsumer<BlockPushStream<E, B> | null> | null, blockSize?: number | null): BlockPushStream<E, B>;

  /**
   * Write the next block of values into push stream.
   *
   * This is generally the more efficient way to process the push stream than using
   * the {@link write} methods.
   */
  writeBlock(blockValue: B | null): void;
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
