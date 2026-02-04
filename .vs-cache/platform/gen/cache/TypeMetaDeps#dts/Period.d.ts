// TypeScript definitions for the C3 type Period

/**
 * A period is a pair of a count and logical time unit, for example "30 days". This can be naturally represented as a
 * string of the form "30d", which is used as the serialization format. The logical time units are a subset of the
 * possible time series {@link Interval intervals}.
 *
 * Periods may also have offsets of the next smaller unit. For example, the Muslim week would be "w@6", starting on
 * Saturday (Monday is 1, Saturday is 6).
 *
 * To convert this into a duration or other fixed period, assumptions must be made about the actual length of a units
 * larger than a day. For example, a day is 24 hours except during daylight-savings (DST) transitions. We call a
 * canonical day 24 hours, a canonical month 30 canonical days and a canonical year 365 canonical days long.
 *
 * @see Duration
 * @see Interval
 * @see TemporalUnit
 *
 * @remarks this represents a value passed to a method that expects an instance of Period
 */
declare interface IPeriod {

  /**
   * Same as {@link Interval#SECOND}.
   */
  SECOND?: IPeriod | null;

  /**
   * Same as {@link Interval#MINUTE}.
   */
  MINUTE?: IPeriod | null;

  /**
   * Same as {@link Interval#FIVE_MINUTE}.
   */
  FIVE_MINUTE?: IPeriod | null;

  /**
   * Same as {@link Interval#TEN_MINUTE}.
   */
  TEN_MINUTE?: IPeriod | null;

  /**
   * Same as {@link Interval#QUARTER_HOUR}.
   */
  QUARTER_HOUR?: IPeriod | null;

  /**
   * Same as {@link Interval#HALF_HOUR}.
   */
  HALF_HOUR?: IPeriod | null;

  /**
   * Same as {@link Interval#HOUR}.
   */
  HOUR?: IPeriod | null;

  /**
   * Same as {@link Interval#DAY}.
   */
  DAY?: IPeriod | null;

  /**
   * Same as {@link Interval#MONTH}.
   */
  MONTH?: IPeriod | null;

  /**
   * Same as {@link Interval#YEAR}.
   */
  YEAR?: IPeriod | null;

  /**
   * The number seconds in a canonical (24 hour) day.
   *
   * Note that this will be wrong two days a year in a time zone that switches between daylight and standard time.
   */
  SECS_IN_DAY: number;

  /**
   * The number of days in a week.
   */
  DAYS_IN_WEEK?: number | null;

  /**
   * The canonical number of days in a month.
   *
   * Note that this will be wrong for half the actual months (Gregorian calendar) which have 28/29 or 31 days.
   */
  DAYS_IN_MONTH?: number | null;

  /**
   * The canonical number of days in a quarter (3 months).
   *
   * Note that this will be wrong for most actual quarters due to the variation in month lengths.
   */
  DAYS_IN_QUARTER?: number | null;

  /**
   * The canonical number of days in a year.
   *
   * Note that this will be wrong for leap years.
   */
  DAYS_IN_YEAR?: number | null;

  /**
   * The number of units in period.
   */
  count: number;

  /**
   * The period unit.
   */
  unit: string;

  /**
   * An optional ordinal in the next smaller unit from the nominal start of the period. For example, for quarters of a
   * fiscal year that starts in February, the offset would be "2" (February). E.g., "Q@2" would be:
   * "February, May, August, November".
   *
   * This is supported for periods greater than DAY:
   * - WEEK: 1-7 (Mon-Sun)
   * - MONTH: 1-31 (day of month)
   * - QUARTER & YEAR; 1-12 (Jan-Dec)
   *
   * Note that non-positive values are illegal and 1 is the trivial (default) offset ordinal.
   *
   * This is exclusive with #start.
   */
  offset?: number | null;
}

