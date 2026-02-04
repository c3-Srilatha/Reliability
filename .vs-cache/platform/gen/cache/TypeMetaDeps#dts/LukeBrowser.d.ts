// TypeScript definitions for the C3 type LukeBrowser

/**
 * {@link LukeCore} implemented by Browser Engine
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeBrowser
 */
declare interface ILukeBrowser {

  /**
   * The default timeout for each chain of {@link LukeAsyncQueueNode}s
   */
  timeout?: number | null;

  /**
   * The flag to be switched on when the LukeCore instance should be aborted
   */
  abortFlag?: boolean;

  /**
   * The reason why the abort flag is set
   */
  abortReason?: string | null;

  /**
   * Threshold for number of failed Jasmine blocks before test abort
   */
  failureThreshold?: number | null;

  /**
   * Used to count number of failed Jasmine specs LukeCore instance has processed
   */
  failCount?: number | null;

  /**
   * Stores the type of jasmine block in current LukeCore lifecycle
   */
  currentJasmineBlock?: string | null;

  /**
   * Indicates that only the Luke chain plan should be emitted when run() is called for a given Luke node
   */
  planOnly?: boolean;

  /**
   * The spec for the Jasmine environment
   */
  jasmineEnvSpec?: ILukeJasmineEnvSpec | null;

  /**
   * Indicates if the LukeCore instance is paused
   */
  paused?: boolean;

  /**
   * The placeholder Promise used in a paused LukeCore instance
   */
  toResolve?: any;

  /**
   * Stores the async queue nodes to be run in the future
   */
  asyncQueue?: C3.Array<LukeAsyncQueueNode | null> | Array<ILukeAsyncQueueNode | null>;

  /**
   * The current active node
   */
  activeNode?: ILukeAsyncQueueNode | null;

  /**
   * A map storing values for {@link LukeDynamicValue}s
   */
  dynamicValues?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * A map storing alternative selector info
   */
  altSelectors?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * Whether to skip the remaining chains in the queue
   */
  skipQueueFlag?: boolean;

  /**
   * The {@link BrowserEngine} that drives the automation.
   */
  browserEngine?: IBrowserEngine | null;

  /**
   * Stores the deployed spies
   */
  spies?: C3.Array<LukeSpy | null> | Array<ILukeSpy | null>;
}

/**
 * {@link LukeCore} implemented by Browser Engine
 *
 * @remarks this represents a made instance of LukeBrowser
 */
declare class LukeBrowser extends Obj {

  /**
   * The default timeout for each chain of {@link LukeAsyncQueueNode}s
   */
  timeout?: number | null;
  withTimeout(timeout: number | null): LukeBrowser;

  /**
   * The flag to be switched on when the LukeCore instance should be aborted
   */
  abortFlag?: boolean;
  withAbortFlag(abortFlag: boolean): LukeBrowser;

  /**
   * The reason why the abort flag is set
   */
  abortReason?: string | null;
  withAbortReason(abortReason: string | null): LukeBrowser;

  /**
   * Threshold for number of failed Jasmine blocks before test abort
   */
  failureThreshold?: number | null;
  withFailureThreshold(failureThreshold: number | null): LukeBrowser;

  /**
   * Used to count number of failed Jasmine specs LukeCore instance has processed
   */
  failCount?: number | null;
  withFailCount(failCount: number | null): LukeBrowser;

  /**
   * Stores the type of jasmine block in current LukeCore lifecycle
   */
  currentJasmineBlock?: string | null;
  withCurrentJasmineBlock(currentJasmineBlock: string | null): LukeBrowser;

  /**
   * Indicates that only the Luke chain plan should be emitted when run() is called for a given Luke node
   */
  planOnly?: boolean;
  withPlanOnly(planOnly: boolean): LukeBrowser;

  /**
   * The spec for the Jasmine environment
   */
  jasmineEnvSpec?: LukeJasmineEnvSpec | null;
  withJasmineEnvSpec(jasmineEnvSpec: ILukeJasmineEnvSpec | null): LukeBrowser;

  /**
   * Indicates if the LukeCore instance is paused
   */
  paused?: boolean;
  withPaused(paused: boolean): LukeBrowser;

  /**
   * The placeholder Promise used in a paused LukeCore instance
   */
  toResolve?: any;
  withToResolve(toResolve: any): LukeBrowser;

  /**
   * Stores the async queue nodes to be run in the future
   */
  asyncQueue?: C3.Array<LukeAsyncQueueNode | null>;
  withAsyncQueue(asyncQueue: C3.Array<LukeAsyncQueueNode | null> | Array<ILukeAsyncQueueNode | null>): LukeBrowser;

  /**
   * The current active node
   */
  activeNode?: LukeAsyncQueueNode | null;
  withActiveNode(activeNode: ILukeAsyncQueueNode | null): LukeBrowser;

  /**
   * A map storing values for {@link LukeDynamicValue}s
   */
  dynamicValues?: C3.Map<string | null, any>;
  withDynamicValues(dynamicValues: C3.Map<string | null, any> | {[key: string | null]: any}): LukeBrowser;

  /**
   * A map storing alternative selector info
   */
  altSelectors?: C3.Map<string | null, any>;
  withAltSelectors(altSelectors: C3.Map<string | null, any> | {[key: string | null]: any}): LukeBrowser;

  /**
   * Whether to skip the remaining chains in the queue
   */
  skipQueueFlag?: boolean;
  withSkipQueueFlag(skipQueueFlag: boolean): LukeBrowser;

  /**
   * The {@link BrowserEngine} that drives the automation.
   */
  browserEngine?: BrowserEngine | null;
  withBrowserEngine(browserEngine: IBrowserEngine | null): LukeBrowser;

  /**
   * Stores the deployed spies
   */
  spies?: C3.Array<LukeSpy | null>;
  withSpies(spies: C3.Array<LukeSpy | null> | Array<ILukeSpy | null>): LukeBrowser;

  /**
   * Construct an instance with initial state.
   */
  static make(): LukeBrowser;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeBrowser;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeBrowser;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeBrowser;

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
  static make(fields: any, withDefaults?: boolean): LukeBrowser;

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
  static fromJson(json: any | null): LukeBrowser | null;

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
  static fromJsonString(json: string | null): LukeBrowser | null;

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
  static fromXmlString(xml: string | null): LukeBrowser | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeBrowser | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeBrowser;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeBrowser;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeBrowser;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeBrowser | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeBrowser | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeBrowser;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeBrowser;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeBrowser;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeBrowser;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeBrowser;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeBrowser;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeBrowser;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeBrowser;

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
  withoutFieldAtPath(path: string): LukeBrowser;

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
  withoutField(field: string | null): LukeBrowser;

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
  withoutField(field: FieldType | null): LukeBrowser;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeBrowser;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeBrowser;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeBrowser;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeBrowser;

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
  defaultField(field: string): LukeBrowser;

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
  defaultField(field: FieldType): LukeBrowser;

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
  unsetField(field: string): LukeBrowser;

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
  unsetField(field: FieldType): LukeBrowser;

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
  removeField(field: string): LukeBrowser;

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
  removeField(field: FieldType): LukeBrowser;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeBrowser;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeBrowser;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeBrowser;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeBrowser;

