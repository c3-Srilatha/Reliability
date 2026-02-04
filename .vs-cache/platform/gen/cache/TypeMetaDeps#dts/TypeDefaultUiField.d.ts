// TypeScript definitions for the C3 type TypeDefaultUiField

/**
 * Information about the default UI presentation for each field of a type is described in this instance.
 * Values here may come from explicit declarations in a default UI file or defaulted using conventions.
 *
 * User interface presentation can be declared in `.c3ui` "UI DSL" files. And for required things like label, order and
 * value expression, values are initialized from the underlying type. This means there are always basic ways to build a
 * simple UI for a type, whether there is an explicit presentation defined or not.
 *
 * The "declared" fields on this type are the ones which are loaded from the default UI file and the properties
 * use these values if specified and otherwise fall back to conventions.
 *
 * @see TypeDefaultUi
 * @see Ann.Ui
 *
 * @remarks this represents a value passed to a method that expects an instance of TypeDefaultUiField
 */
declare interface ITypeDefaultUiField {

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
   * The raw textual documentation associated with this piece of metadata. This will have the original comment
   * characters removed, but otherwise be a simple block of text with the original formatting retained. Only
   * documentation comments (starting with `/**`) will be used for this purpose and only when immediately
   * preceding the structure they document.
   */
  doc?: string | null;

  docSingleLine?: boolean;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  annotationsJson?: any | null;

  /**
   * The name of the corresponding type field.
   */
  name: string;

  /**
   * All comments associated with this type system element.
   */
  comments?: C3.Array<DslComment | null> | Array<IDslComment | null>;

  /**
   * The label for this field specified using the `label` syntax in the default UI file.
   */
  declaredLabelExpr?: string | null;

  /**
   * The presentation order in the list of all fields. This may be specified using the `order` syntax in the default UI
   * file or will be generated based on declaration order of the field.
   */
  declaredOrder?: number | null;

  /**
   * The group this field is part of using the `group` syntax in the default UI file.
   */
  declaredGroupExpr?: string | null;

  /**
   * Value type dependent format string for presentation. This may be specified using the `format` syntax in the default
   * UI file.
   */
  declaredFormatExpr?: string | null;

  /**
   * The short description of this field, typically used as a tool tip. This is the string constant as declared in the
   * DSL file.
   */
  declaredDescriptionExpr?: string | null;

  /**
   * Whether this field should be suppressed in default UIs. This may be specified using the `order` syntax in the
   * default UI file.
   */
  declaredHidden?: boolean;

  /**
   * Whether this field should disallow editing using the `read only` syntax in the default UI file.
   */
  declaredReadOnly?: boolean;

  /**
   * The expression by which the value of the field is retrieved from type, specified using the `value` syntax in
   * the default UI file.
   */
  declaredValueExpr?: string | null;
}

/**
 * Information about the default UI presentation for each field of a type is described in this instance.
 * Values here may come from explicit declarations in a default UI file or defaulted using conventions.
 *
 * User interface presentation can be declared in `.c3ui` "UI DSL" files. And for required things like label, order and
 * value expression, values are initialized from the underlying type. This means there are always basic ways to build a
 * simple UI for a type, whether there is an explicit presentation defined or not.
 *
 * The "declared" fields on this type are the ones which are loaded from the default UI file and the properties
 * use these values if specified and otherwise fall back to conventions.
 *
 * @see TypeDefaultUi
 * @see Ann.Ui
 *
 * @remarks this represents a made instance of TypeDefaultUiField
 */
