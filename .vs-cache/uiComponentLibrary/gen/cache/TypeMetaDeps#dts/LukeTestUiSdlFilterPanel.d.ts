// TypeScript definitions for the C3 type LukeTestUiSdlFilterPanel

/**
 * Representation of the {@link UiSdlFilterPanel} component for testing purposes.
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeTestUiSdlFilterPanel
 */
declare interface ILukeTestUiSdlFilterPanel {

  /**
   * The Luke instance attached to this component.
   */
  luke: ILukeBrowser;

  /**
   * A parent selector that can be used to distinguish between multiple instances of a component within a page.
   * This can be leveraged to create 1-to-1 mappings between {@link UITestComponent}s so that functions
   * called on a component are limited only to the scope of that component in the UI.
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
   * Selector for a fieldSet
   */
  primaryGroupSelector?: string | null;

  /**
   * Selector for an item inside a fieldSet
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
   * Actual html element for the title
   */
  titleElement?: string | null;

  /**
   * Filter button selector
   */
  filterButton?: string | null;

  /**
   * Selector for clearing one fieldSet
   */
  clearFieldSetButton?: string | null;

  /**
   * Clear All button selector
   */
  clearAllButton?: string | null;

  /**
   * Save button selector
   */
  saveButtonSelector?: string | null;

  /**
   * Cog button selector
   */
  cogButtonSelector?: string | null;

  /**
   * Go back button selector
   */
  goBackButtonSelector?: string | null;

  /**
   * Load from List option selector
   */
  loadFromListOptionSelector?: string | null;

  /**
   * Save Configuration option selector
   */
  saveConfigurationOptionSelector?: string | null;

  /**
   * Form field selector
   */
  formFieldSelector?: string | null;

  /**
   * Saved configuration list selector
   */
  savedConfigurationListSelector?: string | null;

  /**
   * Saved configuration item selector
   */
  savedConfigurationItemSelector?: string | null;

  /**
   * Selector for collapsed fieldset
   */
  collapsedFieldSet?: string | null;

  /**
   * Selector for fieldset expanding button
   */
  expandFieldSetButton?: string | null;
}

/**
 * Representation of the {@link UiSdlFilterPanel} component for testing purposes.
 *
 * @remarks this represents a made instance of LukeTestUiSdlFilterPanel
 */
declare class LukeTestUiSdlFilterPanel extends Obj {

  /**
   * The Luke instance attached to this component.
   */
  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlFilterPanel;

  /**
   * A parent selector that can be used to distinguish between multiple instances of a component within a page.
   * This can be leveraged to create 1-to-1 mappings between {@link UITestComponent}s so that functions
   * called on a component are limited only to the scope of that component in the UI.
   */
  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * The spinner that masks the component when data is loading
   */
  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlFilterPanel;

  /**
   * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
   * for within the {@link #parentSelector}.
   */
  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlFilterPanel;

  /**
   * The maximum amount of time that Luke will retry an action
   */
  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlFilterPanel;

  /**
   * Mappings of field types to their helper types
   */
  readonly fieldHelperMapping?: any | null;
  withFieldHelperMapping(fieldHelperMapping: any | null): LukeTestUiSdlFilterPanel;

