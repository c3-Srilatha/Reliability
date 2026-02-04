// TypeScript definitions for the C3 type BaseCodeAnalysis.AppInfo

/**
 * The result of information collection for all packages based on #mode.
 *
 * Some of these methods may seem redundant with the {@link TypeMeta} methods, but they're
 * necessary because when comparing two [versions](SemanticVersion) of an {@link App}, the
 * complete Type system for each version might not be available, so we can only rely on the
 * declaration. For example, let's say in version 1.0.0, there was `TypeA.fieldA`, but `TypeA`
 * was removed in 2.0.0. If we tried to call `(FieldType) fieldA.parentType()` in 2.0.0, it
 * would fail because `TypeA` doesn't exist.
 *
 * This also enables us to compare two versions of an {@link App} without needing to deploy
 * that {@link App}.
 *
 * @see BaseCodeAnalyzer#collectAppInfo
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.AppInfo
 */
declare namespace BaseCodeAnalysis {
  export interface IAppInfo {

    /**
     * The timestamp when the information was collected.
     */
    timestamp: DateTime | Date | string;

    /**
     * The mode for information collection from {@link BaseCodeAnalyzer.CollectAppInfoSpec#mode}.
     */
    mode: string;

    /**
     * The {@link App#serverVersion} that the app was deployed with during collection.
     */
    serverVersion: string;

    /**
     * The names of all packages that were collected by {@link BaseCodeAnalyzer#collectAppInfo},
     * ordered from root package to farthest dependency.
     *
     * This is different from #pkgDependencyInfos, which contains the information for
     * _all packages_ in the {@link App} regardless of whether they were collected.
     *
     * @see BaseCodeAnalyzer#getPkgNamesToCollect
     */
    collectedPkgNames?: Array_Type<string> | Array<string>;

    /**
     * A map of {@link Pkg#name}s to individual information about each package in the
     * {@link App}'s dependencies.
     */
    pkgDependencyInfos: Map_Type<string, BaseCodeAnalysis.PkgDependencyInfo> | {[key: string]: IBaseCodeAnalysis.PkgDependencyInfo};

    /**
     * The {@link TypeMeta} that was collected for this {@link App}, keyed by Type name.
     */
    typeInfos?: Map_Type<string, BaseCodeAnalysis.TypeInfo> | {[key: string]: IBaseCodeAnalysis.TypeInfo};
  }
}

/**
 * The result of information collection for all packages based on #mode.
 *
 * Some of these methods may seem redundant with the {@link TypeMeta} methods, but they're
 * necessary because when comparing two [versions](SemanticVersion) of an {@link App}, the
 * complete Type system for each version might not be available, so we can only rely on the
 * declaration. For example, let's say in version 1.0.0, there was `TypeA.fieldA`, but `TypeA`
 * was removed in 2.0.0. If we tried to call `(FieldType) fieldA.parentType()` in 2.0.0, it
 * would fail because `TypeA` doesn't exist.
 *
 * This also enables us to compare two versions of an {@link App} without needing to deploy
 * that {@link App}.
 *
 * @see BaseCodeAnalyzer#collectAppInfo
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.AppInfo
 */
declare namespace BaseCodeAnalysis {
  export class AppInfo extends Obj  {

    /**
     * The timestamp when the information was collected.
     */
    readonly timestamp: DateTime;
    withTimestamp(timestamp: DateTime | Date | string): BaseCodeAnalysis.AppInfo;

    /**
     * The mode for information collection from {@link BaseCodeAnalyzer.CollectAppInfoSpec#mode}.
     */
    readonly mode: string;
    withMode(mode: string): BaseCodeAnalysis.AppInfo;

    /**
     * The {@link App#serverVersion} that the app was deployed with during collection.
     */
    readonly serverVersion: string;
    withServerVersion(serverVersion: string): BaseCodeAnalysis.AppInfo;

