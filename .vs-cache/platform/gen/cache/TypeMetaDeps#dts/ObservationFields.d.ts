// TypeScript definitions for the C3 type ObservationFields

/**
 * @remarks this represents a value passed to a method that expects an instance of ObservationFields
 */
declare interface IObservationFields {

  siteId?: string | null;

  /**
   * The temperature of the air, at the time of the observation, measured by a thermometer 1.5 meters (4.5 feet) above
   * the ground that is shaded from the other elements.
   *
   * Unit:  degrees Fahrenheit
   */
  temperature?: number | null;

  /**
   * The temperature which air must be cooled at constant pressure to reach saturation. The Dew Point is also an
   * indirect measure of the humidity of the air. The Dew Point will never exceed the Temperature. When the Dew Point
   * and Temperature are equal, clouds or fog will typically form. The closer the values of Temperature and Dew Point,
   * the higher the relative humidity.
   *
   * Unit: degrees Fahrenheit
   */
  dewPoint?: number | null;

  wetBulbTemperature?: number | null;

  /**
   * The relative humidity of the air, which is defined as the ratio of the amount of water vapor in the air to the
   * amount of vapor required to bring the air to saturation at a constant temperature. Relative humidity is always
   * expressed as a percentage.
   *
   * Unit: percentage
   */
  relativeHumidity?: number | null;

  /**
   * Barometric pressure is the pressure exerted by the atmosphere at the earth's surface, due to the weight of the air.
   * This value is read directly from an instrument called a mercury barometer and its units are expressed in millibars
   * or inches of mercury.
   *
   * Unit: inches of mercury
   */
  surfaceAirPressure?: number | null;

  totalSkyCover?: number | null;

  degreeHours?: number | null;

  /**
   * Precipitation for the last hour
   * Unit: inch
   */
  precipitation?: number | null;

  /**
   * Wind speed is treated as a vector; hence, winds must have direction and magnitude (speed). The wind information
   * reported in the hourly current conditions corresponds to a 10-minute average called the sustained wind speed.
   * Sudden or brief variations in the wind speed are known as “wind gusts” and are reported in a separate data field.
   * Wind directions are always expressed as "from whence the wind blows" meaning that a North wind blows from North to
   * South. If you face North in a North wind the wind is at your face. Face southward and the North wind is at your
   * back.
   *
   * Unit: miles per hour
   */
  windSpeed?: number | null;

  /**
   * The direction from which the wind blows expressed in degrees. The magnetic direction varies from 1 to 360 degrees,
   * where 360° indicates the North, 90° the East, 180° the South, 270° the West, and so forth. A ‘null’ value
   * represents no determinable wind direction
   *
   * Unit: degrees
   *
   * Range: 1 to 360
   */
  windDirection?: number | null;

  downwardSolarRadiation?: number | null;

  directNormalIrradiation?: number | null;

  diffuseHorizontalIrradiation?: number | null;

  /**
   * Daytime or nighttime of the local apparent time of the location
   *
   * Range: 1 = day, 0 = night
   */
  day?: number | null;

  /**
   * 0: measured, 1: forecast; use integers so multiplication can distinguish
   */
  forecast?: number | null;

  /**
   * The horizontal visibility at the observation point. Visibilities can be reported as fractional values particularly
   * when visibility is less than 2 miles. Visibilities greater than 10 statute miles(16.1 kilometers) that are
   * considered unlimited are reported as 999 in your feed. You can also find visibility values that equal zero. This
   * occurrence is not wrong. Dense fogs and heavy snows can produce values near zero. Fog, smoke, heavy rain and other
   * weather phenomena can reduce visibility to near zero miles or kilometers.
   *
   * Unit: mile
   *
   * Range: 0 to 999 or null
   */
  horizontalVisibility?: number | null;

  /**
   * Wind gust speed. This data field contains information about sudden and temporary variations of the average wind
   * speed. The report always shows the maximum wind gust speed recorded during the observation period. If wind speed is
   * shown, this field must be displayed. The speed of the gust can be expressed in miles per hour or kilometers per
   * hour.
   *
   * Unit: miles per hour
   */
  windGustSpeed?: number | null;

  /**
   * Snow increasing rapidly in inches or centimeters per hour depending on whether or not the snowfall is reported by
   * METAR or TECCI (synthetic observations). METAR snow accumulation for the last hour is in inches and TECCI is in
   * centimeters.
   *
   * Unit: inch
   *
   * Range: 0 to 15
   */
  snow?: number | null;