  /**
   * Selector for a fieldSet
   */
  readonly primaryGroupSelector?: string | null;
  withPrimaryGroupSelector(primaryGroupSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Selector for an item inside a fieldSet
   */
  readonly secondaryGroupSelector?: string | null;
  withSecondaryGroupSelector(secondaryGroupSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Selector for the element that represents a SDLFieldGroup
   */
  readonly fieldGroupSelector?: string | null;
  withFieldGroupSelector(fieldGroupSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Selector for the parent element that wraps a field input when it is
   * nested in a SDLFieldGroup
   */
  readonly fieldGroupItemSelector?: string | null;
  withFieldGroupItemSelector(fieldGroupItemSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Actual html element for the title
   */
  readonly titleElement?: string | null;
  withTitleElement(titleElement: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Filter button selector
   */
  readonly filterButton?: string | null;
  withFilterButton(filterButton: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Selector for clearing one fieldSet
   */
  readonly clearFieldSetButton?: string | null;
  withClearFieldSetButton(clearFieldSetButton: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Clear All button selector
   */
  readonly clearAllButton?: string | null;
  withClearAllButton(clearAllButton: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Save button selector
   */
  readonly saveButtonSelector?: string | null;
  withSaveButtonSelector(saveButtonSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Cog button selector
   */
  readonly cogButtonSelector?: string | null;
  withCogButtonSelector(cogButtonSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Go back button selector
   */
  readonly goBackButtonSelector?: string | null;
  withGoBackButtonSelector(goBackButtonSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Load from List option selector
   */
  readonly loadFromListOptionSelector?: string | null;
  withLoadFromListOptionSelector(loadFromListOptionSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Save Configuration option selector
   */
  readonly saveConfigurationOptionSelector?: string | null;
  withSaveConfigurationOptionSelector(saveConfigurationOptionSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Form field selector
   */
  readonly formFieldSelector?: string | null;
  withFormFieldSelector(formFieldSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Saved configuration list selector
   */
  readonly savedConfigurationListSelector?: string | null;
  withSavedConfigurationListSelector(savedConfigurationListSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Saved configuration item selector
   */
  readonly savedConfigurationItemSelector?: string | null;
  withSavedConfigurationItemSelector(savedConfigurationItemSelector: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Selector for collapsed fieldset
   */
  readonly collapsedFieldSet?: string | null;
  withCollapsedFieldSet(collapsedFieldSet: string | null): LukeTestUiSdlFilterPanel;

  /**
   * Selector for fieldset expanding button
   */
  readonly expandFieldSetButton?: string | null;
  withExpandFieldSetButton(expandFieldSetButton: string | null): LukeTestUiSdlFilterPanel;

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
  static fromJson(json: any | null): LukeTestUiSdlFilterPanel | null;

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
  static fromJsonString(json: string | null): LukeTestUiSdlFilterPanel | null;

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
  static fromXmlString(xml: string | null): LukeTestUiSdlFilterPanel | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeTestUiSdlFilterPanel | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeTestUiSdlFilterPanel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestUiSdlFilterPanel;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestUiSdlFilterPanel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestUiSdlFilterPanel | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestUiSdlFilterPanel | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeTestUiSdlFilterPanel;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestUiSdlFilterPanel;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestUiSdlFilterPanel;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeTestUiSdlFilterPanel;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeTestUiSdlFilterPanel;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeTestUiSdlFilterPanel;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeTestUiSdlFilterPanel;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeTestUiSdlFilterPanel;

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
  withoutFieldAtPath(path: string): LukeTestUiSdlFilterPanel;

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
  withoutField(field: string | null): LukeTestUiSdlFilterPanel;

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
  withoutField(field: FieldType | null): LukeTestUiSdlFilterPanel;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeTestUiSdlFilterPanel;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeTestUiSdlFilterPanel;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeTestUiSdlFilterPanel;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeTestUiSdlFilterPanel;

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
  defaultField(field: string): LukeTestUiSdlFilterPanel;

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
  defaultField(field: FieldType): LukeTestUiSdlFilterPanel;

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
  unsetField(field: string): LukeTestUiSdlFilterPanel;

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
  unsetField(field: FieldType): LukeTestUiSdlFilterPanel;

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
  removeField(field: string): LukeTestUiSdlFilterPanel;

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
  removeField(field: FieldType): LukeTestUiSdlFilterPanel;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeTestUiSdlFilterPanel;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeTestUiSdlFilterPanel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeTestUiSdlFilterPanel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeTestUiSdlFilterPanel;

  mergeJson(json: any | null): LukeTestUiSdlFilterPanel;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeTestUiSdlFilterPanel;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeTestUiSdlFilterPanel;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeTestUiSdlFilterPanel | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeTestUiSdlFilterPanel | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeTestUiSdlFilterPanel | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeTestUiSdlFilterPanel | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeTestUiSdlFilterPanel | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeTestUiSdlFilterPanel | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeTestUiSdlFilterPanel | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeTestUiSdlFilterPanel | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeTestUiSdlFilterPanel | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeTestUiSdlFilterPanel;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeTestUiSdlFilterPanel;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeTestUiSdlFilterPanel;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeTestUiSdlFilterPanel;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeTestUiSdlFilterPanel;

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
  static make(fields: any, withDefaults?: boolean): LukeTestUiSdlFilterPanel;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeTestUiSdlFilterPanel;

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
  afterMake(): LukeTestUiSdlFilterPanel;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeTestUiSdlFilterPanel;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeTestUiSdlFilterPanel>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeTestUiSdlFilterPanel;

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
   * Clicks the {@link #filterButton} on the filter panel
   * @param timeout
   *          Timeout in seconds for the async chain
   * @param debounceTime
   *          The amount of time to wait before clicking the filter button
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the filter button is clicked.
   */
  filter(timeout?: number | null, debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the clear button inside a fieldSet of the given index
   * @param index
   *          The index of the fieldSet
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the clear button is clicked.
   */
  clearFieldSet(index: number, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the {@link #clearAllButton} on the filter panel
   * @param timeout
   *          Timeout in seconds for the async chain
   * @param debounceTime
   *          The amount of time to wait before clicking the filter button
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the clear all button is clicked.
   */
  clearAll(timeout?: number | null, debounceTime?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the expand button inside a fieldSet of the given index
   * @param index
   *          The index of the fieldSet on the filter panel
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when all the fieldsets expanding buttons are clicked.
   */
  toggleCollapsibleFieldSet(index: number, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Expand all collapsed fieldsets on filter panel
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved when all the fieldsets expanding buttons are clicked.
   */
  expandAllFieldSets(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Count the number of collapsed fieldsets on filter panel
   * @param timeout
   *          Timeout in seconds for the async chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved with the number of collapsed fieldsets.
   */
  numberOfCollapsedFieldSets(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the Save button on the filter panel.
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the button is clicked.
   */
  clickSaveButton(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the Cog button on the filter panel.
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the button is clicked.
   */
  clickCogButton(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the Load from List option on the filter panel.
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the option is clicked.
   */
  clickLoadFromListOption(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the Save Configuration option on the filter panel.
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the option is clicked.
   */
  clickSaveConfigurationOption(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Sets configuration name on the filter panel.
   * @param name
   *          The configuration name.
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the name is set.
   */
  setConfigurationName(name?: string | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Saves configuration on the filter panel.
   * @param name
   *          The configuration name.
   * @param setToPrivate
   *          True to set the saved search as private
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is saved.
   */
  saveConfiguration(name?: string | null, setToPrivate?: boolean, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Loads configuration on the filter panel.
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is loaded.
   */
  loadConfiguration(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the toggle to save the search as private search
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is loaded.
   */
  toggleSaveAsPrivate(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns numbers of items in saved filter list
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is loaded.
   */
  numberOfSavedFilters(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Get saved search list item by index
   * @param index
   *          The zero-base index of the item on the list
   * @return a CSS class name.
   */
  getSavedSearchListItemSelector(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the rename button on saved search list to rename a filter
   * @param index
   *          The zero-base index of the item on the list
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is loaded.
   */
  clickRenameSavedSearchByIndex(index?: number | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the name of a saved search entry in the list
   * @param index
   *          The zero-base index of the item on the list
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is loaded.
   */
  getSavedSearchNameByIndex(index?: number | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Deletes a saved search entry in the list
   * @param index
   *          The zero-base index of the item on the list
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is loaded.
   */
  deleteSavedSearchByIndex(index?: number | null, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the go back button on saved search
   * @param timeout
   *          Timeout in seconds for the async chain.
   * @return a {@link LukeAsyncQueueNode} that will be resolved when the configuration is loaded.
   */
  clickGoBackButton(timeout?: number | null): LukeAsyncQueueNode | null;
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