/**
 * A period is a pair of a count and logical time unit, for example "30 days". This can be naturally represented as a
 * string of the form "30d", which is used as the serialization format. The logical time units are a subset of the
 * possible time series {@link Interval intervals}.
 *
 * Periods may also have offsets of the next smaller unit. For example, the Muslim week would be "w@6", starting on
 * Saturday (Monday is 1, Saturday is 6).
 *
 * To convert this into a duration or other fixed period, assumptions must be made about the actual length of a units
 * larger than a day. For example, a day is 24 hours except during daylight-savings (DST) transitions. We call a
 * canonical day 24 hours, a canonical month 30 canonical days and a canonical year 365 canonical days long.
 *
 * @see Duration
 * @see Interval
 * @see TemporalUnit
 *
 * @remarks this represents a made instance of Period
 */
declare class Period extends Obj {

  /**
   * Same as {@link Interval#SECOND}.
   */
  readonly SECOND?: Period | null;
  withSECOND(SECOND: IPeriod | null): Period;

  /**
   * Same as {@link Interval#MINUTE}.
   */
  readonly MINUTE?: Period | null;
  withMINUTE(MINUTE: IPeriod | null): Period;

  /**
   * Same as {@link Interval#FIVE_MINUTE}.
   */
  readonly FIVE_MINUTE?: Period | null;
  withFIVE_MINUTE(FIVE_MINUTE: IPeriod | null): Period;

  /**
   * Same as {@link Interval#TEN_MINUTE}.
   */
  readonly TEN_MINUTE?: Period | null;
  withTEN_MINUTE(TEN_MINUTE: IPeriod | null): Period;

  /**
   * Same as {@link Interval#QUARTER_HOUR}.
   */
  readonly QUARTER_HOUR?: Period | null;
  withQUARTER_HOUR(QUARTER_HOUR: IPeriod | null): Period;

  /**
   * Same as {@link Interval#HALF_HOUR}.
   */
  readonly HALF_HOUR?: Period | null;
  withHALF_HOUR(HALF_HOUR: IPeriod | null): Period;

  /**
   * Same as {@link Interval#HOUR}.
   */
  readonly HOUR?: Period | null;
  withHOUR(HOUR: IPeriod | null): Period;

  /**
   * Same as {@link Interval#DAY}.
   */
  readonly DAY?: Period | null;
  withDAY(DAY: IPeriod | null): Period;

  /**
   * Same as {@link Interval#MONTH}.
   */
  readonly MONTH?: Period | null;
  withMONTH(MONTH: IPeriod | null): Period;

  /**
   * Same as {@link Interval#YEAR}.
   */
  readonly YEAR?: Period | null;
  withYEAR(YEAR: IPeriod | null): Period;

  /**
   * The number seconds in a canonical (24 hour) day.
   *
   * Note that this will be wrong two days a year in a time zone that switches between daylight and standard time.
   */
  readonly SECS_IN_DAY: number;
  withSECS_IN_DAY(SECS_IN_DAY: number): Period;

  /**
   * The number of days in a week.
   */
  readonly DAYS_IN_WEEK?: number | null;
  withDAYS_IN_WEEK(DAYS_IN_WEEK: number | null): Period;

  /**
   * The canonical number of days in a month.
   *
   * Note that this will be wrong for half the actual months (Gregorian calendar) which have 28/29 or 31 days.
   */
  readonly DAYS_IN_MONTH?: number | null;
  withDAYS_IN_MONTH(DAYS_IN_MONTH: number | null): Period;

  /**
   * The canonical number of days in a quarter (3 months).
   *
   * Note that this will be wrong for most actual quarters due to the variation in month lengths.
   */
  readonly DAYS_IN_QUARTER?: number | null;
  withDAYS_IN_QUARTER(DAYS_IN_QUARTER: number | null): Period;

  /**
   * The canonical number of days in a year.
   *
   * Note that this will be wrong for leap years.
   */
  readonly DAYS_IN_YEAR?: number | null;
  withDAYS_IN_YEAR(DAYS_IN_YEAR: number | null): Period;

  /**
   * The number of units in period.
   */
  readonly count: number;
  withCount(count: number): Period;

  /**
   * The period unit.
   */
  readonly unit: string;
  withUnit(unit: string): Period;

