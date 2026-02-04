// TypeScript definitions for the C3 type Lambda

/**
 * Obj that stores the instance of a lambda data value.  It is parameterized by the function type (signature).
 *
 * Lambdas may be "partially applied," in which case some of the parameters to the implementation function have defined
 * values. This is useful for wrapping a more complex method for use in a simpler case. Note that the partially-applied
 * argument values must be serializable, so cannot be objects that reference dynamic state in a particular execution
 * environment.
 *
 * @remarks this represents a value passed to a method that expects an instance of Lambda
 */
declare interface ILambda<F> {

  /**
   * Partially applied arguments.
   */
  appliedArgs?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * The original function signature before arguments were partially applied.
   */
  baseSignature?: string | null;

  /**
   * A "language" of this lambda. I.e. how #implementation should be interpreted. This must be one of the constant
   * values from {@link Lambda.Language}.
   */
  language: string;

  /**
   * An implementation of this this lambda. Depends on #language.
   */
  implementation: string;

  /**
   * Extra settings to establish in the target execution environment before execution.
   */
  environment?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * The minimal action requirement for this lambda to execute. This should generally be null, to make the lambda as
   * widely useful as possible.
   */
  actionRequirement?: string | null;
}

/**
 * Obj that stores the instance of a lambda data value.  It is parameterized by the function type (signature).
 *
 * Lambdas may be "partially applied," in which case some of the parameters to the implementation function have defined
 * values. This is useful for wrapping a more complex method for use in a simpler case. Note that the partially-applied
 * argument values must be serializable, so cannot be objects that reference dynamic state in a particular execution
 * environment.
 *
 * @remarks this represents a made instance of Lambda
 */
declare class Lambda<F> extends Obj {

  /**
   * Partially applied arguments.
   */
  readonly appliedArgs?: C3.Map<string | null, any>;
  withAppliedArgs(appliedArgs: C3.Map<string | null, any> | {[key: string | null]: any}): Lambda;

  /**
   * The original function signature before arguments were partially applied.
   */
  readonly baseSignature?: string | null;
  withBaseSignature(baseSignature: string | null): Lambda;

  /**
   * A "language" of this lambda. I.e. how #implementation should be interpreted. This must be one of the constant
   * values from {@link Lambda.Language}.
   */
  readonly language: string;
  withLanguage(language: string): Lambda;

  /**
   * An implementation of this this lambda. Depends on #language.
   */
  readonly implementation: string;
  withImplementation(implementation: string): Lambda;

  /**
   * Extra settings to establish in the target execution environment before execution.
   */
  readonly environment?: C3.Map<string | null, any>;
  withEnvironment(environment: C3.Map<string | null, any> | {[key: string | null]: any}): Lambda;

  /**
   * The minimal action requirement for this lambda to execute. This should generally be null, to make the lambda as
   * widely useful as possible.
   */
  readonly actionRequirement?: string | null;
  withActionRequirement(actionRequirement: string | null): Lambda;

  /**
   * Primary serialization is through JSON, but it's also possible to use string serialization. The format is:
   * _actionRequirement_ `:` _implementation_. If there is no actionRequirement specified, the default requirement for
   * the language is used.
   */
  toString(): string | null;

  /**
   * Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
   * `args` and `kwargs` are of `ValueType` `any`.
   */
  _call_(args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>): any;

  /**
   * C3 ValueType of this instance.
   */
  valueType(): ValueType;

  /**
   * Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
   * considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
   *
   * @see ValueType#instanceType
   */
  static valueTypeOf(type: Type, failIfNot?: boolean): ValueType | null;

  /**
   * The closest native representation of the value.
   *
   * In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
   * access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
   * exposed, copying if necessary.
   *
   * @param doNotCopy return internal state without copying (unsafe access)
   */
  toNative(doNotCopy?: boolean): any;