  /**
   * The forecasted measurable precipitation as snow during the 12- or 24-hour forecast period
   *
   * Example: 1.3
   *
   * Display as provided with the correct units of measure (inches or centimeters)
   */
  snowForecast?: number | null;

  /**
   * Precipitation amount in the last 24 hours
   *
   * Unit: inch
   *
   * Range: 0.00 to 99.99
   */
  precipitationTotal?: number | null;

  /**
   * The change in the barometric pressure reading over the last hour expressed as an integer
   *
   * Range: 0 = Steady, 1 = Rising or Rapidly Rising, 2 = Falling or Rapidly Falling
   */
  pressureTendency?: number | null;

  /**
   * Type of precipitation to display with the probability of precipitation (POP) data element
   *
   * Range: rain, snow
   */
  precipitationType?: string | null;

  /**
   * Daytime sensible weather phrase
   *
   * Example: Heavy Rain/Wind
   */
  phrase32char?: string | null;

  /**
   * Daytime sensible weather phrase
   * Example: Cloudy
   */
  phrase22char?: string | null;

  /**
   * Daytime sensible weather phrase
   * Example: Windy
   */
  phrase12char?: string | null;

  /**
   * Part 1 of 3-part daytime sensible weather phrase
   *
   * Example: Cloudy
   *
   * The three parts are to be displayed sequentially in numerical order.
   */
  subphrasePart1?: string | null;

  /**
   * Part 2 of 3-part daytime sensible weather phrase
   *
   * Example: Windy
   *
   * The three parts are to be displayed sequentially in numerical order.
   */
  subphrasePart2?: string | null;

  /**
   * Part 3 of 3-part daytime sensible weather phrase
   *
   * Example: Thunder
   *
   * The three parts are to be displayed sequentially in numerical order.
   */
  subphrasePart3?: string | null;

  /**
   * Weather description qualifier code
   *
   * Example: QQ0063
   */
  qualifier?: string | null;

  /**
   * Weather description qualifier severity
   *
   * Range: 1 (low) to 6 (high)
   *
   * Example: 1
   */
  qualifierSeverity?: string | null;

  /**
   * Weather description qualifier short phrase
   *
   * Example: Warmer than yesterday.
   */
  bluntPhrase?: string | null;

  /**
   * A phrase describing the change in the barometric pressure reading over the last hour
   *
   * Range: Steady, Rising, Rapidly Rising, Falling, Rapidly Falling
   *
   * Example: Steady
   */
  pressureDescription?: string | null;
}

/**
 * @remarks this represents a made instance of ObservationFields
 */
declare class ObservationFields extends Obj {

  readonly siteId?: string | null;
  withSiteId(siteId: string | null): ObservationFields;

  /**
   * The temperature of the air, at the time of the observation, measured by a thermometer 1.5 meters (4.5 feet) above
   * the ground that is shaded from the other elements.
   *
   * Unit:  degrees Fahrenheit
   */
  readonly temperature?: number | null;
  withTemperature(temperature: number | null): ObservationFields;

  /**
   * The temperature which air must be cooled at constant pressure to reach saturation. The Dew Point is also an
   * indirect measure of the humidity of the air. The Dew Point will never exceed the Temperature. When the Dew Point
   * and Temperature are equal, clouds or fog will typically form. The closer the values of Temperature and Dew Point,
   * the higher the relative humidity.
   *
   * Unit: degrees Fahrenheit
   */
  readonly dewPoint?: number | null;
  withDewPoint(dewPoint: number | null): ObservationFields;

  readonly wetBulbTemperature?: number | null;
  withWetBulbTemperature(wetBulbTemperature: number | null): ObservationFields;

  /**
   * The relative humidity of the air, which is defined as the ratio of the amount of water vapor in the air to the
   * amount of vapor required to bring the air to saturation at a constant temperature. Relative humidity is always
   * expressed as a percentage.
   *
   * Unit: percentage
   */
  readonly relativeHumidity?: number | null;
  withRelativeHumidity(relativeHumidity: number | null): ObservationFields;

  /**
   * Barometric pressure is the pressure exerted by the atmosphere at the earth's surface, due to the weight of the air.
   * This value is read directly from an instrument called a mercury barometer and its units are expressed in millibars
   * or inches of mercury.
   *
   * Unit: inches of mercury
   */
  readonly surfaceAirPressure?: number | null;
  withSurfaceAirPressure(surfaceAirPressure: number | null): ObservationFields;

  readonly totalSkyCover?: number | null;
  withTotalSkyCover(totalSkyCover: number | null): ObservationFields;

  readonly degreeHours?: number | null;
  withDegreeHours(degreeHours: number | null): ObservationFields;

