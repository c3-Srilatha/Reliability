// TypeScript definitions for the C3 type DnsRecordSetType

/**
 * Enumeration of all known type for domain record set.
 *
 * @remarks this represents a value passed to a method that expects an instance of DnsRecordSetType
 */
declare interface IDnsRecordSetType {

  /**
   * Address record
   * a 32-bit IPv4 address, most commonly used to map hostnames to an IP address of the host
   */
  readonly A: "A";

  /**
   * IPv6 address record
   * A 128-bit IPv6 address, most commonly used to map hostnames to an IP address of the host
   */
  readonly AAAA: "AAAA";

  /**
   * Canonical name record
   * Alias of one name to another: the DNS lookup will continue by retrying the lookup with the new name
   */
  readonly CNAME: "CNAME";

  /**
   * Mail exchange record
   * Maps a domain name to a list of message transfer agents for that domain
   */
  readonly MX: "MX";

  /**
   * Name server record
   * Delegates a DNS zone to use the given authoritative name servers
   */
  readonly NS: "NS";

  /**
   * Start of [a zone of] authority record
   * Specifies authoritative information about a DNS zone, including the primary name server, the email of
   * the domain administrator, the domain serial number, and several timers relating to refreshing the zone
   */
  readonly SOA: "SOA";

  /**
   * Service locator
   * Generalized service location record, used for newer protocols instead of creating protocol-specific
   * records such as MX
   */
  readonly SRV: "SRV";

  /**
   * Text record
   * Originally for arbitrary human-readable text in a DNS record
   */
  readonly TXT: "TXT";
}

/**
 * Enumeration of all known type for domain record set.
 *
 * @remarks this represents a made instance of DnsRecordSetType
 */
declare class DnsRecordSetType {

  /**
   * Address record
   * a 32-bit IPv4 address, most commonly used to map hostnames to an IP address of the host
   */
  static readonly A: "A";

  /**
   * IPv6 address record
   * A 128-bit IPv6 address, most commonly used to map hostnames to an IP address of the host
   */
  static readonly AAAA: "AAAA";

  /**
   * Canonical name record
   * Alias of one name to another: the DNS lookup will continue by retrying the lookup with the new name
   */
  static readonly CNAME: "CNAME";

  /**
   * Mail exchange record
   * Maps a domain name to a list of message transfer agents for that domain
   */
  static readonly MX: "MX";

  /**
   * Name server record
   * Delegates a DNS zone to use the given authoritative name servers
   */
  static readonly NS: "NS";

  /**
   * Start of [a zone of] authority record
   * Specifies authoritative information about a DNS zone, including the primary name server, the email of
   * the domain administrator, the domain serial number, and several timers relating to refreshing the zone
   */
  static readonly SOA: "SOA";

  /**
   * Service locator
   * Generalized service location record, used for newer protocols instead of creating protocol-specific
   * records such as MX
   */
  static readonly SRV: "SRV";

  /**
   * Text record
   * Originally for arbitrary human-readable text in a DNS record
   */
  static readonly TXT: "TXT";

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
