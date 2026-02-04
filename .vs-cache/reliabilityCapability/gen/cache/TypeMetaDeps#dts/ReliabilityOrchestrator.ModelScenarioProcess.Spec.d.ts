// TypeScript definitions for the C3 type ReliabilityOrchestrator.ModelScenarioProcess.Spec

/**
 * Orchestrator interface for creating a {@link Workflow} that will run a {@link ReliabilityMlModelScenario}.
 * An scenario is a process where the user can emulate the {@link Feature} data for a {@link ReliabilityMlModel}
 * (See field {@link ReliabilityOrchestrator.ModelScenarioProcess.Spec#featureOutputData}), over a {@link TimeRange}
 * (See fields {@link ReliabilityOrchestrator.ModelScenarioProcess.Spec#timeRange}).
 *
 * General steps are:
 * - Convert {@link ReliabilityOrchestrator.ModelScenarioProcess.Spec#featureOutputData} into {@link Data}.
 * - For any missing {@link Feature}, retrieve their data for the given time range, and merge it with the generated
 *   {@link Data}.
 * - Use the {@link ReliabilityMlModel#pipeline} and the {@link Data} generated to execute:
 *   - {@link MlPipeline#process}: To generate the algorithm outputs (alerts, risk score, feature outputs, etc).
 *   - {@link MlPipeline#interpret}: To generate the feature contribution (alert feature contribution).
 * - Transform the {@link MlOperationRun}s outputs into the structured defined at {@link ReliabilityMlModelScenario} and
 *   store them as {@link Data.Persisted}.
 *
 * Workflow Diagram:
 * ```mermaid
 * flowchart LR
 *   subgraph Workflow
 *     direction TB
 *     A[\Start/] --> B1["BaseModel#process"]
 *     A --> B2["Convert Mock Features to Data"]
 *     B1 --> C["Build Pipeline xFeatures"]
 *     B2 --> C
 *     C --> D1["Pipeline Process"]
 *     C --> D2["Pipeline Interpret"]
 *     D1 --> E["Parse pipeline results"]
 *     D2 --> E
 *     B1 --> E
 *     E --> F["Store the scenario data"]
 *     F --> z[\End/]
 *   end
 *   Workflow --> h["finallyVertex: handle workflow run status (cancelled/failed/completed)"]
 * ```
 *
 * @see ReliabilityMlModelScenario
 * @see ReliabilityOrchestrator.Utils#parseProcessAndInterpretOutputs
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityOrchestrator.ModelScenarioProcess.Spec
 */
declare namespace ReliabilityOrchestrator.ModelScenarioProcess {
  export interface ISpec {

    /**
     * Name for the {@link Workflow} that will run the scenario.
     */
    name?: string;

    /**
     * {@link ReliabilityMlModelScenario} that will be processed.
     */
    scenario?: IReliabilityMlModelScenario;

    /**
     * Base {@link ReliabilityMlModel} over which this scenario is based.
     * During the scenario execution, we will use the {@link MlPipeline} of this model to
     * generate predictions.
     */
    baseModel: IReliabilityMlModel;

    /**
     * Time range over which the scenario is executed. This range represents the time period for which the data will be
     * processed in the scenario.
     *
     * But it doesn't mean it will be inference data generated for that time range, as the {@link MlPipeline} has a
     * `lookbackPeriod` that defines how much historical data it needs to generate predictions.
     */
    timeRange: ITimeRange;

    /**
     * Map of overridden features and their value generators.
     * The key is the {@link Feature#id}, and the value is a {@link ReliabilityMlModelScenario.ValueGenerator}
     * that will generate the {@link Data} for it.
     */
    featureOutputData?: Map_Type<string, ReliabilityMlModelScenario.ValueGenerator> | {[key: string]: IReliabilityMlModelScenario.ValueGenerator};
  }
}

