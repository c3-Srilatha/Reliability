// TypeScript definitions for the C3 type WithCacheKey

/**
 * Base type for objects with a natural cache key. I.e. value that could be used as key for caches of instances of this
 * type .
 *
 * @see Cached
 *
 * @remarks this represents a value passed to a method that expects an instance of WithCacheKey
 */
declare interface IWithCacheKey {
}

/**
 * Base type for objects with a natural cache key. I.e. value that could be used as key for caches of instances of this
 * type .
 *
 * @see Cached
 *
 * @remarks this represents a made instance of WithCacheKey
 */
declare class WithCacheKey {

  /**
   * The name of this instance.
   */
  cacheKey(): string | null;
}

