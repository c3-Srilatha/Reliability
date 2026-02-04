// TypeScript definitions for the C3 type Pkg.Path

/**
 * Pkg path attributes extracted from Pkg.Path URL.
 * Typical Pkg.Path url will have structure like `scheme://pkgName/[overlay]/category/subpath`
 *
 * @see Pkg.Url
 *
 * @remarks this represents a value passed to a method that expects an instance of Pkg.Path
 */
declare namespace Pkg {
  export interface IPath {

    /**
     * Glob pattern to determine if a file is a test file.
     */
    TEST_FILE_PATTERN?: string | null;

    /**
     * Pkg URL for this path.
     *
     * @see Pkg.Url
     */
    url: string;

    /**
     * scheme of this pkg path url.
     */
    scheme?: string | null;

    /**
     * The name of package Pkg file belongs to.
     */
    package?: string | null;

    /**
     * Category for Pkg file.
     */
    category?: string | null;

    /**
     * URL encoded sub path of the Pkg file excluding repository, package and category information. This path is
     * always relative.
     * ```
     *    test%20types/TestType.c3typ
     *    other/OtherType.c3typ
     * ```
     */
    encodedSubPath?: string | null;

    /**
     * overlay of the path, if the path is part of one. There can only be one overlay.
     */
    overlay?: string | null;

    /**
     * returns the dependency package name in the path, if this has `dep` overlay.
     * ```
     *   /pkgA/dep/pkgB/src/TestType.c3typ -> pkgB
     *   /pkgA/src/TestA.c3typ -> null
     * ```
     */
    depPkgName?: string | null;

    /**
     * If the overlay is DEP, and the dependency package has it's own overlay, it is the dependency package's overlay.
     * This can't be another Overlay.Dep.
     * ```
     *   fromString('/pkgA/dep/pkgB/test/src/TestType.c3typ').depPkgOverlay() -> test
     *   fromString('/pkgA/dep/pkgB/gen/cache/TypeMetaDeps%23dts/TestType.c3typ.d.ts').depPkgOverlay() -> gen
     * ```
     */
    depPkgOverlay?: string | null;

    /**
     * Local cache of the #safeTargetType method call.
     */
    targetType?: string | null;
  }
}

/**
 * Pkg path attributes extracted from Pkg.Path URL.
 * Typical Pkg.Path url will have structure like `scheme://pkgName/[overlay]/category/subpath`
 *
 * @see Pkg.Url
 *
 * @remarks this represents a made instance of Pkg.Path
 */
declare namespace Pkg {
  export class Path extends Obj {

    /**
     * Glob pattern to determine if a file is a test file.
     */
    readonly TEST_FILE_PATTERN?: string | null;
    withTEST_FILE_PATTERN(TEST_FILE_PATTERN: string | null): Pkg.Path;

    /**
     * Pkg URL for this path.
     *
     * @see Pkg.Url
     */
    readonly url: string;
    withUrl(url: string): Pkg.Path;

    /**
     * scheme of this pkg path url.
     */
    readonly scheme?: string | null;
    withScheme(scheme: string | null): Pkg.Path;

    /**
     * The name of package Pkg file belongs to.
     */
    readonly package?: string | null;
    withPackage(package_: string | null): Pkg.Path;

    /**
     * Category for Pkg file.
     */
    readonly category?: string | null;
    withCategory(category: string | null): Pkg.Path;

    /**
     * URL encoded sub path of the Pkg file excluding repository, package and category information. This path is
     * always relative.
     * ```
     *    test%20types/TestType.c3typ
     *    other/OtherType.c3typ
     * ```
     */
    readonly encodedSubPath?: string | null;
    withEncodedSubPath(encodedSubPath: string | null): Pkg.Path;

    /**
     * overlay of the path, if the path is part of one. There can only be one overlay.
     */
    readonly overlay?: string | null;
    withOverlay(overlay: string | null): Pkg.Path;

    /**
     * returns the dependency package name in the path, if this has `dep` overlay.
     * ```
     *   /pkgA/dep/pkgB/src/TestType.c3typ -> pkgB
     *   /pkgA/src/TestA.c3typ -> null
     * ```
     */
    readonly depPkgName?: string | null;
    withDepPkgName(depPkgName: string | null): Pkg.Path;

