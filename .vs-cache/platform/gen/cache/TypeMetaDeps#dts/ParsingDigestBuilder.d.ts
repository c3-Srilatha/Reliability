// TypeScript definitions for the C3 type ParsingDigestBuilder

/**
 * A DigestBuilder that parses all string data before adding it. This ensures that typed data populates the Digest's
 * data structures, such as its histogram. May be significantly more expensive than using DigestBuilder. By default this
 * builder will always build an AnyDigest as often times the content's ValueType is unknown the content could consist of
 * various ValueTypes. Used for type inference.
 *
 * @see PkgInferrer
 * @see ValueTypeInferrer
 * @see AnyDigest
 * @see DigestBuilder
 *
 * @remarks this represents a value passed to a method that expects an instance of ParsingDigestBuilder
 */
declare interface IParsingDigestBuilder {
}

/**
 * A DigestBuilder that parses all string data before adding it. This ensures that typed data populates the Digest's
 * data structures, such as its histogram. May be significantly more expensive than using DigestBuilder. By default this
 * builder will always build an AnyDigest as often times the content's ValueType is unknown the content could consist of
 * various ValueTypes. Used for type inference.
 *
 * @see PkgInferrer
 * @see ValueTypeInferrer
 * @see AnyDigest
 * @see DigestBuilder
 *
 * @remarks this represents a made instance of ParsingDigestBuilder
 */
declare class ParsingDigestBuilder {

  /**
   * Construct an instance with initial state.
   */
  static make(): ParsingDigestBuilder;

  /**
   * Instantiates new builder with initial stats
   */
  static make(initial: any): DigestBuilder<Digest<any, any, any> | null> | null;

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
  replaceType(old: Type, new_: Type): ParsingDigestBuilder;

  /**
   * Updates statistics based on a given value
   */
  add(value: any): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a given string value
   */
  add(str: string | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a given datetime value
   */
  add(dt: DateTime | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a given numeric value
   */
  add(num: number | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a given boolean value
   */
  add(bool: boolean | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a given json value
   */
  add(jsn: any | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a given Obj value
   */
  add(obj: Obj | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a given Collection value
   */
  add(obj: Collection<any> | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Update statistics based on all elements from a given collection
   */
  addAll(e: Collection<any> | null): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Updates statistics based on a null value
   */
  addNull(): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * Builds an AnyDigest
   * @see AnyDigest
   */
  build(): Digest<any, any, any>;

  /**
   * Type of stats this builder is constructing
   */
  statsType(): Type;

  /**
   * Intelligently builds the digest type with the most data of the corresponding type added to this DigestBuilder.
   * @param hasIngestedReal: Whether or not a real number has been added to the DigestBuilder. Used for type inference.
   */
  buildMajority(hasIngestedReal?: boolean): Digest<any, any, any>;

  /**
   * Builds digest with all subtypes of digest stored in an @see AnyDigest.
   * @param hasIngestedReal: Whether or not a real number has been added to the DigestBuilder. Used for type inference.
   */
  buildAny(hasIngestedReal?: boolean): AnyDigest;

  /**
   * @return digest builder for a given field
   */
  field(name: string): DigestBuilder<Digest<any, any, any> | null>;

  /**
   * @return digest builder with a provided spec
   */
  withSpec(spec: DigestSpec | null): ParsingDigestBuilder;
}