  mergeJson(json: any | null): LukeBrowser;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeBrowser;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeBrowser;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeBrowser | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeBrowser | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeBrowser | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeBrowser | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeBrowser | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeBrowser | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeBrowser | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeBrowser | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeBrowser | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeBrowser;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeBrowser;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeBrowser;

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
  afterMake(): LukeBrowser;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeBrowser;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeBrowser>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeBrowser;

  /**
   * Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
   * The value must be of the correct type if doNotConvert flag is true.
   *
   * @param name
   *           of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, attempt to convert the value to match the field's type
   * @return this Obj
   */
  setField(field: string, value: any, doNotConvert?: boolean): LukeBrowser;

  /**
   * Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
   * The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, attempt to convert the value to match the field's type
   * @return this Obj
   */
  setField(field: FieldType, value: any, doNotConvert?: boolean): LukeBrowser;

  /**
   * Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
   * field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
   * properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
   * collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
   * key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
   * collection field. This has the same appearance as if the collection field were assigned from a previously
   * unassigned value.
   *
   * Example:
   * ```type
   * type A mixes MutableObj {
   *   onChange: ~
   *   b: [string]
   *   c: map<string, int>
   *   d: D
   * }
   * type D mixes MutableObj {
   *   onChange: ~
   *   e: string
   * }
   * ```
   * ```js
   * var a = A.make({b: ['hello', 'goodbye'], d: {}});
   * a.b[1] = 'World'; // 1
   * a.c['hello'] = 'world'; // 2
   * a.d.e = 'hello' // 3
   * a.b.pop(); // 4
   * ```
   * `A.onChange` should be called four times:
   *   1. when the field `b` changed - the FieldPath will be "b[1]".
   *   2. when the field `c` changed - the FieldPath will be "c.hello".
   *   3. when `d` changed - the FieldPath will be "d.e".
   *   4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
   *
   * `D.onChange` should be called once - the FieldPath will be `e`.
   *
   * Note that if multiple elements of a child collection are changed, you will get multiple field paths.
   *
   * @param changed paths to fields that changed
   *
   * @see #onEdit
   */
  onChange(changed: C3.Array<string | null>): void;

  /**
   * Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
   * contains more information about the values which changed, including their prior values. This allows a full
   * difference to be calculated if desired. Note that maintaining this state is much more costly than simple
   * notification via #onChange and should only be used if truly required.
   *
   * @param edits a list of what changed and the prior values
   *
   * @see #onChange
   */
  onEdit(edits: Obj): void;

  /**
   * Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
   *
   * @param action the lambda to invoke that makes changes without notification
   */
  withoutChangeEvent(action: λConsumer<Mutable | null>): void;

  /**
   * Returns a singleton config instance mixing {@link LukeCoreConfig}
   */
  config(): LukeCoreConfig | null;

  /**
   * Integrates {@link LukeCore#run} into all jasmine blocks such as beforeAll, beforeEach, it and afterEach
   */
  static addLukeRunToJasmine(): void;

  /**
   * This function executes the boilerplate setup
   * that is required for all {@link LukeCore} tests.
   *
   * @param suiteName
   *           The name of the suite
   * @param testFunction
   *           The outermost describe function that initiates the test
   * @param jasmineEnvSpec
   *           An optional configuration to modify the Jasmine environment during the run.
   */
  static runJasmine(suiteName: string, testFunction: λNullConsumer, jasmineEnvSpec?: LukeJasmineEnvSpec | null): void;

  /**
   * Handler interface for life cycle updates of luke async queue.
   * A concrete Luke type (with specific engine) can choose to implement it.
   */
  onStatusUpdate(payload: any): void;

  /**
   * Navigate current session to a new location/url
   *
   * @param location
   *          The location. For example, http://www.c3.ai.
   * @param responseTimeout
   *          The amount of time allowed for the new window to respond.
   * @param windowSpec
   *          The specifications for the window.
   */
  goto(location: string, responseTimeout?: number | null, windowSpec?: LukeWindowSpec | null): LukeAsyncQueueNode | null;

  /**
   * Navigates the browser one step back, equivalent of hitting back arrow in browser
   *
   * @return A {@link LukeAsyncQueueNode} that will resolve when "back" is performed
   */
  back(): LukeAsyncQueueNode | null;

  /**
   * Navigates the browser one step forward, equivalent of hitting forward arrow in browser
   *
   * @return A {@link LukeAsyncQueueNode} that will resolve when "forward" is performed
   */
  forward(): LukeAsyncQueueNode | null;

  /**
   * Runs the async queue, node after node.
   * @param rootNode
   *          If provided, it will run the nested async queue of the given rootNode.
   *          Otherwise it will run the "master" async queue of the Luke instance.
   */
  run(rootNode?: LukeAsyncQueueNode | null): C3.Promise<any> | null;

  /**
   * Clears the async queue
   * @param rootNode
   *          If provided, it will clear the nested async queue of the given rootNode.
   *          Otherwise it will clear the "master" async queue of the Luke instance.
   */
  clearAsyncQueue(rootNode?: LukeAsyncQueueNode | null): void;

  /**
   * Sets the private abortFlag field to true
   */
  abort(): void;

  /**
   * Checks if LukeCore Lifecycle has been aborted.
   * Returns true if the abortFlag is true and jasmine suite is not involved in teardown
   */
  shouldAbort(): boolean;

  /**
   * Verifies if the context is a browser context.
   * Returns true if Luke is running in a browser context.
   */
  isC3BrowserContext(): boolean;

  /**
   * Internally processes one chain of async nodes without wait and retry
   * @param head
   *          The head node of the chain
   * @return A promise that will be resolved when the chain of nodes complete
   */
  processChain(head: LukeAsyncQueueNode): C3.Promise<any> | null;

  /**
   * Internally runs one chain of async nodes with wait and retry
   * @param head
   *          The head node of the chain
   * @param scope
   *          The scope of the async queue
   * @return A promise that will be resolved when the chain of nodes complete
   */
  runChain(head: LukeAsyncQueueNode, scope?: LukeBrowser | null | LukeAsyncQueueNode | null | null): C3.Promise<any> | null;

  /**
   * Skips the remaining chains in the queue of the specified scope
   * @param scope
   *          The scope of the queue
   */
  skipQueue(scope?: LukeBrowser | null | LukeAsyncQueueNode | null | null): void;

  /**
   * Internally transforms args that are {@link LukeDynamicValue}s to their current values
   * before calling the async function on a {@link LukeAsyncQueueNode}
   * @param args
   *          The args to be transformed
   * @return the transformed args
   */
  transformDynamicArgs(args: C3.Array<any>): C3.Array<any>;

  /**
   * Generates an error message with a screenshot and browser logs when {@link #runChain} fails after the last try.
   * @param error
   *          The error obj thrown during the last failed try
   * @return The generated error message
   */
  errorMessage(error?: any): string | null;

  /**
   * Adds a error node that will immediately reject with an error message as the head of a chain to the async queue.
   * It is useful when a pageObject (component helper) determines that an error always needs to be thrown
   * without actually running its asynchronous logic.
   * @param errorMessage
   *          The error message to reject with for the chain
   * @return a {@link LukeAsyncQueueNode} that will be rejected with the error message
   */
  addErrorNode(errorMessage: string): LukeAsyncQueueNode | null;

  /**
   * Adds a chain to the asyncQueue
   * @param head
   *          The head of the chain
   * @param label
   *          The label of the head
   */
  addChain(head: LukeAsyncQueueNode, label?: string | null): void;

