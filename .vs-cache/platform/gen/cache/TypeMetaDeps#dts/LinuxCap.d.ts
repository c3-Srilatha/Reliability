// TypeScript definitions for the C3 type LinuxCap

/**
 * @remarks this represents a value passed to a method that expects an instance of LinuxCap
 */
declare interface ILinuxCap {

  readonly CHOWN: "CHOWN";

  readonly DAC_OVERRIDE: "DAC_OVERRIDE";

  readonly FOWNER: "FOWNER";

  readonly FSETID: "FSETID";

  readonly KILL: "KILL";

  readonly SETGID: "SETGID";

  readonly SETUID: "SETUID";

  readonly SETPCAP: "SETPCAP";

  readonly NET_BIND_SERVICE: "NET_BIND_SERVICE";

  readonly NET_RAW: "NET_RAW";

  readonly SYS_CHROOT: "SYS_CHROOT";

  readonly MKNOD: "MKNOD";

  readonly AUDIT_WRITE: "AUDIT_WRITE";

  readonly SETFCAP: "SETFCAP";
}

/**
 * @remarks this represents a made instance of LinuxCap
 */
declare class LinuxCap {

  static readonly CHOWN: "CHOWN";

  static readonly DAC_OVERRIDE: "DAC_OVERRIDE";

  static readonly FOWNER: "FOWNER";

  static readonly FSETID: "FSETID";

  static readonly KILL: "KILL";

  static readonly SETGID: "SETGID";

  static readonly SETUID: "SETUID";

  static readonly SETPCAP: "SETPCAP";

  static readonly NET_BIND_SERVICE: "NET_BIND_SERVICE";

  static readonly NET_RAW: "NET_RAW";

  static readonly SYS_CHROOT: "SYS_CHROOT";

  static readonly MKNOD: "MKNOD";

  static readonly AUDIT_WRITE: "AUDIT_WRITE";

  static readonly SETFCAP: "SETFCAP";

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
