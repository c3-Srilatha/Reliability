// TypeScript definitions for the C3 type MethodTypeDocumentation

/**
 * Documentation of a type method. Note that field documentation uses a parallel structure:
 * {@link FieldTypeDocumentation}.
 *
 * @remarks this represents a value passed to a method that expects an instance of MethodTypeDocumentation
 */
declare interface IMethodTypeDocumentation {

  /**
   * The type object being documented.
   */
  kind?: string | null;

  /**
   * The name of the object being documented.
   */
  name?: string | null;

  /**
   * The full path down to the object being documented.
   * This, in conjunction with the kind, should allow global resolution of the source object.
   */
  path?: string | null;

  /**
   * The unparsed source of the documentation.  This comes from an annotation on the DSL, from
   * scripting language source code or from a separate DSL file.
   */
  source?: string | null;

  /**
   * The general description in the documentation, exclusive of block annotations such as `@param` and `@see`.
   */
  description?: IDocumentationMarkup | null;

  /**
   * References to other pieces of documentation via `@see` annotations.
   */
  references?: C3.Array<DocumentationReference | null> | Array<IDocumentationReference | null>;

  /**
   * Whether or not this structure is deprecated.
   */
  deprecated?: boolean;

  /**
   * If deprecated, the reason and/or replacement.
   */
  deprecateDetails?: IDocumentationMarkup | null;

  /**
   * If deprecated, the final version supported.
   */
  deprecateFinalVersion?: string | null;

  /**
   * Whether or not this structure is a beta feature.
   */
  beta?: boolean;

  /**
   * Other things which make use of this structure. For example, types that mix in the type being documented.
   * These are generated automatically from the metadata and are not present in the documentation comment itself.
   */
  uses?: C3.Array<DocumentationReference | null> | Array<IDocumentationReference | null>;

  /**
   * Short labels which add extra info that can be flagged. These are typically displayed as oval "pills" of text
   * such as "required" and "abstract".
   */
  pills?: C3.Array<string | null> | Array<string | null>;

  /**
   * True if the user marked this element as a favorite, which makes it show up by default in some contexts.
   */
  favorite?: boolean;

  /**
   * Extracted and/or synthesized example code, which should be directly usable for experimentation.
   */
  examples?: C3.Array<DocumentationExample | null> | Array<IDocumentationExample | null>;

  /**
   * Documentation of annotations.
   */
  annotationDoc?: C3.Array<AnnotationDocumentation | null> | Array<IAnnotationDocumentation | null>;

  /**
   * Markup of all annotations formatted as a code span or pre block.
   *
   * @see AnnotationDocumentation#declaration
   */
  annotationDeclarations?: IDocumentationMarkup | null;

  /**
   * The type for which documentation is being produced.
   */
  parentType?: string | null;

  /**
   * The closest type name on which this field/method is defined, if not the target type.
   */
  inheritedFrom?: IDocumentationReference | null;

  /**
   * Whether this field/method is marked as private.
   */
  private?: boolean;

  /**
   * The DSL declaration of the field/method.
   */
  declaration?: string | null;

  /**
   * Whether this is a member function.
   */
  member?: boolean;

  /**
   * Whether this is accessed as a property in scripting languages.
   */
  property?: boolean;

  /**
   * Whether this is overloaded.
   *
   * @see #overload
   */
  overloaded?: boolean;

  /**
   * If this method is overloaded, and we're expanding overloads as separate field sections, the 1-based order of the
   * overload field.
   *
   * @see #overloaded
   */
  overload?: number | null;

  /**
   * Whether this function must be implemented in the mixing type.
   */
  abstract?: boolean;

  /**
   * Whether this function may be implemented in the mixing type.
   */
  optional?: boolean;

  /**
   * Whether this function is not allowed to be redefined.
   */
  final?: boolean;

  /**
   * The parameters to the function.
   */
  parameters?: C3.Array<ParameterDocumentation | null> | Array<IParameterDocumentation | null>;

  /**
   * The return value of the function.
   */
  return?: IReturnDocumentation | null;

  /**
   * Authorization group marked on the method using `@action` annotation.
   *
   * @see Authorizer#actionGroups
   */
  authGroup?: string | null;

  /**
   * All roles authorized to call the method.
   *
   * @see Authorizer#actionAuthzRoles
   */
  authRoles?: C3.Array<string | null> | Array<string | null>;

  /**
   * The the security level of the action.
   *
   * @see Authorizer#securityLevel
   */
  securityLevel?: number | null;

  /**
   * If this is a native remix method, the action requirement on the native remix type.
   */
  nativeRemix?: string | null;
}

/**
 * Documentation of a type method. Note that field documentation uses a parallel structure:
 * {@link FieldTypeDocumentation}.
 *
 * @remarks this represents a made instance of MethodTypeDocumentation
 */
declare class MethodTypeDocumentation extends Obj {

