// TypeScript definitions for the C3 type ArtifactHub.Artifact.Pkg

/**
 * A subtype of {@link ArtifactHub.Artifact} used to describe {@link Pkg} artifacts registered in {@link ArtifactHub}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ArtifactHub.Artifact.Pkg
 */
declare namespace ArtifactHub.Artifact {
  export interface IPkg {

    /**
     * <name>:<version>
     */
    id: string;

    /**
     * The name of this instance.
     */
    name?: string | null;

    /**
     * The {@link SemanticVersion} of this instance.
     */
    semanticVersion?: string | null;

    /**
     * A string sortable version of {@link #semanticVersion}.
     * See {@link SemanticVersion#toSortableString}.
     */
    sortableSemanticVersion?: string | null;

    /**
     * The dependencies specified by the developer in the .c3pkg.json.
     * Ex:
     * ```
     * {
     *   "dep1": "8.1",
     *   "dep2": "5.1",
     * }
     * ```
     */
    dependencies?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

    /**
     * The version back to which this dependency is compatible.
     * For example, if {@link #semanticVersion} is 2.0.0, and {@link #backwardsCompatibleTo} is 1.0.0,
     * if {@link DependencyResolutionSpec#includeBackwardsCompatible} is true,
     * and the requested range is anywhere inside of >=1.0.0 <=2.0.0, we will include this as a candidate
     * during resolution.
     */
    backwardsCompatibleTo?: string | null;

    /**
     * A string sortable version of {@link #backwardsCompatibleTo}.
     * See {@link SemanticVersion#toSortableString}.
     */
    sortableBackwardsCompatibleTo?: string | null;

    /**
     * A deployable set of metadata which can be used to define the {@link Pkg} of an {@link App}.
     */
    content?: IArtifactHub.Artifact.Content | null;

    /**
     * Optional descriptor used to categorize the artifact.
     * Examples include, but are not limited to, {@link ArtifactHub.ArtifactKind}.
     */
    kind?: string | null;

    /**
     * The date at which the artifact expires.
     */
    expiresAt?: DateTime | Date | string | null;

    /**
     * Whether to keep the artifact forever.
     */
    keepForever?: boolean;

    /**
     * The flattened list of dependencies calculated during artifact registration. The {@link #dependencies} are
     * are flattened to improve the performance of dependency resolution.
     * When resolving dependencies, {@link #flattenDependencies} can be used to reduce the number of iterations required
     * when recursively finding all of the required dependencies.
     * Ex:
     * ```
     * {
     *   "dep1": ">=8.1.0 <8.2.0",
     *   "dep2": ">=5.1.0 <5.2.0",
     *   "nestedDep": ">=4.4.0 <4.5.0",
     * }
     * ```
     */
    flattenedDependencies?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

    /**
     * The exact resolved set of dependency versions included in {@link #content} if any.
     * Ex:
     * ```
     * {
     *   "dep1": "8.1.2-1",
     *   "dep2": "5.1.4-1",
     *   "nestedDep": "4.4.3-1",
     * }
     * ```
     */
    resolvedDependencies?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

    /**
     * The parent artifact of this artifact.
     */
    parent?: IArtifactHub.Artifact | null;

    /**
     * All of the artifacts that are children of this artifact.
     */
    children?: C3.Array<ArtifactHub.Artifact | null> | Array<IArtifactHub.Artifact | null>;

    /**
     * Miscellaneous data associated with the artifact that may need to be tracked, but not queried on.
     */
    data?: string | null;

    /**
     * Indicates whether the artifact is currently in use.
     */
    active?: boolean;

    /**
     * If set to true, the artifact's {@link #content} can be used by anybody,
     * even if the client is not entitled to it.
     */
    isPublic?: boolean;

    /**
     * Content containing only the root package source code. Does not contain
     * any generated files, only what is committed to the package's source code.
     */
    rootSourceContent?: IArtifactHub.Artifact.Content | null;
  }
}

/**
 * A subtype of {@link ArtifactHub.Artifact} used to describe {@link Pkg} artifacts registered in {@link ArtifactHub}.
 *
 * @remarks this represents a made instance of ArtifactHub.Artifact.Pkg
 */
declare namespace ArtifactHub.Artifact {
  export class Pkg extends Obj {

    /**
     * <name>:<version>
     */
    readonly id: string;
    withId(id: string): ArtifactHub.Artifact.Pkg;

    /**
     * The name of this instance.
     */
    readonly name?: string | null;
    withName(name: string | null): ArtifactHub.Artifact.Pkg;

