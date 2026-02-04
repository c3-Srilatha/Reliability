// TypeScript definitions for the C3 type Obj

/**
 * The `Obj` type is the a default mixin type for most of the declared types; so for most of the actual types `isA(Obj)`
 * is true. In particular, Obj provides support for fields and ways to instantiate instances with fields.
 *
 * Note however type can be a {@link Value} - and in that case `isA(Obj)` will be `false`. Unlike `Obj` `Value`s don't
 * have fields. E.g. `type Array mixes Value` so it does not have methods like `fieldValue`.
 *
 * Each `Obj` is an instance of some C3 Type. Metadata regarding parent {@link Type} can be retrieved with the
 * #type method.
 *
 * Obj has built-in support for fields, which represent values set on the instance. Note that each field corresponds
 * to a {@link FieldType field type} defined on the type, but only fields which have values set will be present.
 * So "field types" represent metadata about possible fields and "fields" store the actual values on a single
 * instance of an Obj.
 *
 * For code that needs to examine Obj instances generically, going through the field interfaces (#fieldValue and
 * #eachFieldValue) provides a way to operate on objects of unknown type. However, most often the code understands the
 * types it expects to operate on and should use the direct accessors appropriate to the language.
 *
 * Java:
 * ```java
 * obj.location()
 * obj.fieldValue("location")
 * ```
 *
 * JavaScript/Python:
 * ```javascript
 * obj.location
 * obj.fieldValue("location")
 * ```
 *
 * Fields which are not set are generally null. The exception is for collections which are always instantiated as
 * "empty". This allows the code to avoid an if check for null and just chain down into the collection using functional
 * patterns. Note that all collections support the {@link Collection#isEmpty isEmpty} method if code wants to handle
 * collections with no elements specially.
 *
 * Note that some values are not "Objs" in the sense that they don't correspond to a type. For example, a primitive
 * integer (`int`) is *not* an Obj since all language bindings treat it as separate thing from an "Object".  If desired,
 * it can be boxed as as an Obj using {@link Boxed}. {@link Collection Collections} are also declared via types, but do
 * not mixin Obj.
 *
 * @see Field
 * @see Type
 * @see ReferenceType
 * @see Boxed
 *
 * @remarks this represents a value passed to a method that expects an instance of Obj
 */
declare interface IObj {
}

/**
 * The `Obj` type is the a default mixin type for most of the declared types; so for most of the actual types `isA(Obj)`
 * is true. In particular, Obj provides support for fields and ways to instantiate instances with fields.
 *
 * Note however type can be a {@link Value} - and in that case `isA(Obj)` will be `false`. Unlike `Obj` `Value`s don't
 * have fields. E.g. `type Array mixes Value` so it does not have methods like `fieldValue`.
 *
 * Each `Obj` is an instance of some C3 Type. Metadata regarding parent {@link Type} can be retrieved with the
 * #type method.
 *
 * Obj has built-in support for fields, which represent values set on the instance. Note that each field corresponds
 * to a {@link FieldType field type} defined on the type, but only fields which have values set will be present.
 * So "field types" represent metadata about possible fields and "fields" store the actual values on a single
 * instance of an Obj.
 *
 * For code that needs to examine Obj instances generically, going through the field interfaces (#fieldValue and
 * #eachFieldValue) provides a way to operate on objects of unknown type. However, most often the code understands the
 * types it expects to operate on and should use the direct accessors appropriate to the language.
 *
 * Java:
 * ```java
 * obj.location()
 * obj.fieldValue("location")
 * ```
 *
 * JavaScript/Python:
 * ```javascript
 * obj.location
 * obj.fieldValue("location")
 * ```
 *
 * Fields which are not set are generally null. The exception is for collections which are always instantiated as
 * "empty". This allows the code to avoid an if check for null and just chain down into the collection using functional
 * patterns. Note that all collections support the {@link Collection#isEmpty isEmpty} method if code wants to handle
 * collections with no elements specially.
 *
 * Note that some values are not "Objs" in the sense that they don't correspond to a type. For example, a primitive
 * integer (`int`) is *not* an Obj since all language bindings treat it as separate thing from an "Object".  If desired,
 * it can be boxed as as an Obj using {@link Boxed}. {@link Collection Collections} are also declared via types, but do
 * not mixin Obj.
 *
 * @see Field
 * @see Type
 * @see ReferenceType
 * @see Boxed
 *
 * @remarks this represents a made instance of Obj
 */
declare class Obj {

  /**
   * Convert the internal object representation to a JSON object.
   *
   * @return JSON object representation
   *
   * @see #fromJson
   */
  toJson(): any;

  toJson(include?: string | null, exclude?: string | null): any;

  toJson(include?: Include | null, exclude?: Exclude | null): any;

