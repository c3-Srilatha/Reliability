// TypeScript definitions for the C3 type BaseCodeAnalyzer.GitHubGadget

/**
 * Base Type for {@link BaseCodeAnalyzer} to interact with a GitHub repository through REST.
 * This Type is intended to add on additional APIs required for the code analyzer on top of
 * what's already provided by the {@link GitHub} Type.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalyzer.GitHubGadget
 */
declare namespace BaseCodeAnalyzer {
  export interface IGitHubGadget {

    /**
     * The string to be displayed on the commit status corresponding to the code analysis run.
     */
    CODE_ANALYZER_COMMIT_STATUS_NAME?: string;

    /**
     * The description to be displayed on a pending code analysis run commit status.
     */
    CODE_ANALYZER_PENDING_COMMIT_STATUS_MSG?: string;

    /**
     * The description to be displayed on a successful code analysis run commit status.
     */
    CODE_ANALYZER_SUCCESS_COMMIT_STATUS_MSG?: string;

    /**
     * The description to be displayed on a failure code analysis run commit status.
     */
    CODE_ANALYZER_FAILURE_COMMIT_STATUS_MSG?: string;

    /**
     * The description to be displayed on a error code analysis run commit status.
     */
    CODE_ANALYZER_ERROR_COMMIT_STATUS_MSG?: string;

    /**
     * The description to be displayed on an incomplete code analysis run commit status.
     */
    CODE_ANALYZER_INCOMPLETE_COMMIT_STATUS_MSG?: string;

    /**
     * The description to be displayed on an completed code analysis run commit status for non-PR commits.
     */
    CODE_ANALYZER_COMPLETION_COMMIT_STATUS_MSG?: string;

    /**
     * An instance of the REST type created in the `baseCodeAnalyzer` package to add additional source control APIs
     * on top of what's provided in {@link platformRestInst}.
     */
    restInst: IBaseCodeAnalyzer.GitHubRestApi;

    /**
     * An instance of the C3 AI Platform REST type used to interact with the source control host.
     * Example: {@link GitHub}.
     */
    platformRestInst: IGitHub;

    /**
     * The spec from which this source control gadget was created.
     */
    spec: IBaseCodeAnalyzer.GitHubGadget.Spec;
  }
}

/**
 * Base Type for {@link BaseCodeAnalyzer} to interact with a GitHub repository through REST.
 * This Type is intended to add on additional APIs required for the code analyzer on top of
 * what's already provided by the {@link GitHub} Type.
 *
 * @remarks this represents a made instance of BaseCodeAnalyzer.GitHubGadget
 */
declare namespace BaseCodeAnalyzer {
  export class GitHubGadget extends Obj  {

    /**
     * The string to be displayed on the commit status corresponding to the code analysis run.
     */
    readonly CODE_ANALYZER_COMMIT_STATUS_NAME?: string;
    withCODE_ANALYZER_COMMIT_STATUS_NAME(CODE_ANALYZER_COMMIT_STATUS_NAME: string | null): BaseCodeAnalyzer.GitHubGadget;

    /**
     * The description to be displayed on a pending code analysis run commit status.
     */
    readonly CODE_ANALYZER_PENDING_COMMIT_STATUS_MSG?: string;
    withCODE_ANALYZER_PENDING_COMMIT_STATUS_MSG(CODE_ANALYZER_PENDING_COMMIT_STATUS_MSG: string | null): BaseCodeAnalyzer.GitHubGadget;

    /**
     * The description to be displayed on a successful code analysis run commit status.
     */
    readonly CODE_ANALYZER_SUCCESS_COMMIT_STATUS_MSG?: string;
    withCODE_ANALYZER_SUCCESS_COMMIT_STATUS_MSG(CODE_ANALYZER_SUCCESS_COMMIT_STATUS_MSG: string | null): BaseCodeAnalyzer.GitHubGadget;