    /**
     * The {@link SemanticVersion} of this instance.
     */
    readonly semanticVersion?: string | null;
    withSemanticVersion(semanticVersion: string | null): ArtifactHub.Artifact.Pkg;

    /**
     * A string sortable version of {@link #semanticVersion}.
     * See {@link SemanticVersion#toSortableString}.
     */
    readonly sortableSemanticVersion?: string | null;
    withSortableSemanticVersion(sortableSemanticVersion: string | null): ArtifactHub.Artifact.Pkg;

    /**
     * The dependencies specified by the developer in the .c3pkg.json.
     * Ex:
     * ```
     * {
     *   "dep1": "8.1",
     *   "dep2": "5.1",
     * }
     * ```
     */
    readonly dependencies?: C3.Map<string | null, string | null>;
    withDependencies(dependencies: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): ArtifactHub.Artifact.Pkg;

    /**
     * The version back to which this dependency is compatible.
     * For example, if {@link #semanticVersion} is 2.0.0, and {@link #backwardsCompatibleTo} is 1.0.0,
     * if {@link DependencyResolutionSpec#includeBackwardsCompatible} is true,
     * and the requested range is anywhere inside of >=1.0.0 <=2.0.0, we will include this as a candidate
     * during resolution.
     */
    readonly backwardsCompatibleTo?: string | null;
    withBackwardsCompatibleTo(backwardsCompatibleTo: string | null): ArtifactHub.Artifact.Pkg;

    /**
     * A string sortable version of {@link #backwardsCompatibleTo}.
     * See {@link SemanticVersion#toSortableString}.
     */
    readonly sortableBackwardsCompatibleTo?: string | null;
    withSortableBackwardsCompatibleTo(sortableBackwardsCompatibleTo: string | null): ArtifactHub.Artifact.Pkg;

    /**
     * A deployable set of metadata which can be used to define the {@link Pkg} of an {@link App}.
     */
    readonly content?: ArtifactHub.Artifact.Content | null;
    withContent(content: IArtifactHub.Artifact.Content | null): ArtifactHub.Artifact.Pkg;

    /**
     * Optional descriptor used to categorize the artifact.
     * Examples include, but are not limited to, {@link ArtifactHub.ArtifactKind}.
     */
    readonly kind?: string | null;
    withKind(kind: string | null): ArtifactHub.Artifact.Pkg;

    /**
     * The date at which the artifact expires.
     */
    readonly expiresAt?: DateTime | null;
    withExpiresAt(expiresAt: DateTime | Date | string | null): ArtifactHub.Artifact.Pkg;

    /**
     * Whether to keep the artifact forever.
     */
    readonly keepForever?: boolean;
    withKeepForever(keepForever: boolean): ArtifactHub.Artifact.Pkg;

    /**
     * The flattened list of dependencies calculated during artifact registration. The {@link #dependencies} are
     * are flattened to improve the performance of dependency resolution.
     * When resolving dependencies, {@link #flattenDependencies} can be used to reduce the number of iterations required
     * when recursively finding all of the required dependencies.
     * Ex:
     * ```
     * {
     *   "dep1": ">=8.1.0 <8.2.0",
     *   "dep2": ">=5.1.0 <5.2.0",
     *   "nestedDep": ">=4.4.0 <4.5.0",
     * }
     * ```
     */
    readonly flattenedDependencies?: C3.Map<string | null, string | null>;
    withFlattenedDependencies(flattenedDependencies: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): ArtifactHub.Artifact.Pkg;

    /**
     * The exact resolved set of dependency versions included in {@link #content} if any.
     * Ex:
     * ```
     * {
     *   "dep1": "8.1.2-1",
     *   "dep2": "5.1.4-1",
     *   "nestedDep": "4.4.3-1",
     * }
     * ```
     */
    readonly resolvedDependencies?: C3.Map<string | null, string | null>;
    withResolvedDependencies(resolvedDependencies: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): ArtifactHub.Artifact.Pkg;

    /**
     * The parent artifact of this artifact.
     */
    readonly parent?: ArtifactHub.Artifact | null;
    withParent(parent: IArtifactHub.Artifact | null): ArtifactHub.Artifact.Pkg;

    /**
     * All of the artifacts that are children of this artifact.
     */
    readonly children?: C3.Array<ArtifactHub.Artifact | null>;
    withChildren(children: C3.Array<ArtifactHub.Artifact | null> | Array<IArtifactHub.Artifact | null>): ArtifactHub.Artifact.Pkg;