  /**
   * Searches for an element by a css selector
   * @param selector
   *          The css selector or xPath selector. Note that if xPath is used, please add a prefix 'xp:', e.g. 'xp: ./button' to differentiate it from a CSS selector.
   * @param resolveOnFound
   *          If true, only resolve the node when a dom element is found
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeWebElement} that will be resolved with the search result
   */
  search(selector: string, resolveOnFound?: boolean, timeout?: number | null): LukeBrowserWebElement | null;

  /**
   * Searches for all elements that matches a css selector
   * @param selector
   *          The css selector or xPath selector. Note that if xPath is used, please add a prefix 'xp:', e.g. 'xp: ./button' to differentiate it from a CSS selector.
   * @param resolveOnFound
   *          If true, only resolve the node when at least a dom element is found
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the search result (an array of {@link SeleniumWebElement})
   */
  searchAll(selector: string, resolveOnFound?: boolean, timeout?: number | null): LukeAsyncQueueCollection<LukeBrowserWebElement | null> | null;

  /**
   * Searches for all elements with a selector and returns the first element that has the given text.
   * @param selector
   *          The css selector
   * @param text
   *          The text to match
   * @param resolveOnFound
   *          If true, only resolve the node when a dom element is found
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeWebElement} that will be resolved with the search result
   */
  searchForElementWithText(selector: string, text: string | null | LukeDynamicValue | null, resolveOnFound?: boolean, timeout?: number | null): LukeBrowserWebElement | null;

  /**
   * Clicks an element by a css selector
   * @param selector
   *          The css selector targeting the dom element
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeWebElement} that will be resolved when the target element is clicked
   */
  click(selector: string, timeout?: number | null): LukeBrowserWebElement | null;

  /**
   * Drags an element at a specified selector to drop over another specified selector
   * @param dragElementSelector
   *           The selector for the element to drag
   * @param dropElementSelector
   *           The selector for the element to drop over
   * @param xOffset
   *           The x offset from the left edge of the target element
   * @param yOffset
   *           The y offset from the top edge of the target element
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when "drag and drop" is done
   */
  dragAndDrop(dragElementSelector: string, dropElementSelector: string, xOffset?: number | null, yOffset?: number | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets value on an element that matches a css selector
   * @param selector
   *          The css selector targeting the dom element
   * @param value
   *          The value to be set
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeWebElement} that will be resolved when the value is set on the target element
   */
  setValue(selector: string, value?: string | null | number | null | boolean | LukeDynamicValue | null | null, timeout?: number | null): LukeBrowserWebElement | null;

