// TypeScript definitions for the C3 type Method

/**
 * A method is a function that is associated with a type and has a name and implementation as an "action".  Type
 * actions can be called directly within any supported language and through the REST API.
 *
 * Method can be overloaded - in which case dispatcher will lookup implementation based on input parameter value types.
 *
 * Methods are declared on a type in the same way as {@link FieldType fields}, except that the value to the right of
 * the colon is a {@link MethodType function}.
 * ```
 * type Cat {
 *   purr:  member function()
 *   meow:  member function(loudness: int)
 *   stray: function(): Cat
 * }
 * ```
 *
 * The first two methods above are members, which means they are called on an instance of the Cat type. The last one is
 * static, which means it is called on the Cat type itself.
 * ```
 * Cat.stray().meow(5)
 * ```
 *
 * See {@link MethodType} for more information about function value types. See {@link methods.c3doc Method Declaration}
 * for more information on method declaration and the rules around overriding and overloading methods.
 *
 * The implementation may be transportable to the client, in which case its (scripting language) implementation is
 * carried along with the type, merging mixins and remixes.
 *
 * Methods may be marked with options:
 *  - `abstract` assumed to be implemented by any sub-type (unless re-declared abstract)
 *  - `optional` not implemented unless re-declared in a sub-type
 *  - `final` may not be re-declared in sub-types
 *  - `cached` result is expensive to compute and a pure function and the value may be cached
 *  - `stateful` cannot be cached; for example cannot be invoked over HTTP via the GET method
 *  - `private` method should not be used outside its declaring package
 *  - `member` method is called on an instance, rather than the type itself ("static")
 *
 * @see MethodType
 * @see Type
 *
 * @remarks this represents a value passed to a method that expects an instance of Method
 */
declare interface IMethod {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  declaredPkgPath?: string | null;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  declaredSrcLine?: number | null;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  declaredSrcCharInLine?: number | null;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  pkg: IPkg;

  /**
   * SDK json representing instance of this type
   */
  json?: any;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  annotationsJson?: any | null;

  /**
   * This field is not supported on **Method**, but is available on the individual {@link MethodType} instances
   * accessible through #overloads. Merged documentation (all overloads) is available through the #docParsed and
   * #docText methods.
   *
   * @see #overloadsWithDoc
   */
  doc?: string | null;

  docSingleLine?: boolean;

  /**
   * Name of the method.
   */
  name: string;
}

/**
 * A method is a function that is associated with a type and has a name and implementation as an "action".  Type
 * actions can be called directly within any supported language and through the REST API.
 *
 * Method can be overloaded - in which case dispatcher will lookup implementation based on input parameter value types.
 *
 * Methods are declared on a type in the same way as {@link FieldType fields}, except that the value to the right of
 * the colon is a {@link MethodType function}.
 * ```
 * type Cat {
 *   purr:  member function()
 *   meow:  member function(loudness: int)
 *   stray: function(): Cat
 * }
 * ```
 *
 * The first two methods above are members, which means they are called on an instance of the Cat type. The last one is
 * static, which means it is called on the Cat type itself.
 * ```
 * Cat.stray().meow(5)
 * ```
 *
 * See {@link MethodType} for more information about function value types. See {@link methods.c3doc Method Declaration}
 * for more information on method declaration and the rules around overriding and overloading methods.
 *
 * The implementation may be transportable to the client, in which case its (scripting language) implementation is
 * carried along with the type, merging mixins and remixes.
 *
 * Methods may be marked with options:
 *  - `abstract` assumed to be implemented by any sub-type (unless re-declared abstract)
 *  - `optional` not implemented unless re-declared in a sub-type
 *  - `final` may not be re-declared in sub-types
 *  - `cached` result is expensive to compute and a pure function and the value may be cached
 *  - `stateful` cannot be cached; for example cannot be invoked over HTTP via the GET method
 *  - `private` method should not be used outside its declaring package
 *  - `member` method is called on an instance, rather than the type itself ("static")
 *
 * @see MethodType
 * @see Type
 *
 * @remarks this represents a made instance of Method
 */
