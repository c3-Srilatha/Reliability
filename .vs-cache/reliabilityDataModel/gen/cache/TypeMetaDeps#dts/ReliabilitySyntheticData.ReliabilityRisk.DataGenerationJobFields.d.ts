// TypeScript definitions for the C3 type ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields

/**
 * Fields used to govern the behavior of {@link ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJob}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields
 */
declare namespace ReliabilitySyntheticData.ReliabilityRisk {
  export interface IDataGenerationJobFields {

    /**
     * The Excel workbook containing asset hierarchy and sensor data.
     *
     * @see ReliabilityExcelParser
     * @see ReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet
     */
    templateExcel?: IFile;

    /**
     * If the desired Excel workbook has already been parsed and replicated, the replicated
     * entity can be provided here instead of #templateExcel.
     *
     * The `job` field of this entity will be overwritten with the current job.
     */
    replicatedExcel?: IReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet;

    /**
     * Whether or not to skip the generation of relational data (e.g., {@link ReliabilityAssetEvent},
     * {@link PointPhysicalMeasurementSeries}). This is useful when relational data has already been
     * loaded and only {@link PointMeasurement} data needs to be incrementally generated.
     */
    skipRelationalDataGeneration?: boolean;

    /**
     * The number of replicas of assets *within a single facility* found in #templateExcel
     * to generate before writing individual CSVs to the {@link FileSystem}. Example:
     *
     * ```
     * Initial spreadsheet hierarchy
     *
     *     Facility 1
     *    /          \
     * Asset 1    Asset 2
     *
     * With intrafacilityReplicationFactor = 3
     *
     *                      Facility 1
     *                          |
     * Asset 1  Asset 2  Asset 3  Asset 4  Asset 5  Asset 6
     * ```
     *
     * If #replicatedExcel is provided instead of #templateExcel, this field ignored.
     *
     * @see interfacilityReplicationFactor
     * @see ReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet#replicate
     */
    intrafacilityReplicationFactor: number;

    /**
     * The number of replicas of *the facility itself* found in #templateExcel to
     * generate before writing individual CSVs to the {@link FileSystem}. Example:
     *
     * ```
     * Initial spreadsheet hierarchy
     *
     *     Facility 1
     *    /          \
     * Asset 1    Asset 2
     *
     * With interfacilityReplicationFactor = 3
     *
     *     Facility 1            Facility 2            Facility 3
     *    /          \          /          \          /          \
     * Asset 1    Asset 2    Asset 3    Asset 4    Asset 5    Asset 6
     * ```
     *
     * If #replicatedExcel is provided instead of #templateExcel, this field is ignored.
     *
     * @see intrafacilityReplicationFactor
     * @see ReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet#replicate
     */
    interfacilityReplicationFactor: number;

    /**
     * The number of additional {@link Sensor}s to generate per {@link ReliabilityAsset}
     * in addition to the {@link Sensor}s linked to them in the "REL_Asset_Hierarchy" sheet
     * of #templateExcel. The additional {@link Sensor}s can be thought of as "floating"
     * {@link Sensor}s.
     */
    numberOfExternalSensorsPerAsset: number;

    /**
     * The target expected sensor name for external sensors.
     */
    targetExpectedSensorForExternalSensors?: string;

    /**
     * The time range for generating {@link Sensor} data is defined on the "Time_Range" sheet
     * of #templateExcel. This field allows for overriding that time range to make data loads
     * in incremental batches easier.
     *
     * The interval from the "Time_Range" sheet will be used as the base interval for generating data,
     * and the {@link TimeRange} provided here will always be converted to [UTC](TimeZone#UTC).
     *
     * **NOTE:** Overriding the timestamps of {@link ReliabilityAssetEvent}s (the "Events" sheet)
     *           is not supported. This can only be used for {@link Sensor} data.
     */
    overrideTimeRange?: ITimeRange;

    /**
     * Even though the data may be generated for a long period of time, the way it is
     * written to disk may be in a chunked manner. For example, each file could contain
     * data for all sensors but only for a period of a month.
     */
    chunkDuration: IDuration;

    /**
     * A map of failure mode names to lambda functions.
     */
    failureModeLambdas?: Map_Type<string, Lambda<function(df?: any, expected_sensor_to_sensor_id?: any, abnormal_sensor_bounds_for_failure_mode?: any): any | null>> | {[key: string]: ILambda<function(df?: any, expected_sensor_to_sensor_id?: any, abnormal_sensor_bounds_for_failure_mode?: any): any | null>};

    /**
     * The path to the folder where all generated `Canonical` data will be written.
     *
     * For incremental data generation, make sure each new batch of generated data
     * is written to a different folder to avoid reprocessing the same data through data integration.
     * It is recommended to name the folder with the start and end dates of #overrideTimeRange.
     * E.g., `syntheticCanonicalDataIncremental/2024_01_01_00:00:00Z__2024_01_01_01:00:00Z/`.
     */
    folderPath: string;

    /**
     * Represents the number of batches of data for which data will be generated
     * by each process.
     */
    batchSize: number;
  }
}

/**
 * Fields used to govern the behavior of {@link ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJob}.
 *
 * @remarks this represents a made instance of ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields
 */
declare namespace ReliabilitySyntheticData.ReliabilityRisk {
  export class DataGenerationJobFields extends Obj  {