  /**
   * Return the native instance that is directly callable in the current runtime, or null.
   * If the language and runtime, if defined, of the Lambda `toNative` is called on match the runtime in which it is
   * called, then the returned value is the native callable that will be executed in that runtime. Otherwise, the
   * returned value is simply a wrapper around `call`, and the execution will be handled by the runtime of the Lambda.
   *
   * If the Lambda instance has any `appliedArgs` AND the runtime in which `toNative` is being executed can execute
   * the lambda, then the native callable that is returned will contain logic to handle merging the `appliedArgs`
   * with arguments supplied when the native callable is invoked.
   *
   * @param type the specific lambda desired, needed for strongly-typed languages
   * @param failIfNone throw an error instead of returning null if conversion is not possible
   * @return native lambda callable
   */
  toNative(type?: LambdaType | null, failIfNone?: boolean): any;

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
  static fromJson(json: any | null): Lambda<F> | null;

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
  static fromJsonString(json: string | null): Lambda<F> | null;

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
  static fromXmlString(xml: string | null): Lambda<F> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Lambda<F> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Lambda<F>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Lambda<F>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Lambda<F>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Lambda<F> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Lambda<F> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Lambda<F>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Lambda<F>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Lambda<F>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Lambda<F>;

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
  withField(field: string, value: any, doNotConvert?: boolean): Lambda<F>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Lambda<F>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Lambda<F>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Lambda<F>;

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
  withoutFieldAtPath(path: string): Lambda<F>;

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
  withoutField(field: string | null): Lambda<F>;

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
  withoutField(field: FieldType | null): Lambda<F>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Lambda<F>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Lambda<F>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Lambda<F>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Lambda<F>;

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
  defaultField(field: string): Lambda<F>;

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
  defaultField(field: FieldType): Lambda<F>;

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
  unsetField(field: string): Lambda<F>;

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
  unsetField(field: FieldType): Lambda<F>;

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
  removeField(field: string): Lambda<F>;

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
  removeField(field: FieldType): Lambda<F>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Lambda<F>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Lambda<F>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Lambda<F>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Lambda<F>;

  mergeJson(json: any | null): Lambda<F>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Lambda<F>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Lambda<F>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Lambda<F> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Lambda<F> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Lambda<F> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Lambda<F> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Lambda<F> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Lambda<F> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Lambda<F> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Lambda<F> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Lambda<F> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Lambda<F>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Lambda<F>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Lambda<F>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Lambda<F>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Lambda<F>;

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
  static make(fields: any, withDefaults?: boolean): Lambda<F>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Lambda<F>;

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
  afterMake(): Lambda<F>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Lambda<F>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Lambda<F>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Lambda<F>;

  /**
   * Invoke the anonymous function with the specified arguments in an array.
   * The elements of the array must match the signature of the underlying function.
   */
  apply(args?: C3.Array<any>): any;

  /**
   * Invoke the anonymous function with the specified arguments in the ordinary way.
   * The arguments passed must match the signature of the underlying function.
   */
  call(...args: any[]): any;

  /**
   * @return a clone of this lambda with partially applied arguments.
   */
  partiallyApply(args?: C3.Map<string | null, any>): Lambda;

  /**
   * @return an array of clones of this lambda with partially applied arguments (elements of the input array).
   */
  partiallyApplyBatch(args: C3.Array<C3.Map<string | null, any>> | null): C3.Array<Lambda | null>;

  /**
   * @return a clone of this lambda with partially applied arguments. The arguments passed must match the signature of
   *         the underlying function.
   */
  partiallyCall(...args: any[]): Lambda;

  /**
   * @return effective signature for this lambda. If it has partially applied arguments then this signature will not
   *         contain those.
   */
  signature(): FunctionType | null;

  /**
   * @return a lambda with the same implementation and language, but with its signature (and function type binding)
   *         set. If `signature` is not provided, then it will be inferred from the lambda's source code if it is
   *         a JavaScript or Python lambda.
   */
  withSignature(signature?: FunctionType | null): Lambda;

  /**
   * Create a lambda from the specified action method.
   *
   * @param type
   *           type that implements the method
   * @param action
   *           name of the method
   */
  static fromAction(type: Type, action: string): Lambda;

  /**
   * Create a lambda from the specified Java static method.
   *
   * @param class
   *           Java class that implements the method
   * @param method
   *           name of the method
   * @param functionType
   *           the string serialized type of the function invoked by this lambda
   */
  static fromJavaMethod(class_: string, method: string, functionType?: string | null): Lambda;

