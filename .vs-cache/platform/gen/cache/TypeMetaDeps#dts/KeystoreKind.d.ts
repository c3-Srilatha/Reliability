// TypeScript definitions for the C3 type KeystoreKind

/**
 * Enum for different "kinds" of keystore types
 * (e.g. "JKS" or "PKCS12") - https://keystore-explorer.org/doc/5.5/keyStoreManagement.html
 *
 * @remarks this represents a value passed to a method that expects an instance of KeystoreKind
 */
declare interface IKeystoreKind {

  /**
   * Java KeyStore
   */
  readonly JKS: "JKS";

  /**
   * Java Cryptography Extension KeyStore
   */
  readonly JCEKS: "JCEKS";

  /**
   * Public-Key Cryptography Standards #12 KeyStore
   */
  readonly PKCS12: "PKCS12";

  /**
   * Bouncy Castle KeyStore
   */
  readonly BKS: "BKS";

  /**
   * Bouncy Castle KeyStore version 1
   */
  readonly BKS_V1: "BKS-V1";

  /**
   * Bouncy Castle UBER KeyStore
   */
  readonly UBER: "UBER";
}

/**
 * Enum for different "kinds" of keystore types
 * (e.g. "JKS" or "PKCS12") - https://keystore-explorer.org/doc/5.5/keyStoreManagement.html
 *
 * @remarks this represents a made instance of KeystoreKind
 */
declare class KeystoreKind {

  /**
   * Java KeyStore
   */
  static readonly JKS: "JKS";

  /**
   * Java Cryptography Extension KeyStore
   */
  static readonly JCEKS: "JCEKS";

  /**
   * Public-Key Cryptography Standards #12 KeyStore
   */
  static readonly PKCS12: "PKCS12";

  /**
   * Bouncy Castle KeyStore
   */
  static readonly BKS: "BKS";

  /**
   * Bouncy Castle KeyStore version 1
   */
  static readonly BKS_V1: "BKS-V1";

  /**
   * Bouncy Castle UBER KeyStore
   */
  static readonly UBER: "UBER";

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
