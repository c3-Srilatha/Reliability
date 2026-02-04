// TypeScript definitions for the C3 type AclSource

/**
 * When specified as the value for an {@link AclEntry.source}, indicates the source for the entry.
 *
 * @remarks this represents a value passed to a method that expects an instance of AclSource
 */
declare interface IAclSource {

  /**
   * Source for the default acl created when the owning obj was created.  For a type that is currently
   * enforcing acl (e.g. enabled via {@link EnableAclPrivilege} or {@link Ann.Db#enforceAcl}, if the obj is being
   * created by anyone other than the authorizer, the default entry will grant the creator full access.  This
   * default entry will be removed if `populateAcl` is called and that creates entries specified by the
   * {@link AclPrivilege} entries.
   */
  readonly Default: 'Default';

  /**
   * Automatically created by {@link AclEnabled.populateAcl} based on an {@link AclPrivilege}. Entries with this
   * source will be removed/replaced every type `populateAcl` is called for the obj.
   */
  readonly PrivilegePolicy: 'PrivilegePolicy';
}

/**
 * When specified as the value for an {@link AclEntry.source}, indicates the source for the entry.
 *
 * @remarks this represents a made instance of AclSource
 */
declare class AclSource {

  /**
   * Source for the default acl created when the owning obj was created.  For a type that is currently
   * enforcing acl (e.g. enabled via {@link EnableAclPrivilege} or {@link Ann.Db#enforceAcl}, if the obj is being
   * created by anyone other than the authorizer, the default entry will grant the creator full access.  This
   * default entry will be removed if `populateAcl` is called and that creates entries specified by the
   * {@link AclPrivilege} entries.
   */
  static readonly Default: 'Default';

  /**
   * Automatically created by {@link AclEnabled.populateAcl} based on an {@link AclPrivilege}. Entries with this
   * source will be removed/replaced every type `populateAcl` is called for the obj.
   */
  static readonly PrivilegePolicy: 'PrivilegePolicy';

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
