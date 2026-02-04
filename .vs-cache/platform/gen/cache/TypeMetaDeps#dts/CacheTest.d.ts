// TypeScript definitions for the C3 type CacheTest

/**
 * CacheTest is only for the use of testing the caching infra. Do not use it other than for tests
 *
 * @remarks this represents a value passed to a method that expects an instance of CacheTest
 */
declare interface ICacheTest {
}

/**
 * CacheTest is only for the use of testing the caching infra. Do not use it other than for tests
 *
 * @remarks this represents a made instance of CacheTest
 */
declare class CacheTest {

  /**
   * Gets the provided Cached object determined from type and cacheKey nativeCache in the current node.
   */
  static objectFromNativeCache(cachedType: Type, cacheKey: string): Cached | null;

  /**
   * Gets the provided Cached object determined from type and cacheKey rawJsonNativeCache in the current node.
   */
  static objectFromRawJsonCache(cachedType: Type, cacheKey: string): any | null;

  /**
   * Assumes the context of the passed in appId and gets the provided Cached object determined from type and cacheKey
   * nativeCache in the current node.
   */
  static objectFromNativeCacheOfLocalApp(appId: string, cachedType: string, cacheKey: string): Cached | null;

  /**
   * Assumes the context of the passed in appId and gets the provided Cached object determined from type and cacheKey
   * rawJsonNativeCache in the current node.
   */
  static objectFromRawJsonCacheOfLocalApp(appId: string, cachedType: string, cacheKey: string): any | null;

  /**
   * Tries to populate value into cache at cacheKey in all nodes of the current app
   * If value is null, tries to populate cache by reading from backing storage
   */
  static populateCachesForObjectInAllNodes(cachedType: Type, cacheKey: string, value?: Cached | null): void;

  /**
   * Populates value into cache by directly writing to cache
   */
  static populateNativeCache(type: Type, cacheKey: string, value?: Cached | null): void;

  /**
   * Writes the provided object to cache assuming the context of the passed in appId.
   * Does not write to the backing storage of the application, so the obj is not persisted.
   */
  static writeToCacheForLocalApp(appId: string, cachedType: string, cacheKey: string, obj: any): void;

  /**
   * Fetches from native cache of the cachedType the cached object associated with the cacheKey. If no cached object
   * found, returns null.
   */
  static fetchNativeCachedValuesForTypeInAllNodes(cachedType: Type, cacheKey: string): C3.Map<string | null, Cached | null>;

  /**
   * Fetches from raw json native cache of the cachedType the cached object associated with the cacheKey.
   * If no cached object found, returns null.
   */
  static fetchRawJsonCachedValuesForTypeInAllNodes(cachedType: Type, cacheKey: string): C3.Map<string | null, any | null>;

  /**
   * Fetches from config store object for the config type and config key. If no  object found, returns null. Does not
   * go through cache.
   */
  static fetchFromConfigStoreForTypeInAllNodes(configType: Type, configKey: string): C3.Map<string | null, Config | null>;

  /**
   * getConfig for the configType associated with the cacheKey.
   */
  static getConfigForTypeInAllNodes(configType: Type, configKey?: string | null): C3.Array<any | null>;
}