    /**
     * The names of all packages that were collected by {@link BaseCodeAnalyzer#collectAppInfo},
     * ordered from root package to farthest dependency.
     *
     * This is different from #pkgDependencyInfos, which contains the information for
     * _all packages_ in the {@link App} regardless of whether they were collected.
     *
     * @see BaseCodeAnalyzer#getPkgNamesToCollect
     */
    readonly collectedPkgNames?: Array_Type<string>;
    withCollectedPkgNames(collectedPkgNames: Array_Type<string> | Array<string> | null): BaseCodeAnalysis.AppInfo;

    /**
     * A map of {@link Pkg#name}s to individual information about each package in the
     * {@link App}'s dependencies.
     */
    readonly pkgDependencyInfos: Map_Type<string, BaseCodeAnalysis.PkgDependencyInfo>;
    withPkgDependencyInfos(pkgDependencyInfos: Map_Type<string, BaseCodeAnalysis.PkgDependencyInfo> | {[key: string]: IBaseCodeAnalysis.PkgDependencyInfo}): BaseCodeAnalysis.AppInfo;

    /**
     * The {@link TypeMeta} that was collected for this {@link App}, keyed by Type name.
     */
    readonly typeInfos?: Map_Type<string, BaseCodeAnalysis.TypeInfo>;
    withTypeInfos(typeInfos: Map_Type<string, BaseCodeAnalysis.TypeInfo> | {[key: string]: IBaseCodeAnalysis.TypeInfo} | null): BaseCodeAnalysis.AppInfo;

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
    static fromJson(json: any): BaseCodeAnalysis.AppInfo | null;

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
    static fromJsonString(json: string): BaseCodeAnalysis.AppInfo | null;

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
    static fromXmlString(xml: string): BaseCodeAnalysis.AppInfo | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): BaseCodeAnalysis.AppInfo | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): BaseCodeAnalysis.AppInfo;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BaseCodeAnalysis.AppInfo;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): BaseCodeAnalysis.AppInfo;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<BaseCodeAnalysis.AppInfo>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<BaseCodeAnalysis.AppInfo>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): BaseCodeAnalysis.AppInfo;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BaseCodeAnalysis.AppInfo;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BaseCodeAnalysis.AppInfo;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): BaseCodeAnalysis.AppInfo;

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
    withField(field: string, value: any, doNotConvert?: boolean): BaseCodeAnalysis.AppInfo;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): BaseCodeAnalysis.AppInfo;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): BaseCodeAnalysis.AppInfo;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BaseCodeAnalysis.AppInfo;

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
    withoutFieldAtPath(path: string): BaseCodeAnalysis.AppInfo;

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
    withoutField(field: string): BaseCodeAnalysis.AppInfo;

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
    withoutField(field: FieldType): BaseCodeAnalysis.AppInfo;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): BaseCodeAnalysis.AppInfo;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): BaseCodeAnalysis.AppInfo;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): BaseCodeAnalysis.AppInfo;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): BaseCodeAnalysis.AppInfo;

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
    defaultField(field: string): BaseCodeAnalysis.AppInfo;

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
    defaultField(field: FieldType): BaseCodeAnalysis.AppInfo;

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
    unsetField(field: string): BaseCodeAnalysis.AppInfo;

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
    unsetField(field: FieldType): BaseCodeAnalysis.AppInfo;

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
    removeField(field: string): BaseCodeAnalysis.AppInfo;

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
    removeField(field: FieldType): BaseCodeAnalysis.AppInfo;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): BaseCodeAnalysis.AppInfo;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): BaseCodeAnalysis.AppInfo;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): BaseCodeAnalysis.AppInfo;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): BaseCodeAnalysis.AppInfo;

    mergeJson(json: any): BaseCodeAnalysis.AppInfo;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): BaseCodeAnalysis.AppInfo;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): BaseCodeAnalysis.AppInfo;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<BaseCodeAnalysis.AppInfo>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<BaseCodeAnalysis.AppInfo> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<BaseCodeAnalysis.AppInfo> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<BaseCodeAnalysis.AppInfo>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<BaseCodeAnalysis.AppInfo> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, BaseCodeAnalysis.AppInfo> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, BaseCodeAnalysis.AppInfo> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<BaseCodeAnalysis.AppInfo>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<BaseCodeAnalysis.AppInfo>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): BaseCodeAnalysis.AppInfo;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): BaseCodeAnalysis.AppInfo;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): BaseCodeAnalysis.AppInfo;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): BaseCodeAnalysis.AppInfo;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): BaseCodeAnalysis.AppInfo;

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
    static make(fields: any, withDefaults?: boolean): BaseCodeAnalysis.AppInfo;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): BaseCodeAnalysis.AppInfo;

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
    afterMake(): BaseCodeAnalysis.AppInfo;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): BaseCodeAnalysis.AppInfo;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<BaseCodeAnalysis.AppInfo> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): BaseCodeAnalysis.AppInfo;

    /**
     * The name of the {@link App#rootPkg} when the information was collected.
     */
    rootPkgName(): string;

    /**
     * @return The {@link App#rootPkgVersion} that the app was deployed with during collection.
     */
    rootPkgVersion(): string;

    /**
     * Function to generate a deterministic [artifact](ArtifactHub.Artifact) ID for a
     * given package and [version](SemanticVersion) to be used when the result of #toFile
     * is stored in a remote repository / hub.
     *
     * @param rootPkgName
     *           The name of the root {@link Pkg} to generate the artifact ID for.
     * @param semanticVersion
     *           The [version](SemanticVersion) of `packageName` to generate the artifact
     *           ID for. The [pre-release components](SemanticVersion#preReleaseVersion)
     *           and [build metadata](SemanticVersion#buildMetadata) are ignored.
     * @return A deterministic artifact ID for the given {@link Pkg} and [version](SemanticVersion).
     */
    static artifactIdFor(rootPkgName: string, semanticVersion: string): string;

    /**
     * Loads a {@link BaseCodeAnalysis.AppInfo} object from a zipped JSON file.
     *
     * @param file
     *           The zipped JSON file to load the {@link BaseCodeAnalysis.AppInfo} from.
     *           This file is usually generated through {@link BaseCodeAnalyzer#collectAppInfoAndZip}.
     * @return The {@link BaseCodeAnalysis.AppInfo} object loaded from the file.
     */
    static fromFile(file?: File): BaseCodeAnalysis.AppInfo | null;

    /**
     * Function to create a `.zip` file from the current **BaseCodeAnalysis.AppInfo** instance.
     * To download this file through the C3 AI static console, use the following snippet:
     *
     * ```javascript
     * function download(file) {
     *   const link = document.createElement('a');
     *   link.download = file.fileName();
     *   link.href = file.apiEndpoint('GET', true);
     *   document.body.appendChild(link);
     *   link.click();
     *   document.body.removeChild(link);
     *   delete link;
     * }
     *
     * const zipFile = BaseCodeAnalyzer.collectAppInfoAndZip(...);
     * download(zipFile);
     * ```
     *
     * @return A temporary `.zip` file containing the compressed **BaseCodeAnalysis.AppInfo**
     *         instance. This file is automatically deleted 2 hours after creation.
     */
    toFile(): File;

    /**
     * Method to determine if a given Type or {@link DeclaredFieldType} is persistable.
     *
     * A Type is persistable if it's [declared an entity Type](TypeMeta#declaredEntity) or
     * it [extends another Type](TypeMeta#declaredExtendsRefType) (Types can be declared without
     * the `entity` keyword but still extend another Type, which makes them persistable).
     *
     * A field is persistable if its parent Type is persistable and **none** of the following
     * are true:
     *
     *   - It's a {@link MethodType} (even {@link LambdaType}s can be persisted).
     *   - It's declared as [not persistable](DeclaredFieldType#notPersistable).
     *   - It's [read calculated](DeclaredFieldType#calcExpr).
     *   - It's [translated by](DeclaredFieldType#translatedBy) another field.
     *   - It's a [constant](DeclaredFieldType#constant).
     *   - Its parent Type is a [compact Type](Ann.Db#compactType) and it's either [name](Persistable#name),
     *     [meta](Persistable#meta), or [versionEdits](Persistable#versionEdits).
     *
     * @param typeInfo
     *           The {@link TypeMeta} to check. If `fieldMeta` is provided, this is its parent Type.
     * @param fieldMeta
     *           If provided, checks if the {@link DeclaredFieldType} is persistable instead
     *           of the parent Type.
     * @return True if the Type or field is persistable, false otherwise.
     */
    isPersistable(typeInfo: BaseCodeAnalysis.TypeInfoBase, fieldMeta?: DeclaredFieldType): boolean;

    /**
     * Helper function to get a list of all {@link DeclaredFieldType}s for a given Type
     * name (_including its mixins_).
     *
     * @param typeName
     *           The name of the Type to get the fields for.
     * @param includeImplicitMixins
     *           There are a number of Types that are implicitly mixed into all Types through
     *           {@link Obj} for all Types and {@link Persistable} for entity Types. Fields
     *           from these implicit mixins are not included by default, but can be included
     *           by setting this parameter to `true`.
     * @return A list of all {@link DeclaredFieldType}s along with their declaring Type
     *         name and package.
     */
    declaredFieldInfos(typeName: string, includeImplicitMixins?: boolean = 'false'): Array_Type<BaseCodeAnalysis.FieldInfo> | null;

    /**
     * Helper function to get a single _fully-resolved_ {@link DeclaredFieldType} along with
     * its declaring Type name and package for a given Type name (_including its mixins_).
     *
     * @param typeName
     *           The name of the Type to get the field for.
     * @param fieldName
     *           The name of the field to retrieve.
     * @return The _fully-resolved_ {@link DeclaredFieldType} along with its declaring Type
     *         name and package, or null if the field doesn't exist.
     */
    fieldInfo(typeName: string, fieldName: string): BaseCodeAnalysis.FieldInfo | null;

    /**
     * Same as #fieldInfo, but returns the _original_ declaration of the field on its base Type.
     *
     * ```type
     * type A {
     *   name: string
     * }
     * ```
     *
     * ```type
     * type B mixes A {
     *   name: !~
     * }
     * ```
     *
     * In this example, `fieldInfo('B', 'name')` would return the field from `B`, while
     * `firstFieldInfo('B', 'name')` would return the field from `A`.
     *
     * @param typeName
     *           The name of the Type to get the field for.
     * @param fieldName
     *           The name of the field to retrieve.
     * @return The original _fully-resolved_ {@link DeclaredFieldType} along with its declaring
     *         Type name and package, or null if the field doesn't exist.
     */
    firstFieldInfo(typeName: string, fieldName: string): BaseCodeAnalysis.FieldInfo | null;

    /**
     * Detect whether a given Type, field, or method was marked as [@deprecated](Ann.Deprecated)
     * and if so, attempt to extract the new name of the Type, field, or method from the
     * [details](Ann.Deprecated#details) field.
     *
     * If no new name is found or multiple new names are found, no rename will be assigned.
     * If the linked Type, field, or method is not present in #typeInfos, no rename will be assigned.
     *
     * @param typeMeta
     *           If this is the only argument provided, the Type itself will be checked. Otherwise,
     *           this acts as the default Type for a renamed `fieldMeta`.
     * @param fieldMeta
     *           If provided, check this specific field or method for deprecation.
     * @return All revision details for the Type, field, or method if it was deprecated, otherwise null.
     *
     * @see BaseCodeAnalysis.VersionDiff#detectExplicitRevisions
     */
    extractRevisionDetails(typeMeta: TypeMeta, fieldMeta?: DeclaredFieldType): BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase.RevisionDetails | null;
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
