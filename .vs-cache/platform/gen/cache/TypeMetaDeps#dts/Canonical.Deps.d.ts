// TypeScript definitions for the C3 type Canonical.Deps

/**
 * Validates a Canonical type and also produces any necessary generated artifacts like identity transform in case of
 * entity Canonicals.
 *
 * @remarks this represents a value passed to a method that expects an instance of Canonical.Deps
 */
declare namespace Canonical {
  export interface IDeps {

    /**
     * Name of the type
     */
    name?: string | null;

    /**
     * Name of the inner type if this is a specialized dependencies type
     */
    INNER_TYPE_NAME?: string | null;

    /**
     * All / deep mixins of this type
     */
    mixins?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * All annotations of this type; note it includes annotations of elements like fields, methods, constants or
     * inner types
     */
    annotations?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * All types referred to by this type in its fields or methods
     */
    refs?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * All types that calc fields explicitly defined in this type depend on
     */
    calcFields?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Will have entry for `PeriodicCalcState` type if type has any calc field that specifies a fixed period
     */
    periodicCalcs?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Will have entry for `PeriodicCalcState` type if type has any calc field that specifies a fixed schedule
     */
    scheduledCalcs?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * All types referenced by fkey fields defined in this type
     */
    fkeys?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Types that have this HierarchyDenorm type as a target
     */
    hierDenorms?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Will have entry for `EtlCoordinator` type if type specifies an `@db(secondaryDatastore)`
     */
    secondaryDs?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Will have entry for `Db.Domain` type if type specifies an `@db(domain)`
     */
    domainDs?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Will have entry for `Datastore` type if type specifies an `@db(datastore)` and it isn't "sql" or "kv"
     */
    nonDefaultDs?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Will have entry for `SqlSourceSystem` type if type mixes `External`
     */
    externalDs?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * All declared references to non-type metadata instances in the type. Stored as map from Type name to all keys of the
     * dependent metadata for that type [as {@link Metadata} is a {@link WithKey}] e.g. {ImplLanguage.Runtime: ["py-data-science"]}.
     * Skip for backward deps computation because it does not refer to Type -> Type deps but Type -> Metadata fwd
     * deps, and thus, Metadata -> Type bwd deps. Therefore, it does not make sense to ask for the `metadata` bwd
     * deps of a Type - we would instead use this field to find the bwd deps of a metadata instance, which would be
     * a collection of types.
     */
    metadata?: C3.Map<string | null, C3.Set<string | null>> | {[key: string | null]: C3.Set<string | null> | Array<string | null>};

    /**
     * The name of the package this type meta is declared in
     */
    pkgName?: string | null;

    /**
     * A Map of the the fkey references to the type of the valuetype of the reference relation
     */
    referenceTypeRelations?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

    /**
     * map of runtime to whether source code is valid or not.
     */
    validRuntimeSources?: C3.Map<string, boolean> | {[key: string]: boolean};

    /**
     * any MetadataIssues generated while building dependencies.
     */
    issues?: C3.Array<Pkg.Issue | null> | Array<IPkg.Issue | null>;

    /**
     * Java interface class name from C3 Server jar that can be used to represent instances of this C3 type. These are
     * typically core platform types as well as select `duck type`s specifically designed to minimize need for Java code
     * generation and compilation as part of C3 Application Package
     *
     * If this type is more complex and existing Java class can not be used to represent it's instances then #javaImpl
     * and #javaSubtypeImpl will contain generated java source code for type instance and subtype respectively
     */
    javaIfaceClassName?: string | null;

    /**
     * Generated java source for instance class for this C3 type
     *
     * @see javaImplClassName
     */
    javaImpl?: string | null;

    /**
     * Generated java source for subtype class for this C3 type
     *
     * @see javaImplClassName
     */
    javaSubtypeImpl?: string | null;

    /**
     * Generated d.ts API source for this type
     */
    dts?: string | null;

    /**
     * Generated pyi API source for this type
     */
    pyi?: string | null;

    /**
     * Documentation comment content with all formatting removed.
     */
    docText?: string | null;