  /**
   * Convert the internal object representation to a _typed_ JSON object.
   * @param omitTopLevelType
   *        Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
   *        the outer level of the produced json.
   * @param runtime
   *        If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
   *        performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
   *
   *
   * @return JSON object representation
   *
   * @see #fromJson
   * @see #toJson
   * @see serdeser.c3doc
   * @see JsonType
   */
  toTypedJson(omitTopLevelType?: boolean, actionRequirement?: string | null): any;

  toTypedJson(include?: string | null, exclude?: string | null): any;

  toTypedJson(include?: Include | null, exclude?: Exclude | null): any;

  toJsonString(): string;

  /**
   * Convert the internal object representation to a serialized JSON string.
   *
   * @return JSON object as string
   */
  toJsonString(pretty: boolean): string;

  toTypedJsonString(): string;

  toTypedJsonString(pretty?: boolean, omitTopLevelType?: boolean): string;

  toJsString(): string;

  /**
   * Convert the internal object representation to a serialized JavaScript object literal.
   *
   * @return JavaScript object literal string
   */
  toJsString(withType: boolean): string;

  toXmlString(): string;

  /**
   * Convert the internal object representation to a serialized XML string.
   *
   * @return XML element as string
   *
   * @see #fromXmlString
   */
  toXmlString(withType: boolean): string;

  /**
   * Convert the internal object representation to a string serialized representation of the object.
   *
   * @return string serialized object representation
   */
  serialize(contentType: string, toUntyped?: boolean): string | null;

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
  static fromJson(json: any | null): Obj | null;

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
  static fromJsonString(json: string | null): Obj | null;

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
  static fromXmlString(xml: string | null): Obj | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Obj | null;

  /**
   * Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
   * there is a slight possibility that two objects with the same fingerprint will actually differ.
   *
   * The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
   * {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
   * unless the allIdentifiedRefFields option is specified.
   *
   * If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
   * However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
   *
   * @param allIdentifiedRefFields
   *           if `true`, fingerprint individual fields of persistable references, not just the `id`
   * @param trackRecursiveRefs
   *           if `true`, a set of referenced objects is maintained to avoid infinite recursion
   * @param traversedRefs
   *           only considered together with trackRecursiveRefs and if provided then all traversed references are
   *           checked against and added to it
   * @return integer fingerprint
   *
   * @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
   */
  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Measures retained memory by this instance.
   *
   * @param deep
   *        if true and this instance contains references to other objects also measures memory retained by those
   * @param allMeasured
   *        if set then will skip instances that are in the set and will add instances that where measured by this call
   * @return retained memory in bytes for this instances
   */
  retainedMemory(deep?: boolean, allMeasured?: SetBuilder<any> | null): number;

  /**
   * C3 Type of this instance.
   */
  type(): Type;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Obj;

  /**
   *  Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
   *  useful for redispatching **member** methods reimplemented on this type to a parent implementation:
   *  ```js
   *  function toString() {
   *    return this.super().toString() + ', x=' + this.x;
   *  }
   *  ```
   *
   *  ```py
   *  def toString(this):
   *     return this.super().toString() + ', x=' + this.x
   * ```
   *
   *  To redispatch **static** methods, see {@link Type#super}.
   *
   *  Note that this not the same as the language-specific `super` keyword because it works through the type system and
   *  supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
   *  globally.
   *
   *  If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
   *  This can be used to create a local implementation "around" the server implementation for additional caching or
   *  other local state management.
   *
   *  @param mixin if specified, this mixin is used instead or an error is thrown
   *  @return "super" calling proxy for this object
   *
   *  @see Type.super
   */
  super(mixin?: Type | null): any;

  /**
   * Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
   * This is the most convenient way to ask "is this type usable in a context requiring the other type?"
   *
   * @return true if this instance is of this type or any of its mixins
   */
  instanceOf(typeName: string): boolean;

  /**
   * Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
   * This is the most convenient way to ask "is this type usable in a context requiring the other type?"
   *
   * @return true if this instance is of this type or any of its mixins
   *
   * @see ValueType#isA
   */
  instanceOf(type: Type): boolean;

  /**
   * Whether all the fields of this instance are empty.
   */
  isEmptyObj(): boolean;

  /**
   * Whether the specified instance represents exactly the same object as this instance.
   */
  isSame(other: Obj | null): boolean;

  /**
   *  Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
   *  if the field value set the its default value by the constructor. A set field is never missing.
   *
   * @param field the field to check
   *
   * @return whether the specified field is set
   */
  isFieldSet(field: string): boolean;

  /**
   *  Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
   *  if the field value set the its default value by the constructor. A set field is never missing.
   *
   * @param field the field to check
   *
   * @return whether the specified field is set
   */
  isFieldSet(field: FieldType): boolean;

