// TypeScript definitions for the C3 type CacheDude

/**
 * @remarks this represents a value passed to a method that expects an instance of CacheDude
 */
declare interface ICacheDude {
}

/**
 * @remarks this represents a made instance of CacheDude
 */
declare class CacheDude {

  static invalidate(evt?: Event | null): void;

  static invalidateCache(evt?: Event | null): void;
}