  /**
   * Create a lambda from the specified Java source code.
   *
   * @param javaCode
   *           Java code for a class with a single public static method.
   */
  static fromJavaSrc(javaCode: string): Lambda;

  /**
   * Create a lambda from the specified native Java lambda.
   *
   * @param javaSerializableSupplier
   *           Java `Serializable & Supplier` functional instance instance.
   */
  static fromJavaSerializableSupplier(javaSerializableSupplier: λSupplier<any>): Lambda;

  /**
   * Create a lambda from the specified native Java lambda.
   *
   * @param javaSerializableFunction
   *           Java `Serializable & Function` functional instance instance.
   */
  static fromJavaSerializableFunction(javaSerializableFunction: λFunction<any, any>): Lambda;

  /**
   * Create a lambda from the specified native Java lambda.
   *
   * @param javaSerializableBiFunction
   *           Java `Serializable & BiFunction` functional instance instance.
   */
  static fromJavaSerializableBiFunction(javaSerializableBiFunction: λBiFunction<any, any, any>): Lambda;

  /**
   * Create a lambda from the specified native Java lambda.
   *
   * @param javaSerializableRunnable
   *           Java `Serializable & Runnable` functional instance instance.
   */
  static fromJavaSerializableRunnable(javaSerializableRunnable: λNullConsumer): Lambda;

  /**
   * Create a simple lambda from the specified JavaScript function definition. This can either be an anonymous
   * function or a lambda. Note that because C3 Lambda may be executed in a different context, the function can't
   * have references to global or scope variables.
   *
   * e.g.
   * ```
   * Lambda.fromJsSrc("x => 3 + x");
   * ```
   * @param functionCode
   *           code that defines a JavaScript function
   *
   * @see #fromJsFunc
   */
  static fromJsSrc(functionCode: string): Lambda;

  /**
   * Create a simple lambda from the specified JavaScript function. Note that because C3 Lambda needs to be fully
   * serializable, the provided JS code can't have references to global or scope variables. Also, Function.bind will not
   * work and `this` will not be preserved.
   *
   * e.g.this will not work:
   * ```
   * var hi = 'Hi!'
   * Lambda.fromJsFunc(function() { return hi + ' back!' }).toJson()
   * ```
   * however this will:
   * ```
   * Lambda.fromJsFunc(function(hi) { return hi + ' back!' }).partiallyCall('Hi!').toJson()
   * ```
   *
   * @param func
   *           the native JavaScript function
   *
   * @see #fromJsSrc
   */
  static fromJsFunc(func: any): Lambda;

  /**
   * Create a simple lambda from the specified Python code.
   *
   * @param functionCode
   *           A string representing a Python function.
   *           e.g. `Lambda.fromPySrc('lambda x: x + 1')`)
   * @param runtime
   *           If specified, the @link{ImplLanguage.Runtime} in which the function must run.
   *           If not specified, it will be `py` which means it should be executable in any python runtime.
   * @returns
   *           Lambda function implemented in python
   */
  static fromPySrc(functionCode: string, actionRequirement?: string | null): Lambda;

  /**
   * Create a simple lambda from the specified Python function
   *
   * @param func
   *           The native Python function.
   *           e.g. `f = lambda x: x + 1; Lambda.fromPyFunc(f)`.
   * @param actionRequirement
   *           If specified, the @link{ImplLanguage.Runtime} in which the function must run.
   *           If not specified, it will be `py` which means it should be executable in any python runtime.
   * @returns
   *           Lambda function implemented in python
   */
  static fromPyFunc(func: any, actionRequirement?: string | null): Lambda;

  /**
   * Creates a lambda from the source content. Content should have a content location and/or content type to determine
   * the implementation language and optionally action requirement. E.g. file named `action.py-py4j.py` will be
   * interpreted as a Python lambda with action requirement of `py-py4j`. Similarly, a content with media type of
   * `application/javascript` will be interpreted as a JavaScript lambda. And finally all other content will be
   * treated as serialized representation of Lambda.c3typ.
   *
   * @see #fromJsSrc
   * @see #fromPySrc
   */
  static fromSrc(signature: FunctionType, src: Content | null): Lambda;

