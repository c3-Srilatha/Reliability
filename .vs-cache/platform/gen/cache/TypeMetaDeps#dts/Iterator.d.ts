// TypeScript definitions for the C3 type Iterator

/**
 * Iterator interface over sequence of elements
 *
 * @remarks this represents a value passed to a method that expects an instance of Iterator
 */
declare interface IIterator<E> {
}

/**
 * Iterator interface over sequence of elements
 *
 * @remarks this represents a made instance of Iterator
 */
declare class Iterator<E> {

  /**
   * @return true if there is an element in the sequence
   */
  hasNext(): boolean;

  /**
   * @return next element in the sequence
   */
  next(): E | null;

  /**
   * "Close" iterator so any associated resources can be released. Exhausting iterator with hasNext / next should always
   * close it but it should be ok to close it early.
   */
  close(): void;
}

