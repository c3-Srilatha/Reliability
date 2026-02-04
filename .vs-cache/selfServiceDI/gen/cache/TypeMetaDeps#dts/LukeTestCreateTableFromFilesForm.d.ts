// TypeScript definitions for the C3 type LukeTestCreateTableFromFilesForm

/**
 * A test component for the main page on SelfServiceDI
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeTestCreateTableFromFilesForm
 */
declare interface ILukeTestCreateTableFromFilesForm {

  /**
   * The Luke instance attached to this component.
   */
  luke: ILukeBrowser;

  /**
   * The selector for the connector form
   */
  parentSelector?: string | null;

  /**
   * The spinner that masks the component when data is loading
   */
  spinner?: string | null;

  /**
   * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
   * for within the {@link #parentSelector}.
   */
  renderingSelectors?: C3.Array<string | null> | Array<string | null>;

  /**
   * The maximum amount of time that Luke will retry an action
   */
  timeout?: number | null;

  /**
   * Mappings of field types to their helper types
   */
  fieldHelperMapping?: any | null;

  /**
   * Selector for a form section
   */
  primaryGroupSelector?: string | null;

  /**
   * Selector for an item inside a form section
   */
  secondaryGroupSelector?: string | null;

  /**
   * Selector for the element that represents a SDLFieldGroup
   */
  fieldGroupSelector?: string | null;

  /**
   * Selector for the parent element that wraps a field input when it is
   * nested in a SDLFieldGroup
   */
  fieldGroupItemSelector?: string | null;

  /**
   * Selector for entire form element
   */
  formSelector?: string | null;

  /**
   * Selector for the Submit button
   */
  submitButtonEl?: string | null;

  /**
   * Selector for the Cancel button
   */
  cancelButtonEl?: string | null;

  /**
   * Selector for the Back button
   */
  backButtonEl?: string | null;

  /**
   * Selector for the Continue button
   */
  continueButtonEl?: string | null;

  /**
   * Selector for a form group element
   */
  formGroupEl?: string | null;

  /**
   * Selector for a disabled form group element
   */
  formGroupDisabledEl?: string | null;

  /**
   * Selector for the form group error element
   */
  formGroupErrorEl?: string | null;

  /**
   * Selector for the form field hint element
   */
  formFieldHintEl?: string | null;

  /**
   * Selector for the form field element
   */
  formFieldEl?: string | null;

  /**
   * Selector for a single step of the progress steps
   */
  progressStep?: string | null;

  /**
   * Selector for form section headers
   */
  sectionHeaderSelector?: string | null;
}

/**
 * A test component for the main page on SelfServiceDI
 *
 * @remarks this represents a made instance of LukeTestCreateTableFromFilesForm
 */
declare class LukeTestCreateTableFromFilesForm extends Obj {

  /**
   * The Luke instance attached to this component.
   */
  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestCreateTableFromFilesForm;

  /**
   * The selector for the connector form
   */
  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * The spinner that masks the component when data is loading
   */
  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
   * for within the {@link #parentSelector}.
   */
  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestCreateTableFromFilesForm;

  /**
   * The maximum amount of time that Luke will retry an action
   */
  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestCreateTableFromFilesForm;

  /**
   * Mappings of field types to their helper types
   */
  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for a form section
   */
  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for an item inside a form section
   */
  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the element that represents a SDLFieldGroup
   */
  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the parent element that wraps a field input when it is
   * nested in a SDLFieldGroup
   */
  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for entire form element
   */
  readonly formSelector?: string | null;
  withFormSelector(formSelector: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the Submit button
   */
  readonly submitButtonEl?: string | null;
  withSubmitButtonEl(submitButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the Cancel button
   */
  readonly cancelButtonEl?: string | null;
  withCancelButtonEl(cancelButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the Back button
   */
  readonly backButtonEl?: string | null;
  withBackButtonEl(backButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the Continue button
   */
  readonly continueButtonEl?: string | null;
  withContinueButtonEl(continueButtonEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for a form group element
   */
  readonly formGroupEl?: string | null;
  withFormGroupEl(formGroupEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for a disabled form group element
   */
  readonly formGroupDisabledEl?: string | null;
  withFormGroupDisabledEl(formGroupDisabledEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the form group error element
   */
  readonly formGroupErrorEl?: string | null;
  withFormGroupErrorEl(formGroupErrorEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the form field hint element
   */
  readonly formFieldHintEl?: string | null;
  withFormFieldHintEl(formFieldHintEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for the form field element
   */
  readonly formFieldEl?: string | null;
  withFormFieldEl(formFieldEl: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for a single step of the progress steps
   */
  readonly progressStep?: string | null;
  withProgressStep(progressStep: string | null): LukeTestCreateTableFromFilesForm;

  /**
   * Selector for form section headers
   */
  readonly sectionHeaderSelector?: string | null;
  withSectionHeaderSelector(sectionHeaderSelector: string | null): LukeTestCreateTableFromFilesForm;

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
  static fromJson(json: any | null): LukeTestCreateTableFromFilesForm | null;

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
  static fromJsonString(json: string | null): LukeTestCreateTableFromFilesForm | null;

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
  static fromXmlString(xml: string | null): LukeTestCreateTableFromFilesForm | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeTestCreateTableFromFilesForm | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeTestCreateTableFromFilesForm;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestCreateTableFromFilesForm;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestCreateTableFromFilesForm;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestCreateTableFromFilesForm | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestCreateTableFromFilesForm | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeTestCreateTableFromFilesForm;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestCreateTableFromFilesForm;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestCreateTableFromFilesForm;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeTestCreateTableFromFilesForm;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeTestCreateTableFromFilesForm;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeTestCreateTableFromFilesForm;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeTestCreateTableFromFilesForm;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeTestCreateTableFromFilesForm;

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
  withoutFieldAtPath(path: string): LukeTestCreateTableFromFilesForm;

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
  withoutField(field: string | null): LukeTestCreateTableFromFilesForm;

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
  withoutField(field: FieldType | null): LukeTestCreateTableFromFilesForm;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeTestCreateTableFromFilesForm;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeTestCreateTableFromFilesForm;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeTestCreateTableFromFilesForm;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeTestCreateTableFromFilesForm;

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
  defaultField(field: string): LukeTestCreateTableFromFilesForm;

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
  defaultField(field: FieldType): LukeTestCreateTableFromFilesForm;

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
  unsetField(field: string): LukeTestCreateTableFromFilesForm;

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
  unsetField(field: FieldType): LukeTestCreateTableFromFilesForm;

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
  removeField(field: string): LukeTestCreateTableFromFilesForm;

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
  removeField(field: FieldType): LukeTestCreateTableFromFilesForm;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeTestCreateTableFromFilesForm;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeTestCreateTableFromFilesForm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeTestCreateTableFromFilesForm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeTestCreateTableFromFilesForm;

  mergeJson(json: any | null): LukeTestCreateTableFromFilesForm;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeTestCreateTableFromFilesForm;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeTestCreateTableFromFilesForm;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeTestCreateTableFromFilesForm | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeTestCreateTableFromFilesForm | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeTestCreateTableFromFilesForm | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeTestCreateTableFromFilesForm | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeTestCreateTableFromFilesForm | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeTestCreateTableFromFilesForm | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeTestCreateTableFromFilesForm | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeTestCreateTableFromFilesForm | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeTestCreateTableFromFilesForm | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeTestCreateTableFromFilesForm;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeTestCreateTableFromFilesForm;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeTestCreateTableFromFilesForm;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeTestCreateTableFromFilesForm;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeTestCreateTableFromFilesForm;

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
  static make(fields: any, withDefaults?: boolean): LukeTestCreateTableFromFilesForm;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeTestCreateTableFromFilesForm;

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
  afterMake(): LukeTestCreateTableFromFilesForm;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeTestCreateTableFromFilesForm;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeTestCreateTableFromFilesForm>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeTestCreateTableFromFilesForm;

  /**
   * Make assertions that collectively decide whether the component is properly rendered.
   * @example
   * ```js
   * function rendered() {
   *   this.luke.search(this.gridEl).visible().assert('toEqual', true);
   *   this.luke.searchAll(this.itemEl).attr('length').assert('toBeGreaterThan', 5);
   *   this.luke.search(this.messageEl).text().assert('toEqual', 'Welcome');
   * }
   * ```
   */
  rendered(): void;

  /**
   * Make assertions that collectively decide whether the component is not rendered (not within viewport)
   */
  notRendered(): void;

  /**
   * Make assertions that determine whether or not the component exists. Will make sure each {@link #renderingSelectors}
   * exists.
   */
  exists(): void;

  /**
   * Make assertions that determine whether or not the component doesn't exists, meaning the {@link parentSelector} should
   * not exist.
   */
  notExists(): void;

  /**
   * Searches for an element by a css selector inside the parent element selected by {@link #parentSelector}.
   * @param selector
   *          The css selector
   * @param resolveOnFound
   *          If true, only resolve the node when a dom element is found
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeWebElement} that will be resolved with the search result
   */
  search(selector: string, resolveOnFound?: boolean, timeout?: number | null): LukeWebElement<any> | null;

  /**
   * Searches for all elements that matches a css selector inside the parent element selected by {@link #parentSelector}.
   * @param selector
   *          The css selector
   * @param resolveOnFound
   *          If true, only resolve the node when at least a dom element is found
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the search result (an array of {@link SeleniumWebElement})
   */
  searchAll(selector: string, resolveOnFound?: boolean, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for all elements with a selector and returns the first element that has the given text inside the parent element selected by {@link #parentSelector}.
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
  searchForElementWithText(selector: string, text: string, resolveOnFound?: boolean, timeout?: number | null): LukeWebElement<any> | null;

  /**
   * Click on elements on current session only within the component's {@link parentSelector}. Clicks on first element
   * if found.
   *
   * @param  selector
   *            The search query
   * @param timeout
   *          Timeout in seconds for the chain
   */
  click(selector: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns a parent selector for a field based on its hierarchical position
   * (primary group -> secondary group -> field group item)
   * @param primaryGroup
   *           The index of the primary group
   * @param secondaryGroup
   *           The index of the secondary group inside a primary group
   * @param fieldGroupItem
   *           The index of the item inside a fieldGroup, if the field is nested in a SDLFieldGroup
   * @return A parent selector for the field
   */
  fieldParentSelector(primaryGroup?: number | null, secondaryGroup?: number | null, fieldGroupItem?: number | null): string | null;

  /**
   * Sets the value of the indicated field.
   *
   * @param primaryGroup
   *          The 1-based index of the desired primary group.
   * @param secondaryGroup
   *          The 1-based index of the desired secondary group inside a primary group.
   * @param fieldGroupItem
   *          The 1-based index of the desired child field in the field group,
   *          if the field is nested in a SDLFieldGroup.
   * @param fieldType
   *          The type of the field on the filter panel..
   * @param value
   *          The value to be set.
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the value is set.
   */
  setFieldValue(primaryGroup: number, secondaryGroup: number, fieldGroupItem?: number | null, fieldType?: string | null, value?: string | null | C3.Array<string | null> | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the current value of the indicated field.
   *
   * @param primaryGroup
   *          The 1-based index of the desired primary group.
   * @param secondaryGroup
   *          The 1-based index of the desired secondary group inside a primary group.
   * @param fieldGroupItem
   *          The 1-based index of the desired child field in the field group,
   *          if the field is nested in a SDLFieldGroup.
   * @param fieldType
   *          The type of the field on the filter panel.
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the value as a string or
   *          values as an array of strings.
   */
  getFieldValue(primaryGroup: number, secondaryGroup: number, fieldGroupItem?: number | null, fieldType?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Waits for an amount of time for any inputs with a debounce to trigger all their actions
   * @param debounceTime
   *          The amount of time to wait
   * @return a {@link LukeAsyncQueueNode} that will be resolved with true
   */
  waitForDebouncedInput(debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Retrieves the nth child element of a selector
   * @param selector
   *          The selector of the element
   * @param index
   *          The index of the selector
   * @return a CSS class name
   */
  nthOfTypeSelector(selector?: string | null, index?: number | null): string | null;

  /**
   * Retrieves the nth child element of a selector
   * @param selector
   *          The selector of the element
   * @param index
   *          The index of an element in the selector
   * @return a CSS class name
   */
  nthChildSelector(selector?: string | null, index?: number | null): string | null;

  /**
   * Clicks the save button
   * @param timeout
   *          Timeout in seconds for the async chain
   * @param debounceTime
   *          The amount of time to wait before clicking the save button
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the filter button is clicked.
   */
  clickSave(timeout?: number | null, debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the Cancel button
   * @param timeout
   *          Timeout in seconds for the async chain
   * @param debounceTime
   *          The amount of time to wait before clicking the cancel button
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the filter button is clicked.
   */
  clickCancel(timeout?: number | null, debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the Continue button
   * @param timeout
   *          Timeout in seconds for the async chain
   * @param debounceTime
   *          The amount of time to wait before clicking the continue button
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the filter button is clicked.
   */
  clickContinue(timeout?: number | null, debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the Back button
   * @param timeout
   *          Timeout in seconds for the async chain
   * @param debounceTime
   *          The amount of time to wait before clicking the back button
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the filter button is clicked.
   */
  clickBack(timeout?: number | null, debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks on one of the step buttons in the progress steps
   * @param timeout
   *          Timeout in seconds for the async chain
   * @param debounceTime
   *          The amount of time to wait before clicking the step button
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the step button is clicked.
   */
  clickStep(stepIndex?: number | null, timeout?: number | null, debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Check whether the step button specified is enabled
   * @param stepIndex
   *          1-based index of the step button
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with a boolean of whether or not the step button is enabled.
   */
  stepEnabled(stepIndex?: number | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the element of the input field with the field attribute on <input> HTML tag
   * @param fieldName
   *          Desired input field name within the form
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that when the input element is found
   */
  getInputElement(fieldName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets the value of the input field with the field attribute on <input> HTML tag
   * @param fieldName
   *          Input field name within the form
   * @param inputValue
   *          The value to be entered into the field
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the step button is clicked.
   */
  setInputValue(fieldName?: string | null, inputValue?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the value of the input field with the field attribute on <input> HTML tag
   * @param fieldName
   *          Desired input field name within the form
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the step button is clicked.
   */
  getInputValue(fieldName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets the value of the input field with name attribute on <input> HTML tag
   * @param fieldName
   *          Input field name within the form
   * @param inputValue
   *          The value to be entered into the field
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the step button is clicked.
   */
  setInputValueByName(fieldName?: string | null, inputValue?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the value of the input field with name attribute on <input> HTML tag
   * @param fieldName
   *          Desired input field name within the form
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the step button is clicked.
   */
  getInputValueByName(fieldName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets the value of the textarea field with the field attribute on <textarea> HTML tag
   * @param fieldName
   *          Textarea field name within the form
   * @param inputValue
   *          The value to be entered into the field
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the step button is clicked.
   */
  setTextAreaValue(fieldName?: string | null, inputValue?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the value of the textarea field with the field attribute on <textarea> HTML tag
   * @param fieldName
   *          Desired textarea field name within the form
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the step button is clicked.
   */
  getTextAreaValue(fieldName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the {@link LukeBrowserWebElement} for a form section specified by title
   *
   * @param title
   *            Header title
   */
  getSectionByTitle(title: string): LukeBrowserWebElement | null;

  /**
   * Check whether the form's primary button is enabled
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with a boolean of whether or not the primary button is enabled.
   */
  primaryButtonEnabled(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Helper method to select a value in a UiSdlSelectInput
   * @param label
   *           The value's label
   * @param value
   *           The value to select
   * @param timeout
   *           The timeout for the search action, default 30s
   */
  selectFormOption(label: string, selection?: string | null, timeout?: number | null): void;

  /**
   * Method to select an option in the UiSdlSelectInput
   * @param index
   *           The one-based index of the form section css-selector
   * @param selection
   *           The value to select
   * @param timeout
   *           The timeout for the search action, default 30s
   */
  selectFormOptionHelper(index?: number | null, selection?: string | null, timeout?: number | null): void;

  /**
   * Sets the table name for a given string
   *
   * @param tableName
   *           The tableName to be set
   * @param timeout
   *           Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the table name is set
   */
  setTableName(tableName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets the column description for a given string
   *
   * @param description
   *           The description to be set
   * @param timeout
   *           Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the column description is set
   */
  setDescription(description?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the table name hint text error of a table
   *
   * @param tableName
   *           The tableName to be set
   * @param timeout
   *           Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the table name error
   */
  tableNameError(tableName?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Gets the table description hint text error of a table
   *
   * @param description
   *           The description to be set
   * @param timeout
   *           Timeout in seconds for the chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the table description error
   */
  descriptionError(description?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;
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
