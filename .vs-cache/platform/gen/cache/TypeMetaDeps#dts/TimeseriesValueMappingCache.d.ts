// TypeScript definitions for the C3 type TimeseriesValueMappingCache

/**
 * Cache for {@link TimeseriesValueMapping}. Key is type mixing in {@link TimeseriesValueMapping} e.g. MyTimeseriesValueMapping
 * and value is a pair of:
 * 1. mapping of code to integer value mapping
 * 2. mapping of integer value mapping to code
 *
 * @remarks this represents a value passed to a method that expects an instance of TimeseriesValueMappingCache
 */
declare interface ITimeseriesValueMappingCache {
}

/**
 * Cache for {@link TimeseriesValueMapping}. Key is type mixing in {@link TimeseriesValueMapping} e.g. MyTimeseriesValueMapping
 * and value is a pair of:
 * 1. mapping of code to integer value mapping
 * 2. mapping of integer value mapping to code
 *
 * @remarks this represents a made instance of TimeseriesValueMappingCache
 */
declare class TimeseriesValueMappingCache {

  /**
   * Get a cached entry by name. This will return null if no matching entry is found and the cache itself cannot
   * produce one. The value null is cached so repeated access of keys with null values will not call produce each time.
   * If {@link validate} is defined and no valid value can be retrieved from the cache, then null is returned.
   */
  static get(key: string | null): Pair<C3.Map<string | null, number | null>, C3.Map<number | null, string | null>> | null;

  /**
   * Get a cached entry by name. This will never return null if no matching entry is found or the cache itself cannot
   * produce one. The value null is cached so repeated access of keys with null values will not call produce each time,
   * however this function will itself throw an exception each time.
   * If {@link validate} is defined and no valid value can be retrieved from the cache, then an exception is thrown.
   */
  static require(key: string | null): Pair<C3.Map<string | null, number | null>, C3.Map<number | null, string | null>>;

  /**
   * Get the keys currently defined in the cache. Note that this will not be all the keys ever stored, nor will it be
   * all the possible key values, but only those keys presently stored and not flushed due to explicit eviction or the
   * maximum size.
   */
  static keys(): C3.Array<string | null>;

  /**
   * Check if the given key is cached. This will return true even stored entry is null or error occur when produce. The
   * cache will not try to produce the entry if the key is not cached.
   * If {@link validate} is defined and the stored entry failed validation, false will be returned.
   */
  static keyExists(key: string | null): boolean;

  /**
   * Check if the given key is cached. This will return true ONLY when the stored entry is **not** null. The
   * cache will not try to produce the entry if key is not cached.
   * If {@link validate} is defined and the stored value failed validation, false will be returned as well.
   */
  static keyHasValue(key: string | null): boolean;

  /**
   * Put an entry into the cache. This should only be used by the owner of the cache.
   */
  static put(key: string | null, value: Pair<C3.Map<string | null, number | null>, C3.Map<number | null, string | null>> | null): void;

  /**
   * Remove an entry from the cache from local node. This should only be used by the owner of the cache.
   *
   * @return indicates whether a value was found and evicted for input key
   */
  static evict(key: string | null): boolean;

  /**
   * Clear all entries in the cache. This should only be used by the owner of the cache.
   */
  static clear(): void;

  /**
   * Refreshes the cache with the result returned from calling {@link produceAll}.  If the result is an empty mapp,
   * the cache will be cleared.  This is called during provisioning to more efficiently populate metadata caches prior
   * to validation.
   */
  static refresh(): void;

  /**
   * Produce an entry from the name. This is the preferred way to create cache entries.
   * The cache infrastructure will ensure that race conditions do not cause obsolete entries to be stored.
   *
   * Note that due to multi-threading and multi-processing concurrency, not all entries produced
   * may actually make it into the cache. Thus, no other code should maintain references to a produced
   * entry; entries should only be accessed through the cache.
   *
   * The implementation **must not** throw an exception due to invalid metadata. Instead there should be an associated
   * listener that registers a metadata issue. This is necessary to allow provisioning to continue to function in the
   * face of bad metadata; otherwise the user could not provision again to fix the problem.
   *
   * This method should not be called directly.
   */
  static produce(key: string | null): Pair<C3.Map<string | null, number | null>, C3.Map<number | null, string | null>> | null;

  /**
   * Produces the entire contents for a cache.  Called by {@link refresh}.  Caches that know how to comply should
   * override this.  The default behavior for caches that do not is to return an empty map, indicating that the cache
   * should be cleared.
   */
  static produceAll(): C3.Map<string | null, Pair<C3.Map<string | null, number | null>, C3.Map<number | null, string | null>> | null>;

  /**
   * Optional override called when element is released from the cache. Should perform any external resources cleanup if
   * needed.
   */
  static release(key: string | null, value: Pair<C3.Map<string | null, number | null>, C3.Map<number | null, string | null>> | null): void;

  /**
   * Optional override to implement custom validation on values retrieved from the cache before returning from `get`.
   * If {@link validate} returns false for a given value, then the corresponding key will be evicted from the cache and
   * `produce` will be called again.
   */
  static validate(value: Pair<C3.Map<string | null, number | null>, C3.Map<number | null, string | null>> | null): boolean;
}