    /**
     * If the overlay is DEP, and the dependency package has it's own overlay, it is the dependency package's overlay.
     * This can't be another Overlay.Dep.
     * ```
     *   fromString('/pkgA/dep/pkgB/test/src/TestType.c3typ').depPkgOverlay() -> test
     *   fromString('/pkgA/dep/pkgB/gen/cache/TypeMetaDeps%23dts/TestType.c3typ.d.ts').depPkgOverlay() -> gen
     * ```
     */
    readonly depPkgOverlay?: string | null;
    withDepPkgOverlay(depPkgOverlay: string | null): Pkg.Path;

    /**
     * Local cache of the #safeTargetType method call.
     */
    readonly targetType?: string | null;
    withTargetType(targetType: string | null): Pkg.Path;

    /**
     * @return a string representation of Pkg.Path; same as #encodedFullPath.
     */
    toString(): string;

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
    static fromString(s: string | null): Pkg.Path | null;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): Pkg.Path | null;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Pkg.Path;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Pkg.Path;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Pkg.Path;

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
    static make(fields: any, withDefaults?: boolean): Pkg.Path;

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
    static fromJson(json: any | null): Pkg.Path | null;

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
    static fromJsonString(json: string | null): Pkg.Path | null;

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
    static fromXmlString(xml: string | null): Pkg.Path | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Pkg.Path | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Pkg.Path;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Pkg.Path;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Pkg.Path;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Pkg.Path | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Pkg.Path | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Pkg.Path;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Pkg.Path;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Pkg.Path;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Pkg.Path;

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
    withField(field: string, value: any, doNotConvert?: boolean): Pkg.Path;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Pkg.Path;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Pkg.Path;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Pkg.Path;

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
    withoutFieldAtPath(path: string): Pkg.Path;

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
    withoutField(field: string | null): Pkg.Path;

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
    withoutField(field: FieldType | null): Pkg.Path;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Pkg.Path;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Pkg.Path;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Pkg.Path;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Pkg.Path;

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
    defaultField(field: string): Pkg.Path;

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
    defaultField(field: FieldType): Pkg.Path;

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
    unsetField(field: string): Pkg.Path;

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
    unsetField(field: FieldType): Pkg.Path;

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
    removeField(field: string): Pkg.Path;

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
    removeField(field: FieldType): Pkg.Path;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Pkg.Path;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Pkg.Path;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Pkg.Path;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Pkg.Path;

    mergeJson(json: any | null): Pkg.Path;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Pkg.Path;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Pkg.Path;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Pkg.Path | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Pkg.Path | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Pkg.Path | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Pkg.Path | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Pkg.Path | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Pkg.Path | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Pkg.Path | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Pkg.Path | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Pkg.Path | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Pkg.Path;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Pkg.Path;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Pkg.Path;

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
    afterMake(): Pkg.Path;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Pkg.Path;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Pkg.Path>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Pkg.Path;

    /**
     * True if this is a test file i.e. overlay or depOverlay  is test. 'test' overlay should contain only things used
     * for testing that package.
     * ```
     *   fromString('/pkgA/dep/pkgB/test/src/SrcType.c3typ').isTest() -> true
     *   fromString('/pkgA/test/src/TestType.c3typ').isTest() -> true
     * ```
     */
    get isTest(): boolean;

    /**
     * True if this is a generated file i.e. overlay or depOverlay  is gen. . It will be created when running code-gen.
     */
    get isGen(): boolean;

    /**
     * True, if this is a dependency package path.
     * ` /pkgA/dep/pkgB/src/TestType.c3typ ->  true`
     */
    get isDep(): boolean;

    /**
     * @return true if this is a source file.
     */
    isSrc(): boolean;

    /**
     * @return true if this is a SEED data file.
     */
    isSeed(): boolean;

    /**
     * @return true if this is a c3Pkg.
     */
    isPackage(): boolean;

    /**
     * @return true if this is a c3pkg.lock
     */
    isPackageLock(): boolean;

    /**
     * @return true if this is a Pkg.Category.OTHER.
     */
    isOther(): boolean;

    /**
     * @return true if this is a {@link Pkg.Category#CACHE}
     */
    isCache(): boolean;

    /**
     * @return true if this is a Pkg.Category.UI
     */
    isUi(): boolean;

    /**
     * @return true if this is a Pkg.Category.UI and conforms to application/kind/filename.ext.
     */
    isUiMeta(): boolean;

    /**
     * @return true if this is a Pkg.Category.DATA
     */
    isData(): boolean;

    /**
     * @return Ui Application id, for a Ui file.
     */
    uiApplicationId(): string | null;

