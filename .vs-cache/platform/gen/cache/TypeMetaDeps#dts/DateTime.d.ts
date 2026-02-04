// TypeScript definitions for the C3 type DateTime

/**
 * Our DateTime interface is modeled after the Joda ReadableDateTime, plus includes support for additional semantics
 * related to our own more explicit model of time zones (offsets). In particular, a null time zone generally means the
 * date/time is detached from any time zone, rather than using the default (local) time zone.
 *
 * There are possible features which each implementation may support:
 *
 *  - extended year range: years from -9999-9999 instead of just 1970-2038
 *  - time zone offset: arbitrary, UTC only or no time zone
 *  - millisecond precision
 *  - microsecond precision
 *  - nanosecond precision
 *
 * Like all C3 values, datetimes are immutable so all methods that would change the value return a new instance.
 * However, if the current value satisfies the requirements, it will be returned instead. This means that methods
 * documented as "returns a copy" may actually return the _same_ instance.
 *
 * @remarks this represents a value passed to a method that expects an instance of DateTime
 */
declare interface IDateTime {
}

/**
 * Our DateTime interface is modeled after the Joda ReadableDateTime, plus includes support for additional semantics
 * related to our own more explicit model of time zones (offsets). In particular, a null time zone generally means the
 * date/time is detached from any time zone, rather than using the default (local) time zone.
 *
 * There are possible features which each implementation may support:
 *
 *  - extended year range: years from -9999-9999 instead of just 1970-2038
 *  - time zone offset: arbitrary, UTC only or no time zone
 *  - millisecond precision
 *  - microsecond precision
 *  - nanosecond precision
 *
 * Like all C3 values, datetimes are immutable so all methods that would change the value return a new instance.
 * However, if the current value satisfies the requirements, it will be returned instead. This means that methods
 * documented as "returns a copy" may actually return the _same_ instance.
 *
 * @remarks this represents a made instance of DateTime
 */
declare class DateTime {

  /**
   * Format the full date/time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date format:
   * "YYYY-MM-DDThh:mm:ss[.SSS]". If the implementation does not represent fractional seconds, they are omitted.
   * Note fractional seconds may be 0, 3, 6 or 9 digits long, depending on the underlying precision.
   *
   * If a time zone is present, append it to the string as a "Z" for UTC and as `+hh:mm` (or `-`) for other zone
   * offsets.
   *
   *  - `2018-05-04T12:15:45Z`: `utc datetime` (point in time UTC)
   *  - `2018-05-04T12:15:45-07:00`: `datetime` (point in time PDT, 7h later than above)
   *  - `2018-05-04T12:15:45.678`: `datetime no tz with millis` (logical date/time with millisecond precision)
   */
  toString(): string | null;

  /**
   * Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
   * returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
   * current instant.
   *
   * Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
   * `"-30days"` indicates thirty days before the current instant (at the same time of day). They can also
   * be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
   * current instant, rounded down to midnight.
   *
   * By default, dates are produced with the sub-second precision implied by the value.
   *
   *
   * This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
   * (it will just return `null`).
   *
   * @see Period
   */
  static fromString(s: string | null): DateTime | null;

  /**
   * Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
   * returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
   * current instant.
   *
   * Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
   * `"-30days"` indicates thirty days before the current instant (at the same time of day). They can also
   * be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
   * current instant, rounded down to midnight.
   *
   * The date time instance created will not be categorically more precise than the default 3 digits (milliseconds).
   * To create a value with a different precision, use the overload that takes the precision as an argument.
   *
   *
   * This overload will only throw an error if `failIfInvalid` is true.
   *
   * @param str
   *        string to parse
   * @param maxPrecision
   *        maximum sub-second precision in digits [0..9]
   * @param failIfInvalid
   *        if true, throw an error instead of null
   * @param for_
   *        context for the error message
   */
  static fromString(str: string | null, maxPrecision: number, failIfInvalid?: boolean, for_?: string | null): DateTime | null;