declare class Method extends Obj {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): Method;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): Method;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): Method;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  readonly pkg: Pkg;
  withPkg(pkg: IPkg): Method;

  /**
   * SDK json representing instance of this type
   */
  readonly json?: any;
  withJson(json: any): Method;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  readonly annotationsJson?: any | null;
  withAnnotationsJson(annotationsJson: any | null): Method;

  /**
   * This field is not supported on **Method**, but is available on the individual {@link MethodType} instances
   * accessible through #overloads. Merged documentation (all overloads) is available through the #docParsed and
   * #docText methods.
   *
   * @see #overloadsWithDoc
   */
  readonly doc?: string | null;
  withDoc(doc: string | null): Method;

  readonly docSingleLine?: boolean;
  withDocSingleLine(docSingleLine: boolean): Method;

  /**
   * Name of the method.
   */
  readonly name: string;
  withName(name: string): Method;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Method;

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
  static fromJson(json: any | null): Method | null;

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
  static fromJsonString(json: string | null): Method | null;

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
  static fromXmlString(xml: string | null): Method | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Method | null;

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
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Method;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Method;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Method | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Method | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Method;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Method;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Method;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Method;

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
  withField(field: string, value: any, doNotConvert?: boolean): Method;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Method;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Method;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Method;

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
  withoutFieldAtPath(path: string): Method;

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
  withoutField(field: string | null): Method;

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
  withoutField(field: FieldType | null): Method;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Method;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Method;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Method;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Method;

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
  defaultField(field: string): Method;

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
  defaultField(field: FieldType): Method;

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
  unsetField(field: string): Method;

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
  unsetField(field: FieldType): Method;

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
  removeField(field: string): Method;

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
  removeField(field: FieldType): Method;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Method;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Method;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Method;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Method;

  mergeJson(json: any | null): Method;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Method;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Method;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Method | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Method | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Method | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Method | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Method | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Method | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Method | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Method | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Method | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Method;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Method;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Method;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Method;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Method;

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
  static make(fields: any, withDefaults?: boolean): Method;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Method;

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
  afterMake(): Method;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Method;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Method>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Method;

  /**
   * The metadata path where the parent type's declaration file is located:
   * Format: /<package>/[gen|test]/src/<pkg-sub-path>/<name>.c3typ
   * E.g. for the given package folder structure:
   * ```
   * myRepo
   *  |
   *  -  myPkg
   *      |
   *      -  src
   *          |
   *          - folder1
   *              |
   *              - folder2
   *                  |
   *                  - SomeType1.c3typ
   *          - SomeType3.c3typ
   *      -  test
   *          |
   *           - src
   *              |
   *              - SomeType2.c3typ
   *      -  gen
   *          |
   *           - src
   *              |
   *              - SomeType4.c3typ
   * ```
   * For SomeType1.c3typ will return -> /myPkg/src/folder1/folder2/SomeType1.c3typ
   * For SomeType3.c3typ will return -> /myPkg/src/SomeType3.c3typ
   * For SomeType2.c3typ will return -> /myPkg/test/src/SomeType2.c3typ
   * For SomeType4.c3typ will return -> /myPkg/gen/src/SomeType4.c3typ
   *
   * @see #package
   * @see #pkgSubPath
   */
  get pkgPath(): Pkg.Path;

  /**
   * The name of the package where this type was declared.
   *
   * For example, if package "app", depends on "industry", which depends on "foundation", provisioning app will bring
   * in the types in the industry and foundation packages as well. This means that the `package` of the Location
   * type will be foundation, even if it gets remixed by industry (or even app).
   *
   * @see #pkg
   * @see #pkgPath
   * @see #pkgSubPath
   */
  get package(): string;

  /**
   * The version of the package where this type was declared.
   */
  get packageVersionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Dot (".") separated relative path of the folder where this type's declaration file is located in the package
   * E.g. for the given structure
   * ```
   * myRepo
   *  |
   *  -  myPkg
   *      |
   *      -  src
   *          |
   *          - folder1
   *              |
   *              - folder2
   *                  |
   *                  - SomeType1.c3typ
   *          - SomeType3.c3typ
   *      -  test
   *          |
   *           - src
   *              |
   *              - SomeType2.c3typ
   *      -  gen
   *          |
   *           - src
   *              |
   *              - SomeType4.c3typ
   * ```
   * For SomeType1.c3typ will return -> folder1/folder2
   * For SomeType3.c3typ will return -> "" (empty string)
   * For SomeType3.c3typ will return -> "" (empty string)
   * For SomeType4.c3typ will return -> "" (empty string)
   *
   * @see #pkgPath
   * @see #package
   */
  get pkgSubPath(): string;

  /**
   * Pkg where this type was declared, note could be different then #pkg.
   */
  get declaredPkg(): Pkg;

  get metadataPath(): string | null;

  /**
   * Convert the internal object representation of this instance to SdkJson for an efficient loading of type at
   * execution time.
   */
  toTypesysJson(): Typesys.Json;

  /**
   * @return package for built-in Type System; this could be different from #pkg() when package is loaded from a disk
   *         for code gen
   */
  typesys(): Pkg;

  /**
   * @return an instance with the #declaredSrcLine and #declaredSrcCharInLine fields unset.
   */
  withoutDeclaredSrcPos(recursive?: boolean): Method;

  /**
   * Override this method to return the merged set of annotations from itself and its hierarchy
   * E.g.
   * ```type
   *   @config(folder="x")
   *   type A {
   *   }
   *   @config(secret=true)
   *   type B mixes A
   * ```
   * => return config(secret=true, folder="x") for type B
   * If not overridden, by default this returns #annotationJson
   */
  mergedAnnotationsJson(): any | null;

  /**
   * The declared annotations for this metadata element.
   */
  declaredAnnotations(): Annotations;

  /**
   * The annotations for this metadata element.
   */
  annotations(): Annotations;

  /**
   * Whether this metadata element has any annotation.
   */
  hasAnnotations(): boolean;

  /**
   * Whether this metadata element has annotation with provided name.
   */
  hasAnnotation(ann: string | null): boolean;

  /**
   * Whether this metadata element has annotation field value.
   */
  hasAnnotationValue(ann: string | null, annField: string | null): boolean;

  /**
   * @return annotation with provided name
   */
  annotation(ann: string | null, failIfMissing?: boolean): Annotation | null;

  /**
   * @return annotation value for provided annotation name and annotation field
   */
  annotationValue(ann: string | null, annField: string | null): any;

  /**
   * Add an annotation to the given metadata
   */
  withAnnotation(ann: Annotation): Method;

  /**
   * Add an annotation to the given metadata
   * @param ann
   *         annotation to add
   * @param annField
   *         which field on the annotation needs to be set
   * @param value
   *         value for the field
   */
  withAnnotation(ann: string, annField?: string | null, value?: any): Method;

  /**
   * Whether the specified instances have same annotations.
   */
  static haveSameAnnotations(a1: Annotatable | null, a2: Annotatable): boolean;

  /**
   * Return the JSON for annotations that can be inherited by children of this element of metadata. Annotations are
   * normally inherited, but ones marked with {@link Annotation#noInherit} will not be.
   */
  inheritableAnnotationsJson(): any | null;

  /**
   * Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
   * null may be returned. The implementation must be available within the browser (typically `js-client`).
   */
  renderer(): HtmlRenderer | null;

  /**
   * Documentation parsing will produce a structured documentation object from the attributes of the metadata along
   * with the contents of the documentation comment. This can be examined and also rendered for display to the user
   * using {@link DocumentationRenderer}.
   *
   * If this is not one of the known metadata types, nor has any documentation associated, the method returns null.
   * Otherwise, it will build an object that contains as much as is possible to assemble about the piece of
   * structure, both from the metadata itself and from the text in #docText.
   *
   * @return parsed documentation object
   *
   * @see DocumentationParser
   */
  docParsed(spec?: DocumentationParserSpec | null): MergedDocumentation | null | MethodTypeDocumentation | null;

  /**
   * Rendered markdown document for the Documentable instance.
   */
  docMarkdown(): string | null;

  /**
   * Rendered plain text for the Documentable instance.
   */
  docText(): string | null;

  /**
   * Whether the specified instances have same documentation.
   */
  static haveSameDoc(d1: Documentable | null, d2: Documentable): boolean;

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

  cachedFingerprint(): number;

  /**
   * @return identifier that can safely be used in the code for provided language
   */
  identifier(lang?: string | null): string;

  /**
   * String-based representation of instance of this type.
   */
  toString(): string | null;

  /**
   * Reference value of this instance.
   */
  toRef(): Typesys.Ref;

  /**
   * Reference string serialized value of the reference to this instance.
   */
  toRefString(): string;

  /**
   * Construct instance from a reference.
   */
  static fromRef(ref: Obj, failIfMissing?: boolean): Method;

  /**
   * C3 type for the reference value.
   */
  static refType(): Type | null;

  /**
   * Declaration of this field or method in the parent type.
   */
  declared(): C3.Array<DeclaredFieldType | null>;

  /**
   * @return true if this field or method is inherited form one of mixin types. Note that it will be `true` even for
   *         overrides.
   *
   * @see isOverridden
   */
  isInherited(): boolean;

  /**
   * @return true if this field or method is inherited form one of mixin types and also this type is overriding it by
   *         some means e.g. implementing abstract method or specializing value type of the data field.
   *
   * @see isOverridden
   */
  isOverridden(): boolean;

  /**
   * @return true if this field or method is inherited form more then one of different mixin types.
   *
   * @see isInherited
   * @see isOverridden
   */
  isMultiBase(): boolean;

  /**
   * Parent type this field type or method belongs to.
   */
  parentType(): Type;

  /**
   * Parent type this field type or method belongs to.
   */
  get parentTypeMeta(): TypeMeta;

  /**
   * @return serialization name of this field type.
   *
   * @see Amm.Ser#name
   */
  serName(): string;

  /**
   * @return a string key in the format of '<type proto name>#<field or method name>'
   */
  get callStackKey(): string;

  /**
   * @return sufficiently built field or method or `null`
   */
  build(): Method | null;

  /**
   * Corresponding mixin type methods if this is an override.
   */
  mixins(): C3.Array<Method | null>;

  /**
   * The list of overload function signatures individually declared. These may come from the same or a mixin type.
   * This list should be used for documentation and argument validation if the method `isOverloaded()`.
   *
   * ```type
   * type Math {
   *   min: function(values: int ...): int
   *   min: function(values: double ...): double
   * }
   * ```
   *
   * The primary signature ({@link FunctionType#arguments} and {@link FunctionType#returnValueType}) will be a
   * "net" signature that can accommodate all forms of the overload. For example, Math.min above would have a
   * net signature of `(values: any ...): any`.
   *
   * However, when calling the function, the overload is picked based on the actual arguments passed, which means that
   * validation will be performed and if there is no matching overload for the actuals, an error will be raised.
   */
  overloads(): C3.Array<MethodType | null>;

  /**
   * The list of overload function signatures individually declared with specified annotation. These may come from the
   * same or a mixin type.
   * This list should be used for documentation and argument validation if the method `isOverloaded()`.
   *
   * @see #overloads
   */
  overloadsWithAnn(ann: string): C3.Array<MethodType | null>;

  /**
   * If parent type is narrowed generic type then corresponding method from it - otherwise this.
   */
  prototype(): Method;

  /**
   * Whether this is an overloaded method, which has multiple calling signatures.
   */
  isOverloaded(): boolean;

  /**
   * Whether this method has implementations for every overload.
   */
  isImplemented(): boolean;

  /**
   * Whether this method must be called on an instance.
   */
  isMember(): boolean;

  /**
   * Whether this method should be called on a type instead of an instance.
   */
  isStatic(): boolean;

  /**
   * Whether this is a "property method," declared using the `property()` syntax.
   *
   * @see MethodType#property
   */
  isProperty(): boolean;

  /**
   * Whether this is a "HTTP handler method," i.e. has a single parameter of type {@link HttpRequest} and any return
   */
  isHttpHandler(): boolean;

  /**
   * Whether all overloads are marked `cached`.
   */
  hasAllCached(): boolean;

  /**
   * Whether any overloads are declared, but not implemented, on its type.
   */
  hasAnyAbstract(): boolean;

  /**
   * Whether any overloads in this method does not have to be implemented by non abstract sub-type.
   */
  hasAnyOptional(): boolean;

  /**
   * Whether some of the overloads can be re-declared on a type that mixes its type.
   */
  hasAnyFinal(): boolean;

  /**
   * Whether this method should execute inline when {@link #shouldStayInEngine staying in engine}.
   * See {@link MethodType#inline} for documentation describing the semantics of inline.
   * A `Method` is inline if any of its {@link #overloads} are {@link MethodType#inline inline} or its
   * {@link #parentType} is {@link TypeMeta#isInline inline}.
   */
  isInline(): boolean;

  /**
   * Whether some overloads must be called on an instance.
   */
  hasAnyMember(): boolean;

  /**
   * Whether some overload should be called on a type instead of instance.
   */
  hasAnyStatic(): boolean;

  /**
   * Whether this method has any implementation for any of the overloads.
   */
  hasAnyImplementation(): boolean;

  /**
   * Whether this method has any Java implementation for any of the overloads.
   */
  hasAnyJavaImplementation(): boolean;

  /**
   * Whether this method can be invoked with keyword arguments.
   */
  hasKwargs(): boolean;

  /**
   * If this method can be invoked with keyword arguments then parameter declaration for those args.
   */
  kwargsParam(): FunctionParam | null;

  /**
   * If this method can be invoked with keyword arguments then parameter declaration for those args.
   * @return index of the only kwargs parameter, typically a Spec.
   */
  get kwargsParamIndex(): number | null;

  /**
   * Get the type(s) on which this method (any overload) is declared and is not abstract nor optional. If only an
   * unimplemented method is declared, return empty array.
   *
   * Note that if the method is overloaded then the return [Type] could have more then one element; otherwise it will only have
   * one element.
   *
   * @see MethodType#implementedOn
   */
  implementedOn(actionEngine?: string | null): C3.Array<Type | null>;

  /**
   * Get the type meta(s) on which this method (any overload) is declared and is not abstract nor optional. If only an
   * unimplemented method is declared, return empty array.
   *
   * Note that if the method is overloaded then the return [Type] could have more then one element; otherwise it will only have
   * one element.
   *
   * @see #implementedOn
   */
  implementedOnMeta(actionEngine?: string | null): C3.Array<TypeMeta | null>;

  /**
   * Get the nearest type on which this method (any overload) is declared and is not abstract nor optional. If only an
   * unimplemented method is declared, return null. "Nearest" is this type itself then mixins in canonical order.
   *
   * @see #implementedOn
   */
  nearestImplementedOn(engine?: string | null): Type | null;

  /**
   * Get whether or not the method can be executed in the given engine based on the action claims. If only
   * an unimplemented method is declared, return false.
   *
   * Note that this returns true only if all overloads are runnable in the specified engine.
   *
   * @see #implementedOn
   * @see MethodType#shouldStayInEngine
   * @see Ann.Call#stayInEngine
   */
  shouldStayInEngine(actionEngine: string): boolean;

  /**
   * Get whether or not the caller can safely cache the return value of this method. This is true if all overloads are
   * explicitly marked with `cached` or none are marked `stateful`, and the method is not on a {@link Mutable} Obj.
   *
   * Note that if the method takes arguments, caching it requires comparing the argument values, including understanding
   * multiple overloads.
   *
   * @see MethodType#cached
   * @see MethodType#stateful
   * @see MethodType#cachedKey
   * @see MethodType#cachedFailIfMissing
   * @see MethodType#cachedReturnNullIfNotCached
   */
  canCacheReturn(): boolean;

  /**
   * Whether this is a cached Method. Cached methods are only called once per instance and results cached on an
   * instance. A Method is cached if it {@link canCacheReturn can cache} and all of its {@link overloads} are
   * {@link MethodType#cached cached}.
   */
  isCached(): boolean;

  /**
   * If this is a cached method, on what is the value keyed. If this method returns null, this means the value is
   * cached once per instance, otherwise it is cached on the specified value:
   *  - `arg` the cache key is the first argument
   *
   * For the cache key, primitive values and Objs that mixin StringSerializable are converted to strings. Other Obj
   * values must be identifiably keyed by strings (mixing in {@link WithCacheKey} or {@link WithKey}).
   *
   * @see #cached
   */
  cachedKey(): string | null;

  /**
   * Determine if this cached method has a "failIfMissing" parameter which needs local support when generating code
   * for a cached method.
   *
   * @see #cached
   */
  cachedFailIfMissing(): boolean;

  /**
   * Determine if this cached method has a "returnNullIfNotCached" parameter which needs local support when generating
   * code for a cached method.
   *
   * @see #cached
   */
  cachedReturnNullIfNotCached(): boolean;

  /**
   * Find the overload that most closely matches the specified argument value types. If the argument types are not
   * compatible with any overload, an error is thrown if failIfNoMatch is true or null otherwise.
   *
   * If multiple overloads match, the best match is returned. Best match is identified by scoring argument value type
   * matches based on closeness of match as defined by this order:
   * * ValueType#isSame
   * * ValueType#isAssignableFrom
   * * ValueType#isConvertibleFrom
   *
   * @param member if true, only match member methods; if false, only match static methods
   * @param types actual argument value types to be passed; should not include implicit `this` argument type
   * @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
   * @return overload signature or null
   */
  findOverloadForArgTypes(member: boolean, types?: C3.Array<ValueType | null>, failIfNoMatch?: boolean, context?: λSupplier<string | null> | null): MethodType | null;

  /**
   * Find the overload that most closely matches the specified argument Java classes. If the argument types are not
   * compatible with any overload, an error is thrown if failIfNoMatch is true or null otherwise.
   *
   * If multiple overloads match, the best match is returned. Best match is identified by scoring argument value type
   * matches based on closeness of match as defined by this order:
   * * ValueType#isSame
   * * ValueType#isAssignableFrom
   * * ValueType#isConvertibleFrom
   *
   * Uses ValueType#guessTypeFromJavaClass to convert Java classes to ValueTypes.
   *
   * @param member if true, only match member methods; if false, only match static methods
   * @param classes actual argument Java classes; should not include implicit `this` argument type
   * @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
   * @return overload signature or null
   */
  findOverloadForJavaClasses(member: boolean, classes?: C3.Array<any>, failIfNoMatch?: boolean, context?: λSupplier<string | null> | null): MethodType | null;

  /**
   * Returns a hash for the Java **classes** of the supplied args (i.e. not the args themselves).
   * This can be used to cache a MethodType (and/or MethodThunk) overload so that one of the `findOverloadForArg*`
   * methods does not have to be called before every invocation of a given Method if the args hash is the same.
   *
   * @param member whether this hash is for a member or static method
   * @param args actual argument values whose classes will be hashed
   *
   * @return hash for the args
   */
  static argsJavaClassesHash(member: boolean, ...args: any[]): number;

  /**
   * Find the overload that most closely matches the specified argument values. If the argument values are not
   * compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
   *
   * Unlike #findOverloadForArgsMap, this method requires the values to be in order as declared by at least one
   * of the overloads.
   *
   * If multiple overloads match, the best match is returned. Best match is identified by scoring argument value type
   * matches based on closeness of match as defined by this order:
   * * ValueType#isAssignableValue
   * * ValueType#isConvertibleValue
   *
   * If an argument is null, then match score for it is less then ValueType#isConvertibleValue.
   *
   * @param thsArg the `this` argument
   * @param args actual argument values to be passed; should not include implicit `this` argument
   * @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
   * @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
   *         the matched overload; i.e. method can be invoked without additional value conversion
   *
   * @see findOverloadForArgsMap
   */
  findOverloadForArgs(thsArg?: any, args?: C3.Array<any>, failIfNoMatch?: boolean, context?: λSupplier<string | null> | null): Triple<MethodType | null, any, C3.Array<any>> | null;

  /**
   * Find the overload that most closely matches the specified argument names/values. If the arguments are not
   * compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
   *
   * Unlike #findOverloadForArgs, this method allows the arguments to be specified in any order and null values are
   * generally not specified at all.
   *
   * @param kwargs actual argument name-to-value map to be passed including possible implicit `this` argument.
   * @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
   * @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
   *         the matched overload; i.e. method can be invoked without additional value conversion
   *
   * @see findOverloadForArgs
   */
  findOverloadForArgsMap(kwargs?: C3.Map<string | null, any>, failIfNoMatch?: boolean, context?: λSupplier<string | null> | null): Triple<MethodType | null, any, C3.Array<any>> | null;

  /**
   * Find the overload that most closely matches the specified argument names/values. If the arguments are not
   * compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
   *
   * @param thisArg explicit `this` argument
   * @param args positional arguments to be passed; should not include implicit `this` argument
   * @param kwargs keyword arguments to be passed; should not include implicit `this` argument.
   * @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
   * @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
   *         the matched overload; i.e. method can be invoked without additional value conversion
   *
   * @see findOverloadForArgs
   * @see findOverloadForArgsMap
   */
  findOverloadForArgsMix(thisArg?: any, args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>, failIfNoMatch?: boolean, context?: λSupplier<string | null> | null): Triple<MethodType | null, any, C3.Array<any>> | null;

  /**
   * Find the overload that most closely matches the specified argument names/values. If the arguments are not
   * compatible with any overload, an error is thrown if failIfNoMatch is true and null returned otherwise.
   *
   * @param args can be only one of: null, json array or json object. If #args is an array then first element is `this`
   *        for member methods or `null` for statics. If #args is json map, then it should contain name-values of args
   *        including possible implicit `this` argument.
   * @param missingArgs array of booleans to indicate if the corresponding argument is missing in the args.
   * @param failIfNoMatch if true, throw an exception if no match is found; if false, return null
   * @return Triple of (selected overload index, converted `this`, converted arguments) that match parameter types of
   *         the matched overload; i.e. method can be invoked without additional value conversion
   *
   * @see findOverloadForArgs
   * @see findOverloadForArgsMap
   */
  findOverloadForArgsJson(args?: any | null, missingArgs?: C3.Array<boolean>, failIfNoMatch?: boolean, context?: λSupplier<string | null> | null): Triple<MethodType | null, any, C3.Array<any>> | null;

  findOverloadForArgsJsonMix(thisArg?: any | null, args?: any | null, kwargs?: any | null, failIfNoMatch?: boolean, context?: λSupplier<string | null> | null): Triple<MethodType | null, any, C3.Array<any>> | null;

  /**
   * Find the overload for overridden method type from a sub type.
   */
  findOverloadForOverride(override: MethodType, failIfNotOverridden?: boolean): MethodType | null;

  /**
   * Find the index of provided overload. Note that it needs to be match one of the overloads exactly not i.e. may not
   * find any overloads of method type is coming from a sub-type i.e. is override.
   *
   * @see #findOverloadForOverride
   */
  findOverloadForSignature(func: string, failIfNotOverridden?: boolean): MethodType | null;

  /**
   * Merges overloads into a single "union signature", note this also handles translating {@link Spec} parameters to
   * keyword only arguments
   */
  mergeOverloads(): FunctionType;

  /**
   * Produces a merged type for the return value across all overloads. This will accommodate any of the overload
   * return value types.
   */
  mergedReturnType(): ValueType | null;

  /**
   * @return true if the method returns a stream of values
   */
  returnIsStreamable(): boolean;

  /**
   * @return true if the function has a streaming parameter; this is typically a last parameter that can stream values
   */
  hasStreamableParam(): boolean;

  /**
   * @return type system scope for building / binding declared fields and value types.
   */
  scope(): TypesysScope;

  /**
   * @return true if this has at least one overload that has {@link MethodType#hasAnyTargetFunc}.
   */
  hasAnyTargetFunc(): boolean;

  /**
   * @return true if this method should be stay in the thread it was invoked in (i.e. not be dispatched to a different thread). It will return
   *         false if the current thread does not satisfy the node pool and thread pool requirements.
   */
  shouldStayInThread(thisArg: any, args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>): boolean;
}


interface λFunction<T, R> {
  (t: T): R
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

interface λPredicate<T> {
  (t: T): boolean
}