  /**
   * Gets value from an element that matches a css selector
   * @param selector
   *          The css selector targeting the dom element
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the value of the target element
   */
  getValue(selector: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Get current url
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the current url
   */
  getUrl(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for file(s) matching the given pattern to exist in the download directory
   * Note that this function depends on a condition that the c3 server has access to
   * the download folder. Such a condition is often hard to satisfy when the c3 server and the browser
   * reside on separate (virtual) machines. For {@link LukeBrowser}, use the preferred APIs
   * {@link LukeBrowser#searchForDownloadedFile} and {@link LukeBrowser#searchForDownloadedFiles}
   * to overcome those restrictions on environment setups.
   *
   * @param  pattern
   *            The pattern of the file path to search for
   * @param resolveOnFound
   *            If true, only resolve if at least one matching file was found
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the files found
   */
  searchFiles(pattern: string, resolveOnFound?: boolean, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Uploads a file to an input that matches a selector
   * @param selector
   *          The CSS selector targeting the dom element
   * @param path
   *          The path to the file to upload
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the file is uploaded
   */
  uploadFile(selector: string, path?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Will add a new chain to the LukeAsyncQueue. Users can leverage this function for composing chains in their test script
   * @param callback
   *          The function that either (1) yields a promise or (2) adds async chains to a nested async queue
   * @param args
   *          The additional arguments to be passed to the promise function in the next node
   * @param nodeType
   *          The type of the async node to be enqueued
   * @param label
   *          The label of the node
   * @param timeout
   *          Timeout in seconds for the chain
   * @return An async node that is enqueued in the LukeAsyncQueue
   */
  enqueue(callback: any, args?: C3.Array<any>, nodeType?: Type | null, label?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Adds a chain to the async queue. The head of the chain will resolve the provided value which can be either
   * a static value or a {@link LukeDynamicValue}
   * @example
   * ```js
   * luke.enqueueValue(LukeDynamicValue.makeValue('sum')).assert('toEqual', 5);
   * ```
   *
   * @param value
   *          The value to be resolved by the head
   * @param nodeType
   *          The type of the async node to be enqueued
   * @param timeout
   *          Timeout in seconds for the chain
   * @return An async node that is enqueued in the LukeAsyncQueue
   */
  enqueueValue(value: any, nodeType?: Type | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Measures the performance of the tail node of a chain generated by a lambda function.
   * It runs the lambda function n times to generate n chains and measures the max, min and average
   * run time (seconds) of the tail node.
   * @param lambda
   *          The lambda function that generates the tail node to be measured. A {@Luke} instance will be
   *          be passed to the lambda function. Bind a scope to your lambda function if you need to access it inside.
   * @param ntimes
   *          The n times.
   * @param metricName
   *          The name we want to give our metric when we persist it as a {@link TestCase}. Defaults to 'defaultMetric'.
   * @return A {@link LukeAsyncQueueNode} that will resolve the performance stats of the tail node.
   *
   * @example
   * ```js
   * // Measures the 'click' node 5 times and resolves the stats
   * luke.nodePerformance(function (client) {
   *   return client.search('button').click();
   * }, 5).then(function (client, result) {
   *   expect(result.max).toBeLessThan(0.01); // expect the max run time to be less than 0.01 seconds
   *   expect(result.avg).toBeLessThan(0.005); // expect the average run time to be less than 0.005 seconds
   * });
   * ```
   */
  nodePerformance(lambda: λNullConsumer, ntimes: number, metricName?: string | null): LukeAsyncQueueNode | null;

  /**
   * Measures the performance of the entire chain generated by a lambda function.
   * It runs the lambda function n times to generate n chains and measures the max, min and average
   * run time (seconds) of the chain.
   *
   * @param lambda
   *          The lambda function of the chain to be measured. A {@link LukeBrowser} instance will be
   *          be passed to the lambda function. Bind a scope to your lambda function if you need to access it inside.
   * @param ntimes
   *          The n times.
   * @param metricName
   *          The name we want to give our metric when we persist it as a {@link TestCaseResult}. Defaults to 'defaultMetric'.
   * @return A {@link LukeAsyncQueueNode} that will resolve the performance stats of the chain.
   *
   * @example
   * ```js
   * // Measures the 'click' node 5 times and resolves the stats
   * luke.chainPerformance(function (client) {
   *   return client.search('button').click();
   * }, 5).then(function (result) {
   *   expect(result.max).toBeLessThan(0.01); // expect the max run time to be less than 0.01 seconds
   *   expect(result.avg).toBeLessThan(0.005); // expect the average run time to be less than 0.005 seconds
   * });
   * ```
   */
  chainPerformance(lambda: λNullConsumer, ntimes: number, metricName?: string | null): LukeAsyncQueueNode | null;

  /**
   * Measures the performance of the provided lambda function.
   *
   * @param lambda
   *           The lambda function to be measured.
   * @param metricName
   *           The name we want to give our metric when we persist it as a {@link TestCaseResult}. Defaults to 'defaultMetric'.
   * @param timeout
   *           Timeout in seconds for the lambda function.
   * @return A {@link LukeAsyncQueueNode} that will resolve the performance of the lambda function.
   */
  lambdaPerformance(lambda: λNullConsumer, metricName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Checks whether a value is a {@link LukeDynamicValue}
   * @param value
   *          The value to check
   * @return Whether the value is a {@link LukeDynamicValue}
   */
  isDynamicValue(value?: any): boolean;

  /**
   * Returns the current value for a {@link LukeDynamicValue}
   * @param name
   *          The {@link LukeDynamicValue} or its name
   * @return the current value
   */
  resolveDynamicValue(name: LukeDynamicValue | null | string | null): any;

  /**
   * Updates the current value for a {@link LukeDynamicValue}
   * @param name
   *          The {@link LukeDynamicValue} or its name
   * @param value
   *          The new value for the {@link LukeDynamicValue}
   */
  updateDynamicValue(name: LukeDynamicValue | null | string | null, value?: any): void;

  /**
   * Runs a function with arguments in the browser
   *
   * @param  funk
   *            The lambda function to execute.
   * @param  args
   *            Lambda arguments, accessible within the function as `arguments[i]`,
   *            where `i` corresponds to the index of the argument
   * @return An async node that is resolved with the result of successfully running the lambda.
   */
  runLambda(funk: λSupplier<any | null>, args?: C3.Array<any>, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Runs an asynchronous function with the passed arguments in the browser.
   * The function is expected to return a promise that will be resolved when the async logic completes.
   *
   * Example:
   * ```js
   * this.client.runAsyncLambda(function (element) {
   *   return new Promise(function (resolve, reject) {
   *     setTimeout(function () {
   *       resolve(window.$(element).html());
   *     }, 2000);
   *   });
   * }, ['span.some-class']).assert('toEqual', 'Some Text');
   * ```
   *
   * @param  funk
   *            The lambda function to execute.
   * @param  args
   *            Lambda arguments, accessible within the function as `arguments[i]`,
   *            where `i` corresponds to the index of the argument
   * @param  timeout
   *            Timeout in seconds for the async lambda execution
   * @return An async node that is resolved with the result of successfully running the lambda.
   */
  runAsyncLambda(funk: λSupplier<any | null>, args?: C3.Array<any>, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Generates an auth token using the given credentials and set it into a cookie named "c3auth".
   *
   * @param username
   *            the username
   * @param password
   *            the user's password
   * @param hostUrl
   *            the root url of the server
   * @param timeout
   *            Timeout in seconds for the async lambda execution
   * @return An async node that is resolved when the authtoken is set
   */
  setAuthToken(username: string, password: string, hostUrl: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the document.title of the current page
   *
   * @param  timeout
   *            Timeout in seconds for the chain
   * @return A {@link LukeAsyncQueueNode} that will be resolved with the dom title
   */
  domTitle(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets a cookie
   * @param cookie
   *           The cookie to be set
   * @param  timeout
   *            Timeout in seconds for the chain
   * @return {@LukeAsyncQueueNode} that will resolve when the cookie is set
   */
  setCookie(cookie: LukeCookie, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Resets all toggleable flags and settings to default values
   */
  resetToDefault(): void;

  /**
   * Sets a debugger when the chain is run, during execution phase
   */
  debug(): LukeAsyncQueueNode | null;

  /**
   * Logs the message passed in to the server logs.
   * @param msg
   *          The message in string form.
   * @param source
   *          The context of where the log call is triggered.
   */
  logToServer(msg: string, source: string): void;

  /**
   * Helper function that is used in {@link #logToServer} to evaluate the log call in the server.
   * Needed because we want to execute the script within the server, but we call {@link logToServer}
   * at available JS runtime.
   * @param msg
   *          The message in string form.
   * @param source
   *          The context of where the log call is triggered.
   */
  wrapServerLog(msg: string, source: string): void;

  /**
   * Maximizes the primary test window size.
   *
   * @return {@LukeAsyncQueueNode} that will resolve when the window is maximized
   */
  maximizeWindow(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Resizes the primary test window size to the provided dimensions
   * @param rect
   *          An {@link LukeWindowRect} object. Note that offset is not available for the chrome browser.
   *
   * @return {@LukeAsyncQueueNode} that will resolve when the window is resized
   */
  resizeWindow(rect?: LukeWindowRect | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Evaluates the primary test window size.
   * @return {@LukeAsyncQueueNode} that will resolve with the window size
   */
  getWindowSize(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets up a LukeBrowser instance.
   *
   * @param timeout
   *          The default timeout in seconds for running each chain of {@LukeAsyncQueueNode}s.
   * @param failureThreshold
   *          The max number of Jasmine assertions that can fail before test aborts for the returned LukeBrowser instance.
   * @return A Luke instance with a {@link BrowserEngine}.
   */
  static init(timeout?: number | null, failureThreshold?: number | null): LukeBrowser;

  /**
   * Connect to the browser via the {@link BrowserEngine}.
   *
   * @param timeout
   *          The default timeout in seconds for running each chain of {@LukeAsyncQueueNode}s.
   * @return A Luke instance with a {@link BrowserEngine}.
   */
  static connect(timeout?: number | null): LukeBrowser;

  /**
   * Adds a spy to {@link #spies} for tracking purposes. Internal use only by {@link Luke}.
   * @param spy
   *          The spy.
   */
  addSpy(spy: LukeSpy): void;

  /**
   * Adds a request mock with a static response for a pair of type and action.
   * @param type
   *          The type name.
   * @param action
   *          The action name.
   * @param response
   *          The response content.
   * @param status
   *          The response status.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the mock is added.
   */
  addRequestMock(type: string, action: string, response?: string | null | any | null | null, status?: number | null, headers?: any | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Adds a request mock with a handler function for a pair of type and action.
   * @param type
   *          The type name.
   * @param action
   *          The action name.
   * @param handler
   *          The handler function where developers can generate a response dynamically according to a request.
   *          The request params and a helper function will be passed to the handler.
   *          The helper function takes the response content, optionally with a status and headers.
   * @param args
   *          The additional arguments to be passed to the handler function.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @example
   * ```js
   * luke.addRequestMockWithHandler('Machine', 'fetch', function (params, respond, targetId) {
   *            var filter = params.spec && params.spec.filter;
   *            // targetId is passed in as an additional argumeent
   *            if (filter && filter.indexOf(targetId) > -1) {
   *              respond({
   *                count: 1,
   *                objs: [
   *                  {
   *                    id: 'special-id',
   *                    status: 'pending',
   *                  },
   *                ],
   *              });
   *            } else {
   *              respond({ message: 'unauthorized' }, 401, { 'X-Frame-Options': 'SAMEORIGIN' })
   *            }
   *          }, ['special-id']);
   * ```
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the mock is added.
   */
  addRequestMockWithHandler(type: string, action: string, handler: any, args?: C3.Array<any>, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Adds a request mock with a static response for the url endpoint.
   * @param url
   *          The url endpoint. It can be a static endpoint ('/some/fake/endpoint/1') or a RegExp wrapped in a string ('\\/some\\/fake\\/endpoint\\/(\\d+)').
   *          Note that the JavaScript RegExp constructor is used to construct the RegExp string.
   * @param response
   *          The response content.
   * @param status
   *          The response status.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the mock is added.
   */
  addRequestMockWithUrl(url: string, response?: string | null | any | null | null, status?: number | null, headers?: any | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Adds a request mock with a handler function for a url.
   * @param url
   *          The url endpoint. It can be a static endpoint ('/some/fake/endpoint/1') or a RegExp wrapped in a string ('\\/some\\/fake\\/endpoint\\/(\\d+)').
   *          Note that the JavaScript RegExp constructor is used to construct the RegExp string.
   * @param handler
   *          The handler function where developers can generate a response dynamically according to a request.
   *          The request params and a helper function will be passed to the handler.
   *          The helper function takes the response content, optionally with a status and headers.
   * @param args
   *          The additional arguments to be passed to the handler function.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @example
   * ```js
   * luke.addRequestMockWithHandler('/some/fake/endpoint', function (params, respond, data) {
   *            data = data.concat(' modified');
   *            respond(data);
   *          }, ['data']);
   * ```
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the mock is added.
   */
  addRequestMockWithUrlAndHandler(url: string, handler: any, args?: C3.Array<any>, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Collects all xhr records for a pair of type and action, and plays them to a jasmine.Spy for making spy assertions, e.g. toHaveBeenCalled.
   * For each xhr record, its params and headers will be played to the spy.
   * @param type
   *          The type name.
   * @param action
   *          The action name.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueSpy} that will be resolved with a jasmine.Spy that has listened to all relevant xhr requests.
   * @example
   * ```js
   * luke.xhrTrackerForAction('MyType', 'myAction').assert('toHaveBeenCalled');
   * luke.xhrTrackerForAction('MyType', 'myAction').assert('toHaveBeenCalledWith', [
   *   { name: 'Test', value: 36 }, // the params
   *   jasmine.objectContaining({   // the headers, if you are only interested in a subset of headers, use jasmine.objectContaining to wrap them
   *      X-Tunnel-tag: 'testTag',
   *   }),
   * ]);
   * ```
   */
  xhrTrackerForAction(type: string, action: string, timeout?: number | null): LukeAsyncQueueSpy | null;

  /**
   * Collects all xhr records for a url endpoint, and plays them to a jasmine.Spy for making spy assertions, e.g. toHaveBeenCalled.
   * For each xhr record, its params and headers will be played to the spy.
   * @param url
   *          The url endpoint. It can be a static endpoint ('/some/fake/endpoint/1') or a RegExp wrapped in a string ('\\/some\\/fake\\/endpoint\\/(\\d+)').
   *          Note that the JavaScript RegExp constructor is used to construct the RegExp string.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueSpy} that will be resolved with a jasmine.Spy that has listened to all relevant xhr requests.
   * @example
   * luke.xhrTrackerForAction('/some/fake/endpoint').assert('toHaveBeenCalled');
   * luke.xhrTrackerForAction('\\/some\\/fake\\/endpoint\\/(\\d+)').assert('toHaveBeenCalledWith', [
   *   { name: 'Test', value: 36 }, // the params
   *   jasmine.objectContaining({   // the headers, if you are only interested in a subset of headers, use jasmine.objectContaining to wrap them
   *      X-Tunnel-tag: 'testTag',
   *   }),
   * ]);
   */
  xhrTrackerForUrl(url: string, timeout?: number | null): LukeAsyncQueueSpy | null;

  /**
   * Collects all xhr records.
   * @param includeResponse
   *          Whether to include response.
   * @param timeout
   *          Timeout in seconds for the chain.
   *
   * @return a {@link LukeAsyncQueueNode} that will be resolved with all xhr records.
   * @example
   * [
   *   {
   *     id: 1587764952251.8535,
   *     url: "/api/1/SDLDemoMachine?action=fetch",
   *     method: "POST",
   *     async: true,
   *     headers: { Accept: "application/json", "Content-type": "application/json" },
   *     mocked: true,
   *     body: '{"spec":{"limit":15,"include":"name, category, location.id, status, metric1, metric2, metric3Change","filter":""}}',
   *     sentAt: 1587764952251,
   *   }
   * ]
   */
  xhrRecords(includeResponse?: boolean, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Collects all C3 actions made through xhr requests.
   * @return a {@link LukeAsyncQueueNode} that will be resolved with all actions with typeName and actionName.
   * @example
   * [
   *   {
   *     typeName: "User",
   *     actionName: "fetch",
   *   },
   * ]
   */
  xhrActions(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * For each action made through an xhr request (collected by {@link #xhrActions}), validate whether it is
   * permitted by a permission source specified by a {@link LukeActionPermissionSpec}.
   * @param spec
   *          Specifies a source that defines action permissions.
   * @return {@link LukeAsyncQueueNode} that will be resolved when the action permissions are validated.
   * @example
   * luke.validateActionPermissions({
   *   pageId: 'MyApp.MyPage' // permissions defined in page metadata
   * });
   *
   * luke.validateActionPermissions({
   *   roleId: 'MyApp.Developer' // permissions defined by the Role of 'MyApp.Developer'
   * });
   *
   * luke.validateActionPermissions({
   *   groupId: 'MyApp.AnalystGroup' // permissions defined by the Group of 'MyApp.AnalystGroup'
   * });
   *
   * luke.validateActionPermissions({
   *   userId: 'MyApp.MyTestUser' // permissions granted to the User of 'MyApp.MyTestUser'
   * });
   */
  validateActionPermissions(spec: LukeActionPermissionSpec): LukeAsyncQueueNode | null;

  /**
   * Spies on a function in the browser runtime. As a side effect, the original function
   * becomes a no-op.
   * @param expression
   *          The expression to access the object holding the target function.
   * @param method
   *          The name of the method.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the spy is set.
   * @example
   * // Swallows all console.log calls and records them
   * luke.spyOn('console', 'log');
   * // ... Some UI logic has triggered console.log
   * luke.spyTracker('console', 'log').assert('toHaveBeenCalled');
   */
  spyOn(expression: string, method: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Spies on a function in the browser runtime. The original function will be replaced by a fake function.
   * @param expression
   *          The expression to access the object holding the target function.
   * @param method
   *          The name of the method.
   * @param fakeFunction
   *          The fake function to replace the original function.
   * @param partialArgs
   *          Partially applied arguments, followed by "real" arguments passed to the original function will
   *          be passed to the fake function.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the spy is set.
   * @example
   * // Escalates console.log to console.warn and adds a prefix generated by a function to each message.
   * var prefix = generatePrefix();
   * luke.spyOnAndCallFake('console', 'log', function (prefix, message) {
   *   console.warn(prefix + ': ' + message);
   * }, [prefix]);
   * // ... Some UI logic has triggered console.log('UI is loaded');
   * // Note that the partial args are excluded from each spy call, only the "real" args passed to the original function
   * // will be recorded.
   * luke.spyTracker('console', 'log').assert('toHaveBeenCalledWith', ['UI is loaded']);
   */
  spyOnAndCallFake(expression: string, method: string, fakeFunction: any, partialArgs?: C3.Array<any>, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Spies on a function in the browser runtime and keeps original function functionality.
   * @param expression
   *          The expression to access the object holding the target function.
   * @param method
   *          The name of the method.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the spy is set.
   * @example
   * // Swallows all console.log calls and records them
   * luke.spyOnAndCallThrough('console', 'log');
   * // ... Some UI logic has triggered console.log
   * // Note that there will be no change to the console.log behavior, unlike with {@link #spyOn}
   * luke.spyTracker('console', 'log').assert('toHaveBeenCalled');
   */
  spyOnAndCallThrough(expression: string, method: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Spies on a function in the browser runtime and return the specified value when the function is called.
   * @param expression
   *          The expression to access the object holding the target function.
   * @param method
   *          The name of the method.
   * @param returnObj
   *          The object to return when the function is called.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the spy is set.
   * @example
   * // Swallows all console.log calls and records them
   * luke.spyOnAndReturn('console', 'log', 'Hi');
   * // ... Some UI logic has triggered console.log and 'Hi' will be returned
   */
  spyOnAndReturn(expression: string, method: string, returnObj?: any, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Removes the spy from a function.
   * @param expression
   *          The expression to access the object holding the target function.
   * @param method
   *          The name of the method.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the spy is removed.
   * @example
   * luke.removeSpy('console', 'log');
   */
  removeSpy(expression: string, method: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Removes all deployed spies tracked by {@link #spies}.
   * @param timeout
   *          Timeout in seconds for each chain of removing a spy.
   */
  removeSpies(timeout?: number | null): void;

  /**
   * Collects all calls to a function that has been spied on and plays them to a jasmine.Spy for making spy assertions, e.g. toHaveBeenCalled and toHaveBeenCalledWith.
   * @param expression
   *          The expression to access the object holding the target function.
   * @param method
   *          The name of the method.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueSpy} that will resolve a jasmine.Spy that has listened to all calls to the target function.
   * @example
   * luke.spyTracker('console', 'log').assert('toHaveBeenCalled');
   * luke.spyTracker('console', 'log').assert('toHaveBeenCalledTimes', [3]);
   * luke.spyTracker('console', 'log').assert('toHaveBeenCalledWith', ['UI is loaded!']);
   */
  spyTracker(expression: string, method: string, timeout?: number | null): LukeAsyncQueueSpy | null;

  /**
   * Clears all existing request mocks.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when all mocks are cleared.
   */
  clearRequestMocks(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets a cookie.
   * @param cookie
   *           The cookie to get.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved with the cookie.
   */
  getCookie(cookie: LukeGetOrRemoveCookieSpec, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Removes a cookie.
   * @param cookie
   *           The cookie to be removed.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the cookie is removed.
   */
  removeCookie(cookie: LukeGetOrRemoveCookieSpec, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the accessibility score for the current page. The score is largely based on
   * how Lighthouse scores accessibility, and ranges from 0-100. To view the score, either
   * append the {@link LukeAsyncQueueNode#inspectResult} node or {@link LukeAsyncQueueNode#assert} node.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return A {@link LukeAsyncQueueNode} that will be resolved with the score.
   * @example
   *          luke.goto("https://www.google.com/");
   *          luke.accessibilityScore().inspectResult();
   *          luke.accessibilityScore().assert('toBeGreaterThan', 80);
   */
  accessibilityScore(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Turns results from AxeResults object into a HTML report through {@link #generateAccessibilityReport}.
   * Opens up a new tab with the report's HTML content if not in light-mode (light mode removes all the UI components
   * and is turned on by adding 'mode=light' in the url param).
   * The path of the downloaded report can be found on {@link LukeCoreConfig}.
   * @param threshold
   *          The threshold for a passing accessibility score.
   * @return A {@link LukeAsyncQueueNode} that will be resolved with the report.
   */
  reportAccessibility(threshold?: number | null): LukeAsyncQueueNode | null;

  /**
   * Downloads and opens the html report generated from the AxeResults object in
   * {@link #reportAccessibility}. Runs through the nodejs ImplLanguage.Runtime. If a threshold is provided,
   * the score color will be determined by whether or not it is greater than the threshold (green if the
   * score is greater, red otherwise). If a threshold is not provided, the threshold is defaulted to 80.
   * @param axeResults
   *          The result after calling axe.run().
   * @param score
   *          The score of the accessibility report.
   * @param downloadPath
   *          The download path of the accessibility report.
   * @param threshold
   *          The threshold for a passing accessibility score.
   * @return A string that is our HTML report.
   */
  static generateAccessibilityReport(axeResults: any, score: number, downloadPath: string, threshold?: number | null): string | null;

  /**
   * Searches for a file matching the given regex pattern in the download directory.
   * If multiple files are found, the one with the latest download start timestamp will be returned.
   * @param filenameRegex
   *            The filename regex to match.
   * @param resolveOnFound
   *            If true, only resolve if a matching file was found.
   * @param timeout
   *            Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueFile} that will resolve with the found file.
   */
  searchForDownloadedFile(filenameRegex: string, resolveOnFound?: boolean, timeout?: number | null): LukeAsyncQueueFile | null;

  /**
   * Searches for file(s) matching the given regex pattern in the download directory.
   * The files will be sorted by the descending order of the download start timestamp.
   * @param filenameRegex
   *            The filename regex to match.
   * @param resolveOnFound
   *            If true, only resolve if at least one matching file was found.
   * @param timeout
   *            Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueCollection} of {@link LukeAsyncQueueFile}s that will resolve with the found files.
   */
  searchForDownloadedFiles(filenameRegex: string, resolveOnFound?: boolean, timeout?: number | null): LukeAsyncQueueCollection<LukeAsyncQueueFile | null> | null;

  /**
   * Closes the active UI window, note that all tabs inside the window will be closed as a result.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the active window is closed.
   */
  closeWindow(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Reloads the active UI window.
   * @return {@LukeAsyncQueueNode} that will be resolved when the active window is reloaded.
   */
  reloadWindow(): LukeAsyncQueueNode | null;

  /**
   * Switches the scope of Luke automation actions (click, search and etc) to a child iframe.
   * Note that it is possible to switch to a deeply nested iframe by walking through the tree path from
   * the main frame (root) to the target frame. To go back to the main frame, use {@link #switchToMainFrame}.
   * @example
   * luke.switchToChildFrame('iframe.level-one'); // from the main frame to level one
   * luke.switchToChildFrame('iframe.level-two'); // from level one to level two
   * luke.switchToChildFrame('iframe.level-three'); // from level two to level three
   *
   * @param selector
   *          The selector that locates the iframe tag.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the action scope is switched to the target frame.
   */
  switchToChildFrame(selector: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Switches the scope of Luke automation actions (click, search and etc) to the main frame (root) of a browser tab.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the action scope is switched to the main frame.
   */
  switchToMainFrame(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets a list of open browser tabs.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved with a list of tabs, each tab object
   * contains id, index, url, title and active status of the tab.
   * Note that indexing is based on the order of tabs by when they were opened, not by their
   * positioning in the browser window. Also note that switching tabs won't switch the action
   * scope of the frames for each tab. If the action scope of one tab is on an iframe, switching
   * to another tab and back won't change its action scope to its default main frame.
   * @example
   * [
   *   {
   *     id: 5088,
   *     index: 0,
   *     url: "https://my-page.io",
   *     title: "My Page",
   *     active: true,
   *   },
   *   {
   *     id: 5092,
   *     index: 1,
   *     url: "https://another-page.io",
   *     title: "Another Page",
   *     active: false,
   *   }
   * ]
   */
  tabs(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Switches to a tab by index. Note that indexing is based on the order of tabs by when they were opened,
   * not by their positioning in the browser window. If you are uncertain about the index of the target tab,
   * you can find it by getting all the tabs ({@link #tabs}) and filtering them by url, title or active status.
   * Also note that switching tabs won't switch the action scope of the frames for each tab. If the action scope
   * of one tab is on an iframe, switching to another tab and back won't change its action scope to its default main frame.
   * @param index
   *          The index of the target tab.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the target tab is switched to.
   */
  switchToTab(index: number, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Switches to the next tab. It will behave in a round-robin manner. Note that indexing is based on
   * the order of tabs by when they were opened, not by their positioning in the browser window.
   * Also note that switching tabs won't switch the action scope of the frames for each tab. If the action scope
   * of one tab is on an iframe, switching to another tab and back won't change its action scope to its default main frame.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the next tab is switched to.
   */
  switchToNextTab(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Closes a tab by index. Note that indexing is based on the order of tabs by when they were opened,
   * not by their positioning in the browser window. If you are uncertain about the index of the target tab,
   * you can find it by getting all the tabs ({@link #tabs}) and filtering them by url, title or active status.
   * @param index
   *          The index of the target tab.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the target tab is closed.
   */
  closeTab(index?: number | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets proxy to a child playground so that the parent playground can send control commands to UI pages
   * directly managed by the child playground. This is useful for testing LukePlayground features. For example,
   * to test the "record and replay" workflow, a parent playground can open a child playground and operate
   * it to start a recording flow for a target page. To simulate user interactions on the target page
   * for the child playground to detect and record, the parent will have to obtain skip-level control of the target page
   * that is not being directly managed by itself. By setting proxy to the child playground, the gap can be bridged between
   * the parent playground and a target page controlled by the child playground.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the proxy is set.
   */
  proxyToChildPlayground(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Stops the proxy to a child playground.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the proxy is stopped.
   */
  stopProxy(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets the return value of the window.confirm() function in the controlled ui instance.
   * @param value
   *          The return value of the window.confirm() function.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return {@LukeAsyncQueueNode} that will be resolved when the confirm mock is set.
   */
  addConfirmMock(value?: boolean, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Collects all calls to window.alert and plays them to a jasmine.Spy for making spy assertions, e.g. toHaveBeenCalled and toHaveBeenCalledWith.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return A {@link LukeAsyncQueueSpy} that will resolve a jasmine.Spy that has listened to all calls to the target function.
   */
  alertSpy(timeout?: number | null): LukeAsyncQueueSpy | null;

  confirmSpy(timeout?: number | null): LukeAsyncQueueSpy | null;

  /**
   * Pauses Luke test execution.
   */
  pause(): void;

  /**
   * Resumes Luke test execution
   */
  resume(): void;

  /**
   * If called when paused, returns a Promise that waits to be resolved.
   * If called when not paused, return a Promise that resolves immediately.
   * @return A Promise that will be resolved.
   */
  next(): C3.Promise<any | null> | null;

  /**
   * Resolves the Promise created in {@link #next}.
   */
  nextChain(): void;

  /**
   * Makes a call to the browser engine to get the performance measurements. This works by sending a
   * request to the ui page to run our measurements with the specified requirements, and the result is
   * processed by {@link #pageLoadTime}.
   * @param spec
   *          Specification including the page that needs at least a polling interval and selectors.
   * @param timeout
   *          The max time in seconds we allow for our performance timing.
   * @param hotLoad
   *          A boolean flag indicating if the measurement should be for a hot load, where hot load is defined
   *          to be if the page has already been loaded in the same window session.
   * @return A {@link LukeAsyncQueueNode} that resolves on measurement completion.
   */
  measurePageLoadTime(spec: UiPerformanceTimingSpec, timeout: number, hotLoad?: boolean): LukeAsyncQueueNode | null;

  /**
   * Go to a page and execute a script on the client to calculate the load time of the page. This
   * function is mainly processing the results of {@link #measurePageLoadTime}. See {@link UiPerformanceTimingSpec}
   * for details on what is needed as an input.
   * @param spec
   *          Specification including the page that needs at least a polling interval and selectors.
   * @param hotLoad
   *          A boolean flag indicating if the measurement should be for a hot load, where hot load is defined
   *          to be if the page has already been loaded in the same window session.
   * @return A {@link LukeAsyncQueueNode} that resolves performance timing results {@see UiPerformanceTimingResult}.
   */
  pageLoadTime(spec: UiPerformanceTimingSpec, hotLoad?: boolean): LukeAsyncQueueNode | null;

  /**
   * Measures the time it takes for the page to become quiet. This is useful for measuring the time it takes for
   * the page to finish its ajax and long-running JavaScript tasks, essentially waiting for the page to become "quiet".
   * @param metricName
   *          The name to give to this metric measurement. Defaults to 'timeToQuiet'.
   * @param timeout
   *          The max time in seconds we allow for our performance timing.
   * @return A {@link LukeAsyncQueueNode} that resolves to the time in seconds the the page took to become quiet starting from invocation.
   */
  timeToQuiet(metricName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Retrieve the screenshot at the relative path under the {@link LukeCoreConfig.screenShotPath} directory using {@link LocalFileSystem}.
   * @param relativePath
   *          The relative path to retrieve the screenshot at within the screenshots directory.
   *
   * @return The screenshot in binary form.
   */
  getScreenshot(relativePath?: string | null): any | null;

  /**
   * Take a screen shot of the current viewport.
   * @return A {@link LukeAsyncQueueNode} that resolves to a Base64 encoded string representing the page screenshot.
   */
  screenshot(): LukeAsyncQueueNode | null;

  /**
   * Take a screen shot of the specified element.
   * @param selector
   *          The selector for the element to take a screenshot of.
   * @param timeout
   *          The allowed time to find the element.
   * @return A {@link LukeAsyncQueueNode} that resolves to a Base64 encoded string representing the element screenshot.
   */
  elementScreenshot(selector?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Takes a screenshot of the browser and compares to an expected screenshot with the given screenshot name.
   * The screenshot that is generated from this function must be smaller than 4MB.
   * @example
   *   ```
   *   this.client = LukeBrowser.init();
   *   this.client.compareScreenshot('myTestFileName/screenshot1.png', 0.1, 10, true).assert('toEqual', true);
   *   ```
   * @param relativeScreenshotPath
   *           The screenshot path to find and to create, relative to an `expected` directory nested under
   *           the `test` directory. For example, if a screenshot is stored as
   *           `test/js-luke-browser/screenshots/expected/myTestFileName/screenshot1.png`, the
   *           `relativeScreenshotPath` should be `myTestFileName/screenshot1.png`, where `.png` is optional.
   *           This same relative path will also be used as the filename when writing output `png` files.
   * @param threshold
   *           A double value representing the decimal percentage of pixel matching below which screenshot differences are ignored and the comparison
   *           will be considered "passing".
   * @param timeout
   *          Timeout in seconds for the chain.
   * @param removeScreenshotsOnPass
   *           A boolean flag indicating whether the screenshots saved to the `/actual/`, `/expected/`, and `/diff/` sub-directories should be
   *           removed when the comparison passes with the provided threshold value. The screenshots will always be saved when the comparison fails.
   *           Note that if you are synced with VSCE, the screenshots will also be saved to the `/test/screenshots/` directory of your package.
   * @return A {@link LukeAsyncQueueNode} that resolves to a boolean determining whether the comparison has passed the check.
   *         When a comparison fails or `removeScreenshotsOnPass` is `false`, screenshots will be saved to the `/actual/`, `/expected/`, and `/diff/` sub-directories
   *         nested under the path provided to the {@link LukeCoreConfig.screenShotPath}.
   */
  compareScreenshot(relativeScreenshotPath: string, threshold: number, timeout?: number | null, removeScreenshotsOnPass?: boolean): LukeAsyncQueueNode | null;

  /**
   * Takes a screenshot of the given element and compares to an expected screenshot with the given screenshot name.
   * The screenshot that is generated from this function must be smaller than 4MB.
   * @example
   *   ```
   *   this.client = LukeBrowser.init();
   *   this.client.compareScreenshot('myTestFileName/screenshot1.png', 0.1, 10, true).assert('toEqual', true);
   *   ```
   * @param selector
   *           The selector for the element to take a screenshot of.
   * @param relativeScreenshotPath
   *           The screenshot path to find and to create, relative to an `expected` directory nested under
   *           the `test` directory. For example, if a screenshot is stored as
   *           `test/js-luke-browser/screenshots/expected/myTestFileName/screenshot1.png`, the
   *           `relativeScreenshotPath` should be `myTestFileName/screenshot1.png`, where `.png` is optional.
   *           This same relative path will also be used as the filename when writing output `png` files.
   * @param threshold
   *           A double value representing the decimal percentage of pixel matching below which screenshot differences are ignored and the comparison
   *           will be considered "passing".
   * @param timeout
   *          Timeout in seconds for the chain.
   * @param removeScreenshotsOnPass
   *           A boolean flag indicating whether the screenshots saved to the `/actual/`, `/expected/`, and `/diff/` sub-directories should be
   *           removed when the comparison passes with the provided threshold value. The screenshots will always be saved when the comparison fails.
   *           Note that if you are synced with VSCE, the screenshots will also be saved to the `/test/screenshots/` directory of your package.
   * @return A {@link LukeAsyncQueueNode} that resolves to a boolean determining whether the comparison has passed the check.
   *         When a comparison fails or `removeScreenshotsOnPass` is `false`, screenshots will be saved to the `/actual/`, `/expected/`, and `/diff/` sub-directories
   *         nested under the path provided to the {@link LukeCoreConfig.screenShotPath}.
   */
  compareElementScreenshot(selector: string, relativeScreenshotPath: string, threshold: number, timeout?: number | null, removeScreenshotsOnPass?: boolean): LukeAsyncQueueNode | null;

  /**
   * Compares `png` screenshots and outputs a "diff" screenshot with all differences highlighted in red.
   * @param imageOnePath
   *           A path to a `png` file (including the `.png` extension) to compare to the image at {@link imageTwoPath}.
   * @param imageTwoPath
   *           A path to a `png` file (including the `.png` extension) to compare to the image at {@link imageOnePath}.
   * @param outputPath
   *           A full path for a `png` file (including the `.png` extension) to create a "diff" image from the
   *           comparison of the images at {@link imageOnePath} and {@link imageTwoPath}.
   * @return The result of the comparison
   */
  static compareImages(imageOnePath: string, imageTwoPath: string, outputPath: string): any;

  /**
   * Generates a session token using the given OAuth token and sets it into a cookie named "c3auth".
   * @param accessToken
   *          The OAuth access token used to generate the session token.
   * @param hostUrl
   *          The path associated with the access token, usually the page that needs to be accessed.
   * @param timeout
   *            Timeout in seconds for the chain.
   * @return An async node that is resolved when the session token is set
   */
  setOAuthToken(accessToken: string, hostUrl: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets the current session token to the one associated with the given user. The session token is only applicable to the passed in url.
   * Functionally, this means that the next time Luke opens the given url, the url will believe Luke is the given user.
   * @example
   *   this.client = LukeBrowser.init();
   *   this.testUser = TestIdp.createTestUser(<username>, <password>, ['C3.AppAdmin']);
   *   this.client.impersonateUserForUrl(this.testUser, 'https://test-page.com');
   *   this.client.goto('https://test-page.com'); // opens the page with testUser's session token
   *   TestIdp.removeTestUsers([this.testUser]); // remove your test users when you are done with them
   * @param user
   *          The user, with its specific roles and permissions, to impersonate.
   * @param hostUrl
   *          The url that the given user will be impersonated at.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return An async node that is resolved when the session token is set
   */
  impersonateUserForUrl(user: User, hostUrl: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Calls the {@link BrowserEngine} to move the mouse to the specified coordinates to simulate a hover event.
   * This uses the Chrome DevTools Protocol to move the mouse to the specified coordinates, which is treated as a trusted event.
   * This is particularly useful for performing hover actions in elements such as canvas.
   * @param clientX
   *          The x-coordinate of the mouse in the viewport.
   * @param clientY
   *          The y-coordinate of the mouse in the viewport.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return A {@link LukeAsyncQueueNode} that will be resolved when the mouse is moved to the specified coordinates.
   */
  realHover(clientX: number, clientY: number, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Calls the {@link BrowserEngine} to click the specified coordinates with a native event.
   * This uses the Chrome DevTools Protocol to click the specified coordinates, which is treated as a trusted event.
   * @param clientX
   *          The x-coordinate of the mouse in the viewport.
   * @param clientY
   *          The y-coordinate of the mouse in the viewport.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return A {@link LukeAsyncQueueNode} that will be resolved when the mouse is moved to the specified coordinates.
   */
  realClick(clientX: number, clientY: number, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Calls the {@link BrowserEngine} to simulate a drag event by clicking and moving the mouse from the start coordinates to the end coordinates.
   * This uses the Chrome DevTools Protocol to move the mouse to the specified coordinates, which is treated as a trusted event.
   * This is particularly useful for performing drag and drop actions in elements such as canvas.
   * @param startClientX
   *          The x-coordinate of the start of the drag in the viewport.
   * @param startClientY
   *          The y-coordinate of the start of the drag in the viewport.
   * @param endClientX
   *          The x-coordinate of the end of the drag in the viewport.
   * @param endClientY
   *          The y-coordinate of the end of the drag in the viewport.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return A {@link LukeAsyncQueueNode} that will be resolved when the drag event is completed.
   */
  realDrag(startClientX: number, startClientY: number, endClientX: number, endClientY: number, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Utilizes Chrome DevTool Protocols to trigger actions on the active browser.
   * Chrome DevTool Protocol actions are treated as trusted events on the browser, which
   * may simulate user interactions more accurately.
   * NOTE: This method is intended for advanced users who are familiar with Chrome DevTool Protocols.
   * To see all available Chrome DevTool Protocol methods, please refer to the official documentation:
   * https://chromedevtools.github.io/devtools-protocol/
   * @param method
   *          The Chrome DevTool Protocol method to be invoked.
   * @param commandParams
   *          The parameters to be passed to the Chrome DevTool Protocol method.
   * @param timeout
   *          Timeout in seconds for the chain.
   * @return A promise that will be resolved or rejected with the result.
   */
  chromeProtocolLambda(method: string, commandParams: any, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Waits for a specified amount of time before continuing any Luke actions.
   * @param seconds
   *          The number of seconds to wait.
   */
  wait(seconds?: number | null): LukeAsyncQueueNode | null;
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

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λNullConsumer {
  (): void
}

interface λPredicate<T> {
  (t: T): boolean
}
