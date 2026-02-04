// TypeScript definitions for the C3 type FileSystemMount

/**
 * Enum for pre-configured file system mounts. Note that any number of other mounts can be used as well.
 *
 * @remarks this represents a value passed to a method that expects an instance of FileSystemMount
 */
declare interface IFileSystemMount {

  /**
   * Mount that used by all pods to access C3 artifacts.
   */
  readonly ARTIFACT: 'artifact';

  /**
   * Mount used to store commonly used datasets for the cluster.
   */
  readonly DATASETS: 'datasets';

  /**
   * Mount that used to store file attachments to entity types in the current tenant and tag.
   */
  readonly ATTACHMENT: 'attachment';

  /**
   * Default mount for the current tenant and tag.
   */
  readonly DEFAULT: '/';

  /**
   * Mount where all the customer data load files are located.
   */
  readonly DATA_LOAD: 'data-load';

  /**
   * Mount where default data lake is located.
   */
  readonly DATA_LAKE: 'datalake';

  /**
   * Mount used by ETL jobs.
   */
  readonly ETL: 'etl';

  /**
   * Mount used by KvStore.FileSystem.
   */
  readonly KEY_VALUE: 'key-value';

  /**
   * Mount that keeps secrets.
   */
  readonly VAULT: 'vault';

  /**
   * Mount that keeps metrics collected in the cluster
   */
  readonly TELEMETRY: 'telemetry';

  /**
   * Mount used by various system jobs (e.g. MapReduce).
   */
  readonly SYSTEM: 'system';

  /**
   * A prefix used to ensure mounts created by {@link FileSourceSystem#register}
   * are separated from mounts that are set through other methods.
   * WARNING: using this prefix as part of a mount for {@link FileSystem#setMount}
   * outside of {@link FileSourceSystem#register} risks the mount being overwritten
   * by {@link FileSourceSystem#register}
   */
  readonly DATA_LOAD_PREFIX: 'data-load-';
}

/**
 * Enum for pre-configured file system mounts. Note that any number of other mounts can be used as well.
 *
 * @remarks this represents a made instance of FileSystemMount
 */
declare class FileSystemMount {

  /**
   * Mount that used by all pods to access C3 artifacts.
   */
  static readonly ARTIFACT: 'artifact';

  /**
   * Mount used to store commonly used datasets for the cluster.
   */
  static readonly DATASETS: 'datasets';

  /**
   * Mount that used to store file attachments to entity types in the current tenant and tag.
   */
  static readonly ATTACHMENT: 'attachment';

  /**
   * Default mount for the current tenant and tag.
   */
  static readonly DEFAULT: '/';

  /**
   * Mount where all the customer data load files are located.
   */
  static readonly DATA_LOAD: 'data-load';

  /**
   * Mount where default data lake is located.
   */
  static readonly DATA_LAKE: 'datalake';

  /**
   * Mount used by ETL jobs.
   */
  static readonly ETL: 'etl';

  /**
   * Mount used by KvStore.FileSystem.
   */
  static readonly KEY_VALUE: 'key-value';

  /**
   * Mount that keeps secrets.
   */
  static readonly VAULT: 'vault';

  /**
   * Mount that keeps metrics collected in the cluster
   */
  static readonly TELEMETRY: 'telemetry';

  /**
   * Mount used by various system jobs (e.g. MapReduce).
   */
  static readonly SYSTEM: 'system';

  /**
   * A prefix used to ensure mounts created by {@link FileSourceSystem#register}
   * are separated from mounts that are set through other methods.
   * WARNING: using this prefix as part of a mount for {@link FileSystem#setMount}
   * outside of {@link FileSourceSystem#register} risks the mount being overwritten
   * by {@link FileSourceSystem#register}
   */
  static readonly DATA_LOAD_PREFIX: 'data-load-';

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
   * Converts mount name to external name since we follow a standard convention for mounts names
   * in external URLs. Useful for FileSystem(s) which have different external scheme and needs
   * to retain the mount name for final translation when using the FileSystem APIs. e.g C3FileSystem
   */
  static toExternalMountName(mount: string): string;

  /**
   * Converts the external mount name to mount by applying the reverse transformation as
   * {@link toExternalMountName()}. Useful for FileSystem(s) which have different external scheme and needs
   * to retain the mount name for final translation when using the FileSystem APIs. e.g C3FileSystem
   */
  static fromExternalMountName(externalName: string): string;
}


interface λConsumer<T> {
  (t: T): void
}
