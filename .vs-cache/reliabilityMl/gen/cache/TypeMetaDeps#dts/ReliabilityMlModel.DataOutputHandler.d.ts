// TypeScript definitions for the C3 type ReliabilityMlModel.DataOutputHandler

/**
 * This type represents a MIMO Data Output Handler for the {@link ReliabilityMlModel}.
 * For each corresponding {@link Data} output, this
 * handler will perform the following operations:
 * 1. For each subject, find the corresponding {@link TimedDataHeader} using {@link #targetPointType}. If it doesn't
 *    exist, create one. The header id is created using the MD5 hash
 * 2. For each point in the {@link Data} output, create a new {@link #targetPointType}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlModel.DataOutputHandler
 */
declare namespace ReliabilityMlModel {
  export interface IDataOutputHandler {

    /**
     * Target name for {@link MlModel.id} used for operation.
     */
    modelId: string;

    /**
     * Target name for {@link MlSubject.id} for which the output is computed.
     */
    subjectId: string;

    /**
     * Datermines which type of model status to persist results for.
     */
    statusLabel?: string;

    /**
     * Target name for {@link MlModel.Route.Status.tags} of {@link MlModel.Route} used for operation.
     */
    statusTags: string;

    /**
     * Target name for timestamp of operation.
     */
    outputTimestamp: string;

    /**
     * The {@link MlPipeline#outNames pipeline outputs} that are processed by this handler.
     * If `null` and if there are multiple outputs to the pipeline, an error is thrown.
     */
    outputNames?: Array_Type<string> | Array<string>;

    /**
     * Mapping to rename the metadata columns {@link MlModel.OutputHandlerMetaColumns} and data columns of an
     * instance of {@link Data} in the output handlers. If an output column is mapped to `null` (or `None` in Python),
     * it is dropped.
     *
     * As a convenience, if a user provides a mapping involving one of the special {@link MlModel.OutputHandlerMetaColumns},
     * then the user-provided mapping will take precedence.
     *
     * Additionally, if a user provides a mapping for a column that does not exist in the output data, that column
     * mapping will be ignored.
     *
     * For {@link MlModel.CSVOutputHandler}
     * - If an output column is not mapped, best-effort mapping is performed to match the CSV header, and any unmatched
     * columns will be dropped.
     *
     * For {@link MlModel.DbOutputHandler}
     * - If an output column is not mapped, best-effort mapping is performed to match the {@link MlModel.DbOutputHandler#targetType}
     * declared fieldnames, and any unmatched columns will be dropped.
     */
    columnMapping?: Map_Type<string, string> | {[key: string]: string};

    /**
     * If provided, then any columns not mapped in {@link #columnMapping} will be merged into a single field in the
     * target type, with the provided field name.
     * The field type should be a map with string keys. It will be populated with a map, where the key represents
     * the column name from the handled output and the value represents the corresponding value in that column.
     * NOTE: if this field is set, then there will not be any automatic column mapping of unspecified columns!
     */
    mergeField?: string;

    /**
     * The batch size for merging new {@link #targetPointType} points.
     */
    mergeBatchSize?: number;

    /**
     * A {@link TimedDataPoint} type with a parent {@link TimedDataHeader} Type. A new instance of
     * {@link #targetPointType} is created for each row in the output {@link Data}. A new instance of the
     * corresponding {@link TimedDataHeader} is created for each column in each output {@link Data}
     *
     * @see ReliabilityMl.Prediction
     * @see ReliabilityMl.Contribution
     * @see ReliabilityMl.ValidationPrediction
     * @see ReliabilityMl.ValidationContribution
     */
    targetPointType: IType<<TimedDataPoint>>;

    /**
     * Flag used to determine if the {@link MlModel.ReliabilityOutputHandler} is being used to write
     * {@link ReliabilityMl.ValidationPrediction}s and {@link ReliabilityMl.ValidationContribution}s
     */
    isHandlerForValidation?: boolean;
  }
}

/**
 * This type represents a MIMO Data Output Handler for the {@link ReliabilityMlModel}.
 * For each corresponding {@link Data} output, this
 * handler will perform the following operations:
 * 1. For each subject, find the corresponding {@link TimedDataHeader} using {@link #targetPointType}. If it doesn't
 *    exist, create one. The header id is created using the MD5 hash
 * 2. For each point in the {@link Data} output, create a new {@link #targetPointType}.
 *
 * @remarks this represents a made instance of ReliabilityMlModel.DataOutputHandler
 */
declare namespace ReliabilityMlModel {
  export class DataOutputHandler extends Obj  {

    /**
     * Target name for {@link MlModel.id} used for operation.
     */
    readonly modelId: string;
    withModelId(modelId: string): ReliabilityMlModel.DataOutputHandler;