  /**
   * The type object being documented.
   */
  readonly kind?: string | null;
  withKind(kind: string | null): MethodTypeDocumentation;

  /**
   * The name of the object being documented.
   */
  readonly name?: string | null;
  withName(name: string | null): MethodTypeDocumentation;

  /**
   * The full path down to the object being documented.
   * This, in conjunction with the kind, should allow global resolution of the source object.
   */
  readonly path?: string | null;
  withPath(path: string | null): MethodTypeDocumentation;

  /**
   * The unparsed source of the documentation.  This comes from an annotation on the DSL, from
   * scripting language source code or from a separate DSL file.
   */
  readonly source?: string | null;
  withSource(source: string | null): MethodTypeDocumentation;

  /**
   * The general description in the documentation, exclusive of block annotations such as `@param` and `@see`.
   */
  readonly description?: DocumentationMarkup | null;
  withDescription(description: IDocumentationMarkup | null): MethodTypeDocumentation;

  /**
   * References to other pieces of documentation via `@see` annotations.
   */
  readonly references?: C3.Array<DocumentationReference | null>;
  withReferences(references: C3.Array<DocumentationReference | null> | Array<IDocumentationReference | null>): MethodTypeDocumentation;

  /**
   * Whether or not this structure is deprecated.
   */
  readonly deprecated?: boolean;
  withDeprecated(deprecated: boolean): MethodTypeDocumentation;

  /**
   * If deprecated, the reason and/or replacement.
   */
  readonly deprecateDetails?: DocumentationMarkup | null;
  withDeprecateDetails(deprecateDetails: IDocumentationMarkup | null): MethodTypeDocumentation;

  /**
   * If deprecated, the final version supported.
   */
  readonly deprecateFinalVersion?: string | null;
  withDeprecateFinalVersion(deprecateFinalVersion: string | null): MethodTypeDocumentation;

  /**
   * Whether or not this structure is a beta feature.
   */
  readonly beta?: boolean;
  withBeta(beta: boolean): MethodTypeDocumentation;

  /**
   * Other things which make use of this structure. For example, types that mix in the type being documented.
   * These are generated automatically from the metadata and are not present in the documentation comment itself.
   */
  readonly uses?: C3.Array<DocumentationReference | null>;
  withUses(uses: C3.Array<DocumentationReference | null> | Array<IDocumentationReference | null>): MethodTypeDocumentation;

  /**
   * Short labels which add extra info that can be flagged. These are typically displayed as oval "pills" of text
   * such as "required" and "abstract".
   */
  readonly pills?: C3.Array<string | null>;
  withPills(pills: C3.Array<string | null> | Array<string | null>): MethodTypeDocumentation;

  /**
   * True if the user marked this element as a favorite, which makes it show up by default in some contexts.
   */
  readonly favorite?: boolean;
  withFavorite(favorite: boolean): MethodTypeDocumentation;

  /**
   * Extracted and/or synthesized example code, which should be directly usable for experimentation.
   */
  readonly examples?: C3.Array<DocumentationExample | null>;
  withExamples(examples: C3.Array<DocumentationExample | null> | Array<IDocumentationExample | null>): MethodTypeDocumentation;

  /**
   * Documentation of annotations.
   */
  readonly annotationDoc?: C3.Array<AnnotationDocumentation | null>;
  withAnnotationDoc(annotationDoc: C3.Array<AnnotationDocumentation | null> | Array<IAnnotationDocumentation | null>): MethodTypeDocumentation;

  /**
   * Markup of all annotations formatted as a code span or pre block.
   *
   * @see AnnotationDocumentation#declaration
   */
  readonly annotationDeclarations?: DocumentationMarkup | null;
  withAnnotationDeclarations(annotationDeclarations: IDocumentationMarkup | null): MethodTypeDocumentation;

  /**
   * The type for which documentation is being produced.
   */
  readonly parentType?: string | null;
  withParentType(parentType: string | null): MethodTypeDocumentation;

  /**
   * The closest type name on which this field/method is defined, if not the target type.
   */
  readonly inheritedFrom?: DocumentationReference | null;
  withInheritedFrom(inheritedFrom: IDocumentationReference | null): MethodTypeDocumentation;

  /**
   * Whether this field/method is marked as private.
   */
  readonly private?: boolean;
  withPrivate(private_: boolean): MethodTypeDocumentation;

  /**
   * The DSL declaration of the field/method.
   */
  readonly declaration?: string | null;
  withDeclaration(declaration: string | null): MethodTypeDocumentation;

  /**
   * Whether this is a member function.
   */
  readonly member?: boolean;
  withMember(member: boolean): MethodTypeDocumentation;

  /**
   * Whether this is accessed as a property in scripting languages.
   */
  readonly property?: boolean;
  withProperty(property: boolean): MethodTypeDocumentation;