  /**
   *  Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
   *  should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
   * {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
   * A missing field is never set.
   *
   * @param field the field to check
   *
   * @return whether the specified field is missing
   */
  isFieldMissing(field: string): boolean;

  /**
   *  Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
   *  should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
   * {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
   * A missing field is never set.
   *
   * @param field the field to check
   *
   * @return whether the specified field is missing
   */
  isFieldMissing(field: FieldType): boolean;

  /**
   * Returns value of the given field.
   *
   * @param field
   *           Field to return the value for
   *        defaultToEmpty
   *           will return default empty value if field is missing
   */
  fieldValue(field: string | null, defaultToEmpty?: boolean): T | null;

  /**
   * Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
   * the obj.
   *
   * @param field
   *           Field to return the value for
   *        defaultToEmpty
   *           will return default empty value if field is missing
   * @return value for the given field
   */
  fieldValue(field: FieldType | null, defaultToEmpty?: boolean): T | null;

  /**
   * Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
   */
  fieldValues(): C3.Array<FieldValue | null>;

  /**
   * Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
   * Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
   * #dataFieldTypes
   */
  fieldValuesByOrdinal(skipTrailingEmpty?: boolean): C3.Array<any>;

  /**
   * Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
   */
  fieldValuesByFieldType(): C3.Map<FieldType | null, any>;

  /**
   * Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
   */
  fieldValuesByFieldName(): C3.Map<string | null, any>;

  /**
   * Returns all data field names including those whose values are empty. Array is ordered by
   * field ordinal.
   */
  fieldNames(): C3.Array<string | null>;

  /**
   * @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
   * field ordinal.
   */
  unsetFieldNames(): C3.Array<string | null>;

  /**
   * @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
   * field ordinal.
   */
  missingFieldNames(): C3.Array<string | null>;

  /**
   * Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
   *
   * @param ordinal
   *         Integer ordinal of the field in the parent type
   * @return value of field at ordinal
   */
  at(ordinal: number): T | null;

  /**
   * Return value for the given serialized expression
   *
   * @param expr
   *         Serialized expression to obtain the value in the given Obj
   * @param failIfNotValid
   *         If set, fails if not a valid expression
   * @return value obtained as a result of expression evaluation
   */
  at(expr: string | null, failIfNotValid?: boolean): T | null;

  /**
   * Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
   * `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
   * that it also handles `null`. If path contains any collections then only first element will be traversed,
   * unless the collection index is specified in the path.
   *
   * If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
   *
   * @param fieldPath
   *           field names separated by dots
   * @param failIfNotFound
   *           if true, an error will be thrown if the any of the field types aren't defined
   * @param context
   *           if an error is thrown, the context returned by calling the lambda will be incorporated
   * @return the field or null
   */
  fieldValueAtPath(fieldPath: string | null, failIfNotFound?: boolean, context?: λSupplier<string | null> | null): T | null;

  /**
   * Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
   * traversals, unless the collection index is specified in the path.
   *
   * @param fieldPath
   *           field names separated by dots
   * @param failIfNotFound
   *           if true, an error will be thrown if the any of the field types aren't defined
   * @param context
   *           if an error is thrown, the context returned by calling the lambda will be incorporated
   * @return fields as a flat list
   *
   * @see #fieldValueAtPath
   */
  fieldValuesAtPath(fieldPath: string | null, failIfNotFound?: boolean, context?: λSupplier<string | null> | null): C3.Array<T | null>;

  /**
   * Perform an action for each non-empty field of this object.
   *
   * @param action
   *           lambda to apply
   */
  eachFieldValue(action: λBiConsumer<FieldType, any>): void;

  /**
   * Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
   *
   * @param spec
   *           which fields to include
   * @param action
   *           lambda to apply
   */
  eachFieldValue(spec: ValueSpec, action: λBiConsumer<FieldType, any>): void;

  /**
   * Perform an action for each {@link isFieldSet set} field of this object.
   *
   * @param action
   *           lambda to apply
   */
  eachSetFieldValue(action: λBiConsumer<FieldType, any>): void;

  /**
   * Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
   * on provided `spec`.
   *
   * @param spec
   *           which fields to include
   * @param action
   *           lambda to apply; stop if this `action` returns `false
   * @return `true` if iteration was not aborted by lambda i.e. it saw all field values
   */
  eachFieldValueWhile(spec: ValueSpec | null, action: λBiPredicate<FieldType, any>): boolean;

  /**
   * Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
   * the field value if non-null and for collections of Obj, this means each element in the collection.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   */
  eachRef(action: λBiConsumer<FieldType, Obj>): void;

  /**
   * Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
   * the field value if non-null and for collections of Obj, this means each element in the collection.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   */
  eachRef(includeEmpty: boolean, action: λBiConsumer<FieldType, Obj>): void;

