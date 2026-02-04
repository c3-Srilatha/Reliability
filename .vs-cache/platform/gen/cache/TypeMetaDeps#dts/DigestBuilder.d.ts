// TypeScript definitions for the C3 type DigestBuilder

/**
 * Builder of a Digest i.e. summary of an arbitrary dataset.
 *
 * @remarks this represents a value passed to a method that expects an instance of DigestBuilder
 */
declare interface IDigestBuilder<D> {
}

/**
 * Builder of a Digest i.e. summary of an arbitrary dataset.
 *
 * @remarks this represents a made instance of DigestBuilder
 */
declare class DigestBuilder<D> {

  /**
   * Construct an instance with initial state.
   */
  static make(): DigestBuilder<D>;

  /**
   * Instantiates new builder with initial stats
   */
  static make(initial: any): DigestBuilder<D> | null;

  /**
   * C3 Type of this instance.
   */
  type(): Type;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): DigestBuilder<D>;

  /**
   * Updates statistics based on a given value
   */
  add(value: any): DigestBuilder<D>;

  /**
   * Updates statistics based on a given string value
   */
  add(str: string | null): DigestBuilder<D>;

  /**
   * Updates statistics based on a given datetime value
   */
  add(dt: DateTime | null): DigestBuilder<D>;

  /**
   * Updates statistics based on a given numeric value
   */
  add(num: number | null): DigestBuilder<D>;

  /**
   * Updates statistics based on a given boolean value
   */
  add(bool: boolean | null): DigestBuilder<D>;

  /**
   * Updates statistics based on a given json value
   */
  add(jsn: any | null): DigestBuilder<D>;

  /**
   * Updates statistics based on a given Obj value
   */
  add(obj: Obj | null): DigestBuilder<D>;

  /**
   * Updates statistics based on a given Collection value
   */
  add(obj: Collection<any> | null): DigestBuilder<D>;

  /**
   * Update statistics based on all elements from a given collection
   */
  addAll(e: Collection<any> | null): DigestBuilder<D>;

  /**
   * Updates statistics based on a null value
   */
  addNull(): DigestBuilder<D>;

  /**
   * Builds the digest type specified on instantiation. If this was instantiated generically, then builds the digest
   * type with the most data of the corresponding type added to this DigestBuilder.
   */
  build(): D;

  /**
   * Type of stats this builder is constructing
   */
  statsType(): Type;

  /**
   * Intelligently builds the digest type with the most data of the corresponding type added to this DigestBuilder.
   * @param hasIngestedReal: Whether or not a real number has been added to the DigestBuilder. Used for type inference.
   */
  buildMajority(hasIngestedReal?: boolean): D;

  /**
   * Builds digest with all subtypes of digest stored in an @see AnyDigest.
   * @param hasIngestedReal: Whether or not a real number has been added to the DigestBuilder. Used for type inference.
   */
  buildAny(hasIngestedReal?: boolean): AnyDigest;

  /**
   * @return digest builder for a given field
   */
  field(name: string): DigestBuilder<D>;

  /**
   * @return digest builder with a provided spec
   */
  withSpec(spec: DigestSpec | null): DigestBuilder;
}

