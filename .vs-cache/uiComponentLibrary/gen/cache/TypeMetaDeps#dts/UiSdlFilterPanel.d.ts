// TypeScript definitions for the C3 type UiSdlFilterPanel

/**
 * A type which represents a filter panel, which may be composed of 1-N form fields.
 * Generally used to create a filtered configuration to pass to a {@link UiSdlFilterable} component.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlFilterPanel
 */
declare interface IUiSdlFilterPanel {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string | null;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  dataSpec?: IUiSdlFilterPanelDataSpec | null;

  /**
   * Component level boolean to disable a data fetch on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * The title of the form.
   */
  title?: IUiSdlComponentTitle | null;

  /**
   * A mapping of field name to value.
   *
   * NOTE: the value of this field has to be a JSON object. JSON arrays may pass validation but should not be used.
   */
  formFieldValues?: any | null;

  /**
   * The field which contains the data backing the form.
   */
  dataRecord?: IObj | null;

  /**
   * The data spec that will hold the the internal datasources for UiSdlFilterPanel.
   */
  internalDataSpec?: IUiSdlFilterPanelInternalDataSpec | null;

  /**
   * Stores the internal data defined in UiSdlFilterPanelInternalDataSpec.
   */
  internalData?: IObj | null;

  /**
   * Filter spec.
   */
  filterSpec?: string | null;

  /**
   * The text to display on the primary button in the filter panel.
   */
  filterButtonText?: string | null;

  /**
   * The text to display on the secondary button in the filter panel.
   */
  clearButtonText?: string | null;

  /**
   * Whether or not there was an error when trying to delete a saved search.
   */
  deleteSavedSearchesError?: boolean;

  /**
   * A list of saved searches that have been deleted from the filter panel.
   */
  deletedSavedSearches?: C3.Array<UiSdlSavedSearch | null> | Array<IUiSdlSavedSearch | null>;

  /**
   * A mapping from saved search id to its new name.
   */
  renamedSavedSearches?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * Text for the `Save Search` button.
   */
  saveSearchButtonText?: string | null;

  /**
   * Text for the `Cancel` button on the save search subpanel.
   */
  cancelSaveSearchText?: string | null;

  /**
   * Text for the save search subtitle.
   */
  saveSearchSubtitle?: string | null;

  /**
   * Text for the save search title.
   */
  saveSearchTitle?: string | null;

  /**
   * Text for the rename search subpanel's subtitle.
   */
  renameSearchPanelSubtitle?: string | null;

  /**
   * Text for the rename search subpanel's title.
   */
  renameSearchPanelTitle?: string | null;

  /**
   * Text for the save search field label.
   */
  saveSearchFieldLabel?: string | null;

  /**
   * Text for the advanced field label.
   */
  advancedFieldLabel?: string | null;

  /**
   * Text for the load save search panel subtitle.
   */
  loadSearchPanelSubtitle?: string | null;

  /**
   * Text for the load save search panel title.
   */
  loadSearchPanelTitle?: string | null;

  /**
   * Subtitle for the filter panel.
   */
  subtitle?: string | null;

  /**
   * Text for the load save search panel's cancel button.
   */
  cancelLoadSearchButtonText?: string | null;

  /**
   * Text for the save as private toggle button.
   */
  saveAsPrivateToggleText?: string | null;

  /**
   * Dropdown items in a settings menu.
   */
  settingsMenu?: IUiSdlFilterPanelSettingsMenu | null;
}

/**
 * A type which represents a filter panel, which may be composed of 1-N form fields.
 * Generally used to create a filtered configuration to pass to a {@link UiSdlFilterable} component.
 *
 * @remarks this represents a made instance of UiSdlFilterPanel
 */
