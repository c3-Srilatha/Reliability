// TypeScript definitions for the C3 type ContentEncoding

/**
 * Enum type of all supported content encoding.
 *
 * @remarks this represents a value passed to a method that expects an instance of ContentEncoding
 */
declare interface IContentEncoding {

  /**
   * No encoding / compression
   */
  readonly IDENTITY: 'identity';

  /**
   * Gzip compression
   */
  readonly GZIP: 'gzip';

  /**
   * Snappy compression
   */
  readonly SNAPPY: 'snappy';

  /**
   * LZ4 compression
   */
  readonly LZ4: 'lz4';
}

/**
 * Enum type of all supported content encoding.
 *
 * @remarks this represents a made instance of ContentEncoding
 */
declare class ContentEncoding {

  /**
   * No encoding / compression
   */
  static readonly IDENTITY: 'identity';

  /**
   * Gzip compression
   */
  static readonly GZIP: 'gzip';

  /**
   * Snappy compression
   */
  static readonly SNAPPY: 'snappy';

  /**
   * LZ4 compression
   */
  static readonly LZ4: 'lz4';

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

  /**
   * Default file extension for the given content encoding
   */
  static defaultFileExt(contentEncoding: string): string;

  /**
   * Guess the content encoding from the given file path
   */
  static guessContentEncoding(filePath: string, defaultContentEncoding?: string | null): string | null;

  /**
   * Compress the given content from byte stream into the given byte push stream
   * Input streams will be closed after access, however, output push stream will NOT be closed. Please make sure to
   * close it after all operations on output push stream are complete
   *
   * @return new compressed byte push stream
   */
  static compress(contentEncoding: string | null, content: ByteStream, out: BytePushStream): BytePushStream;

  /**
   * @return a new byte push stream that is going to write compressed content with provided encoding into the given byte
   *         push stream
   */
  static compress(contentEncoding: string | null, out: BytePushStream): BytePushStream;

  /**
   * Uncompress the given content from input byte stream into the given byte push stream
   * Input streams will be closed after access, however, output stream will NOT be closed. Please make sure to close it
   * after all operations on output stream are complete
   *
   * @return new decoded/uncompressed byte push stream
   */
  static uncompress(contentEncoding: string | null, content: ByteStream, out: BytePushStream): BytePushStream;

  /**
   * @return byte stream of decoded/uncompressed content
   */
  static uncompress(contentEncoding: string | null, content: ByteStream): ByteStream;

  /**
   * Whether or not this content encoding is #IDENTITY (or null).
   */
  static isIdentity(contentEncoding: string | null): boolean;
}


interface λConsumer<T> {
  (t: T): void
}