/**
 * Orchestrator interface for creating a {@link Workflow} that will run a {@link ReliabilityMlModelScenario}.
 * An scenario is a process where the user can emulate the {@link Feature} data for a {@link ReliabilityMlModel}
 * (See field {@link ReliabilityOrchestrator.ModelScenarioProcess.Spec#featureOutputData}), over a {@link TimeRange}
 * (See fields {@link ReliabilityOrchestrator.ModelScenarioProcess.Spec#timeRange}).
 *
 * General steps are:
 * - Convert {@link ReliabilityOrchestrator.ModelScenarioProcess.Spec#featureOutputData} into {@link Data}.
 * - For any missing {@link Feature}, retrieve their data for the given time range, and merge it with the generated
 *   {@link Data}.
 * - Use the {@link ReliabilityMlModel#pipeline} and the {@link Data} generated to execute:
 *   - {@link MlPipeline#process}: To generate the algorithm outputs (alerts, risk score, feature outputs, etc).
 *   - {@link MlPipeline#interpret}: To generate the feature contribution (alert feature contribution).
 * - Transform the {@link MlOperationRun}s outputs into the structured defined at {@link ReliabilityMlModelScenario} and
 *   store them as {@link Data.Persisted}.
 *
 * Workflow Diagram:
 * ```mermaid
 * flowchart LR
 *   subgraph Workflow
 *     direction TB
 *     A[\Start/] --> B1["BaseModel#process"]
 *     A --> B2["Convert Mock Features to Data"]
 *     B1 --> C["Build Pipeline xFeatures"]
 *     B2 --> C
 *     C --> D1["Pipeline Process"]
 *     C --> D2["Pipeline Interpret"]
 *     D1 --> E["Parse pipeline results"]
 *     D2 --> E
 *     B1 --> E
 *     E --> F["Store the scenario data"]
 *     F --> z[\End/]
 *   end
 *   Workflow --> h["finallyVertex: handle workflow run status (cancelled/failed/completed)"]
 * ```
 *
 * @see ReliabilityMlModelScenario
 * @see ReliabilityOrchestrator.Utils#parseProcessAndInterpretOutputs
 *
 * @remarks this represents a made instance of ReliabilityOrchestrator.ModelScenarioProcess.Spec
 */
declare namespace ReliabilityOrchestrator.ModelScenarioProcess {
  export class Spec extends Obj  {

