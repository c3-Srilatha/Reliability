// TypeScript definitions for the C3 type TimeseriesHeaderInfo

/**
 * Type that specifies rules about treating a timeseries itself
 *
 * @remarks this represents a value passed to a method that expects an instance of TimeseriesHeaderInfo
 */
declare interface ITimeseriesHeaderInfo {

  /**
   * default: ZERO_INTERPOLATOR
   */
  interpolator?: string | null;

  /**
   * default: IGNORE
   */
  duplicateHandling?: string | null;

  /**
   * default: AVG
   */
  overlapHandling?: string | null;

  interval?: string | null;

  treatment?: string | null;

  /**
   * default: false
   */
  extrapolate?: boolean;

  unit?: IUnit | null;
}

/**
 * Type that specifies rules about treating a timeseries itself
 *
 * @remarks this represents a made instance of TimeseriesHeaderInfo
 */
declare class TimeseriesHeaderInfo {

  /**
   * default: ZERO_INTERPOLATOR
   */
  readonly interpolator?: string | null;
  withInterpolator(interpolator: string | null): TimeseriesHeaderInfo;

  /**
   * default: IGNORE
   */
  readonly duplicateHandling?: string | null;
  withDuplicateHandling(duplicateHandling: string | null): TimeseriesHeaderInfo;

  /**
   * default: AVG
   */
  readonly overlapHandling?: string | null;
  withOverlapHandling(overlapHandling: string | null): TimeseriesHeaderInfo;

  readonly interval?: string | null;
  withInterval(interval: string | null): TimeseriesHeaderInfo;

  readonly treatment?: string | null;
  withTreatment(treatment: string | null): TimeseriesHeaderInfo;

  /**
   * default: false
   */
  readonly extrapolate?: boolean;
  withExtrapolate(extrapolate: boolean): TimeseriesHeaderInfo;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): TimeseriesHeaderInfo;
}

