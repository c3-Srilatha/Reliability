// TypeScript definitions for the C3 type Err.DbRetryableForUpsert

/**
 *  Error type representing "Database" error.
 *  Includes DatastoreRetryableException
 * VersionConflictForUpdate
 * VersionConflictForRemove
 * TimeseriesHeaderCouldNotBeRetrieved
 * Deadlock
 * SftpOutputError
 * TxnAborted
 * SocketTimeoutException
 *
 * @remarks this represents a value passed to a method that expects an instance of Err.DbRetryableForUpsert
 */
declare namespace Err {
  export interface IDbRetryableForUpsert {

    /**
     * Formatted and localized message.
     */
    message?: string | null;

    /**
     * Unlocalized, parameterized error message string.
     */
    template?: string | null;

    /**
     * Parameters applied to {@link template} to produce error message.
     */
    parameters?: C3.Array<string | null> | Array<string | null>;

    /**
     * Unique (generated) error id.
     */
    id?: string | null;

    /**
     * Error key.
     */
    key?: string | null;

    /**
     * Error for nested/causing exception (if any).
     */
    cause?: IC3.Error | null;

    /**
     * http status code for this error
     */
    httpStatusCode: number;

    /**
     * Filename for where the error originated from
     */
    filenameOfRootError?: string | null;

    /**
     * Extra debugging information, such as script language stack.
     */
    debugInfo?: C3.Array<string | null> | Array<string | null>;

    /**
     * Script language (js/py) stacktrace.
     */
    stackTrace?: C3.Array<StackFrame | null> | Array<IStackFrame | null>;

    /**
     * Action information, e.g. "Dog#throwStaticSandwichJsError"
     * It should include argument types in case of overloaded methods.
     */
    action?: string | null;

    /**
     * Engine of the action that threw this error
     */
    engine?: string | null;

    /**
     * Timestamp when the error was thrown
     */
    timestamp?: DateTime | Date | string | null;

    /**
     * If this is the innermost Error / root cause and is created by a native Java exception, this field will be
     * that native Java exception.
     * Otherwise, this is an intermediate "wrapping" Error, and this field will be the corresponding C3RuntimeException.
     * We rely on this field to keep track of Java stacktrace.
     */
    _system?: any;
  }
}

/**
 *  Error type representing "Database" error.
 *  Includes DatastoreRetryableException
 * VersionConflictForUpdate
 * VersionConflictForRemove
 * TimeseriesHeaderCouldNotBeRetrieved
 * Deadlock
 * SftpOutputError
 * TxnAborted
 * SocketTimeoutException
 *
 * @remarks this represents a made instance of Err.DbRetryableForUpsert
 */
declare namespace Err {
  export class DbRetryableForUpsert extends Obj {

    /**
     * Formatted and localized message.
     */
    readonly message?: string | null;
    withMessage(message: string | null): Err.DbRetryableForUpsert;

    /**
     * Unlocalized, parameterized error message string.
     */
    readonly template?: string | null;
    withTemplate(template: string | null): Err.DbRetryableForUpsert;

    /**
     * Parameters applied to {@link template} to produce error message.
     */
    readonly parameters?: C3.Array<string | null>;
    withParameters(parameters: C3.Array<string | null> | Array<string | null>): Err.DbRetryableForUpsert;

    /**
     * Unique (generated) error id.
     */
    readonly id?: string | null;
    withId(id: string | null): Err.DbRetryableForUpsert;

    /**
     * Error key.
     */
    readonly key?: string | null;
    withKey(key: string | null): Err.DbRetryableForUpsert;

    /**
     * Error for nested/causing exception (if any).
     */
    readonly cause?: C3.Error | null;
    withCause(cause: IC3.Error | null): Err.DbRetryableForUpsert;

    /**
     * http status code for this error
     */
    readonly httpStatusCode: number;
    withHttpStatusCode(httpStatusCode: number): Err.DbRetryableForUpsert;

