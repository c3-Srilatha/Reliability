// TypeScript definitions for the C3 type HttpStatusCode

/**
 * Type to represent the root of the server request.
 *
 * @remarks this represents a value passed to a method that expects an instance of HttpStatusCode
 */
declare interface IHttpStatusCode {

  readonly CONTINUE: 100;

  readonly OK: 200;

  readonly ACCEPTED: 202;

  readonly NO_CONTENT: 204;

  readonly MOVED_PERMANENTLY: 301;

  readonly FOUND: 302;

  readonly NOT_MODIFIED: 304;

  readonly BAD_REQUEST: 400;

  readonly NOT_AUTHORIZED: 401;

  readonly FORBIDDEN: 403;

  readonly NOT_FOUND: 404;

  readonly CONFLICT: 409;

  readonly INTERNAL_SERVER_ERROR: 500;

  readonly BAD_GATEWAY: 502;

  readonly SERVICE_UNAVAILABLE: 503;

  readonly METHOD_NOT_ALLOWED: 405;
}

/**
 * Type to represent the root of the server request.
 *
 * @remarks this represents a made instance of HttpStatusCode
 */
declare class HttpStatusCode {

  static readonly CONTINUE: 100;

  static readonly OK: 200;

  static readonly ACCEPTED: 202;

  static readonly NO_CONTENT: 204;

  static readonly MOVED_PERMANENTLY: 301;

  static readonly FOUND: 302;

  static readonly NOT_MODIFIED: 304;

  static readonly BAD_REQUEST: 400;

  static readonly NOT_AUTHORIZED: 401;

  static readonly FORBIDDEN: 403;

  static readonly NOT_FOUND: 404;

  static readonly CONFLICT: 409;

  static readonly INTERNAL_SERVER_ERROR: 500;

  static readonly BAD_GATEWAY: 502;

  static readonly SERVICE_UNAVAILABLE: 503;

  static readonly METHOD_NOT_ALLOWED: 405;

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): number | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: number | null, failIfInvalid?: boolean): string | null;

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
  static valueIndex(value: number | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<number | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<number | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, number | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: number): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<number> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