    /**
     * The description to be displayed on a failure code analysis run commit status.
     */
    readonly CODE_ANALYZER_FAILURE_COMMIT_STATUS_MSG?: string;
    withCODE_ANALYZER_FAILURE_COMMIT_STATUS_MSG(CODE_ANALYZER_FAILURE_COMMIT_STATUS_MSG: string | null): BaseCodeAnalyzer.GitHubGadget;

    /**
     * The description to be displayed on a error code analysis run commit status.
     */
    readonly CODE_ANALYZER_ERROR_COMMIT_STATUS_MSG?: string;
    withCODE_ANALYZER_ERROR_COMMIT_STATUS_MSG(CODE_ANALYZER_ERROR_COMMIT_STATUS_MSG: string | null): BaseCodeAnalyzer.GitHubGadget;

    /**
     * The description to be displayed on an incomplete code analysis run commit status.
     */
    readonly CODE_ANALYZER_INCOMPLETE_COMMIT_STATUS_MSG?: string;
    withCODE_ANALYZER_INCOMPLETE_COMMIT_STATUS_MSG(CODE_ANALYZER_INCOMPLETE_COMMIT_STATUS_MSG: string | null): BaseCodeAnalyzer.GitHubGadget;

    /**
     * The description to be displayed on an completed code analysis run commit status for non-PR commits.
     */
    readonly CODE_ANALYZER_COMPLETION_COMMIT_STATUS_MSG?: string;
    withCODE_ANALYZER_COMPLETION_COMMIT_STATUS_MSG(CODE_ANALYZER_COMPLETION_COMMIT_STATUS_MSG: string | null): BaseCodeAnalyzer.GitHubGadget;

    /**
     * An instance of the REST type created in the `baseCodeAnalyzer` package to add additional source control APIs
     * on top of what's provided in {@link platformRestInst}.
     */
    readonly restInst: BaseCodeAnalyzer.GitHubRestApi;
    withRestInst(restInst: IBaseCodeAnalyzer.GitHubRestApi): BaseCodeAnalyzer.GitHubGadget;

    /**
     * An instance of the C3 AI Platform REST type used to interact with the source control host.
     * Example: {@link GitHub}.
     */
    readonly platformRestInst: GitHub;
    withPlatformRestInst(platformRestInst: IGitHub): BaseCodeAnalyzer.GitHubGadget;