  /**
   * Precipitation for the last hour
   * Unit: inch
   */
  readonly precipitation?: number | null;
  withPrecipitation(precipitation: number | null): ObservationFields;

  /**
   * Wind speed is treated as a vector; hence, winds must have direction and magnitude (speed). The wind information
   * reported in the hourly current conditions corresponds to a 10-minute average called the sustained wind speed.
   * Sudden or brief variations in the wind speed are known as “wind gusts” and are reported in a separate data field.
   * Wind directions are always expressed as "from whence the wind blows" meaning that a North wind blows from North to
   * South. If you face North in a North wind the wind is at your face. Face southward and the North wind is at your
   * back.
   *
   * Unit: miles per hour
   */
  readonly windSpeed?: number | null;
  withWindSpeed(windSpeed: number | null): ObservationFields;

  /**
   * The direction from which the wind blows expressed in degrees. The magnetic direction varies from 1 to 360 degrees,
   * where 360° indicates the North, 90° the East, 180° the South, 270° the West, and so forth. A ‘null’ value
   * represents no determinable wind direction
   *
   * Unit: degrees
   *
   * Range: 1 to 360
   */
  readonly windDirection?: number | null;
  withWindDirection(windDirection: number | null): ObservationFields;

  readonly downwardSolarRadiation?: number | null;
  withDownwardSolarRadiation(downwardSolarRadiation: number | null): ObservationFields;

  readonly directNormalIrradiation?: number | null;
  withDirectNormalIrradiation(directNormalIrradiation: number | null): ObservationFields;

  readonly diffuseHorizontalIrradiation?: number | null;
  withDiffuseHorizontalIrradiation(diffuseHorizontalIrradiation: number | null): ObservationFields;

  /**
   * Daytime or nighttime of the local apparent time of the location
   *
   * Range: 1 = day, 0 = night
   */
  readonly day?: number | null;
  withDay(day: number | null): ObservationFields;

  /**
   * 0: measured, 1: forecast; use integers so multiplication can distinguish
   */
  readonly forecast?: number | null;
  withForecast(forecast: number | null): ObservationFields;

  /**
   * The horizontal visibility at the observation point. Visibilities can be reported as fractional values particularly
   * when visibility is less than 2 miles. Visibilities greater than 10 statute miles(16.1 kilometers) that are
   * considered unlimited are reported as 999 in your feed. You can also find visibility values that equal zero. This
   * occurrence is not wrong. Dense fogs and heavy snows can produce values near zero. Fog, smoke, heavy rain and other
   * weather phenomena can reduce visibility to near zero miles or kilometers.
   *
   * Unit: mile
   *
   * Range: 0 to 999 or null
   */
  readonly horizontalVisibility?: number | null;
  withHorizontalVisibility(horizontalVisibility: number | null): ObservationFields;

  /**
   * Wind gust speed. This data field contains information about sudden and temporary variations of the average wind
   * speed. The report always shows the maximum wind gust speed recorded during the observation period. If wind speed is
   * shown, this field must be displayed. The speed of the gust can be expressed in miles per hour or kilometers per
   * hour.
   *
   * Unit: miles per hour
   */
  readonly windGustSpeed?: number | null;
  withWindGustSpeed(windGustSpeed: number | null): ObservationFields;

  /**
   * Snow increasing rapidly in inches or centimeters per hour depending on whether or not the snowfall is reported by
   * METAR or TECCI (synthetic observations). METAR snow accumulation for the last hour is in inches and TECCI is in
   * centimeters.
   *
   * Unit: inch
   *
   * Range: 0 to 15
   */
  readonly snow?: number | null;
  withSnow(snow: number | null): ObservationFields;

  /**
   * The forecasted measurable precipitation as snow during the 12- or 24-hour forecast period
   *
   * Example: 1.3
   *
   * Display as provided with the correct units of measure (inches or centimeters)
   */
  readonly snowForecast?: number | null;
  withSnowForecast(snowForecast: number | null): ObservationFields;

  /**
   * Precipitation amount in the last 24 hours
   *
   * Unit: inch
   *
   * Range: 0.00 to 99.99
   */
  readonly precipitationTotal?: number | null;
  withPrecipitationTotal(precipitationTotal: number | null): ObservationFields;

  /**
   * The change in the barometric pressure reading over the last hour expressed as an integer
   *
   * Range: 0 = Steady, 1 = Rising or Rapidly Rising, 2 = Falling or Rapidly Falling
   */
  readonly pressureTendency?: number | null;
  withPressureTendency(pressureTendency: number | null): ObservationFields;