    /**
     * Filename for where the error originated from
     */
    readonly filenameOfRootError?: string | null;
    withFilenameOfRootError(filenameOfRootError: string | null): Err.DbRetryableForUpsert;

    /**
     * Extra debugging information, such as script language stack.
     */
    readonly debugInfo?: C3.Array<string | null>;
    withDebugInfo(debugInfo: C3.Array<string | null> | Array<string | null>): Err.DbRetryableForUpsert;

    /**
     * Script language (js/py) stacktrace.
     */
    readonly stackTrace?: C3.Array<StackFrame | null>;
    withStackTrace(stackTrace: C3.Array<StackFrame | null> | Array<IStackFrame | null>): Err.DbRetryableForUpsert;

    /**
     * Action information, e.g. "Dog#throwStaticSandwichJsError"
     * It should include argument types in case of overloaded methods.
     */
    readonly action?: string | null;
    withAction(action: string | null): Err.DbRetryableForUpsert;

    /**
     * Engine of the action that threw this error
     */
    readonly engine?: string | null;
    withEngine(engine: string | null): Err.DbRetryableForUpsert;

    /**
     * Timestamp when the error was thrown
     */
    readonly timestamp?: DateTime | null;
    withTimestamp(timestamp: DateTime | Date | string | null): Err.DbRetryableForUpsert;

    /**
     * If this is the innermost Error / root cause and is created by a native Java exception, this field will be
     * that native Java exception.
     * Otherwise, this is an intermediate "wrapping" Error, and this field will be the corresponding C3RuntimeException.
     * We rely on this field to keep track of Java stacktrace.
     */
    readonly _system?: any;
    with_system(_system: any): Err.DbRetryableForUpsert;

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
    static fromJson(json: any | null): Err.DbRetryableForUpsert | null;

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
    static fromJsonString(json: string | null): Err.DbRetryableForUpsert | null;

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
    static fromXmlString(xml: string | null): Err.DbRetryableForUpsert | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Err.DbRetryableForUpsert | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Err.DbRetryableForUpsert;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Err.DbRetryableForUpsert;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Err.DbRetryableForUpsert;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Err.DbRetryableForUpsert | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Err.DbRetryableForUpsert | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Err.DbRetryableForUpsert;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Err.DbRetryableForUpsert;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Err.DbRetryableForUpsert;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Err.DbRetryableForUpsert;

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
    withField(field: string, value: any, doNotConvert?: boolean): Err.DbRetryableForUpsert;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Err.DbRetryableForUpsert;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Err.DbRetryableForUpsert;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Err.DbRetryableForUpsert;

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
    withoutFieldAtPath(path: string): Err.DbRetryableForUpsert;

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
    withoutField(field: string | null): Err.DbRetryableForUpsert;

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
    withoutField(field: FieldType | null): Err.DbRetryableForUpsert;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Err.DbRetryableForUpsert;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Err.DbRetryableForUpsert;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Err.DbRetryableForUpsert;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Err.DbRetryableForUpsert;

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
    defaultField(field: string): Err.DbRetryableForUpsert;

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
    defaultField(field: FieldType): Err.DbRetryableForUpsert;

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
    unsetField(field: string): Err.DbRetryableForUpsert;

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
    unsetField(field: FieldType): Err.DbRetryableForUpsert;

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
    removeField(field: string): Err.DbRetryableForUpsert;

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
    removeField(field: FieldType): Err.DbRetryableForUpsert;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Err.DbRetryableForUpsert;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Err.DbRetryableForUpsert;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Err.DbRetryableForUpsert;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Err.DbRetryableForUpsert;

