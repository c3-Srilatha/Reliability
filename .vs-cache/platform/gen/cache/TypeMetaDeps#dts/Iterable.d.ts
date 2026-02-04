// TypeScript definitions for the C3 type Iterable

/**
 * Iterable interface that can produce {@link Iterator} of elements
 *
 * @remarks this represents a value passed to a method that expects an instance of Iterable
 */
declare interface IIterable<E> {
}

/**
 * Iterable interface that can produce {@link Iterator} of elements
 *
 * @remarks this represents a made instance of Iterable
 */
declare class Iterable<E> {

  /**
   * Use this method if you want to use a C3 iterator.
   * @return a C3 iterator of the elements of the collection
   */
  iter(): Iterator<E> | null;

  /**
   * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
   */
  _iter_(): any;
}