    /**
     * Target name for {@link MlSubject.id} for which the output is computed.
     */
    readonly subjectId: string;
    withSubjectId(subjectId: string): ReliabilityMlModel.DataOutputHandler;

    /**
     * Datermines which type of model status to persist results for.
     */
    readonly statusLabel?: string;
    withStatusLabel(statusLabel: string | null): ReliabilityMlModel.DataOutputHandler;

    /**
     * Target name for {@link MlModel.Route.Status.tags} of {@link MlModel.Route} used for operation.
     */
    readonly statusTags: string;
    withStatusTags(statusTags: string): ReliabilityMlModel.DataOutputHandler;

    /**
     * Target name for timestamp of operation.
     */
    readonly outputTimestamp: string;
    withOutputTimestamp(outputTimestamp: string): ReliabilityMlModel.DataOutputHandler;

    /**
     * The {@link MlPipeline#outNames pipeline outputs} that are processed by this handler.
     * If `null` and if there are multiple outputs to the pipeline, an error is thrown.
     */
    readonly outputNames?: Array_Type<string>;
    withOutputNames(outputNames: Array_Type<string> | Array<string> | null): ReliabilityMlModel.DataOutputHandler;

    /**
     * Mapping to rename the metadata columns {@link MlModel.OutputHandlerMetaColumns} and data columns of an
     * instance of {@link Data} in the output handlers. If an output column is mapped to `null` (or `None` in Python),
     * it is dropped.
     *
     * As a convenience, if a user provides a mapping involving one of the special {@link MlModel.OutputHandlerMetaColumns},
     * then the user-provided mapping will take precedence.
     *
     * Additionally, if a user provides a mapping for a column that does not exist in the output data, that column
     * mapping will be ignored.
     *
     * For {@link MlModel.CSVOutputHandler}
     * - If an output column is not mapped, best-effort mapping is performed to match the CSV header, and any unmatched
     * columns will be dropped.
     *
     * For {@link MlModel.DbOutputHandler}
     * - If an output column is not mapped, best-effort mapping is performed to match the {@link MlModel.DbOutputHandler#targetType}
     * declared fieldnames, and any unmatched columns will be dropped.
     */
    readonly columnMapping?: Map_Type<string, string>;
    withColumnMapping(columnMapping: Map_Type<string, string> | {[key: string]: string} | null): ReliabilityMlModel.DataOutputHandler;

    /**
     * If provided, then any columns not mapped in {@link #columnMapping} will be merged into a single field in the
     * target type, with the provided field name.
     * The field type should be a map with string keys. It will be populated with a map, where the key represents
     * the column name from the handled output and the value represents the corresponding value in that column.
     * NOTE: if this field is set, then there will not be any automatic column mapping of unspecified columns!
     */
    readonly mergeField?: string;
    withMergeField(mergeField: string | null): ReliabilityMlModel.DataOutputHandler;

    /**
     * The batch size for merging new {@link #targetPointType} points.
     */
    readonly mergeBatchSize?: number;
    withMergeBatchSize(mergeBatchSize: number | null): ReliabilityMlModel.DataOutputHandler;

    /**
     * A {@link TimedDataPoint} type with a parent {@link TimedDataHeader} Type. A new instance of
     * {@link #targetPointType} is created for each row in the output {@link Data}. A new instance of the
     * corresponding {@link TimedDataHeader} is created for each column in each output {@link Data}
     *
     * @see ReliabilityMl.Prediction
     * @see ReliabilityMl.Contribution
     * @see ReliabilityMl.ValidationPrediction
     * @see ReliabilityMl.ValidationContribution
     */
    readonly targetPointType: Type<<TimedDataPoint>>;
    withTargetPointType(targetPointType: IType<<TimedDataPoint>>): ReliabilityMlModel.DataOutputHandler;

    /**
     * Flag used to determine if the {@link MlModel.ReliabilityOutputHandler} is being used to write
     * {@link ReliabilityMl.ValidationPrediction}s and {@link ReliabilityMl.ValidationContribution}s
     */
    readonly isHandlerForValidation?: boolean;
    withIsHandlerForValidation(isHandlerForValidation: boolean): ReliabilityMlModel.DataOutputHandler;

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
    static fromJson(json: any): ReliabilityMlModel.DataOutputHandler | null;

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
    static fromJsonString(json: string): ReliabilityMlModel.DataOutputHandler | null;

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
    static fromXmlString(xml: string): ReliabilityMlModel.DataOutputHandler | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityMlModel.DataOutputHandler | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityMlModel.DataOutputHandler;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlModel.DataOutputHandler;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlModel.DataOutputHandler>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlModel.DataOutputHandler>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlModel.DataOutputHandler;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityMlModel.DataOutputHandler;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    withoutFieldAtPath(path: string): ReliabilityMlModel.DataOutputHandler;

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
    withoutField(field: string): ReliabilityMlModel.DataOutputHandler;

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
    withoutField(field: FieldType): ReliabilityMlModel.DataOutputHandler;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityMlModel.DataOutputHandler;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMlModel.DataOutputHandler;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityMlModel.DataOutputHandler;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMlModel.DataOutputHandler;

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
    defaultField(field: string): ReliabilityMlModel.DataOutputHandler;

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
    defaultField(field: FieldType): ReliabilityMlModel.DataOutputHandler;

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
    unsetField(field: string): ReliabilityMlModel.DataOutputHandler;

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
    unsetField(field: FieldType): ReliabilityMlModel.DataOutputHandler;

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
    removeField(field: string): ReliabilityMlModel.DataOutputHandler;

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
    removeField(field: FieldType): ReliabilityMlModel.DataOutputHandler;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMlModel.DataOutputHandler;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMlModel.DataOutputHandler;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMlModel.DataOutputHandler;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMlModel.DataOutputHandler;

