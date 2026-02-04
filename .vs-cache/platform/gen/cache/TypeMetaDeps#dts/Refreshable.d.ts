// TypeScript definitions for the C3 type Refreshable

/**
 * This type defines a single method, #refresh, that can be used to produce an updated instance for types that represent
 * dynamic state. This can be used by UIs or other state-management applications to poll for changes to a type to
 * which they have a reference.
 *
 * @remarks this represents a value passed to a method that expects an instance of Refreshable
 */
declare interface IRefreshable {
}

/**
 * This type defines a single method, #refresh, that can be used to produce an updated instance for types that represent
 * dynamic state. This can be used by UIs or other state-management applications to poll for changes to a type to
 * which they have a reference.
 *
 * @remarks this represents a made instance of Refreshable
 */
declare class Refreshable {

  /**
   * Whether this particular instance supports #refresh.
   *
   * By default this is implemented to return `true`, but if a type that mixes in **Refreshable** sometimes has
   * instances that _cannot_ be refreshed, it should override this to return the status as appropriate.
   */
  isRefreshable(): boolean;

  /**
   * Produce a new instance with updated state representing the same query as originally performed. This can be called
   * by UIs or other state-management applications to get the latest results.
   */
  refresh(): Refreshable;
}

