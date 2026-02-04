// TypeScript definitions for the C3 type RndStrKind

/**
 * Built-in string formats. This is used to generate strings with different content for use in random data.
 *
 * @see Rnd#str
 *
 * @remarks this represents a value passed to a method that expects an instance of RndStrKind
 */
declare interface IRndStrKind {

  /**
   * Typical ID values; generally a sequence of word characters and select punctuation.
   */
  readonly ID: "ID";

  /**
   * Typical names values; generally a sequence of word characters.
   */
  readonly NAME: "NAME";

  /**
   * Typical prose values; generally a sequence of words.
   */
  readonly SUMMARY: "SUMMARY";

  /**
   * Typical prose values; generally a sequence of words.
   */
  readonly DESCRIPTION: "DESCRIPTION";

  /**
   * Letters only.
   */
  readonly ALPHA: "ALPHA";

  /**
   * Letters and digits only.
   */
  readonly ALPHANUMERIC: "ALPHANUMERIC";

  /**
   * Hexadecimal digits only.
   */
  readonly HEX: "HEX";

  /**
   * Typical domain name.
   */
  readonly DOMAIN: "DOMAIN";

  /**
   * Typical email address.
   */
  readonly EMAIL: "EMAIL";

  /**
   * Typical URL.
   */
  readonly URL: "URL";

  /**
   * Semantic version.
   */
  readonly VERSION: "VERSION";

  /**
   * Local file path.
   */
  readonly FILE_PATH: "FILE_PATH";

  /**
   * Local file URL.
   */
  readonly FILE_URL: "FILE_URL";

  /**
   * Expression.
   */
  readonly EXPR: "EXPR";

  /**
   * IPV4 address.
   */
  readonly IP_ADDR: "IP_ADDR";

  /**
   * Language/region.
   */
  readonly LOCALE: "LOCALE";

  /**
   * Content-Type.
   */
  readonly MIME_TYPE: "MIME_TYPE";

  /**
   * Datetime.
   */
  readonly DATETIME: "DATETIME";
}

/**
 * Built-in string formats. This is used to generate strings with different content for use in random data.
 *
 * @see Rnd#str
 *
 * @remarks this represents a made instance of RndStrKind
 */
declare class RndStrKind {

  /**
   * Typical ID values; generally a sequence of word characters and select punctuation.
   */
  static readonly ID: "ID";

  /**
   * Typical names values; generally a sequence of word characters.
   */
  static readonly NAME: "NAME";

  /**
   * Typical prose values; generally a sequence of words.
   */
  static readonly SUMMARY: "SUMMARY";

  /**
   * Typical prose values; generally a sequence of words.
   */
  static readonly DESCRIPTION: "DESCRIPTION";

  /**
   * Letters only.
   */
  static readonly ALPHA: "ALPHA";

  /**
   * Letters and digits only.
   */
  static readonly ALPHANUMERIC: "ALPHANUMERIC";

  /**
   * Hexadecimal digits only.
   */
  static readonly HEX: "HEX";

  /**
   * Typical domain name.
   */
  static readonly DOMAIN: "DOMAIN";

  /**
   * Typical email address.
   */
  static readonly EMAIL: "EMAIL";

  /**
   * Typical URL.
   */
  static readonly URL: "URL";

  /**
   * Semantic version.
   */
  static readonly VERSION: "VERSION";

  /**
   * Local file path.
   */
  static readonly FILE_PATH: "FILE_PATH";

  /**
   * Local file URL.
   */
  static readonly FILE_URL: "FILE_URL";

  /**
   * Expression.
   */
  static readonly EXPR: "EXPR";

  /**
   * IPV4 address.
   */
  static readonly IP_ADDR: "IP_ADDR";

  /**
   * Language/region.
   */
  static readonly LOCALE: "LOCALE";

  /**
   * Content-Type.
   */
  static readonly MIME_TYPE: "MIME_TYPE";

  /**
   * Datetime.
   */
  static readonly DATETIME: "DATETIME";

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

  static lenRange(rnd: Rnd, kind: string, example?: boolean): Range<number | null>;

  static dflt(kind?: string | null): string;
}


interface λConsumer<T> {
  (t: T): void
}
