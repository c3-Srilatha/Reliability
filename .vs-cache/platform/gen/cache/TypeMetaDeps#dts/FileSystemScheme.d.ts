// TypeScript definitions for the C3 type FileSystemScheme

/**
 * Enum for all possible file system schemes.
 *
 * @remarks this represents a value passed to a method that expects an instance of FileSystemScheme
 */
declare interface IFileSystemScheme {

  /**
   * C3 file-system
   */
  readonly c3fs: 'c3fs';

  /**
   * Current meta-data for a tag
   */
  readonly meta: 'meta';

  /**
   * All the meta-data known to environment
   */
  readonly allmeta: 'allmeta';

  /**
   * Local file-system
   */
  readonly file: 'file';

  /**
   * HTTP
   */
  readonly http: 'http';

  /**
   * HTTPS
   */
  readonly https: 'https';

  /**
   * AWS S3
   */
  readonly s3: 's3';

  /**
   * Azure blob
   */
  readonly azure: 'azure';

  /**
   * Azure Data Lake Gen 2
   */
  readonly adl: 'adl';

  /**
   * HDFS
   */
  readonly hdfs: 'hdfs';

  /**
   * GCS
   */
  readonly gcs: 'gcs';

  /**
   * GitHub
   */
  readonly github: 'github';

  /**
   * Git
   */
  readonly git: 'git';

  /**
   * Tmp
   */
  readonly tmp: 'tmp';

  /**
   * Zip file-system
   */
  readonly zip: 'zip';

  /**
   * In memory content
   */
  readonly mem: 'mem';

  /**
   * MsGraph (OneDrive and SharePoint)
   */
  readonly msgraph: 'msgraph';

  /**
   * GoogleDrive
   */
  readonly gdrive: 'gdrive';

  /**
   * Box
   */
  readonly box: 'box';
}

/**
 * Enum for all possible file system schemes.
 *
 * @remarks this represents a made instance of FileSystemScheme
 */
declare class FileSystemScheme {

  /**
   * C3 file-system
   */
  static readonly c3fs: 'c3fs';

  /**
   * Current meta-data for a tag
   */
  static readonly meta: 'meta';

  /**
   * All the meta-data known to environment
   */
  static readonly allmeta: 'allmeta';

  /**
   * Local file-system
   */
  static readonly file: 'file';

  /**
   * HTTP
   */
  static readonly http: 'http';

  /**
   * HTTPS
   */
  static readonly https: 'https';

  /**
   * AWS S3
   */
  static readonly s3: 's3';

  /**
   * Azure blob
   */
  static readonly azure: 'azure';

  /**
   * Azure Data Lake Gen 2
   */
  static readonly adl: 'adl';

  /**
   * HDFS
   */
  static readonly hdfs: 'hdfs';

  /**
   * GCS
   */
  static readonly gcs: 'gcs';

  /**
   * GitHub
   */
  static readonly github: 'github';

  /**
   * Git
   */
  static readonly git: 'git';

  /**
   * Tmp
   */
  static readonly tmp: 'tmp';

  /**
   * Zip file-system
   */
  static readonly zip: 'zip';

  /**
   * In memory content
   */
  static readonly mem: 'mem';

  /**
   * MsGraph (OneDrive and SharePoint)
   */
  static readonly msgraph: 'msgraph';

  /**
   * GoogleDrive
   */
  static readonly gdrive: 'gdrive';

  /**
   * Box
   */
  static readonly box: 'box';

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
