// TypeScript definitions for the C3 type NormalizationMode

/**
 *   Determines the normalization mode the tenant is in. This is set on the TenantConfig `Normalize` and has behaviors
 *   as described below
 *   E.g.
 *  ```js
 *  NormalizationConfig.make().setConfigValue("mode", "ALL");
 *  ```
 *   Default mode of normalization is on demand. To check normalization mode use this code:
 * ```js
 * NormalizationConfig.inst().configValue('mode') || 'ON_DEMAND'
 * ```
 *
 * @remarks this represents a value passed to a method that expects an instance of NormalizationMode
 */
declare interface INormalizationMode {

  /**
   * Invalidates all the series that have been normalized in the past and does NOT put an entry in the normalization queue for normalization asynchronously. (default)
   * The series will be normalized the first time it is read. This could cause a delay in response to obtain the series
   */
  readonly ON_DEMAND: 'ONDEMAND';

  /**
   * Invalidates all the series that have been normalized in the past and PUTS an entry in the normalization queue for all series to be normalized asynchronously.
   * On reading the series, the current state of the series is returned irrespective of whether the series is normalized or not (This could return stale data). In the case when series is not normalized,
   * the current state will be returned & NO NEW entry will be placed in the invalidation queue since there will be one already in the NormalizationQueue for the incremental mode. This data will be eventually consistent
   */
  readonly ALL: "ALL";

  /**
   * Invalidates already normalized timeseries, and puts an entry in the invalidation queue to re-normalize the series asynchronously. It doesn't normalize the series who have never been normalized
   */
  readonly RECENT: "RECENT";

  /**
   * Invalidates already normalized timeseries, and puts an entry in the invalidation queue to re-normalize the series asynchronously. It doesn't normalize the series who have never been normalized.
   * On reading the series, the current state of the series is returned irrespective of whether the series is normalized or not (This could return stale data). In the case when series is not normalized,
   * ON_DEMAND normalization will be performed & NO entry will be placed in the invalidation queue to normalize it asynchronously since this is the first access and data will be returned for this series.
   * This could be used in scenarios where UI wants the results as per the current state & not wait for normalization to occur when series is marked as invalid
   */
  readonly AFTER_QUERY: 'AFTERQUERY';
}

/**
 *   Determines the normalization mode the tenant is in. This is set on the TenantConfig `Normalize` and has behaviors
 *   as described below
 *   E.g.
 *  ```js
 *  NormalizationConfig.make().setConfigValue("mode", "ALL");
 *  ```
 *   Default mode of normalization is on demand. To check normalization mode use this code:
 * ```js
 * NormalizationConfig.inst().configValue('mode') || 'ON_DEMAND'
 * ```
 *
 * @remarks this represents a made instance of NormalizationMode
 */
declare class NormalizationMode {

  /**
   * Invalidates all the series that have been normalized in the past and does NOT put an entry in the normalization queue for normalization asynchronously. (default)
   * The series will be normalized the first time it is read. This could cause a delay in response to obtain the series
   */
  static readonly ON_DEMAND: 'ONDEMAND';

  /**
   * Invalidates all the series that have been normalized in the past and PUTS an entry in the normalization queue for all series to be normalized asynchronously.
   * On reading the series, the current state of the series is returned irrespective of whether the series is normalized or not (This could return stale data). In the case when series is not normalized,
   * the current state will be returned & NO NEW entry will be placed in the invalidation queue since there will be one already in the NormalizationQueue for the incremental mode. This data will be eventually consistent
   */
  static readonly ALL: "ALL";

  /**
   * Invalidates already normalized timeseries, and puts an entry in the invalidation queue to re-normalize the series asynchronously. It doesn't normalize the series who have never been normalized
   */
  static readonly RECENT: "RECENT";

  /**
   * Invalidates already normalized timeseries, and puts an entry in the invalidation queue to re-normalize the series asynchronously. It doesn't normalize the series who have never been normalized.
   * On reading the series, the current state of the series is returned irrespective of whether the series is normalized or not (This could return stale data). In the case when series is not normalized,
   * ON_DEMAND normalization will be performed & NO entry will be placed in the invalidation queue to normalize it asynchronously since this is the first access and data will be returned for this series.
   * This could be used in scenarios where UI wants the results as per the current state & not wait for normalization to occur when series is marked as invalid
   */
  static readonly AFTER_QUERY: 'AFTERQUERY';

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