    mergeJson(json: any): ReliabilityMlModel.DataOutputHandler;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMlModel.DataOutputHandler;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityMlModel.DataOutputHandler;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityMlModel.DataOutputHandler>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMlModel.DataOutputHandler> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityMlModel.DataOutputHandler> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityMlModel.DataOutputHandler>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityMlModel.DataOutputHandler> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityMlModel.DataOutputHandler> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMlModel.DataOutputHandler> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityMlModel.DataOutputHandler>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityMlModel.DataOutputHandler>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMlModel.DataOutputHandler;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMlModel.DataOutputHandler;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMlModel.DataOutputHandler;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    static make(fields: any, withDefaults?: boolean): ReliabilityMlModel.DataOutputHandler;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMlModel.DataOutputHandler;

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
    afterMake(): ReliabilityMlModel.DataOutputHandler;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityMlModel.DataOutputHandler;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMlModel.DataOutputHandler> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityMlModel.DataOutputHandler;

    /**
     * Process the output of a {@link MlPipeline} (returned by {@link MlPipeline#process})
     * using the provided metadata in argument.
     *
     * @param subjects
     *          the {@link MlSubject subjects} on which the input data for the pipeline was computed
     * @param route
     *          the route referencing the {@link MlModel} used to process the data
     *          (contains the {@link MlModel.Route.Status status} of the route)
     * @param output
     *          the output of the pipeline (see {@link MlPipeline#process});
     *          if empty, the process returns immediately (no-op)
     * @param start
     *          the start of the {@link Feature} evaluation for the pipeline input (see {@link MlModel#process})
     * @param end
     *          the end of the {@link Feature} evaluation for the pipeline input (see {@link MlModel#process})
     */
    process(subjects: Array_Type<MlSubject>, route: MlModel.Route, output?: Tuple, start?: DateTime, end?: DateTime): void;

    /**
     * Validates compatibility of this handler with outputs of a given {@link MlModel model}.
     * Throws an exception if the handler is incompatible with the {@link #model}.
     */
    validate(model: MlModel, op: string): void;

    /**
     * Processes the output {@link Data} from the given {@link MlModel.Route}.
     * This method is implemented by the subtypes of {@link MlModel.DataOutputHandler} and
     * called with {@link MlModel.DataOutputHandler#process}
     *
     * @param route
     *    the route argument passed to {@link process}
     * @param output
     *    the output to convert; the columns are mapped using {@link columnMapping}
     */
    doProcess(route: MlModel.Route, output: Data): void;

    /**
     * Process the MIMO output for the given {@link MlModel.Route}. This method will throw an exception if `output`
     * is an instance of {@link Data}.
     * @see MlModel.DataOutputHandler#doProcess
     */
    doProcess(route: MlModel.Route, output?: Map_Type<string, Data>): void;

    /**
     * Retrieves data output for a given outputName.
     * If the outputName does not contain a reference to {@link Data}, an error is raised.
     *
     * @param pipelineOutput
     *    outputs of {@link MlPipeline}.
     * @param outputName
     *    Output name to retrieve an instance of {@link Data}
     *
     * @returns an instance of {@link Data} corresponding to outputName
     */
    static getData(pipelineOutput?: Tuple, outputName?: string): Data | null;

    /**
     * Transform the output data for output handling.
     * @param route
     *    the route argument passed to {@link process}
     * @param output
     *    the output to convert; the columns are mapped using {@link columnMapping}
     * @return A native python dictionary that holds transformed pandas dataframe and column mapper dictionary.
     */
    transform(route: MlModel.Route, output: Data): any;

    /**
     * Transform and save the output predictions.
     *
     * @param route
     *    the route argument passed to {@link process}
     * @param output
     *    the MIMO output to convert; the columns are mapped using {@link columnMapping}
     */
    write(route: MlModel.Route, output: Map_Type<string, Data>): void;
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
