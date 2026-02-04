// TypeScript definitions for the C3 type LukeCore

/**
 * Luke is an all-purpose framework for UI integration and end-to-end tests. It drives
 * browsers and automates user interactions.
 *
 * Luke can be implemented by various automation engines. LukeCore provides an abstract interface
 * for any concrete type backed by a specific engine. It also composes higher-order engine-agnostic
 * APIs.
 *
 * Type parameters:
 * E is any type mixing {@link LukeWebElement}
 * C is {@link LukeCoreConfig} or any type mixing {@link LukeCoreConfig}
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeCore
 */
declare interface ILukeCore<E, C> {

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
}

/**
 * Luke is an all-purpose framework for UI integration and end-to-end tests. It drives
 * browsers and automates user interactions.
 *
 * Luke can be implemented by various automation engines. LukeCore provides an abstract interface
 * for any concrete type backed by a specific engine. It also composes higher-order engine-agnostic
 * APIs.
 *
 * Type parameters:
 * E is any type mixing {@link LukeWebElement}
 * C is {@link LukeCoreConfig} or any type mixing {@link LukeCoreConfig}
 *
 * @remarks this represents a made instance of LukeCore
 */
declare class LukeCore<E, C> extends Obj {

  /**
   * The default timeout for each chain of {@link LukeAsyncQueueNode}s
   */
  timeout?: number | null;
  withTimeout(timeout: number | null): LukeCore;

  /**
   * The flag to be switched on when the LukeCore instance should be aborted
   */
  abortFlag?: boolean;
  withAbortFlag(abortFlag: boolean): LukeCore;

  /**
   * The reason why the abort flag is set
   */
  abortReason?: string | null;
  withAbortReason(abortReason: string | null): LukeCore;

  /**
   * Threshold for number of failed Jasmine blocks before test abort
   */
  failureThreshold?: number | null;
  withFailureThreshold(failureThreshold: number | null): LukeCore;

  /**
   * Used to count number of failed Jasmine specs LukeCore instance has processed
   */
  failCount?: number | null;
  withFailCount(failCount: number | null): LukeCore;

  /**
   * Stores the type of jasmine block in current LukeCore lifecycle
   */
  currentJasmineBlock?: string | null;
  withCurrentJasmineBlock(currentJasmineBlock: string | null): LukeCore;

  /**
   * Indicates that only the Luke chain plan should be emitted when run() is called for a given Luke node
   */
  planOnly?: boolean;
  withPlanOnly(planOnly: boolean): LukeCore;

  /**
   * The spec for the Jasmine environment
   */
  jasmineEnvSpec?: LukeJasmineEnvSpec | null;
  withJasmineEnvSpec(jasmineEnvSpec: ILukeJasmineEnvSpec | null): LukeCore;

  /**
   * Indicates if the LukeCore instance is paused
   */
  paused?: boolean;
  withPaused(paused: boolean): LukeCore;

  /**
   * The placeholder Promise used in a paused LukeCore instance
   */
  toResolve?: any;
  withToResolve(toResolve: any): LukeCore;

  /**
   * Stores the async queue nodes to be run in the future
   */
  asyncQueue?: C3.Array<LukeAsyncQueueNode | null>;
  withAsyncQueue(asyncQueue: C3.Array<LukeAsyncQueueNode | null> | Array<ILukeAsyncQueueNode | null>): LukeCore;

  /**
   * The current active node
   */
  activeNode?: LukeAsyncQueueNode | null;
  withActiveNode(activeNode: ILukeAsyncQueueNode | null): LukeCore;

  /**
   * A map storing values for {@link LukeDynamicValue}s
   */
  dynamicValues?: C3.Map<string | null, any>;
  withDynamicValues(dynamicValues: C3.Map<string | null, any> | {[key: string | null]: any}): LukeCore;

  /**
   * A map storing alternative selector info
   */
  altSelectors?: C3.Map<string | null, any>;
  withAltSelectors(altSelectors: C3.Map<string | null, any> | {[key: string | null]: any}): LukeCore;

  /**
   * Whether to skip the remaining chains in the queue
   */
  skipQueueFlag?: boolean;
  withSkipQueueFlag(skipQueueFlag: boolean): LukeCore;

  /**
   * Construct an instance with initial state.
   */
  static make(): LukeCore<E, C>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeCore<E, C>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeCore<E, C>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeCore<E, C>;

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
  static make(fields: any, withDefaults?: boolean): LukeCore<E, C>;

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
  static fromJson(json: any | null): LukeCore<E, C> | null;

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
  static fromJsonString(json: string | null): LukeCore<E, C> | null;

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
  static fromXmlString(xml: string | null): LukeCore<E, C> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeCore<E, C> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeCore<E, C>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeCore<E, C>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeCore<E, C>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeCore<E, C> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeCore<E, C> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeCore<E, C>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeCore<E, C>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeCore<E, C>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeCore<E, C>;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeCore<E, C>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeCore<E, C>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeCore<E, C>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeCore<E, C>;

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
  withoutFieldAtPath(path: string): LukeCore<E, C>;

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
  withoutField(field: string | null): LukeCore<E, C>;

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
  withoutField(field: FieldType | null): LukeCore<E, C>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeCore<E, C>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeCore<E, C>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeCore<E, C>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeCore<E, C>;

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
  defaultField(field: string): LukeCore<E, C>;

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
  defaultField(field: FieldType): LukeCore<E, C>;

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
  unsetField(field: string): LukeCore<E, C>;

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
  unsetField(field: FieldType): LukeCore<E, C>;

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
  removeField(field: string): LukeCore<E, C>;

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
  removeField(field: FieldType): LukeCore<E, C>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeCore<E, C>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeCore<E, C>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeCore<E, C>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeCore<E, C>;

  mergeJson(json: any | null): LukeCore<E, C>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeCore<E, C>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeCore<E, C>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeCore<E, C> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeCore<E, C> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeCore<E, C> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeCore<E, C> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeCore<E, C> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeCore<E, C> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeCore<E, C> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeCore<E, C> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeCore<E, C> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeCore<E, C>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeCore<E, C>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeCore<E, C>;

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
  afterMake(): LukeCore<E, C>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeCore<E, C>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeCore<E, C>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeCore<E, C>;

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
  setField(field: string, value: any, doNotConvert?: boolean): LukeCore<E, C>;

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
  setField(field: FieldType, value: any, doNotConvert?: boolean): LukeCore<E, C>;

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
  config(): C | null;

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
  runChain(head: LukeAsyncQueueNode, scope?: LukeCore | null | LukeAsyncQueueNode | null | null): C3.Promise<any> | null;

  /**
   * Skips the remaining chains in the queue of the specified scope
   * @param scope
   *          The scope of the queue
   */
  skipQueue(scope?: LukeCore | null | LukeAsyncQueueNode | null | null): void;

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
  search(selector: string, resolveOnFound?: boolean, timeout?: number | null): E | null;

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
  searchAll(selector: string, resolveOnFound?: boolean, timeout?: number | null): LukeAsyncQueueCollection<E> | null;

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
  searchForElementWithText(selector: string, text: string | null | LukeDynamicValue | null, resolveOnFound?: boolean, timeout?: number | null): E | null;

  /**
   * Clicks an element by a css selector
   * @param selector
   *          The css selector targeting the dom element
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeWebElement} that will be resolved when the target element is clicked
   */
  click(selector: string, timeout?: number | null): E | null;

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
  setValue(selector: string, value?: string | null | number | null | boolean | LukeDynamicValue | null | null, timeout?: number | null): E | null;

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
