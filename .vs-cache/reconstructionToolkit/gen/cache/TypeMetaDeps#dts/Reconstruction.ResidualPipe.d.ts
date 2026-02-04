// TypeScript definitions for the C3 type Reconstruction.ResidualPipe

/**
 * This type represents a process-only pipe that computes the residual between actual and expected values. The input
 * {@link Data} must already be aligned.
 *
 * @remarks this represents a value passed to a method that expects an instance of Reconstruction.ResidualPipe
 */
declare namespace Reconstruction {
  export interface IResidualPipe {

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
    versionEdits?: Array_Type<VersionEdit> | Array<IVersionEdit>;

    /**
     * Name of this pipe.
     */
    name?: string;

    /**
     * Various system fields.
     */
    meta?: IMeta;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    version?: number;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    typeWithBindings?: IType;

    /**
     * System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
     * the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
     * overridden by provisioning.
     */
    userUpdatedFields?: Array_Type<string> | Array<string>;

    /**
     * Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
     * c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
     * them to reappear.
     */
    hidden?: boolean;

    /**
     * A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
     * field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
     * system.  It will be set while creating an entry if it is being created by the authorizer and the
     * {@link UpsertSpec#forceUserUpdate} is set to true.
     */
    userOwned?: boolean;

    /**
     * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
     * of its base type's typeIdent
     */
    typeIdent?: string;

    /**
     * If true, then the pipe shall not be retrained
     */
    frozen?: boolean;

    /**
     * True if training has succeeded and false otherwise.
     */
    trained?: boolean;

    /**
     * Errors from training.
     */
    trainingErrors?: string;

    /**
     * If true, the underlying model only accepts flattened input.
     */
    flattenInput?: boolean;

    /**
     * The hyperparameters overridden of a native model or pipe.
     */
    hyperparamOverrides?: Map_Type<string, any> | {[key: string]: any};

    /**
     * A collection of {@link Hp.ParamSpace}s for the hyperparameters of this pipe. This search space will be used to
     * perform hyperparameter searches.
     */
    hyperparamSearchSpace?: IHp.SearchSpace;

    /**
     * Used to provide configuration for {@link #search}. Some configurations include how to validate results, which
     * search algorithms will be used, and limits on execution iterations.
     */
    hpoSpec?: IHpo.Spec;

    /**
     * {@link Hpo.Experiment} stores the result of hyperparameter optimization to find the best model/pipeline.
     */
    hpoExperiment?: IHpo.Experiment;

    /**
     * Reference to the experiment that produced this {@link MlPipe}. For example, this could be a {@link Hpo.ExperimentBase}.
     */
    experiment?: any;

    /**
     * Map of urls of saved model files
     * key - model file name, value - {@link Url} corresponding to model file name
     */
    modelFiles?: Map_Type<string, Url> | {[key: string]: IUrl};

    /**
     * A map containing {Module Name: Compressed Source Code} key-value pairs. The module name is the name of the
     * module from where the source code was taken from. (i.e. numpy).
     */
    customModelCode?: Map_Type<string, any> | {[key: string]: any};

    /**
     * Name for the function on the native model to call to do {@link MlProcessable#process}.
     */
    processFunc?: string;

    /**
     * The column names of the `residual` output. If it is not set, this pipe will use the column names from the `actual`
     * input
     */
    columns?: Array_Type<string> | Array<string>;
  }
}

/**
 * This type represents a process-only pipe that computes the residual between actual and expected values. The input
 * {@link Data} must already be aligned.
 *
 * @remarks this represents a made instance of Reconstruction.ResidualPipe
 */
declare namespace Reconstruction {
  export class ResidualPipe extends Obj  {

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    readonly id: string;
    withId(id: string): Reconstruction.ResidualPipe;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    readonly versionEdits?: Array_Type<VersionEdit>;
    withVersionEdits(versionEdits: Array_Type<VersionEdit> | Array<IVersionEdit> | null): Reconstruction.ResidualPipe;

    /**
     * Name of this pipe.
     */
    readonly name?: string;
    withName(name: string | null): Reconstruction.ResidualPipe;

    /**
     * Various system fields.
     */
    readonly meta?: Meta;
    withMeta(meta: IMeta | null): Reconstruction.ResidualPipe;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    readonly version?: number;
    withVersion(version: number | null): Reconstruction.ResidualPipe;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    readonly typeWithBindings?: Type;
    withTypeWithBindings(typeWithBindings: IType | null): Reconstruction.ResidualPipe;

    /**
     * System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
     * the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
     * overridden by provisioning.
     */
    readonly userUpdatedFields?: Array_Type<string>;
    withUserUpdatedFields(userUpdatedFields: Array_Type<string> | Array<string> | null): Reconstruction.ResidualPipe;

    /**
     * Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
     * c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
     * them to reappear.
     */
    readonly hidden?: boolean;
    withHidden(hidden: boolean): Reconstruction.ResidualPipe;

    /**
     * A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
     * field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
     * system.  It will be set while creating an entry if it is being created by the authorizer and the
     * {@link UpsertSpec#forceUserUpdate} is set to true.
     */
    readonly userOwned?: boolean;
    withUserOwned(userOwned: boolean): Reconstruction.ResidualPipe;

    /**
     * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
     * of its base type's typeIdent
     */
    readonly typeIdent?: string;
    withTypeIdent(typeIdent: string | null): Reconstruction.ResidualPipe;

    /**
     * If true, then the pipe shall not be retrained
     */
    readonly frozen?: boolean;
    withFrozen(frozen: boolean): Reconstruction.ResidualPipe;

    /**
     * True if training has succeeded and false otherwise.
     */
    readonly trained?: boolean;
    withTrained(trained: boolean): Reconstruction.ResidualPipe;

    /**
     * Errors from training.
     */
    readonly trainingErrors?: string;
    withTrainingErrors(trainingErrors: string | null): Reconstruction.ResidualPipe;

    /**
     * If true, the underlying model only accepts flattened input.
     */
    readonly flattenInput?: boolean;
    withFlattenInput(flattenInput: boolean): Reconstruction.ResidualPipe;

    /**
     * The hyperparameters overridden of a native model or pipe.
     */
    readonly hyperparamOverrides?: Map_Type<string, any>;
    withHyperparamOverrides(hyperparamOverrides: Map_Type<string, any> | {[key: string]: any} | null): Reconstruction.ResidualPipe;

    /**
     * A collection of {@link Hp.ParamSpace}s for the hyperparameters of this pipe. This search space will be used to
     * perform hyperparameter searches.
     */
    readonly hyperparamSearchSpace?: Hp.SearchSpace;
    withHyperparamSearchSpace(hyperparamSearchSpace: IHp.SearchSpace | null): Reconstruction.ResidualPipe;

    /**
     * Used to provide configuration for {@link #search}. Some configurations include how to validate results, which
     * search algorithms will be used, and limits on execution iterations.
     */
    readonly hpoSpec?: Hpo.Spec;
    withHpoSpec(hpoSpec: IHpo.Spec | null): Reconstruction.ResidualPipe;

    /**
     * {@link Hpo.Experiment} stores the result of hyperparameter optimization to find the best model/pipeline.
     */
    readonly hpoExperiment?: Hpo.Experiment;
    withHpoExperiment(hpoExperiment: IHpo.Experiment | null): Reconstruction.ResidualPipe;

    /**
     * Reference to the experiment that produced this {@link MlPipe}. For example, this could be a {@link Hpo.ExperimentBase}.
     */
    readonly experiment?: any;
    withExperiment(experiment: any | null): Reconstruction.ResidualPipe;

    /**
     * Map of urls of saved model files
     * key - model file name, value - {@link Url} corresponding to model file name
     */
    readonly modelFiles?: Map_Type<string, Url>;
    withModelFiles(modelFiles: Map_Type<string, Url> | {[key: string]: IUrl} | null): Reconstruction.ResidualPipe;

