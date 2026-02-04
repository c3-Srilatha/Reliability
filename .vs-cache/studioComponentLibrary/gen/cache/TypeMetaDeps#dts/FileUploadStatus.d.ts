// TypeScript definitions for the C3 type FileUploadStatus

/**
 * Represents a file upload status
 *
 * @remarks this represents a value passed to a method that expects an instance of FileUploadStatus
 */
declare interface IFileUploadStatus {

  /**
   * The file has been queued to be uploaded.
   */
  readonly QUEUED: "QUEUED";

  /**
   * The file is currently being uploaded.
   */
  readonly UPLOADING: "UPLOADING";

  /**
   * The file is successfully uploaded.
   */
  readonly SUCCESSFUL: "SUCCESSFUL";

  /**
   * The file was not successfully uploaded, an error occurred.
   */
  readonly ERROR: "ERROR";

  /**
   * The file has an invalid extension.
   */
  readonly INVALID: "INVALID";

  /**
   * The file exceeds the file size limit.
   */
  readonly INVALID_SIZE: "INVALID_SIZE";

  /**
   * The file upload was cancelled
   */
  readonly CANCELLED: "CANCELLED";
}

/**
 * Represents a file upload status
 *
 * @remarks this represents a made instance of FileUploadStatus
 */
declare class FileUploadStatus {

  /**
   * The file has been queued to be uploaded.
   */
  static readonly QUEUED: "QUEUED";

  /**
   * The file is currently being uploaded.
   */
  static readonly UPLOADING: "UPLOADING";

  /**
   * The file is successfully uploaded.
   */
  static readonly SUCCESSFUL: "SUCCESSFUL";

  /**
   * The file was not successfully uploaded, an error occurred.
   */
  static readonly ERROR: "ERROR";

  /**
   * The file has an invalid extension.
   */
  static readonly INVALID: "INVALID";

  /**
   * The file exceeds the file size limit.
   */
  static readonly INVALID_SIZE: "INVALID_SIZE";

  /**
   * The file upload was cancelled
   */
  static readonly CANCELLED: "CANCELLED";

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
