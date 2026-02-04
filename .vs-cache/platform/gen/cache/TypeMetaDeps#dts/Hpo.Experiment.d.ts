// TypeScript definitions for the C3 type Hpo.Experiment

/**
 * An {@link Hpo.Experiment} provides the result of hyperparameter optimization to find the best model/pipeline, which
 * is instantiated from a parent {@link MlPipe}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Hpo.Experiment
 */
declare namespace Hpo {
  export interface IExperiment {

    /**
     * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
     * of its base type's typeIdent
     */
    typeIdent?: string | null;

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    id: string;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    versionEdits?: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>;

    /**
     * A name that identifies a hyperparameter search on an {@link MlPipeline}.
     */
    name?: string | null;

    /**
     * Various system fields.
     */
    meta?: IMeta | null;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    version?: number | null;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    typeWithBindings?: IType | null;

    /**
     * {@link JobOptions} for executing this coordinator.
     */
    jobOptions?: IJobOptions | null;

    /**
     * the spec used for determining various parameters of HPO Search like scoring metrics, execution details and
     * validation details.
     */
    spec?: IHpo.Spec | null;

    /**
     * Customizations for train and score of {@link #pipeRef} during Hpo.
     * This holds the {@link Hpo.Spec}.
     */
    operationSpec?: IMlOperationSpec | null;

    /**
     * A copy of the {@link MlPipe} template which instantiated the HPO Search.
     */
    parentPipe?: IMlPipe<any, any, any, any, any> | null;

    /**
     * {@link MlPipe} template which instantiated the HPO Search.
     */
    pipeRef?: IMlPipe<any, any, any, any, any> | null;

    /**
     * {@link Workflow} that is orchestrating {@link Hpo.Experiment#search}.
     */
    workflow?: IWorkflow | null;

    /**
     * Error due to which the {@link #workflowRun} might have failed or been cancelled.
     */
    error?: string | null;

    /**
     * Keeps track of the state of the search.
     * 'initial' - search has started but first hyperparameter combinations have not been launched
     * 'running' - trainings for hyperparameter combinations are in progress
     * 'interrupted' - search was manually stopped by user via {#stopSearch}
     * 'completed' - search successfully launched and completed all trainings with no errors
     * 'completed_with_errors' - search successfully launched and completed all trainings, but there is at least one training error
     * 'failed' - search itself failed (not to be confused with a failure in an individual training)
     */
    status?: string | null;

    /**
     * Optional human-readable description of why a search was terminated.
     */
    stopReason?: string | null;

    /**
     * This field contain references to search trials whose training
     * was not complete by the last time that {@link Hpo.Trial} executed.
     */
    pendingTrials?: C3.Array<Hpo.Trial | null> | Array<IHpo.Trial | null>;

    /**
     * This field contains references to search trials that have completed
     * by the last time that {@link Hpo.Trial} executed.
     */
    completedTrials?: C3.Array<Hpo.Trial | null> | Array<IHpo.Trial | null>;

    /**
     * Timestamp of the beginning of the search.
     */
    startTimestamp?: DateTime | Date | string | null;

    /**
     * Timestamp of the end of the search.
     */
    endTimestamp?: DateTime | Date | string | null;

    /**
     * Indicates whether hyperparameter tuning should prefer a higher or lower score.
     */
    higherIsBetter?: boolean;

    /**
     * List of Json string of data that needs to be excluded from cleanup of validation splits.
     * This includes x, y and any background data associated with {@link #pipeRef}.
     */
    excludeFromCleanup?: C3.Array<string | null> | Array<string | null>;
  }
}

/**
 * An {@link Hpo.Experiment} provides the result of hyperparameter optimization to find the best model/pipeline, which
 * is instantiated from a parent {@link MlPipe}.
 *
 * @remarks this represents a made instance of Hpo.Experiment
 */
declare namespace Hpo {
  export class Experiment extends Obj {

    /**
     * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
     * of its base type's typeIdent
     */
    readonly typeIdent?: string | null;
    withTypeIdent(typeIdent: string | null): Hpo.Experiment;

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    readonly id: string;
    withId(id: string): Hpo.Experiment;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    readonly versionEdits?: C3.Array<VersionEdit | null>;
    withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): Hpo.Experiment;

    /**
     * A name that identifies a hyperparameter search on an {@link MlPipeline}.
     */
    readonly name?: string | null;
    withName(name: string | null): Hpo.Experiment;

