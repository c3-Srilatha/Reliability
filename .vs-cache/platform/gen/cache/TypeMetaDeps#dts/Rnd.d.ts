// TypeScript definitions for the C3 type Rnd

/**
 * Pseudo-random value generation utility. Note that it allows generation of stable sequences of a pseudo-random values
 * by maintaining and adjusting seed value as a mutable instance field or by taking and returning both the result and
 * the seed in static methods.
 *
 * Member methods of this type maintain the seed on the instance, so they can be used naturally to produce repeatable
 * sequences of pseudo-random values. If a different sequence is desired, special care needs to be taken to ensure that
 * seed is sufficiently random. See {@link #inst} and {@link #fromSeed}
 *
 * It is important to keep in mind that this type is really meant for pseudo-random value generation  e.g. for test data.
 * It is not meant for for generating globally unique ids, please use {@link Uuid} for that purpose; for cryptography
 * concerns please use {@link CryptoCipher}, {@link CryptoSignature}, {@link Pgp} etc; for data anonymization, please
 * use {@link Sanitizer}
 *
 * Another consideration is multi-threading. `Rnd` mutable instance is NOT thread safe; if same instance is used from
 * multiple threads then usage has to be synchronized. Note however `Rnd.inst()` will return thread local instance so
 * it is safe to use from multiple threads.
 *
 * Normal values will use the full range of the designated type. For example, #int will generate values in [-2⁶³..2⁶³).
 * Many of these methods takes an optional `example` param, in which case they will return a simpler value more natural
 * for use in sample code or as example values. These values will cover less of the range, but be more readable.
 *
 * @see #inst
 * @see #fromSeed
 *
 * @remarks this represents a value passed to a method that expects an instance of Rnd
 */
declare interface IRnd {

  /**
   * seed value to be used for generated next random value; care should be taken if setting this value
   */
  seed?: any;
}

/**
 * Pseudo-random value generation utility. Note that it allows generation of stable sequences of a pseudo-random values
 * by maintaining and adjusting seed value as a mutable instance field or by taking and returning both the result and
 * the seed in static methods.
 *
 * Member methods of this type maintain the seed on the instance, so they can be used naturally to produce repeatable
 * sequences of pseudo-random values. If a different sequence is desired, special care needs to be taken to ensure that
 * seed is sufficiently random. See {@link #inst} and {@link #fromSeed}
 *
 * It is important to keep in mind that this type is really meant for pseudo-random value generation  e.g. for test data.
 * It is not meant for for generating globally unique ids, please use {@link Uuid} for that purpose; for cryptography
 * concerns please use {@link CryptoCipher}, {@link CryptoSignature}, {@link Pgp} etc; for data anonymization, please
 * use {@link Sanitizer}
 *
 * Another consideration is multi-threading. `Rnd` mutable instance is NOT thread safe; if same instance is used from
 * multiple threads then usage has to be synchronized. Note however `Rnd.inst()` will return thread local instance so
 * it is safe to use from multiple threads.
 *
 * Normal values will use the full range of the designated type. For example, #int will generate values in [-2⁶³..2⁶³).
 * Many of these methods takes an optional `example` param, in which case they will return a simpler value more natural
 * for use in sample code or as example values. These values will cover less of the range, but be more readable.
 *
 * @see #inst
 * @see #fromSeed
 *
 * @remarks this represents a made instance of Rnd
 */
declare class Rnd extends Obj {

  /**
   * seed value to be used for generated next random value; care should be taken if setting this value
   */
  seed?: any;
  withSeed(seed: any): Rnd;

  /**
   * seed value to be used for generated next random value; care should be taken if setting this value
   */
  static seed?: any;

  /**
   * @return thread local and cached instance of the `Rnd` seeded by default with sufficiently random seed; note however
   *         that this random seed may not be globally unique, so under extremely rare cases may produce duplicates. For
   *         globally unique random values it is strongly recommended to use {@link Uuid}
   */
  static inst(): Rnd;

