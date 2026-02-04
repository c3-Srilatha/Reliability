// TypeScript definitions for the C3 type BulkSensorAssociationUiSettingsTransform

/**
 * Receives a {@link BulkSensorAssociationUiSettings} object, and transforms its fields to be compatible with the SDL
 * components on `Reliability.LatestCorrelationConfiguration` page.
 *
 * Format of dates:
 * - Fields Affected: `trainingStart`, `trainingEnd`, `validationStart`, `validationEnd`.
 *   Transforms ISO Format: `2024-05-10T01:10:03.491Z`, to Locale String: `5/9/2024, 7:13:11 PM`.
 *
 * Format of ranges:
 * - Fields Affected: `correlationThresholdMin`, `correlationThresholdMax`, `extremeValueFilterMin`, `extremeValueFilterMax`.
 *   Transforms each range into the following fields: `correlationThresholdRange`, `extremeValueFilterRange` using
 *   the format: `${min} - ${max}`.
 *
 * Format of lists:
 * - Fields Affected: `excludeSensorMatchPatterns`, `includeSensorMatchPatterns`.
 *   Transforms the list of strings: `['a', 'b', 'c']` to a comma separated string: `"a, b, c"`.
 *
 * Format of {@link UiSdlDuration}:
 * - When we return a {@link Duration} to the UI it gets transformed into {@link UiSdlDuration} with only
 *   [microseconds](UiSdlDuration#microseconds) field populated. This format is not-compatible, so we convert each field
 *   into its expected duration number by `floor(microseconds/MICROSECONDS_IN_<DAY|HOUR|MIN>)`.
 *   (The result has no decimals)
 *   - `fastTransientLagPeriod`: Converted to a minutes integer.
 *   - `excludeShortTimePeriod`: Converted to a days integer.
 *   - `constantPeriodMinimumDuration`: Converted to an hours integer.
 *
 * Usage example:
 * - Input
 * ```json
 * {
 *  "type": "BulkSensorAssociationUiSettings",
 *  "assets": [
 *      "Subsystem1"
 *  ],
 *  "targetTag": {
 *      "id": "PERCENT_OPEN"
 *  },
 *  "interval": "FIVE_MINUTE",
 *  "trainingStart": "2024-04-07T22:35:14Z",
 *  "trainingEnd": "2024-04-22T22:35:15Z",
 *  "validationStart": "2024-04-17T22:35:15Z",
 *  "validationEnd": "2024-05-02T22:35:15Z",
 *  "associationMethod": "pearson",
 *  "includeSensorMatchPatterns": [
 *      "tag1"
 *  ],
 *  "excludeSensorMatchPatterns": [
 *      "NO_TAG"
 *  ],
 *  "correlationThresholdMin": 0.1,
 *  "correlationThresholdMax": 0.9,
 *  "correlationThresholdMaxSensorsToReturn": 10,
 *  "enableMaintenanceDatabaseFilter": true,
 *  "enableExtremeValueFilter": true,
 *  "extremeValueFilterMin": 10.0,
 *  "extremeValueFilterMax": 90.0,
 *  "enableExcludeShortTimePeriodFilter": true,
 *  "excludeShortTimePeriod": {
 *      "microseconds": 432000000000
 *  },
 *  "enableManualModeFilter": true,
 *  "ignoreAlmostConstantPeriod": true,
 *  "constantPeriodMaximumAbsChange": 0.5,
 *  "constantPeriodMinimumDuration": {
 *      "microseconds": 18000000000
 *  },
 *  "enableFastTransientFilterExclusion": true,
 *  "fastTransientLagPeriod": {
 *      "microseconds": 600000000
 *  },
 *  "fastTransientThreshold": 7,
 *  "enableAlgorithmicTrainingMask": true,
 *  "jobName": "Test Bulk Sensor Association Job"
 * }
 * ```
 *
 * - Output
 * ```json
 * {
 *   "enableExtremeValueFilter": true,
 *   "extremeValueFilterRange": "10 - 90",
 *   "trainingEnd": "4/22/2024, 4:35:15 PM",
 *   "associationMethod": "pearson",
 *   "validationEnd": "5/2/2024, 4:35:15 PM",
 *   "enableMaintenanceDatabaseFilter": true,
 *   "assets": [
 *     "Subsystem1"
 *   ],
 *   "enableManualModeFilter": true,
 *   "fastTransientLagPeriod": 10,
 *   "interval": "FIVE_MINUTE",
 *   "ignoreAlmostConstantPeriod": true,
 *   "includeSensorMatchPatterns": "tag1",
 *   "extremeValueFilterMax": 90,
 *   "constantPeriodMaximumAbsChange": 0.5,
 *   "trainingStart": "4/7/2024, 4:35:14 PM",
 *   "jobName": "Test Bulk Sensor Association Job",
 *   "targetTag": {
 *     "id": "PERCENT_OPEN"
 *   },
 *   "correlationThresholdMin": 0.1,
 *   "correlationThresholdMaxSensorsToReturn": 10,
 *   "validationStart": "4/17/2024, 4:35:15 PM",
 *   "enableFastTransientFilterExclusion": true,
 *   "enableExcludeShortTimePeriodFilter": true,
 *   "enableAlgorithmicTrainingMask": true,
 *   "excludeShortTimePeriod": 5,
 *   "correlationThresholdRange": "0.1 - 0.9",
 *   "excludeSensorMatchPatterns": "NO_TAG",
 *   "extremeValueFilterMin": 10,
 *   "fastTransientThreshold": 7,
 *   "type": "BulkSensorAssociationUiSettings",
 *   "correlationThresholdMax": 0.9,
 *   "constantPeriodMinimumDuration": 5
 * }
 * ```
 *
 * @see LatestSensorAssociationHelper
 * @see ReliabilityApplicationState
 * @see LatestCorrelationFetchDataEpic
 *
 * @remarks this represents a value passed to a method that expects an instance of BulkSensorAssociationUiSettingsTransform
 */
