// TypeScript definitions for the C3 type JwsAlgorithmKind

/**
 * JSON Web Signing algorithms supported.
 *
 * @remarks this represents a value passed to a method that expects an instance of JwsAlgorithmKind
 */
declare interface IJwsAlgorithmKind {

  /**
   * RSA-SHA256 algorithm
   */
  readonly RSA256: "RS256";

  /**
   * RSA-SHA384 algorithm
   */
  readonly RSA384: "RS384";

  /**
   * RSA-SHA512 algorithm
   */
  readonly RSA512: "RS512";

  /**
   * ECDSA-SHA256 algorithm
   */
  readonly EC256: "ES256";

  /**
   * ECDSA-SHA256K(secp curve) algorithm
   */
  readonly EC256K: "ES256K";

  /**
   * HMAC-SHA256 algorithm
   */
  readonly HMAC256: "HS256";

  /**
   * HMAC-SHA384 algorithm
   */
  readonly HMAC384: "HS384,";

  /**
   * HMAC-SHA512 algorithm
   */
  readonly HMAC512: "HS512";
}

/**
 * JSON Web Signing algorithms supported.
 *
 * @remarks this represents a made instance of JwsAlgorithmKind
 */
declare class JwsAlgorithmKind {

  /**
   * RSA-SHA256 algorithm
   */
  static readonly RSA256: "RS256";

  /**
   * RSA-SHA384 algorithm
   */
  static readonly RSA384: "RS384";

  /**
   * RSA-SHA512 algorithm
   */
  static readonly RSA512: "RS512";

  /**
   * ECDSA-SHA256 algorithm
   */
  static readonly EC256: "ES256";

  /**
   * ECDSA-SHA256K(secp curve) algorithm
   */
  static readonly EC256K: "ES256K";

  /**
   * HMAC-SHA256 algorithm
   */
  static readonly HMAC256: "HS256";

  /**
   * HMAC-SHA384 algorithm
   */
  static readonly HMAC384: "HS384,";

  /**
   * HMAC-SHA512 algorithm
   */
  static readonly HMAC512: "HS512";

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
