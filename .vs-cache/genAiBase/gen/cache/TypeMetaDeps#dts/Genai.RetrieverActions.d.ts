// TypeScript definitions for the C3 type Genai.RetrieverActions

/**
 * The actions for a Genai.Retriever (separated so Genai.Retriever.Dense.Engine can mix them in
 * without being an entity). Ideally, this type would be called Genai.Retriever.Actions, but since
 * Genai.Retriever must mix this type in, this cannot also be within the Genai.Retriever namespace.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.RetrieverActions
 */
declare namespace Genai {
  export interface IRetrieverActions {
  }
}

/**
 * The actions for a Genai.Retriever (separated so Genai.Retriever.Dense.Engine can mix them in
 * without being an entity). Ideally, this type would be called Genai.Retriever.Actions, but since
 * Genai.Retriever must mix this type in, this cannot also be within the Genai.Retriever namespace.
 *
 * @remarks this represents a made instance of Genai.RetrieverActions
 */
declare namespace Genai {
  export class RetrieverActions extends Obj  {

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
    static fromJson(json: any): Genai.RetrieverActions | null;

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
    static fromJsonString(json: string): Genai.RetrieverActions | null;

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
    static fromXmlString(xml: string): Genai.RetrieverActions | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.RetrieverActions | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.RetrieverActions;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.RetrieverActions;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.RetrieverActions;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.RetrieverActions>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.RetrieverActions>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.RetrieverActions;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.RetrieverActions;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.RetrieverActions;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.RetrieverActions;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.RetrieverActions;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.RetrieverActions;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.RetrieverActions;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.RetrieverActions;

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
    withoutFieldAtPath(path: string): Genai.RetrieverActions;

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
    withoutField(field: string): Genai.RetrieverActions;

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
    withoutField(field: FieldType): Genai.RetrieverActions;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.RetrieverActions;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.RetrieverActions;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.RetrieverActions;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.RetrieverActions;

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
    defaultField(field: string): Genai.RetrieverActions;

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
    defaultField(field: FieldType): Genai.RetrieverActions;

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
    unsetField(field: string): Genai.RetrieverActions;

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
    unsetField(field: FieldType): Genai.RetrieverActions;

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
    removeField(field: string): Genai.RetrieverActions;

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
    removeField(field: FieldType): Genai.RetrieverActions;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.RetrieverActions;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.RetrieverActions;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.RetrieverActions;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.RetrieverActions;

    mergeJson(json: any): Genai.RetrieverActions;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.RetrieverActions;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.RetrieverActions;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.RetrieverActions>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.RetrieverActions> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.RetrieverActions> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.RetrieverActions>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.RetrieverActions> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.RetrieverActions> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.RetrieverActions> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.RetrieverActions>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.RetrieverActions>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.RetrieverActions;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.RetrieverActions;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.RetrieverActions;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.RetrieverActions;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.RetrieverActions;

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
    static make(fields: any, withDefaults?: boolean): Genai.RetrieverActions;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.RetrieverActions;

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
    afterMake(): Genai.RetrieverActions;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.RetrieverActions;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.RetrieverActions> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.RetrieverActions;

    /**
     * Index the passages in the source collections.
     *
     * @param collections
     *           The collections for which to index passages
     * @param purge
     *           If true, any existing index will be purged before indexing.
     * @return the SourceCollections processed and any errors from them
     */
    indexCollections(collections: Array_Type<Genai.SourceCollection>, purge?: boolean): ObjList<Genai.SourceCollection>;

    /**
     * Unindex the passages in the source collections.
     *
     * @param collections
     *           The collections for which to unindex passages
     * @param shouldTransitionToDeleted
     *           Transitions the {@link Genai.SourceFile#status} to {@link Genai.SourceFile.StatusEnum#DELETED} if set to true
     * @return the SourceCollections processed and any errors from them
     */
    unindexCollections(collections: Array_Type<Genai.SourceCollection>, shouldTransitionToDeleted?: boolean): ObjList<Genai.SourceCollection>;

