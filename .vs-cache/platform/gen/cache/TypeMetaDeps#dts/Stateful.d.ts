// TypeScript definitions for the C3 type Stateful

/**
 * Base type of instances (value) that hold the state. Typically means that instance of a type is effectively a
 * reference to some back-end state e.g. file or an in memory instance. Something can be {@link Mutable} but not
 * {@link Stateful}.
 *
 * Sub-types will not implicitly mixin Obj C3 type so will not have implicit methods like Obj.fromJson.
 *
 * @see Obj
 * @see Value
 *
 * @remarks this represents a value passed to a method that expects an instance of Stateful
 */
declare interface IStateful {
}

/**
 * Base type of instances (value) that hold the state. Typically means that instance of a type is effectively a
 * reference to some back-end state e.g. file or an in memory instance. Something can be {@link Mutable} but not
 * {@link Stateful}.
 *
 * Sub-types will not implicitly mixin Obj C3 type so will not have implicit methods like Obj.fromJson.
 *
 * @see Obj
 * @see Value
 *
 * @remarks this represents a made instance of Stateful
 */
declare class Stateful {

  /**
   * Construct an instance with initial state.
   */
  static make(): Stateful;
}