  /**
   * Create a simple lambda from the specified function definition. This can either be an anonymous
   * function or a lambda. Note that because C3 Lambda may be executed in a different context, the function can't
   * have references to global or scope variables.
   *
   * e.g.
   * ```
   * Lambda.fromSrc("function(x: !?int): !int", Lambda.Language.JAVASCRIPT, "x => 3 + x");
   * ```
   * @param signature
   *           C3 signature of new lambda
   * @param language
   *           language of the code for lambda
   * @param impl
   *           code that defines a logic of this lambda
   * @param actionRequirement
   *           If specified, the @link{ImplLanguage.Runtime} in which the implementation must run
   * @see #fromJsFunc
   */
  static fromSrc(signature: FunctionType, language: string, impl: string, actionRequirement?: string | null): Lambda;

  /**
   * Create a simple lambda from the specified string.
   *
   * This uses the HTML style with the language, a colon, and the implementation.
   * For example: `"javascript:function(s) { ... }"` or `"action:Lambda.fromString"` or:
   * ```
   * java-code:
   * import java.io.*;
   * class C3 {
   *   public static void lambda() { ... }
   * }
   * ```
   *
   * Note that this validates only the structure of the string, it does not validate that the lambda code is valid.
   *
   * @param s
   *           language and code for the lambda
   */
  static fromString(s: string | null): Lambda | null;

  /**
   * Create a simple lambda from the specified string, if in the correct format. Note that unlike #fromString,
   * it does not throw an error by default, but instead returns null.
   *
   * @param s
   *           language and code for the lambda
   * @param failIfInvalid
   *           if true, throw an error instead of returning null
   *
   * @see #fromString
   */
  static convertFromString(s: string | null, failIfInvalid?: boolean): Lambda | null;

  /**
   * @return HttpRequest for REST invocation of this action.
   */
  toHttpRequest(env?: ExecutionEnvironment | null, auth?: string | null): HttpRequest;

  /**
   * @return a Java instance that can produce any of a variety of standard functional interface instances.
   */
  toJavaAnyFunction(): any;

  /**
   * @return Java native `Serializable & Runnable` instance wrapping calls to this lambda.
   */
  toJavaSerializableRunnable(): any;

  /**
   * @return Java native `Serializable & Supplier` instance wrapping calls to this lambda.
   */
  toJavaSerializableSupplier(): any;

  /**
   * @return native lambda that calls this one by passing `null` for all potential parameters.
   */
  supplier(returnType?: ValueType | null): λSupplier<O | null> | null;

  /**
   * @return a lambda that returns boolean value for a provided argument; typical used as predicate for a conditional
   *         logic.
   */
  predicate(): λPredicate<I | null> | null;

  /**
   * @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
   *         logic.
   */
  bipredicate(): λBiPredicate<T1 | null, T2 | null> | null;

  /**
   * @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
   *         logic.
   */
  tripredicate(): λTriPredicate<T1 | null, T2 | null, T3 | null> | null;

  /**
   * @return a lambda that returns boolean value for a provided arguments; typical used as predicate for a conditional
   *         logic.
   */
  quadpredicate(): λQuadPredicate<T1 | null, T2 | null, T3 | null, T4 | null> | null;

  /**
   * @return a lambda that accepts provided argument.
   */
  consumer(): λConsumer<T | null> | null;

  /**
   * @return a lambda that accepts provided arguments.
   */
  biconsumer(): λBiConsumer<T1 | null, T2 | null> | null;

  /**
   * @return a lambda that accepts provided arguments.
   */
  triconsumer(): λTriConsumer<T1 | null, T2 | null, T3 | null> | null;

  /**
   * @return a lambda that accepts provided arguments.
   */
  quadconsumer(): λQuadConsumer<T1 | null, T2 | null, T3 | null, T4 | null> | null;