    /**
     * Index the passages in the files.
     *
     * @param files
     *           The files for which to index passages
     * @param purge
     *           If true, any existing index will be purged before indexing.
     * @return the SourceFiles processed and any errors from them
     */
    indexFiles(files: Array_Type<Genai.SourceFile>, purge?: boolean): ObjList<Genai.SourceFile>;

    /**
     * Unindex the passages in the files.
     *
     * @param files
     *           The files for which to unindex passages
     * @return the SourceFile processed and any errors from them
     */
    unindexFiles(files: Array_Type<Genai.SourceFile>, shouldTransitionToDeleted?: boolean): ObjList<Genai.SourceFile>;

    /**
     * Handles transition of files to `INDEXED` and `NOT_INDEXED` states when indexing or unindeinxg completes.
     *
     * @param indexedPassages
     *           The passages that successfully indexed from index call or were remaining from an unindex call.
     * @param affectedSourceFiles
     *           The {@link Genai.SourceFile}s which were previously indexed. Useful for index with purge or unindexing.
     * @param purge
     *           Whether a purge was performed before the index operation.
     * @param unindexing
     *           Whether the original call was an index or unindex API for the Retriever. For example:
     *           #indexFiles #indexCollections #unindexFiles #unindexFiles
     * @param shouldTransitionToDeleted
     *           Transitions the {@link Genai.SourceFile#status} to {@link Genai.SourceFile.StatusEnum#DELETED} if set to true and the file is being unindexed.
     *           If falsy, the file would transition to {@link Genai.SourceFile.StatusEnum#NOT_INDEXED} after being unindexed
     */
    onIndexComplete(indexedPassages?: Array_Type<Genai.SourcePassage>, affectedSourceFiles?: Array_Type<Genai.SourceFile>, purge?: boolean, unindexing?: boolean, shouldTransitionToDeleted?: boolean): void;

    /**
     * Handles restoration of file statuses back to an "indexed" state (`INDEXED`, `NEEDS_REINDEXING`, `NEEDS_REMOVAL`)
     * for files which are in `failedPassages` but were in the previous zip. The rest of the failed files
     * go to the `FAILED` state.
     *
     * @param failedPassages
     *           The {@link Genai.SourcePassage}s which failed to index. Their respective {@link Genai.SourceFile}s will be
     *           updated.
     * @param errorMessage
     *           The specific message string for the failure
     * @param unindexing
     *           Whether the original call was an index or unindex API for the Retriever. For example:
     *           #indexFiles #indexCollections #unindexFiles #unindexFiles
     */
    onIndexFailure(failedPassages: Array_Type<Genai.SourcePassage>, errorMessage: string, unindexing?: boolean): void;

    /**
     * The same as {@link Genai.Retriever#onIndexFailure} but called from the async action processing {@link CronJob} in
     * {@link Genai.Retriever.IndexAction#processQueues}.
     */
    onIndexPassagesFileFailure(passagesFile: File, errorMessage: string, unindexing?: boolean): void;

    /**
     * Construct the SimilaritySearchResult array from an array of Documents.
     *
     * @param docs
     *           The array of docs
     * @param spec
     *           The spec
     * @param scoreThreshold
     *           Optionally drop all docs with scores below the threshold
     * @return the array of SimilaritySearchResults
     */
    constructSimilaritySearchResult(docs?: any, spec?: Genai.Retriever.SearchSpec, scoreThreshold?: number = '0'): Array_Type<Genai.Retriever.SimilaritySearchResult>;

    /**
     * Set up CUDA for GPU use.
     *
     * @param device
     *           The string value for the device being set. '-1' is CPU, otherwise a comma-separated value, e.g. '0' or '0,1,2'
     */
    static setupGpu(device: string): boolean;

