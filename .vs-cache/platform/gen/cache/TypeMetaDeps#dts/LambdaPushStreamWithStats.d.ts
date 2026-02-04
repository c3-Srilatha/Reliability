// TypeScript definitions for the C3 type LambdaPushStreamWithStats

/**
 * C3 Type for implementing lambda based push stream with statistics.
 *
 * @remarks this represents a value passed to a method that expects an instance of LambdaPushStreamWithStats
 */
declare interface ILambdaPushStreamWithStats<V> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λBiConsumer<LambdaPushStreamWithStats<V> | null, LambdaPushStreamWithStats<V> | null> | null;

  /**
   * callback lambda on write to this stream
   */
  onWrite?: λBiConsumer<V | null, PushStream<V> | null> | null;

  _stats: IActionStats;

  _errs: C3.Array<ObjError | null> | Array<IObjError | null>;
}


interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
/**
 * C3 Type for implementing lambda based push stream with statistics.
 *
 * @remarks this represents a made instance of LambdaPushStreamWithStats
 */
declare class LambdaPushStreamWithStats<V> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λBiConsumer<LambdaPushStreamWithStats<V> | null, LambdaPushStreamWithStats<V> | null> | null;
  withOnClose(onClose: λBiConsumer<LambdaPushStreamWithStats<V> | null, LambdaPushStreamWithStats<V> | null> | null): LambdaPushStreamWithStats;

  /**
   * callback lambda on write to this stream
   */
  onWrite?: λBiConsumer<V | null, PushStream<V> | null> | null;
  withOnWrite(onWrite: λBiConsumer<V | null, PushStream<V> | null> | null): LambdaPushStreamWithStats;

  _stats: ActionStats;
  with_stats(_stats: IActionStats): LambdaPushStreamWithStats;

  _errs: C3.Array<ObjError | null>;
  with_errs(_errs: C3.Array<ObjError | null> | Array<IObjError | null>): LambdaPushStreamWithStats;

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
  static create(onWrite: λBiConsumer<V | null, LambdaPushStreamWithStats<V> | null>, onClose?: λConsumer<LambdaPushStreamWithStats<V> | null> | null): LambdaPushStreamWithStats<V>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks.
   */
  static createBuffered(onWrite: λBiConsumer<C3.Array<V | null>, LambdaPushStreamWithStats<V> | null>, onClose?: λConsumer<LambdaPushStreamWithStats<V> | null> | null, bufferSize?: number | null): PushStream<V>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
   * buffer.
   */
  static createBufferedWithStats(onWrite: λBiFunction<V | null, LambdaPushStreamWithStats<V> | null, ObjStats | null>, onClose?: λConsumer<LambdaPushStreamWithStats<V> | null> | null, bufferSize?: number | null): PushStreamWithStats<V>;

  /**
   * @return statistics for this stream operations.
   */
  stats(): ActionStats;

  /**
   * @return any possible errors happened during this steam operations.
   */
  errs(): C3.Array<ObjError | null>;

  /**
   * Construct an instance with initial state.
   */
  static make(): LambdaPushStreamWithStats<V>;
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