    /**
     * The spec from which this source control gadget was created.
     */
    readonly spec: BaseCodeAnalyzer.GitHubGadget.Spec;
    withSpec(spec: IBaseCodeAnalyzer.GitHubGadget.Spec): BaseCodeAnalyzer.GitHubGadget;

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
    static fromJson(json: any): BaseCodeAnalyzer.GitHubGadget | null;

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
    static fromJsonString(json: string): BaseCodeAnalyzer.GitHubGadget | null;

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
    static fromXmlString(xml: string): BaseCodeAnalyzer.GitHubGadget | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): BaseCodeAnalyzer.GitHubGadget | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<BaseCodeAnalyzer.GitHubGadget>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<BaseCodeAnalyzer.GitHubGadget>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): BaseCodeAnalyzer.GitHubGadget;

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
    withField(field: string, value: any, doNotConvert?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    withoutFieldAtPath(path: string): BaseCodeAnalyzer.GitHubGadget;

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
    withoutField(field: string): BaseCodeAnalyzer.GitHubGadget;

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
    withoutField(field: FieldType): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): BaseCodeAnalyzer.GitHubGadget;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): BaseCodeAnalyzer.GitHubGadget;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): BaseCodeAnalyzer.GitHubGadget;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): BaseCodeAnalyzer.GitHubGadget;

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
    defaultField(field: string): BaseCodeAnalyzer.GitHubGadget;

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
    defaultField(field: FieldType): BaseCodeAnalyzer.GitHubGadget;

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
    unsetField(field: string): BaseCodeAnalyzer.GitHubGadget;

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
    unsetField(field: FieldType): BaseCodeAnalyzer.GitHubGadget;

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
    removeField(field: string): BaseCodeAnalyzer.GitHubGadget;

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
    removeField(field: FieldType): BaseCodeAnalyzer.GitHubGadget;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): BaseCodeAnalyzer.GitHubGadget;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): BaseCodeAnalyzer.GitHubGadget;

    mergeJson(json: any): BaseCodeAnalyzer.GitHubGadget;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<BaseCodeAnalyzer.GitHubGadget>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<BaseCodeAnalyzer.GitHubGadget> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<BaseCodeAnalyzer.GitHubGadget> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<BaseCodeAnalyzer.GitHubGadget>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<BaseCodeAnalyzer.GitHubGadget> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, BaseCodeAnalyzer.GitHubGadget> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, BaseCodeAnalyzer.GitHubGadget> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<BaseCodeAnalyzer.GitHubGadget>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<BaseCodeAnalyzer.GitHubGadget>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    static make(fields: any, withDefaults?: boolean): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): BaseCodeAnalyzer.GitHubGadget;

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
    afterMake(): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<BaseCodeAnalyzer.GitHubGadget> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): BaseCodeAnalyzer.GitHubGadget;

    /**
     * Helper function to get the path of a file in the source control repo based on it's file package path URL.
     *
     * @param filePkgPathUrl
     *           The file's package path URL.
     * @returns the file's path in the source control repo.
     */
    getFilePathInSourceControlRepo(filePkgPathUrl?: string): string;

    /**
     * Helper function to get a {@link BaseCodeAnalyzer.SourceControlGadget} instances based on the provided
     * {@link BaseCodeAnalyzer.SourceControlGadget.Spec}.
     *
     * @param spec
     *          The spec to create the source control gadget from.
     * @returns an instance of a source control gadget.
     */
    static getGadgetFromSpec(spec?: BaseCodeAnalyzer.SourceControlGadget.Spec): BaseCodeAnalyzer.SourceControlGadget<any, any, any>;

    /**
     * Helper function to get the base branch name for a function.
     *
     * @returns the base branch name for the commitSha for which this gadget was built.
     */
    getBaseBranchName(): string | null;

    /**
     * Function to post a 'pending' code analysis status on the commit on which code analysis
     * is being performed.
     */
    postPendingCommitStatus(): void;

    /**
     * Function to post a 'success' code analysis status on the commit on which code analysis
     * is being performed.
     */
    postSuccessCommitStatus(): void;

    /**
     * Function to post a 'success' code analysis status on the commit on which code analysis
     * is being performed.
     */
    postFailureCommitStatus(): void;

    /**
     * Function to post a 'error' code analysis status on the commit on which code analysis
     * couldn't be completed because there was at least one package that didn't have a dependency
     * on `baseToolkit`.
     */
    postIncompleteCommitStatus(): void;

    /**
     * Function to post a 'success' code analysis status on non-PR commits for which code analysis was completed.
     */
    postCompletionCommitStatus(): void;

    /**
     * Helper function to get the pull request's title. Used to check if the title matches c3 guidelines,
     * i.e., starts with the ticket number.
     *
     * @returns the title of the current pull request.
     */
    getPullRequestTitle(): string | null;

    /**
     * Helper function to get an array of {@link BaseCodeAnalysis.FileSpec}s of the files
     * that were changed between the commitSha and baseSha.
     *
     * @param packagesPath
     *          The packages path where application packages are stored within the repository.
     * @returns an map from the file paths of the modified files in the server's filesystem to their
     *         respective {@link BaseCodeAnalyzer.SourceControlGadget.FileDiff}s.
     */
    getModifiedFileDiffs(packagesPath: string): Map_Type<string, BaseCodeAnalyzer.SourceControlGadget.FileDiff> | null;

    /**
     * Helper function to parse the diff patch of a file and get the deleted and added lines.
     *
     * @param filePkgPathUrl
     *          The path of the file (in the server's filesystem) for which the git diff is being parsed.
     * @param filePathInSourceControlRepo
     *          The path of the file (in the source control repository) for which the git diff is being parsed.
     * @param diff
     *          The git diff patch string to parse.
     *
     * @returns a {@link BaseCodeAnalyzer.SourceControlGadget.FileDiff} containing two maps corresponding to
     *         the added and deleted lines, their line numbers and content.
     */
    static parseDiff(filePkgPathUrl: string, filePathInSourceControlRepo: string, diff?: string): BaseCodeAnalyzer.SourceControlGadget.FileDiff | null;

    /**
     * Helper function to get the lne-level anchor for a commit.
     *
     * @param filePkgPathUrl
     *          The file path of the file in the server.
     * @param line
     *          The line number to get the encoded anchor for.
     *
     * @returns the hyperlink to the encoded anchor on a commit.
     */
    getCommitEncodedAnchor(filePkgPathUrl?: string, line?: number): string | null;

    /**
     * Helper function to get the file- and line-level anchors for a pull request.
     *
     * @param prUrl
     *          The pull request URL.
     * @param messages
     *          The list of messages for which to get anchors.
     *
     * @returns the {@link BaseCodeAnalyzer.SourceControlGadget.Anchors} containing the file- and line-level
     *          anchors.
     */
    static getPrEncodedAnchors(prUrl?: string, messages?: Array_Type<BaseCodeAnalysis.Metric.Message.Processed>): BaseCodeAnalyzer.SourceControlGadget.Anchors | null;

    /**
     * Helper function to post a code review based on the metric messages raised by the code analysis function.
     *
     * The C3 AI Code Analyzer only posts a maximum of {@link BaseCodeAnalyzer.NotifyPullRequestSpec#maxCodeAnalyzerCommentCount}
     * error messages as inline comments and posts the rest of the messages in the review comment.
     * This function determines how many of the error messages were already posted
     * and returned the number of previous posted messages, the number of new messages (including warnings) and also
     * provides the list of comments to post on the PR (ensuring the total comments posted is at a maximum of `x`).
     *
     * @param processedResults
     *          The processed code analysis results from which to post review comments.
     * @param maxCodeAnalyzerCommentCount
     *          The maximum number of code analyzer comments to post as inline comments.
     */
    updateOrPostCodeReviewComments(processedResults?: Array_Type<BaseCodeAnalysis.Result.Processed>, maxCodeAnalyzerCommentCount?: number): void;

    /**
     * Helper function to post a code analysis summary based on the metric results calculated by the
     * code analysis function.
     *
     * @param summaryMessage
     *          The summary message to be updated/posted.
     */
    updateOrPostCodeReviewSummary(summaryMessage?: string): void;

    /**
     * Helper function to commit the processed results to a centralized repository for analysis.
     *
     * @param spec
     *           The spec containing information to push the code analysis results to a centralized repository.
     */
    commitProcessedResults(spec?: BaseCodeAnalyzer.SourceControlGadget.CommitResultsSpec): void;

    /**
     * Helper function to get the file contents of the files in the provided list of file paths.
     *
     * @param filePaths
     *           The list of file paths for which to get the file contents.
     * @returns a map from the file paths to their respective file contents.
     */
    getFileContents(filePaths?: Array_Type<string>): Map_Type<string, string> | null;

    /**
     * Function to check whether the commit on which this code analysis build is running is up-to-date, i.e.,
     * if the SHA of the build is the same as the current SHA of the PR.
     *
     * @returns true if the sha is up-to-date.
     */
    isCommitShaUpToDate(): boolean;

    /**
     * Helper function to get a list of auth tokens to be used for authorizing.
     * Contains the default auth token with passed in the source control spec along with
     * the backup tokens.
     *
     * @returns the list of GitHub token to be used to authorize GitHub API request.
     */
    getAuthWithBackupTokens(): Array_Type<string> | null;

    /**
     * Wrapper function to execute a lambda with retry logic by trying multiple auth tokens
     * until the API request succeeds. All write operations must use this wrapper so to ensure
     * there is fault tolerance if any one token hits secondary rate limits.
     *
     * @param url
     *           The GitHub API url to use.
     * @param lambda
     *           The request lambda to execute. Must have partially applied args for all parameters
     *           other than the url and auth with which to execute the lambda. Must accept a url and auth token.
     * @returns the response from the GitHub API, if any
     */
    invokeApiWithBackupTokens(url: string, lambda: Lambda<FunctionType>): any | null;

    /**
     * Wrapper around the {@link GitHub#pullRequest} function.
     * Being used to reliably spy on the `pullRequest` function.
     *
     * @param fullRepositoryName
     *           GitHub's full repository path. (e.g. `c3-e/c3server`)
     * @param pullRequestNumber
     *           The number of the pull request.
     * @returns the latest pull request information corresponding to the repo and PR number.
     */
    pullRequest(fullRepositoryName: string, pullRequestNumber: string): GitHubPullRequest | null;

    /**
     * Wrapper around the {@link BaseCodeAnalyzer.GitHubRestApi#pullRequestComments} function.
     * Being used to reliably spy on the `pullRequestComments` function.
     *
     * @returns the list of GitHub comments for the PR linked to this gadget.
     */
    pullRequestComments(): Array_Type<BaseCodeAnalyzer.GitHubComment> | null;

    /**
     * Wrapper around the {@link BaseCodeAnalyzer.GitHubRestApi#createPullRequestReview} function.
     * Being used to reliably spy on the `createPullRequestReview` function to ensure the
     * correct comments are being passed through.
     *
     * @param body
     *           The text of the review comment.
     * @param comments
     *           The list of GitHub comments to be posted as part of the pull request review.
     */
    createPullRequestReview(body?: string, comments?: Array_Type<BaseCodeAnalyzer.GitHubComment>): void;

    /**
     * Wrapper around the {@link GitHub#createIssueComment} function.
     * Being used to reliably spy on the `createIssueComment` function to ensure the
     * correct summary message is being passed through.
     *
     * @param summaryMessage
     *           The summary message to be posted on the PR.
     */
    createIssueComment(summaryMessage?: string): void;

    /**
     * Wrapper around the {@link GitHub#updateIssueComment} function.
     * Being used to reliably spy on the `updateIssueComment` function to ensure the
     * correct summary message is being passed through.
     *
     * @param summaryMessage
     *           The summary message to be posted on the PR.
     * @param issueCommentId
     *           The ID of the the issue comment to update.
     */
    updateIssueComment(summaryMessage?: string, issueCommentId?: number): void;

    /**
     * Helper function to get the ID of an existing code analysis summary comment, if it exists.
     * If there isn't one, returns null.
     *
     * @returns the ID of the existing summary comment.
     */
    getExistingSummaryCommentId(): number | null;

    /**
     * Helper function to determine the number of comments to post as part of the review.
     *
     * The C3 AI Code Analyzer only posts a maximum of {@link BaseCodeAnalyzer.NotifyPullRequestSpec#maxCodeAnalyzerCommentCount}
     * error messages as inline comments and posts the rest of the messages in the review comment.
     * This function determines how many of the error messages were already posted
     * and returned the number of previous posted messages, the number of new messages (including warnings) and also
     * provides the list of comments to post on the PR (ensuring the total comments posted is at a maximum of `x`).
     *
     * Returns a JSON object with the following shape:
     *
     * ```json
     * {
     *   "previouslyPostedMsgsCount": int,
     *   "newCommentCount": int,
     *   "commentsToPost": [BaseCodeAnalyzer.GitHubComment]
     * }
     * ```
     *
     * @param messages
     *           The processed metric messages (along with their metric code) to convert and classify.
     * @param maxCodeAnalyzerCommentCount
     *           The maximum number of code analyzer comments to post as inline comments.
     * @returns Object with the previously posted message count, new comment count and
     *          the comments to post.
     */
    convertAndClassifyToGitHubComments(messages?: Array_Type<>, maxCodeAnalyzerCommentCount?: number): any | null;
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