declare interface IBulkSensorAssociationUiSettingsTransform {
}

/**
 * Receives a {@link BulkSensorAssociationUiSettings} object, and transforms its fields to be compatible with the SDL
 * components on `Reliability.LatestCorrelationConfiguration` page.
 *
 * Format of dates:
 * - Fields Affected: `trainingStart`, `trainingEnd`, `validationStart`, `validationEnd`.
 *   Transforms ISO Format: `2024-05-10T01:10:03.491Z`, to Locale String: `5/9/2024, 7:13:11 PM`.
 *
 * Format of ranges:
 * - Fields Affected: `correlationThresholdMin`, `correlationThresholdMax`, `extremeValueFilterMin`, `extremeValueFilterMax`.
 *   Transforms each range into the following fields: `correlationThresholdRange`, `extremeValueFilterRange` using
 *   the format: `${min} - ${max}`.
 *
 * Format of lists:
 * - Fields Affected: `excludeSensorMatchPatterns`, `includeSensorMatchPatterns`.
 *   Transforms the list of strings: `['a', 'b', 'c']` to a comma separated string: `"a, b, c"`.
 *
 * Format of {@link UiSdlDuration}:
 * - When we return a {@link Duration} to the UI it gets transformed into {@link UiSdlDuration} with only
 *   [microseconds](UiSdlDuration#microseconds) field populated. This format is not-compatible, so we convert each field
 *   into its expected duration number by `floor(microseconds/MICROSECONDS_IN_<DAY|HOUR|MIN>)`.
 *   (The result has no decimals)
 *   - `fastTransientLagPeriod`: Converted to a minutes integer.
 *   - `excludeShortTimePeriod`: Converted to a days integer.
 *   - `constantPeriodMinimumDuration`: Converted to an hours integer.
 *
 * Usage example:
 * - Input
 * ```json
 * {
 *  "type": "BulkSensorAssociationUiSettings",
 *  "assets": [
 *      "Subsystem1"
 *  ],
 *  "targetTag": {
 *      "id": "PERCENT_OPEN"
 *  },
 *  "interval": "FIVE_MINUTE",
 *  "trainingStart": "2024-04-07T22:35:14Z",
 *  "trainingEnd": "2024-04-22T22:35:15Z",
 *  "validationStart": "2024-04-17T22:35:15Z",
 *  "validationEnd": "2024-05-02T22:35:15Z",
 *  "associationMethod": "pearson",
 *  "includeSensorMatchPatterns": [
 *      "tag1"
 *  ],
 *  "excludeSensorMatchPatterns": [
 *      "NO_TAG"
 *  ],
 *  "correlationThresholdMin": 0.1,
 *  "correlationThresholdMax": 0.9,
 *  "correlationThresholdMaxSensorsToReturn": 10,
 *  "enableMaintenanceDatabaseFilter": true,
 *  "enableExtremeValueFilter": true,
 *  "extremeValueFilterMin": 10.0,
 *  "extremeValueFilterMax": 90.0,
 *  "enableExcludeShortTimePeriodFilter": true,
 *  "excludeShortTimePeriod": {
 *      "microseconds": 432000000000
 *  },
 *  "enableManualModeFilter": true,
 *  "ignoreAlmostConstantPeriod": true,
 *  "constantPeriodMaximumAbsChange": 0.5,
 *  "constantPeriodMinimumDuration": {
 *      "microseconds": 18000000000
 *  },
 *  "enableFastTransientFilterExclusion": true,
 *  "fastTransientLagPeriod": {
 *      "microseconds": 600000000
 *  },
 *  "fastTransientThreshold": 7,
 *  "enableAlgorithmicTrainingMask": true,
 *  "jobName": "Test Bulk Sensor Association Job"
 * }
 * ```
 *
 * - Output
 * ```json
 * {
 *   "enableExtremeValueFilter": true,
 *   "extremeValueFilterRange": "10 - 90",
 *   "trainingEnd": "4/22/2024, 4:35:15 PM",
 *   "associationMethod": "pearson",
 *   "validationEnd": "5/2/2024, 4:35:15 PM",
 *   "enableMaintenanceDatabaseFilter": true,
 *   "assets": [
 *     "Subsystem1"
 *   ],
 *   "enableManualModeFilter": true,
 *   "fastTransientLagPeriod": 10,
 *   "interval": "FIVE_MINUTE",
 *   "ignoreAlmostConstantPeriod": true,
 *   "includeSensorMatchPatterns": "tag1",
 *   "extremeValueFilterMax": 90,
 *   "constantPeriodMaximumAbsChange": 0.5,
 *   "trainingStart": "4/7/2024, 4:35:14 PM",
 *   "jobName": "Test Bulk Sensor Association Job",
 *   "targetTag": {
 *     "id": "PERCENT_OPEN"
 *   },
 *   "correlationThresholdMin": 0.1,
 *   "correlationThresholdMaxSensorsToReturn": 10,
 *   "validationStart": "4/17/2024, 4:35:15 PM",
 *   "enableFastTransientFilterExclusion": true,
 *   "enableExcludeShortTimePeriodFilter": true,
 *   "enableAlgorithmicTrainingMask": true,
 *   "excludeShortTimePeriod": 5,
 *   "correlationThresholdRange": "0.1 - 0.9",
 *   "excludeSensorMatchPatterns": "NO_TAG",
 *   "extremeValueFilterMin": 10,
 *   "fastTransientThreshold": 7,
 *   "type": "BulkSensorAssociationUiSettings",
 *   "correlationThresholdMax": 0.9,
 *   "constantPeriodMinimumDuration": 5
 * }
 * ```
 *
 * @see LatestSensorAssociationHelper
 * @see ReliabilityApplicationState
 * @see LatestCorrelationFetchDataEpic
 *
 * @remarks this represents a made instance of BulkSensorAssociationUiSettingsTransform
 */