  /**
   * An optional ordinal in the next smaller unit from the nominal start of the period. For example, for quarters of a
   * fiscal year that starts in February, the offset would be "2" (February). E.g., "Q@2" would be:
   * "February, May, August, November".
   *
   * This is supported for periods greater than DAY:
   * - WEEK: 1-7 (Mon-Sun)
   * - MONTH: 1-31 (day of month)
   * - QUARTER & YEAR; 1-12 (Jan-Dec)
   *
   * Note that non-positive values are illegal and 1 is the trivial (default) offset ordinal.
   *
   * This is exclusive with #start.
   */
  readonly offset?: number | null;
  withOffset(offset: number | null): Period;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Construct a Period from the serialization format.
   *
   * The period is a single integer/unit pair: "1h" and "60m" would represent the same {@link Duration duration}, but
   * are different periods because both the count and unit are different.
   *
   * The supported units are:
   *  - year (y)
   *  - quarter (q)
   *  - month (mo)
   *  - week (w)
   *  - day (d)
   *  - hour (h)
   *  - minute (m)
   *  - second (s)
   *  - millisecond (ms)
   *  - microsecond (µs)
   *  - nanosecond (ns)
   *
   * An offset (calender ordinal) may also be specified for WEEK and larger units. For example, to specify weeks
   * _starting_ on Sunday, one could use "W@7" (1 is Monday, 7 is Sunday). This sets the #offset field.
   * Note that this is different from Pandas where "W-MON" indicates weeks _ending_ on Monday (Tue-Mon).
   *
   * @param s
   *           input string
   * @return the parsed duration
   *
   * @see Duration#fromString
   */
  static fromString(s: string | null): Period | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Period | null;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Period;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Period;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Period;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): Period;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): Period | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): Period | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): Period | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Period | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Period;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Period;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Period;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Period | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Period | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Period;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Period;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Period;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Period;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): Period;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): Period;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Period;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Period;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): Period;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): Period;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): Period;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Period;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Period;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Period;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Period;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): Period;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): Period;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): Period;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): Period;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): Period;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): Period;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Period;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Period;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Period;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Period;

  mergeJson(json: any | null): Period;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Period;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Period;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Period | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Period | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Period | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Period | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Period | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Period | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Period | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Period | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Period | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Period;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Period;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Period;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): Period;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Period;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Period>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Period;

  /**
   * Return a {@link Duration} that corresponds to this period. Note that because periods are logical, this
   * assumes canonical values for day and larger periods (month, quarter, year).
   *
   * @see #toDurationAt
   */
  toDuration(): Duration;

  /**
   * Return a {@link Duration} that corresponds to this period, starting at the specified time. Note that because
   * this method allows the period to be anchored, the duration will be exact. For example, the month of February will
   * be 28 (or 29) days long instead of the canonical 30.
   *
   * @see #toDurationAt
   */
  toDurationAt(start: DateTime): Duration;

  /**
   * Return the fractional number of milliseconds this period represents. Note that because periods are logical, this
   * assumes canonical values for larger periods (month, quarter, year).
   *
   * @see #toDays
   * @see #toDurationAt
   */
  toMilliseconds(): number;

  /**
   * Return the fractional number of seconds this period represents. Note that because periods are logical, this
   * assumes canonical values for larger periods (month, quarter, year).
   *
   * @see #toDays
   * @see #toDurationAt
   */
  toSeconds(): number;

  /**
   * Return the fractional number of days this period represents. Note that because periods are logical, this
   * assumes canonical values for larger periods (month, quarter, year).
   *
   * @see #toSeconds
   * @see #toDurationAt
   */
  toDays(): number;

  /**
   * The actual start and end of the period with the start at the specified time.
   */
  toTimeRange(start: DateTime): TimeRange;

  /**
   * Return true if the logical length of this period represents _more_ time than the specified period.
   *
   * Where the two periods have different units, canonical lengths are used to compare. For example, "30 days" is _not_
   * longer than "1 month" (it is the same length since the canonical length of a logical month is 30 days).
   * Note that for an accurate comparison of actual periods on the calender, #toDurationAt should be used instead.
   *
   * @see #isShorter
   * @see #toDuration
   * @see #toDurationAt
   */
  isLonger(other: Period): boolean;

  /**
   * Return true if the logical length of this period represents _more_ time than the specified period string.
   *
   * Where the two periods have different units, canonical lengths are used to compare. For example, "30 days" is _not_
   * longer than "1 month" (it is the same length since the canonical length of a logical month is 30 days).
   * Note that for an accurate comparison of actual periods on the calender, #toDurationAt should be used instead.
   *
   * @see #isShorter
   * @see #toDuration
   * @see #toDurationAt
   */
  isLonger(other: string): boolean;

  /**
   * Return true if the logical length of this period represents _less_ time than the specified period.
   *
   * Where the two periods have different units, canonical lengths are used to compare. For example, "1000 ms" is _not_
   * shorter than "1 second" (it's the same length). Note that for an accurate comparison of actual periods on the
   * calender, #toDurationAt should be used instead.
   *
   * @see #isLonger
   * @see #toDuration
   * @see #toDurationAt
   */
  isShorter(other: Period): boolean;

  /**
   * Return true if the logical length of this period represents _less_ time than the specified period string.
   *
   * Where the two periods have different units, canonical lengths are used to compare. For example, "1000 ms" is _not_
   * shorter than "1 second" (it's the same length). Note that for an accurate comparison of actual periods on the
   * calender, #toDurationAt should be used instead.
   *
   * @see #isLonger
   * @see #toDuration
   * @see #toDurationAt
   */
  isShorter(other: string): boolean;

  /**
   * Generates datetime instances for the {@link TimeRange} at {@link Period} intervals.
   * If {@link TimeRange#start} and {@link TimeRange#end} are not specified, returns empty array.
   * If {@link TimeRange#start} is not specified, assumes minus 1 {@link Period} from {@link TimeRange#end}.
   * If {@link TimeRange#end} is not specified, assumes plus 1 {@link Period} from {@link TimeRange#start}.
   * If the {@link Period} is greater than the time between {@link TimeRange#start} and {@link TimeRange#end},
   * returns only {@link TimeRange#start}.
   * @param timeRange
   *            The {@link TimeRange} to fill
   * @param endInclusive
   *            By default {@link TimeRange} is exclusive of the end date. If this is set to true,
   *            will return a time range that includes the end date, if it aligns with the interval.
   * @return Array of datetime instances for the given interval within the time range.
   */
  fill(timeRange?: TimeRange | null, endInclusive?: boolean): C3.Array<DateTime | null>;

  /**
   * @param failIfMissing
   *        if period is not an existing interval, throws an error if true, otherwise return null by default
   * @return the interval this period corresponds to.
   */
  toInterval(failIfMissing?: boolean): string;

  /**
   * Get the Period as a Joda Period instance.
   *
   * @see http://joda-time.sourceforge.net/apidocs/org/joda/time/Period.html
   */
  toJodaPeriod(): any;

  /**
   * Return a alignedTimePoint when specified with an offset or anchored with a start date, else return the input dt as the newStart
   * Always take the left end of the period as the new start, when the given dt is not aligned with the period
   * If the period is 1w@3, week starting from Wednesday, input dt is not wednesday, the newStart will be the previous Wednesday
   * Anchored start date is used to determine newStart closed to the period on the left end.
   *
   * For Example:
   *    - `alignedTimePoint("1w@3", "2024-01-01")` returns "2023-12-27", 2024-01-01 is a Monday and the week starting from Wednesday is 2023-12-27
   *    - `alignedTimePoint("1w@1", "2024-01-01")` returns "2024-01-01", as 2024-01-01 is a Monday.
   *    - `alignedTimePoint("2w@4", "2024-01-01")` returns "2023-12-28", 2024-01-01 is a Monday and the week starting from Thursday is 2023-12-28
   *    - `alignedTimePoint("30d", "2024-01-01")` returns "2024-01-01".
   *
   * @param the period to be used for the new start
   * @param the input datetime, if period is not anchored
   * @return the new start datetime
   */
  alignedTimePoint(dt: DateTime): DateTime;

  /**
   * Convert this period to a cron expression for scheduling.
   *
   * Supported units: s (second), m (minute), h (hour), d (day).
   *
   * Examples:
   *  - "5m" → "0 0/5 * * * ?" (every 5 minutes)
   *  - "1h" → "0 0 0/1 * * ?" (every hour)
   *  - "30s" → "0/30 * * * * ?" (every 30 seconds)
   *
   * @return cron expression string
   */
  toCronExpr(): string;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