    /**
     * Miscellaneous data associated with the artifact that may need to be tracked, but not queried on.
     */
    readonly data?: string | null;
    withData(data: string | null): ArtifactHub.Artifact.Pkg;

    /**
     * Indicates whether the artifact is currently in use.
     */
    readonly active?: boolean;
    withActive(active: boolean): ArtifactHub.Artifact.Pkg;

    /**
     * If set to true, the artifact's {@link #content} can be used by anybody,
     * even if the client is not entitled to it.
     */
    readonly isPublic?: boolean;
    withIsPublic(isPublic: boolean): ArtifactHub.Artifact.Pkg;

    /**
     * Content containing only the root package source code. Does not contain
     * any generated files, only what is committed to the package's source code.
     */
    readonly rootSourceContent?: ArtifactHub.Artifact.Content | null;
    withRootSourceContent(rootSourceContent: IArtifactHub.Artifact.Content | null): ArtifactHub.Artifact.Pkg;

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
    static fromString(s: string | null): ArtifactHub.Artifact.Pkg | null;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): ArtifactHub.Artifact.Pkg | null;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): ArtifactHub.Artifact.Pkg;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ArtifactHub.Artifact.Pkg;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): ArtifactHub.Artifact.Pkg;

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
    static make(fields: any, withDefaults?: boolean): ArtifactHub.Artifact.Pkg;

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
    static fromJson(json: any | null): ArtifactHub.Artifact.Pkg | null;

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
    static fromJsonString(json: string | null): ArtifactHub.Artifact.Pkg | null;

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
    static fromXmlString(xml: string | null): ArtifactHub.Artifact.Pkg | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): ArtifactHub.Artifact.Pkg | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ArtifactHub.Artifact.Pkg;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ArtifactHub.Artifact.Pkg;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ArtifactHub.Artifact.Pkg;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ArtifactHub.Artifact.Pkg | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ArtifactHub.Artifact.Pkg | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ArtifactHub.Artifact.Pkg;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ArtifactHub.Artifact.Pkg;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ArtifactHub.Artifact.Pkg;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ArtifactHub.Artifact.Pkg;

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
    withField(field: string, value: any, doNotConvert?: boolean): ArtifactHub.Artifact.Pkg;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ArtifactHub.Artifact.Pkg;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ArtifactHub.Artifact.Pkg;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ArtifactHub.Artifact.Pkg;

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
    withoutFieldAtPath(path: string): ArtifactHub.Artifact.Pkg;

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
    withoutField(field: string | null): ArtifactHub.Artifact.Pkg;

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
    withoutField(field: FieldType | null): ArtifactHub.Artifact.Pkg;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): ArtifactHub.Artifact.Pkg;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ArtifactHub.Artifact.Pkg;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ArtifactHub.Artifact.Pkg;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ArtifactHub.Artifact.Pkg;

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
    defaultField(field: string): ArtifactHub.Artifact.Pkg;

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
    defaultField(field: FieldType): ArtifactHub.Artifact.Pkg;

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
    unsetField(field: string): ArtifactHub.Artifact.Pkg;

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
    unsetField(field: FieldType): ArtifactHub.Artifact.Pkg;

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
    removeField(field: string): ArtifactHub.Artifact.Pkg;

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
    removeField(field: FieldType): ArtifactHub.Artifact.Pkg;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ArtifactHub.Artifact.Pkg;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): ArtifactHub.Artifact.Pkg;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ArtifactHub.Artifact.Pkg;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ArtifactHub.Artifact.Pkg;

    mergeJson(json: any | null): ArtifactHub.Artifact.Pkg;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ArtifactHub.Artifact.Pkg;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): ArtifactHub.Artifact.Pkg;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<ArtifactHub.Artifact.Pkg | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<ArtifactHub.Artifact.Pkg | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ArtifactHub.Artifact.Pkg | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<ArtifactHub.Artifact.Pkg | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ArtifactHub.Artifact.Pkg | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, ArtifactHub.Artifact.Pkg | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ArtifactHub.Artifact.Pkg | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ArtifactHub.Artifact.Pkg | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ArtifactHub.Artifact.Pkg | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): ArtifactHub.Artifact.Pkg;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): ArtifactHub.Artifact.Pkg;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): ArtifactHub.Artifact.Pkg;

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
    afterMake(): ArtifactHub.Artifact.Pkg;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ArtifactHub.Artifact.Pkg;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<ArtifactHub.Artifact.Pkg>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): ArtifactHub.Artifact.Pkg;

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
     * @return single instance of this Identified type by id.
     */
    static forId(id: string | null, failIfMissing?: boolean): ArtifactHub.Artifact.Pkg | null;

    /**
     * A lambda for sorting WithSemanticVersion objects with latest version first
     */
    static comparator(): λBiFunction<ArtifactHub.Artifact.Pkg, ArtifactHub.Artifact.Pkg, number>;

    /**
     * A helper function used to fetch available versions of dependencies for the dependencies specified in the given spec.
     */
    static availableVersions(spec?: SemanticVersionRangeFilterSpec | null): C3.Array<ArtifactHub.Artifact.Pkg | null>;

    /**
     * A function which can be used to calculate the maximum possible set of valid dependencies.
     *
     * Ex:
     * ```
     * WithResolvableDependencies.create({
     *   "name": "dep",
     *   "ver": "8.1.1",
     *   "dependencies": {
     *     "netedDep1": "5.4"
     *   }
     * });
     *
     * WithResolvableDependencies.create({
     *   "name": "netedDep1",
     *   "ver": "5.4.2",
     *   "dependencies": {
     *     "netedDep2": "9.6"
     *   }
     * });
     *
     * WithResolvableDependencies.create({
     *   "name": "netedDep2",
     *   "ver": "9.6.400",
     *   "dependencies": {}
     * });
     *
     * WithResolvableDependencies.flattenDependencies({
     *   "dependencies": {
     *      "dep": "8.1"
     *   }
     * }) == {
     *   "dep": ">=8.1.0 <8.2.0",
     *   "nestedDep1": ">=5.4.0 <5.5.0",
     *   "nestedDep2": ">=9.6.0 <9.7.0",
     * }
     * ```
     */
    static flattenDependencies(spec?: DependencyResolutionSpec | null): C3.Map<string | null, string | null>;

    /**
     * A function which can resolve a set of dependency ranges down to exact versions for the given spec.
     *
     * Ex:
     * ```
     * WithResolvableDependencies.create({
     *   "name": "dep",
     *   "ver": "8.1.1",
     *   "dependencies": {
     *     "netedDep1": "5.4"
     *   }
     * });
     *
     * WithResolvableDependencies.create({
     *   "name": "netedDep1",
     *   "ver": "5.4.2",
     *   "dependencies": {
     *     "netedDep2": "9.6"
     *   }
     * });
     *
     * WithResolvableDependencies.create({
     *   "name": "netedDep2",
     *   "ver": "9.6.400",
     *   "dependencies": {}
     * });
     *
     * WithResolvableDependencies.resolveDependencies({
     *   "dependencies": {
     *      "dep": "8.1"
     *   }
     * }) == [
     *   { "type": "mixing WithResolvableDependencies", "name": "dep", "ver": "8.1.1"},
     *   { "type": "mixing WithResolvableDependencies", "name": "nestedDep1", "ver": "5.4.2"},
     *   { "type": "mixing WithResolvableDependencies", "name": "nestedDep2", "ver": "9.6.400"}
     * ]
     * ```
     */
    static resolveDependencies(spec?: DependencyResolutionSpec | null): C3.Array<ArtifactHub.Artifact.Pkg | null>;

    /**
     * Wrapps {@link #resolveDependencies} in a try/catch and returns structured resolution information
     * back to the user.
     *
     * Backwards compatibility is not guaranteed for this api and its return structure.
     */
    static resolveDependenciesDebugFrames(spec?: DependencyResolutionSpec | null): any | null;

    /**
     * Gets a value from {@link #data}.
     */
    dataMap(): C3.Map<string | null, string | null>;

    /**
     * Registers the artifact in {@link ArtifactHub}.
     *
     * @return The registered artifact, with a full {@link #id}, {@link #semanticVersion} and {@link #content}.
     */
    register(): ArtifactHub.Artifact | null;

    /**
     * Registers a batch of artifacts in {@link ArtifactHub}.
     *
     * @return The registered artifacts, with full {@link #id}, {@link #semanticVersion} and {@link #content} fields.
     */
    static registerBatch(artifacts?: C3.Array<ArtifactHub.Artifact | null>): C3.Array<ArtifactHub.Artifact | null>;

    static rootSourceContentId(artifact: ArtifactHub.Artifact): string;

    static rootSourceContentSemanticVersion(artifact: ArtifactHub.Artifact): string;
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
