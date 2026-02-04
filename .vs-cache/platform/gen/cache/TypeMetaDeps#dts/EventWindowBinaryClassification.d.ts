// TypeScript definitions for the C3 type EventWindowBinaryClassification

/**
 * Classify EventWindows with TruePositive/FalsePositive/FalseNegative.
 * Used for evaluating event scoring metric.
 *
 * @remarks this represents a value passed to a method that expects an instance of EventWindowBinaryClassification
 */
declare interface IEventWindowBinaryClassification {
}

/**
 * Classify EventWindows with TruePositive/FalsePositive/FalseNegative.
 * Used for evaluating event scoring metric.
 *
 * @remarks this represents a made instance of EventWindowBinaryClassification
 */
declare class EventWindowBinaryClassification {

  /**
   * @param monitoredEventWindows
   *          Array of {@link EventWindow}s.
   * @param observedEvents
   *          Array of {@link ObservedEvents}s.
   * @param spec
   *          Placeholder for future.
   * @returns {@link EventWindowBinaryScoreResult} for union of predicted and observed event windows.
   */
  static classify(monitoredEventWindows?: C3.Array<EventWindow | null>, observedEventWindows?: C3.Array<EventWindow | null>, spec?: EventWindowBinaryClassificationSpec | null): C3.Array<EventWindowBinaryScoreResult | null>;
}

