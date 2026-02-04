// TypeScript definitions for the C3 type MapProtocol

/**
 * Marker type indicating support for implementation language map syntax e.g. accessor via [].
 * Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
 * Also see {@link MutableMapProtocol}.
 *
 * @remarks this represents a value passed to a method that expects an instance of MapProtocol
 */
declare interface IMapProtocol {
}

/**
 * Marker type indicating support for implementation language map syntax e.g. accessor via [].
 * Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
 * Also see {@link MutableMapProtocol}.
 *
 * @remarks this represents a made instance of MapProtocol
 */
declare class MapProtocol {

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
}

