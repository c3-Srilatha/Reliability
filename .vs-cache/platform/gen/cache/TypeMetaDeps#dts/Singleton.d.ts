// TypeScript definitions for the C3 type Singleton

/**
 * Base type for types that can only have one and only instance. It is also a {@link DefaultInstance}--its member
 * methods can be called in static style--because there is known way to instantiate it. Also, because there is only
 * a single instance, the data fields can also be accessed in static style.
 *
 * Note that the singleton behavior is only applicable within a _single_ execution environment. It does not communicate
 * with any other environments so there is no synchronization between instance in one address space and another.
 * For synchronization, additional support must be enabled, such as the {@link Config} framework.
 *
 * Singleton types should not define stateful static methods and store the state somewhere else. Instead they should
 * define member methods (which can still be called in static style) and store the state in the instance.
 *
 * @remarks this represents a value passed to a method that expects an instance of Singleton
 */
declare interface ISingleton {
}

/**
 * Base type for types that can only have one and only instance. It is also a {@link DefaultInstance}--its member
 * methods can be called in static style--because there is known way to instantiate it. Also, because there is only
 * a single instance, the data fields can also be accessed in static style.
 *
 * Note that the singleton behavior is only applicable within a _single_ execution environment. It does not communicate
 * with any other environments so there is no synchronization between instance in one address space and another.
 * For synchronization, additional support must be enabled, such as the {@link Config} framework.
 *
 * Singleton types should not define stateful static methods and store the state somewhere else. Instead they should
 * define member methods (which can still be called in static style) and store the state in the instance.
 *
 * @remarks this represents a made instance of Singleton
 */
declare class Singleton {

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): Singleton;

  /**
   * @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
   */
  static cachedInst(): Singleton | null;
}