  /**
   * Type of precipitation to display with the probability of precipitation (POP) data element
   *
   * Range: rain, snow
   */
  readonly precipitationType?: string | null;
  withPrecipitationType(precipitationType: string | null): ObservationFields;

  /**
   * Daytime sensible weather phrase
   *
   * Example: Heavy Rain/Wind
   */
  readonly phrase32char?: string | null;
  withPhrase32char(phrase32char: string | null): ObservationFields;

  /**
   * Daytime sensible weather phrase
   * Example: Cloudy
   */
  readonly phrase22char?: string | null;
  withPhrase22char(phrase22char: string | null): ObservationFields;

  /**
   * Daytime sensible weather phrase
   * Example: Windy
   */
  readonly phrase12char?: string | null;
  withPhrase12char(phrase12char: string | null): ObservationFields;

  /**
   * Part 1 of 3-part daytime sensible weather phrase
   *
   * Example: Cloudy
   *
   * The three parts are to be displayed sequentially in numerical order.
   */
  readonly subphrasePart1?: string | null;
  withSubphrasePart1(subphrasePart1: string | null): ObservationFields;

  /**
   * Part 2 of 3-part daytime sensible weather phrase
   *
   * Example: Windy
   *
   * The three parts are to be displayed sequentially in numerical order.
   */
  readonly subphrasePart2?: string | null;
  withSubphrasePart2(subphrasePart2: string | null): ObservationFields;

  /**
   * Part 3 of 3-part daytime sensible weather phrase
   *
   * Example: Thunder
   *
   * The three parts are to be displayed sequentially in numerical order.
   */
  readonly subphrasePart3?: string | null;
  withSubphrasePart3(subphrasePart3: string | null): ObservationFields;

  /**
   * Weather description qualifier code
   *
   * Example: QQ0063
   */
  readonly qualifier?: string | null;
  withQualifier(qualifier: string | null): ObservationFields;

  /**
   * Weather description qualifier severity
   *
   * Range: 1 (low) to 6 (high)
   *
   * Example: 1
   */
  readonly qualifierSeverity?: string | null;
  withQualifierSeverity(qualifierSeverity: string | null): ObservationFields;

  /**
   * Weather description qualifier short phrase
   *
   * Example: Warmer than yesterday.
   */
  readonly bluntPhrase?: string | null;
  withBluntPhrase(bluntPhrase: string | null): ObservationFields;

  /**
   * A phrase describing the change in the barometric pressure reading over the last hour
   *
   * Range: Steady, Rising, Rapidly Rising, Falling, Rapidly Falling
   *
   * Example: Steady
   */
  readonly pressureDescription?: string | null;
  withPressureDescription(pressureDescription: string | null): ObservationFields;

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
  static fromJson(json: any | null): ObservationFields | null;

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
  static fromJsonString(json: string | null): ObservationFields | null;

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
  static fromXmlString(xml: string | null): ObservationFields | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): ObservationFields | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ObservationFields;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ObservationFields;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ObservationFields;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ObservationFields | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ObservationFields | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ObservationFields;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ObservationFields;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ObservationFields;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ObservationFields;

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
  withField(field: string, value: any, doNotConvert?: boolean): ObservationFields;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ObservationFields;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ObservationFields;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ObservationFields;

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
  withoutFieldAtPath(path: string): ObservationFields;

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
  withoutField(field: string | null): ObservationFields;

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
  withoutField(field: FieldType | null): ObservationFields;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): ObservationFields;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ObservationFields;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ObservationFields;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ObservationFields;

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
  defaultField(field: string): ObservationFields;

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
  defaultField(field: FieldType): ObservationFields;

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
  unsetField(field: string): ObservationFields;

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
  unsetField(field: FieldType): ObservationFields;

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
  removeField(field: string): ObservationFields;

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
  removeField(field: FieldType): ObservationFields;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ObservationFields;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): ObservationFields;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ObservationFields;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ObservationFields;

  mergeJson(json: any | null): ObservationFields;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ObservationFields;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): ObservationFields;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<ObservationFields | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<ObservationFields | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ObservationFields | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<ObservationFields | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ObservationFields | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, ObservationFields | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ObservationFields | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ObservationFields | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ObservationFields | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): ObservationFields;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): ObservationFields;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): ObservationFields;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ObservationFields;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): ObservationFields;

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
  static make(fields: any, withDefaults?: boolean): ObservationFields;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): ObservationFields;

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
  afterMake(): ObservationFields;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ObservationFields;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<ObservationFields>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): ObservationFields;
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