  /**
   * Whether this is overloaded.
   *
   * @see #overload
   */
  readonly overloaded?: boolean;
  withOverloaded(overloaded: boolean): MethodTypeDocumentation;

  /**
   * If this method is overloaded, and we're expanding overloads as separate field sections, the 1-based order of the
   * overload field.
   *
   * @see #overloaded
   */
  readonly overload?: number | null;
  withOverload(overload: number | null): MethodTypeDocumentation;

  /**
   * Whether this function must be implemented in the mixing type.
   */
  readonly abstract?: boolean;
  withAbstract(abstract: boolean): MethodTypeDocumentation;

  /**
   * Whether this function may be implemented in the mixing type.
   */
  readonly optional?: boolean;
  withOptional(optional: boolean): MethodTypeDocumentation;

  /**
   * Whether this function is not allowed to be redefined.
   */
  readonly final?: boolean;
  withFinal(final: boolean): MethodTypeDocumentation;

  /**
   * The parameters to the function.
   */
  readonly parameters?: C3.Array<ParameterDocumentation | null>;
  withParameters(parameters: C3.Array<ParameterDocumentation | null> | Array<IParameterDocumentation | null>): MethodTypeDocumentation;

  /**
   * The return value of the function.
   */
  readonly return?: ReturnDocumentation | null;
  withReturn(return_: IReturnDocumentation | null): MethodTypeDocumentation;

  /**
   * Authorization group marked on the method using `@action` annotation.
   *
   * @see Authorizer#actionGroups
   */
  readonly authGroup?: string | null;
  withAuthGroup(authGroup: string | null): MethodTypeDocumentation;

  /**
   * All roles authorized to call the method.
   *
   * @see Authorizer#actionAuthzRoles
   */
  readonly authRoles?: C3.Array<string | null>;
  withAuthRoles(authRoles: C3.Array<string | null> | Array<string | null>): MethodTypeDocumentation;

  /**
   * The the security level of the action.
   *
   * @see Authorizer#securityLevel
   */
  readonly securityLevel?: number | null;
  withSecurityLevel(securityLevel: number | null): MethodTypeDocumentation;

  /**
   * If this is a native remix method, the action requirement on the native remix type.
   */
  readonly nativeRemix?: string | null;
  withNativeRemix(nativeRemix: string | null): MethodTypeDocumentation;

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
  static fromJson(json: any | null): MethodTypeDocumentation | null;

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
  static fromJsonString(json: string | null): MethodTypeDocumentation | null;

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
  static fromXmlString(xml: string | null): MethodTypeDocumentation | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): MethodTypeDocumentation | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): MethodTypeDocumentation;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MethodTypeDocumentation;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MethodTypeDocumentation;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MethodTypeDocumentation | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MethodTypeDocumentation | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): MethodTypeDocumentation;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MethodTypeDocumentation;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MethodTypeDocumentation;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): MethodTypeDocumentation;

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
  withField(field: string, value: any, doNotConvert?: boolean): MethodTypeDocumentation;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): MethodTypeDocumentation;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): MethodTypeDocumentation;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MethodTypeDocumentation;

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
  withoutFieldAtPath(path: string): MethodTypeDocumentation;

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
  withoutField(field: string | null): MethodTypeDocumentation;

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
  withoutField(field: FieldType | null): MethodTypeDocumentation;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): MethodTypeDocumentation;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): MethodTypeDocumentation;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): MethodTypeDocumentation;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): MethodTypeDocumentation;

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
  defaultField(field: string): MethodTypeDocumentation;

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
  defaultField(field: FieldType): MethodTypeDocumentation;

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
  unsetField(field: string): MethodTypeDocumentation;

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
  unsetField(field: FieldType): MethodTypeDocumentation;

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
  removeField(field: string): MethodTypeDocumentation;

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
  removeField(field: FieldType): MethodTypeDocumentation;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): MethodTypeDocumentation;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): MethodTypeDocumentation;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): MethodTypeDocumentation;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): MethodTypeDocumentation;

  mergeJson(json: any | null): MethodTypeDocumentation;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): MethodTypeDocumentation;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): MethodTypeDocumentation;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<MethodTypeDocumentation | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<MethodTypeDocumentation | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<MethodTypeDocumentation | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<MethodTypeDocumentation | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<MethodTypeDocumentation | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, MethodTypeDocumentation | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, MethodTypeDocumentation | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<MethodTypeDocumentation | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<MethodTypeDocumentation | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): MethodTypeDocumentation;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): MethodTypeDocumentation;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): MethodTypeDocumentation;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): MethodTypeDocumentation;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): MethodTypeDocumentation;

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
  static make(fields: any, withDefaults?: boolean): MethodTypeDocumentation;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): MethodTypeDocumentation;

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
  afterMake(): MethodTypeDocumentation;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): MethodTypeDocumentation;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<MethodTypeDocumentation>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): MethodTypeDocumentation;
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
