// TypeScript definitions for the C3 type TransitionTriggerKind

/**
 * Defines how a particular {@link TransitionTrigger} is triggered.
 *
 * @remarks this represents a value passed to a method that expects an instance of TransitionTriggerKind
 */
declare interface ITransitionTriggerKind {

  /**
   * Automatic transition trigger. Checks the {@link StateMachineTransition#condition} after
   * every update to an entity, and if satisified transitions {@link StateMachine}s asynchronously.
   */
  AUTOMATIC?: string;

  /**
   * Automatic and synchronous transition trigger. Transitions {@link StateMachine}s synchronously.
   * Since these transitions are synchronous, creating transitions with this trigger kind
   * directly affect the speed of updating a {@link StateMachine}. This can make
   * updating of the {@link StateMachine} at least 60 times slower, so it should not be used
   * in cases where >100 {@link StateMachine}s are updated at the same time.
   * Be careful when using this trigger kind, as it may cause performance issues. To avoid such issues, use the
   * {@link #AUTOMATIC} trigger instead.
   *
   * Also, if there are entry/transition/exit actions specified that would cause a state machine to transition
   * to a different state than the state it is transitioning to, this will cause your state histories to be out
   * of order. The `currentState` would also be set incorrectly. So, avoid such actions that would affect the state
   * machine's state.
   *
   * Only use this kind of trigger if the synchronous behavior is required. Use this
   * if state updates have to happen immediately after UI actions.
   */
  AUTOMATIC_SYNC?: string;

  /**
   * Periodic transition trigger. Transitions {@link StateMachine}s periodically.
   */
  PERIODIC?: string;
}

/**
 * Defines how a particular {@link TransitionTrigger} is triggered.
 *
 * @remarks this represents a made instance of TransitionTriggerKind
 */
declare class TransitionTriggerKind {

  /**
   * Automatic transition trigger. Checks the {@link StateMachineTransition#condition} after
   * every update to an entity, and if satisified transitions {@link StateMachine}s asynchronously.
   */
  readonly AUTOMATIC?: string;
  withAUTOMATIC(AUTOMATIC: string | null): TransitionTriggerKind;

  /**
   * Automatic and synchronous transition trigger. Transitions {@link StateMachine}s synchronously.
   * Since these transitions are synchronous, creating transitions with this trigger kind
   * directly affect the speed of updating a {@link StateMachine}. This can make
   * updating of the {@link StateMachine} at least 60 times slower, so it should not be used
   * in cases where >100 {@link StateMachine}s are updated at the same time.
   * Be careful when using this trigger kind, as it may cause performance issues. To avoid such issues, use the
   * {@link #AUTOMATIC} trigger instead.
   *
   * Also, if there are entry/transition/exit actions specified that would cause a state machine to transition
   * to a different state than the state it is transitioning to, this will cause your state histories to be out
   * of order. The `currentState` would also be set incorrectly. So, avoid such actions that would affect the state
   * machine's state.
   *
   * Only use this kind of trigger if the synchronous behavior is required. Use this
   * if state updates have to happen immediately after UI actions.
   */
  readonly AUTOMATIC_SYNC?: string;
  withAUTOMATIC_SYNC(AUTOMATIC_SYNC: string | null): TransitionTriggerKind;

  /**
   * Periodic transition trigger. Transitions {@link StateMachine}s periodically.
   */
  readonly PERIODIC?: string;
  withPERIODIC(PERIODIC: string | null): TransitionTriggerKind;

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): Array_Type<string> | null;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): Array_Type<string> | null;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): Map_Type<string, string> | null;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): Map_Type<string, string> | null;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string>): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string>): void;
}


interface λConsumer<T> {
  (t: T): void
}
