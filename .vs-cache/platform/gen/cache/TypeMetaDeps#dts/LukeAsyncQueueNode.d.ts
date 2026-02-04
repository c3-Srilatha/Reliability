// TypeScript definitions for the C3 type LukeAsyncQueueNode

/**
 * @remarks this represents a value passed to a method that expects an instance of LukeAsyncQueueNode
 */
declare interface ILukeAsyncQueueNode {

  /**
   * Timeout in seconds for the chain that contains the current node.
   * Typically this field is only populated by the head of the chain.
   */
  timeout?: number | null;

  /**
   * The next node in the chain
   */
  next?: ILukeAsyncQueueNode | null;

  /**
   * The head of the chain that contains the current node
   */
  head?: ILukeAsyncQueueNode | null;

  /**
   * If the current node is a head, it can have a catch chain that runs when the normal
   * chain fails.
   */
  catchChain?: ILukeAsyncQueueNode | null;

  /**
   * When the node started running
   */
  startedAt?: number | null;

  /**
   * When the node ended running
   */
  endedAt?: number | null;

  /**
   * If the node spawns a nested async queue, its chains (heads) will be stored here.
   */
  asyncQueue?: C3.Array<LukeAsyncQueueNode | null> | Array<ILukeAsyncQueueNode | null>;

  /**
   * Whether to skip the remaining chains in the queue
   */
  skipQueueFlag?: boolean;

  /**
   * The function that yields a promise
   */
  func: any;

  /**
   * Additional arguments to be passed to the function ({@link #func}). A Luke instance and the result resolved from
   * the previous node will be passed, followed by the additional arguments.
   */
  args?: C3.Array<any> | Array<any>;

  /**
   * Metadata about what type of node this is.
   */
  label?: string | null;

  /**
   * "Unique" id assigned to each LukeAsyncQueueNode for UI. Uses C3 unique ID generator, but not backed by database
   */
  uuid?: string | null;
}

/**
 * @remarks this represents a made instance of LukeAsyncQueueNode
 */
declare class LukeAsyncQueueNode extends Obj {

  /**
   * Timeout in seconds for the chain that contains the current node.
   * Typically this field is only populated by the head of the chain.
   */
  timeout?: number | null;
  withTimeout(timeout: number | null): LukeAsyncQueueNode;

  /**
   * The next node in the chain
   */
  next?: LukeAsyncQueueNode | null;
  withNext(next: ILukeAsyncQueueNode | null): LukeAsyncQueueNode;

  /**
   * The head of the chain that contains the current node
   */
  head?: LukeAsyncQueueNode | null;
  withHead(head: ILukeAsyncQueueNode | null): LukeAsyncQueueNode;

  /**
   * If the current node is a head, it can have a catch chain that runs when the normal
   * chain fails.
   */
  catchChain?: LukeAsyncQueueNode | null;
  withCatchChain(catchChain: ILukeAsyncQueueNode | null): LukeAsyncQueueNode;

  /**
   * When the node started running
   */
  startedAt?: number | null;
  withStartedAt(startedAt: number | null): LukeAsyncQueueNode;

  /**
   * When the node ended running
   */
  endedAt?: number | null;
  withEndedAt(endedAt: number | null): LukeAsyncQueueNode;

  /**
   * If the node spawns a nested async queue, its chains (heads) will be stored here.
   */
  asyncQueue?: C3.Array<LukeAsyncQueueNode | null>;
  withAsyncQueue(asyncQueue: C3.Array<LukeAsyncQueueNode | null> | Array<ILukeAsyncQueueNode | null>): LukeAsyncQueueNode;

  /**
   * Whether to skip the remaining chains in the queue
   */
  skipQueueFlag?: boolean;
  withSkipQueueFlag(skipQueueFlag: boolean): LukeAsyncQueueNode;

  /**
   * The function that yields a promise
   */
  func: any;
  withFunc(func: any): LukeAsyncQueueNode;

  /**
   * Additional arguments to be passed to the function ({@link #func}). A Luke instance and the result resolved from
   * the previous node will be passed, followed by the additional arguments.
   */
  args?: C3.Array<any>;
  withArgs(args: C3.Array<any> | Array<any>): LukeAsyncQueueNode;

  /**
   * Metadata about what type of node this is.
   */
  label?: string | null;
  withLabel(label: string | null): LukeAsyncQueueNode;

  /**
   * "Unique" id assigned to each LukeAsyncQueueNode for UI. Uses C3 unique ID generator, but not backed by database
   */
  uuid?: string | null;
  withUuid(uuid: string | null): LukeAsyncQueueNode;