    /**
     * A map containing {Module Name: Compressed Source Code} key-value pairs. The module name is the name of the
     * module from where the source code was taken from. (i.e. numpy).
     */
    readonly customModelCode?: Map_Type<string, any>;
    withCustomModelCode(customModelCode: Map_Type<string, any> | {[key: string]: any} | null): Reconstruction.ResidualPipe;

    /**
     * Name for the function on the native model to call to do {@link MlProcessable#process}.
     */
    readonly processFunc?: string;
    withProcessFunc(processFunc: string | null): Reconstruction.ResidualPipe;

    /**
     * The column names of the `residual` output. If it is not set, this pipe will use the column names from the `actual`
     * input
     */
    readonly columns?: Array_Type<string>;
    withColumns(columns: Array_Type<string> | Array<string> | null): Reconstruction.ResidualPipe;

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
    static fromJson(json: any): Reconstruction.ResidualPipe | null;

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
    static fromJsonString(json: string): Reconstruction.ResidualPipe | null;

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
    static fromXmlString(xml: string): Reconstruction.ResidualPipe | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Reconstruction.ResidualPipe | null;

    /**
     * Fetches the object if it exists in database and returns the fingerprint. Note that this method does not use the
     * {@link Persistable#id}, {@link Persistable#version}, or {@link Persistable#meta} fields when calculating the
     * fingerprint.
     */
    fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj>): number;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Reconstruction.ResidualPipe;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Reconstruction.ResidualPipe;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Reconstruction.ResidualPipe;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Reconstruction.ResidualPipe>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Reconstruction.ResidualPipe>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Reconstruction.ResidualPipe;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Reconstruction.ResidualPipe;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Reconstruction.ResidualPipe;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Reconstruction.ResidualPipe;

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
    withField(field: string, value: any, doNotConvert?: boolean): Reconstruction.ResidualPipe;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Reconstruction.ResidualPipe;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Reconstruction.ResidualPipe;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Reconstruction.ResidualPipe;

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
    withoutFieldAtPath(path: string): Reconstruction.ResidualPipe;

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
    withoutField(field: string): Reconstruction.ResidualPipe;

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
    withoutField(field: FieldType): Reconstruction.ResidualPipe;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Reconstruction.ResidualPipe;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Reconstruction.ResidualPipe;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Reconstruction.ResidualPipe;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Reconstruction.ResidualPipe;

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
    defaultField(field: string): Reconstruction.ResidualPipe;

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
    defaultField(field: FieldType): Reconstruction.ResidualPipe;

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
    unsetField(field: string): Reconstruction.ResidualPipe;

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
    unsetField(field: FieldType): Reconstruction.ResidualPipe;

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
    removeField(field: string): Reconstruction.ResidualPipe;

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
    removeField(field: FieldType): Reconstruction.ResidualPipe;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Reconstruction.ResidualPipe;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Reconstruction.ResidualPipe;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Reconstruction.ResidualPipe;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Reconstruction.ResidualPipe;

