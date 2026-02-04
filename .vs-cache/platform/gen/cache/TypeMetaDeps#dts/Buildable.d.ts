// TypeScript definitions for the C3 type Buildable

/**
 * A "buildable" type is one with complex internal state which benefits from a helper, a corresponding "builder" type.
 * The builder is a mutable instance that is used to collect information for a buildable instance. Since most instances
 * are immutable (cannot be changed after creation), using a mutable builder is more efficient than calling
 * `.withX().withY().withZ()` and creating new instances each time.
 *
 * Concrete subtypes of this type are generally one-to-one with instances of {@link Builder}. The former has methods
 * for creating the corresponding builder and builders have methods for mutating the state and then
 * {@link Builder#build} is called to produce an instance of the corresponding buildable type.
 *
 * ```js
 * let address = Address.builder()
 *                      .street('123 Mean Streets')
 *                      .city('New York')
 *                      .region('NY')
 *                      .postalCode('11212')
 *                      .build();
 * ```
 *
 * This also illustrates how methods on builders generally return the builder so they can be easily chained,
 * providing a "fluent interface".
 *
 * @var B the builder for this type
 * @see Builder
 * @see Obj
 *
 * @remarks this represents a value passed to a method that expects an instance of Buildable
 */
declare interface IBuildable<B> {
}

/**
 * A "buildable" type is one with complex internal state which benefits from a helper, a corresponding "builder" type.
 * The builder is a mutable instance that is used to collect information for a buildable instance. Since most instances
 * are immutable (cannot be changed after creation), using a mutable builder is more efficient than calling
 * `.withX().withY().withZ()` and creating new instances each time.
 *
 * Concrete subtypes of this type are generally one-to-one with instances of {@link Builder}. The former has methods
 * for creating the corresponding builder and builders have methods for mutating the state and then
 * {@link Builder#build} is called to produce an instance of the corresponding buildable type.
 *
 * ```js
 * let address = Address.builder()
 *                      .street('123 Mean Streets')
 *                      .city('New York')
 *                      .region('NY')
 *                      .postalCode('11212')
 *                      .build();
 * ```
 *
 * This also illustrates how methods on builders generally return the builder so they can be easily chained,
 * providing a "fluent interface".
 *
 * @var B the builder for this type
 * @see Builder
 * @see Obj
 *
 * @remarks this represents a made instance of Buildable
 */
declare class Buildable<B> {

  /**
   * Create a builder for efficient instantiation of the corresponding type.
   */
  static builder(): B;

  /**
   * Create a builder with this initial state for efficient updating.
   */
  toBuilder(): B;
}