declare class UiSdlFilterPanel extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFilterPanel;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): UiSdlFilterPanel;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): UiSdlFilterPanel;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlFilterPanelDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFilterPanelDataSpec | null): UiSdlFilterPanel;

  /**
   * Component level boolean to disable a data fetch on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFilterPanel;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFilterPanel;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFilterPanel;

  /**
   * The title of the form.
   */
  readonly title?: UiSdlComponentTitle | null;
  withTitle(title: IUiSdlComponentTitle | null): UiSdlFilterPanel;

  /**
   * A mapping of field name to value.
   *
   * NOTE: the value of this field has to be a JSON object. JSON arrays may pass validation but should not be used.
   */
  readonly formFieldValues?: any | null;
  withFormFieldValues(formFieldValues: any | null): UiSdlFilterPanel;

  /**
   * The field which contains the data backing the form.
   */
  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlFilterPanel;

  /**
   * The data spec that will hold the the internal datasources for UiSdlFilterPanel.
   */
  readonly internalDataSpec?: UiSdlFilterPanelInternalDataSpec | null;
  withInternalDataSpec(internalDataSpec: IUiSdlFilterPanelInternalDataSpec | null): UiSdlFilterPanel;

  /**
   * Stores the internal data defined in UiSdlFilterPanelInternalDataSpec.
   */
  readonly internalData?: Obj | null;
  withInternalData(internalData: IObj | null): UiSdlFilterPanel;

  /**
   * Filter spec.
   */
  readonly filterSpec?: string | null;
  withFilterSpec(filterSpec: string | null): UiSdlFilterPanel;

  /**
   * The text to display on the primary button in the filter panel.
   */
  readonly filterButtonText?: string | null;
  withFilterButtonText(filterButtonText: string | null): UiSdlFilterPanel;

  /**
   * The text to display on the secondary button in the filter panel.
   */
  readonly clearButtonText?: string | null;
  withClearButtonText(clearButtonText: string | null): UiSdlFilterPanel;

  /**
   * Whether or not there was an error when trying to delete a saved search.
   */
  readonly deleteSavedSearchesError?: boolean;
  withDeleteSavedSearchesError(deleteSavedSearchesError: boolean): UiSdlFilterPanel;

  /**
   * A list of saved searches that have been deleted from the filter panel.
   */
  readonly deletedSavedSearches?: C3.Array<UiSdlSavedSearch | null>;
  withDeletedSavedSearches(deletedSavedSearches: C3.Array<UiSdlSavedSearch | null> | Array<IUiSdlSavedSearch | null>): UiSdlFilterPanel;

  /**
   * A mapping from saved search id to its new name.
   */
  readonly renamedSavedSearches?: C3.Map<string | null, string | null>;
  withRenamedSavedSearches(renamedSavedSearches: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFilterPanel;

  /**
   * Text for the `Save Search` button.
   */
  readonly saveSearchButtonText?: string | null;
  withSaveSearchButtonText(saveSearchButtonText: string | null): UiSdlFilterPanel;

  /**
   * Text for the `Cancel` button on the save search subpanel.
   */
  readonly cancelSaveSearchText?: string | null;
  withCancelSaveSearchText(cancelSaveSearchText: string | null): UiSdlFilterPanel;

  /**
   * Text for the save search subtitle.
   */
  readonly saveSearchSubtitle?: string | null;
  withSaveSearchSubtitle(saveSearchSubtitle: string | null): UiSdlFilterPanel;

  /**
   * Text for the save search title.
   */
  readonly saveSearchTitle?: string | null;
  withSaveSearchTitle(saveSearchTitle: string | null): UiSdlFilterPanel;

  /**
   * Text for the rename search subpanel's subtitle.
   */
  readonly renameSearchPanelSubtitle?: string | null;
  withRenameSearchPanelSubtitle(renameSearchPanelSubtitle: string | null): UiSdlFilterPanel;

  /**
   * Text for the rename search subpanel's title.
   */
  readonly renameSearchPanelTitle?: string | null;
  withRenameSearchPanelTitle(renameSearchPanelTitle: string | null): UiSdlFilterPanel;

  /**
   * Text for the save search field label.
   */
  readonly saveSearchFieldLabel?: string | null;
  withSaveSearchFieldLabel(saveSearchFieldLabel: string | null): UiSdlFilterPanel;

  /**
   * Text for the advanced field label.
   */
  readonly advancedFieldLabel?: string | null;
  withAdvancedFieldLabel(advancedFieldLabel: string | null): UiSdlFilterPanel;

  /**
   * Text for the load save search panel subtitle.
   */
  readonly loadSearchPanelSubtitle?: string | null;
  withLoadSearchPanelSubtitle(loadSearchPanelSubtitle: string | null): UiSdlFilterPanel;

  /**
   * Text for the load save search panel title.
   */
  readonly loadSearchPanelTitle?: string | null;
  withLoadSearchPanelTitle(loadSearchPanelTitle: string | null): UiSdlFilterPanel;

  /**
   * Subtitle for the filter panel.
   */
  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlFilterPanel;

  /**
   * Text for the load save search panel's cancel button.
   */
  readonly cancelLoadSearchButtonText?: string | null;
  withCancelLoadSearchButtonText(cancelLoadSearchButtonText: string | null): UiSdlFilterPanel;

  /**
   * Text for the save as private toggle button.
   */
  readonly saveAsPrivateToggleText?: string | null;
  withSaveAsPrivateToggleText(saveAsPrivateToggleText: string | null): UiSdlFilterPanel;

  /**
   * Dropdown items in a settings menu.
   */
  readonly settingsMenu?: UiSdlFilterPanelSettingsMenu | null;
  withSettingsMenu(settingsMenu: IUiSdlFilterPanelSettingsMenu | null): UiSdlFilterPanel;

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
  static fromJson(json: any | null): UiSdlFilterPanel | null;

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
  static fromJsonString(json: string | null): UiSdlFilterPanel | null;

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
  static fromXmlString(xml: string | null): UiSdlFilterPanel | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlFilterPanel | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlFilterPanel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlFilterPanel;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlFilterPanel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlFilterPanel | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlFilterPanel | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlFilterPanel;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlFilterPanel;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlFilterPanel;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlFilterPanel;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlFilterPanel;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlFilterPanel;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlFilterPanel;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlFilterPanel;

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
  withoutFieldAtPath(path: string): UiSdlFilterPanel;

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
  withoutField(field: string | null): UiSdlFilterPanel;

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
  withoutField(field: FieldType | null): UiSdlFilterPanel;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlFilterPanel;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlFilterPanel;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlFilterPanel;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlFilterPanel;

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
  defaultField(field: string): UiSdlFilterPanel;

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
  defaultField(field: FieldType): UiSdlFilterPanel;

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
  unsetField(field: string): UiSdlFilterPanel;

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
  unsetField(field: FieldType): UiSdlFilterPanel;

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
  removeField(field: string): UiSdlFilterPanel;

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
  removeField(field: FieldType): UiSdlFilterPanel;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlFilterPanel;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlFilterPanel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlFilterPanel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlFilterPanel;

  mergeJson(json: any | null): UiSdlFilterPanel;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlFilterPanel;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlFilterPanel;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlFilterPanel | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlFilterPanel | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlFilterPanel | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlFilterPanel | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlFilterPanel | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlFilterPanel | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlFilterPanel | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlFilterPanel | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlFilterPanel | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlFilterPanel;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlFilterPanel;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlFilterPanel;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlFilterPanel;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlFilterPanel;

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
  static make(fields: any, withDefaults?: boolean): UiSdlFilterPanel;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlFilterPanel | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlFilterPanel;

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
  afterMake(): UiSdlFilterPanel;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlFilterPanel;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlFilterPanel>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlFilterPanel;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlFilterPanel | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlFilterPanel | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlFilterPanel | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlFilterPanel | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

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
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<UiSdlFilterPanel | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlFilterPanel;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlFilterPanel | null, spec?: UpsertSpec | null): UiSdlFilterPanel | null;

  upsert(srcObj?: UiSdlFilterPanel | null, spec?: UpsertSpec | null): UiSdlFilterPanel | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

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
  static fromString(s: string | null): UiSdlFilterPanel | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlFilterPanel | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiSdlFilterPanel, state: UiSdlReduxState): UiSdlFilterPanel | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Dispatch an action for an input component with the fieldName and actionSuffix.
   *
   * @param id
   *           Id of the component.
   * @param fieldName
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   *
   * @returns A `TRIGGER_INPUT_ACTION_${actionSuffix}` action with the following properties:
   * - `payload.componentId` {string} The `id` of the component.
   * - `payload.field` {string} The `fieldName` of the input component.
   */
  static triggerInputAction(id?: string | null, fieldName?: string | null, actionSuffix?: string | null): UiSdlTriggerInputAction;

  /**
   * Triggered when input value changes.
   *
   * @param id
   *           Id of the component.
   * @param event
   *           Browser event.
   * @param data
   *           The data passed from the presentational components.
   *
   * @returns An `INPUT_CHANGE` action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for filtering.
   * - payload.value {any} The value(s) of the input.  Generally a string or int.
   * - meta.dataSourceId {string} The `id` of the data source to which the items belong.
   */
  static inputChangeAction(id: string, event?: any, data?: any): UiSdlInputChangeAction;

  /**
   * Listens for actions of type `INPUT_CHANGE`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static inputChangeEffect(state: UiSdlReduxState, action: UiSdlInputChangeAction): UiSdlReduxState;

  /**
   * Triggered on mount with dynamically rendered form fields changes.
   *
   * @param id
   *           Id of the component.
   * @param childId
   *           Id of the child component
   *
   * @returns A `CHILD_COMPONENT_ID_STORE` action
   */
  static storeChildComponentIdsAction(id: string, childId: string): UiSdlStoreChildComponentIdAction;

  /**
   * Triggered when the user wants to change the `hidden` value of a form field
   *
   * @param id
   *           Id of the component.
   * @param fieldName
   *           Name of the form field.
   * @param hidden
   *           Whether to hide or show the field. Setting to true will hide the field
   *           and setting to false will show it.
   * @returns either a `FIELD_HIDE` action or `FIELD_SHOW` action, based on payload.hidden, with the following properties:
   * - payload.componentId {string} Id of the component
   * - payload.fieldName {string} Name of the form field
   */
  static hideShowFieldAction(id: string, fieldName?: string | null, hidden?: boolean): UiSdlFieldHideShowAction;

  /**
   * Helper function to hide or show an input.
   *
   * @param state
   *          Redux state.
   * @param fieldName
   *          Name of the field to be enabled/disabled.
   * @param hidden
   *          Whether to hide or show the field. Setting to true will hide the field
   *          and setting to false will show it.
   * @param componentId
   *          Id of the current component instance.
   *
   * @returns A new Redux state.
   */
  static fieldHideShowEffect(state: UiSdlReduxState, fieldName: string, hidden?: boolean, componentId: string): UiSdlReduxState;

  /**
   * Listens for actions of type `FIELD_HIDE` and sets the `hidden` property on the input to true.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static fieldHideEffect(state: UiSdlReduxState, action: UiSdlFieldHideShowAction): UiSdlReduxState;

  /**
   * Listens for actions of type `FIELD_SHOW` and sets the `hidden` property on the input to false.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static fieldShowEffect(state: UiSdlReduxState, action: UiSdlFieldHideShowAction): UiSdlReduxState;

  /**
   * Listens for actions of type `CHILD_COMPONENT_ID_STORE` and updates the redux store with children component ids.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static childComponentIdStoreReducer(state: UiSdlReduxState, action: UiSdlStoreChildComponentIdAction): UiSdlReduxState;

  /**
   * Listens for actions of type `LOADED_DATA_HANDLE` and refreshes the `formFieldValues` value to match
   * the actual data values in the fields.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static loadedDataHandleReducer(state: UiSdlReduxState, action: UiSdlLoadedDataHandleAction): UiSdlReduxState;

  /**
   * Helper function to massage the `UiSdlFormBase` fields to their appropriate structure for rendering.
   *
   * @param fieldSets
   *            The fieldSets as configured through the ui metadata file.
   * @param dataConfig
   *            The data object that is referenced from the rendering component. Is a key value pair where the
   *            keys are the unique strings and the value is a data source value.
   * @param componentDataSourceKey
   *            The key to refer to the component's data source. This key should be present in `dataConfig`.
   *
   * @returns json object with keys that reflect the inputs, `fieldSets` and `dataConfig`.
   *            `fieldSets` contains the appropriate structure for rendering the component.
   *            `dataConfig` contains all the references to data sources needed by the component.
   */
  static prepareFieldSetsForRendering(fieldSets?: any | null, dataConfig?: any | null, componentDataSourceKey?: string | null): any | null;

  /**
   * Getter method for retrieving the given component's {@link formFieldValues} from the given Redux state.
   *
   * @param componentId
   *           The form component's metadata ID.
   * @param state
   *           Redux state.
   *
   * @returns The components form field values.
   */
  static getFormFieldValuesFromState(componentId: string, state: UiSdlReduxState): C3.Map<string | null, any>;

  /**
   * Helper function for updating the redux store with changes made to several field values.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @param componentId
   *           The component ID triggering the action.
   *
   * @returns A new Redux state.
   */
  static inputChangeEffectHelper(state: UiSdlReduxState, updatedFieldValues?: C3.Array<any>, componentId?: string | null): UiSdlReduxState;

  /**
   * Triggered when the user submits the filter.
   *
   * @param id
   *            Id of the component.
   * @param event
   *           Browser event.
   * @param data
   *           A map of filter panel field values indexed by filter panel field name.
   *
   * @returns A `FILTER_SUBMIT` action for this instance.
   */
  static submitFilterAction(id: string, event?: any, data?: any): UiSdlFilterPanelSubmitAction;

  /**
   * Triggered when the user submits the filter.
   *
   * @param id
   *            Id of the component.
   * @param event
   *           Browser event.
   * @param advancedFilterString
   *           The filter string to use for filtering the component's datasource.
   *
   * @returns An `ADVANCED_FILTER_SUBMIT` action for this instance.
   */
  static submitAdvancedFilterAction(id: string, event?: any, advancedFilterString?: string | null): UiSdlAdvancedFilterSubmitAction;

  /**
   * Triggered when input dataSources need to be loaded.
   *
   * @param id
   *            Id of the component.
   *
   * @returns An `INPUT_DS_LOAD` action for this instance.
   */
  static loadInputDataSourcesAction(id: string): UiSdlInputDsLoadAction;

  /**
   * Triggered when a single input value changes.
   *
   * @param id
   *            Id of the component.
   * @param data
   *           The data passed from the presentational components.
   *
   * @returns A `SINGLE_INPUT_CHANGE` action for this instance with the following properties:
   * - payload.value {any} The value(s) of the input. Generally a string or int.
   * - componentId {string} The `id` of the component to which the items belong.
   */
  static changeSingleInputAction(id: string, data?: any): UiSdlChangeInputAction;

  /**
   * Triggered when Filter Panel is mounted.
   *
   * @param id
   *            Id of the component.
   *
   * @returns An `FIELD_VALUES_INIT` action for this instance.
   */
  static initFieldValuesAction(id: string): UiSdlComponentActionPayload;

  /**
   * Triggered when multiple inputs' values change at once.
   *
   * @param id
   *            Id of the component.
   * @param event
   *           Browser event.
   * @param data
   *           The data passed from the presentational components.
   *
   * @returns An `INPUT_CHANGE` action for this instance.
   */
  static changeMultipleInputsAction(id: string, data?: any): UiSdlChangeInputAction;

  /**
   * Triggered when the user saves a search.
   *
   * @param id
   *           Id of the component.
   * @param savedSearchName
   *           The name of the search they want to save
   * @param saveAsPrivate
   *           The boolean to determine whether or not this is a global or private search.
   *
   * @returns A `SAVED_SEARCH_SUBMIT` action for this instance.
   */
  static submitSavedSearchAction(id: string, savedSearchName?: string | null, saveAsPrivate?: boolean): UiSdlSavedSearchSubmitAction;

  /**
   * Triggered when the user deletes a saved search.
   * @param id
   *           Id of the component.
   * @param savedSearch
   *           The saved search they want to delete.
   *
   * @returns A `SAVED_SEARCH_DELETE` action for this instance.
   */
  static deleteSavedSearchAction(id: string, savedSearch?: UiSdlSavedSearch | null): UiSdlSavedSearchDeleteAction;

  /**
   * Triggered when the user renames a saved search.
   *
   * @param id
   *           Id of the component.
   * @param savedSearch
   *           The saved search they want to rename.
   * @param newName
   *           The new name for the saved search.
   *
   * @returns A `SAVED_SEARCH_RENAME` action for this instance.
   */
  static renameSavedSearchAction(id: string, savedSearch: UiSdlSavedSearch, newName: string, privateSearch: boolean): UiSdlSavedSearchRenameAction;

  /**
   * Triggered when the user loads a search.
   *
   * @param id
   *           Id of the component.
   * @param savedSearchName
   *           The name of the search they want to save.
   *
   * @returns A `SAVED_SEARCHES_LOAD` action for this instance.
   */
  static loadSavedSearchesAction(id: string): UiSdlSavedSearchesLoadAction;

  /**
   * Triggered when the user enters a filter string.
   *
   * @param id
   *            Id of the component.
   * @param filterString
   *           The filter string to validate.
   *
   * @returns A `FILTER_STRING_VALIDATE` action for this instance.
   */
  static validateFilterStringAction(id: string, filterString?: string | null): UiSdlFilterStringValidateAction;

  /**
   * Listens for actions of type `SINGLE_INPUT_CHANGE` and updates the redux store with the updated field value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static singleInputChangeEffect(state: UiSdlReduxState, action: UiSdlChangeInputAction): UiSdlReduxState;

  /**
   * Listens for actions of type `FIELD_VALUES_INIT` and updates the redux store with the initial form field values.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static fieldValuesInitReducer(state: UiSdlReduxState, action: UiSdlChangeInputAction): UiSdlReduxState;

  /**
   * Listens for actions of type `MULTIPLE_INPUTS_CHANGE` and updates the redux store with updated field values.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static multipleInputsChangeEffect(state: UiSdlReduxState, action: UiSdlChangeInputAction): UiSdlReduxState;

  /**
   * Listens for actions of type `SAVED_SEARCH_DELETE`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static savedSearchDeleteEffect(state: UiSdlReduxState, action: UiSdlSavedSearchDeleteAction): UiSdlReduxState;

  /**
   * Listens for actions of type `SAVED_SEARCH_RENAME`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static savedSearchRenameEffect(state: UiSdlReduxState, action: UiSdlSavedSearchRenameAction): UiSdlReduxState;

  /**
   * Triggers `FILTER_SUBMIT` on all filterable components that are filtered by this filter panel.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static filterSubmitEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for a data source to save the current filters.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static savedSearchPersistEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for a data source to load the saved searches.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static savedSearchesLoadEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for a data source to delete the given saved search.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static savedSearchDeleteEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers 'NOTIFICATION_HIDDEN_SET' action to hide the notification.
   */
  static notificationHiddenSetAction(id: string): UiSdlInlineNotificationSetHiddenAction;

  /**
   * Listens for actions of type `NOTIFICATION_HIDDEN_SET` and sets the 'hidden' property on the notification to the payload value.
   */
  static setNotificationHiddenReducer(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for a data source to rename the given saved search.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static savedSearchRenameEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for a data source to validate the given filter string.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static filterStringValidateEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for all filter fields which are dependent
   * on the changed input.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static singleInputChangeEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for each filter fields which are dependent
   * on the changed input when there's a multipleInputsChanged event.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static multipleInputsChangeEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Checks for existence of saved search with the given name; if none exists, persists it.
   *
   * @param name
   *           The name of the saved search.
   * @param typeName
   *           The name of the type on which the search would be executed.
   * @param serializedFilterFieldValues
   *           The JSON-serialized filter field values.
   * @param metadataId
   *           Metadata ID of react component on which the saved search is applicable.
   * @param privateSearch
   *           The boolean to determine whether or not this is a global or private search.
   *
   * @return `true` if save was successful, `false` if name already exists.
   */
  static validateAndPersistSavedSearch(name: string, typeName: string, serializedFilterFieldValues: string, metadataId: string, privateSearch?: boolean): boolean;

  /**
   * Checks to see if the given filter string + type name combo is valid.
   *
   * TODO: UI-8457 Change the return type to ExprValidateResult.
   *
   * @param typeName
   *           The name of the type on which the search would be executed.
   * @param filterString
   *           The filter string to validate.
   *
   * @return `true` if the filter string is valid for the given type,
   *         `error` if the filter string is incomplete or fields do not belong to type,
   *         `false` if the type does not exist.
   */
  static validateFilterString(typeName: string, filterString?: string | null): string | null;

  /**
   * Triggered whenever a particular input is intended to be enabled or disabled.
   * @param id
   *            Id of the component.
   * @param field
   *            The field name to be enabled/disabled.
   * @param disable
   *            Whtether to enable or to disable the input. Setting to true will disable the input and setting to false
   *            will enable it.
   *
   * @return An 'FILTER_INPUT_(ENABLE|DISABLE)' action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for.
   */
  static enableDisableFilterInputAction(id: string, field: string, disable?: boolean): UiSdlFilterInputEnableDisableAction;

  /**
   * Helper function to enable or disable a filter input.
   *
   * @param state
   *          Redux state.
   * @param fieldName
   *          Name of the field to be enabled/disabled.
   * @param disable
   *          Whether to disable the field or not.
   * @param componentId
   *          Id of the current component instance.
   *
   * @returns A new Redux state.
   */
  static enableDisableFilterInputHelper(state: UiSdlReduxState, fieldName: string, disable?: boolean, componentId: string): UiSdlReduxState;

  /**
   * Listens for actions of type `FILTER_INPUT_ENABLE`, and sets the 'disabled' property on the input to be false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static filterInputEnableReducer(state: UiSdlReduxState, action: UiSdlFilterInputEnableDisableAction): UiSdlReduxState;

  /**
   * Listens for actions of type `FILTER_INPUT_DISABLE`, and sets the 'disabled' property on the input to be true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static filterInputDisableReducer(state: UiSdlReduxState, action: UiSdlFilterInputEnableDisableAction): UiSdlReduxState;
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