    /**
     * Generated JSON schema for this type
     */
    jsonSchema?: any | null;

    json?: any | null;

    /**
     * All outer Types of this type, if this type is inner type.
     */
    outerTypes?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Subset of T=(Type, TypeMeta) if this type holds a direct reference to any elements in T and this type is a
     * Metadata, Config, or Cached. Used for evicting instances of this type e.g. SourceCollection#source
     */
    referencesTypesys?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * All types that this type declared is dependent on
     */
    cacheDependencies?: C3.Set<string | null> | Array<string | null>;

    prototypeMixins?: C3.Set<Type | null> | Array<IType | null>;

    typeAnnotations?: C3.Set<Type | null> | Array<IType | null>;

    /**
     * Generated TypeScript declaration API source for consumption by ui bundler code, in particular
     * {@link UiSdlMetadataLoader#produceTsDeclNpmModule}.
     */
    bundlerTsDecl?: string | null;
  }
}

/**
 * Validates a Canonical type and also produces any necessary generated artifacts like identity transform in case of
 * entity Canonicals.
 *
 * @remarks this represents a made instance of Canonical.Deps
 */
declare namespace Canonical {
  export class Deps extends Obj {

    /**
     * Name of the type
     */
    readonly name?: string | null;
    withName(name: string | null): Canonical.Deps;

    /**
     * Name of the inner type if this is a specialized dependencies type
     */
    readonly INNER_TYPE_NAME?: string | null;
    withINNER_TYPE_NAME(INNER_TYPE_NAME: string | null): Canonical.Deps;