  /**
   * @return native lambda that calls this one by applying first argument and passing `null` for rest.
   */
  func(returnType?: ValueType | null): λFunction<T | null, O | null> | null;

  /**
   * @return native lambda that calls this one by applying first and second argument and passing `null` for rest.
   */
  bifunc(returnType?: ValueType | null): λBiFunction<T1 | null, T2 | null, O | null> | null;

  /**
   * @return native lambda that calls this one by applying first, second and third argument and passing `null` for rest.
   */
  trifunc(returnType?: ValueType | null): λTriFunction<T1 | null, T2 | null, T3 | null, O | null> | null;

  /**
   * @return native lambda that calls this one by applying first, second, third and forth argument and passing `null`
   *         for rest.
   */
  quadfunc(returnType?: ValueType | null): λQuadFunction<T1 | null, T2 | null, T3 | null, T4 | null, O | null> | null;

  /**
   * Directly invoke a lambda implemented in JavaScript.
   *
   * @param actuals
   *           array of actual parameters to apply. NOTE: Any appliedArgs must have been merged into the actuals
   *           array before this method is called.
   */
  applyJs(actuals?: C3.Array<any>): any;

  /**
   * Directly invoke a lambda implemented in Python.
   *
   * @param args
   *           array of actual parameters to apply NOTE: Any appliedArgs must have been merged into the actuals
   *           array before this method is called.
   */
  applyPython(args?: C3.Array<any>): any;

  /**
   * Locate the complete signature for the lambda's implementation. If it has partially applied arguments, the
   * signature returned will be the #baseSignature value, otherwise it will be the signature defined by the generic
   * variable `F` (see #signature).
   *
   * @return full signature for this lambda's implementation
   */
  completeSignature(): FunctionType | null;

  /**
   * @return signature defined by the generic variable `F` in this type
   */
  static declaredSignature(): FunctionType;

  /**
   * Attempt to determine the declared arity of the method by examining the implementation code. This doesn't always
   * work because some languages have tricks to handle varargs which don't show up in the declaration, notably
   * JavaScript.
   *
   * If the method takes a variable number of arguments, the count will not include any of the variable arguments;
   * see #isVarArgs.
   */
  implParamCount(): number | null;

  /**
   * Attempt to determine if the method is declared to accept a variable number of arguments by examining the
   * implementation code. This doesn't always work because some languages have tricks to handle varargs which don't
   * show up in the declaration, notably JavaScript.
   */
  implVarArgs(): boolean;

  /**
   * Retrieve source code of the implementation.
   *
   * @param language
   *     Should be one of the language constants in {@link ImplLanguage}, such as {@link ImplLanguage#PYTHON}.
   *     If omitted, will output the language this `Lambda` was originally written in.
   */
  toSrc(language?: string | null): string | null;

  /**
   * Retrieve source code of the implementation, transpiled to Python if the original implementation language is not
   * Python.
   */
  toPySrc(): string | null;

  /**
   * Retrieve source code of the implementation, transpiled to JavaScript if the original implementation language is
   * not JavaScript.
   */
  toJsSrc(): string | null;

  /**
   * Pre-compile this lambda for efficient repeated invocation.
   *
   * Returns a compiled Lambda that has the same behavior but uses a pre-compiled callable instead of re-parsing
   * source each time. If compilation is not supported for this lambda's language, returns the original lambda.
   *
   * Use this when a lambda will be invoked repeatedly to avoid parsing/evaluation overhead on each call.
   *
   * @return Compiled lambda with efficient apply/call implementation, or this lambda if compilation not supported
   */
  compile(): Lambda<FunctionType | null>;
}


interface λQuadPredicate<T, U, V, W> {
  (t: T, u: U, v: V, w: W): boolean
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}

interface λQuadConsumer<T, U, V, W> {
  (t: T, u: U, v: V, w: W): void
}

interface λFunction<T, R> {
  (t: T): R
}

interface λTriConsumer<T, U, V> {
  (t: T, u: U, v: V): void
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λTriPredicate<T, U, V> {
  (t: T, u: U, v: V): boolean
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λSupplier<R> {
  (): R
}

interface λNullConsumer {
  (): void
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}