    /**
     * The Excel workbook containing asset hierarchy and sensor data.
     *
     * @see ReliabilityExcelParser
     * @see ReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet
     */
    readonly templateExcel?: File;
    withTemplateExcel(templateExcel: IFile | null): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * If the desired Excel workbook has already been parsed and replicated, the replicated
     * entity can be provided here instead of #templateExcel.
     *
     * The `job` field of this entity will be overwritten with the current job.
     */
    readonly replicatedExcel?: ReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet;
    withReplicatedExcel(replicatedExcel: IReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet | null): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Whether or not to skip the generation of relational data (e.g., {@link ReliabilityAssetEvent},
     * {@link PointPhysicalMeasurementSeries}). This is useful when relational data has already been
     * loaded and only {@link PointMeasurement} data needs to be incrementally generated.
     */
    readonly skipRelationalDataGeneration?: boolean;
    withSkipRelationalDataGeneration(skipRelationalDataGeneration: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * The number of replicas of assets *within a single facility* found in #templateExcel
     * to generate before writing individual CSVs to the {@link FileSystem}. Example:
     *
     * ```
     * Initial spreadsheet hierarchy
     *
     *     Facility 1
     *    /          \
     * Asset 1    Asset 2
     *
     * With intrafacilityReplicationFactor = 3
     *
     *                      Facility 1
     *                          |
     * Asset 1  Asset 2  Asset 3  Asset 4  Asset 5  Asset 6
     * ```
     *
     * If #replicatedExcel is provided instead of #templateExcel, this field ignored.
     *
     * @see interfacilityReplicationFactor
     * @see ReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet#replicate
     */
    readonly intrafacilityReplicationFactor: number;
    withIntrafacilityReplicationFactor(intrafacilityReplicationFactor: number): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * The number of replicas of *the facility itself* found in #templateExcel to
     * generate before writing individual CSVs to the {@link FileSystem}. Example:
     *
     * ```
     * Initial spreadsheet hierarchy
     *
     *     Facility 1
     *    /          \
     * Asset 1    Asset 2
     *
     * With interfacilityReplicationFactor = 3
     *
     *     Facility 1            Facility 2            Facility 3
     *    /          \          /          \          /          \
     * Asset 1    Asset 2    Asset 3    Asset 4    Asset 5    Asset 6
     * ```
     *
     * If #replicatedExcel is provided instead of #templateExcel, this field is ignored.
     *
     * @see intrafacilityReplicationFactor
     * @see ReliabilitySyntheticData.ReliabilityRisk.AssetHierarchySpreadsheet#replicate
     */
    readonly interfacilityReplicationFactor: number;
    withInterfacilityReplicationFactor(interfacilityReplicationFactor: number): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * The number of additional {@link Sensor}s to generate per {@link ReliabilityAsset}
     * in addition to the {@link Sensor}s linked to them in the "REL_Asset_Hierarchy" sheet
     * of #templateExcel. The additional {@link Sensor}s can be thought of as "floating"
     * {@link Sensor}s.
     */
    readonly numberOfExternalSensorsPerAsset: number;
    withNumberOfExternalSensorsPerAsset(numberOfExternalSensorsPerAsset: number): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * The target expected sensor name for external sensors.
     */
    readonly targetExpectedSensorForExternalSensors?: string;
    withTargetExpectedSensorForExternalSensors(targetExpectedSensorForExternalSensors: string | null): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * The time range for generating {@link Sensor} data is defined on the "Time_Range" sheet
     * of #templateExcel. This field allows for overriding that time range to make data loads
     * in incremental batches easier.
     *
     * The interval from the "Time_Range" sheet will be used as the base interval for generating data,
     * and the {@link TimeRange} provided here will always be converted to [UTC](TimeZone#UTC).
     *
     * **NOTE:** Overriding the timestamps of {@link ReliabilityAssetEvent}s (the "Events" sheet)
     *           is not supported. This can only be used for {@link Sensor} data.
     */
    readonly overrideTimeRange?: TimeRange;
    withOverrideTimeRange(overrideTimeRange: ITimeRange | null): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Even though the data may be generated for a long period of time, the way it is
     * written to disk may be in a chunked manner. For example, each file could contain
     * data for all sensors but only for a period of a month.
     */
    readonly chunkDuration: Duration;
    withChunkDuration(chunkDuration: IDuration): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * A map of failure mode names to lambda functions.
     */
    readonly failureModeLambdas?: Map_Type<string, Lambda<function(df?: any, expected_sensor_to_sensor_id?: any, abnormal_sensor_bounds_for_failure_mode?: any): any | null>>;
    withFailureModeLambdas(failureModeLambdas: Map_Type<string, Lambda<function(df?: any, expected_sensor_to_sensor_id?: any, abnormal_sensor_bounds_for_failure_mode?: any): any | null>> | {[key: string]: ILambda<function(df?: any, expected_sensor_to_sensor_id?: any, abnormal_sensor_bounds_for_failure_mode?: any): any | null>} | null): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * The path to the folder where all generated `Canonical` data will be written.
     *
     * For incremental data generation, make sure each new batch of generated data
     * is written to a different folder to avoid reprocessing the same data through data integration.
     * It is recommended to name the folder with the start and end dates of #overrideTimeRange.
     * E.g., `syntheticCanonicalDataIncremental/2024_01_01_00:00:00Z__2024_01_01_01:00:00Z/`.
     */
    readonly folderPath: string;
    withFolderPath(folderPath: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Represents the number of batches of data for which data will be generated
     * by each process.
     */
    readonly batchSize: number;
    withBatchSize(batchSize: number): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    static fromJson(json: any): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields | null;

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
    static fromJsonString(json: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields | null;

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
    static fromXmlString(xml: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withoutFieldAtPath(path: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withoutField(field: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withoutField(field: FieldType): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    defaultField(field: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    defaultField(field: FieldType): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    unsetField(field: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    unsetField(field: FieldType): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    removeField(field: string): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    removeField(field: FieldType): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    mergeJson(json: any): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    static make(fields: any, withDefaults?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

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
    afterMake(): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilitySyntheticData.ReliabilityRisk.DataGenerationJobFields;
  }
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