declare class BulkSensorAssociationUiSettingsTransform extends Obj  {

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
  static fromJson(json: any): BulkSensorAssociationUiSettingsTransform | null;

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
  static fromJsonString(json: string): BulkSensorAssociationUiSettingsTransform | null;

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
  static fromXmlString(xml: string): BulkSensorAssociationUiSettingsTransform | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): BulkSensorAssociationUiSettingsTransform | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BulkSensorAssociationUiSettingsTransform;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BulkSensorAssociationUiSettingsTransform;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<BulkSensorAssociationUiSettingsTransform>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<BulkSensorAssociationUiSettingsTransform>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BulkSensorAssociationUiSettingsTransform;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): BulkSensorAssociationUiSettingsTransform;

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
  withField(field: string, value: any, doNotConvert?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  withoutFieldAtPath(path: string): BulkSensorAssociationUiSettingsTransform;

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
  withoutField(field: string): BulkSensorAssociationUiSettingsTransform;

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
  withoutField(field: FieldType): BulkSensorAssociationUiSettingsTransform;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): BulkSensorAssociationUiSettingsTransform;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): BulkSensorAssociationUiSettingsTransform;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): BulkSensorAssociationUiSettingsTransform;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): BulkSensorAssociationUiSettingsTransform;

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
  defaultField(field: string): BulkSensorAssociationUiSettingsTransform;

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
  defaultField(field: FieldType): BulkSensorAssociationUiSettingsTransform;

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
  unsetField(field: string): BulkSensorAssociationUiSettingsTransform;

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
  unsetField(field: FieldType): BulkSensorAssociationUiSettingsTransform;

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
  removeField(field: string): BulkSensorAssociationUiSettingsTransform;

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
  removeField(field: FieldType): BulkSensorAssociationUiSettingsTransform;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): BulkSensorAssociationUiSettingsTransform;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): BulkSensorAssociationUiSettingsTransform;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): BulkSensorAssociationUiSettingsTransform;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): BulkSensorAssociationUiSettingsTransform;

  mergeJson(json: any): BulkSensorAssociationUiSettingsTransform;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): BulkSensorAssociationUiSettingsTransform;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): BulkSensorAssociationUiSettingsTransform;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<BulkSensorAssociationUiSettingsTransform>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<BulkSensorAssociationUiSettingsTransform> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<BulkSensorAssociationUiSettingsTransform> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<BulkSensorAssociationUiSettingsTransform>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<BulkSensorAssociationUiSettingsTransform> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, BulkSensorAssociationUiSettingsTransform> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, BulkSensorAssociationUiSettingsTransform> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<BulkSensorAssociationUiSettingsTransform>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<BulkSensorAssociationUiSettingsTransform>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): BulkSensorAssociationUiSettingsTransform;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): BulkSensorAssociationUiSettingsTransform;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): BulkSensorAssociationUiSettingsTransform;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): BulkSensorAssociationUiSettingsTransform;

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
  static make(fields: any, withDefaults?: boolean): BulkSensorAssociationUiSettingsTransform;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): BulkSensorAssociationUiSettingsTransform;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): BulkSensorAssociationUiSettingsTransform;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): BulkSensorAssociationUiSettingsTransform;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<BulkSensorAssociationUiSettingsTransform> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): BulkSensorAssociationUiSettingsTransform;

  /**
   * Transforms data from an object such as evalMetricsResult, to UiSdlChartData type.
   */
  static transform(data: BulkSensorAssociationUiSettings, context?: UiSdlDataTransform.Context): any | null;

  /**
   * A function that transforms the action's arguments.
   *
   * @param arguments
   *            The search argument spec object to be sent to backend
   * @param componentId
   *            Component Id.
   * @param state
   *            Redux state.
   * @param context
   *            Transformation context
   * @returns The action argument with a new filter query.
   *
   * {
   *    spec: {
   *      filter: "contains(lowerCase(string(fieldName)), \"transformed value\")"
   *    }
   * }
   */
  static transformArgs(arguments?: Map_Type<string, any>, componentId?: string, state: UiSdlReduxState, context?: UiSdlDataTransform.Context): Map_Type<string, any> | null;
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