    mergeJson(json: any | null): Err.DbRetryableForUpsert;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Err.DbRetryableForUpsert;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Err.DbRetryableForUpsert;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Err.DbRetryableForUpsert | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Err.DbRetryableForUpsert | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Err.DbRetryableForUpsert | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Err.DbRetryableForUpsert | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Err.DbRetryableForUpsert | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Err.DbRetryableForUpsert | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Err.DbRetryableForUpsert | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Err.DbRetryableForUpsert | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Err.DbRetryableForUpsert | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Err.DbRetryableForUpsert;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Err.DbRetryableForUpsert;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Err.DbRetryableForUpsert;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Err.DbRetryableForUpsert;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Err.DbRetryableForUpsert;

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
    static make(fields: any, withDefaults?: boolean): Err.DbRetryableForUpsert;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Err.DbRetryableForUpsert;

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
    afterMake(): Err.DbRetryableForUpsert;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Err.DbRetryableForUpsert;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Err.DbRetryableForUpsert>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Err.DbRetryableForUpsert;

    /**
     * Construct application-developer-facing error message, including action information and script language stacktrace.
     */
    formatMessage(): string;

    /**
     * Fills in the {@link #message} field if unset by using the template and parameters.
     */
    withFormattedMessage(): Err.DbRetryableForUpsert;

    /**
     * The innermost error for nested exceptions. For exceptions that are not nested, just returns this error.
     */
    rootCause(): C3.Error;

    /**
     * Returns the error codes, which matches the (inner) type name of this error instance and all of its causes.
     * For example, {@link Err.InvalidType} `errorCodes` will include "InvalidType" as well as the individual error codes of all nested errors that caused the invalid type error.
     */
    codes(): C3.Set<string | null>;

    /**
     * @return formatted error of this Error type
     */
    static formatted(format: string, ...args: any[]): Err.DbRetryableForUpsert;

    /**
     * Construct an error with just the message.
     */
    static fromMessage(s: string | null): Err.DbRetryableForUpsert;

    /**
     * Convert to a Java Exception that is throwable. It will always be a `C3RuntimeException` which wraps the Error.
     */
    toJavaException(): any;

    /**
     * Construct an error from the system exception.
     */
    static fromJavaException(ex: any): Err.DbRetryableForUpsert;

    /**
     * Construct an error from the system exception.
     */
    static fromJavaException(message: string, ex: any): Err.DbRetryableForUpsert;

    /**
     * Produce a native exception object from this error instance.
     */
    toNativeException(): any;

    /**
     * Construct an error and a system exception around it to throw an error.
     */
    static fromTemplate(template: string | null, bindings: C3.Map<string | null, any> | null): Err.DbRetryableForUpsert;

    /**
     * Construct an error and a system exception around it to throw an error.
     */
    static fromHttpCodeAndTemplate(httpCode: number | null, template: string | null, bindings: C3.Map<string | null, any> | null): Err.DbRetryableForUpsert;

    /**
     * returns true if the error is a Err.Overflow instance.
     */
    isOverflow(): boolean;

    /**
     * returns true if the error is a Err.Db instance.
     */
    isDb(): boolean;

    /**
     * returns true if the error is a Err.DbRetryable instance.
     */
    isDbRetryable(): boolean;

    /**
     * returns true if the error is a Err.DbRetryableForUpsert instance.
     */
    isDbRetryableForUpsert(): boolean;

    /**
     * returns true if the error is a Err.DbRetryableForMerge instance.
     */
    isDbRetryableForMerge(): boolean;

    /**
     * returns true if the error is a Err.VersionConflict instance.
     */
    isVersionConflict(): boolean;

    /**
     * returns true if the error is a Err.UniqueConstraint instance.
     */
    isUniqueConstraint(): boolean;

    /**
     * returns true if the error is an Err.resourceNotFound instance.
     */
    isResourceNotFound(): boolean;

    /**
     * returns true if the error is due to the action being interrupted.
     */
    isActionInterrupt(): boolean;

    /**
     * returns true if the error is due to the concurrent modification on a file.
     */
    isFileConcurrentModification(): boolean;

    /**
     * returns true if the error is due to an Err.Timeout occurring.
     */
    isTimeout(): boolean;

