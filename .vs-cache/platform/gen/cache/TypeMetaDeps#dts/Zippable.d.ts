// TypeScript definitions for the C3 type Zippable

/**
 * Zippable interface that can produce an {@link Iterable} from another Iterable and a merge function.
 *
 * @remarks this represents a value passed to a method that expects an instance of Zippable
 */
declare interface IZippable<E> {
}

/**
 * Zippable interface that can produce an {@link Iterable} from another Iterable and a merge function.
 *
 * @remarks this represents a made instance of Zippable
 */
declare class Zippable<E> {

  /**
   * Use this method if you want to use a C3 iterator.
   * @return a C3 iterator of the elements of the collection
   */
  iter(): Iterator<E> | null;

  /**
   * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
   */
  _iter_(): any;

  /**
   * Generates a Iterable from the result of applying a binary operator against elements of Iterable.
   * The return type of the binary operator must match rt.
   * @elementType
   *        The return value type of the operator/ the element type of the returned Iterable
   * @spec
   *        Configures behavior of this method based on {@link OpSpec#repeatLast}
   * @other
   *        Other Iterable to apply operator on
   * @merge
   *        Binary operator to apply to elements of this and other Iterable at matching positions
   * @return the generated Iterable with return type rt.
   */
  zip(elementType?: ValueType | null, spec: OpSpec | null, other: Iterable<T> | null, merge: λQuadFunction<E | null, number | null, any, number | null, R | null>): Iterable<R>;
}


interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}