    mergeJson(json: any): Reconstruction.ResidualPipe;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Reconstruction.ResidualPipe;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Reconstruction.ResidualPipe;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Reconstruction.ResidualPipe>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Reconstruction.ResidualPipe> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Reconstruction.ResidualPipe> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Reconstruction.ResidualPipe>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Reconstruction.ResidualPipe> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Reconstruction.ResidualPipe> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Reconstruction.ResidualPipe> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Reconstruction.ResidualPipe>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Reconstruction.ResidualPipe>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Reconstruction.ResidualPipe;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Reconstruction.ResidualPipe;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Reconstruction.ResidualPipe;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Reconstruction.ResidualPipe;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Reconstruction.ResidualPipe;

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
    static make(fields: any, withDefaults?: boolean): Reconstruction.ResidualPipe;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string): Reconstruction.ResidualPipe | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Reconstruction.ResidualPipe;

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
    afterMake(): Reconstruction.ResidualPipe;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Reconstruction.ResidualPipe;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Reconstruction.ResidualPipe> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Reconstruction.ResidualPipe;

    cachedFingerprint(): number;

    /**
     * Loads native model into memory. The native model can be accessed using {@link C3#getVar}, with the pipe's id as
     * the key.
     */
    loadInitialState(): void;

    /**
     * Clears the state that was loaded in {@link loadInitialState}.
     */
    clearState(): void;

    /**
     * Helper to remove identity if obj is {@link Persistable}.
     */
    withoutIdentity(): Reconstruction.ResidualPipe;

    /**
     * Returns {@link HardwareConstraint} that {@link Hardware hardware} must satisfy to {@link loadInitialState load}
     * this object.
     *
     * Property will return empty `null` if constrains are unknown.
     *
     * This property expected to be reimplemented by concrete types.
     */
    deploymentHardwareConstraint(): HardwareConstraint | null;

    /**
     * Launch a training. This API by default is non-blocking asynchronous.
     *
     * @param x
     *           Data to use as "x" or "input" to training.
     * @param y
     *           Data to use as "y" or "label" to supervised training. If not provided, then training is unsupervised.
     * @param spec
     *           Customizations for training execution.
     * @return a {@link MlOperationRun} object that represents the launched training. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    train(x: , y?: , spec?: MlOperationSpec): MlOperationRun<any>;

    /**
     * Note: This function is dispatched to the runtime that {@link #doTrain} specifies.
     */
    trainSync(x: , y?: , spec?: MlOperationSpec): Reconstruction.ResidualPipe;

    /**
     * Validates this instance of {@link MlTrainable} to determine whether it is valid to call {@link #train}.
     * The default implementation is at {@link MlPipe}
     * @return whether this is trainable.
     */
    isTrainable(): boolean;

    /**
     * @return whether this {@link MlTrainable} is currently training.
     */
    isTraining(): boolean;

    /**
     * NOTE: as best practice, trained objects should be immutable!
     * @return whether this {@link MlTrainable} has been trained.
     */
    isTrained(): boolean;

    /**
     * @return null if no errors were encountered during training. Otherwise, return the errors
     *           as a formatted string.
     */
    trainErrors(): string | null;

    /**
     * Process the input data. This API is asynchronous, non-blocking.
     *
     * @param x
     *           Data to use as input for processing.
     * @param spec
     *           Customizations for execution.
     * @return a {@link MlOperationRun} object that represents the launched processing. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    process(x: , spec?: MlOperationSpec): MlOperationRun<Data> | null;

    /**
     * Note: This function is dispatched to the runtime that {@link #doProcess} specifies.
     */
    processSync(x: , spec?: MlOperationSpec): Data | null;

    /**
     * Validates this instance of {@link MlProcessable} to determine whether it is valid to call {@link #process}.
     * The default implementation assumes all instances of {@link MlProcessable} are processable.
     *
     * @return whether this is processable.
     */
    isProcessable(): boolean;

    /**
     * Score the input data. This API is asynchronous non-blocking.
     *
     * @param x
     *           Data to use as input to the model for scoring.
     * @param y
     *           Data to use as "y" or "label" to use as ground truth for scoring.
     * @param context
     *           Additional contextual data to use for scoring.
     * @param spec
     *           Customizations for execution.
     * @return a {@link MlOperationRun} object that represents the launched scoring. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    score(x: , y?: , context?: , spec?: MlOperationSpec): MlOperationRun<Map_Type<string, number>> | null;

    /**
     * Blocking, synchronous version of {@link #score}.
     */
    scoreSync(x: , y?: , context?: , spec?: MlOperationSpec): Map_Type<string, number> | null;

    /**
     * Score the input data for all pipes including intermediate pipes. This API is asynchronous, non-blocking.
     *
     * @param x
     *           Data to use as input to the model for scoring.
     * @param y
     *           Data to use as "y" or "label" to use as ground truth for scoring.
     * @param context
     *           Additional contextual data to use for scoring.
     * @param spec
     *           Customizations for execution.
     * @return a {@link MlOperationRun} object that represents the launched scoring. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    scoreAll(x: , y?: , context?: , spec?: MlOperationSpec): MlOperationRun<Map_Type<string, number>> | null;

    /**
     * Blocking, synchronous version of {@link #scoreAll}.
     */
    scoreAllSync(x: , y?: , context?: , spec?: MlOperationSpec): Map_Type<string, number> | null;

    /**
     * Use {@link MlInterpreter}s to interpret the {@link MlInterpretable} object using the input data and context. See
     * {@link MlInterpreter} for information on interpreters. This API is asynchronous non-blocking.
     *
     * @param x
     *           Data to use as the source input. This is not the same as the downstream inputs that may or may not feed
     *           in to {@link MlInterpreter}(s)
     * @param context
     *           Additional information required to perform interpretation
     * @param spec
     *           Customizations for execution
     * @return a {@link MlOperationRun} object that represents the launched interpretation. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    interpret(x: , spec?: MlOperationSpec): MlOperationRun<> | null;

    /**
     * Blocking, synchronous version of {@link #interpret}.
     */
    interpretSync(x: , context?: Map_Type<string, any>, spec?: MlOperationSpec): void;

    /**
     * Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
     * `args` and `kwargs` are of `ValueType` `any`.
     */
    _call_(args?: Array_Type<any>, kwargs?: Map_Type<string, any>): any | null;

    /**
     * Extracts the inputs and standardizes them into a dict.
     */
    standardizeInput(args?: Array_Type<any>, kwargs?: Map_Type<string, any>): Map_Type<string, any> | null;

    /**
     * @return whether the cache already contains this instance
     */
    isCached(): boolean;

    /**
     * @return stream of all available Cached instances.
     */
    static allCached(): Stream<Reconstruction.ResidualPipe> | null;

    /**
     * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
     *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     *         Otherwise no population will be performed.
     */
    static find(filter?: string): Stream<Reconstruction.ResidualPipe> | null;

    /**
     * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
     *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     *         Otherwise no population will be performed.
     */
    static findBy(field: string, value: any): Stream<Reconstruction.ResidualPipe> | null;

    /**
     * @return cached instance.
     */
    getCached(): Reconstruction.ResidualPipe | null;

    /**
     * @return cached instance by the key.
     */
    static forCacheKey(key: string): Reconstruction.ResidualPipe | null;

    /**
     * @return cache key for this instance.
     */
    cacheKey(): string;

    /**
     * Should produce an entry for the cache key. This method should not be called directly.
     */
    static produce(key: string): Reconstruction.ResidualPipe | null;

    /**
     * Should produces the entire content for the cached data. Will populate the cache with the produced data.
     */
    static produceAll(): Map_Type<string, Reconstruction.ResidualPipe> | null;

    /**
     * Evicts this instance from cache on all nodes of this application.
     */
    evictFromCache(): void;

    /**
     * Evicts this instance from cache of the current node.
     */
    evictFromCacheLocalOnly(): void;

    /**
     * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#evictFromLocalAppsCaches}
     */
    evictFromCacheLocalOnlyAllApps(): void;

    /**
     * Clears the data cache for this type on all nodes of this application.
     */
    static clearCache(): void;

    /**
     * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
     */
    static clearCacheLocalOnly(): void;

    /**
     * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#clearLocalAppsCaches}
     */
    static clearCacheLocalOnlyAllApps(): void;

    /**
     * Returns count of cached instances.
     */
    static cacheSize(): number | null;

    /**
     * Returns instance of the cache for this type.
     */
    static nativeCache(): any | null;

    /**
     * Override to perform customized upsert logic.
     *
     * @param state
     *        Current upsert state.
     *
     * @return The appropriate result (e.g. ObjList, Persistable<?>, etc) depending on the upsert operation.
     */
    static doUpsert(state: any): any | null;

    /**
     * Override to perfrom the 'unremove' operation.
     *
     * @param obj
     *        Obj to unremove.
     *
     * @return The unremoved Obj, if any and null otherwise.
     */
    static doUnremove(obj: PersistableWritable): PersistableWritable | null;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
     *           of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(spec?: FetchSpec): FetchResult<Reconstruction.ResidualPipe>;

    /**
     * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param filter
     *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(filter: Filter): FetchResult<Reconstruction.ResidualPipe>;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
     * @return Requested obj stream.
     */
    static fetchObjStream(spec?: FetchStreamSpec): Stream<Reconstruction.ResidualPipe> | null;

    /**
     * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
     * specified maximum batch size.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

    /**
     * Fetched multiple obj instances in multiple locales based on specification.
     *
     * @param spec
     *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
     *        type.
     * @return Requested objs where key of map is locale id
     */
    static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<Reconstruction.ResidualPipe>> | null;

    /**
     * @return The number of entries that match the specification.
     */
    static fetchCount(spec?: FetchFilterSpec): number;

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
    static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

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
    static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(spec?: ExistsSpec): boolean;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(filter: Filter): boolean;

    /**
     * Used internally to fetch as a stream (e.g. FetchResultOvi)
     */
    static fetchOvi(spec?: FetchSpec): any | null;

    /**
     * Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
     *
     * @param include
     *           Optional include spec to retrieve.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    get(include?: string): Reconstruction.ResidualPipe | null;

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
    getSpecific(include?: string): Reconstruction.ResidualPipe | null;

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
    getMissing(spec: GetMissingSpec): Reconstruction.ResidualPipe;

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
    getDirect(include?: string): Reconstruction.ResidualPipe | null;

    /**
     * Applies a reverse edit (e.g. VersionEdit) to an instance.
     *
     * @param versionEdit
     *        Reverse edit to apply
     *
     * @return The instance after applying the reverse edit.
     */
    applyReverseEdit(versionEdit: VersionEdit): Reconstruction.ResidualPipe;

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
    singletonMap(): Map_Type<string, WithKey>;

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
    static fromString(s: string): Reconstruction.ResidualPipe | null;

    /**
     * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance already exist.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
     *         will have only those fields populated. Otherwise only the id field will be populated.
     */
    create(spec?: UpsertSpec): Reconstruction.ResidualPipe | null;

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
    static createBatch(objs: Array_Type<Reconstruction.ResidualPipe>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
    static createBatchObjStream(objs: Stream<Reconstruction.ResidualPipe>, spec?: CreateBatchObjStreamSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
    update(srcObj?: Reconstruction.ResidualPipe, spec?: UpsertSpec): Reconstruction.ResidualPipe | null;

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
    upsert(srcObj?: Reconstruction.ResidualPipe, spec?: UpsertSpec): Reconstruction.ResidualPipe | null;

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
    merge(spec?: MergeSpec): Reconstruction.ResidualPipe | null;

    /**
     * Merges an instance of a C3 type if it exists and creates it if it doesn't.
     *
     * @param mergeInclude
     *           Used to control which fields from the input obj are merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.
     */
    merge(mergeInclude: string, spec?: MergeSpec): Reconstruction.ResidualPipe | null;

    /**
     * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     *
     * @return The created or updated obj.
     */
    touch(spec?: TouchSpec): Reconstruction.ResidualPipe | null;

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
    static updateBatch(objs: Array_Type<Reconstruction.ResidualPipe>, srcObjs?: Array_Type<Reconstruction.ResidualPipe>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
    static updateObjs(objs: λSupplier<Array_Type<Reconstruction.ResidualPipe> | null>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
    static upsertBatch(objs: Array_Type<Reconstruction.ResidualPipe>, srcObjs?: Array_Type<Reconstruction.ResidualPipe>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
    static upsertObjs(objs: λSupplier<Array_Type<Reconstruction.ResidualPipe> | null>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
    static touchBatch(objs: Array_Type<Reconstruction.ResidualPipe>, spec?: TouchSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
    static mergeBatch(objs: Array_Type<Reconstruction.ResidualPipe>, spec?: MergeSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
     *           Used to control which fields from the input objs are merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeBatch(objs: Array_Type<Reconstruction.ResidualPipe>, mergeInclude: string, spec?: MergeSpec): ObjList<Reconstruction.ResidualPipe> | null;

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
     *           Used to control which fields from the input objs are merged.  Only the fields indicated in the
     *           mergeinclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeObjs(objs: λSupplier<Array_Type<Reconstruction.ResidualPipe> | null>, mergeInclude: string, spec?: MergeSpec): ObjList<Reconstruction.ResidualPipe> | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
     * functions, the set of fields to be merged can be controlled by specifying an include spec in either
     * {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
     * can be controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as
     * in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Reconstruction.ResidualPipe, spec?: MergeAllSpec): number | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
     * controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as in
     * {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param mergeInclude
     *           Used to control which fields from the input objs are merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Reconstruction.ResidualPipe, mergeInclude: string, spec?: MergeAllSpec): number | null;

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
    remove(spec?: UpsertSpec): boolean;

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
    static removeBatch(objs: Array_Type<Reconstruction.ResidualPipe>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

    /**
     * Removes multiple instances of a C3 type based.
     *
     * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * @param spec
     *         Spec controlling the operation
     * @param confirm
     *         Must be specified as true.  Otherwise request will be rejected.
     * @return The number of objs removed.  Note that under some circumstances the total number removed may not be
     *         known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
     *         connection can't return the value).  In those cases, this will return -1.
     */
    static removeAll(spec?: RemoveAllSpec, confirm: boolean): number;

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
    static replace(objs: Array_Type<Reconstruction.ResidualPipe>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

    /**
     * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
     * {@link removeBatch} functions). If the operation fails an exception will be thrown.
     *
     * @return The recovered obj instance with all of its fields populated.
     *
     * @see Ann.Db#archive
     */
    unremove(): Reconstruction.ResidualPipe | null;

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
     * Upsert persistable references in this {@link MlPipe}, and replace the complete objects with respective entity references.
     * DEVELOPER NOTE: MlPipe developers need to implement this method to successfully register and load `MlPipe`
     * objects from `ModelRegistry`, if there are additional fields in `MlPipe` that hold entity references in addition to
     * platform supported defaults.
     * @return an instance of {@link MlPipe} with complete reference objects replaced with respective entity references.
     */
    static beforeCreate(objs: Array_Type<Reconstruction.ResidualPipe>): ObjList<Reconstruction.ResidualPipe>;

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
    static beforeUpdate(objs: Array_Type<Reconstruction.ResidualPipe>): ObjList<Reconstruction.ResidualPipe>;

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
    static beforeRemove(objs: Array_Type<Reconstruction.ResidualPipe>): ObjList<Reconstruction.ResidualPipe>;

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
    static afterCreate(objs: Array_Type<Reconstruction.ResidualPipe>): Array_Type<ObjError> | null;

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
    static afterUpdate(objs: Array_Type<Reconstruction.ResidualPipe>): Array_Type<ObjError> | null;

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
    static afterRemove(objs: Array_Type<Reconstruction.ResidualPipe>): Array_Type<ObjError> | null;

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
    static clearCollection(spec?: ClearCollectionSpec, confirm: boolean): void;

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
    static eval(spec?: EvalSpec): Data | null;

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
    static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple> | null;

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
    static evaluateOvi(spec?: EvaluateSpec): any | null;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
     * as stream of Arrow batches.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static evaluateArrowStream(spec: EvaluateArrowStreamSpec): Stream<Arrow>;

    /**
     * Refreshes calc fields for objs for a type based on a spec.
     *
     * @param spec
     *        Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
     *        other options that control the operation.
     * @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshCalcFields(spec?: RefreshCalcFieldsSpec): RefreshCalcFieldsBatchJob | null;

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
    static refreshDefaultFields(spec?: RefreshDefaultFieldsSpec): RefreshDefaultFieldsBatchJob | null;

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
    static refreshUniqueIndexes(spec?: RefreshUniqueIndexesSpec): RefreshUniqueIndexesBatchJob | null;

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
    static refreshAnalytics(spec?: RefreshAnalyticsSpec): RefreshAnalyticsBatchJob | null;

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
    static refreshMetrics(spec?: RefreshMetricsSpec): RefreshMetricsBatchJob | null;

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
    static runCreatedOrUpdated(spec?: RunCreatedOrUpdatedSpec): RunCreatedOrUpdatedBatchJob | null;

    /**
     * Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
     *
     * @param spec
     *        Indicates which types of dependencies should be refreshed along with other parameters that control the
     *        operation of the function.
     */
    static refreshDeps(spec?: RefreshDepsSpec): void;

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
    static startImportData(spec?: StartImportDataSpec): PushStream<Reconstruction.ResidualPipe>;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportDataWithStats(spec?: StartImportDataSpec): PushStreamWithStats<Reconstruction.ResidualPipe>;

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
    static forId(id: string, failIfMissing?: boolean): Reconstruction.ResidualPipe | null;

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
    static generateNewIds(count?: number): Array_Type<string> | null;

    /**
     * Generates synthetic data for a C3 type.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return Various statistics for the operation.
     */
    static generateData(spec?: GenerateDataSpec): ActionStats | null;

    /**
     * Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
     */
    static profileData(spec?: FetchSpec): GenerateDataSpec | null;

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
    static typeOfBatch(objs: Array_Type<Reconstruction.ResidualPipe>): Array_Type<EntityType> | null;

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
    static dbEcho(template?: Reconstruction.ResidualPipe, count?: number, sendBack?: boolean): number | null;

    /**
     * Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
     * invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
     * condition is considered to be when there is no entry in the reference type for the obj being validated.
     *
     * @param spec
     *           Indicates which references in which types/fields to check.
     * @return List of references that were found to be invalid along with details of why they are invalid.
     */
    static checkReferences(spec?: CheckReferencesSpec): CheckReferencesResult | null;

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
    static calcFieldDeps(fieldName: string): Array_Type<string> | null;

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
    invalidateTsHeader(range?: TimeRange, fields?: Array_Type<string>, autoCommit?: boolean): void;

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
    static invalidateTsDataPoints(tsInvalidations: Stream<TsInvalidation>, autoCommit?: boolean): void;

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
    static eachObjBatch(spec: BatchFetchSpec, action: λBiConsumer<Array_Type<Obj>, any | null>): string;

    /**
     * Implements a simple logic for Persistable call-backs like before create by looping each input obj and
     * calling a transform for it.
     *
     *
     * callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
     */
    static callbackLogic(objs: Array_Type<Reconstruction.ResidualPipe>, callback?: λFunction<Reconstruction.ResidualPipe | null, Reconstruction.ResidualPipe | null>): ObjList<Reconstruction.ResidualPipe>;

    /**
     * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
     * calling a transform for it.
     */
    static afterCallbackLogic(objs: Array_Type<Reconstruction.ResidualPipe>, callback?: λFunction<Reconstruction.ResidualPipe | null, Reconstruction.ResidualPipe | null>): Array_Type<ObjError> | null;

    /**
     * @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
     *         be only 1.  If it does, then there will be multiple.
     */
    static idColNames(): Array_Type<string> | null;

    /**
     * True if this field is unique
     */
    static isUnique(fieldPath: string): boolean;

    /**
     * True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
     * themselves, or there is a unique index that is a subset of the specified fields.
     */
    static isUnique(fieldPaths: Array_Type<string>): boolean;

    /**
     * Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
     * #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
     * @param name
     *          The name of field to check
     * @returns Whether or not the specific field name is one of the ones declared by the DB engine.
     */
    static isSystemField(name: string): boolean;

    /**
     * Publishes an instance of SeedData to a C3 application package under `/seed/`
     */
    publish(subPath?: string, contentType?: string): Reconstruction.ResidualPipe;

    /**
     * Admin function to remove a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries removed via this function
     * are fully removed rather than hidden as they would be if removed by the user.
     *
     * @return true if the obj was removed and false if it was not for a non-error condition (e.g. obj didn't exist).
     */
    removeSeedData(): boolean;

    /**
     * Admin function to remove seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
     * entries removed via this function are fully removed rather than hidden as they would be if removed by the user.
     *
     * @param objs
     *           Obj instances to remove.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were removed and any errors that were encountered, same as
     *         {@link Persistable#removeBatch} return value.
     */
    static removeSeedDataBatch(objs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

    /**
     * Admin function to add a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries
     * added this way are treated as though they were provisioned, rather than added by a user.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return created obj instance, same as {@link Persistable#create} return value.
     */
    createSeedData(spec?: UpsertSpec): Reconstruction.ResidualPipe | null;

    /**
     * Admin function to add seed data entries as the provisioner/authorizer, rather than as the user.  Seed data entries
     * added this way are treated as though they were provisioned, rather than added by a user.
     *
     * @param objs
     *           Obj instances to add.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were created and any errors that were encountered, same as
     *         {@link Persistable#createBatch}.
     */
    static createSeedDataBatch(objs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

    /**
     * Admin function to update a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data
     * entries updated this way are treated as though they were provisioned, rather than updated by a user.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return updated obj instance, same as {@link Persistable#update} return value.
     */
    updateSeedData(srcObj?: SeedData, spec?: UpsertSpec): Reconstruction.ResidualPipe | null;

    /**
     * Admin function to update seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
     * entries updated this way are treated as though they were provisioned, rather than updated by a user.
     *
     * @param objs
     *           Obj instances to update.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were updated and any errors that were encountered, same as
     *         {@link Persistable#updateBatch}.
     */
    static updateSeedDataBatch(objs?: Array_Type<SeedData>, srcObjs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<Reconstruction.ResidualPipe> | null;

    /**
     * Admin function to clear the {@link userUpdatedFields} field for a seed data obj instance.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return updated obj instance, same as {@link Persistable#update} return value.
     */
    clearUserUpdates(spec?: MergeSpec): Reconstruction.ResidualPipe | null;

    /**
     * Admin function to clear the {@link userUpdatedFields} field for seed data obj instances.
     *
     * @param objs
     *           Obj instances to update.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were updated and any errors that were encountered, same as
     *         {@link Persistable#updateBatch}.
     */
    static clearUserUpdatesBatch(objs?: Array_Type<SeedData>, spec?: MergeSpec): ObjList<Reconstruction.ResidualPipe> | null;

    /**
     * Returns the full metadata path to the seed file associated with this instance by `id`.
     * Throws an error if this instance is not seeded (no match with instance `id`).
     */
    seedPath(): string | null;

    dependencies(): SeedDataDeps<Reconstruction.ResidualPipe> | null;

    /**
     * Optional member function to enable custom validation logic.
     */
    validateSeedData(): ValidateObjResult;

    /**
     * Utility method used to get the real sub type information for given parent type through the {@link typeIdent} field.
     *
     * @see typeIdent
     */
    static typeForTypeIdent(typeName: string, typeIdent: string, failIfMissing?: boolean): Type | null;

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
     * The scoring metrics associated with this pipe.
     */
    scoringMetrics(): Map_Type<string, MlScoringMetric<any, any, any>> | null;

    /**
     * Used internally to generate a name per pipe type. This function should be overridden for each child type.
     */
    static prefix(): string | null;

    /**
     * Convert the native object to an {@link MlPipe} object.
     * Example usage:
     * ```
     * from sklearn.svm import OneClassSVM
     * svm = OneClassSVM(gamma='auto')
     * model = c3.MlPipe.convert(svm)
     * ```
     *
     * If the `model` argument is an instance of a custom model whose source code has been defined in a Jupyter notebook,
     * {@link MlPipe} requires that all the necessary source code be defined in a single notebook cell, rather than
     * spanning multiple cells. For example, do not split the `import`s and class definition between two different cells.
     * Instead, put the necessary `import` statements before the class definition in the same cell. Additionally, it is
     * highly recommended that subsequent code that uses the custom model, as in an instantiation of an object, should
     * be in a cell that is separate than the custom model's source code.
     * Incorrect usage:
     * ```
     * [1]: from tensorflow.keras import Model
     *      from tensorflow.keras.layers import Dense
     * [2]: class MyTensorFlowModel(Model):
     *        def __init__(self, hidden_dim, num_classes):
     *          self.hidden_layer = Dense(hidden_dim)
     *          self.output_layer = Dense(num_classes)
     *        ...
     *
     *      model = MyTensorFlowModel(128, 10)
     *      model.compile(...)
     * ```
     * Correct usage:
     * ```
     * [1]: from tensorflow.keras import Model
     *      from tensorflow.keras.layers import Dense
     *
     *      class MyTensorFlowModel(Model)
     *        def __init__(self, hidden_dim, num_classes):
     *          self.hidden_layer = Dense(hidden_dim)
     *          self.output_layer = Dense(num_classes)
     *        ...
     * [2]: model = MyTensorFlowModel(128, 10)
     *      model.compile(...)
     * ```
     * @param model
     *           Native object to convert.
     * @param spec
     *           Customizations for convert.
     * @return an {@link MlPipe} C3 object that behaves as the native machine learning object.
     */
    static convert(model: any, spec?: MlConvertSpec): Reconstruction.ResidualPipe;

    /**
     * Freezes an {@link MlPipe}
     * @return modified copy of this {@link MlPipe} that cannot be trained
     */
    freeze(): Reconstruction.ResidualPipe;

    /**
     * Unfreezes an {@link MlPipe}
     * @return modified copy of this {@link MlPipe} that can be trained
     */
    unfreeze(): Reconstruction.ResidualPipe;

    /**
     * Helper method to create a new authoring vertex based on the pipe and inputs.
     *
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param y
     *           single value, list, or map of input(s) for y.
     * @param context
     *           single value, list, or map of input(s) for context.
     * @param suffix
     *           optional suffix for the vertex name
     * @return a new authoring vertex
     */
    newAuthoringVertex(x?: , y?: , context?: , suffix?: string = '""', spec?: MlConvertSpec): MlPipeline.PipeVertex.Authoring;

    /**
     * Used to describe training, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param y
     *           single value, list, or map of input(s) for y.
     * @return a placeholder representing a trained pipeline during authoring.
     */
    train_var(x?: any, y?: any): MlPipeline.PipeVar;

    /**
     * Used to describe processing, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param spec
     *            customizations for changing behavior of the pipe.
     * @return a single {@link MlVar} if single output or a map of {@link MlVar} if multi-output.
     */
    process_var(x?: any, spec?: MlConvertSpec): any;

    /**
     * Used to describe scoring, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param y
     *           single value, list, or map of input(s) for y.
     * @param context
     *           single value, list, or map of input(s) for context.
     * @param spec
     *            customizations for changing behavior of the pipe.
     * @return a single {@link MlVar} if single output or a named tuple of {@link MlVar} if multi-output.
     */
    score_var(x?: any, y?: any, context?: any, spec?: MlConvertSpec): any;

    /**
     * Used to describe interpreting, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param spec
     *            customizations for changing behavior of the pipe.
     * @return a single {@link MlVar} if single output or a map of {@link MlVar} if multi-output.
     */
    interpret_var(x?: any, spec?: MlConvertSpec): any;

    /**
     * Used for accessing values of annotated and overridden hyperparameters. Can be used on {@link MlAtomicPipe} or on
     * {@link MlPipeline}.
     * @param hps
     *           single value or list of paths of hyperparameters on the pipe. If no value is provided, returns all
     *           annotated and overridden hyperparameters on the pipe.
     * @return a map of hyperparameter names to their respective values.
     */
    hyperparams(hps?: string | Array_Type<string>): Map_Type<string, any>;

    /**
     * Validate the given hyperparameter values for this pipe. If there is a {@link Hp.ParamSpace} for the
     * hyperparameter, this function will check if the value passed is a point within the parameter space. Also, if
     * there are constraints for the hyperparameter, this function will check if the value satisfies all the constraints.
     * If the validation fails, a ValueError will be raised.
     * @param hps
     *           A map of hyperparameter names to their values.
     */
    validateHyperparams(hps?: Map_Type<string, any>): void;

    /**
     * Used to override hyperparameters of a pipe. For example, can be used on {@link MlAtomicPipe} or on
     * {@link MlPipeline}.
     * @param newHps
     *           Map key represents the path to hyperparameter name. Map value represents the value to set for
     *           the hyperparameter. For an {@link MlAtomicPipe}, this means that the key is just the hyperparameter name.
     * Example usage:
     * For a sample {@link MlAtomicPipe} created using Linear Regression in Sklearn:
     * lr_pipe = c3.MlPipe.convert(native_lr)
     * updated_lr_pipe = lr_pipe.withHyperparams({'fit_intercept': False})
     *
     * For {@link MlPipeline}:
     * Given a pipeline with sample {@link MlAtomicPipe} authored as using Linear Regression,
     * Standard Scaler and MinMax Scaler models from Sklearn:
     * x, y = mla.var(), mla.var()
     * lr_pipe = c3.MlPipe.convert(native_lr, name='lr')
     * ss_pipe = c3.MlPipe.convert(native_ss, name='ss')
     * mm_pipe = c3.MlPipe.convert(native_mm, name='mm')
     * x_mm = mm_pipe(x)
     * y_ss = ss_pipe(y)
     * y_out = lr_pipe(x_mm, y_ss)
     * pipeline = mla.pipeline(x={'x':x}, y={'y':y}, out={'y_pred':y_out})
     * To update various hyperparameters of a pipeline, simply provide a map in the following format:
     * updated_pipeline = pipeline.withHyperparams({'lr': {'fit_intercept': False},
     *                                                 'mm': {'clip':True},
     *                                                 'ss': {'with_mean': False, 'with_std':False}})
     * If a field of a pipe contains nested hyperparameters then these are referenced using the path of
     * hyperparameters using  "." as a separator. A field contains nested hyperparameters if it has the
     * annotation `@ML(containsHyperparameters=true)`. In particular, `some_field.some_hp` refers to `some_hp`
     * hyperparameter on the `some_field` field of the pipe. As an example consider a {@link KerasPipe) with `trainArgs`
     * as a field.
     * In the example below, we show how to set hyperparameters `epochs` and `initial_epoch` which are hyperparameters on
     * the field `trainArgs`:
     * ```py
     * pipe = c3.KerasPipe.convert(model, spec)  # given some model and spec
     * hps = {
     *    'trainArgs.epochs': 50,
     *    'trainArgs.initial_epoch': 1
     * }
     * pipe = pipe.withHyperparams(hps)
     * ```
     * See {@link Ann.ML} for more details.
     * @return a {@link MlPipe} with native models having the updated hyperparameters.
     */
    withHyperparams(newHps?: Map_Type<string, any>): MlPipe<any, any, any, any, any>;

    /**
     * Used for accessing the parameter spaces of hyperparameters on an {@link MlAtomicPipe}. Can be used on
     * {@link MlAtomicPipe} or on {@link MlPipeline}.
     * @param hps
     *           single value or list of paths of hyperparameters on the pipe.
     * @return a map of hyperparameter names to their respective parameter spaces.
     */
    hyperparamSpaces(hps?: string | Array_Type<string>): Map_Type<string, Hp.ParamSpace>;

    /**
     * Used for accessing {@link MlPipe#experiment}.
     */
    searchResult(): any | null;

    /**
     * Returns true if the instance exists in database.
     */
    existsInDbHeuristic(): boolean;

    /**
     * Clean up (i.e. remove from db or delete from filesystem) any artifacts or dependencies related to this {@link MlPipe}.
     * Clean up this {@link MlPipe} after artifacts or dependencies are cleaned up.
     * For example,
     * If {@link MlPipeline}, remove all nested {@link MlPipe}s and this {@link MlPipeline} from DB
     * If {@link MlAtomicPipe}, delete model files from filesystem and remove this {@link MlAtomicPipe} from DB
     */
    cleanUp(): void;

    /**
     * Replace persisted entity references in this {@link MlPipe} with complete objects and remove identity of those references.
     * DEVELOPER NOTE: MlPipe developers need to implement this method to successfully register and load `MlPipe`
     * objects from `ModelRegistry`, if there are additional fields in `MlPipe` that hold entity references,
     * in addition to platform supported defaults. It is required to invoke parent type's `replaceEntityReferences`
     * using `super` in the overridden method at the start of method definition.
     * @return an instance of {@link MlPipe} with persisted references replaced with complete objects.
     */
    replaceEntityReferences(): MlPipe<any, any, any, any, any>;

    /**
     * Initializes the loggers for {@link MlPipe} operation.
     * @return an instance of {@link MlOperationSpec} loggers initialized.
     */
    static initializeLoggers(opNames: Array_Type<string>, spec?: MlOperationSpec): MlOperationSpec | null;

    /**
     * Returns the pipe with just the {@link MlPipe#id} field populated if the pipe has an id. Otherwise, the pipe will
     * be returned as-is.
     */
    byReference(): Reconstruction.ResidualPipe;

    /**
     * Blocking call to {@link #beforeTrain} followed by {@link doTrain} in a single action.
     */
    beforeAndDoTrain(x: any, y?: any, model?: any, customCodePath?: string, spec?: MlOperationSpec): any;

    /**
     * Creates a {@link Workflow} for {@link #train} where each function needed for training is represented by a separate
     * {@link Workflow.Vertex}.
     */
    static expandedTrainWorkflow(): Workflow;

    /**
     * Updates the model files.
     */
    updateModelFiles(modelFiles: Map_Type<string, Url>, spec?: MlOperationSpec): Reconstruction.ResidualPipe;

    /**
     * Hook to do preprocessing on the model and inputs.
     *
     * DEVELOPER NOTE: Could be overwritten to handle any other processing on the model or inputs.
     * @param x
     *          The `x` input in the native format specified by {@link #nativeInputFormats}. The conversion from `DX` to
     *          the native format is handled automatically using {@link #convertPipeInputsToNative} before this method is
     *          invoked.
     * @param y
     *          The `y` input in the native format specified by {@link #nativeInputFormats}. The conversion from `DY` to
     *          the native format is handled automatically using {@link #convertPipeInputsToNative} before this method is
     *          invoked.
     * @return A native python dictionary that holds the model, x, and y.
     */
    beforeTrain(x: any, y?: any, model?: any, spec?: MlOperationSpec): any;

    /**
     * The synchronous, blocking implementation for {@link doTrain}.
     *
     * DEVELOPER NOTE: this is where the "business logic" for your training should go.
     *
     * @param beforeTrainResults
     *           The output of {@link #beforeTrain} - a native python dictionary that holds the native `model`, `x`,
     *           and `y`.
     * @param spec
     *           An {@link MlOperationSpec} object.
     * @return A native python dictionary that holds the native trained `model` and fields on the pipe with updated
     * values.
     */
    doTrain(beforeTrainResults: any, spec?: MlOperationSpec): any;

    /**
     * Persist the trained model.
     * @param doTrainOutputs
     *           The output of {@link #doTrain} - a native python dictionary that holds the native `model` and updated
     *           values for fields on the pipe.
     * @param spec
     *           An {@link MlOperationSpec} object.
     * @return mixin MlAtomicPipe with a trained model and updated fields.
     */
    afterTrain(doTrainOutputs: any, spec?: MlOperationSpec): Reconstruction.ResidualPipe;

    /**
     * Blocking call to {@link #beforeProcess}, {@link #doProcess}, and {@link #afterProcess} in a single action.
     */
    beforeDoAfterProcess(x: any, model?: any, customCodePath?: string, spec?: MlOperationSpec): any;

    /**
     * Creates a {@link Workflow} for {@link #process} where each function needed for processing is represented by a
     * separate {@link Workflow.Vertex}.
     */
    static expandedProcessWorkflow(): Workflow;

    /**
     * Hook to do preprocessing on the native model and inputs
     * @param x
     *          The `x` input in the native format specified by {@link #nativeInputFormats}. The conversion from `DX` to
     *          the native format is handled automatically using {@link #convertPipeInputsToNative} before this method is
     *          invoked.
     * @return A native python dictionary that holds the model and x.
     */
    beforeProcess(x: any, model?: any, spec?: MlOperationSpec): any;

    /**
     * The synchronous, blocking implementation for {@link doProcess}.
     *
     * DEVELOPER NOTE: this is where the "business logic" for your processing should go. In rare cases, you may choose to
     * override {@link process}. If so, you will still need to have a stub implementation for {@link doProcess}.
     *
     * @param beforeProcessOutputs
     *           The output of {@link #beforeProcess} - a native python dictionary that holds the native `model` and `x`.
     * @param spec
     *           An {@link MlOperationSpec} object.
     * @return A native python dictionary with the key `out` that holds the native output.
     */
    doProcess(beforeProcessOutputs: any, spec?: MlOperationSpec): any | null;

    /**
     * Returns the native model output.
     * @param doProcessOutputs
     *           The output of {@link #doProcess} - native python dictionary with the key `out` that holds the native
     *           output.
     * @param spec
     *           An {@link MlOperationSpec} object.
     * @return the native output.
     */
    afterProcess(doProcessOutputs: any, spec?: MlOperationSpec): any | null;

    /**
     * Returns a map of model {@link Url}s.
     * key - model file name, value - {@link Url} corresponding to model file name.
     * @param model a python native model. e.g. sklearn estimator, keras native model.
     * @return a map of model file {@link Url}s.
     */
    saveNativeModel(model?: any): Map_Type<string, Url> | null;

    /**
     * @return The native model that is saved on the pipe.
     * It is recommended not to use this method to read a native model that is saved on the pipe.
     * Use {@link MlAtomicPipe#loadCodeAndModel['nativeModel'] to get the native model.
     */
    nativeModel(): any;

    /**
     * Returns a tuple containing the source code of the native Python class, as well as the relative file path to the
     * source code. If the native Python class was written in a Jupyter Notebook, then the relative file path will be
     * returned as "jupyter".
     * @param native_class
     *           A native Python class
     * @return
     *           A tuple containing ( source_code, relative_file_path )
     */
    static getPythonSource(native_class: any): any;

    /**
     * Given a native Python model, custom written or not, and a set of additional source code files, bundle and return
     * all the necessary source code into a single dictionary, where the key is the relative file path to the source
     * code, and the value is the compressed source code string. If the model belongs to a runtime library, as in it is
     * not custom written, then a null dictionary will be returned because no source code is necessary to operate on
     * a runtime library object.
     * @param nativeObject
     *           A native Python object.
     * @param additionalFiles
     *           A list of file paths to additional source code that may be necessary to operate on the native model.
     *           See {@link MlConvertSpec#sourceFilePaths} for more details.
     * @return
     *           A dictionary containing { relative_file_path: compressed_source_code }
     */
    static bundleSourceCode(nativeObject?: any, additionalFiles?: Array_Type<string>): Map_Type<string, any> | null;

    loadSourceCode(): string;

    loadCodeAndModel(): any;

    /**
     * Convert `x` and `y` from `DX` and `DY` type to python native format. By default, this method will invoke
     * {@link #convertXToNative} and {@link #convertYToNative} respectively. If either `x` or `y` require custom,
     * independent conversion logic, do not override this method - instead, override either {@link #convertXToNative} or
     * {@link #convertYToNative}.
     *
     * NOTE: the canonical format for evaluated data from a {@link Feature.Set} will have a column for `subject id` and
     *       (optionally) a column for `time`. It varies which libraries require these columns. If your {@link MlAtomicPipe}
     *       does not require these columns, then you can remove them by using {@link #setFeatureIndices}. This can be done
     *       either by overriding the {@link #convertXToNative} and {@link #convertYToNative} APIs or within your {@link #doTrain}
     *       and {@link #doProcess} functions.
     *
     * NOTE: Overriding this function may result in a performance loss since redundant data conversion may occur.
     *       Therefore, only override this function iff both `x` and `y` inputs are simultaneously required to do the
     *       conversion to native format. If overridden, it will likely be necessary to also override
     *       {@link #convertNativeToNative} to match the conversion logic.
     */
    convertPipeInputsToNative(x: , y?: , spec?: MlOperationSpec): any;

    /**
     * Convert `x` from `DX` type to python native format. Default implementation uses {@link #convertInputToNativeFormat}.
     *
     * @param x
     *           data to convert.
     * @param spec
     *           any customizations for the conversion.
     * @return converted data.
     */
    convertXToNative(x: , spec?: MlOperationSpec): any;

    /**
     * Convert `y` from `DY` type to python native format. Default implementation uses {@link #convertInputToNativeFormat}.
     *
     * @param y
     *           data to convert.
     * @param spec
     *           any customizations for the conversion.
     * @return converted data.
     */
    convertYToNative(y: , spec?: MlOperationSpec): any;

    /**
     * Convert a {@link Data} input or a collection of {@link Data} inputs to its native format. This method will always
     * choose to convert {@link Data} instances to the first format in {@link #nativeInputFormats}
     * (i.e. `nativeInputFormats[0]`). Collections will be converted to their Python equivalent (e.g. {@link Map} to
     * `dict`, named {@link Tuple} to `collections.namedtuple`). Non {@link Data} inputs will be ignored.
     *
     * @param input
     *           data to convert.
     * @param spec
     *           any customizations for the conversion.
     * @return converted data.
     */
    convertInputToNativeFormat(input?: any, spec?: MlOperationSpec): any | null;

    /**
     * Convert output from python native format to `DO`
     * Developer Note: Be careful when overriding this method! The implementation should only convert the native output
     * to a C3 type. Any modifications to the native type should happen within {@link #doProcess} itself! This allows
     * the platform to implement advanced optimizations like {@link Workflow.MlPipeline.Rdce}, which basically allows
     * passing of intermediate pipeline data in its native state. For this to work properly, the native output needs to
     * be equivalent in format to the c3 output of this function.
     * For example, suppose the native output of the native model is a list of `np.array` and you desire the native output to be
     * a dictionary instead. The conversion of list to dict should happen within {@link #doProcess}.
     */
    convertNativeToPipeOutputs(output: any, datasetId?: string): Data;

    /**
     * Static method to convert native Python objects into instances of C3 Data. If the output is a dictionary of native
     * objects, this method will return a map of C3 Data instances.
     */
    static convertNativeToData(out: any, datasetId?: string): any | Data | Map_Type<string, Data>;

    /**
     * Serialize and save a native model to the client's file system. Used by e.g. {@link #afterTrain} to save
     * a trained model to then be uploaded and associated with the trained pipe.
     * @param modelDir
     *           path to local directory to save the model file(s).
     * @param model
     *           the native model to save.
     */
    saveModel(modelDir: string, model?: any): void;

    /**
     * Load and deserialized a native model from the client's file system. Used by e.g. {@link #beforeTrain} after
     * model is downloaded.
     * @param modelDir
     *           path to local directory to load the model file(s) from.
     * @return the deserialized native model.
     */
    loadModel(modelDir: string): any;

    /**
     * Creates a copy of the pipe with behavior specified by the spec. The underlying model files are unchanged. If there
     * are no differences between the pipe and the behavior defined in the spec, the pipe is returned unchanged.
     * Also calls {@link #afterConvert}.
     * @param spec
     *           an {@link MlConvertSpec} for specifying conversion specifications.
     * @return a new instance of {@link MlPipe}.
     */
    withNewSpec(spec?: MlConvertSpec): Reconstruction.ResidualPipe;

    /**
     * Returns an instance of the pipe after the convert is done.
     *
     * DEVELOPER NOTE: Any post conversion logic should go here.
     * @param model
     *           the native model that is passed to {@link #convert}.
     * @param spec
     *           an {@link MlConvertSpec} for specifying conversion specifications.
     * @return a new instance of {@link MlAtomicPipe}
     */
    afterConvert(model: any, spec?: MlConvertSpec): Reconstruction.ResidualPipe;

    /**
     * Helper function to check if the xType, yType, outType, xNames, yNames, and outNames in the {@link MlConvertSpec}
     * (if specified) match the bindings for the pipe.
     * Throws an error if any do not match the expected values.
     * @param spec
     *        an {@link MlConvertSpec} to be validated
     * @param expectedSpec
     *        an {@link MlConvertSpec} that is the ground truth to compare against the spec
     */
    static validateInputOutputBindings(spec?: MlConvertSpec, expectedSpec?: MlConvertSpec): void;

    /**
     * Validate the pipe.
     *
     * @param context
     *        any additional information that should be passed in to validate the pipe. For example,
     *        {@link VllmPipe#validate} expects the context to contain the "deploySpec" key with a
     *        {@link MlAtomicPipe.Engine.DeploySpec} value in order to do validation during deployment to an
     *        {@link MlAtomicPipe.Engine}.
     */
    validate(context?: Map_Type<string, any>): void;

    /**
     * Delete model's persisted files
     */
    deleteFiles(): void;

    /**
     * @return list of x input names expected for this pipe instance. For single-input-single-output, hardcoded to
     *  return `['x']`
     */
    xNames(): Array_Type<string> | null;

    /**
     * @return list of y input names expected for this pipe instance. For single-input-single-output, hardcoded to
     *  return `['y']`
     */
    yNames(): Array_Type<string> | null;

    /**
     * @return list of output names expected for this pipe instance. For single-input-single-output, hardcoded to
     *  return `['out']`
     */
    outNames(): Array_Type<string> | null;

    /**
     * Creates an {@link MlPipe.Bindings} object based on the provided `xTypes`, `yTypes`, and `outTypes` maps. A dynamic
     * Obj is created if the x/y/outTypes map contain more than one element. If the map contains only a single element,
     * the corresponding 'dx', 'dy', or 'do' is not considered as a multi-input object. For example,
     * `xTypes={'x': c3:Data}` will bind {@link MlPipe.Bindings#dx} to `Data` and represents a single input.
     *
     * @param xTypes
     *             The type(s) for each x input.
     * @param yTypes
     *             The type(s) for each y input.
     * @param outTypes
     *             The type(s) for each output.
     * @return an {@link MlPipe.Bindings} object that contains the binding information for the pipe
     */
    static bindVars(xTypes?: Map_Type<string, ValueType>, yTypes?: Map_Type<string, ValueType>, outTypes?: Map_Type<string, ValueType>): MlPipe.Bindings;

    /**
     * Returns the Url where the native Python class is stored.
     * @param name
     *           Name of the file in which python class is stored.
     * @param classSource
     *           A native Python class
     * @return
     *           A Url where the native python class is stored.
     */
    static uploadPyNativeClass(name?: string, classSource?: any): Url;

    /**
     * Returns the native Python class, downloaded from a native class url where the python class
     * files are stored
     * @param nativeClassUrl
     *           A url for accessing the saved native class source code.
     * @return
     *           A native Python class.
     */
    static downloadPyNativeClass(nativeClassUrl?: Url): any | null;

    /**
     * Set the `subject` and `timestamp` columns as indices on the input {@link Data} for time series data.
     * Sets the `subject` column as index on the input {@link Data} for non-time series data.
     * This method will only set the new
     * indices if __all__ of the following conditions are satisfied:
     * - The input is an instance of {@link Data} or `pd.DataFrame`
     * - The columns of the input must include both `subject` and `timestamp` (or) `subject` (non-time series data)
     * - The input contains only a single index
     * - The index either has no name or is the default name "index"
     * @param input
     *           The input to {@link #process}
     * @return
     *           If all conditions are satisfied, returns the input with a `subject` and `timestamp` index. Otherwise,
     *           return the same input.
     */
    static setFeatureIndices(input?: any): any;

    /**
     * The native input formats the pipe expects.
     */
    nativeInputFormats(): Array_Type<string>;

    /**
     * Dataset id of the input.
     */
    static getInputDatasetId(x?: ): string;

    /**
     * Convert `x` and `y`, which are already in a native format, to a native format that is supported by this atomic
     * pipe. This method will first check if the current format of `x` and `y` are supported by this pipe. If so, no
     * conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
     * specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertPipeInputsToNative} if
     * the {@link Workflow.MlPipeline.Rdce} optimization is applied.
     */
    convertNativeToNative(x: any, y?: any, spec?: MlOperationSpec): any;

    /**
     * Convert `x` which is already in a native format, to a native format that is supported by this atomic
     * pipe. This method will first check if the current format of `x`is supported by this pipe. If so, no
     * conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
     * specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertXToNative} if
     * the {@link Workflow.MlPipeline.Rdce} optimization is applied.
     */
    convertXNativeToNative(x: any, spec?: MlOperationSpec): any;

    /**
     * Convert `y` which is already in a native format, to a native format that is supported by this atomic
     * pipe. This method will first check if the current format of `y`is supported by this pipe. If so, no
     * conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
     * specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertYToNative} if
     * the {@link Workflow.MlPipeline.Rdce} optimization is applied.
     */
    convertYNativeToNative(y: any, spec?: MlOperationSpec): any;

    /**
     * Add or change a set of parameter spaces for the hyperparameters of an {@link MlAtomicPipe}.
     * Example usage:
     * For a sample {@link MlAtomicPipe} created using Linear Regression in Sklearn:
     *
     * ```py
     * lr_pipe = c3.MlPipe.convert(native_lr)
     * updated_lr_pipe = lr_pipe.withHyperparamSpaces({"normalize": c3.Hp.ParamSpace.Categorical.fromValues([True, False])})
     * ```
     *
     * @param paramSpaces
     *           Map key represents the hyperparameter names. Map value represents the parameter spaces to be
     *           defined for each respective hyperparameter.
     * @return a {@link MlAtomicPipe} with added parameter spaces for each desired hyperparameter.
     */
    withHyperparamSpaces(paramSpaces: Map_Type<string, Hp.ParamSpace>): Reconstruction.ResidualPipe;

    /**
     * Helper method to determine action requirement for a given ml operation action.
     *
     * @param actionName
     *           the name of the action to get the requirement for, e.g. "doTrain" or "doProcess"
     * @return the action requirement name for the corresponding action or null if the action is not implemented.
     */
    actionRequirementForAction(actionName: string): string | null;

    /**
     * Helper method to determine action requirement for calling a particular operation.
     *
     * @return the action requirement name.
     */
    actionRequirementFor(opName: string): string | null;

    /**
     * Warmup the model for the pipe.
     */
    warmupModel(): void;

    /**
     * Actions to run when an {@link MlAtomicPipe.Engine} that deploys this pipe is terminated.
     */
    onEngineTerminate(): void;

    /**
     * Returns the {@link MlAtomicPipe.Engine} for the pipe. If the spec and engineType is not provided, the default is used.
     */
    engineSpec(): MlAtomicPipe.Engine.DeploySpec;

    /**
     * Generates a {@link Workflow} with a single {@link Workflow.Action} vertex which calls {@link #processSync}.
     */
    processSyncWorkflow(): Workflow;

    /**
     * The key used to populate {@link MlOperationRun#runContext}.
     */
    runContextKey(): string;
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