    /**
     * All / deep mixins of this type
     */
    readonly mixins?: C3.Set<Type | null>;
    withMixins(mixins: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * All annotations of this type; note it includes annotations of elements like fields, methods, constants or
     * inner types
     */
    readonly annotations?: C3.Set<Type | null>;
    withAnnotations(annotations: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * All types referred to by this type in its fields or methods
     */
    readonly refs?: C3.Set<Type | null>;
    withRefs(refs: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * All types that calc fields explicitly defined in this type depend on
     */
    readonly calcFields?: C3.Set<Type | null>;
    withCalcFields(calcFields: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Will have entry for `PeriodicCalcState` type if type has any calc field that specifies a fixed period
     */
    readonly periodicCalcs?: C3.Set<Type | null>;
    withPeriodicCalcs(periodicCalcs: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Will have entry for `PeriodicCalcState` type if type has any calc field that specifies a fixed schedule
     */
    readonly scheduledCalcs?: C3.Set<Type | null>;
    withScheduledCalcs(scheduledCalcs: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * All types referenced by fkey fields defined in this type
     */
    readonly fkeys?: C3.Set<Type | null>;
    withFkeys(fkeys: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Types that have this HierarchyDenorm type as a target
     */
    readonly hierDenorms?: C3.Set<Type | null>;
    withHierDenorms(hierDenorms: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Will have entry for `EtlCoordinator` type if type specifies an `@db(secondaryDatastore)`
     */
    readonly secondaryDs?: C3.Set<Type | null>;
    withSecondaryDs(secondaryDs: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Will have entry for `Db.Domain` type if type specifies an `@db(domain)`
     */
    readonly domainDs?: C3.Set<Type | null>;
    withDomainDs(domainDs: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Will have entry for `Datastore` type if type specifies an `@db(datastore)` and it isn't "sql" or "kv"
     */
    readonly nonDefaultDs?: C3.Set<Type | null>;
    withNonDefaultDs(nonDefaultDs: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Will have entry for `SqlSourceSystem` type if type mixes `External`
     */
    readonly externalDs?: C3.Set<Type | null>;
    withExternalDs(externalDs: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * All declared references to non-type metadata instances in the type. Stored as map from Type name to all keys of the
     * dependent metadata for that type [as {@link Metadata} is a {@link WithKey}] e.g. {ImplLanguage.Runtime: ["py-data-science"]}.
     * Skip for backward deps computation because it does not refer to Type -> Type deps but Type -> Metadata fwd
     * deps, and thus, Metadata -> Type bwd deps. Therefore, it does not make sense to ask for the `metadata` bwd
     * deps of a Type - we would instead use this field to find the bwd deps of a metadata instance, which would be
     * a collection of types.
     */
    readonly metadata?: C3.Map<string | null, C3.Set<string | null>>;
    withMetadata(metadata: C3.Map<string | null, C3.Set<string | null>> | {[key: string | null]: C3.Set<string | null> | Array<string | null>}): Canonical.Deps;

    /**
     * The name of the package this type meta is declared in
     */
    readonly pkgName?: string | null;
    withPkgName(pkgName: string | null): Canonical.Deps;

    /**
     * A Map of the the fkey references to the type of the valuetype of the reference relation
     */
    readonly referenceTypeRelations?: C3.Map<string | null, string | null>;
    withReferenceTypeRelations(referenceTypeRelations: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): Canonical.Deps;

    /**
     * map of runtime to whether source code is valid or not.
     */
    readonly validRuntimeSources?: C3.Map<string, boolean>;
    withValidRuntimeSources(validRuntimeSources: C3.Map<string, boolean> | {[key: string]: boolean}): Canonical.Deps;

    /**
     * any MetadataIssues generated while building dependencies.
     */
    readonly issues?: C3.Array<Pkg.Issue | null>;
    withIssues(issues: C3.Array<Pkg.Issue | null> | Array<IPkg.Issue | null>): Canonical.Deps;

    /**
     * Java interface class name from C3 Server jar that can be used to represent instances of this C3 type. These are
     * typically core platform types as well as select `duck type`s specifically designed to minimize need for Java code
     * generation and compilation as part of C3 Application Package
     *
     * If this type is more complex and existing Java class can not be used to represent it's instances then #javaImpl
     * and #javaSubtypeImpl will contain generated java source code for type instance and subtype respectively
     */
    readonly javaIfaceClassName?: string | null;
    withJavaIfaceClassName(javaIfaceClassName: string | null): Canonical.Deps;

    /**
     * Generated java source for instance class for this C3 type
     *
     * @see javaImplClassName
     */
    readonly javaImpl?: string | null;
    withJavaImpl(javaImpl: string | null): Canonical.Deps;

    /**
     * Generated java source for subtype class for this C3 type
     *
     * @see javaImplClassName
     */
    readonly javaSubtypeImpl?: string | null;
    withJavaSubtypeImpl(javaSubtypeImpl: string | null): Canonical.Deps;

    /**
     * Generated d.ts API source for this type
     */
    readonly dts?: string | null;
    withDts(dts: string | null): Canonical.Deps;

    /**
     * Generated pyi API source for this type
     */
    readonly pyi?: string | null;
    withPyi(pyi: string | null): Canonical.Deps;

    /**
     * Documentation comment content with all formatting removed.
     */
    readonly docText?: string | null;
    withDocText(docText: string | null): Canonical.Deps;

    /**
     * Generated JSON schema for this type
     */
    readonly jsonSchema?: any | null;
    withJsonSchema(jsonSchema: any | null): Canonical.Deps;

    readonly json?: any | null;
    withJson(json: any | null): Canonical.Deps;

    /**
     * All outer Types of this type, if this type is inner type.
     */
    readonly outerTypes?: C3.Set<Type | null>;
    withOuterTypes(outerTypes: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Subset of T=(Type, TypeMeta) if this type holds a direct reference to any elements in T and this type is a
     * Metadata, Config, or Cached. Used for evicting instances of this type e.g. SourceCollection#source
     */
    readonly referencesTypesys?: C3.Set<Type | null>;
    withReferencesTypesys(referencesTypesys: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * All types that this type declared is dependent on
     */
    readonly cacheDependencies?: C3.Set<string | null>;
    withCacheDependencies(cacheDependencies: C3.Set<string | null> | Array<string | null>): Canonical.Deps;

    readonly prototypeMixins?: C3.Set<Type | null>;
    withPrototypeMixins(prototypeMixins: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    readonly typeAnnotations?: C3.Set<Type | null>;
    withTypeAnnotations(typeAnnotations: C3.Set<Type | null> | Array<IType | null>): Canonical.Deps;

    /**
     * Generated TypeScript declaration API source for consumption by ui bundler code, in particular
     * {@link UiSdlMetadataLoader#produceTsDeclNpmModule}.
     */
    readonly bundlerTsDecl?: string | null;
    withBundlerTsDecl(bundlerTsDecl: string | null): Canonical.Deps;

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
    static fromJson(json: any | null): Canonical.Deps | null;

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
    static fromJsonString(json: string | null): Canonical.Deps | null;

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
    static fromXmlString(xml: string | null): Canonical.Deps | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Canonical.Deps | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Canonical.Deps;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Canonical.Deps;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Canonical.Deps;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Canonical.Deps | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Canonical.Deps | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Canonical.Deps;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Canonical.Deps;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Canonical.Deps;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Canonical.Deps;

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
    withField(field: string, value: any, doNotConvert?: boolean): Canonical.Deps;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Canonical.Deps;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Canonical.Deps;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Canonical.Deps;

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
    withoutFieldAtPath(path: string): Canonical.Deps;

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
    withoutField(field: string | null): Canonical.Deps;

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
    withoutField(field: FieldType | null): Canonical.Deps;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Canonical.Deps;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Canonical.Deps;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Canonical.Deps;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Canonical.Deps;

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
    defaultField(field: string): Canonical.Deps;

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
    defaultField(field: FieldType): Canonical.Deps;

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
    unsetField(field: string): Canonical.Deps;

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
    unsetField(field: FieldType): Canonical.Deps;

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
    removeField(field: string): Canonical.Deps;

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
    removeField(field: FieldType): Canonical.Deps;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Canonical.Deps;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Canonical.Deps;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Canonical.Deps;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Canonical.Deps;

    mergeJson(json: any | null): Canonical.Deps;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Canonical.Deps;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Canonical.Deps;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Canonical.Deps | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Canonical.Deps | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Canonical.Deps | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Canonical.Deps | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Canonical.Deps | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Canonical.Deps | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Canonical.Deps | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Canonical.Deps | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Canonical.Deps | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Canonical.Deps;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Canonical.Deps;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Canonical.Deps;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Canonical.Deps;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Canonical.Deps;

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
    static make(fields: any, withDefaults?: boolean): Canonical.Deps;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Canonical.Deps;

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
    afterMake(): Canonical.Deps;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Canonical.Deps;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Canonical.Deps>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Canonical.Deps;

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
     * Parent type for this dependency
     */
    get parentTypeMeta(): TypeMeta;

    /**
     * Invokes lambda for every (deep) dependency type
     */
    eachTypeMeta(action: λConsumer<TypeMeta>): void;

    /**
     * Invokes lambda for every (deep) dependency type and accumulates the result of invocations
     */
    foldTypeMeta(initial: T | null, folder: λBiFunction<TypeMeta, T | null, T | null>): T | null;

    /**
     * Retrieves cached backwards depending types for a given dependency element
     *
     * @see TypeMeta#dependencies
     */
    static backwardDeps(name: string, key: string): C3.Set<string | null>;

    /**
     * Retrieves cached single dependency for a given type and dependency element
     *
     * @see TypeMeta#dependencies
     */
    static dependency(typeName: string, name: string): any;

    /**
     * @return Dependency with given name for all types accessible from this package, with type name being the key.
     */
    static allDeps(name: string): C3.Map<string | null, any>;

    /**
     * All type dependencies
     */
    static all(): C3.Array<TypeMetaDeps | null>;

    /**
     * File extensions for valid TypeMetaDeps cached files.
     */
    static exts(): C3.Set<string | null>;

    /**
     * Construct from a C3 type.
     *
     * @see TypeMeta#dependencies
     */
    static fromTypeMeta(type: TypeMeta): TypeMetaDeps;

    /**
     * For internal use only.  Exposing here to avoid duplicating code in fetch.
     */
    static isUniqueFkeyPath(fp?: FieldPath | null): boolean;

    /**
     * Optional override to compute specific dependency for a given C3 type
     */
    static compute(): Canonical.Deps | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
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
