// TypeScript definitions for the C3 type Genai.Retriever.Dense.Engine.DeploySpec

/**
 * The Engine Deployment spec for {@link Genai.Retriever.Dense.Engine}.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Retriever.Dense.Engine.DeploySpec
 */
declare namespace Genai.Retriever.Dense.Engine {
  export interface IDeploySpec {

    /**
     * The Genai.Retriever.Dense for which the engine is executing.
     */
    retriever: IGenai.Retriever.Dense;

    /**
     * Name of the Engine
     */
    name: string;

    /**
     * This {@link Engine} will run on all {@link App.Node app-nodes} in a {@link App.NodePool node-pool} with this role.
     * e.g. for {@link Engine Engines} that provide low latency ML Model serving this value can be set to `service`.
     * However as a fallback if there are no node-pools with `service` role additionally #altNodeRoles can be set as e.g.
     * `[ task, leader ]` to ensure that service can be provided with any C3 App deployment
     *
     * @see altNodeRoles
     * @see nodePools
     */
    nodeRole?: string;

    /**
     * Alternative server role(s) where this {@link Engine} can run. Only relevant if App has no active node-pool with
     * #nodeRole. Order in this array is significant and only the first role with an active node pool will be considered.
     *
     * @see nodeRole
     */
    altNodeRoles?: Array_Type<string> | Array<string>;

    /**
     * All app node-pools that run this {@link Engine}. Note that only one of #nodeRole or #nodePools should be set; but
     * neither are required in which case Engine can run any node.
     *
     * @see nodeRole
     */
    nodePools?: Array_Type<string> | Array<string>;

    /**
     * If set to `true` then this {@link Engine} should be deployed to dedicated {@App.Node.ThreadPool}.
     * Otherwise engine actions would be executed in regular threads.
     *
     * @see App.Node.ThreadPool
     * @see Engine#onEngineThreadStart
     * @see Engine#onEngineThreadStop
     * @see Engine#targetThreadPool
     */
    dedicatedThreadPool?: boolean;

    /**
     * If set to `true` then this {@link Engine} will auto start on every node of every target node-pool.
     */
    autoStart?: boolean;

    /**
     * If `true` then the {@link Engine} is inactive and can not be started.
     *
     * @see Engine#activate
     * @see Engine#deactivate
     */
    inactive?: boolean;

    /**
     * If `true` action dispatched to {@link Engine#isHealthy unhealthy} instance of the {@link Engine} will fail
     * with an error.
     *
     * This is useful in cases where the user wants to fail quickly and retry the action rather than waiting for the {@link Engine} to become healthy.
     *
     * @see Engine#state
     * @see Engine#isHealthy
     * @see Engine.State#UNHEALTHY
     */
    failActionIfEngineNotReady?: boolean;

    /**
     * Maximum time to wait for an {@link Engine} to initialize after it has been started.
     *
     * For example if {@link Engine} loading model for 5 minutes, it's recommended to set this value to 5 minutes to
     * avoid dispatching to {@link App.Node} that started less than 5 minutes ago.
     */
    initializingNodeAvoidanceDuration?: string;

    /**
     * {@link Spec} describing how to configure dedicated {@link App.Node.ThreadPool}.
     * Only applicable if {@link #dedicatedThreadPool} is `true`.
     *
     * @see App.Node.ThreadPool
     * @see Engine.Deployment#dedicatedThreadPool
     */
    threadPool?: IApp.Node.ThreadPool.Spec;
  }
}

/**
 * The Engine Deployment spec for {@link Genai.Retriever.Dense.Engine}.
 *
 * @remarks this represents a made instance of Genai.Retriever.Dense.Engine.DeploySpec
 */
declare namespace Genai.Retriever.Dense.Engine {
  export class DeploySpec extends Obj  {

