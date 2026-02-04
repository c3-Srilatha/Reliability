#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TimeZone import TimeZone
from c3.platform.ValueType import ValueType
from c3.platform.Type import Type
from c3.platform.Pkg import Pkg
from c3.platform.Period import Period
from c3.platform.Duration import Duration

# Python definitions for the C3 type DateTime


class DateTime(StringSerializable, Instance, Value):
    """
    Our DateTime interface is modeled after the Joda ReadableDateTime, plus includes support for additional semantics
    related to our own more explicit model of time zones (offsets). In particular, a null time zone generally means the
    date/time is detached from any time zone, rather than using the default (local) time zone.
    
    There are possible features which each implementation may support:
    
     - extended year range: years from -9999-9999 instead of just 1970-2038
     - time zone offset: arbitrary, UTC only or no time zone
     - millisecond precision
     - microsecond precision
     - nanosecond precision
    
    Like all C3 values, datetimes are immutable so all methods that would change the value return a new instance.
    However, if the current value satisfies the requirements, it will be returned instead. This means that methods
    documented as "returns a copy" may actually return the _same_ instance.
    
    @remarks this represents a made instance of DateTime
    """
    def __init__(self) -> None: ...

    def toString(self) -> Union[str]:
    """
    Format the full date/time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date format:
    "YYYY-MM-DDThh:mm:ss[.SSS]". If the implementation does not represent fractional seconds, they are omitted.
    Note fractional seconds may be 0, 3, 6 or 9 digits long, depending on the underlying precision.
    
    If a time zone is present, append it to the string as a "Z" for UTC and as `+hh:mm` (or `-`) for other zone
    offsets.
    
     - `2018-05-04T12:15:45Z`: `utc datetime` (point in time UTC)
     - `2018-05-04T12:15:45-07:00`: `datetime` (point in time PDT, 7h later than above)
     - `2018-05-04T12:15:45.678`: `datetime no tz with millis` (logical date/time with millisecond precision)
    """
        ...
    @overload
    @classmethod
    def fromString(cls, s: str) -> Union[DateTime]:
    """
    Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
    returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
    current instant.
    
    Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
    `"-30days"` indicates thirty days before the current instant (at the same time of day). They can also
    be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
    current instant, rounded down to midnight.
    
    By default, dates are produced with the sub-second precision implied by the value.
    
    
    This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
    (it will just return `null`).
    
    @see Period
    """
        ...
    @overload
    @classmethod
    def fromString(cls, str: str, maxPrecision: int, failIfInvalid: bool=None, for_: str=None) -> Union[DateTime]:
    """
    Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
    returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
    current instant.
    
    Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
    `"-30days"` indicates thirty days before the current instant (at the same time of day). They can also
    be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
    current instant, rounded down to midnight.
    
    The date time instance created will not be categorically more precise than the default 3 digits (milliseconds).
    To create a value with a different precision, use the overload that takes the precision as an argument.
    
    
    This overload will only throw an error if `failIfInvalid` is true.
    
    @param str
           string to parse
    @param maxPrecision
           maximum sub-second precision in digits [0..9]
    @param failIfInvalid
           if true, throw an error instead of null
    @param for_
           context for the error message
    """
        ...
    @overload
    @classmethod
    def fromString(cls, str: str, maxPrecision: int) -> Union[DateTime]:
    """
    Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
    returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
    current instant.
    
    Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
    `"-30days"` indicates thirty days before the current instant (at the same time of day). They can also
    be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
    current instant, rounded down to midnight.
    
    The date time instance created will not be categorically more precise than the maxPrecision argument. For example,
    if no sub-second precision is desired, passing 0 (digits) will result in a datetime value with only whole seconds.
    The precision jumps are limited to fixed values supported by actual implementations, but at least 0 (second),
    3 (millisecond), 6 (microsecond) and 9 (nanosecond) digits are supported.
    
    
    This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
    (it will just return `null`).
    
    @param str
           string to parse
    @param maxPrecision
           maximum sub-second precision in digits [0..9]
    @see Period
    """
        ...
    @overload
    @classmethod
    def fromString(cls, str: str, from_: datetime) -> Union[DateTime]:
    """
    Parses a DateTime from the specified string, using the ISO format. If no time zone offset is specified, the
    returned string is in NO time zone. If it starts with a plus or minus, it indicates a period relative to the
    specified from argument.
    
    Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
    `"-30days"` indicates thirty days before the specified instant (at the same time of day). They can also
    be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
    specified instant, rounded down to midnight.
    
    
    This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
    (it will just return `null`).
    
    @param str
           string to parse
    @param from
           base instant for relative times
    @see #fromRelative
    """
        ...
    @classmethod
    def make(cls, s: str) -> Union[DateTime]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    def valueType(self) -> Union[ValueType]:
    """
    Return the value type corresponding most closely to this value. Note that this will be a value type which
    handles this particular value, not necessarily the one from which it was created. In particular, the precision
    of the type will be sufficient to support the sub-second precision of this instance.
    """
        ...
    @classmethod
    def valueTypeOf(cls, type: Type, failIfNot: bool=None) -> Union[ValueType]:
    """
    Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
    considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
    
    @see ValueType#instanceType
    """
        ...
    @overload
    def toNative(self, doNotCopy: bool=None) -> Union[Any]:
        ...
    @overload
    def toNative(self) -> Union[Any]:
        ...
    @overload
    @classmethod
    def myType(cls) -> Union[Type]:
        ...
    @overload
    @classmethod
    def myType(cls, pkg: Pkg) -> Union[Type]:
        ...
    def millis(self) -> int:
    """
    Get the value as the number of milliseconds since the epoch, 1970-01-01T00:00:00Z.
    """
        ...
    def seconds(self) -> int:
    """
    Get the value as the number of seconds since the epoch, 1970-01-01T00:00:00Z.
    """
        ...
    def micros(self) -> int:
    """
    Get the value as the number of microseconds since the epoch, 1970-01-01T00:00:00Z.
    """
        ...
    def nanos(self) -> Union[float]:
    """
    Get the value as the number of nanoseconds since the epoch, 1970-01-01T00:00:00Z.
    """
        ...
    def zone(self) -> Union[TimeZone]:
    """
    Gets the time zone (if the datetime has one).
    """
        ...
    @overload
    def isAfter(self, dt: datetime) -> bool:
    """
    Is this instant after the instant passed in comparing solely by time. If the argument is `null`, compares to now.
    """
        ...
    @overload
    def isAfter(self, instant: int) -> bool:
    """
    Is this instant after the instant passed in comparing solely by time.
    """
        ...
    def isAfterNow(self) -> bool:
    """
    Is this instant after the current instant comparing solely by time.
    """
        ...
    @overload
    def isBefore(self, dt: datetime) -> bool:
    """
    Is this instant before the instant passed in comparing solely by time. If the argument is `null`, compares to now.
    """
        ...
    @overload
    def isBefore(self, instant: int) -> bool:
    """
    Is this instant before the instant passed in comparing solely by time.
    """
        ...
    def isBeforeNow(self) -> bool:
    """
    Is this instant before the current instant comparing solely by time.
    """
        ...
    @overload
    def isEqual(self, dt: datetime) -> bool:
    """
    Is this instant equal to the instant passed in comparing solely by time.
    """
        ...
    @overload
    def isEqual(self, instant: int) -> bool:
    """
    Is this instant equal to the instant passed in comparing solely by time.
    """
        ...
    @overload
    def compareTo(self, other: datetime) -> int:
    """
    Compare this datetime against the passed value, solely by time.
    """
        ...
    @overload
    def compareTo(self, instant: int) -> int:
    """
    Compare this datetime against the passed instant, solely by time (millisecond resolution).
    """
        ...
    def dayOfMonth(self) -> int:
    """
    Get the day of month (calendar day).
    """
        ...
    def dayOfWeek(self) -> int:
    """
    Get the day of week (1 is Monday, 7 is Sunday).
    """
        ...
    def dayOfYear(self) -> int:
    """
    Get the day of year.
    """
        ...
    def hourOfDay(self) -> int:
    """
    Get the hour of day.
    """
        ...
    def millisOfDay(self) -> int:
    """
    Get the milliseconds of day.
    """
        ...
    def millisOfSecond(self) -> int:
    """
    Get the milliseconds of second.
    """
        ...
    def minuteOfDay(self) -> int:
    """
    Get the minute of day.
    """
        ...
    def minuteOfHour(self) -> int:
    """
    Get the minute of hour.
    """
        ...
    def monthOfYear(self) -> int:
    """
    Get the month of year.
    """
        ...
    def secondOfDay(self) -> int:
    """
    Get the second of day.
    """
        ...
    def secondOfMinute(self) -> int:
    """
    Get the second of minute.
    """
        ...
    def year(self) -> int:
    """
    Get the year (four-digit year).
    """
        ...
    def yearOfCentury(self) -> int:
    """
    Get the year of century (two digit year).
    """
        ...
    def microsOfSecond(self) -> int:
    """
    Get the microseconds of second.
    """
        ...
    def nanosOfSecond(self) -> int:
    """
    Get the nanoseconds of second.
    """
        ...
    def nanosOfDay(self) -> int:
    """
    Get the nanoseconds of day.
    """
        ...
    def microsOfDay(self) -> int:
    """
    Get the microseconds of day.
    """
        ...
    def minusDays(self, days: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of days.
    """
        ...
    def minusHours(self, hours: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of hours.
    """
        ...
    def minusMicros(self, micros: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of microseconds.
    """
        ...
    def minusMillis(self, millis: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of milliseconds.
    """
        ...
    def minusMinutes(self, minutes: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of minutes.
    """
        ...
    def minusMonths(self, months: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of months.
    """
        ...
    def minusNanos(self, nanoseconds: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of nanoseconds.
    """
        ...
    def minusSeconds(self, seconds: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of seconds.
    """
        ...
    def minusWeeks(self, weeks: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of weeks.
    """
        ...
    def minusYears(self, years: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of years.
    """
        ...
    def minusDuration(self, d: Duration) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the duration (in microseconds).
    """
        ...
    def minusIntervals(self, interval: str, count: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of logical intervals.
    """
        ...
    def minusPeriod(self, period: Period) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified logical time period.
    """
        ...
    def minusUnits(self, unit: str, count: int) -> Union[datetime]:
    """
    Returns a copy of this datetime minus the specified number of temporal units.
    """
        ...
    def plusDays(self, days: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of days.
    """
        ...
    def plusHours(self, hours: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of hours.
    """
        ...
    def plusMicros(self, micros: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of microseconds.
    """
        ...
    def plusMillis(self, millis: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of milliseconds.
    """
        ...
    def plusMinutes(self, minutes: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of minutes.
    """
        ...
    def plusMonths(self, months: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of months.
    """
        ...
    def plusNanos(self, nanos: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of nanoseconds.
    """
        ...
    def plusSeconds(self, seconds: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of seconds.
    """
        ...
    def plusWeeks(self, weeks: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of weeks.
    """
        ...
    def plusYears(self, years: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of years.
    """
        ...
    def plusDuration(self, d: Duration) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the duration (in microseconds).
    """
        ...
    def plusIntervals(self, interval: str, count: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of logical intervals.
    """
        ...
    def plusPeriod(self, period: Period) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified logical time period.
    """
        ...
    def plusUnits(self, unit: str, count: int) -> Union[datetime]:
    """
    Returns a copy of this datetime plus the specified number of temporal units.
    """
        ...
    def withDate(self, year: int, monthOfYear: int, dayOfMonth: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the specified date, retaining the time fields.
    """
        ...
    def withDayOfMonth(self, dayOfMonth: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the day of month updated.
    """
        ...
    def withDayOfWeek(self, dayOfWeek: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the day of week updated.
    """
        ...
    def withDayOfYear(self, dayOfYear: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the day of year updated.
    """
        ...
    def withHourOfDay(self, hour: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the hour of day updated.
    """
        ...
    def withMicrosOfSecond(self, micros: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the microseconds of second updated.
    """
        ...
    def withMillis(self, newMillis: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with different (total) millis.
    """
        ...
    def withMillisOfDay(self, millis: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the milliseconds of day updated.
    """
        ...
    def withMillisOfSecond(self, millis: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the milliseconds of second updated.
    """
        ...
    def withMinuteOfHour(self, minute: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the minute of hour updated.
    """
        ...
    def withMonthOfYear(self, monthOfYear: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the month of year updated.
    """
        ...
    def withNanosOfSecond(self, nanos: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the nanoseconds of second updated.
    """
        ...
    def withSecondOfMinute(self, second: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the second of minute updated.
    """
        ...
    def withSubSecondPrecision(self, precision: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with sub-second precision not greater than the specified number of digits.
    The precision jumps are limited to fixed values supported by actual implementations, but at least 0 (second),
    3 (millisecond), 6 (microsecond) and 9 (nanosecond) digits are supported.
    
    @param precision
           sub-second precision in decimal digits [0..9]
    """
        ...
    def withTime(self, hourOfDay: int, minuteOfHour: int, secondOfMinute: int, millisOfSecond: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the specified time, retaining the date fields.
    """
        ...
    def withTimeAtStartOfDay(self) -> Union[datetime]:
    """
    Returns a copy of this datetime with the time set to the start of the day.
    """
        ...
    def withYear(self, year: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the year updated.
    """
        ...
    def withYearOfCentury(self, yearOfCentury: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with the year of century updated.
    """
        ...
    def withZoneUtc(self) -> Union[datetime]:
    """
    Returns a copy of this datetime with the Universal Coordinated Time (UTC) zone, preserving the instant.
    """
        ...
    def withZoneOffset(self, offsetMinutes: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with a different time zone, preserving the instant.
    However, if the datetime is without time zone, the instant is adjusted to return the same
    logical time in the target time zone.
    
    @see #withZoneOffsetRetainFields
    """
        ...
    def withZoneOffsetRetainFields(self, offsetMinutes: int) -> Union[datetime]:
    """
    Returns a copy of this datetime with a different time zone, preserving the field values.
    Note that if the new zone has a different offset than the old (or has no zone), the instant
    will be adjusted to return the same logical time in the target time zone.
    
    @see #withZoneOffset
    """
        ...
    def withoutZone(self) -> Union[datetime]:
    """
    Returns a copy of this datetime without a time zone, but with the same (logical) fields.
    If the original time was not already in UTC, the instant is adjusted to UTC
    (a la withZoneRetainFields).
    """
        ...
    def withoutMillis(self) -> Union[datetime]:
    """
    Returns a copy of this datetime without milliseconds (or any fractional second).
    """
        ...
    def hasZone(self) -> bool:
    """
    Get whether or not there is a time zone associated with this date/time.
    This will be false for logical date/times (which are disconnected from any offset).
    """
        ...
    def zoneOffsetMillis(self) -> int:
    """
    Return the offset of the time zone in milliseconds from UTC.
    For date/times without a zone, this will also be zero (not meaningful).
    """
        ...
    def zoneOffsetMinutes(self) -> int:
    """
    Return the offset of the time zone in minutes from UTC.
    For date/times without a zone, this will also be zero (not meaningful).
    """
        ...
    def toStringNoMillis(self) -> Union[str]:
    """
    Format the date/time without fractional seconds (truncating down to the second).
    
    @see #toString()
    """
        ...
    def toStringNo0Millis(self) -> Union[str]:
    """
    Format the date/time without fractional seconds, if the value is an even second.
    
    @see #toString()
    """
        ...
    def toStringNo0Time(self) -> Union[str]:
    """
    Format the date/time without the time component, if it's at midnight (`T00:00:00`).
    
    @see #toString()
    """
        ...
    def format(self, format: str) -> Union[str]:
    """
    Render the datetime using a custom format.
    The pattern syntax is mostly compatible with java.text.SimpleDateFormat: time zone names cannot be parsed and a
    few more symbols are supported. All ASCII letters are reserved as pattern letters, which are defined as follows:
    
    | Symbol | Meaning | Presentation | Examples |
    |:------:|:----------------------------|:-------------|:-----------------------------------|
    | `G` | era | text | AD |
    | `C` | century of era (>=0) | number | 20 |
    | `Y` | year of era (>=0) | year | 1996 |
    | `x` | weekyear | year | 1996 |
    | `w` | week of weekyear | number | 27 |
    | `e` | day of week | number | 2 |
    | `E` | day of week | text | Tuesday; Tue |
    | `y` | year | year | 1996 |
    | `D` | day of year | number | 189 |
    | `M` | month of year | month | July; Jul; 07 |
    | `d` | day of month | number | 10 |
    | `a` | halfday of day | text | PM |
    | `K` | hour of halfday (0-11) | number | 0 |
    | `h` | clockhour of halfday (1-12) | number | 12 |
    | `H` | hour of day (0-23) | number | 0 |
    | `k` | clockhour of day (1-24) | number | 24 |
    | `m` | minute of hour | number | 30 |
    | `s` | second of minute | number | 55 |
    | `S` | fraction of second | number | 978 |
    | `z` | time zone | text | Pacific Standard Time; PST |
    | `Z` | time zone offset/id | zone | -0800; -08:00; America/Los_Angeles |
    | `'` | escape for text | delimiter | |
    | `''` | single quote | literal | ' |
    
    The count of pattern letters determines the format:
    - Text: If the number of pattern letters is 4 or more, the full form is used; otherwise a short or abbreviated
    form is used if available.
    - Number: The minimum number of digits. Shorter numbers are zero-padded to this amount.
    - Year: Numeric presentation for year and weekyear fields are handled specially. For example, if the count of
    `y` is 2, the year will be displayed as the zero-based year of the century, which is two digits.
    - Month: 3 or over, use text, otherwise use number.
    - Zone: `Z` outputs offset without a colon, `ZZ` outputs the offset with a colon, `ZZZ` or more outputs the
    zone id.
    
    
    Any characters in the pattern that are not in the ranges of [`a`..`z`] and [`A`..`Z`] will be treated as quoted
    text. For instance, characters like `:`, `.`, ` `, `#` and `?` will appear in the resulting text even if they
    are not embraced within single quotes.
    """
        ...
    def toRfc5322(self, forceGmt: bool=None) -> Union[str]:
    """
    Format as a date in "Internet Message Format" (RFC 5322). For example: "Wed, 21 Oct 2015 07:28:00 GMT".
    
    @see https://www.rfc-editor.org/rfc/rfc5322.html#section-3.3
    """
        ...
    def daysInCurrentMonth(self) -> int:
    """
    Get the number of days in the month of this date.
    """
        ...
    def daysInCurrentYear(self) -> int:
    """
    Get the number of days in the year of this date.
    """
        ...
    def toDateMidnight(self) -> Union[datetime]:
    """
    Return a new DateTime with the time portion set to zero (midnight of the day).
    """
        ...
    def toDate(self) -> Union[Any]:
    """
    Get the date time as a java.util.Date.
    """
        ...
    def toGregorianCalendar(self) -> Union[Any]:
    """
    Get the date time as a java.util.GregorianCalendar, assigning exactly the same instant.
    """
        ...
    def toJodaDateTime(self) -> Union[DateTime]:
    """
    Get the date time as a Joda DateTime instance. Note that since Joda does not support "no time zone", values
    without a zone will have the UTC zone in the Joda instance.
    
    @see http://joda-time.sourceforge.net/apidocs/org/joda/time/DateTime.html
    """
        ...
    def subSecondPrecision(self) -> int:
    """
    Get the inherent sub-second precision of this DateTime instance in decimal digits. For example, 0 indicates only
    seconds and 3 indicates milliseconds.
    """
        ...
    def hashCode(self) -> int:
    """
    Gets a hash code for the instant that is compatible with the equals method.
    """
        ...
    def equals(self, o: Any) -> bool:
    """
    Compares this object with the specified object for equality based on the millisecond instant and the zone.
    """
        ...
    def instanceType(self) -> Union[Type]:
    """
    Return the C3 type corresponding most closely to this value.
    
    @see #valueType()
    """
        ...
    @classmethod
    def daysInMonth(cls, year: int, month: int) -> int:
    """
    Get the number of days within a specified month (1-based).
    
    @param year
           for leap year
    @param month
           1-based month number
    """
        ...
    @classmethod
    def daysInYear(cls, year: int) -> int:
    """
    Get the number of days within a specified year (4-digit).
    
    @param year
           for leap year
    """
        ...
    @classmethod
    def isLeapYear(cls, year: int) -> bool:
    """
    Whether or not the specified year is a leap year (extra day in February).
    """
        ...
    @classmethod
    def fromMinute(cls, year: int, monthOfYear: int, dayOfMonth: int, hourOfDay: int, minuteOfHour: int) -> Union[datetime]:
    """
    Constructs an instance from datetime field values in the default (local) time zone.
    
    @param year
           year field (4-digit)
    @param monthOfYear
           month field (1-based)
    @param dayOfMonth
           day field (1-based)
    @param hourOfDay
           hour field (24)
    @param minuteOfHour
           minute field
    """
        ...
    @classmethod
    def fromSecond(cls, year: int, monthOfYear: int, dayOfMonth: int, hourOfDay: int, minuteOfHour: int, secondOfMinute: int) -> Union[datetime]:
    """
    Constructs an instance from datetime field values in the default (local) time zone.
    
    @param year
           year field (4-digit)
    @param monthOfYear
           month field (1-based)
    @param dayOfMonth
           day field (1-based)
    @param hourOfDay
           hour field (24)
    @param minuteOfHour
           minute field
    @param secondOfMinute
           second field
    """
        ...
    @overload
    @classmethod
    def fromMillis(cls, year: int, monthOfYear: int, dayOfMonth: int, hourOfDay: int, minuteOfHour: int, secondOfMinute: int, millisOfSecond: int) -> Union[datetime]:
    """
    Constructs an instance from datetime field values in the default (local) time zone.
    
    @param year
           year field (4-digit)
    @param monthOfYear
           month field (1-based)
    @param dayOfMonth
           day field (1-based)
    @param hourOfDay
           hour field (24)
    @param minuteOfHour
           minute field
    @param secondOfMinute
           second field
    @param millisOfSecond
           millisecond field
    """
        ...
    @overload
    @classmethod
    def fromMillis(cls, year: int, monthOfYear: int, dayOfMonth: int, hourOfDay: int, minuteOfHour: int, secondOfMinute: int, millisOfSecond: int, offsetMinutes: int) -> Union[datetime]:
    """
    Constructs an instance from datetime field values with the specified time zone. If offsetMinutes is null, then
    the result is without a time zone.
    
    @param year
           year field (4-digit)
    @param monthOfYear
           month field (1-based)
    @param dayOfMonth
           day field (1-based)
    @param hourOfDay
           hour field (24)
    @param minuteOfHour
           minute field
    @param secondOfMinute
           second field
    @param millisOfSecond
           millisecond field
    @param offsetMinutes
           time zone offset or null
    """
        ...
    @overload
    @classmethod
    def fromMillis(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance set to the milliseconds from 1970-01-01T00:00:00Z in the default (local) time zone. This
    creates a DateTime with a sub-second precision of 3 (milliseconds) at most.
    """
        ...
    @overload
    @classmethod
    def fromMillis(cls, instant: int, offsetMinutes: int) -> Union[datetime]:
    """
    Constructs an instance from a Java millisecond value with specified time zone. If the time zone is null, then the
    result is without a time zone. This creates a DateTime with a sub-second precision of 3 (milliseconds) at most.
    """
        ...
    @classmethod
    def fromMillisUtc(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance from a Java millisecond value for UTC. This creates a DateTime with a sub-second precision
    of 3 (milliseconds).
    """
        ...
    @classmethod
    def fromMillisNoZone(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance from a Java millisecond value without a time zone. This creates a DateTime with a
    sub-second precision of 3 (milliseconds) at most.
    """
        ...
    @classmethod
    def fromNanos(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance set to the nanoseconds from 1970-01-01T00:00:00Z in the default (local) time zone. This
    creates a DateTime with a sub-second precision of 9 (nanoseconds) at most.
    """
        ...
    @classmethod
    def fromNanosUtc(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance from a Java nanosecond value for UTC. This creates a DateTime with a sub-second precision
    of 9 (nanoseconds).
    """
        ...
    @classmethod
    def fromNanosNoZone(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance from a Java nanosecond value without a time zone. This creates a DateTime with a
    sub-second precision of 9 (nanoseconds) at most.
    """
        ...
    @classmethod
    def fromMicros(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance set to the microseconds from 1970-01-01T00:00:00Z in the default (local) time zone. This
    creates a DateTime with a sub-second precision of 6 (microseconds) at most.
    """
        ...
    @classmethod
    def fromMicrosUtc(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance from a Java microsecond value for UTC. This creates a DateTime with a sub-second precision
    of 6 (microseconds).
    """
        ...
    @classmethod
    def fromMicrosNoZone(cls, instant: int) -> Union[datetime]:
    """
    Constructs an instance from a Java microsecond value without a time zone. This creates a DateTime with a
    sub-second precision of 6 (microseconds) at most.
    """
        ...
    @classmethod
    def fromNumber(cls, num: float, failIfInvalid: bool=None, for_: str=None) -> Union[datetime]:
    """
    Constructs a datetime from the numeric value, representing the epoch millisecond (1970-01-01T00:00:00Z).
    
    @deprecated
                use {@link #fromMillis}
    @param num
           number to convert
    @param failIfInvalid
           if true, throw an error instead of null
    @param for_
           context for the error message
    """
        ...
    @classmethod
    def fromRelative(cls, str: str, from_: datetime=None, failIfInvalid: bool=None, for_: str=None) -> Union[datetime]:
    """
    Parses a DateTime from the specified string, relative to the specified datetime.
    
    Relative times must start with a plus or minus sign, then use the same format as the Period type. For example,
    `"-30days"` indicates thirty days before the specified instant (at the same time of day). They can also
    be rounded to a logical period (a. la. Splunk). For example `"-30d@d"` indicates thirty days before the
    specified instant, rounded down to midnight.
    
    
    This overload will throw an error if the string is invalid. However, it will _not_ throw an error on empty
    (it will just return `null`).
    
    @param str
           string to parse
    @param from
           base instant for relative times, or "now" if null
    @param failIfInvalid
           throw error instead of returning null
    @param for_
           used in error message
    @return datetime value
    """
        ...
    @classmethod
    def fromDate(cls, dt: Any) -> Union[datetime]:
    """
    Obtains a DateTime set to the specified millisecond time in the default (local) time zone.
    """
        ...
    @classmethod
    def fromCalendar(cls, cal: Any) -> Union[datetime]:
    """
    Obtains a DateTime set to the specified millisecond time in the default (local) time zone.
    """
        ...
    @classmethod
    def nowWithMillis(cls) -> Union[datetime]:
    """
    Obtains a DateTime set to the current system millisecond time in the default (local) time zone.
    """
        ...
    @classmethod
    def nowWithMillisNoZone(cls) -> Union[datetime]:
    """
    Obtains a DateTime set to the current UTC millisecond with no time zone.
    """
        ...
    @classmethod
    def now(cls) -> Union[datetime]:
    """
    Obtains a DateTime set to the current system time (second resolution) in the default (local) time zone.
    """
        ...
    @classmethod
    def nowNoZone(cls) -> Union[datetime]:
    """
    Obtains a DateTime set to the UTC time (second resolution) no time zone.
    """
        ...
    @overload
    @classmethod
    def parse(cls, str: str, format: str, failIfInvalid: bool=None, for_: Callable[[], Union[str]]=None) -> Union[datetime]:
    """
    Parses a DateTime from the specified string, using a specific date format.
    
    @param str
           string to parse
    @param format
           expected format (see #format)
    @param failIfInvalid
           if true, throw an error instead of returning null
    @param for_
           context for error message
    @see DateTimeFormat
    """
        ...
    @overload
    @classmethod
    def parse(cls, str: str, format: str, failIfInvalid: bool=None) -> Union[datetime]:
    """
    Parses a DateTime from the specified string, using a specific date format.
    
    @param str
           string to parse
    @param format
           expected format (see #format)
    @param failIfInvalid
           if true, throw an error instead of returning null
    @see DateTimeFormat
    """
        ...
    @overload
    @classmethod
    def parseLocal(cls, str: str, format: str, failIfInvalid: bool=None, for_: Callable[[], Union[str]]=None) -> Union[datetime]:
    """
    Parses a DateTime from the specified string, using a specific date format. If no time zone offset is specified,
    the returned string is in the default (local) time zone.
    
    @param str
           string to parse
    @param format
           expected format (see #format)
    @param failIfInvalid
           if true, throw an error instead of returning null
    @param for_
           context for error message
    @see #parse
    @see DateTimeFormat
    """
        ...
    @overload
    @classmethod
    def parseLocal(cls, str: str, format: str, failIfInvalid: bool=None) -> Union[datetime]:
    """
    Parses a DateTime from the specified string, using a specific date format. If no time zone offset is specified,
    the returned string is in the default (local) time zone.
    
    @param str
           string to parse
    @param format
           expected format (see #format)
    @param failIfInvalid
           if true, throw an error instead of returning null
    @see #parse
    @see DateTimeFormat
    """
        ...
    @classmethod
    def max(cls, a: datetime, b: datetime) -> Union[datetime]:
    """
    Get the maximum of two datetime values, handling nulls.
    """
        ...
    @classmethod
    def min(cls, a: datetime, b: datetime) -> Union[datetime]:
    """
    Get the minimum of two datetime values, handling nulls.
    """
        ...
    @classmethod
    def deltaSeconds(cls, a: datetime, b: datetime) -> int:
    """
    Get the difference between datetime values in seconds. This may be negative if the first time is after the
    second.
    """
        ...
    @classmethod
    def deltaMillis(cls, a: datetime, b: datetime) -> int:
    """
    Get the difference between datetime values in milliseconds. This may be negative if the first time is after the
    second.
    """
        ...
    @classmethod
    def deltaMicros(cls, a: datetime, b: datetime) -> int:
    """
    Get the difference between datetime values in microseconds. This may be negative if the first time is after the
    second.
    """
        ...
    @classmethod
    def deltaNanos(cls, a: datetime, b: datetime) -> int:
    """
    Get the difference between datetime values in nanoseconds. This may be negative if the first time is after the
    second.
    """
        ...
    def _parsed(self) -> Union[Any]:
        ...

