// TypeScript definitions for the C3 type EventBus

/**
 * Implementation of C3 Event Bus. Events are dynamic or pre-defined [ aka strongly-typed ]
 *
 * @see Event
 * @see Logger#event
 *
 * @remarks this represents a value passed to a method that expects an instance of EventBus
 */
declare interface IEventBus {
}

/**
 * Implementation of C3 Event Bus. Events are dynamic or pre-defined [ aka strongly-typed ]
 *
 * @see Event
 * @see Logger#event
 *
 * @remarks this represents a made instance of EventBus
 */
declare class EventBus {

  /**
   * @return true if given event type has listeners
   */
  static hasListeners(event: string): boolean;

  /**
   * @return true if given event type has listeners
   */
  static hasListeners(event: Type): boolean;

  /**
   * Listen to events of the given type.
   *
   * @see Event#listen
   */
  static listen(event: T, filter: string | null, listener: λBiConsumer<C3.Map<string | null, any>, EventAdHocListener>): EventAdHocListener;

  /**
   * Listen to events of arbitrary type.
   *
   * IMPORTANT: this action has a potential of putting significant load on cluster so listener needs to be as fast as
   * possible and filter as precise as possible. Additionally listener should be stopped as soon as possible. And
   * finally Cluster Admin or Resource Governor may pause or stop the listener so this method should not be used for
   * critical business logic.
   *
   * @see EvenListener
   */
  static listen(event: string, filter: string | null, listener: λBiConsumer<C3.Map<string | null, any>, EventAdHocListener>): EventAdHocListener;
}


interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