  /**
   * Execute the specified lambda against each referenced Obj instance in this type while processing action returns
   * `true`.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param action
   *           function to be executed for each pair of field type and Obj instance; stops processing if return `false`
   * @return `true` if iteration was not aborted by lambda i.e. it saw all refs
   */
  eachRefWhile(includeEmpty: boolean, action: λBiPredicate<FieldType, Obj>): boolean;

  /**
   * Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
   */
  eachRefRecursive(includeEmpty: boolean, action: λBiConsumer<FieldPath, Obj>): void;

  /**
   * Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
   * processing action returns `true`.
   */
  eachRefRecursiveWhile(includeEmpty: boolean, action: λBiPredicate<FieldPath, Obj>): boolean;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Obj;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Obj;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Obj | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Obj | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Obj;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Obj;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Obj;

  /**
   * Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
   * argument is a result of previous application. Initial value of `accumulator` will be `null`.
   *
   * This function is useful for calculating aggregate values based on all current non empty field values.
   * Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
   * e.g
   * ```
   * o = {a:1, b:2, c:0}
   * o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
   *
   * o = {a: {x:1, y:2}, b: {x:10, z:2}}
   * o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
   * ```
   */
  foldFieldValues(folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  /**
   * Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
   * argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
   *
   * This function is useful for calculating aggregate values based on all current non empty field values.
   * Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
   * e.g
   * ```
   * o = {a:1, b:2, c:0}
   * o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
   *
   * o = {a: {x:1, y:2}, b: {x:10, z:2}}
   * o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
   * ```
   */
  foldFieldValues(initial?: T | null, folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  /**
   * Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
   * result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
   *
   * This function is useful for calculating aggregate values based on all field values.
   * Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
   * e.g
   * ```
   * o = {a:1, b:2, c:0}
   * o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
   *
   * o = {a: {x:1, y:2}, b: {x:10, z:2}}
   * o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
   * ```
   */
  foldFieldValues(initial?: T | null, spec: ValueSpec, folder: λTriFunction<FieldType, any, T | null, T | null>): T | null;

  /**
   * Evaluates given projection expression over this instance.
   */
  evalProjection(projection: string, resultType?: ValueType | null, bindings?: C3.Map<string | null, any>, options?: Expr.CompileOptions | null): any;

  /**
   * Evaluates given projection over this instance and returns results as json.
   */
  evalProjection(projection: any, bindings?: C3.Map<string | null, any>, options?: Expr.CompileOptions | null): any | null;

  /**
   * Evaluates given projection over this instance and returns results as instance of the new Obj.
   */
  evalProjection(projection: any, resultType: Type, bindings?: C3.Map<string | null, any>, options?: Expr.CompileOptions | null): Obj | null;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Obj;

  /**
   * Validate that the Obj fields are set according to all the required rules.
   */
  validateObj(spec: ValidateObjSpec): ValidateObjResult;

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
  withField(field: string, value: any, doNotConvert?: boolean): Obj;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Obj;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Obj;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Obj;

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
  withoutFieldAtPath(path: string): Obj;

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
  withoutField(field: string | null): Obj;

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
  withoutField(field: FieldType | null): Obj;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Obj;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Obj;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Obj;

  /**
   * @return a list of the secret field paths that were found to be set on this Obj.
   */
  secretFieldsSet(): C3.Array<string | null>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Obj;

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
  defaultField(field: string): Obj;

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
  defaultField(field: FieldType): Obj;

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
  unsetField(field: string): Obj;

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
  unsetField(field: FieldType): Obj;

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
  removeField(field: string): Obj;

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
  removeField(field: FieldType): Obj;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Obj;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Obj;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Obj;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Obj;

  /**
   * Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
   * Fields that non null in only one of this and other will be in the resulting Obj without change.
   */
  mergeAndExpandObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): R | null;

  mergeJson(json: any | null): Obj;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Obj;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Obj;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Obj | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Obj | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Obj | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Obj | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Obj | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Obj | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Obj | null> | null;

  static myReferenceType(): ReferenceType;

  static myMapTypeOf(keyType: ValueType): MapType;

  static myMapType(): MapType;

  static myArrayType(): ArrayType;

  static mySetType(): SetType;

  static myStreamType(): StreamType;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Obj | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Obj | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Obj;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Obj;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Obj;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Obj;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Obj;

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
  static make(fields: any, withDefaults?: boolean): Obj;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Obj;

  /**
   * Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
   * converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
   * could be costly if types have different value types for same fields.
   *
   * @param type
   *         Type of new obj to return
   * @return new obj of the requested type with all fields present in the original obj that are defined in the new type
   *         converted and copied to it
   */
  remakeAs(type: Type): O;

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
  afterMake(): Obj;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Obj;

  /**
   * Represent the current obj instance as {@link Data}
   */
  toData(): Data | null;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Obj>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Obj;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}

interface λPredicate<T> {
  (t: T): boolean
}