    /**
     * The Genai.Retriever.Dense for which the engine is executing.
     */
    readonly retriever: Genai.Retriever.Dense;
    withRetriever(retriever: IGenai.Retriever.Dense): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Name of the Engine
     */
    readonly name: string;
    withName(name: string): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * This {@link Engine} will run on all {@link App.Node app-nodes} in a {@link App.NodePool node-pool} with this role.
     * e.g. for {@link Engine Engines} that provide low latency ML Model serving this value can be set to `service`.
     * However as a fallback if there are no node-pools with `service` role additionally #altNodeRoles can be set as e.g.
     * `[ task, leader ]` to ensure that service can be provided with any C3 App deployment
     *
     * @see altNodeRoles
     * @see nodePools
     */
    readonly nodeRole?: string;
    withNodeRole(nodeRole: string | null): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Alternative server role(s) where this {@link Engine} can run. Only relevant if App has no active node-pool with
     * #nodeRole. Order in this array is significant and only the first role with an active node pool will be considered.
     *
     * @see nodeRole
     */
    readonly altNodeRoles?: Array_Type<string>;
    withAltNodeRoles(altNodeRoles: Array_Type<string> | Array<string> | null): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * All app node-pools that run this {@link Engine}. Note that only one of #nodeRole or #nodePools should be set; but
     * neither are required in which case Engine can run any node.
     *
     * @see nodeRole
     */
    readonly nodePools?: Array_Type<string>;
    withNodePools(nodePools: Array_Type<string> | Array<string> | null): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * If set to `true` then this {@link Engine} should be deployed to dedicated {@App.Node.ThreadPool}.
     * Otherwise engine actions would be executed in regular threads.
     *
     * @see App.Node.ThreadPool
     * @see Engine#onEngineThreadStart
     * @see Engine#onEngineThreadStop
     * @see Engine#targetThreadPool
     */
    readonly dedicatedThreadPool?: boolean;
    withDedicatedThreadPool(dedicatedThreadPool: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * If set to `true` then this {@link Engine} will auto start on every node of every target node-pool.
     */
    readonly autoStart?: boolean;
    withAutoStart(autoStart: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * If `true` then the {@link Engine} is inactive and can not be started.
     *
     * @see Engine#activate
     * @see Engine#deactivate
     */
    readonly inactive?: boolean;
    withInactive(inactive: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * If `true` action dispatched to {@link Engine#isHealthy unhealthy} instance of the {@link Engine} will fail
     * with an error.
     *
     * This is useful in cases where the user wants to fail quickly and retry the action rather than waiting for the {@link Engine} to become healthy.
     *
     * @see Engine#state
     * @see Engine#isHealthy
     * @see Engine.State#UNHEALTHY
     */
    readonly failActionIfEngineNotReady?: boolean;
    withFailActionIfEngineNotReady(failActionIfEngineNotReady: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Maximum time to wait for an {@link Engine} to initialize after it has been started.
     *
     * For example if {@link Engine} loading model for 5 minutes, it's recommended to set this value to 5 minutes to
     * avoid dispatching to {@link App.Node} that started less than 5 minutes ago.
     */
    readonly initializingNodeAvoidanceDuration?: string;
    withInitializingNodeAvoidanceDuration(initializingNodeAvoidanceDuration: string | null): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * {@link Spec} describing how to configure dedicated {@link App.Node.ThreadPool}.
     * Only applicable if {@link #dedicatedThreadPool} is `true`.
     *
     * @see App.Node.ThreadPool
     * @see Engine.Deployment#dedicatedThreadPool
     */
    readonly threadPool?: App.Node.ThreadPool.Spec;
    withThreadPool(threadPool: IApp.Node.ThreadPool.Spec | null): Genai.Retriever.Dense.Engine.DeploySpec;

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
    static fromJson(json: any): Genai.Retriever.Dense.Engine.DeploySpec | null;

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
    static fromJsonString(json: string): Genai.Retriever.Dense.Engine.DeploySpec | null;

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
    static fromXmlString(xml: string): Genai.Retriever.Dense.Engine.DeploySpec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Retriever.Dense.Engine.DeploySpec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Retriever.Dense.Engine.DeploySpec>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Retriever.Dense.Engine.DeploySpec>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withoutFieldAtPath(path: string): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withoutField(field: string): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withoutField(field: FieldType): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Retriever.Dense.Engine.DeploySpec;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Retriever.Dense.Engine.DeploySpec;

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
    defaultField(field: string): Genai.Retriever.Dense.Engine.DeploySpec;

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
    defaultField(field: FieldType): Genai.Retriever.Dense.Engine.DeploySpec;

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
    unsetField(field: string): Genai.Retriever.Dense.Engine.DeploySpec;

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
    unsetField(field: FieldType): Genai.Retriever.Dense.Engine.DeploySpec;

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
    removeField(field: string): Genai.Retriever.Dense.Engine.DeploySpec;

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
    removeField(field: FieldType): Genai.Retriever.Dense.Engine.DeploySpec;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Retriever.Dense.Engine.DeploySpec;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Retriever.Dense.Engine.DeploySpec;

    mergeJson(json: any): Genai.Retriever.Dense.Engine.DeploySpec;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Retriever.Dense.Engine.DeploySpec>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Retriever.Dense.Engine.DeploySpec> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Retriever.Dense.Engine.DeploySpec> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Retriever.Dense.Engine.DeploySpec>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Retriever.Dense.Engine.DeploySpec> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Retriever.Dense.Engine.DeploySpec> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Retriever.Dense.Engine.DeploySpec> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Retriever.Dense.Engine.DeploySpec>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Retriever.Dense.Engine.DeploySpec>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    static make(fields: any, withDefaults?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Retriever.Dense.Engine.DeploySpec;

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
    afterMake(): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Retriever.Dense.Engine.DeploySpec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Retriever.Dense.Engine.DeploySpec> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Retriever.Dense.Engine.DeploySpec;

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
     * Return all node pools configurable via {@link nodeRole}, {@link altNodeRoles} and {@link nodePools}.
     *
     * Throws error if any of {@link nodeRole}, {@link altNodeRoles} or {@link nodePools} was set, but no node pool was
     * found.
     *
     * @param alwaysConstruct
     *           If set to `true` method returns all {@link App.NodePool NodePools} where this {@link Engine} can be
     *           executed. Otherwise empty array can be returned in case if the {@link Engine} can run on any {@link App.NodePool NodePool}.
     * @return list of {@link App.NodePool NodePools} in which this {@link Engine} can run. Returns empty list if the
     *           {@link Engine} can run on any {@link App.NodePool NodePool} and `alwaysConstruct` is set to `false`.
     */
    listNodePools(alwaysConstruct?: boolean): Array_Type<App.NodePool> | null;
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