    /**
     * Index the set of passages.
     *
     * @param passages
     *           The passages.
     * @param purge
     *           If true, any existing index will be purged before indexing.
     * @return the SourcePassages processed and any errors from them
     */
    indexPassages(passages: Array_Type<Genai.SourcePassage>, purge?: boolean): ObjList<Genai.SourcePassage>;

    /**
     * Unindex the set of passages.
     *
     * @param passages
     *           The passages
     * @param shouldTransitionToDeleted
     *           Transitions the {@link Genai.SourceFile#status} to {@link Genai.SourceFile.StatusEnum#DELETED} if set to true
     * @return the SourcePassages processed and any errors from them
     */
    unindexPassages(passages: Array_Type<Genai.SourcePassage>, shouldTransitionToDeleted?: boolean): ObjList<Genai.SourcePassage>;

    /**
     * Returns the top k passages that are most similar to the query.
     * In the case of post-filtering, if fewer than k passages are retrieved,
     * the search is repeated until k passages are retrieved.
     */
    similaritySearch(spec: Genai.Retriever.SearchSpec): Array_Type<Genai.Retriever.SimilaritySearchResult>;

    /**
     * Used internally when purging the existing indexes.
     *
     * NOTE: In the current implementation, unless `purgeZipLocation` is set to true,
     *       only **local** (to the node and process) state is purged.
     *
     * @return the Genai.Retriever on which this was called.
     */
    purgeIndex(purgeZipLocation?: boolean): Genai.Retriever;

    /**
     * Common logic for #purgeIndex.
     *
     * @param localRoot
     *           The local directory, if any, to purge
     * @param indexZipUrl
     *           The remote zip location, if any, to delete
     * @param purgeZipLocation
     *           Whether to remove the remote zip (if any) and update the SourceFile statuses.
     */
    doPurgeIndex(localRoot?: string, indexZipUrl?: string, purgeZipLocation?: boolean): void;

    /**
     * For testing and debugging purposes. Get the number of passages currently indexed.
     */
    passageCount(): number;

    /**
     * For internal and debugging purposes. Extract all of the SourceFiles in the retriever's vector store's passages.
     */
    indexedSourceFiles(): Array_Type<Genai.SourceFile> | null;

    /**
     * For internal and debugging purposes. Extract all of the SourceFiles in the retriever's vector store's passages.
     */
    indexedSourcePassages(): Array_Type<Genai.SourcePassage> | null;

    /**
     * Initialize the vector store.
     *
     * @param failIfMissing
     *    If true, the initialize call will fail if the retriever entity does not already exist.
     *
     * @return the number of passages currently loaded in the vector store
     */
    initialize(failIfMissing?: boolean): number;

    /**
     * Generate a list of source ids from {@link Genai.Query#addFilters}. Used by #similaritySearch
     * to determine which sources, if any, match the filter specified and are accessible to the
     * current {@link User}.
     *
     * @return the matching source ids. An empty array indicates there are no matching sources.
     * If query has no filters and ACLs are not enabled, this will return None/null to indicate that
     * no filter should be applied.
     */
    queryFilterToSourceIds(query: Genai.Query): Array_Type<string> | null;

    /**
     * Generate a {@link Filter} from {@link Genai.Query#addFilters}. Used by #similaritySearch
     * to determine which sources, if any, match the filter specified and are accessible to the
     * current {@link User}.
     *
     * @return the filter, if any.
     * If query has no filters and ACLs are not enabled, this will return None/null.
     */
    queryFilterToC3Filter(query: Genai.Query): Filter | null;

    /**
     * Private helper to dispatch an IndexAction to asynchronously index via ActionQueue.
     * @param passages
     *           The passages to index or unindex.
     * @param purge
     *           Whether to purge all existing indices before indexing.
     * @param unindexing
     *           The whether the passages are to be indexed or unindexed.
     * @param shouldTransitionToDeleted
     *           Transitions the {@link Genai.SourceFile#status} to {@link Genai.SourceFile.StatusEnum#DELETED} if set to true
     */
    dispatchIndexAction(passages: Array_Type<Genai.SourcePassage>, purge?: boolean, unindexing?: boolean, shouldTransitionToDeleted?: boolean): void;