  /**
   * Construct an instance with initial state.
   */
  static make(): Rnd;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Rnd;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Rnd;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Rnd;

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
  static make(fields: any, withDefaults?: boolean): Rnd;

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
  static fromJson(json: any | null): Rnd | null;

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
  static fromJsonString(json: string | null): Rnd | null;

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
  static fromXmlString(xml: string | null): Rnd | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Rnd | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Rnd;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): Rnd;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Rnd;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Rnd;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Rnd;

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
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Rnd;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Rnd | null>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Rnd | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Rnd | null>;

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
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Rnd | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Rnd;

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
  static mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Rnd;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Rnd;

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
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Rnd;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Rnd;

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
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Rnd;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Rnd;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): Rnd;

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
  withField(field: string, value: any, doNotConvert?: boolean): Rnd;

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
  static withField(field: string, value: any, doNotConvert?: boolean): Rnd;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Rnd;

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
  static withField(field: FieldType, value: any, doNotConvert?: boolean): Rnd;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Rnd;

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
  static withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Rnd;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Rnd;

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
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Rnd;

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
  withoutFieldAtPath(path: string): Rnd;

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
  static withoutFieldAtPath(path: string): Rnd;

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
  withoutField(field: string | null): Rnd;

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
  static withoutField(field: string | null): Rnd;

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
  withoutField(field: FieldType | null): Rnd;

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
  static withoutField(field: FieldType | null): Rnd;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Rnd;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: C3.Array<string | null> | null): Rnd;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Rnd;

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
  static withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Rnd;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Rnd;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): Rnd;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Rnd;

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
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Rnd;

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
  defaultField(field: string): Rnd;

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
  static defaultField(field: string): Rnd;

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
  defaultField(field: FieldType): Rnd;

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
  static defaultField(field: FieldType): Rnd;

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
  unsetField(field: string): Rnd;

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
  static unsetField(field: string): Rnd;

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
  unsetField(field: FieldType): Rnd;

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
  static unsetField(field: FieldType): Rnd;

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
  removeField(field: string): Rnd;

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
  static removeField(field: string): Rnd;

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
  removeField(field: FieldType): Rnd;

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
  static removeField(field: FieldType): Rnd;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Rnd;

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
  static mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Rnd;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Rnd;

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
  static mergeObj(other: Obj | null, otherFieldsFilter: Type): Rnd;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Rnd;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Rnd;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Rnd;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Rnd;

  mergeJson(json: any | null): Rnd;

  static mergeJson(json: any | null): Rnd;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Rnd;

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
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Rnd;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Rnd;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj | null, deep?: boolean): Rnd;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Rnd | null>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): C3.Array<Rnd | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Rnd | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Rnd | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Rnd | null>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): C3.Set<Rnd | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Rnd | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Rnd | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Rnd | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Rnd | null>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<Rnd | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Rnd | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Rnd;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Rnd;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Rnd;

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
  afterMake(): Rnd;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): Rnd;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Rnd;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Rnd>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Rnd;

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
  setField(field: string, value: any, doNotConvert?: boolean): Rnd;

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
  static setField(field: string, value: any, doNotConvert?: boolean): Rnd;

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
  setField(field: FieldType, value: any, doNotConvert?: boolean): Rnd;

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
  static setField(field: FieldType, value: any, doNotConvert?: boolean): Rnd;

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
  static onChange(changed: C3.Array<string | null>): void;

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
   * Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
   * contains more information about the values which changed, including their prior values. This allows a full
   * difference to be calculated if desired. Note that maintaining this state is much more costly than simple
   * notification via #onChange and should only be used if truly required.
   *
   * @param edits a list of what changed and the prior values
   *
   * @see #onChange
   */
  static onEdit(edits: Obj): void;

  /**
   * Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
   *
   * @param action the lambda to invoke that makes changes without notification
   */
  withoutChangeEvent(action: λConsumer<Mutable | null>): void;

  /**
   * Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
   *
   * @param action the lambda to invoke that makes changes without notification
   */
  static withoutChangeEvent(action: λConsumer<Mutable | null>): void;

  /**
   * @return instance for a given seed; this is useful to produce consistent pseudo-random sequence; note that seed
   *         value is not serializable so this API only makes sense if instance is used from server code; calls from
   *         client SDKs like calls from Browser or VS Code Console or Jupyter Notebook will effectively ignore this
   *         seed
   */
  static fromSeed(seed: number): Rnd;

  /**
   * @return next pseudo-random integer value
   */
  int(example?: boolean): number;

  /**
   * @return next pseudo-random integer value
   */
  static int(example?: boolean): number;

  /**
   * @return next pseudo-random integer value in the range
   */
  int(min: number, max: number, maxInclusive?: boolean): number;

  /**
   * @return next pseudo-random integer value in the range
   */
  static int(min: number, max: number, maxInclusive?: boolean): number;

  /**
   * @return next pseudo-random integer value in the range and target mean value
   */
  int(min: number, max: number, mean: number): number;

  /**
   * @return next pseudo-random integer value in the range and target mean value
   */
  static int(min: number, max: number, mean: number): number;

  /**
   * @return next pseudo-random integer value in the range
   */
  int(range: Range<number | null>): number;

  /**
   * @return next pseudo-random integer value in the range
   */
  static int(range: Range<number | null>): number;

  /**
   * @return next pseudo-random 16 bit integer value
   */
  int16(): number;

  /**
   * @return next pseudo-random 16 bit integer value
   */
  static int16(): number;

  /**
   * @return next pseudo-random 32 bit integer value
   */
  int32(): number;

  /**
   * @return next pseudo-random 32 bit integer value
   */
  static int32(): number;

  /**
   * @return next pseudo-random 32 bit integer value in the range
   */
  int32(min: number, max: number, maxInclusive?: boolean): number;

  /**
   * @return next pseudo-random 32 bit integer value in the range
   */
  static int32(min: number, max: number, maxInclusive?: boolean): number;

  /**
   * @return next pseudo-random 32 bit integer value in the range and target mean value
   */
  int32(min: number, max: number, mean: number): number;

  /**
   * @return next pseudo-random 32 bit integer value in the range and target mean value
   */
  static int32(min: number, max: number, mean: number): number;

  /**
   * @return next pseudo-random 32 bit integer value in the range
   */
  int32(range: Range<number | null>): number;

  /**
   * @return next pseudo-random 32 bit integer value in the range
   */
  static int32(range: Range<number | null>): number;

  /**
   * @return next pseudo-random 64 bit integer value
   */
  bigint(): number;

  /**
   * @return next pseudo-random 64 bit integer value
   */
  static bigint(): number;

  /**
   * @return next pseudo-random double value
   */
  double(example?: boolean): number;

  /**
   * @return next pseudo-random double value
   */
  static double(example?: boolean): number;

  /**
   * @return next pseudo-random double value in the range
   */
  double(min: number, max: number, maxInclusive?: boolean): number;

  /**
   * @return next pseudo-random double value in the range
   */
  static double(min: number, max: number, maxInclusive?: boolean): number;

  /**
   * @return next pseudo-random double value in the range and target mean value
   */
  double(min: number, max: number, mean: number): number;

  /**
   * @return next pseudo-random double value in the range and target mean value
   */
  static double(min: number, max: number, mean: number): number;

  /**
   * @return next pseudo-random double value in the range
   */
  double(range: Range<number | null>): number;

  /**
   * @return next pseudo-random double value in the range
   */
  static double(range: Range<number | null>): number;

  /**
   * @return next n pseudo-random double values
   */
  doubles(n: number): C3.Array<number>;

  /**
   * @return next n pseudo-random double values
   */
  static doubles(n: number): C3.Array<number>;

  /**
   * @return next n pseudo-random double values in the range
   */
  doubles(n: number, min: number, max: number, maxInclusive?: boolean): C3.Array<number>;

  /**
   * @return next n pseudo-random double values in the range
   */
  static doubles(n: number, min: number, max: number, maxInclusive?: boolean): C3.Array<number>;

  /**
   * @return next n pseudo-random double value in the range
   */
  doubles(n: number, range: Range<number | null>): C3.Array<number>;

  /**
   * @return next n pseudo-random double value in the range
   */
  static doubles(n: number, range: Range<number | null>): C3.Array<number>;

  /**
   * @return next pseudo-random double value in the gaussian distribution
   */
  gaussian(mean: number, stdev: number): number;

  /**
   * @return next pseudo-random double value in the gaussian distribution
   */
  static gaussian(mean: number, stdev: number): number;

  /**
   * @return next n pseudo-random double values in the gaussian distribution
   */
  gaussians(n: number, mean: number, stdev: number): C3.Array<number>;

  /**
   * @return next n pseudo-random double values in the gaussian distribution
   */
  static gaussians(n: number, mean: number, stdev: number): C3.Array<number>;

  /**
   * @return next pseudo-random string that is typically used as id value in the generated test data; note however that
   *         this method should not be used if globally unique id value is desired; please use {@link Uuid}
   */
  id(len?: number | null): string;

  /**
   * @return next pseudo-random string that is typically used as id value in the generated test data; note however that
   *         this method should not be used if globally unique id value is desired; please use {@link Uuid}
   */
  static id(len?: number | null): string;

  /**
   * @return next pseudo-random string that is typically used as name value in the generated test data
   */
  name(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used as name value in the generated test data
   */
  static name(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used an email address in the generated test data
   */
  email(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used an email address in the generated test data
   */
  static email(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used a URL in the generated test data
   */
  url(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used a URL in the generated test data
   */
  static url(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used a domain name in the generated test data
   */
  domain(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used a domain name in the generated test data
   */
  static domain(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used as summary field value in the generated test data
   */
  summary(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used as summary field value in the generated test data
   */
  static summary(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used as description field value in the generated test data
   */
  description(example?: boolean): string;

  /**
   * @return next pseudo-random string that is typically used as description field value in the generated test data
   */
  static description(example?: boolean): string;

  /**
   * @return next pseudo-random string
   */
  str(kind?: string | null, example?: boolean): string;

  /**
   * @return next pseudo-random string
   */
  static str(kind?: string | null, example?: boolean): string;

  /**
   * @return next pseudo-random string of a target length
   */
  str(len: number, kind?: string | null, example?: boolean): string;

  /**
   * @return next pseudo-random string of a target length
   */
  static str(len: number, kind?: string | null, example?: boolean): string;

  /**
   * @return next pseudo-random string of a length in a standard distribution
   */
  str(lenMean: number, lenStdev: number, kind: string, example?: boolean): string;

  /**
   * @return next pseudo-random string of a length in a standard distribution
   */
  static str(lenMean: number, lenStdev: number, kind: string, example?: boolean): string;

  /**
   * @return next pseudo-random string of a length in the given range
   */
  str(lenMin: number, lenMax: number, lenMaxInclusive: boolean, kind: string, example?: boolean): string;

  /**
   * @return next pseudo-random string of a length in the given range
   */
  static str(lenMin: number, lenMax: number, lenMaxInclusive: boolean, kind: string, example?: boolean): string;

  /**
   * @return random string that is guaranteed to not match provides #s param value
   */
  strNot(s: string | null, kind?: string | null, example?: boolean): string;

  /**
   * @return random string that is guaranteed to not match provides #s param value
   */
  static strNot(s: string | null, kind?: string | null, example?: boolean): string;

  /**
   * Build a string that replaces characters in the template with random characters of that class:
   *  - 'A' an ASCII upper-case letter ('A' - 'Z')
   *  - 'a' an ASCII lower-case letter ('a' - 'z')
   *  - '0' a digit ('0' - '9')
   *  - '1' a non-zero digit ('1' - '9')
   *  - 'X' an upper-case hexadecimal digit ('0' - 'F')
   *  - 'x' a lower-case hexadecimal digit ('0' - 'f')
   *  - "[]" specifies a list or range of characters ("[12345678]", "[1-8]")
   *  - "'" (single quote) preserves literal characters ("'0'.0")
   *  - "''" escapes a single quote
   *
   * Other characters will appear as-is in the resulting string.
   */
  strTemplate(template: string): string;

  /**
   * Build a string that replaces characters in the template with random characters of that class:
   *  - 'A' an ASCII upper-case letter ('A' - 'Z')
   *  - 'a' an ASCII lower-case letter ('a' - 'z')
   *  - '0' a digit ('0' - '9')
   *  - '1' a non-zero digit ('1' - '9')
   *  - 'X' an upper-case hexadecimal digit ('0' - 'F')
   *  - 'x' a lower-case hexadecimal digit ('0' - 'f')
   *  - "[]" specifies a list or range of characters ("[12345678]", "[1-8]")
   *  - "'" (single quote) preserves literal characters ("'0'.0")
   *  - "''" escapes a single quote
   *
   * Other characters will appear as-is in the resulting string.
   */
  static strTemplate(template: string): string;

  /**
   * @return next pseudo-random boolean value
   */
  bool(): boolean;

  /**
   * @return next pseudo-random boolean value
   */
  static bool(): boolean;

  /**
   * @return next pseudo-random boolean value with given true probability
   */
  bool(trueProbability?: number | null): boolean;

  /**
   * @return next pseudo-random boolean value with given true probability
   */
  static bool(trueProbability?: number | null): boolean;

  /**
   * @return next pseudo-random binary value
   */
  binary(): any;

  /**
   * @return next pseudo-random binary value
   */
  static binary(): any;

  /**
   * @return next pseudo-random byte value
   */
  byte(): number;

  /**
   * @return next pseudo-random byte value
   */
  static byte(): number;

  /**
   * @return next pseudo-random datetime value
   */
  dateTime(): DateTime;

  /**
   * @return next pseudo-random datetime value
   */
  static dateTime(): DateTime;

  /**
   * @return next pseudo-random datetime value
   */
  decimal(): number;

  /**
   * @return next pseudo-random datetime value
   */
  static decimal(): number;

  /**
   * @return next pseudo-random float value
   */
  float(): number;

  /**
   * @return next pseudo-random float value
   */
  static float(): number;

  /**
   * @return next pseudo-random json value
   */
  json(): any;

  /**
   * @return next pseudo-random json value
   */
  static json(): any;

  /**
   * @return next pseudo-random value of a given value type
   */
  value(vt: ValueType, maxDepth?: number | null): T | null;

  /**
   * @return next pseudo-random value of a given value type
   */
  static value(vt: ValueType, maxDepth?: number | null): T | null;

  /**
   * @return next pseudo-random value of a given primitive type
   */
  primitive(pt: PrimitiveType): T | null;

  /**
   * @return next pseudo-random value of a given primitive type
   */
  static primitive(pt: PrimitiveType): T | null;

  /**
   * @return next pseudo-random value of a given collection type and size
   */
  collection(ct: CollectionType, size?: number | null, maxDepth?: number | null): Collection<E> | null;

  /**
   * @return next pseudo-random value of a given collection type and size
   */
  static collection(ct: CollectionType, size?: number | null, maxDepth?: number | null): Collection<E> | null;

  /**
   * @return next pseudo-random value of a given reference type
   */
  reference(rt: ReferenceType): O | null;

  /**
   * @return next pseudo-random value of a given reference type
   */
  static reference(rt: ReferenceType): O | null;

  /**
   * @return next pseudo-random value of a given Obj sub-type
   */
  obj(t: Type): O | null;

  /**
   * @return next pseudo-random value of a given Obj sub-type
   */
  static obj(t: Type): O | null;

  /**
   * @return a random sample value for a collection
   */
  sample(c: Collection<T> | null): T | null;

  /**
   * @return a random sample value for a collection
   */
  static sample(c: Collection<T> | null): T | null;

  /**
   * @return a value of a randomly selected field of a given Obj
   */
  sampleField(o: Obj | null): Pair<string, T> | null;

  /**
   * @return a value of a randomly selected field of a given Obj
   */
  static sampleField(o: Obj | null): Pair<string, T> | null;

  /**
   * @return a key / element pair of a randomly selected key from the given map
   */
  sampleEntry(m: C3.Map<K | null, E | null> | null): Pair<K, E> | null;

  /**
   * @return a key / element pair of a randomly selected key from the given map
   */
  static sampleEntry(m: C3.Map<K | null, E | null> | null): Pair<K, E> | null;

  /**
   * @return random valid value type
   */
  valueType(): ValueType;

  /**
   * @return random valid value type
   */
  static valueType(): ValueType;

  /**
   * @return random primitive type
   */
  primitiveType(): ValueType;

  /**
   * @return random primitive type
   */
  static primitiveType(): ValueType;

  /**
   * @return random collection type
   */
  collectionType(): ValueType;

  /**
   * @return random collection type
   */
  static collectionType(): ValueType;

  /**
   * @return random and typical size value for a given value type
   */
  size(vt: ValueType): number;

  /**
   * @return random and typical size value for a given value type
   */
  static size(vt: ValueType): number;

  /**
   * @return random alphabetic string
   */
  alpha(len: number): string;

  /**
   * @return random alphabetic string
   */
  static alpha(len: number): string;

  /**
   * @return random alpha numeric string
   */
  alphanumeric(len: number): string;

  /**
   * @return random alpha numeric string
   */
  static alphanumeric(len: number): string;

  /**
   * Perturb the current seed and return the updated value.
   */
  static nextSeed(): number;

  /**
   * Perturb the specified seed and return the updated value.
   */
  static nextSeed(seed: number): number;

  /**
   * Perturb the specified seed and return the updated value.
   */
  static scrambleSeed(seed: number): number;
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
