// TypeScript definitions for the C3 type PushStream

/**
 * Obj that stores the instance of a push stream of data values.  It is parameterized by the individual value type.
 *
 * @remarks this represents a value passed to a method that expects an instance of PushStream
 */
declare interface IPushStream<E> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<PushStream<E> | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * Obj that stores the instance of a push stream of data values.  It is parameterized by the individual value type.
 *
 * @remarks this represents a made instance of PushStream
 */
declare class PushStream<E> {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<PushStream<E> | null> | null;
  withOnClose(onClose: λConsumer<PushStream<E> | null> | null): PushStream;

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
  static create(onWrite: λBiConsumer<E | null, PushStream<E> | null>, onClose?: λConsumer<PushStream<E> | null> | null): PushStream<E>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks.
   */
  static createBuffered(onWrite: λBiConsumer<C3.Array<E | null>, PushStream<E> | null>, onClose?: λConsumer<PushStream<E> | null> | null, bufferSize?: number | null): PushStream<E>;

  /**
   * Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
   * buffer.
   */
  static createBufferedWithStats(onWrite: λBiFunction<E | null, PushStream<E> | null, ObjStats | null>, onClose?: λConsumer<PushStream<E> | null> | null, bufferSize?: number | null): PushStreamWithStats<E>;
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
