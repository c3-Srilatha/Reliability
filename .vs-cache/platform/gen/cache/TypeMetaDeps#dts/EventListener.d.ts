// TypeScript definitions for the C3 type EventListener

/**
 * Base type for pre-defined event listeners
 *
 * @remarks this represents a value passed to a method that expects an instance of EventListener
 */
declare interface IEventListener<E> {
}

/**
 * Base type for pre-defined event listeners
 *
 * @remarks this represents a made instance of EventListener
 */
declare class EventListener<E> {

  /**
   * Notification of an event
   */
  static notify(e: E): void;
}

