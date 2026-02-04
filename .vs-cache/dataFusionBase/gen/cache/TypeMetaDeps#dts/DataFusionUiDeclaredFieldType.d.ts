// TypeScript definitions for the C3 type DataFusionUiDeclaredFieldType

/**
 * A UI wrapper to represent {@link DeclaredFieldType}
 *
 * @remarks this represents a value passed to a method that expects an instance of DataFusionUiDeclaredFieldType
 */
declare interface IDataFusionUiDeclaredFieldType {

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
   * The raw textual documentation associated with this piece of metadata. This will have the original comment
   * characters removed, but otherwise be a simple block of text with the original formatting retained. Only
   * documentation comments (starting with `/**`) will be used for this purpose and only when immediately
   * preceding the structure they document.
   */
  doc?: string | null;

  docSingleLine?: boolean;

  /**
   * The name of the field is the unique key for access.
   */
  name?: string | null;

  /**
   * If the field is declared with a default value, the value expression is carried in this field. Use
   * {@link FieldType#defaultValue defaultValue} to get the "evaluated" value.
   *
   * If the value type of the field is a named enum, the default should be the label (field name) from the enum type
   * or an expression that evaluates to one.
   *
   * @see FieldType#defaultValue
   */
  declaredDefault?: string | null;

  /**
   * Indicates that the field calculation should be persisted. This is more expensive on update, but allows calculated
   * values to be used in filter expressions.
   *
   * @see #calcExpr
   */
  storedCalc?: boolean;

  /**
   * Indicates that a field is calculated.  If the field is also persistable, then the field is a stored calc field
   * and its value will be asynchronously updated when any of its dependencies change.  If the field is not persistable
   * then it is a read only calc field and its value will be evaluated any time the obj/field is read.
   *
   * This should not be used directly.  Instead either defining the field as "stored calc" (implies persistable = true,
   * calculated = true) or just "calc" (implies persistable = false, calculated = true) should be used.
   *
   * Note that the expression is normally calculated whenever the underlying data changes, but this can also be
   * controlled using "periodic" and "scheduled" calculated fields.
   *
   * @see #calcPeriod
   * @see #calcSchedule
   */
  calcExpr?: string | null;

  /**
   * Calculated fields can automatically be updated periodically. For example:
   * ```type
   * eventCount: periodic stored calc 'count(events)' period '1h'
   * ```
   * This means: evaluate and save the expression "count(events)" and re-evaluate every hour.
   *
   * @see #calculated
   */
  calcPeriod?: string | null;

  /**
   * Calculated fields can automatically be updated on a schedule. For example:
   * ```type
   * eventCount: scheduled stored calc 'count(events)' period '0 1 * * *'
   * ```
   * This means: evaluate and save the expression "count(events)" and re-evaluate every day at 1am.
   *
   * @see #calculated
   * @see https://en.wikipedia.org/wiki/Cron
   */
  calcSchedule?: string | null;

  /**
   * Fkey fields define references that are not stored in an obj.  Instead the references are obtained by joining by
   * this field in the reference type to the {@link key} field in this obj.
   */
  fkey?: string | null;

  /**
   * Fkey fields define references that are not stored in an obj.  Instead the references are obtained by joining by
   * the {@link fkey} field in the reference type to this field in this obj.  The default is "id"
   */
  key?: string | null;

  schemaName?: string | null;

  schemaSuffix?: string | null;

  translatedBy?: string | null;

  /**
   * If `true` then value of this field will _not_ be persisted in the database. This is either due to an explicit
   * `not persistable` suffix on the field declaration or because it is a (non-stored) calculated field.
   *
   * @see #calcExpr
   * @see #storedCalc
   */
  notPersistable?: boolean;

  /**
   * True if this field is declared final. This mans that it may not be changed by types that mix it in. Note that
   * the type itself may not be final, which implies all fields are final.
   *
   * @see Type#final
   */
  final?: boolean;

  /**
   * True if this field is declared private. This means that it may not be used outside its declaring package.
   *
   * @see Type#private
   */
  private?: boolean;

  /**
   * True if this field is declared constant. That means its value can never be changed from the value specified
   * by its default.
   *
   * @see #default
   */
  constant?: boolean;

