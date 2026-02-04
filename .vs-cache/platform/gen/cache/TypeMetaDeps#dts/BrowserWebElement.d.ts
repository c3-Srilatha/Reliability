// TypeScript definitions for the C3 type BrowserWebElement

/**
 * Represents a DOM element modeled by {@link BrowserEngine}
 *
 * @remarks this represents a value passed to a method that expects an instance of BrowserWebElement
 */
declare interface IBrowserWebElement {

  /**
   * The instance of the {@link BrowserEngine}
   */
  engine: IBrowserEngine;

  /**
   * The session id
   */
  sessionId: string;

  /**
   * The element id
   */
  elementId?: string | null;
}

/**
 * Represents a DOM element modeled by {@link BrowserEngine}
 *
 * @remarks this represents a made instance of BrowserWebElement
 */
declare class BrowserWebElement extends Obj {

  /**
   * The instance of the {@link BrowserEngine}
   */
  readonly engine: BrowserEngine;
  withEngine(engine: IBrowserEngine): BrowserWebElement;

  /**
   * The session id
   */
  readonly sessionId: string;
  withSessionId(sessionId: string): BrowserWebElement;

  /**
   * The element id
   */
  readonly elementId?: string | null;
  withElementId(elementId: string | null): BrowserWebElement;

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
  static fromJson(json: any | null): BrowserWebElement | null;

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
  static fromJsonString(json: string | null): BrowserWebElement | null;

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
  static fromXmlString(xml: string | null): BrowserWebElement | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): BrowserWebElement | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BrowserWebElement;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BrowserWebElement;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BrowserWebElement;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BrowserWebElement | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BrowserWebElement | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): BrowserWebElement;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BrowserWebElement;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BrowserWebElement;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): BrowserWebElement;

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
  withField(field: string, value: any, doNotConvert?: boolean): BrowserWebElement;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): BrowserWebElement;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): BrowserWebElement;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BrowserWebElement;

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
  withoutFieldAtPath(path: string): BrowserWebElement;

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
  withoutField(field: string | null): BrowserWebElement;

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
  withoutField(field: FieldType | null): BrowserWebElement;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): BrowserWebElement;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): BrowserWebElement;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): BrowserWebElement;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): BrowserWebElement;

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
  defaultField(field: string): BrowserWebElement;

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
  defaultField(field: FieldType): BrowserWebElement;

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
  unsetField(field: string): BrowserWebElement;

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
  unsetField(field: FieldType): BrowserWebElement;

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
  removeField(field: string): BrowserWebElement;

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
  removeField(field: FieldType): BrowserWebElement;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): BrowserWebElement;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): BrowserWebElement;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): BrowserWebElement;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): BrowserWebElement;

  mergeJson(json: any | null): BrowserWebElement;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): BrowserWebElement;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): BrowserWebElement;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<BrowserWebElement | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<BrowserWebElement | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<BrowserWebElement | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<BrowserWebElement | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<BrowserWebElement | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, BrowserWebElement | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, BrowserWebElement | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<BrowserWebElement | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<BrowserWebElement | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): BrowserWebElement;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): BrowserWebElement;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): BrowserWebElement;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): BrowserWebElement;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): BrowserWebElement;

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
  static make(fields: any, withDefaults?: boolean): BrowserWebElement;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): BrowserWebElement;

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
  afterMake(): BrowserWebElement;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): BrowserWebElement;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<BrowserWebElement>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): BrowserWebElement;

  /**
   * Searches for an element by a css selector.
   */
  search(selector: string): C3.Promise<any | null> | null;

  /**
   * Searches for all elements that matches a css selector.
   */
  searchAll(selector: string): C3.Promise<any | null> | null;

  /**
   * Runs a script as a function with passed arguments in the browser console of the target webpage.
   * @param func
   *      The function to run
   * @param args
   *      The arguments to be passed
   * @return a Promise that will be resolved with the run result
   */
  runScript(func: any, args?: C3.Array<any>): C3.Promise<any | null> | null;

  /**
   * Runs a script as a function with passed arguments in the browser console of the target webpage.
   * The function is expected to return a promise that will be resolved when the async logic completes.
   * @param func
   *      The function to run
   * @param args
   *      The arguments to be passed
   * @return a Promise that will be resolved with the run result
   */
  runAsyncScript(func: any, args?: C3.Array<any>): C3.Promise<any | null> | null;

  /**
   * Gets the parent element of this element.
   * @return A Promise that will be resolved upon finding the parent element.
   */
  parentElement(): C3.Promise<any | null> | null;

  /**
   * Gets the root element of this element, which is the body element.
   * @return A Promise that will be resolved upon finding the root element.
   */
  rootElement(): C3.Promise<any | null> | null;

  /**
   * Triggers an event on current element.
   * @param eventType
   *         The name of the event, e.g. click
   * @param extraArguments
   *         Arguments to be passed to any event listeners
   * @param eventCategory
   *         The category of the event, e.g. MouseEvent. By default, CustomEvent will be used
   * @return a Promise that will be resolved when the event is triggered
   */
  trigger(eventType: string, extraArguments?: Obj | null, eventCategory?: string | null): C3.Promise<boolean> | null;

  /**
   * Triggers the event of pressing the enter key on the element.
   */
  pressEnterKey(): C3.Promise<boolean> | null;

  /**
   * Triggers the event of pressing the ESC key on the element.
   */
  pressEscKey(): C3.Promise<boolean> | null;

  /**
   * Triggers the event of pressing the tab key on the element.
   *
   * @param withShift
   *           if true, press the (left) shift key first
   */
  pressTabKey(withShift?: boolean): C3.Promise<boolean> | null;

  /**
   * Triggers the event of pressing a key on the element.
   *
   * @param key
   *           The key value for the key being pressed
   *           The list of key values: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
   * @param withCtrl
   *           If true, press the (left) Ctrl key first
   * @param withAlt
   *           If true, press the (left) Alt key first
   * @param withShift
   *           If true, press the (left) shift key first
   * @param withMeta
   *           If true, press the (left) meta key first
   */
  pressKey(key: string, withShift?: boolean, withCtrl?: boolean, withAlt?: boolean, withMeta?: boolean): C3.Promise<boolean> | null;

  /**
   * Intelligently sets value of the input.
   * If input is text or text like (think number, password etc), value is expected to be text
   * and the API will update the value of the input to what is provided.
   * If input is checkbox or radio, value is expected to be boolean indicating the final state
   * of the input. The API will check/uncheck the checkbox/radio accordingly. For example, passing true
   * will set the checkbox to checked state and false will uncheck it.
   * If input is file upload, value expected is the path to the file that needs to be uploaded.
   * If null/undefined values are provided, function will try to clear the input.
   *
   * @param  value
   *          the value to set in the input
   * @return  the response from the driver
   */
  setValue(value?: string | null | number | null | boolean | null): C3.Promise<any | null> | null;

  /**
   * Gets the value of the element.
   */
  getValue(): C3.Promise<string | null> | null;

  /**
   * Clicks the element.
   */
  click(): C3.Promise<any | null> | null;

  /**
   * Clicks the element with additional Pointer Events dispatched.
   */
  pointerClick(): C3.Promise<any | null> | null;

  /**
   * Scrolls to the element.
   * If no offset is specified, the native scrollIntoView function will be applied directly to the selected element.
   * Otherwise, we assume the element is "scrollable" and the offsets will be applied.
   * @param xOffset
   *          offset in x direction
   * @param yOffset
   *          offset in y direction
   */
  scrollTo(xOffset?: number | null, yOffset?: number | null): C3.Promise<any | null> | null;

  /**
   * Scrolls an element's parent recursively to make the element into the viewport.
   * Note that {@link #scrollTo} only scrolls the window to the position of an element, which
   * does not guarantee that the element will be in the viewport. For example, if an element is in
   * a scrollable container div, {@link #scrollTo} will not scroll the parent div and make the
   * element visible in the viewport. In contrast, {@link #scrollIntoView} will scroll parent
   * containers recursively as needed to make sure the target element is in the viewport.
   * @return  A promise that will be resolved when the element is scrolled into view.
   */
  scrollIntoView(): C3.Promise<any | null> | null;

  /**
   * Moves to the element.
   * By default, the mouse position will be the target element's top left, offset in x and y directions can also be specified.
   * @param xOffset
   *          offset in x direction
   * @param yOffset
   *          offset in y direction
   */
  moveTo(xOffset?: number | null, yOffset?: number | null): void;

  /**
   * Scrolls to the element (to make sure it is within the viewport and interactable) and clicks it.
   * @param clickType
   *          The type of click to be used, {@link #pointerClick} or {@link #click}
   */
  scrollToAndClick(clickType?: string | null): C3.Promise<any | null> | null;

  /**
   * Checks the visibility of the element, by default, it checks whether the element shows in the
   * dom.
   * @param isInViewPort
   *           whether to check if the element is within the viewport regarding the scroll position
   * @return a promise that will be resolved with the result
   */
  displayed(isInViewPort?: boolean): C3.Promise<boolean> | null;

  /**
   * Checks whether the element is enabled or not.
   */
  enabled(): C3.Promise<boolean> | null;

  /**
   * Gets a css property from the element.
   */
  cssProperty(property: string): C3.Promise<string | null> | null;

  /**
   * Gets the value of an attribute from the element.
   */
  elementAttribute(attribute: string): C3.Promise<string | null> | null;

  /**
   * Gets the text content.
   *
   * Make sure the element you want to request the text from [is interactable](https://www.w3.org/TR/webdriver/#dfn-interactable-element)
   * or this will return null.
   */
  text(): C3.Promise<string | null> | null;

  /**
   * Gets the element tag name in CAPS.
   * @return A Promise that will be resolved upon finding the tag name.
   */
  tagName(): C3.Promise<string | null> | null;

  /**
   * Whether the element (an OPTION element, or an INPUT element of type checkbox or radio button) is currently selected.
   */
  isSelected(): C3.Promise<boolean> | null;

  /**
   * Uploads a file in the browser. Uses {@link Pkg} to access the file, thus only files in the current package are available.
   * This function is not a real file uploading. It implements a workaround by mocking the getter of the fileInput.files
   * to return the fake file created by us, and then triggering the change event of the file input.
   * @param url or encoded path of the file
   */
  uploadFile(path: string): C3.Promise<any | null> | null;

  /**
   * Uploads multiple files in the browser. Uses {@link Pkg} to access the files, thus only files in the current package are available.
   * This function is not a real file uploading. It implements a workaround by mocking the getter of the fileInput.files
   * to return the fake file created by us, and then triggering the change event of the file input.
   * @param url or encoded path of the file
   */
  uploadFiles(paths: C3.Array<string | null>): C3.Promise<any | null> | null;

  /**
   * Searches for all elements within the current element that match the css selector and returns the first element that has the given text.
   * @param selector
   *          The css selector
   * @param text
   *          The text to match
   * @return A Promise that will be resolved with the element found.
   */
  searchForElementWithText(selector: string, text: string | null | LukeDynamicValue | null): C3.Promise<any | null> | null;

  /**
   * Gets the bounding client rectangle of this element.
   * @return A Promise that will be resolved upon getting the element's bounding client rectangle.
   */
  getBoundingClientRect(): C3.Promise<any | null> | null;
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
