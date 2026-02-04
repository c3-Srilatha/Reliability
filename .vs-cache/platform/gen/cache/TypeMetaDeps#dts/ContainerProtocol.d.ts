// TypeScript definitions for the C3 type ContainerProtocol

/**
 * Marker type indicating support for implementation language container syntax e.g. accessor via [].
 * Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
 * Also see {@link MutableContainerProtocol}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ContainerProtocol
 */
declare interface IContainerProtocol<E> {
}

/**
 * Marker type indicating support for implementation language container syntax e.g. accessor via [].
 * Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
 * Also see {@link MutableContainerProtocol}.
 *
 * @remarks this represents a made instance of ContainerProtocol
 */
declare class ContainerProtocol<E> {

  /**
   * Implements the square bracket `[]` syntactic sugar in js and py.
   * NOTE: The type of the return value for this method can also vary dynamically with the type of the provided key.
   * For example accessing an element in a double array will provide a double if the key is an integer, and it would
   * provide a double array if the key is a "slice".
   * @param key
   *         key associated with the desired element.
   * @return the element associated with the given key
   */
  get(key: any): any;

  /**
   * Implements the js `.length` property or py `len()` support.
   * @return the number of elements in this instance
   */
  _length_(): number;

  /**
   * Implements the `len()` built-in for py.
   * @return size of the container
   */
  get size(): number;

  /**
   * @return true if this instance is empty.
   */
  isEmpty(): boolean;

  /**
   * Implements the `in` key word in py.
   * @param element
   *         element to test membership for.
   * @return true iff container contains element
   */
  contains(element: any): boolean;

  /**
   * Implements the iterable syntactic sugars in py, for example `for x in iterable`.
   * @return an iterator over the elements of the container
   */
  iter(): Iterator<E> | null;

  /**
   * Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
   */
  _iter_(): any;
}

