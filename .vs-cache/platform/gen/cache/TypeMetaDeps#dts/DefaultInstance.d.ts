// TypeScript definitions for the C3 type DefaultInstance

/**
 * Marker type indicating member functions can be called on a default instance.
 *
 * Normally, member methods may _not_ be called on the type itself (static method calling style). Instead they must be
 * called on an instance. In some cases, there is a natural "default instance" on which member methods could be called,
 * which is when this mixin becomes useful.
 *
 * For example, {@link Filter} uses it so that you can start a filter expression with any member method:
 * ```js
 * Filter.eq('name', ...)
 * ```
 *
 * Since {@link Filter#eq eq} is a member method, without **DefaultInstance** one would have to do:
 * ```js
 * Filter.make().eq('name', ...)
 * ```
 *
 * The type system intercepts member method calls on the type, calls {@link #inst} to return the default instance,
 * and makes the member method call on that instance instead.
 *
 * **Filter** implements the `inst` method to return an empty filter. Any type that mixes **DefaultInstance** must also
 * implement {@link #inst} to return whatever the appropriate default instance is.
 *
 * @remarks this represents a value passed to a method that expects an instance of DefaultInstance
 */
declare interface IDefaultInstance {
}

/**
 * Marker type indicating member functions can be called on a default instance.
 *
 * Normally, member methods may _not_ be called on the type itself (static method calling style). Instead they must be
 * called on an instance. In some cases, there is a natural "default instance" on which member methods could be called,
 * which is when this mixin becomes useful.
 *
 * For example, {@link Filter} uses it so that you can start a filter expression with any member method:
 * ```js
 * Filter.eq('name', ...)
 * ```
 *
 * Since {@link Filter#eq eq} is a member method, without **DefaultInstance** one would have to do:
 * ```js
 * Filter.make().eq('name', ...)
 * ```
 *
 * The type system intercepts member method calls on the type, calls {@link #inst} to return the default instance,
 * and makes the member method call on that instance instead.
 *
 * **Filter** implements the `inst` method to return an empty filter. Any type that mixes **DefaultInstance** must also
 * implement {@link #inst} to return whatever the appropriate default instance is.
 *
 * @remarks this represents a made instance of DefaultInstance
 */
declare class DefaultInstance {

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): DefaultInstance;
}