  /**
   * Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
   * returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
   * current instant.
   *
   * Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
   * `"-30days"` indicates thirty days before the current instant (at the same time of day). They can also
   * be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
   * current instant, rounded down to midnight.
   *
   * The date time instance created will not be categorically more precise than the maxPrecision argument. For example,
   * if no sub-second precision is desired, passing 0 (digits) will result in a datetime value with only whole seconds.
   * The precision jumps are limited to fixed values supported by actual implementations, but at least 0 (second),
   * 3 (millisecond), 6 (microsecond) and 9 (nanosecond) digits are supported.
   *
   *
   * This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
   * (it will just return `null`).
   *
   * @param str
   *        string to parse
   * @param maxPrecision
   *        maximum sub-second precision in digits [0..9]
   * @see Period
   */
  static fromString(str: string | null, maxPrecision: number): DateTime | null;

  /**
   * Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
   * returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
   * specified from argument.
   *
   * Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
   * `"-30days"` indicates thirty days before the specified instant (at the same time of day). They can also
   * be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
   * specified instant, rounded down to midnight.
   *
   *
   * This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
   * (it will just return `null`).
   *
   * @param str
   *        string to parse
   * @param from
   *        base instant for relative times
   * @see #fromRelative
   */
  static fromString(str: string | null, from: DateTime): DateTime | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): DateTime | null;

  /**
   * Return the value type corresponding most closely to this value. Note that this will be a value type which
   * handles this particular value, not necessarily the one from which it was created. In particular, the precision
   * of the type will be sufficient to support the sub-second precision of this instance.
   */
  valueType(): ValueType | null;

  /**
   * Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
   * considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
   *
   * @see ValueType#instanceType
   */
  static valueTypeOf(type: Type, failIfNot?: boolean): ValueType | null;

  toNative(doNotCopy?: boolean): any;

  toNative(): any;

  static myType(): Type | null;

  static myType(pkg: Pkg | null): Type | null;

  /**
   * Get the value as the number of milliseconds since the epoch, 1970-01-01T00:00:00Z.
   */
  get millis(): number;

  /**
   * Get the value as the number of seconds since the epoch, 1970-01-01T00:00:00Z.
   */
  get seconds(): number;

  /**
   * Get the value as the number of microseconds since the epoch, 1970-01-01T00:00:00Z.
   */
  get micros(): number;

  /**
   * Get the value as the number of nanoseconds since the epoch, 1970-01-01T00:00:00Z.
   */
  get nanos(): number | null;

  /**
   * Gets the time zone (if the datetime has one).
   */
  get zone(): TimeZone | null;

  /**
   * Is this instant after the instant passed in comparing solely by time. If the argument is `null`, compares to now.
   */
  isAfter(dt: DateTime | null): boolean;

  /**
   * Is this instant after the instant passed in comparing solely by time.
   */
  isAfter(instant: number): boolean;

  /**
   * Is this instant after the current instant comparing solely by time.
   */
  isAfterNow(): boolean;

  /**
   * Is this instant before the instant passed in comparing solely by time. If the argument is `null`, compares to now.
   */
  isBefore(dt: DateTime | null): boolean;

  /**
   * Is this instant before the instant passed in comparing solely by time.
   */
  isBefore(instant: number): boolean;

  /**
   * Is this instant before the current instant comparing solely by time.
   */
  isBeforeNow(): boolean;

  /**
   * Is this instant equal to the instant passed in comparing solely by time.
   */
  isEqual(dt: DateTime | null): boolean;

  /**
   * Is this instant equal to the instant passed in comparing solely by time.
   */
  isEqual(instant: number): boolean;

  /**
   * Compare this datetime against the passed value, solely by time.
   */
  compareTo(other: DateTime): number;

  /**
   * Compare this datetime against the passed instant, solely by time (millisecond resolution).
   */
  compareTo(instant: number): number;

  /**
   * Get the day of month (calendar day).
   */
  get dayOfMonth(): number;

  /**
   * Get the day of week (1 is Monday, 7 is Sunday).
   */
  get dayOfWeek(): number;

  /**
   * Get the day of year.
   */
  get dayOfYear(): number;

  /**
   * Get the hour of day.
   */
  get hourOfDay(): number;

  /**
   * Get the milliseconds of day.
   */
  get millisOfDay(): number;

  /**
   * Get the milliseconds of second.
   */
  get millisOfSecond(): number;

  /**
   * Get the minute of day.
   */
  get minuteOfDay(): number;

  /**
   * Get the minute of hour.
   */
  get minuteOfHour(): number;

  /**
   * Get the month of year.
   */
  get monthOfYear(): number;

  /**
   * Get the second of day.
   */
  get secondOfDay(): number;

  /**
   * Get the second of minute.
   */
  get secondOfMinute(): number;

  /**
   * Get the year (four-digit year).
   */
  get year(): number;

  /**
   * Get the year of century (two digit year).
   */
  get yearOfCentury(): number;

  /**
   * Get the microseconds of second.
   */
  get microsOfSecond(): number;

  /**
   * Get the nanoseconds of second.
   */
  get nanosOfSecond(): number;

  /**
   * Get the nanoseconds of day.
   */
  get nanosOfDay(): number;

  /**
   * Get the microseconds of day.
   */
  get microsOfDay(): number;

  /**
   * Returns a copy of this datetime minus the specified number of days.
   */
  minusDays(days: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of hours.
   */
  minusHours(hours: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of microseconds.
   */
  minusMicros(micros: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of milliseconds.
   */
  minusMillis(millis: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of minutes.
   */
  minusMinutes(minutes: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of months.
   */
  minusMonths(months: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of nanoseconds.
   */
  minusNanos(nanoseconds: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of seconds.
   */
  minusSeconds(seconds: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of weeks.
   */
  minusWeeks(weeks: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of years.
   */
  minusYears(years: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the duration (in microseconds).
   */
  minusDuration(d: Duration): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of logical intervals.
   */
  minusIntervals(interval: string | null, count: number): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified logical time period.
   */
  minusPeriod(period: Period | null): DateTime | null;

  /**
   * Returns a copy of this datetime minus the specified number of temporal units.
   */
  minusUnits(unit: string | null, count: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of days.
   */
  plusDays(days: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of hours.
   */
  plusHours(hours: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of microseconds.
   */
  plusMicros(micros: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of milliseconds.
   */
  plusMillis(millis: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of minutes.
   */
  plusMinutes(minutes: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of months.
   */
  plusMonths(months: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of nanoseconds.
   */
  plusNanos(nanos: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of seconds.
   */
  plusSeconds(seconds: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of weeks.
   */
  plusWeeks(weeks: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of years.
   */
  plusYears(years: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the duration (in microseconds).
   */
  plusDuration(d: Duration): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of logical intervals.
   */
  plusIntervals(interval: string, count: number): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified logical time period.
   */
  plusPeriod(period: Period | null): DateTime | null;

  /**
   * Returns a copy of this datetime plus the specified number of temporal units.
   */
  plusUnits(unit: string, count: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the specified date, retaining the time fields.
   */
  withDate(year: number, monthOfYear: number, dayOfMonth: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the day of month updated.
   */
  withDayOfMonth(dayOfMonth: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the day of week updated.
   */
  withDayOfWeek(dayOfWeek: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the day of year updated.
   */
  withDayOfYear(dayOfYear: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the hour of day updated.
   */
  withHourOfDay(hour: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the microseconds of second updated.
   */
  withMicrosOfSecond(micros: number): DateTime | null;

  /**
   * Returns a copy of this datetime with different (total) millis.
   */
  withMillis(newMillis: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the milliseconds of day updated.
   */
  withMillisOfDay(millis: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the milliseconds of second updated.
   */
  withMillisOfSecond(millis: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the minute of hour updated.
   */
  withMinuteOfHour(minute: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the month of year updated.
   */
  withMonthOfYear(monthOfYear: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the nanoseconds of second updated.
   */
  withNanosOfSecond(nanos: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the second of minute updated.
   */
  withSecondOfMinute(second: number): DateTime | null;

  /**
   * Returns a copy of this datetime with sub-second precision not greater than the specified number of digits.
   * The precision jumps are limited to fixed values supported by actual implementations, but at least 0 (second),
   * 3 (millisecond), 6 (microsecond) and 9 (nanosecond) digits are supported.
   *
   * @param precision
   *        sub-second precision in decimal digits [0..9]
   */
  withSubSecondPrecision(precision: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the specified time, retaining the date fields.
   */
  withTime(hourOfDay: number, minuteOfHour: number, secondOfMinute: number, millisOfSecond: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the time set to the start of the day.
   */
  withTimeAtStartOfDay(): DateTime | null;

  /**
   * Returns a copy of this datetime with the year updated.
   */
  withYear(year: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the year of century updated.
   */
  withYearOfCentury(yearOfCentury: number): DateTime | null;

  /**
   * Returns a copy of this datetime with the Universal Coordinated Time (UTC) zone, preserving the instant.
   */
  withZoneUtc(): DateTime | null;

  /**
   * Returns a copy of this datetime with a different time zone, preserving the instant.
   * However, if the datetime is without time zone, the instant is adjusted to return the same
   * logical time in the target time zone.
   *
   * @see #withZoneOffsetRetainFields
   */
  withZoneOffset(offsetMinutes: number | null): DateTime | null;

  /**
   * Returns a copy of this datetime with a different time zone, preserving the field values.
   * Note that if the new zone has a different offset than the old (or has no zone), the instant
   * will be adjusted to return the same logical time in the target time zone.
   *
   * @see #withZoneOffset
   */
  withZoneOffsetRetainFields(offsetMinutes: number | null): DateTime | null;

  /**
   * Returns a copy of this datetime without a time zone, but with the same (logical) fields.
   * If the original time was not already in UTC, the instant is adjusted to UTC
   * (a la withZoneRetainFields).
   */
  withoutZone(): DateTime | null;

  /**
   * Returns a copy of this datetime without milliseconds (or any fractional second).
   */
  withoutMillis(): DateTime | null;

  /**
   * Get whether or not there is a time zone associated with this date/time.
   * This will be false for logical date/times (which are disconnected from any offset).
   */
  hasZone(): boolean;

  /**
   * Return the offset of the time zone in milliseconds from UTC.
   * For date/times without a zone, this will also be zero (not meaningful).
   */
  zoneOffsetMillis(): number;

  /**
   * Return the offset of the time zone in minutes from UTC.
   * For date/times without a zone, this will also be zero (not meaningful).
   */
  zoneOffsetMinutes(): number;

  /**
   * Format the date/time without fractional seconds (truncating down to the second).
   *
   * @see #toString()
   */
  toStringNoMillis(): string | null;

  /**
   * Format the date/time without fractional seconds, if the value is an even second.
   *
   * @see #toString()
   */
  toStringNo0Millis(): string | null;

  /**
   * Format the date/time without the time component, if it's at midnight (`T00:00:00`).
   *
   * @see #toString()
   */
  toStringNo0Time(): string | null;

  /**
   * Render the datetime using a custom format.
   * The pattern syntax is mostly compatible with java.text.SimpleDateFormat: time zone names cannot be parsed and a
   * few more symbols are supported. All ASCII letters are reserved as pattern letters, which are defined as follows:
   *
   * | Symbol | Meaning | Presentation | Examples |
   * |:------:|:----------------------------|:-------------|:-----------------------------------|
   * | `G` | era | text | AD |
   * | `C` | century of era (>=0) | number | 20 |
   * | `Y` | year of era (>=0) | year | 1996 |
   * | `x` | weekyear | year | 1996 |
   * | `w` | week of weekyear | number | 27 |
   * | `e` | day of week | number | 2 |
   * | `E` | day of week | text | Tuesday; Tue |
   * | `y` | year | year | 1996 |
   * | `D` | day of year | number | 189 |
   * | `M` | month of year | month | July; Jul; 07 |
   * | `d` | day of month | number | 10 |
   * | `a` | halfday of day | text | PM |
   * | `K` | hour of halfday (0-11) | number | 0 |
   * | `h` | clockhour of halfday (1-12) | number | 12 |
   * | `H` | hour of day (0-23) | number | 0 |
   * | `k` | clockhour of day (1-24) | number | 24 |
   * | `m` | minute of hour | number | 30 |
   * | `s` | second of minute | number | 55 |
   * | `S` | fraction of second | number | 978 |
   * | `z` | time zone | text | Pacific Standard Time; PST |
   * | `Z` | time zone offset/id | zone | -0800; -08:00; America/Los_Angeles |
   * | `'` | escape for text | delimiter | |
   * | `''` | single quote | literal | ' |
   *
   * The count of pattern letters determines the format:
   * - Text: If the number of pattern letters is 4 or more, the full form is used; otherwise a short or abbreviated
   * form is used if available.
   * - Number: The minimum number of digits. Shorter numbers are zero-padded to this amount.
   * - Year: Numeric presentation for year and weekyear fields are handled specially. For example, if the count of
   * `y` is 2, the year will be displayed as the zero-based year of the century, which is two digits.
   * - Month: 3 or over, use text, otherwise use number.
   * - Zone: `Z` outputs offset without a colon, `ZZ` outputs the offset with a colon, `ZZZ` or more outputs the
   * zone id.
   *
   *
   * Any characters in the pattern that are not in the ranges of [`a`..`z`] and [`A`..`Z`] will be treated as quoted
   * text. For instance, characters like `:`, `.`, ` `, `#` and `?` will appear in the resulting text even if they
   * are not embraced within single quotes.
   */
  format(format: string | null): string | null;

  /**
   * Format as a date in "Internet Message Format" (RFC 5322). For example: "Wed, 21 Oct 2015 07:28:00 GMT".
   *
   * @see https://www.rfc-editor.org/rfc/rfc5322.html#section-3.3
   */
  toRfc5322(forceGmt?: boolean): string | null;

  /**
   * Get the number of days in the month of this date.
   */
  daysInCurrentMonth(): number;

  /**
   * Get the number of days in the year of this date.
   */
  daysInCurrentYear(): number;

  /**
   * Return a new DateTime with the time portion set to zero (midnight of the day).
   */
  toDateMidnight(): DateTime | null;

  /**
   * Get the date time as a java.util.Date.
   */
  toDate(): any;

  /**
   * Get the date time as a java.util.GregorianCalendar, assigning exactly the same instant.
   */
  toGregorianCalendar(): any;

  /**
   * Get the date time as a Joda DateTime instance. Note that since Joda does not support "no time zone", values
   * without a zone will have the UTC zone in the Joda instance.
   *
   * @see http://joda-time.sourceforge.net/apidocs/org/joda/time/DateTime.html
   */
  toJodaDateTime(): DateTime | null;

  /**
   * Get the inherent sub-second precision of this DateTime instance in decimal digits. For example, 0 indicates only
   * seconds and 3 indicates milliseconds.
   */
  subSecondPrecision(): number;

  /**
   * Gets a hash code for the instant that is compatible with the equals method.
   */
  hashCode(): number;

  /**
   * Compares this object with the specified object for equality based on the millisecond instant and the zone.
   */
  equals(o: any): boolean;

  /**
   * Return the C3 type corresponding most closely to this value.
   *
   * @see #valueType()
   */
  instanceType(): Type | null;

  /**
   * Get the number of days within a specified month (1-based).
   *
   * @param year
   *        for leap year
   * @param month
   *        1-based month number
   */
  static daysInMonth(year: number, month: number): number;

  /**
   * Get the number of days within a specified year (4-digit).
   *
   * @param year
   *        for leap year
   */
  static daysInYear(year: number): number;

  /**
   * Whether or not the specified year is a leap year (extra day in February).
   */
  static isLeapYear(year: number): boolean;

  /**
   * Constructs an instance from datetime field values in the default (local) time zone.
   *
   * @param year
   *        year field (4-digit)
   * @param monthOfYear
   *        month field (1-based)
   * @param dayOfMonth
   *        day field (1-based)
   * @param hourOfDay
   *        hour field (24)
   * @param minuteOfHour
   *        minute field
   */
  static fromMinute(year: number, monthOfYear: number, dayOfMonth: number, hourOfDay: number, minuteOfHour: number): DateTime | null;

  /**
   * Constructs an instance from datetime field values in the default (local) time zone.
   *
   * @param year
   *        year field (4-digit)
   * @param monthOfYear
   *        month field (1-based)
   * @param dayOfMonth
   *        day field (1-based)
   * @param hourOfDay
   *        hour field (24)
   * @param minuteOfHour
   *        minute field
   * @param secondOfMinute
   *        second field
   */
  static fromSecond(year: number, monthOfYear: number, dayOfMonth: number, hourOfDay: number, minuteOfHour: number, secondOfMinute: number): DateTime | null;

  /**
   * Constructs an instance from datetime field values in the default (local) time zone.
   *
   * @param year
   *        year field (4-digit)
   * @param monthOfYear
   *        month field (1-based)
   * @param dayOfMonth
   *        day field (1-based)
   * @param hourOfDay
   *        hour field (24)
   * @param minuteOfHour
   *        minute field
   * @param secondOfMinute
   *        second field
   * @param millisOfSecond
   *        millisecond field
   */
  static fromMillis(year: number, monthOfYear: number, dayOfMonth: number, hourOfDay: number, minuteOfHour: number, secondOfMinute: number, millisOfSecond: number): DateTime | null;

  /**
   * Constructs an instance from datetime field values with the specified time zone. If offsetMinutes is null, then
   * the result is without a time zone.
   *
   * @param year
   *        year field (4-digit)
   * @param monthOfYear
   *        month field (1-based)
   * @param dayOfMonth
   *        day field (1-based)
   * @param hourOfDay
   *        hour field (24)
   * @param minuteOfHour
   *        minute field
   * @param secondOfMinute
   *        second field
   * @param millisOfSecond
   *        millisecond field
   * @param offsetMinutes
   *        time zone offset or null
   */
  static fromMillis(year: number, monthOfYear: number, dayOfMonth: number, hourOfDay: number, minuteOfHour: number, secondOfMinute: number, millisOfSecond: number, offsetMinutes: number | null): DateTime | null;

  /**
   * Constructs an instance set to the milliseconds from 1970-01-01T00:00:00Z in the default (local) time zone. This
   * creates a DateTime with a sub-second precision of 3 (milliseconds) at most.
   */
  static fromMillis(instant: number): DateTime | null;

  /**
   * Constructs an instance from a Java millisecond value with specified time zone. If the time zone is null, then the
   * result is without a time zone. This creates a DateTime with a sub-second precision of 3 (milliseconds) at most.
   */
  static fromMillis(instant: number, offsetMinutes: number | null): DateTime | null;

  /**
   * Constructs an instance from a Java millisecond value for UTC. This creates a DateTime with a sub-second precision
   * of 3 (milliseconds).
   */
  static fromMillisUtc(instant: number): DateTime | null;

  /**
   * Constructs an instance from a Java millisecond value without a time zone. This creates a DateTime with a
   * sub-second precision of 3 (milliseconds) at most.
   */
  static fromMillisNoZone(instant: number): DateTime | null;

  /**
   * Constructs an instance set to the nanoseconds from 1970-01-01T00:00:00Z in the default (local) time zone. This
   * creates a DateTime with a sub-second precision of 9 (nanoseconds) at most.
   */
  static fromNanos(instant: number): DateTime | null;

  /**
   * Constructs an instance from a Java nanosecond value for UTC. This creates a DateTime with a sub-second precision
   * of 9 (nanoseconds).
   */
  static fromNanosUtc(instant: number): DateTime | null;

  /**
   * Constructs an instance from a Java nanosecond value without a time zone. This creates a DateTime with a
   * sub-second precision of 9 (nanoseconds) at most.
   */
  static fromNanosNoZone(instant: number): DateTime | null;

  /**
   * Constructs an instance set to the microseconds from 1970-01-01T00:00:00Z in the default (local) time zone. This
   * creates a DateTime with a sub-second precision of 6 (microseconds) at most.
   */
  static fromMicros(instant: number): DateTime | null;

  /**
   * Constructs an instance from a Java microsecond value for UTC. This creates a DateTime with a sub-second precision
   * of 6 (microseconds).
   */
  static fromMicrosUtc(instant: number): DateTime | null;

  /**
   * Constructs an instance from a Java microsecond value without a time zone. This creates a DateTime with a
   * sub-second precision of 6 (microseconds) at most.
   */
  static fromMicrosNoZone(instant: number): DateTime | null;

  /**
   * Constructs a datetime from the numeric value, representing the epoch millisecond (1970-01-01T00:00:00Z).
   *
   * @deprecated
   *             use {@link #fromMillis}
   * @param num
   *        number to convert
   * @param failIfInvalid
   *        if true, throw an error instead of null
   * @param for_
   *        context for the error message
   */
  static fromNumber(num: number | null, failIfInvalid?: boolean, for_?: string | null): DateTime | null;

  /**
   * Parses a DateTime from the specified string, relative to the specified datetime.
   *
   * Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
   * `"-30days"` indicates thirty days before the specified instant (at the same time of day). They can also
   * be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
   * specified instant, rounded down to midnight.
   *
   *
   * This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
   * (it will just return `null`).
   *
   * @param str
   *        string to parse
   * @param from
   *        base instant for relative times, or "now" if null
   * @param failIfInvalid
   *        throw error instead of returning null
   * @param for_
   *        used in error message
   * @return datetime value
   */
  static fromRelative(str: string | null, from?: DateTime | null, failIfInvalid?: boolean, for_?: string | null): DateTime | null;

  /**
   * Obtains a DateTime set to the specified millisecond time in the default (local) time zone.
   */
  static fromDate(dt: any): DateTime | null;

  /**
   * Obtains a DateTime set to the specified millisecond time in the default (local) time zone.
   */
  static fromCalendar(cal: any): DateTime | null;

  /**
   * Obtains a DateTime set to the current system millisecond time in the default (local) time zone.
   */
  static nowWithMillis(): DateTime | null;

  /**
   * Obtains a DateTime set to the current UTC millisecond with no time zone.
   */
  static nowWithMillisNoZone(): DateTime | null;

  /**
   * Obtains a DateTime set to the current system time (second resolution) in the default (local) time zone.
   */
  static now(): DateTime | null;

  /**
   * Obtains a DateTime set to the UTC time (second resolution) no time zone.
   */
  static nowNoZone(): DateTime | null;

  /**
   * Parses a DateTime from the specified string, using a specific date format.
   *
   * @param str
   *        string to parse
   * @param format
   *        expected format (see #format)
   * @param failIfInvalid
   *        if true, throw an error instead of returning null
   * @param for_
   *        context for error message
   * @see DateTimeFormat
   */
  static parse(str: string | null, format: string | null, failIfInvalid?: boolean, for_?: λSupplier<string | null> | null): DateTime | null;

  /**
   * Parses a DateTime from the specified string, using a specific date format.
   *
   * @param str
   *        string to parse
   * @param format
   *        expected format (see #format)
   * @param failIfInvalid
   *        if true, throw an error instead of returning null
   * @see DateTimeFormat
   */
  static parse(str: string | null, format: string | null, failIfInvalid?: boolean): DateTime | null;

  /**
   * Parses a DateTime from the specified string, using a specific date format. If no time zone offset is specified,
   * the returned string is in the default (local) time zone.
   *
   * @param str
   *        string to parse
   * @param format
   *        expected format (see #format)
   * @param failIfInvalid
   *        if true, throw an error instead of returning null
   * @param for_
   *        context for error message
   * @see #parse
   * @see DateTimeFormat
   */
  static parseLocal(str: string | null, format: string | null, failIfInvalid?: boolean, for_?: λSupplier<string | null> | null): DateTime | null;

  /**
   * Parses a DateTime from the specified string, using a specific date format. If no time zone offset is specified,
   * the returned string is in the default (local) time zone.
   *
   * @param str
   *        string to parse
   * @param format
   *        expected format (see #format)
   * @param failIfInvalid
   *        if true, throw an error instead of returning null
   * @see #parse
   * @see DateTimeFormat
   */
  static parseLocal(str: string | null, format: string | null, failIfInvalid?: boolean): DateTime | null;

  /**
   * Get the maximum of two datetime values, handling nulls.
   */
  static max(a: DateTime | null, b: DateTime | null): DateTime | null;

  /**
   * Get the minimum of two datetime values, handling nulls.
   */
  static min(a: DateTime | null, b: DateTime | null): DateTime | null;

  /**
   * Get the difference between datetime values in seconds. This may be negative if the first time is after the
   * second.
   */
  static deltaSeconds(a: DateTime, b: DateTime): number;

  /**
   * Get the difference between datetime values in milliseconds. This may be negative if the first time is after the
   * second.
   */
  static deltaMillis(a: DateTime, b: DateTime): number;

  /**
   * Get the difference between datetime values in microseconds. This may be negative if the first time is after the
   * second.
   */
  static deltaMicros(a: DateTime, b: DateTime): number;

  /**
   * Get the difference between datetime values in nanoseconds. This may be negative if the first time is after the
   * second.
   */
  static deltaNanos(a: DateTime, b: DateTime): number;

  _parsed(): any;
}


interface λSupplier<R> {
  (): R
}
