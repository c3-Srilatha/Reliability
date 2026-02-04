// TypeScript definitions for the C3 type SelfServiceDISourceCollectionStatus

/**
 * Statuses for a {@link FileSourceCollection} created through FileUpload
 *
 * @remarks this represents a value passed to a method that expects an instance of SelfServiceDISourceCollectionStatus
 */
declare interface ISelfServiceDISourceCollectionStatus {

  /**
   * Files are uploading
   */
  readonly UPLOADING: "UPLOADING";

  /**
   * File upload failed. Typically caused by terminating file upload
   */
  readonly UPLOAD_FAILED: "UPLOAD_FAILED";

  /**
   * File upload error. Typically caused by terminating file upload
   */
  readonly UPLOAD_ERROR: "UPLOAD_ERROR";

  /**
   * File upload invalid. Typically caused by terminating file upload
   */
  readonly UPLOAD_INVALID: "UPLOAD_INVALID";

  /**
   * File upload cancelled. Typically caused by terminating file upload
   */
  readonly UPLOAD_CANCELLED: "UPLOAD_CANCELLED";

  /**
   * Files upload completed
   */
  readonly UPLOADED: "UPLOADED";

  /**
   * SourceFiles are processing
   */
  readonly PROCESSING: "PROCESSING";

  /**
   * SourceFiles are integrating
   */
  readonly INTEGRATING: "INTEGRATING";

  /**
   * There are some failures during SourceFile process
   */
  readonly PROCESS_FAILED: "PROCESS_FAILED";

  /**
   * Files queued for upload
   */
  readonly QUEUED_FOR_UPLOAD: "QUEUED_FOR_UPLOAD";

  /**
   * Files queued for integration
   */
  readonly QUEUED_FOR_INTEGRATION: "QUEUED_FOR_INTEGRATION";

  /**
   * SourceFiles has completed processing
   */
  readonly PROCESS_COMPLETED: "PROCESS_COMPLETED";
}

/**
 * Statuses for a {@link FileSourceCollection} created through FileUpload
 *
 * @remarks this represents a made instance of SelfServiceDISourceCollectionStatus
 */
declare class SelfServiceDISourceCollectionStatus {

  /**
   * Files are uploading
   */
  static readonly UPLOADING: "UPLOADING";

  /**
   * File upload failed. Typically caused by terminating file upload
   */
  static readonly UPLOAD_FAILED: "UPLOAD_FAILED";

  /**
   * File upload error. Typically caused by terminating file upload
   */
  static readonly UPLOAD_ERROR: "UPLOAD_ERROR";

  /**
   * File upload invalid. Typically caused by terminating file upload
   */
  static readonly UPLOAD_INVALID: "UPLOAD_INVALID";

  /**
   * File upload cancelled. Typically caused by terminating file upload
   */
  static readonly UPLOAD_CANCELLED: "UPLOAD_CANCELLED";

  /**
   * Files upload completed
   */
  static readonly UPLOADED: "UPLOADED";

  /**
   * SourceFiles are processing
   */
  static readonly PROCESSING: "PROCESSING";

  /**
   * SourceFiles are integrating
   */
  static readonly INTEGRATING: "INTEGRATING";

  /**
   * There are some failures during SourceFile process
   */
  static readonly PROCESS_FAILED: "PROCESS_FAILED";

  /**
   * Files queued for upload
   */
  static readonly QUEUED_FOR_UPLOAD: "QUEUED_FOR_UPLOAD";

  /**
   * Files queued for integration
   */
  static readonly QUEUED_FOR_INTEGRATION: "QUEUED_FOR_INTEGRATION";

  /**
   * SourceFiles has completed processing
   */
  static readonly PROCESS_COMPLETED: "PROCESS_COMPLETED";

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