  /**
   * Construct an instance with initial state.
   */
  static make(): LukeAsyncQueueNode;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeAsyncQueueNode;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeAsyncQueueNode;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeAsyncQueueNode;

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
  static make(fields: any, withDefaults?: boolean): LukeAsyncQueueNode;

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
  static fromJson(json: any | null): LukeAsyncQueueNode | null;

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
  static fromJsonString(json: string | null): LukeAsyncQueueNode | null;

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
  static fromXmlString(xml: string | null): LukeAsyncQueueNode | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeAsyncQueueNode | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeAsyncQueueNode;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeAsyncQueueNode;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeAsyncQueueNode;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeAsyncQueueNode | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeAsyncQueueNode | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeAsyncQueueNode;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeAsyncQueueNode;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeAsyncQueueNode;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeAsyncQueueNode;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeAsyncQueueNode;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeAsyncQueueNode;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeAsyncQueueNode;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeAsyncQueueNode;

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
  withoutFieldAtPath(path: string): LukeAsyncQueueNode;

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
  withoutField(field: string | null): LukeAsyncQueueNode;

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
  withoutField(field: FieldType | null): LukeAsyncQueueNode;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeAsyncQueueNode;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeAsyncQueueNode;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeAsyncQueueNode;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeAsyncQueueNode;

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
  defaultField(field: string): LukeAsyncQueueNode;

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
  defaultField(field: FieldType): LukeAsyncQueueNode;

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
  unsetField(field: string): LukeAsyncQueueNode;

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
  unsetField(field: FieldType): LukeAsyncQueueNode;

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
  removeField(field: string): LukeAsyncQueueNode;

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
  removeField(field: FieldType): LukeAsyncQueueNode;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeAsyncQueueNode;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeAsyncQueueNode;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeAsyncQueueNode;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeAsyncQueueNode;

  mergeJson(json: any | null): LukeAsyncQueueNode;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeAsyncQueueNode;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeAsyncQueueNode;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeAsyncQueueNode | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeAsyncQueueNode | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeAsyncQueueNode | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeAsyncQueueNode | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeAsyncQueueNode | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeAsyncQueueNode | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeAsyncQueueNode | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeAsyncQueueNode | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeAsyncQueueNode | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeAsyncQueueNode;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeAsyncQueueNode;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeAsyncQueueNode;

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
  afterMake(): LukeAsyncQueueNode;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeAsyncQueueNode;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeAsyncQueueNode>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeAsyncQueueNode;

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
  setField(field: string, value: any, doNotConvert?: boolean): LukeAsyncQueueNode;

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
  setField(field: FieldType, value: any, doNotConvert?: boolean): LukeAsyncQueueNode;

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
   * Attaches a next async node to the current node
   * @param callback
   *          The function that either (1) yields a promise or (2) adds async chains to a nested async queue
   *          under the current active node.
   * @example Callback functions returning promises
   * ```js
   * client.search('.alert').then(function (client, element) {
   *   return new Promise(function (resolve) {
   *     resolve(element.enabled());
   *   });
   * });
   * ```
   * @example Callback functions scheduling async tasks
   * ```js
   * client.search('.hint').text().then(function (client, text) {
   *   if (text === 'click me') {
   *     client.click('button.action');
   *     client.search('label.message').text().assert('equal', 'Clicked!');
   *   }
   * });
   * ```
   * @param args
   *          The additional arguments to be passed to the promise function in the next node
   * @param nodeType
   *          The type of the next async node
   * @param label
   *          The label of the node, if not provided, the caller name of then will be used as the label
   * @param selectorToAppend
   *          The selector of the to-be-appended node, if not provided, the selector of the current node will be used
   * @return An async node attached to the current node
   */
  then(callback: any, args?: C3.Array<any>, nodeType?: Type | null, label?: string | null, selectorToAppend?: string | null): LukeAsyncQueueNode | null;