    /**
     * Various system fields.
     */
    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): Hpo.Experiment;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    readonly version?: number | null;
    withVersion(version: number | null): Hpo.Experiment;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    readonly typeWithBindings?: Type | null;
    withTypeWithBindings(typeWithBindings: IType | null): Hpo.Experiment;

    /**
     * {@link JobOptions} for executing this coordinator.
     */
    readonly jobOptions?: JobOptions | null;
    withJobOptions(jobOptions: IJobOptions | null): Hpo.Experiment;

    /**
     * the spec used for determining various parameters of HPO Search like scoring metrics, execution details and
     * validation details.
     */
    readonly spec?: Hpo.Spec | null;
    withSpec(spec: IHpo.Spec | null): Hpo.Experiment;

    /**
     * Customizations for train and score of {@link #pipeRef} during Hpo.
     * This holds the {@link Hpo.Spec}.
     */
    readonly operationSpec?: MlOperationSpec | null;
    withOperationSpec(operationSpec: IMlOperationSpec | null): Hpo.Experiment;

    /**
     * A copy of the {@link MlPipe} template which instantiated the HPO Search.
     */
    readonly parentPipe?: MlPipe<any, any, any, any, any> | null;
    withParentPipe(parentPipe: IMlPipe<any, any, any, any, any> | null): Hpo.Experiment;

    /**
     * {@link MlPipe} template which instantiated the HPO Search.
     */
    readonly pipeRef?: MlPipe<any, any, any, any, any> | null;
    withPipeRef(pipeRef: IMlPipe<any, any, any, any, any> | null): Hpo.Experiment;

    /**
     * {@link Workflow} that is orchestrating {@link Hpo.Experiment#search}.
     */
    readonly workflow?: Workflow | null;
    withWorkflow(workflow: IWorkflow | null): Hpo.Experiment;

    /**
     * Error due to which the {@link #workflowRun} might have failed or been cancelled.
     */
    readonly error?: string | null;
    withError(error: string | null): Hpo.Experiment;

    /**
     * Keeps track of the state of the search.
     * 'initial' - search has started but first hyperparameter combinations have not been launched
     * 'running' - trainings for hyperparameter combinations are in progress
     * 'interrupted' - search was manually stopped by user via {#stopSearch}
     * 'completed' - search successfully launched and completed all trainings with no errors
     * 'completed_with_errors' - search successfully launched and completed all trainings, but there is at least one training error
     * 'failed' - search itself failed (not to be confused with a failure in an individual training)
     */
    readonly status?: string | null;
    withStatus(status: string | null): Hpo.Experiment;

    /**
     * Optional human-readable description of why a search was terminated.
     */
    readonly stopReason?: string | null;
    withStopReason(stopReason: string | null): Hpo.Experiment;

    /**
     * This field contain references to search trials whose training
     * was not complete by the last time that {@link Hpo.Trial} executed.
     */
    readonly pendingTrials?: C3.Array<Hpo.Trial | null>;
    withPendingTrials(pendingTrials: C3.Array<Hpo.Trial | null> | Array<IHpo.Trial | null>): Hpo.Experiment;

    /**
     * This field contains references to search trials that have completed
     * by the last time that {@link Hpo.Trial} executed.
     */
    readonly completedTrials?: C3.Array<Hpo.Trial | null>;
    withCompletedTrials(completedTrials: C3.Array<Hpo.Trial | null> | Array<IHpo.Trial | null>): Hpo.Experiment;

    /**
     * Timestamp of the beginning of the search.
     */
    readonly startTimestamp?: DateTime | null;
    withStartTimestamp(startTimestamp: DateTime | Date | string | null): Hpo.Experiment;

    /**
     * Timestamp of the end of the search.
     */
    readonly endTimestamp?: DateTime | null;
    withEndTimestamp(endTimestamp: DateTime | Date | string | null): Hpo.Experiment;

    /**
     * Indicates whether hyperparameter tuning should prefer a higher or lower score.
     */
    readonly higherIsBetter?: boolean;
    withHigherIsBetter(higherIsBetter: boolean): Hpo.Experiment;

    /**
     * List of Json string of data that needs to be excluded from cleanup of validation splits.
     * This includes x, y and any background data associated with {@link #pipeRef}.
     */
    readonly excludeFromCleanup?: C3.Array<string | null>;
    withExcludeFromCleanup(excludeFromCleanup: C3.Array<string | null> | Array<string | null>): Hpo.Experiment;

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
    static fromJson(json: any | null): Hpo.Experiment | null;

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
    static fromJsonString(json: string | null): Hpo.Experiment | null;

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
    static fromXmlString(xml: string | null): Hpo.Experiment | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Hpo.Experiment | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Hpo.Experiment;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Hpo.Experiment;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Hpo.Experiment;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Hpo.Experiment | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Hpo.Experiment | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Hpo.Experiment;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Hpo.Experiment;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Hpo.Experiment;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Hpo.Experiment;

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
    withField(field: string, value: any, doNotConvert?: boolean): Hpo.Experiment;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Hpo.Experiment;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Hpo.Experiment;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Hpo.Experiment;

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
    withoutFieldAtPath(path: string): Hpo.Experiment;

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
    withoutField(field: string | null): Hpo.Experiment;

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
    withoutField(field: FieldType | null): Hpo.Experiment;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Hpo.Experiment;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Hpo.Experiment;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Hpo.Experiment;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Hpo.Experiment;

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
    defaultField(field: string): Hpo.Experiment;

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
    defaultField(field: FieldType): Hpo.Experiment;

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
    unsetField(field: string): Hpo.Experiment;

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
    unsetField(field: FieldType): Hpo.Experiment;

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
    removeField(field: string): Hpo.Experiment;

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
    removeField(field: FieldType): Hpo.Experiment;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Hpo.Experiment;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Hpo.Experiment;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Hpo.Experiment;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Hpo.Experiment;

    mergeJson(json: any | null): Hpo.Experiment;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Hpo.Experiment;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Hpo.Experiment;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Hpo.Experiment | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Hpo.Experiment | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Hpo.Experiment | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Hpo.Experiment | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Hpo.Experiment | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Hpo.Experiment | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Hpo.Experiment | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Hpo.Experiment | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Hpo.Experiment | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Hpo.Experiment;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Hpo.Experiment;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Hpo.Experiment;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Hpo.Experiment;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Hpo.Experiment;

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
    static make(fields: any, withDefaults?: boolean): Hpo.Experiment;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): Hpo.Experiment | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Hpo.Experiment;

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
    afterMake(): Hpo.Experiment;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Hpo.Experiment;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Hpo.Experiment>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Hpo.Experiment;

    /**
     * Conduct hyperparameter optimization on the pipe provided to {@link #fromPipe}.
     *
     * @param x
     *          x data to be used for training.
     * @param y
     *          target data to be used for training.
     * @return a {@link MlOperationRun} handle to the running search operation.
     */
    search(x?: any, y?: any): MlOperationRun<any>;

    /**
     * @return the best hyperparameters found during the search. The output of this method should
     *          be directly compatible with {@link MlPipe#withHyperparams}.
     */
    bestHyperparams(): C3.Map<string | null, any>;

    /**
     * Constructor for creating an experiment for a given pipe.
     *
     * @param pipe
     *          the pipe to be used for HPO training iterations.
     * @param operationSpec
     *          the operation spec that will be used for training and scoring the pipe. This shall
     *          also hold the {@link Hpo.Spec}.
     * @return a new instance of {@link Hpo.ExperimentBase}.
     */
    static fromPipe(pipe: MlPipe<any, any, any, any, any>, operationSpec?: MlOperationSpec | null): Hpo.Experiment;

    /**
     * @return the pipe that was used to create this experiment.
     */
    basePipe(): MlPipe<any, any, any, any, any>;

    /**
     * @return the operation spec that was used to create this experiment.
     */
    baseOperationSpec(): MlOperationSpec | null;

    /**
     * Visualize the steps in the current `Workflow`-like object in a graph.
     */
    visualize(spec?: FlowGraphVisualizeSpec | null): any;

    /**
     * @param spec
     *           specializations for the summarization.
     * @return a table with a row for each step and the corresponding execution metadata.
     */
    summary(spec?: Workflow.Monitorable.SummarySpec | null): Data;

    /**
     * @return a map containing all errors. Key is the step's name in {@link #visualize} or {@link #summary}.
     *           Value is the list of error(s) for that step.
     */
    errors(): C3.Map<string | null, C3.Array<string | null>>;

    /**
     * @return whether any errors would be returned by {@link #errors} (i.e. number of keys in map greater than 0).
     */
    hasErrors(): boolean;

    /**
     * Drill down recursively into a step. This allows inspection of nested `Workflow`-like objects in the steps.
     * @param name
     *    the name should be consistent with the step's name in {@link #visualize} or {@link #summary}.
     * @return the nested {@link Workflow.Monitorable} object corresponding to the step.
     */
    magnify(name: string): Workflow.Monitorable;

    /**
     * @return {@link #errors} as a flat array of strings.
     */
    errorsAsFlatArray(): C3.Array<string | null>;

    /**
     * Display a flamegraph of the C3 actions for the `Workflow.Run`-like object
     */
    flamegraph(): any;

    /**
     * Given a list of actions, returns the data required for a flamegraph with the following fields (note that depending on the entry, some fields may be missing):
     *    name: abbreviated name of the action (when [type name]#[action name] is longer than 20 characters, the beginning part of type name is truncated)
     *    value: total time in milliseconds for the action and all of its descendant actions to complete
     *    time: start time of the action
     *    id: action id
     *    asyncParent: id of the parent action in the async tree
     *    parent: id of the parent action in the action tree
     *    asyncRoot: id of the root action in the async tree
     *    nameLong: full name of the action (format: [type name]#[action name])
     *    root: id of the root action in the action tree
     *    children: list of child actions (same format as this object)
     * @return json of flamegraph data
     */
    flamegraphJson(): any | null;

    /**
     * Helper API created for UI to visualize the steps in the current `Workflow`-like object as a {@link FetchResult}
     * @param spec
     *           {@link FetchSpec} for customizing the output.
     *
     * @returns a {@link FetchResult}, one object representing each step and the corresponding execution metadata.
     */
    summaryAsFetchResult(spec?: FetchSpec | null): FetchResult<any>;

    /**
     * Helper API created for UI to count the number of steps in the current `Workflow`-like object in a tabular format.
     *
     * @param spec
     *           {@link FetchFilterSpec} for customizing the output.
     *
     * @returns the number number of steps in the current `Workflow`-like object.
     */
    summaryCount(spec?: FetchFilterSpec | null): number;

    /**
     * Utility method used to get the real sub type information for given parent type through the {@link typeIdent} field.
     *
     * @see typeIdent
     */
    static typeForTypeIdent(typeName: string, typeIdent: string | null, failIfMissing?: boolean): Type | null;

    /**
     * Utility method used to get the type ident value for a give sub type.
     *
     * @see typeIdent
     */
    static typeIdentForType(typeName: string, failIfMissing?: boolean): string | null;

    /**
     * return the typeIdent as a string
     */
    static myTypeIdent(): string | null;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
     *           of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(spec?: FetchSpec | null): FetchResult<Hpo.Experiment | null>;

    /**
     * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param filter
     *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(filter: Filter): FetchResult<Hpo.Experiment | null>;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
     * @return Requested obj stream.
     */
    static fetchObjStream(spec?: FetchStreamSpec | null): Stream<Hpo.Experiment | null>;

    /**
     * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
     * specified maximum batch size.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

    /**
     * Finds rows matching specification and returns them as iterator of Arrow batches.
     *
     * @param spec
     *           Specification of what rows to return.
     * @return Iterator of Arrow batches.
     */
    static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

    /**
     * Fetched multiple obj instances in multiple locales based on specification.
     *
     * @param spec
     *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
     *        type.
     * @return Requested objs where key of map is locale id
     */
    static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<Hpo.Experiment | null> | null>;

    /**
     * @return The number of entries that match the specification.
     */
    static fetchCount(spec?: FetchFilterSpec | null): number;

    /**
     * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
     * For non-kv types, The count is obtained from the query explain plan for the fetch.
     * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
     * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
     * upper bound for the partition. For more accurate results, perform fillBuckets first.
     *
     * @param spec
     *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
     *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
     *        fields.
     * @param updateStatistics
     *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
     *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
     *
     * @return The requested estimated count.
     */
    static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

    /**
     * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
     * a callback function for the given batch.
     *
     * @param spec
     *           Specification of the scan action.
     * @return Statistics of the scan action.
     */
    static scan(spec: ScanSpec): ScanStats | null;

    /**
     * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
     *
     * @param spec
     *        Spec indicating how the operation should work.
     *
     * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
     *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
     *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
     *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
     *             other would be specified, depending on whether you are interested in controlling the number of batches
     *             or batch size.
     *
     * @return A stream of batch ids based on the input parameters.
     */
    static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(spec?: ExistsSpec | null): boolean;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(filter: Filter): boolean;

    /**
     * Used internally to fetch as a stream (e.g. FetchResultOvi)
     */
    static fetchOvi(spec?: FetchSpec | null): any;

    /**
     * Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
     *
     * @param include
     *           Optional include spec to retrieve.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    get(include?: string | null): Hpo.Experiment | null;

    /**
     * Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
     * to fetch the obj, it will not be returned.
     *
     * @param include
     *           Optional include spec to retrieve.  Note that the include spec should reference only fields that are
     *           valid in the returned obj's type.  Otherwise an error may be thrown.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    getSpecific(include?: string | null): Hpo.Experiment | null;

    /**
     * Function to check if an obj was already fetched with an include that contains at least the fields of a specified
     * include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
     * if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
     * specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
     * the behavior.
     *
     * @param spec
     *           Spec that controls various aspects of the function's behavior.
     * @return instance of the obj with all requested fields.
     */
    getMissing(spec: GetMissingSpec): Hpo.Experiment;

    /**
     * Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
     * that are stored in Cassandra.
     *
     * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
     * apis as fast as direct IO apis.
     * Use with caution!!!
     *
     * @param include
     *           Optional include spec to retrieve.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    getDirect(include?: string | null): Hpo.Experiment | null;

    /**
     * Applies a reverse edit (e.g. VersionEdit) to an instance.
     *
     * @param versionEdit
     *        Reverse edit to apply
     *
     * @return The instance after applying the reverse edit.
     */
    applyReverseEdit(versionEdit: VersionEdit): Hpo.Experiment;

    /**
     * @return key field type.
     */
    static keyFieldType(): FieldType;

    /**
     * @return key field value.
     */
    keyFieldValue(): string | null;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    singletonMap(): C3.Map<string | null, WithKey | null>;

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
     * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
     * provide deserialization.
     *
     * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
     * of called-on type, but perhaps not the same type.
     *
     * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
     *
     * @see #toString
     */
    static fromString(s: string | null): Hpo.Experiment | null;

    /**
     * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance already exist.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
     *         will have only those fields populated. Otherwise only the id field will be populated.
     */
    create(spec?: UpsertSpec | null): Hpo.Experiment | null;

    /**
     * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances already exist.
     *
     * @param objs
     *           New objs to create.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
     *         include spec is specified in the 'spec.include' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static createBatch(objs: C3.Array<Hpo.Experiment | null> | null, spec?: UpsertSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances already exist.
     *
     * @param objs
     *           New objs to create.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
     *          `spec.includeObjsInResults`.
     */
    static createBatchObjStream(objs: Stream<Hpo.Experiment | null> | null, spec?: CreateBatchObjStreamSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance does not already exist.
     *
     * @param srcObj
     *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
     *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
     *         obj will have only those fields populated. Otherwise only the id field will be populated.
     */
    update(srcObj?: Hpo.Experiment | null, spec?: UpsertSpec | null): Hpo.Experiment | null;

    /**
     * Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
     * exception will be thrown.
     *
     * @param srcObj
     *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
     *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
     *        doesn't already exist.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
     *         returned obj will have only those fields populated. Otherwise only the id field will be populated.
     */
    upsert(srcObj?: Hpo.Experiment | null, spec?: UpsertSpec | null): Hpo.Experiment | null;

    /**
     * Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
     * updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
     * is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
     * explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
     * {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
     *
     * For collections, the merge operation is applied to every element in the source and updated collection rather than
     * merging the collections themselves.  This means that every element will be merged with the element with the same
     * key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
     * add/append elements to a collection.
     *
     * Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
     *
     * If the operation fails an exception will be thrown.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.
     *
     * @see Mergespec#csvInclude
     */
    merge(spec?: MergeSpec | null): Hpo.Experiment | null;

    /**
     * Merges an instance of a C3 type if it exists and creates it if it doesn't.
     *
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.
     */
    merge(mergeInclude: string, spec?: MergeSpec | null): Hpo.Experiment | null;

    /**
     * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     *
     * @return The created or updated obj.
     */
    touch(spec?: TouchSpec | null): Hpo.Experiment | null;

    /**
     * Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances don't already exist.
     *
     * @param objs
     *        Updated objs.
     * @param srcObjs
     *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
     *        diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
     *        replace the existing one.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
     *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static updateBatch(objs: C3.Array<Hpo.Experiment | null> | null, srcObjs?: C3.Array<Hpo.Experiment | null>, spec?: UpsertSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
     * called again to provide updated instances to be updated. If the operation fails for other reasons and
     * {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     * @param spec
     *        Various parameters that control the operation of the operation
     * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
     *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static updateObjs(objs: λSupplier<C3.Array<Hpo.Experiment | null>>, spec?: UpsertSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
     * fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *        Updated or new objs.
     * @param srcObjs
     *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
     *        diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
     *        existing one if it doesn't already exist.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
     *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static upsertBatch(objs: C3.Array<Hpo.Experiment | null> | null, srcObjs?: C3.Array<Hpo.Experiment | null>, spec?: UpsertSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
     * fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
     * If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
     * default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
     * {@link ObjList}.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     * @param spec
     *        Various parameters that control the operation of the operation
     * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
     *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static upsertObjs(objs: λSupplier<C3.Array<Hpo.Experiment | null>>, spec?: UpsertSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
     * objs will be considered an error.
     *
     * @param objs
     *        Objs to touch.
     *
     * @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
     *         include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static touchBatch(objs: C3.Array<Hpo.Experiment | null> | null, spec?: TouchSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
     * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
     * merge} function.
     *
     * If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *           Objs to merge.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#mergeInclude
     * @see Mergespec#csvInclude
     */
    static mergeBatch(objs: C3.Array<Hpo.Experiment | null> | null, spec?: MergeSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
     * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
     * merge} function.
     *
     * If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *           Objs to merge.
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeBatch(objs: C3.Array<Hpo.Experiment | null> | null, mergeInclude: string, spec?: MergeSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
     * conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
     * fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
     * C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
     * operation is described in the {@link merge} function.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     *
     * @param objs
     *        Lambda providing objs to be merged
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeObjs(objs: λSupplier<C3.Array<Hpo.Experiment | null>>, mergeInclude: string, spec?: MergeSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
     * functions, the set of fields to be merged can be controlled by specifying an include spec in either
     * {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
     * can be controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as
     * in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Hpo.Experiment | null, spec?: MergeAllSpec | null): number | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
     * controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as in
     * {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Hpo.Experiment | null, mergeInclude: string, spec?: MergeAllSpec | null): number | null;

    /**
     * Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
     *
     * If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * @param spec
     *         Various parameters that control the operation of function.
     * @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
     *
     * @see Ann.Db#archive
     */
    remove(spec?: UpsertSpec | null): boolean;

    /**
     * Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
     * reported in the returned {@link ObjList}.
     *
     * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * @param objs
     *         Objs to remove.
     * @param spec
     *         Various parameters that control the operation of function.
     * @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
     *
     * @see Ann.Db#archive
     */
    static removeBatch(objs: C3.Array<Hpo.Experiment | null> | null, spec?: UpsertSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Removes multiple instances of a C3 type based.
     *
     * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * For kv types, data that is currently being compacted will not be removed and thus will not guarantee
     * that all data will be removed. If you need a strong guarantee, use {@link clearCollection} instead.
     *
     * @param spec
     *         Spec controlling the operation
     * @param confirm
     *         Must be specified as true.  Otherwise request will be rejected.
     * @return The number of objs removed.  Note that under some circumstances the total number removed may not be
     *         known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
     *         connection can't return the value).  In those cases, this will return -1.
     */
    static removeAll(spec?: RemoveAllSpec | null, confirm: boolean): number;

    /**
     * Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *         Updated or new objs.  Any existing objs that aren't included in objs will be removed.
     * @param spec
     *         Various parameters that control the operation of function.
     * @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
     *         specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static replace(objs: C3.Array<Hpo.Experiment | null> | null, spec?: UpsertSpec | null): ObjList<Hpo.Experiment | null> | null;

    /**
     * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
     * {@link removeBatch} functions). If the operation fails an exception will be thrown.
     *
     * @return The recovered obj instance with all of its fields populated.
     *
     * @see Ann.Db#archive
     */
    unremove(): Hpo.Experiment | null;

    /**
     * Optional function to call during upsert/create/merge operations when an instance is being created and no value for
     * the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
     * short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
     * generate the id based on other field values present in the input.  Note that if an instance already exists with the
     * produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
     * existing instances for performing updates.
     */
    generateUniqueId(): string;

    /**
     * Callback that is called synchronously during an operation that creates objs before those objs are created.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be created.  The objs will be the entire input objs being created.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeCreate(objs: C3.Array<Hpo.Experiment | null> | null): ObjList<Hpo.Experiment | null>;

    /**
     * Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be updated.  By default the objs will be the complete original source
     *           obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
     *           a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
     *           will have at least those requested fields.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeUpdate(objs: C3.Array<Hpo.Experiment | null> | null): ObjList<Hpo.Experiment | null>;

    /**
     * Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be removed.  By default the objs will be the complete original source
     *           obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
     *           be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
     *           requested fields.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeRemove(objs: C3.Array<Hpo.Experiment | null> | null): ObjList<Hpo.Experiment | null>;

    /**
     * Callback that is called synchronously during a request that creates objs after those objs are created.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were created.  The objs will already have been created.  By default, only the id
     *           is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     * @return List of any errors that were encountered.
     */
    static afterCreate(objs: C3.Array<Hpo.Experiment | null> | null): C3.Array<ObjError | null>;

    /**
     * Callback that is called synchronously during a request that updates objs after those objs are updated.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were updated.  The objs will already have been updated.  By default, only the id
     *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     * @return List of any errors that were encountered.
     */
    static afterUpdate(objs: C3.Array<Hpo.Experiment | null> | null): C3.Array<ObjError | null>;

    /**
     * Callback that is called synchronously during a request that removes objs after those objs are removed.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were removed.  The objs will already have been removed.  By default, only the id
     *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     *           Since the objs will already have been removed, they will be in the state they were in prior to removal.
     * @return List of any errors that were encountered.
     */
    static afterRemove(objs: C3.Array<Hpo.Experiment | null> | null): C3.Array<ObjError | null>;

    /**
     * Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
     * valid for C3 types that are stored in Cassandra.
     *
     * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
     * apis as fast as direct IO apis.
     * Use with caution!!!
     *
     * @param clearNullValues
     *           If true then map keys with null values will be cleared.
     * @return The created or updated obj with only the id populated if it exists and null otherwise.
     */
    upsertDirect(merge?: boolean, clearNullValues?: boolean): Obj | null;

    /**
     * Begin an upsert operation to the secondary data store.
     *
     * IMPORTANT:
     *
     * 1. This is only valid for types that specify a secondary datastore.
     * 2. Currently only types that are not extendable are supported.
     *
     * @param type
     *           Type that the upsert operation is for.
     *
     * @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
     */
    static beginUpsertToSecondaryDs(type: Type): SecondaryDsUpsert;

    /**
     * Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
     * defaulting to using multi-row sql for the deletes.
     *
     * @param spec
     *        Spec controlling the operation
     * @param confirm
     *        Must be specified as true.  Otherwise request will be rejected.
     */
    static clearCollection(spec?: ClearCollectionSpec | null, confirm: boolean): void;

    /**
     * Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
     * {@link merge} or their batch equivalents.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were created.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static created(txn: Transaction): void;

    /**
     * Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
     * {@link merge} or their batch equivalents.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were updated.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static updated(txn: Transaction): void;

    /**
     * Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
     * {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
     * archive operation or it is physically removed.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were removed.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static removed(txn: Transaction): void;

    /**
     * This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
     * Support column alias for evaluate & evalMetrics by passing an ObjNode
     * e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
     * e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
     */
    static eval(spec?: EvalSpec | null): Data | null;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluate(spec: EvaluateSpec): EvaluateResult | null;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple | null>;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
     * {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
     * conditions are met.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluatePii(spec: EvaluateSpec): EvaluateResult | null;

    /**
     * Evaluates a single projection expression for timeseries data.
     *
     * Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
     * or {@link MetricEvaluatable.evalMetrics} should be used instead.
     *
     * @param spec
     *           Specification of the projection expression and which timeseries to evaluate.
     * @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
     *
     * @see MetricEvaluatable
     */
    static tsEval(spec: TSEvalSpec): Obj | null;

    /**
     * Used internally to evaluate as a stream
     */
    static evaluateOvi(spec?: EvaluateSpec | null): any;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
     * as stream of Arrow batches.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static evaluateArrowStream(spec: EvaluateArrowStreamSpec): Stream<Arrow | null>;

    /**
     * Refreshes calc fields for objs for a type based on a spec.
     *
     * @param spec
     *        Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
     *        other options that control the operation.
     * @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshCalcFields(spec?: RefreshCalcFieldsSpec | null): RefreshCalcFieldsBatchJob | null;

    /**
     * Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
     * specified fields will be refreshed.
     *
     * @param spec
     *        Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
     *        other options that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshDefaultFields(spec?: RefreshDefaultFieldsSpec | null): RefreshDefaultFieldsBatchJob | null;

    /**
     * Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
     * and no types that extend them have unique indexes, this does nothing.
     *
     * @param spec
     *        Spec that indicates which objs to refresh unique indexes for along with other options that control
     *        the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshUniqueIndexes(spec?: RefreshUniqueIndexesSpec | null): RefreshUniqueIndexesBatchJob | null;

    /**
     * Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
     * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
     *
     * @param spec
     *        Indicates which objs to refresh analytics for and what time range to use, along with other options that
     *        control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     *
     * @see AnalyticsContainer
     * @see SimpleMetric
     */
    static refreshAnalytics(spec?: RefreshAnalyticsSpec | null): RefreshAnalyticsBatchJob | null;

    /**
     * Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
     * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
     * {@link SimpleMetric.cacheInterval} are considered.
     *
     * @param spec
     *        Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
     *        that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     *
     * @see SimpleMetric
     */
    static refreshMetrics(spec?: RefreshMetricsSpec | null): RefreshMetricsBatchJob | null;

    /**
     * Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
     * function will be called.  For those that have both, only the updated will be called.  If only created should be
     * called in all cases, set the 'spec.createdOnly' field to true.
     *
     * @param spec
     *           Indicates which objs to call the functions for, along with other options that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static runCreatedOrUpdated(spec?: RunCreatedOrUpdatedSpec | null): RunCreatedOrUpdatedBatchJob | null;

    /**
     * Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
     *
     * @param spec
     *        Indicates which types of dependencies should be refreshed along with other parameters that control the
     *        operation of the function.
     */
    static refreshDeps(spec?: RefreshDepsSpec | null): void;

    /**
     * Performs the refresh operation.
     *
     * @param type
     *        Type being refreshed.
     * @param jobType
     *        Batch job type to for refresh.
     * @param spec
     *        Parameters for the refresh operation.
     *
     * @return The batch job that was started.
     */
    static processRefresh(type: Type, jobType: Type, spec: ObjBatch): RefreshBatchJob<any, any, any> | null;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportData(spec?: StartImportDataSpec | null): PushStream<Hpo.Experiment | null>;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportDataWithStats(spec?: StartImportDataSpec | null): PushStreamWithStats<Hpo.Experiment | null>;

    /**
     * Imports instances into a C3 type from a file stored in Cassandra.
     *
     * @param spec
     *        Various parameters that control the operation of function.
     * @param async
     *        Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
     *        synchronous)
     * @return various statistics and errors for the import operation.
     */
    static importData(spec: ImportDataSpec, async?: boolean): ImportDataResult | null;

    /**
     * Exports instances of a C3 type to Cassandra.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return A reference to the Content obj created that contains the exported data and various statistics about the
     *         export.
     */
    static exportData(spec: ExportDataSpec): ExportDataResult | null;

    /**
     * Exports instances of a C3 type to S3 for importing into Redshift.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return Number of objs exported.
     */
    static exportDataForRedShift(spec: RedShiftExportDataSpec): number | null;

    /**
     * @return single instance of this Identified type by id.
     */
    static forId(id: string | null, failIfMissing?: boolean): Hpo.Experiment | null;

    /**
     * Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
     * returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
     * {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
     * the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
     * separate query) to return the requested data from the reference.
     *
     * Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
     * way other than what is described above will ALWAYS return false.
     *
     * @return the current value of the {@link meta#referenceInvalid} field for the instance.
     *
     * @see Meta#referenceInvalid
     */
    referenceInvalid(): boolean;

    /**
     * Generates new unique ids for C3 Obj instances
     *
     * @param count
     *           Number of ids to generate.  Default is 1.
     * @return The requested number of new unique ids.
     */
    static generateNewIds(count?: number | null): C3.Array<string | null>;

    /**
     * Generates synthetic data for a C3 type.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return Various statistics for the operation.
     */
    static generateData(spec?: GenerateDataSpec | null): ActionStats | null;

    /**
     * Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
     */
    static profileData(spec?: FetchSpec | null): GenerateDataSpec | null;

    /**
     * Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
     * such that a subsequent upsert will create a new instance.
     *
     * @return The requested obj without any of its identifying fields.
     */
    withoutIdentity(): Hpo.Experiment | null;

    /**
     * Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
     * type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
     * that type's base type chain.
     *
     * @return The type hierarchy for the requested obj.
     */
    typeOf(): EntityType | null;

    /**
     * Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
     * C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
     * as that type's base type chain.
     *
     * @param objs
     *           Obj instances to get the type hierarchy for.
     * @return The type hierarchies for the requested objs.
     */
    static typeOfBatch(objs: C3.Array<Hpo.Experiment | null> | null): C3.Array<EntityType | null>;

    /**
     * @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
     *         The type itself is returned in all other cases.
     */
    static getRootType(): Type | null;

    /**
     * Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
     * internally during provisioning and should not need to be called manually.
     *
     * @param throwOnNonUniqueIndexError
     *        true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
     *        false, that will be considered benign as it means some other thread process is creating the necessary
     *        indexes.
     *
     * @return True if the operation caused any DLL changes and false if did not.
     */
    static upsertCollection(throwOnNonUniqueIndexError?: boolean): boolean;

    /**
     * Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
     *
     * @type
     *         The Type to validate the schema of.
     * @return true if the schema was updated in this JVM/app
     */
    static validateSchema(type: Type): boolean;

    /**
     * Callback that is called synchronously in response to a call to {@link upsertCollection}.
     */
    static collectionUpserted(): void;

    /**
     * Callback that is called synchronously in response to a call to {@link clearCollection}.
     */
    static collectionCleared(): void;

    /**
     * Used only by DatabaseTestEngine
     */
    static dbEcho(template?: Hpo.Experiment | null, count?: number | null, sendBack?: boolean): number | null;

    /**
     * Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
     * invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
     * condition is considered to be when there is no entry in the reference type for the obj being validated.
     *
     * @param spec
     *           Indicates which references in which types/fields to check.
     * @return List of references that were found to be invalid along with details of why they are invalid.
     */
    static checkReferences(spec?: CheckReferencesSpec | null): CheckReferencesResult | null;

    /**
     * Determines is a path is valid as a filter expression in a fetch call.
     *
     * @param path
     *           Path to validate.
     * @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
     *         itself is invalid, an exception is thrown
     */
    static validatePath(path: string): ValidatePathResult | null;

    /**
     * @return The db table name for relational types and the column family name for Cassandra types
     */
    static schema(): SchemaInfo | null;

    /**
     * Gets all of the dependencies that could invalidate a stored calc field.
     *
     * @param fieldName
     *         The name of the field to find all dependencies of.
     * @return A list of dependencies that can invalidate the stored calc field.
     */
    static calcFieldDeps(fieldName: string): C3.Array<string | null>;

    /**
     * Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
     * IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
     *
     * @param range
     *        Time range to invalidate for.  If null, invalidation will be across all time.
     * @param fields
     *        Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
     *        not used as we don't keep dependency info at the field level.
     * @param autoCommit
     *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
     *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
     *        that state until they are either committed or aborted.
     */
    invalidateTsHeader(range?: TimeRange | null, fields?: C3.Array<string | null>, autoCommit?: boolean): void;

    /**
     * Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
     * {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
     *
     * @param tsInvalidations
     *        Time range to invalidate for.  If null, invalidation will be across all time.
     * @param autoCommit
     *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
     *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
     *        that state until they are either committed or aborted.
     */
    static invalidateTsDataPoints(tsInvalidations: Stream<TsInvalidation | null>, autoCommit?: boolean): void;

    /**
     * API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
     * call action for each batch of `spec.batchSize`.
     *
     * @param spec
     *         A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
     * @param action
     *         The lambda to apply to each batch of objs.
     *
     * @return the ID of the started ObjBatchMapReduceJob
     */
    static eachObjBatch(spec: BatchFetchSpec, action: λBiConsumer<C3.Array<Obj | null>, any>): string;

    /**
     * Implements a simple logic for Persistable call-backs like before create by looping each input obj and
     * calling a transform for it.
     *
     *
     * callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
     */
    static callbackLogic(objs: C3.Array<Hpo.Experiment | null> | null, callback?: λFunction<Hpo.Experiment | null, Hpo.Experiment | null> | null): ObjList<Hpo.Experiment | null>;

    /**
     * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
     * calling a transform for it.
     */
    static afterCallbackLogic(objs: C3.Array<Hpo.Experiment | null> | null, callback?: λFunction<Hpo.Experiment | null, Hpo.Experiment | null> | null): C3.Array<ObjError | null>;

    /**
     * @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
     *         be only 1.  If it does, then there will be multiple.
     */
    static idColNames(): C3.Array<string | null>;

    /**
     * True if this field is unique
     */
    static isUnique(fieldPath: string): boolean;

    /**
     * True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
     * themselves, or there is a unique index that is a subset of the specified fields.
     */
    static isUnique(fieldPaths: C3.Array<string | null>): boolean;

    /**
     * Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
     * #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
     * @param name
     *          The name of field to check
     * @returns Whether or not the specific field name is one of the ones declared by the DB engine.
     */
    static isSystemField(name: string): boolean;

    /**
     * Generates new "pending" results. This function will be called periodically throughout the coordination.
     * After the function returns, it is expected that the new state would be reflected accordingly, if the user calls
     * {@link #pendingResults} (i.e. the result will appear in `pendingResults`).
     * NOTE: "pending" results are not "running", so this function is not responsible for "rate limiting" the execution. For
     * example, it is possible for the function to generate all "pending" results on the first call and generate no more for the
     * remainder of the coordination.
     *
     * NOTE: this API can be used to implement "early stop" or "cancellation" semantics. If it does so, then it is the API's
     * responsibility to clean up and cancel "pending" and "running" results, as well as transitioning them to "completed".
     *
     * @param completed
     *           new results completed since the last time this function was called. The results should be assumed to be
     *           fully materialized.
     *           NOTE: it cannot be assumed that persistable results have been upserted/updated in the database!
     *           In other words, do not call `.get()`!
     * @returns length of created results, as acknowledgement.
     */
    generateNextResults(completed?: Stream<Hpo.Trial | null>): number;

    /**
     * Transitions a result from "pending" to "running". After the function returns, it is expected that the new state would
     * be reflected accordingly, if the user calls {@link #pendingResults} or {@link #runningResults} (i.e. the result is
     * no longer returned in `pendingResults` and is now returned in `runningResults`).
     *
     * @param result
     *           instance of "pending" result, to be transitioned to "running".
     * @return the result instance, as acknowledgement, even if unmodified
     */
    startResult(result: Hpo.Trial): Hpo.Trial;

    /**
     * Applies, post-processing, if any, to a stream of results that has been recently transitioned from "pending" to "running",
     * i.e recently "started" results.
     * @param results
     *           stream of "started" results.
     * @returns stream of post-processed "started" results, as acknowledgement, even if unmodified.
     */
    afterStart(results: Stream<Hpo.Trial | null> | null): Stream<Hpo.Trial | null> | null;

    /**
     * Transitions a result from "running" to "completed". After the function returns, it is expected that the new
     * state would be reflected accordingly, if the user calls {@link #runningResults} or {@link #completedResults} (i.e.
     * the result is no longer returned in `runningResults` and is now returned in `completedResults`).
     *
     * @param result
     *           instance of "running" result, to be transitioned to "completed".
     * @return the result instance, as acknowledgement, even if unmodified.
     */
    completeResult(result: Hpo.Trial): Hpo.Trial;

    /**
     * Checks the currently "running" results for the underlying {@link WorkflowExecutorRun} completion.
     * For the completed {@link WorkflowExecutorRun}s, transitions the corresponding "running" results to "completed" results,
     * and returns a stream of newly "completed" results.
     *
     * @param spec
     *           Optional {@link FetchStreamSpec} for customizing fetching of RT objects.
     * @returns stream of newly "completed" results.
     *           NOTE: even if persistable, the individual results in the stream should be fully materialized. In other
     *           words, there should not be a need to call `.get()` to materialize the result.
     */
    updateRunningResults(spec?: FetchStreamSpec | null): Stream<Hpo.Trial | null> | null;

    /**
     * Applies, post-processing, if any, to a stream of results that has been recently transitioned from "running" to "complete",
     * i.e recently "completed" results.
     *
     * @param results
     *           stream of "completed" results.
     * @returns stream of post-processed "completed" results, as acknowledgement, even if unmodified.
     */
    afterComplete(results: Stream<Hpo.Trial | null> | null): Stream<Hpo.Trial | null> | null;

    /**
     * Gets the {@link WorkflowExecutorRun} from the specialized result type `RT`.
     *
     * @param result
     *           result to get the run for.
     * @return the run corresponding to the provided result. If the result is "pending" and therefore has not started
     *           execution, then returns null.
     *           NOTE: a "completed" result should still have a non-null run.
     */
    runFromResult(result: Hpo.Trial): WorkflowExecutorRun | null;

    /**
     * @return true iff the coordination is complete. This typically means that all results are "completed" and {@link #generatePendingResults}
     *            no longer generates anymore pending results.
     */
    isCoordinationComplete(): boolean;

    /**
     * Any post processing that needs to be done after the coordination is complete.
     * @param run
     *   {@link WorkflowExecutorRun} currently executing the coordination.
     */
    afterCoordinationComplete(run: WorkflowExecutorRun): void;

    /**
     * @return all results that are currently "pending".
     * @param FetchStreamSpec
     *    Optional {@link FetchStreamSpec} for customizing fetching of RT objects.
     */
    pendingResults(spec?: FetchStreamSpec | null): Stream<Hpo.Trial | null> | null;

    /**
     * @return all results that are currently "running".
     * @param FetchStreamSpec
     *    Optional {@link FetchStreamSpec} for customizing fetching of RT objects.
     */
    runningResults(spec?: FetchStreamSpec | null): Stream<Hpo.Trial | null> | null;

    /**
     * @return all results that are currently "completed". This includes results that are failed, canceled, and succeeded.
     * @param FetchStreamSpec
     *    Optional {@link FetchStreamSpec} for customizing fetching of RT objects.
     */
    completedResults(spec?: FetchStreamSpec | null): Stream<Hpo.Trial | null> | null;

    /**
     * Return all results that are "completed" but have been canceled.
     * @param FetchStreamSpec
     *    Optional {@link FetchStreamSpec} for customizing fetching of RT objects.
     */
    canceledResults(spec?: FetchStreamSpec | null): Stream<Hpo.Trial | null> | null;

    /**
     * Return all results that are "completed" but have non-null errors in their {@link #runFromResult}.
     * @param FetchStreamSpec
     *    Optional {@link FetchStreamSpec} for customizing fetching of RT objects.
     */
    erroredResults(spec?: FetchStreamSpec | null): Stream<Hpo.Trial | null> | null;

    /**
     * @return all results, "pending", "running", and "completed".
     * @param FetchStreamSpec
     *    Optional {@link FetchStreamSpec} for customizing fetching of RT objects.
     */
    allResults(spec?: FetchStreamSpec | null): Stream<Hpo.Trial | null> | null;

    /**
     * @return the count of all results that are currently "pending".
     * @param FetchFilterSpec
     *    Optional {@link FetchFilterSpec} for customizing fetching of RT objects.
     */
    pendingResultsCount(spec?: FetchFilterSpec | null): number;

    /**
     * @return the count of all results that are currently "running".
     * @param FetchFilterSpec
     *    Optional {@link FetchFilterSpec} for customizing fetching of RT objects.
     */
    runningResultsCount(spec?: FetchFilterSpec | null): number;

    /**
     * @returns the count of all results that are currently "completed". This includes results that are failed, canceled, and succeeded.
     * @param FetchFilterSpec
     *    Optional {@link FetchFilterSpec} for customizing fetching of RT objects.
     */
    completedResultsCount(spec?: FetchFilterSpec | null): number;

    /**
     * @returns the count of all completed results that are cancelled.
     * @param FetchFilterSpec
     *    Optional {@link FetchFilterSpec} for customizing fetching of RT objects.
     */
    canceledResultsCount(spec?: FetchFilterSpec | null): number;

    /**
     * @return count of all results, "pending", "running", and "completed".
     * @param FetchFilterSpec
     *    Optional {@link FetchFilterSpec} for customizing fetching of RT objects.
     */
    allResultsCount(spec?: FetchFilterSpec | null): number;

    /**
     * @return the count of all results that are "completed" but have non-null errors in their {@link #runFromResult}.
     */
    erroredResultsCount(): number;

    /**
     * Optional override to augment the result of {@link #summary}. By default, the summary only
     * holds generic information like execution start/end time. By overriding this function, the developer can add
     * custom fields based on their specialized `RT`.
     * NOTE: this does not override the default summary - it adds to it. It is important for consistency to retain the
     * default summary fields.
     * As an example, suppose the specific result type `RT` holds information about a score computed from the underlying `Workflow`.
     * The summary for that result can be augmented with `{"score": result.score}`.
     *
     * @param result
     *           single result to summarize.
     * @return (key, value) pairs, as a map, for any custom fields to add to the summary.
     */
    customSummaryFieldsForResult(result: Hpo.Trial): C3.Map<string | null, any>;

    /**
     * Same as {@link #summary}, except caller supplies explicitly the list of results to summarize, instead
     * of summarizing all results.
     *
     * @param results
     *           a list of results to summarize.
     * @param spec
     *           specializations for the summarization.
     * @return a table with a row for each step and the corresponding execution metadata.
     */
    summaryForResults(results: C3.Array<Hpo.Trial | null> | null, spec?: Workflow.Monitorable.SummarySpec | null): Data;

    /**
     * Same as {@link #summaryForResults}, except the function returns a Panda DataFrame
     *
     * @param results
     *           a list of results to summarize.
     * @param spec
     *           specializations for the summarization.
     * @return a table with a row for each step and the corresponding execution metadata.
     */
    summaryForResultsPd(results: C3.Array<Hpo.Trial | null> | null, spec?: Workflow.Monitorable.SummarySpec | null): any;

    /**
     * Cancels the coordination by canceling the execution of all running and pending results,
     * and transitions those results to "completed". Underlying {@link WorkflowExecutorRun}s corresponding to running
     * results will have "cancel" called on them. However, the "cancel" on the {@link WorkflowExecutorRun} components will happen
     * asynchronously.
     *
     * @return the count of canceled results.
     */
    cancel(): number;

    /**
     * Manually recover failed or canceled results associated with this coordinator i.e. failed and canceled results are re-executed.
     * Similar semantics as {@link BatchJob#recover} or {@link MapReduce#recover}.
     * @param jobOptions
     *    Execution options for the recovery.
     *    To recover only failed results and not canceled results, set {@link MlJobOptions#doNotRecoverCanceled} to be true.
     * @return acknowledgement of recovery. Concrete implementations can customize the returned acknowledgement based on the use-case.
     */
    recover(jobOptions?: JobOptions | null): any;

    /**
     * Attempts auto-recovery for any failed results. Returns the number of results to be recovered.
     */
    autoRecover(): number;

    /**
     * Returns the batch size for `upsertBatch` in `generateNextResults` for sub-types of {@link MlWorkflowCoordinatable}.
     */
    upsertResultsBatchSize(): number;

    /**
     * Helper function for creating a {@link Workflow} to execute this coordinator.
     * @param jobOptions
     *    Execution options for workflow.
     */
    createCoordinatorWorkflow(jobOptions: JobOptions): Workflow;

    /**
     * Helper function for fetching results coordinated by this coordinator.
     * @param spec
     *         {@link FetchSpec} for customizing the results to be fetched.
     *
     * @returns a {@link FetchResult} consisting of results coordinated by this coordinator.
     */
    resultsForSummary(spec?: FetchSpec | null): FetchResult<Hpo.Trial | null> | null;

    /**
     * Stops the HPO search and all related jobs (such as workflow jobs) that may be running for the interrupted search.
     * Note that this function does not check any conditions such as early stop criteria in {@link Hpo.EarlyTermination}.
     *
     * @return interrupted {@link Hpo.Experiment} after a status update to "interrupted".
     */
    stopSearch(): Hpo.Experiment | null;

    /**
     * Initialize the validation technique. Additionally, dynamically validate the input types and ensure they match the
     * variable bindings of the parent pipe and the bindings of the validation technique.
     * @param x
     *     x data to be used for training
     * @param y
     *     target data to be used for training
     */
    initializeValTechnique(x?: any, y?: any): Hpo.Experiment;

    /**
     * @return the {@link Hpo.Trial} among the completed trials with the best score so far, or null if no trials have
     * completed yet.
     * The best score is computed using the scoring metric from {@link Hpo.Spec#hpoMetric} on the validation set, aggregated by
     * the validation technique's aggregation {@link MlSplit.Technique#scoreSummary}.
     */
    bestTrial(): Hpo.Trial | null;

    /**
     * Remove {@link MlPipe}s and runs created from the search. The {@link Hpo.Experiment} and the {@link Hpo.Experiment.workflow} will not be removed.
     * @param spec
     *           Hpo.CleanUpSpec to specify certain trials to keep.
     */
    cleanUp(spec?: Hpo.CleanUpSpec | null): void;

    /**
     * Returns a {@link Data} which corresponds to data of {@link Hpo.Trial}s which includes summary of validation
     * and training scores, start and end time, status, etc.
     * @params sortBy
     *          scoring metric to sort the {@link Data} by. {@link Hpo.Spec#hpoMetric} is used as default.
     *          Sorted descending if {@link Hpo.Spec#higherIsBetter} is True else ascending.
     * @params fetchSpec
     *          {@link FetchSpec} for {@link Hpo.Trial}.
     *          Note: {@link FetchSpec#order} will not effect the summary result. Use `sortBy` to order by metrics.
     * @return {@link Data} with resultant data of {@link Hpo.Trial}s
     */
    trialSummary(sortBy?: string | null, fetchSpec?: FetchSpec | null): Data | null;

    /**
     * Returns the {@link Hpo.Trial} of appropriate trialName.
     * @params trialName
     *         name of {@link Hpo.Trial} to inspect.
     * @return {@link Hpo.Trial} of desired trialName.
     */
    trial(trialName: string): Hpo.Trial | null;

    /**
     * Returns a {@link Data} which corresponds to data of {@link Hpo.Run}s for a {@link Hpo.Trial} which includes
     * validation and training scores, start and end time, etc.
     * @params trialName
     *          name of {@link Hpo.Trial} to inspect the {@link Hpo.Run}s of.
     * @params sortBy
     *          scoring metric to sort the {@link Data} by. {@link Hpo.Spec#hpoMetric} is used as default.
     *          Sorted descending if {@link Hpo.Spec#higherIsBetter} is True else ascending.
     * @params fetchSpec
     *          {@link FetchSpec} for {@link Hpo.Run}.
     *          Note: {@link FetchSpec#order} will not effect the summary result. Use `sortBy` to order by metrics.
     * @return {@link Data} with resultant data of {@link Hpo.Run}s of the desired {@link Hpo.Trial}
     */
    runSummary(trialName: string, sortBy?: string | null, fetchSpec?: FetchSpec | null): Data | null;

    /**
     * returns True if the input is a valid double.
     */
    static isValidDouble(score?: any): boolean;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
