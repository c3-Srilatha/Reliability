// TypeScript definitions for the C3 type HttpMethod

/**
 * HTTP protocol request methods
 *
 * @remarks this represents a value passed to a method that expects an instance of HttpMethod
 */
declare interface IHttpMethod {

  /**
   * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
   */
  readonly GET: "GET";

  /**
   * The HEAD method asks for a response identical to that of a GET request, but without the response body.
   */
  readonly HEAD: "HEAD";

  /**
   * The POST method is used to submit an entity to the specified resource, often causing a change in state or side
   * effects on the server.
   */
  readonly POST: "POST";

  /**
   * The PUT method replaces all current representations of the target resource with the request payload.
   */
  readonly PUT: "PUT";

  /**
   * The DELETE method deletes the specified resource.
   */
  readonly DELETE: "DELETE";

  /**
   * The CONNECT method establishes a tunnel to the server identified by the target resource.
   */
  readonly CONNECT: "CONNECT";

  /**
   * The OPTIONS method is used to describe the communication options for the target resource.
   */
  readonly OPTIONS: "OPTIONS";

  /**
   * The TRACE method performs a message loop-back test along the path to the target resource.
   */
  readonly TRACE: "TRACE";

  /**
   * The PATCH method is used to apply partial modifications to a resource.
   */
  readonly PATCH: "PATCH";
}

/**
 * HTTP protocol request methods
 *
 * @remarks this represents a made instance of HttpMethod
 */
declare class HttpMethod {

  /**
   * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
   */
  static readonly GET: "GET";

  /**
   * The HEAD method asks for a response identical to that of a GET request, but without the response body.
   */
  static readonly HEAD: "HEAD";

  /**
   * The POST method is used to submit an entity to the specified resource, often causing a change in state or side
   * effects on the server.
   */
  static readonly POST: "POST";

  /**
   * The PUT method replaces all current representations of the target resource with the request payload.
   */
  static readonly PUT: "PUT";

  /**
   * The DELETE method deletes the specified resource.
   */
  static readonly DELETE: "DELETE";

  /**
   * The CONNECT method establishes a tunnel to the server identified by the target resource.
   */
  static readonly CONNECT: "CONNECT";

  /**
   * The OPTIONS method is used to describe the communication options for the target resource.
   */
  static readonly OPTIONS: "OPTIONS";

  /**
   * The TRACE method performs a message loop-back test along the path to the target resource.
   */
  static readonly TRACE: "TRACE";

  /**
   * The PATCH method is used to apply partial modifications to a resource.
   */
  static readonly PATCH: "PATCH";

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
   * Returns true if the given http method operation is idempotent GET/PUT/DELETE/OPTIONS/HEAD
   */
  static isIdempotent(method: string): boolean;
}


interface λConsumer<T> {
  (t: T): void
}
