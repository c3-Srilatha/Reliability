// TypeScript definitions for the C3 type PushStreamWithStats

/**
 * Obj that stores the instance of a push stream of data values.  It is parameterized by the individual value type. As
 * data is written into this stream various statistics and possible errors are accumulated along the way.
 *
 * @remarks this represents a value passed to a method that expects an instance of PushStreamWithStats
 */
declare interface IPushStreamWithStats<V> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<PushStreamWithStats<V> | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * Obj that stores the instance of a push stream of data values.  It is parameterized by the individual value type. As
 * data is written into this stream various statistics and possible errors are accumulated along the way.
 *
 * @remarks this represents a made instance of PushStreamWithStats
 */
declare class PushStreamWithStats<V> {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<PushStreamWithStats<V> | null> | null;
  withOnClose(onClose: λConsumer<PushStreamWithStats<V> | null> | null): PushStreamWithStats;

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
  static create(onWrite: λBiConsumer<V | null, PushStreamWithStats<V> | null>, onClose?: λConsumer<PushStreamWithStats<V> | null> | null): PushStreamWithStats<V>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks.
   */
  static createBuffered(onWrite: λBiConsumer<C3.Array<V | null>, PushStreamWithStats<V> | null>, onClose?: λConsumer<PushStreamWithStats<V> | null> | null, bufferSize?: number | null): PushStream<V>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
   * buffer.
   */
  static createBufferedWithStats(onWrite: λBiFunction<V | null, PushStreamWithStats<V> | null, ObjStats | null>, onClose?: λConsumer<PushStreamWithStats<V> | null> | null, bufferSize?: number | null): PushStreamWithStats<V>;

  /**
   * @return statistics for this stream operations.
   */
  stats(): ActionStats;

  /**
   * @return any possible errors happened during this steam operations.
   */
  errs(): C3.Array<ObjError | null>;
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