    /**
     * @return kind of Ui Pkg file.
     */
    uiMetaKind(): string | null;

    /**
     * @return sub path of this file under the package including file name. Sub path is always relative.
     * ```
     *    test types/TestType.c3typ
     *    other/OtherType.c3typ
     * ```
     */
    subPath(): string;

    /**
     * @return URL encoded file name including the extension.
     */
    encodedFileName(): string;

    /**
     * @return file name of this file.
     */
    fileName(): string;

    /**
     * @return file extension of this file, including the leading dot (e.g., ".c3typ", ".json").
     */
    fileExt(): string | null;

    /**
     * @return file extension of this file without the leading dot (e.g., "c3typ", "json"), or null if no extension.
     */
    fileExtWithoutDot(): string | null;

    /**
     * @return fine name of this file without file extension.
     */
    fileNameNoExt(): string;

    /**
     * @return encoded full path of this file. It includes package but doesn't include scheme. Full path always starts
     * with '/'.
     * ```
     *    /foundation/src/test%20types/TestType.c3typ
     *    /foundation/test/src/other/OtherType.c3typ
     * ```
     */
    encodedFullPath(): string;

    /**
     * @return full path of this file. It includes package but doesn't include scheme. This path always starts with '/'.
     * ```
     *    /foundation/src/test types/TestType.c3typ
     *    /foundation/test/src/other/OtherType.c3typ
     * ```
     */
    fullPath(): string;

    /**
     * @return full directory path of this file. This is like #fullPath, but without the file name.
     * ```
     *    /foundation/src/test types/
     *    /foundation/test/src/other/
     * ```
     */
    fullDir(): string;

    /**
     * URL encoded sub path of the pkg path along with category. This path is
     * always relative.
     * ```
     *    src/test%20types/TestType.c3typ
     *    test/src/other/OtherType.c3typ
     * ```
     */
    encodedSubPathWithCategory(): string;

    /**
     * sub path of the pkg path along with category. This path is
     * always relative. It is not encoded.
     *
     * ```
     *    src/test types/TestType.c3typ
     *    test/src/other/OtherType.c3typ
     * ```
     */
    subPathWithCategory(): string;

    /**
     * return encoded dependency pkg path, if this is a dep overlay, i.e.isDep true.
     */
    encodedDepPath(): string | null;

    /**
     * return dependency pkg path, if this is a dep overlay, i.e.isDep true.
     */
    depPath(): string | null;

    /**
     * return true, if this is a path/file representing Pkg.Issue. Read content to get issues.
     */
    isIssue(): boolean;

    /**
     * @return pkg path parsed from pkg URL or encoded full path
     */
    static fromUrlOrEncodedPath(urlOrEncodedPath: string): Pkg.Path;

    /**
     * @return pkg path constructed from package name, category, and subpath
     */
    static fromSubPath(pkg: string, category: string, subPath: string | null, overlay?: string | null): Pkg.Path;

    /**
     * @return pkg path constructed from Pkg instance, category, and subpath
     */
    static fromSubPath(pkg: Pkg, category: string, subPath: string | null, overlay?: string | null): Pkg.Path;

    static fromUrlOrPath(urlOrPath: string): Pkg.Path;

    /**
     * @return Pkg URL for this path
     */
    safeUrl(): string;

    /**
     * If this Pkg path is for a C3 type (e.g, JavaScript code, JSON content, type DSL etc) then name of that type.
     */
    safeTargetType(): string | null;

    /**
     * If this Pkg path is for a C3 type (e.g, JavaScript code, type DSL etc) then type of the part.
     */
    safeTargetTypePart(): string | null;

    /**
     * return true, if this Pkg path is valid. not Pkg.Category.OTHER and excludeTest if not asked tobe included.
     */
    isValid(includeTest?: boolean): boolean;

    /**
     * return true, if the file or  parent folder in the path is hidden.
     */
    isHidden(): boolean;

    /**
     * return test {@link Action.Requirement} for a given Pkg path.
     */
    testRequirement(): string | null;

    /**
     * @return serializer / deserializer for file extension of this URL or `null` if none available
     */
    serDeser(): SerDeser | null;

    /**
     * @return the prototype name for this path. If the Pkg path does not have a type, we will attempt to read to content
     *  to see if it has a 'type' field. If it does, we will return the serType associated with that type. Else, we will
     *  return null
     */
    serTypeName(failIfMissing?: boolean): string | null;
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