  /**
   * Adds a catch chain to the current chain. The catch logic runs when the normal chain fails.
   * It is useful for conditional logic.
   * @example
   * ```js
   * // Click the "start" button if the status is not "up".
   * this.client.search('.status', true, 5).text().assert('toEqual', 'up').catchThen(function () {
   *   this.client.search('button.start', true).click();
   * }.bind(this));
   * ```
   *
   * @param callback
   *          The function that schedules Luke tasks
   * @param args
   *          The additional arguments to be passed to the promise function in the next node
   * @param timeout
   *          The timeout in seconds for the catch chain
   * @return A {@link LukeAsyncQueueNode} that is the head of the catch chain
   */
  catchThen(callback: any, args?: C3.Array<any>, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Attaches an async node that extracts an attribute from the current node's result. It is useful for transforming result
   * and pass it down to an assertion node
   * @example
   * ```js
   * luke.searchAll('.my-selector').attr('length').assert('toBeGreaterThan', 4);
   * ```
   *
   * @param name
   *          The name of the attribute
   * @return An async node attached to the current node
   */
  attr(name: string): LukeAsyncQueueNode | null;

  /**
   * Measures the performance of the node
   * @example
   * ```js
   * luke.searchAll('.my-selector').measurePerformance().assert('toBeLessThan', 0.01);
   * ```
   *
   * @return An async node that will resolve with the time (in seconds) it takes to run the current node
   */
  measurePerformance(name: string): LukeAsyncQueueNode | null;

  /**
   * Attaches an async node that uses a custom function to generate result from the current node's result. It is useful for transforming result
   * and pass it down to an assertion node
   * @example
   * ```js
   * luke.search('.my-selector').text().transform(function (text) {
   *   return text.trim();
   * }).assert('toEqual', 'name1');
   * ```
   *
   * @param transformFunction
   *          The transform function
   * @param scope
   *          The scope ("this" argument) on which to call the transformFunction
   * @return An async node attached to the current node
   */
  transform(transformFunction: any, scope?: any): LukeAsyncQueueNode | null;

  /**
   * Same as transform, but expects the previous result to be an array and applies the transformation to each element of the array.
   * This simplifies usage for transforming the result of something like a searchAll().
   *
   * @example
   * ```js
   * luke.searchAll('.my-selector').mapToAny(function (_client, element) {
   *   return element.text();
   * }).transformAll(function (text) {
   *   return text.trim();
   * }).assert('toContain', 'name1');
   * ```
   *
   * @param transformFunction
   *          The transform function
   * @param scope
   *          The scope ("this" argument) on which to call the transformFunction
   * @return An async node attached to the current node
   */
  transformAll(transformFunction: any, scope?: any): LukeAsyncQueueNode | null;

  /**
   * Attaches an assertion async node to the current node.
   * When the value from the current node is resolved, it will be used to make an assertion against the expected value.
   * @param comparator
   *          The comparator
   * @param expected
   *          The expected value; this is usually set, but not for all comparators (ex. 'empty')
   * @param customMessage
   *          Custom message that gets appended to the standard error message
   * @param extraArgs
   *          Extra arguments passed to the underlying matcher function
   * @param selector
   *          The selector of the current node if it exists
   * @return An async node that resolves when its assertion becomes true.
   */
  assert(comparator: string, expected?: string | null | number | null | any | null | null, customMessage?: string | null, extraArgs?: C3.Array<any>, selector?: string | null): LukeAsyncQueueNode | null;

  /**
   * Attaches an assertion async node to the current node, which should be an accessibility score node.
   * Asserts that the score should be above some given threshold.
   * @param expected
   *          The expected accessibility score threshold.
   * @return An async node that resolves when its assertion becomes true.
   */
  assertAccessibility(expected?: number | null): LukeAsyncQueueNode | null;

  /**
   * Attaches an assertion async node to the current node, which should be a pageLoadTime node.
   * When the value from the performance node is resolved, it will be used to make an assertion against the expected value.
   * @param comparator
   *          The comparator.
   * @param expected
   *          The expected performance cutoff as a JSON.
   * @return An async node that resolves when its assertion becomes true.
   */
  assertPerformance(comparator: string, expected?: any | null): LukeAsyncQueueNode | null;

  /**
   * Attaches a negative assertion async node to the current node.
   * When the value from the current node is resolved, it will be used to make an assertion that value does not match the expected value.
   * @param comparator
   *          The comparator
   * @param expected
   *          The expected value; this is usually set, but not for all comparators (ex. 'empty')
   * @param customMessage
   *          Custom message that gets appended to the standard error message
   * @param extraArgs
   *          Extra arguments passed to the underlying matcher function
   * @param selector
   *          The selector of the current node if it exists
   * @return An async node that resolves when its assertion becomes true
   */
  assertNot(comparator: string, expected?: string | null | number | null | any | null | null, customMessage?: string | null, extraArgs?: C3.Array<any>, selector?: string | null): LukeAsyncQueueNode | null;

  /**
   * Makes an assertion after running an expression through the negate argument.
   * @param comparator
   *          The comparator
   * @param expected
   *          The expected value; this is usually set, but not for all comparators (ex. 'empty')
   * @param customMessage
   *          Custom message that gets appended to the standard error message
   * @param extraArgs
   *          Extra arguments passed to the underlying matcher function
   * @param negate
   *          If want the results of evaluation to not be negated before making the assertion
   * @param selector
   *          The selector of the current node if it exists
   * @return An async node that resolves when its assertion becomes true
   */
  makeAssertion(comparator: string, expected?: string | null | number | null | any | null | null, customMessage?: string | null, extraArgs?: C3.Array<any>, negate?: boolean, selector?: string | null): LukeAsyncQueueNode | null;

  /**
   * Gets the comparator function for an assertion
   * @param comparator
   *          The comparator
   * @param ignoreExpected
   *          If we want to ignore the expected value
   * @return An object with the comparator function and name
   */
  assertionMatcher(comparator: string, ignoreExpected?: boolean): any;

  /**
   * Internal helper for generating assertion message
   * @param actual
   *          The actual value
   * @param expected
   *          The expected value
   * @param comparator
   *          The comparator
   * @param customMessage
   *          Optional custom message
   * @param negate
   *          Whether to negate the assertion
   * @param selector
   *          The selector to use in the error message if actual is null
   * @return The assertion message
   */
  assertErrorMessage(actual?: any, expected?: any, comparator: string, customMessage?: string | null, negate?: boolean, selector?: string | null): string | null;

  /**
   * Adds a breakpoint to the async function that runs in the current node for debugging the node implementation.
   * Note that it only works when the test runs in the "console" browser environment.
   * ```js
   * luke.searchAll('.my-selector').visible().spyOn().assert('equal', true)
   * ```
   * can step into the async function that runs in the "visible" node when the "searchAll" node resolves the search
   * result.
   * @return the original node with a debuggable version of its async function.
   */
  spyOn(): LukeAsyncQueueNode | null;

  /**
   * Attaches a debugger node that will pause when the current node resolves its promise. It can be used to inspect the
   * result resolved from the current node. Note that it only works when the test runs in the "console" browser environment
   * and if DevTools is already open.
   * The node is "transparent", meaning that it won't alter the return node type or the resolved value of the current node,
   * and therefore won't impact the async chain.
   * ```js
   * luke.searchAll('.my-selector').visible().inspectResult().assert('equal', true)
   * ```
   * will pause when the "visible" node resolves with a result, the developer can check whether the visibility is true
   * or false.
   * @return a debugger node that can be used to inspect the result resolved from the current node.
   */
  inspectResult(): LukeAsyncQueueNode | null;

  /**
   * Saves the value that will be resolved from the current node as a {@link LukeDynamicValue} so that other async tasks
   * can use it later
   * @param name
   *          The name for the dynamic value
   * @return An async node that resolves when the value is saved
   */
  saveAsDynamicValue(name: string): LukeAsyncQueueNode | null;

  /**
   * Returns uuid, label, args, and next of the chain with this node as the chain head, during planning phase.
   * Note that chains at planning phase should not have spawned nested async queues yet.
   */
  chainInfo(): any | null;

  /**
   * Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to an integer
   * @example
   * ```js
   * luke.search('.my-selector').text().transformToInt().assert('toEqual', 23);
   * ```
   *
   * @return A {@link LukeAsyncQueueNode} that will resolve an integer
   */
  transformToInt(): LukeAsyncQueueNode | null;

  /**
   * Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to a number
   * @example
   * ```js
   * luke.search('.my-selector').text().transformToNumber().assert('toEqual', 23);
   * luke.search('.my-selector').text().transformToNumber(2).assert('toEqual', 23.28);
   * ```
   * @param decimals
   *           Number of decimals, note that the trailing 0 decimals will be omitted. For example, if "23.1200" is transformed
   *           to a number with 3 decimals, the resolved value will be 23.12 because JavaScript Number object will drop
   *           the trailing 0 decimals. {@see #transformToNumberString}
   * @return A {@link LukeAsyncQueueNode} that will resolve a number
   */
  transformToNumber(decimals?: number | null): LukeAsyncQueueNode | null;

  /**
   * Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to a string representing a number
   * @example
   * ```js
   * luke.search('.my-selector').text().transformToNumberString().assert('toEqual', '23');
   * luke.search('.my-selector').text().transformToNumberString(2).assert('toEqual', '23.28');
   * ```
   * @param decimals
   *           Number of decimals
   * @return A {@link LukeAsyncQueueNode} that will resolve a string representing a number
   */
  transformToNumberString(decimals?: number | null): LukeAsyncQueueNode | null;

  /**
   * Attaches a {@link LukeAsyncQueueNode} that transforms the value resolved from the current node to a string
   * @example
   * ```js
   * luke.searchAll('.item').size().transformToString().assert('toEqual', '5');
   * ```
   *
   * @return A {@link LukeAsyncQueueNode} that will resolve a string representing the value
   */
  transformToString(): LukeAsyncQueueNode | null;

  /**
   * Logs the message passed in to the server logs.
   * @param msg
   *          The message in string form.
   * @param source
   *          The context of where the log call is triggered.
   * @return A {@link LukeAsyncQueueNode} that will resolve a string representing the message
   */
  logToServer(msg: string, source: string): void;
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
