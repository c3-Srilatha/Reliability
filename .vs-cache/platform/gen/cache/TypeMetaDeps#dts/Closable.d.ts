// TypeScript definitions for the C3 type Closable

/**
 * Abstract type for implementing resource close and onClose callback semantic.
 *
 * @remarks this represents a value passed to a method that expects an instance of Closable
 */
declare interface IClosable {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<Closable | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * Abstract type for implementing resource close and onClose callback semantic.
 *
 * @remarks this represents a made instance of Closable
 */
declare class Closable {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<Closable | null> | null;
  withOnClose(onClose: λConsumer<Closable | null> | null): Closable;

  /**
   * Deallocates any potential resource and calls onClose if provided.
   */
  close(): void;

  /**
   * Deallocates any potential resource.
   */
  doClose(): void;

  /**
   * @returns true if this Closable resource has been closed
   */
  closed(): boolean;
}


interface λConsumer<T> {
  (t: T): void
}