  /**
   * Declared value type of this field type. Could be null or partial if this is an inherited field or method.
   */
  valueType?: IValueType | null;

  /**
   * All comments associated with this type system element.
   */
  comments?: C3.Array<DslComment | null> | Array<IDslComment | null>;

  /**
   * Holds the UI related settings for the {@link DeclaredFieldType}
   */
  uiSettings?: IDataFusionUiDeclaredFieldTypeUiSettings | null;
}

/**
 * A UI wrapper to represent {@link DeclaredFieldType}
 *
 * @remarks this represents a made instance of DataFusionUiDeclaredFieldType
 */
declare class DataFusionUiDeclaredFieldType extends Obj {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): DataFusionUiDeclaredFieldType;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): DataFusionUiDeclaredFieldType;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): DataFusionUiDeclaredFieldType;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  readonly pkg: Pkg;
  withPkg(pkg: IPkg): DataFusionUiDeclaredFieldType;

  /**
   * SDK json representing instance of this type
   */
  readonly json?: any;
  withJson(json: any): DataFusionUiDeclaredFieldType;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  readonly annotationsJson?: any | null;
  withAnnotationsJson(annotationsJson: any | null): DataFusionUiDeclaredFieldType;

  /**
   * The raw textual documentation associated with this piece of metadata. This will have the original comment
   * characters removed, but otherwise be a simple block of text with the original formatting retained. Only
   * documentation comments (starting with `/**`) will be used for this purpose and only when immediately
   * preceding the structure they document.
   */
  readonly doc?: string | null;
  withDoc(doc: string | null): DataFusionUiDeclaredFieldType;

  readonly docSingleLine?: boolean;
  withDocSingleLine(docSingleLine: boolean): DataFusionUiDeclaredFieldType;

  /**
   * The name of the field is the unique key for access.
   */
  readonly name?: string | null;
  withName(name: string | null): DataFusionUiDeclaredFieldType;

  /**
   * If the field is declared with a default value, the value expression is carried in this field. Use
   * {@link FieldType#defaultValue defaultValue} to get the "evaluated" value.
   *
   * If the value type of the field is a named enum, the default should be the label (field name) from the enum type
   * or an expression that evaluates to one.
   *
   * @see FieldType#defaultValue
   */
  readonly declaredDefault?: string | null;
  withDeclaredDefault(declaredDefault: string | null): DataFusionUiDeclaredFieldType;

  /**
   * Indicates that the field calculation should be persisted. This is more expensive on update, but allows calculated
   * values to be used in filter expressions.
   *
   * @see #calcExpr
   */
  readonly storedCalc?: boolean;
  withStoredCalc(storedCalc: boolean): DataFusionUiDeclaredFieldType;

  /**
   * Indicates that a field is calculated.  If the field is also persistable, then the field is a stored calc field
   * and its value will be asynchronously updated when any of its dependencies change.  If the field is not persistable
   * then it is a read only calc field and its value will be evaluated any time the obj/field is read.
   *
   * This should not be used directly.  Instead either defining the field as "stored calc" (implies persistable = true,
   * calculated = true) or just "calc" (implies persistable = false, calculated = true) should be used.
   *
   * Note that the expression is normally calculated whenever the underlying data changes, but this can also be
   * controlled using "periodic" and "scheduled" calculated fields.
   *
   * @see #calcPeriod
   * @see #calcSchedule
   */
  readonly calcExpr?: string | null;
  withCalcExpr(calcExpr: string | null): DataFusionUiDeclaredFieldType;

  /**
   * Calculated fields can automatically be updated periodically. For example:
   * ```type
   * eventCount: periodic stored calc 'count(events)' period '1h'
   * ```
   * This means: evaluate and save the expression "count(events)" and re-evaluate every hour.
   *
   * @see #calculated
   */
  readonly calcPeriod?: string | null;
  withCalcPeriod(calcPeriod: string | null): DataFusionUiDeclaredFieldType;

  /**
   * Calculated fields can automatically be updated on a schedule. For example:
   * ```type
   * eventCount: scheduled stored calc 'count(events)' period '0 1 * * *'
   * ```
   * This means: evaluate and save the expression "count(events)" and re-evaluate every day at 1am.
   *
   * @see #calculated
   * @see https://en.wikipedia.org/wiki/Cron
   */
  readonly calcSchedule?: string | null;
  withCalcSchedule(calcSchedule: string | null): DataFusionUiDeclaredFieldType;

  /**
   * Fkey fields define references that are not stored in an obj.  Instead the references are obtained by joining by
   * this field in the reference type to the {@link key} field in this obj.
   */
  readonly fkey?: string | null;
  withFkey(fkey: string | null): DataFusionUiDeclaredFieldType;

  /**
   * Fkey fields define references that are not stored in an obj.  Instead the references are obtained by joining by
   * the {@link fkey} field in the reference type to this field in this obj.  The default is "id"
   */
  readonly key?: string | null;
  withKey(key: string | null): DataFusionUiDeclaredFieldType;

  readonly schemaName?: string | null;
  withSchemaName(schemaName: string | null): DataFusionUiDeclaredFieldType;

  readonly schemaSuffix?: string | null;
  withSchemaSuffix(schemaSuffix: string | null): DataFusionUiDeclaredFieldType;

  readonly translatedBy?: string | null;
  withTranslatedBy(translatedBy: string | null): DataFusionUiDeclaredFieldType;

  /**
   * If `true` then value of this field will _not_ be persisted in the database. This is either due to an explicit
   * `not persistable` suffix on the field declaration or because it is a (non-stored) calculated field.
   *
   * @see #calcExpr
   * @see #storedCalc
   */
  readonly notPersistable?: boolean;
  withNotPersistable(notPersistable: boolean): DataFusionUiDeclaredFieldType;

  /**
   * True if this field is declared final. This mans that it may not be changed by types that mix it in. Note that
   * the type itself may not be final, which implies all fields are final.
   *
   * @see Type#final
   */
  readonly final?: boolean;
  withFinal(final: boolean): DataFusionUiDeclaredFieldType;

  /**
   * True if this field is declared private. This means that it may not be used outside its declaring package.
   *
   * @see Type#private
   */
  readonly private?: boolean;
  withPrivate(private_: boolean): DataFusionUiDeclaredFieldType;

  /**
   * True if this field is declared constant. That means its value can never be changed from the value specified
   * by its default.
   *
   * @see #default
   */
  readonly constant?: boolean;
  withConstant(constant: boolean): DataFusionUiDeclaredFieldType;

  /**
   * Declared value type of this field type. Could be null or partial if this is an inherited field or method.
   */
  readonly valueType?: ValueType | null;
  withValueType(valueType: IValueType | null): DataFusionUiDeclaredFieldType;

  /**
   * All comments associated with this type system element.
   */
  readonly comments?: C3.Array<DslComment | null>;
  withComments(comments: C3.Array<DslComment | null> | Array<IDslComment | null>): DataFusionUiDeclaredFieldType;

  /**
   * Holds the UI related settings for the {@link DeclaredFieldType}
   */
  readonly uiSettings?: DataFusionUiDeclaredFieldTypeUiSettings | null;
  withUiSettings(uiSettings: IDataFusionUiDeclaredFieldTypeUiSettings | null): DataFusionUiDeclaredFieldType;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): DataFusionUiDeclaredFieldType;

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
  static fromJson(json: any | null): DataFusionUiDeclaredFieldType | null;

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
  static fromJsonString(json: string | null): DataFusionUiDeclaredFieldType | null;

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
  static fromXmlString(xml: string | null): DataFusionUiDeclaredFieldType | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): DataFusionUiDeclaredFieldType | null;

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
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataFusionUiDeclaredFieldType;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataFusionUiDeclaredFieldType;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataFusionUiDeclaredFieldType | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataFusionUiDeclaredFieldType | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): DataFusionUiDeclaredFieldType;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataFusionUiDeclaredFieldType;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataFusionUiDeclaredFieldType;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): DataFusionUiDeclaredFieldType;

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
  withField(field: string, value: any, doNotConvert?: boolean): DataFusionUiDeclaredFieldType;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): DataFusionUiDeclaredFieldType;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): DataFusionUiDeclaredFieldType;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): DataFusionUiDeclaredFieldType;

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
  withoutFieldAtPath(path: string): DataFusionUiDeclaredFieldType;

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
  withoutField(field: string | null): DataFusionUiDeclaredFieldType;

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
  withoutField(field: FieldType | null): DataFusionUiDeclaredFieldType;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): DataFusionUiDeclaredFieldType;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): DataFusionUiDeclaredFieldType;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): DataFusionUiDeclaredFieldType;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): DataFusionUiDeclaredFieldType;

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
  defaultField(field: string): DataFusionUiDeclaredFieldType;

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
  defaultField(field: FieldType): DataFusionUiDeclaredFieldType;

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
  unsetField(field: string): DataFusionUiDeclaredFieldType;

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
  unsetField(field: FieldType): DataFusionUiDeclaredFieldType;

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
  removeField(field: string): DataFusionUiDeclaredFieldType;

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
  removeField(field: FieldType): DataFusionUiDeclaredFieldType;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): DataFusionUiDeclaredFieldType;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): DataFusionUiDeclaredFieldType;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): DataFusionUiDeclaredFieldType;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): DataFusionUiDeclaredFieldType;

  mergeJson(json: any | null): DataFusionUiDeclaredFieldType;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): DataFusionUiDeclaredFieldType;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): DataFusionUiDeclaredFieldType;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<DataFusionUiDeclaredFieldType | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<DataFusionUiDeclaredFieldType | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<DataFusionUiDeclaredFieldType | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<DataFusionUiDeclaredFieldType | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<DataFusionUiDeclaredFieldType | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, DataFusionUiDeclaredFieldType | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, DataFusionUiDeclaredFieldType | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<DataFusionUiDeclaredFieldType | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<DataFusionUiDeclaredFieldType | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): DataFusionUiDeclaredFieldType;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): DataFusionUiDeclaredFieldType;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): DataFusionUiDeclaredFieldType;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): DataFusionUiDeclaredFieldType;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): DataFusionUiDeclaredFieldType;

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
  static make(fields: any, withDefaults?: boolean): DataFusionUiDeclaredFieldType;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): DataFusionUiDeclaredFieldType | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): DataFusionUiDeclaredFieldType;

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
  afterMake(): DataFusionUiDeclaredFieldType;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): DataFusionUiDeclaredFieldType;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<DataFusionUiDeclaredFieldType>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): DataFusionUiDeclaredFieldType;

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
  withoutDeclaredSrcPos(recursive?: boolean): DataFusionUiDeclaredFieldType;

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
  withAnnotation(ann: Annotation): DataFusionUiDeclaredFieldType;

  /**
   * Add an annotation to the given metadata
   * @param ann
   *         annotation to add
   * @param annField
   *         which field on the annotation needs to be set
   * @param value
   *         value for the field
   */
  withAnnotation(ann: string, annField?: string | null, value?: any): DataFusionUiDeclaredFieldType;

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
   * DeclaredFieldType.toString will build a simplified DSL type declaration string. This will not include any
   * comments and the line will not be wrapped.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * DeclaredFieldType.toString will build a DSL type declaration string. The spec allows control over formatting
   * options.
   *
   * @see #fromString
   */
  toString(spec: DslPrintSpec): string;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): DataFusionUiDeclaredFieldType | null;

  /**
   * Whether this field is inherited i.e. declared with `~` value type.
   */
  isInherited(): boolean;

  /**
   * Updates the `uiSettings` of DataFusionUiDeclaredFieldType by merging with the existing uiSettings.
   *
   * @param fieldType
   *        The DataFusionUiDeclaredFieldType object.
   * @param uiSettings
   *        The DataFusionUiDeclaredFieldTypeUiSettings object containing the new UI settings for the field.
   * @returns A new DataFusionUiDeclaredFieldType object with the updated `uiSettings`.
   */
  static updateUiSettings(fieldType?: DataFusionUiDeclaredFieldType | null, uiSettings?: DataFusionUiDeclaredFieldTypeUiSettings | null): DataFusionUiDeclaredFieldType;

  /**
   * Sanitizes a single field name by converting it to camelCase, ensuring it does not
   * conflict with existing or reserved names, and limiting its length to 30 characters.
   *
   * @param fieldName
   *       The string representing the field name to sanitize.
   * @param currentFieldNames
   *       A Set of strings representing the field names that are currently in use.
   * @param reservedFieldNames
   *       An array of strings representing field names that are reserved and cannot be used.
   * @returns A new string representing the sanitized and processed field name.
   */
  static sanitizeFieldName(fieldName?: string | null, currentFieldNames?: C3.Set<string | null>, reservedFieldNames?: C3.Array<string | null>): string;

  /**
   * Determines if a given DataFusionUiDeclaredFieldType represents a foreign key field.
   *
   * @param fieldType
   *         The DataFusionUiDeclaredFieldType object to check.
   * @returns `true` if the `fieldType`'s `valueType` is `DeclaredReferenceType` or `ReferenceType`, `false` otherwise.
   */
  static isForeignKeyField(fieldType?: DataFusionUiDeclaredFieldType | null): boolean;

  /**
   * Checks if a given DataFusionUiDeclaredFieldType represents a foreign key reference field.
   *
   * @param fieldType
   *           The DataFusionUiDeclaredFieldType object to check.
   * @returns `true` if the `fieldType` has an `fkey` property, `false` otherwise.
   */
  static isForeignKeyReferenceField(fieldType?: DataFusionUiDeclaredFieldType | null): boolean;

  /**
   * Retrieves the 'id' property from the `uiSettings` of a DataFusionUiDeclaredFieldType object.
   *
   * @param fieldType
   *        The DataFusionUiDeclaredFieldType object from which to retrieve the 'id'.
   * @returns The value of the 'id' property within the `uiSettings`, or `undefined` if not found.
   */
  static getIdFromFieldType(fieldType?: DataFusionUiDeclaredFieldType | null): string;

  /**
   * Creates an identifier string for a DataFusionUiDeclaredFieldType by joining its
   * `schemaName` and `dataType` properties with a hyphen ('-').
   *
   * @param fieldType
   *           The DataFusionUiDeclaredFieldType object from which to create the ID.
   * @returns A string representing the combined schemaName and dataType, or a different
   * value (e.g., empty string, undefined) if either property is missing.
   */
  static getFieldTypeDataType(fieldType?: DataFusionUiDeclaredFieldType | null): string;

  /**
   * Maps a SourceCollectionUiSchemaMismatchError object to a user-friendly error message string.
   *
   * @param mismatch
   *           The SourceCollectionUiSchemaMismatchError object representing the schema mismatch.
   * @returns a {@link Translation} string.
   */
  static mapSchemaMismatchErrorToErrorMessage(mismatch?: string | null): string;

  /**
   * Determines if a DataFusionUiDeclaredFieldType is considered "selected" based on its `uiSettings.selected` property.
   *
   * @param fieldType
   *           The DataFusionUiDeclaredFieldType object to check.
   * @returns `true` if `fieldType.uiSettings.selected` is `true` or `undefined`, `false` otherwise.
   */
  static isFieldTypeSelected(fieldType?: DataFusionUiDeclaredFieldType | null): boolean;

  /**
   * Filters an array of DataFusionUiDeclaredFieldType objects, returning only those that are considered "selected".
   *
   * @param fieldTypes
   *            An array of DataFusionUiDeclaredFieldType objects to filter.
   * @returns A new array containing only the DataFusionUiDeclaredFieldType objects that are selected.
   */
  static getSelectedFieldTypes(fieldTypes?: C3.Array<DataFusionUiDeclaredFieldType | null>): C3.Array<DataFusionUiDeclaredFieldType | null>;

  /**
   * Fetches the declaredFieldTypes which are remixed for particular application through declaredRemixes field in TypeMeta
   *
   * @param packageName
   *            Current package name where we have edited the typeMeta with remix fields.
   * @param typeMeta
   *            TypeMeta for which we want to extract remixed declaredFieldTypes.
   * @returns A new array containing names of the remix field names.
   */
  static fetchDeclaredRemixFieldTypeNames(pkgName: string, typeMeta: TypeMeta): C3.Array<string | null>;
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