    /**
     * Implemented in the extending types.
     *
     * Not declared abstract so types like {@link Genai.Retriever.Elser} do not need to override.
     * Index a list of passages in a file. Used by indexing AsyncAction to read in and index the passages.
     *
     * @param passagesFile
     *           A file temporarily written to the same directory as the indexZipUrl, but containing just the passages
     *           passed to #indexPassages or #unindexPassages.
     * @param purge
     *           Whether to purge all existing indices before indexing.
     * @param unindexing
     *           The whether the passages are to be indexed or unindexed.
     * @param usingGpu
     *           Whether GPU should be used
     * @param shouldTransitionToDeleted
     *           Transitions the {@link Genai.SourceFile#status} to {@link Genai.SourceFile.StatusEnum#DELETED} if set to true
     */
    indexPassagesFile(passagesFile: File, purge?: boolean, unindexing?: boolean, usingGpu?: boolean, shouldTransitionToDeleted?: boolean): void;

    /**
     * Read a passagesFile back into memory.
     * @param passagesFile
     *           A file temporarily written to the same directory as the indexZipUrl, but containing just the passages
     *           passed to #indexPassages or #unindexPassages.
     */
    static readPassagesFile(passagesFile: File): Array_Type<Genai.SourcePassage> | null;

    /**
     * Should be implemented by any extending type that uses a codemap for code snippets within source passages.
     * Returns the path on the local filesystem where the codemap will be stored, if it exists.
     *
     * @return the path where the locally downloaded codemap file will be found if it exists.
     */
    codemapFilePath(): string | null;

    /**
     * Return the dictionary of <string id>: <code snippet> constructed from the `reference_map` in the
     * {@link Genai.SourcePassage#metadata} for all passages.
     *
     * @return the map, if it exists at the path specified by #codemapFilePath
     */
    codemap(): Map_Type<string, string> | null;

    /**
     * Zips the data files and uploads to the remote location.
     *
     * @param indexZipUrl
     *           The url where the remote zip will be uploaded.
     * @param localRoot
     *           The local directory where the zip file will be persisted before uploading.
     * @param dataDir
     *           The local directory to zip.
     */
    static zipAndUpload(indexZipUrl: string, localRoot: string, dataDir: string): void;

    /**
     * Internal function to remove passages from the index.
     *
     * @param passageIds
     *           The ids of the passages to remove
     *
     * @return whether to continue indexing after removal
     */
    removePassages(passageIds: Array_Type<string>): boolean;

    /**
     * Internal function to determine if the retriever supports incremental indexing.
     * Unless overridden, this will return False (retrievers by default do not support incremental indexing)
     *
     * @return whether the retriever supports incremental indexing
     */
    supportsIncrementalIndexing(): boolean;

    /**
     * For a given set of passageIds, construct a list of SimilaritySearchResults
     *
     * @param passageIds
     *           The passage ids
     * @return the SimilaritySearchResults
     */
    resultsForPassageIds(passageIds: Array_Type<string>): Array_Type<Genai.Retriever.SimilaritySearchResult>;

    /**
     * For a collection of embeddings, return an array of indices corresponding to the top k matches according to the
     * Maximal Marginal Relevance (MMR) algorithm
     * @param embeddingList
     *           The embeddings to rank
     * @param similarityToQuery
     *          The similarity scores of each embedding to the query
     * @param lambdaMult
     *          The ratio used to filter passages out, likely defined by {@link Genai.Retriever.MmrSpec#relevanceToRedundancyRatio}
     * @param k
     *         The total number of embedding indexes to return
     * @return the indices
     */
    static maximalMarginalRelevance(embeddingList: Array_Type<Array_Type<number>>, similarityToQuery: Array_Type<number>, lambdaMult: number, k: number): Array_Type<number>;
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