    /**
     * Check if this error or any nested error contains the specified error type.
     *
     * This recursively searches through:
     * - Direct type match on this error
     * - Nested errors in BatchError
     * - Errors wrapped in C3RuntimeException via _system field
     *
     * Useful for detecting specific error types in complex error structures created
     * by error collection, wrapping, and batch operations.
     *
     * @param errorType
     *        The error type to search for
     * @return true if this error or any nested error is of the specified type
     */
    containsErrorType(errorType: Type): boolean;

    /**
     * returns true if the error is for provided http status code
     */
    hasHttpStatusCode(code?: number | null): boolean;

    /**
     * returns the http status code of the error. If the error does not have a http status code, it returns 500.
     */
    safeHttpStatusCode(): number;

    /**
     * Construct consolidated stack trace across all languages, including script languages and Java.
     */
    formatStackTrace(): string | null;

    /**
     * Get native C3 error exception class for the current language. All errors surfaced in C3 will have been created
     * as instances of this class. If they originate with native exceptions, those exceptions are wrapped.
     */
    static errorClass(): any;

    /**
     * returns the python stack trace
     */
    static pythonStackTrace(): string;

    static noObjWithSuchId(id: string | null, typeName: string | null): Err.Db;

    static datastoreNotAvailable(datastore: string | null): Err.Db;

    static dataConnectionNotAvailable(action: any, datastore: string | null, message: string | null): Err.Db;

    static noSecondaryDatastore(typeName: string | null): Err.Db;

    static c3TenantAlreadyExists(): Err.Db;

    static invalidDatastore(datastore: string | null): Err.Db;

    static redshiftTenantDatastore(datastore: string | null, tenantName: string | null): Err.Db;

    static datastoreInitalizationFailed(datastore: string | null, ex: any): Err.Db;

    static datastoreStartFailed(datastore: string | null, ex: any): Err.Db;

    static noAclToRemoveObj(objName: string | null, typeName: string | null): Err.Db;

    static upsertMultipleInclude(): Err.Db;

    static internalError(err: string | null): Err.Db;

    static backUpFileWriteFailed(message: string | null): Err.Db;

    static timeSliceNotSupportedForExplain(): Err.Db;

    static hierarchyDepthNotSupportedForExplain(): Err.Db;

    static getTimelineRequiresIncludeSpec(): Err.Db;

    static timeseriesPendingUpdateConflict(proposal: any, timeSeriesInterval: any): Err.Db;

    static fkeyArrayFilterOffsetLimitInvalid(expr: string | null): Err.Db;

    static removeAllFailed(id: string | null, typeName: string | null, ex: any): Err.Db;

    static versionNotFound(version: any, typeName: string | null, id: string | null): Err.Db;

    static versionAsOfNotFound(versionAsOf: any, typeName: string | null, id: string | null): Err.Db;

    static unremoveSeedObjNotExist(id: string | null, typeName: string | null): Err.Db;

    static fetchParametricType(typeName: string | null): Err.Db;

    static projectUniqueMustOnMapTypes(expr: any): Err.Db;

    static dbLockTimeout(dbkey: string | null, reason: string | null): Err.Db;

    static makeGenericType(typeName: string | null): Err.Db;

    static objectAlreadyExists(objName: string | null): Err.Db;

    static invalidFieldTypeRecursion(typeName: string | null, fieldName: string | null): Err.Db;

    static secretTimeout(db: string | null, resourceName: string | null): Err.Db;

    static invalidIndexDef(typeName: string | null, indexDef: string | null, fieldPath: string | null): Err.Db;

    static invalidIndexDefWithReason(typeName: string | null, indexDef: string | null, fieldPath: string | null, message: string | null): Err.Db;

    static invalidUniqueConstraintDef(typeName: string | null, constraintDef: string | null, fieldPath: string | null): Err.Db;

    static persistableFieldCycle(cycleType: string | null, rootTypeName: string | null, fieldPath: string | null): Err.Db;

    static unsupportedKeyPartType(valueType: string | null, fieldName: string | null): Err.Db;

    static sqlRecoverable(message: string): Err.DbRetryable;

    static resultSetDoesntExist(message: string): Err.DbRetryable;

    static connectionReset(): Err.DbRetryable;
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
