// TypeScript definitions for the C3 type CacheEvictor

/**
 * @remarks this represents a value passed to a method that expects an instance of CacheEvictor
 */
declare interface ICacheEvictor {
}

/**
 * @remarks this represents a made instance of CacheEvictor
 */
declare class CacheEvictor {

  static evict(evt?: Event | null): void;

  static onEvicted(evt?: Event | null): void;
}

