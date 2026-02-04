// TypeScript definitions for the C3 type LambdaPushStream

/**
 * C3 Type for implementing lambda based push stream.
 *
 * @remarks this represents a value passed to a method that expects an instance of LambdaPushStream
 */
declare interface ILambdaPushStream<V> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<LambdaPushStream<V> | null> | null;

  /**
   * callback lambda on write to this stream
   */
  onWrite?: λBiConsumer<V | null, PushStream<V> | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
/**
 * C3 Type for implementing lambda based push stream.
 *
 * @remarks this represents a made instance of LambdaPushStream
 */
declare class LambdaPushStream<V> {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<LambdaPushStream<V> | null> | null;
  withOnClose(onClose: λConsumer<LambdaPushStream<V> | null> | null): LambdaPushStream;

  /**
   * callback lambda on write to this stream
   */
  readonly onWrite?: λBiConsumer<V | null, PushStream<V> | null> | null;
  withOnWrite(onWrite: λBiConsumer<V | null, PushStream<V> | null> | null): LambdaPushStream;

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
  write(value: V): void;

  /**
   * Pushes the next batch of values into stream. Throws exception if stream is closed.
   */
  writeBatch(value: C3.Array<V | null> | null): void;

  /**
   * Pushes the next batch of values into stream. Throws exception if stream is closed.
   */
  writeStream(value: Stream<V | null> | null): void;

  /**
   * Creates new push stream based on logic in provided callbacks.
   */
  static create(onWrite: λBiConsumer<V | null, LambdaPushStream<V> | null>, onClose?: λConsumer<LambdaPushStream<V> | null> | null): LambdaPushStream<V>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks.
   */
  static createBuffered(onWrite: λBiConsumer<C3.Array<V | null>, LambdaPushStream<V> | null>, onClose?: λConsumer<LambdaPushStream<V> | null> | null, bufferSize?: number | null): PushStream<V>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
   * buffer.
   */
  static createBufferedWithStats(onWrite: λBiFunction<V | null, LambdaPushStream<V> | null, ObjStats | null>, onClose?: λConsumer<LambdaPushStream<V> | null> | null, bufferSize?: number | null): PushStreamWithStats<V>;
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