declare class TypeDefaultUiField extends Obj {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): TypeDefaultUiField;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): TypeDefaultUiField;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): TypeDefaultUiField;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  readonly pkg: Pkg;
  withPkg(pkg: IPkg): TypeDefaultUiField;

  /**
   * SDK json representing instance of this type
   */
  readonly json?: any;
  withJson(json: any): TypeDefaultUiField;

  /**
   * The raw textual documentation associated with this piece of metadata. This will have the original comment
   * characters removed, but otherwise be a simple block of text with the original formatting retained. Only
   * documentation comments (starting with `/**`) will be used for this purpose and only when immediately
   * preceding the structure they document.
   */
  readonly doc?: string | null;
  withDoc(doc: string | null): TypeDefaultUiField;

  readonly docSingleLine?: boolean;
  withDocSingleLine(docSingleLine: boolean): TypeDefaultUiField;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  readonly annotationsJson?: any | null;
  withAnnotationsJson(annotationsJson: any | null): TypeDefaultUiField;

  /**
   * The name of the corresponding type field.
   */
  readonly name: string;
  withName(name: string): TypeDefaultUiField;

  /**
   * All comments associated with this type system element.
   */
  readonly comments?: C3.Array<DslComment | null>;
  withComments(comments: C3.Array<DslComment | null> | Array<IDslComment | null>): TypeDefaultUiField;

  /**
   * The label for this field specified using the `label` syntax in the default UI file.
   */
  readonly declaredLabelExpr?: string | null;
  withDeclaredLabelExpr(declaredLabelExpr: string | null): TypeDefaultUiField;

  /**
   * The presentation order in the list of all fields. This may be specified using the `order` syntax in the default UI
   * file or will be generated based on declaration order of the field.
   */
  readonly declaredOrder?: number | null;
  withDeclaredOrder(declaredOrder: number | null): TypeDefaultUiField;

  /**
   * The group this field is part of using the `group` syntax in the default UI file.
   */
  readonly declaredGroupExpr?: string | null;
  withDeclaredGroupExpr(declaredGroupExpr: string | null): TypeDefaultUiField;

  /**
   * Value type dependent format string for presentation. This may be specified using the `format` syntax in the default
   * UI file.
   */
  readonly declaredFormatExpr?: string | null;
  withDeclaredFormatExpr(declaredFormatExpr: string | null): TypeDefaultUiField;

  /**
   * The short description of this field, typically used as a tool tip. This is the string constant as declared in the
   * DSL file.
   */
  readonly declaredDescriptionExpr?: string | null;
  withDeclaredDescriptionExpr(declaredDescriptionExpr: string | null): TypeDefaultUiField;

  /**
   * Whether this field should be suppressed in default UIs. This may be specified using the `order` syntax in the
   * default UI file.
   */
  readonly declaredHidden?: boolean;
  withDeclaredHidden(declaredHidden: boolean): TypeDefaultUiField;

  /**
   * Whether this field should disallow editing using the `read only` syntax in the default UI file.
   */
  readonly declaredReadOnly?: boolean;
  withDeclaredReadOnly(declaredReadOnly: boolean): TypeDefaultUiField;

  /**
   * The expression by which the value of the field is retrieved from type, specified using the `value` syntax in
   * the default UI file.
   */
  readonly declaredValueExpr?: string | null;
  withDeclaredValueExpr(declaredValueExpr: string | null): TypeDefaultUiField;

  /**
   * Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
   * null may be returned. The implementation must be available within the browser (typically `js-client`).
   */
  renderer(): HtmlRenderer | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): TypeDefaultUiField;

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
  static fromJson(json: any | null): TypeDefaultUiField | null;

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
  static fromJsonString(json: string | null): TypeDefaultUiField | null;

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
  static fromXmlString(xml: string | null): TypeDefaultUiField | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): TypeDefaultUiField | null;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TypeDefaultUiField;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TypeDefaultUiField;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TypeDefaultUiField | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TypeDefaultUiField | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TypeDefaultUiField;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TypeDefaultUiField;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TypeDefaultUiField;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): TypeDefaultUiField;

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
  withField(field: string, value: any, doNotConvert?: boolean): TypeDefaultUiField;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): TypeDefaultUiField;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TypeDefaultUiField;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TypeDefaultUiField;

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
  withoutFieldAtPath(path: string): TypeDefaultUiField;

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
  withoutField(field: string | null): TypeDefaultUiField;

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
  withoutField(field: FieldType | null): TypeDefaultUiField;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): TypeDefaultUiField;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TypeDefaultUiField;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): TypeDefaultUiField;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TypeDefaultUiField;

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
  defaultField(field: string): TypeDefaultUiField;

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
  defaultField(field: FieldType): TypeDefaultUiField;

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
  unsetField(field: string): TypeDefaultUiField;

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
  unsetField(field: FieldType): TypeDefaultUiField;

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
  removeField(field: string): TypeDefaultUiField;

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
  removeField(field: FieldType): TypeDefaultUiField;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TypeDefaultUiField;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): TypeDefaultUiField;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TypeDefaultUiField;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TypeDefaultUiField;

  mergeJson(json: any | null): TypeDefaultUiField;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TypeDefaultUiField;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): TypeDefaultUiField;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<TypeDefaultUiField | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<TypeDefaultUiField | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<TypeDefaultUiField | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<TypeDefaultUiField | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<TypeDefaultUiField | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, TypeDefaultUiField | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, TypeDefaultUiField | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<TypeDefaultUiField | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<TypeDefaultUiField | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): TypeDefaultUiField;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): TypeDefaultUiField;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): TypeDefaultUiField;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): TypeDefaultUiField;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): TypeDefaultUiField;

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
  static make(fields: any, withDefaults?: boolean): TypeDefaultUiField;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): TypeDefaultUiField;

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
  afterMake(): TypeDefaultUiField;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): TypeDefaultUiField;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<TypeDefaultUiField>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): TypeDefaultUiField;

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
  withoutDeclaredSrcPos(recursive?: boolean): TypeDefaultUiField;

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
  docParsed(spec?: DocumentationParserSpec | null): Documentation | null;

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
  withAnnotation(ann: Annotation): TypeDefaultUiField;

  /**
   * Add an annotation to the given metadata
   * @param ann
   *         annotation to add
   * @param annField
   *         which field on the annotation needs to be set
   * @param value
   *         value for the field
   */
  withAnnotation(ann: string, annField?: string | null, value?: any): TypeDefaultUiField;

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
  static fromRef(ref: Obj, failIfMissing?: boolean): TypeDefaultUiField;

  /**
   * C3 type for the reference value.
   */
  static refType(): Type | null;

  /**
   * The label for this field. This may be specified using the `label` syntax in the default UI file or will generated
   * as a cleaned-up version of the field name.
   *
   * @see #declaredLabelExpr
   */
  get label(): string;

  /**
   * The presentation order in the list of all fields. This may be specified using the `order` syntax in the default UI
   * fileor will be generated based on declaration order of the field.
   *
   * @see #declaredOrder
   */
  get order(): number;

  /**
   * If the fields should be presented in distinct groups, they can be organized into groups by name using the `group`
   * syntax in the default UI file.
   *
   * @see #declaredGroupExpr
   */
  get group(): string | null;

  /**
   * Value type dependent format string for presentation. This may be specified using the `format` syntax in the default
   * UI file.
   *
   * @see declaredFormatExpr
   */
  get format(): string | null;

  /**
   * The short description of this field, typically used as a tool tip. This is declared in the DSL file or extracted
   * from the documentation of the field.
   *
   * @see declaredDescriptionExpr
   */
  get description(): string | null;

  /**
   * Whether this field should be suppressed in default UIs. This may be specified using the `order` syntax in the
   * default UI file. Otherwise, private fields are hidden by default.
   *
   * @see #declaredHidden
   */
  get hidden(): boolean;

  /**
   * Whether this field should disallow editing in the default UIs. This may be specified using the `read only` syntax
   * in the default UI file.
   *
   * @see #declaredReadOnly
   */
  get readOnly(): boolean;

  /**
   * The expression by which the value of the field is retrieved from type. This is specified using the `value` syntax
   * in the default UI file or defaults to the same name as the UI field an expected to exist on the type.
   *
   * @see #declaredValueExpr
   */
  get valueExpr(): string;

  /**
   * The field type corresponding to the _first_ element of the value expression for this field. If this is not a
   * field in the corresponding type, there will be no field, however there will always be a #valueType.
   *
   * @see #valueExpr
   * @see #leafFieldType
   */
  get fieldType(): FieldType | null;

  /**
   * The field type corresponding to the _last_ element of the value expression for this field. If this is not a simple
   * path expression, there will be no field, however there will always be a #valueType.
   *
   * @see #valueExpr
   * @see #fieldType
   */
  get leafFieldType(): FieldType | null;

  /**
   * The value type corresponding to the value expression for this field. Usually this is the same as the field type's
   * value type when a UI field just exposes a type field.
   *
   * @see #valueExpr
   */
  get valueType(): ValueType;

  /**
   * Get the TypeDefaultUi this belongs to.
   */
  get parentUi(): TypeDefaultUi;
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