    /**
     * Name for the {@link Workflow} that will run the scenario.
     */
    readonly name?: string;
    withName(name: string | null): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * {@link ReliabilityMlModelScenario} that will be processed.
     */
    readonly scenario?: ReliabilityMlModelScenario;
    withScenario(scenario: IReliabilityMlModelScenario | null): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Base {@link ReliabilityMlModel} over which this scenario is based.
     * During the scenario execution, we will use the {@link MlPipeline} of this model to
     * generate predictions.
     */
    readonly baseModel: ReliabilityMlModel;
    withBaseModel(baseModel: IReliabilityMlModel): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Time range over which the scenario is executed. This range represents the time period for which the data will be
     * processed in the scenario.
     *
     * But it doesn't mean it will be inference data generated for that time range, as the {@link MlPipeline} has a
     * `lookbackPeriod` that defines how much historical data it needs to generate predictions.
     */
    readonly timeRange: TimeRange;
    withTimeRange(timeRange: ITimeRange): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Map of overridden features and their value generators.
     * The key is the {@link Feature#id}, and the value is a {@link ReliabilityMlModelScenario.ValueGenerator}
     * that will generate the {@link Data} for it.
     */
    readonly featureOutputData?: Map_Type<string, ReliabilityMlModelScenario.ValueGenerator>;
    withFeatureOutputData(featureOutputData: Map_Type<string, ReliabilityMlModelScenario.ValueGenerator> | {[key: string]: IReliabilityMlModelScenario.ValueGenerator} | null): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    static fromJson(json: any): ReliabilityOrchestrator.ModelScenarioProcess.Spec | null;

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
    static fromJsonString(json: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec | null;

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
    static fromXmlString(xml: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityOrchestrator.ModelScenarioProcess.Spec>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityOrchestrator.ModelScenarioProcess.Spec>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withoutFieldAtPath(path: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withoutField(field: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withoutField(field: FieldType): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    defaultField(field: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    defaultField(field: FieldType): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    unsetField(field: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    unsetField(field: FieldType): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    removeField(field: string): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    removeField(field: FieldType): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    mergeJson(json: any): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityOrchestrator.ModelScenarioProcess.Spec>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityOrchestrator.ModelScenarioProcess.Spec> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityOrchestrator.ModelScenarioProcess.Spec> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityOrchestrator.ModelScenarioProcess.Spec>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityOrchestrator.ModelScenarioProcess.Spec> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityOrchestrator.ModelScenarioProcess.Spec> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityOrchestrator.ModelScenarioProcess.Spec> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityOrchestrator.ModelScenarioProcess.Spec>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityOrchestrator.ModelScenarioProcess.Spec>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    static make(fields: any, withDefaults?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

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
    afterMake(): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityOrchestrator.ModelScenarioProcess.Spec> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    /**
     * Pre-validation checks to be performed before the workflow is created.
     * E.g. check that required fields are set, that fields are mutually exclusive,
     * validate the state of the application is correct for the workflow to be created, etc.
     * @returns A map containing "errors" and "info" keys, each of which contains
     *          a list of strings representing the pre-validation checks. If no errors
     *          are found, the "errors" key should be an empty list, meaning the spec
     *          is valid to proceed with creating the workflow.
     */
    preValidate(): Map_Type<string, Array_Type<string>>;

    /**
     * Post-validation checks to be performed after the workflow is created.
     * E.g. Once the workflow completes, check that the expected outputs are generated,
     * that the application is in the expected state, etc.
     * @param workflow
     *        The workflow that was created by the {@link #createWorkflow} API.
     * @returns A map containing "errors" and "info" keys, each of which contains
     *          a list of strings representing the post-validation checks. If no errors
     *          are found, the "errors" key should be an empty list, meaning the workflow
     *          completed successfully and the expected outputs were generated.
     */
    postValidate(workflow?: Workflow): Map_Type<string, Array_Type<string>>;

    /**
     * Helper function to determine if the spec is valid.
     * E.g. check that required fields are set, fields are mutually exclusive, etc.
     * Does not return anything, but throws an error if the spec is invalid.
     */
    validate(): void;

    /**
     * @inheritdoc
     */
    createWorkflow(): Workflow | null;

    /**
     * @inheritdoc
     */
    createAndStartWorkflow(): WorkflowExecutorRun | null;

    /**
     * Special function used as {@link Workflow#finallyVertex} to handle the workflow finish status.
     *
     * - If {@link Workflow.Run#runStatus} is `completed`, it will update the {@link ReliabilityMlModelScenario#status}
     *   to {@link ReliabilityOrchestrator.RunStatus#COMPLETE}.
     * - If it is `cancelled` or `failed`, it will update the {@link ReliabilityMlModelScenario#status} to
     *   {@link ReliabilityOrchestrator.RunStatus#FAILED}.
     *
     * @param run The {@link Workflow.Run} that finished. (This is required from {@link Workflow#finallyVertex}).
     * @param scenario The {@link ReliabilityMlModelScenario} that is being processed.
     */
    static handleWorkflowStatus(run: Workflow.Run, scenario: ReliabilityMlModelScenario): void;

    /**
     * Inner helper function used to update the {@link ReliabilityMlModelScenario} with the parsed data from the
     * {@link MlPipeline#process} and {@link MlPipeline#interpret} steps.
     *
     * It expects the `parsedData` to contain the following keys:
     * - `algorithmData`: The processed algorithm data from the #featureOutputData.
     * - `baseModelAlgorithmData`: The algorithm data from the original model data.
     * - `alertData`: The alert data generated from the #featureOutputData with feature contributions.
     * - `featureOutputData`: A map of {@link Feature#id} and their corresponding {@link Data} output for each
     *   {@link ReliabilityMl.Project#featureOutputs}.
     *
     * @param scenario The {@link ReliabilityMlModelScenario} that is being processed.
     * @param parsedData The result of {@link ReliabilityOrchestrator.Utils#parseProcessAndInterpretOutputs}.
     *
     * @returns The {@link ReliabilityMlModelScenario} with `algorithmData`, `originalAlgorithmData`, `alertData`,
     *          `featureOutputData` fields updated from the parsed data.
     */
    static saveScenarioOutputData(scenario: ReliabilityMlModelScenario, parsedData?: any): ReliabilityMlModelScenario | null;

    /**
     * Inner helper function used to update the {@link ReliabilityMlModelScenario#scenarioPipelineData} with the
     * constructed {@link ReliabilityMlModel#xFeatures} data of both the original {@link Feature} data and the
     * given #featureOutputData.
     *
     * @param scenario The {@link ReliabilityMlModelScenario} that is being processed.
     * @param pipelineFeatureData The {@link Map} of {@link Feature#id} to {@link Data} that will be used in
     *                            {@link MlPipeline#process} and {@link MlPipeline#interpret} steps.
     *
     * @returns The updated {@link ReliabilityMlModelScenario}.
     */
    static saveScenarioFeatureData(scenario: ReliabilityMlModelScenario, pipelineFeatureData?: Map_Type<string, any>): ReliabilityMlModelScenario | null;

    /**
     * Helper function that converts the #featureOutputData into a {@link Data} object with each
     * {@link ReliabilityMlModelScenario.ValueGenerator} generating its own column data.
     *
     * @param asset The {@link ReliabilityAsset} related to the given #baseModel.
     *
     * @returns The {@link Data} object with the generated feature data where each column is a {@link Feature#id}.
     */
    convertFeatureGeneratorsToDataFrame(asset: ReliabilityAsset): Data.Persisted | null;

    /**
     * Helper function that builds the {@link ReliabilityMlModel#xFeatures} {@link Data}.
     *
     * - For `mask_*` input, it will generate a {@link Data} with a zeros mask.
     * - For `alertContext` input, it will use `originalProcessedData` to build a {@link Data} with the
     *   {@link ReliabilityMl.Project#primaryModelOutputs} data.
     * - For the rest of the inputs, it will use the `scenarioFeatureData` as input {@link Data}.
     *
     * @param asset The {@link ReliabilityAsset} related to the given #baseModel.
     * @param scenarioFeatureData The {@link Data} generated from the #featureOutputData, which contains the
     *                           {@link ReliabilityMlModelScenario.ValueGenerator} data for the scenario and
     *                           the original {@link Feature} data if missing.
     * @param originalProcessedData {@link MlModel#process} output data for the original model using the real
     *                              {@link Sensor}.
     *
     * @returns A map of {@link ReliabilityMlModel#xFeatures} keys to the new {@link Data} to be used during the
     *          {@link MlPipeline#process} and {@link MlPipeline#interpret} steps.
     */
    buildPipelineXFeaturesData(asset: ReliabilityAsset, scenarioFeatureData: Data, originalProcessedData?: any): Map_Type<string, Data> | null;

    /**
     * Builds the UI Data for the given scenario.
     *
     * @param scenario The {@link ReliabilityMlModelScenario} for which the UI data is being built.
     */
    static buildAndPersistScenarioUIData(scenario: ReliabilityMlModelScenario): void;

    /**
     * Creates a {@link ReliabilityMlModelScenario} and starts a {@link Workflow} to run it.
     *
     * @returns The {@link ReliabilityMlModelScenario} that was created.
     */
    createAndStartWorkflowWithScenario(scenarioName?: string): ReliabilityMlModelScenario | null;
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
