// TypeScript definitions for the C3 type MetadataExtractionConfigFormReact

/**
 * Metadata Extraction Configuration Form React Component Type
 *
 * This type defines the React component interface for the metadata extraction
 * configuration form. It extends the base form type with React-specific
 * rendering capabilities.
 *
 * @remarks this represents a value passed to a method that expects an instance of MetadataExtractionConfigFormReact
 */
declare interface IMetadataExtractionConfigFormReact {

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
  dataSpec?: IUiSdlNoData | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
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
   * Available tags that can be selected for metadata extraction
   *
   * This array contains tag objects with the following structure:
   * - id: Unique identifier for the tag
   * - label: Human-readable display name
   * - description: Detailed explanation of what the tag extracts
   *
   * Note: Currently hardcoded, but could be dynamically loaded from package
   * configuration in future iterations.
   */
  availableTags?: C3.Array<any | null> | Array<any | null>;

  /**
   * Available AI models that can be selected for metadata extraction
   *
   * This array contains model objects with the following structure:
   * - id: Unique identifier for the model
   * - label: Human-readable display name
   * - description: Detailed explanation of the model's capabilities
   *
   * Note: Currently hardcoded, but could be dynamically loaded from package
   * configuration in future iterations.
   */
  availableModels?: C3.Array<any | null> | Array<any | null>;

  /**
   * Currently selected tag IDs for metadata extraction
   *
   * This array contains the IDs of tags that the user has selected
   * for extraction. At least one tag must be selected for the
   * configuration to be valid.
   */
  selectedTags?: C3.Array<string | null> | Array<string | null>;

  /**
   * System prompt for guiding the AI model's metadata extraction behavior
   *
   * This prompt instructs the AI model on how to extract metadata
   * from the documents. It can include specific formatting requirements,
   * extraction rules, or contextual information to improve accuracy.
   *
   * Note: This field is optional and can be empty.
   */
  systemPrompt?: string | null;

  /**
   * Selected AI model for performing metadata extraction
   *
   * The ID of the AI model that will be used to extract metadata
   * from the documents. This could be GPT-4, Claude, Llama, or
   * other supported models.
   *
   * Note: This field is required for the configuration to be valid.
   */
  selectedModel?: string | null;

  /**
   * Name of the selected Source Collection
   *
   * Stores the logical name of the Source Collection that will be used
   * to preview and extract metadata from files.
   */
  sourceCollectionName?: string | null;

  /**
   * Collection of validation error messages
   *
   * This array contains error messages that indicate validation
   * failures in the form. Common errors include:
   * - No tags selected
   * - No model selected
   * - Invalid configuration format
   *
   * The form should display these errors inline to guide the user.
   */
  validationErrors?: C3.Array<string | null> | Array<string | null>;

  /**
   * Notification for tag creation status
   *
   * This object contains notification information for tag creation operations.
   * It includes the notification type (success/error) and message to display.
   * The form should display this notification to inform the user of the operation result.
   */
  notification?: any | null;
}

/**
 * Metadata Extraction Configuration Form React Component Type
 *
 * This type defines the React component interface for the metadata extraction
 * configuration form. It extends the base form type with React-specific
 * rendering capabilities.
 *
 * @remarks this represents a made instance of MetadataExtractionConfigFormReact
 */
declare class MetadataExtractionConfigFormReact extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetadataExtractionConfigFormReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): MetadataExtractionConfigFormReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): MetadataExtractionConfigFormReact;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MetadataExtractionConfigFormReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MetadataExtractionConfigFormReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MetadataExtractionConfigFormReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MetadataExtractionConfigFormReact;

  /**
   * Available tags that can be selected for metadata extraction
   *
   * This array contains tag objects with the following structure:
   * - id: Unique identifier for the tag
   * - label: Human-readable display name
   * - description: Detailed explanation of what the tag extracts
   *
   * Note: Currently hardcoded, but could be dynamically loaded from package
   * configuration in future iterations.
   */
  readonly availableTags?: C3.Array<any | null>;
  withAvailableTags(availableTags: C3.Array<any | null> | Array<any | null>): MetadataExtractionConfigFormReact;

  /**
   * Available AI models that can be selected for metadata extraction
   *
   * This array contains model objects with the following structure:
   * - id: Unique identifier for the model
   * - label: Human-readable display name
   * - description: Detailed explanation of the model's capabilities
   *
   * Note: Currently hardcoded, but could be dynamically loaded from package
   * configuration in future iterations.
   */
  readonly availableModels?: C3.Array<any | null>;
  withAvailableModels(availableModels: C3.Array<any | null> | Array<any | null>): MetadataExtractionConfigFormReact;

  /**
   * Currently selected tag IDs for metadata extraction
   *
   * This array contains the IDs of tags that the user has selected
   * for extraction. At least one tag must be selected for the
   * configuration to be valid.
   */
  readonly selectedTags?: C3.Array<string | null>;
  withSelectedTags(selectedTags: C3.Array<string | null> | Array<string | null>): MetadataExtractionConfigFormReact;

  /**
   * System prompt for guiding the AI model's metadata extraction behavior
   *
   * This prompt instructs the AI model on how to extract metadata
   * from the documents. It can include specific formatting requirements,
   * extraction rules, or contextual information to improve accuracy.
   *
   * Note: This field is optional and can be empty.
   */
  readonly systemPrompt?: string | null;
  withSystemPrompt(systemPrompt: string | null): MetadataExtractionConfigFormReact;

  /**
   * Selected AI model for performing metadata extraction
   *
   * The ID of the AI model that will be used to extract metadata
   * from the documents. This could be GPT-4, Claude, Llama, or
   * other supported models.
   *
   * Note: This field is required for the configuration to be valid.
   */
  readonly selectedModel?: string | null;
  withSelectedModel(selectedModel: string | null): MetadataExtractionConfigFormReact;

  /**
   * Name of the selected Source Collection
   *
   * Stores the logical name of the Source Collection that will be used
   * to preview and extract metadata from files.
   */
  readonly sourceCollectionName?: string | null;
  withSourceCollectionName(sourceCollectionName: string | null): MetadataExtractionConfigFormReact;

  /**
   * Collection of validation error messages
   *
   * This array contains error messages that indicate validation
   * failures in the form. Common errors include:
   * - No tags selected
   * - No model selected
   * - Invalid configuration format
   *
   * The form should display these errors inline to guide the user.
   */
  readonly validationErrors?: C3.Array<string | null>;
  withValidationErrors(validationErrors: C3.Array<string | null> | Array<string | null>): MetadataExtractionConfigFormReact;

  /**
   * Notification for tag creation status
   *
   * This object contains notification information for tag creation operations.
   * It includes the notification type (success/error) and message to display.
   * The form should display this notification to inform the user of the operation result.
   */
  readonly notification?: any | null;
  withNotification(notification: any | null): MetadataExtractionConfigFormReact;

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
  static fromJson(json: any | null): MetadataExtractionConfigFormReact | null;

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
  static fromJsonString(json: string | null): MetadataExtractionConfigFormReact | null;

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
  static fromXmlString(xml: string | null): MetadataExtractionConfigFormReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): MetadataExtractionConfigFormReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): MetadataExtractionConfigFormReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MetadataExtractionConfigFormReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MetadataExtractionConfigFormReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MetadataExtractionConfigFormReact | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MetadataExtractionConfigFormReact | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): MetadataExtractionConfigFormReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MetadataExtractionConfigFormReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MetadataExtractionConfigFormReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): MetadataExtractionConfigFormReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): MetadataExtractionConfigFormReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): MetadataExtractionConfigFormReact;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): MetadataExtractionConfigFormReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MetadataExtractionConfigFormReact;

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
  withoutFieldAtPath(path: string): MetadataExtractionConfigFormReact;

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
  withoutField(field: string | null): MetadataExtractionConfigFormReact;

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
  withoutField(field: FieldType | null): MetadataExtractionConfigFormReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): MetadataExtractionConfigFormReact;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): MetadataExtractionConfigFormReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): MetadataExtractionConfigFormReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): MetadataExtractionConfigFormReact;

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
  defaultField(field: string): MetadataExtractionConfigFormReact;

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
  defaultField(field: FieldType): MetadataExtractionConfigFormReact;

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
  unsetField(field: string): MetadataExtractionConfigFormReact;

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
  unsetField(field: FieldType): MetadataExtractionConfigFormReact;

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
  removeField(field: string): MetadataExtractionConfigFormReact;

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
  removeField(field: FieldType): MetadataExtractionConfigFormReact;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): MetadataExtractionConfigFormReact;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): MetadataExtractionConfigFormReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): MetadataExtractionConfigFormReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): MetadataExtractionConfigFormReact;

  mergeJson(json: any | null): MetadataExtractionConfigFormReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): MetadataExtractionConfigFormReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): MetadataExtractionConfigFormReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<MetadataExtractionConfigFormReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<MetadataExtractionConfigFormReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<MetadataExtractionConfigFormReact | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<MetadataExtractionConfigFormReact | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<MetadataExtractionConfigFormReact | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, MetadataExtractionConfigFormReact | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, MetadataExtractionConfigFormReact | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<MetadataExtractionConfigFormReact | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<MetadataExtractionConfigFormReact | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): MetadataExtractionConfigFormReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): MetadataExtractionConfigFormReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): MetadataExtractionConfigFormReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): MetadataExtractionConfigFormReact;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): MetadataExtractionConfigFormReact;

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
  static make(fields: any, withDefaults?: boolean): MetadataExtractionConfigFormReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): MetadataExtractionConfigFormReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): MetadataExtractionConfigFormReact;

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
  afterMake(): MetadataExtractionConfigFormReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): MetadataExtractionConfigFormReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<MetadataExtractionConfigFormReact>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): MetadataExtractionConfigFormReact;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<MetadataExtractionConfigFormReact | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<MetadataExtractionConfigFormReact | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<MetadataExtractionConfigFormReact | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<MetadataExtractionConfigFormReact | null> | null>;

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
  dependencies(): MetadataDeps<MetadataExtractionConfigFormReact | null>;

  save(subPath?: string | null, contentType?: string | null): MetadataExtractionConfigFormReact;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: MetadataExtractionConfigFormReact | null, spec?: UpsertSpec | null): MetadataExtractionConfigFormReact | null;

  upsert(srcObj?: MetadataExtractionConfigFormReact | null, spec?: UpsertSpec | null): MetadataExtractionConfigFormReact | null;

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
  static fromString(s: string | null): MetadataExtractionConfigFormReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): MetadataExtractionConfigFormReact | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: MetadataExtractionConfigFormReact, state: UiSdlReduxState): MetadataExtractionConfigFormReact | null;

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
   * Select a tag for metadata extraction
   *
   * Adds the specified tag ID to the selectedTags array.
   * This action is triggered when a user clicks on a tag card.
   *
   * @param componentId - Unique identifier for the component instance
   * @param tagId - ID of the tag to select
   * @returns Redux action for tag selection
   */
  static selectTagAction(componentId: string, tagId: string): UiSdlReduxAction<any>;

  /**
   * Reducer for handling tag selection actions
   *
   * Adds the specified tag ID to the selectedTags array when a tag
   * is selected by the user.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and tagId
   * @returns Updated state with the new tag added to selectedTags
   */
  static selectTagReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Get the currently selected tags from the component state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns Array of selected tag IDs
   */
  static getSelectedTags(componentId: string, state: UiSdlReduxState): C3.Array<string | null>;

  /**
   * Set the complete list of selected tags
   *
   * Sets the selectedTags array to the provided array of tag IDs.
   * This action is used for initializing the form state.
   *
   * @param componentId - Unique identifier for the component instance
   * @param selectedTags - Array of tag IDs to set
   * @returns Redux action for setting selected tags
   */
  static setSelectedTagsAction(componentId: string, selectedTags: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Reducer for handling set selected tags actions
   *
   * Sets the selectedTags array to the provided array of tag IDs.
   * This reducer is used for initializing the form state.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and selectedTags
   * @returns Updated state with the new selected tags array
   */
  static setSelectedTagsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Deselect a previously selected tag
   *
   * Removes the specified tag ID from the selectedTags array.
   * This action is triggered when a user clicks on a selected tag card.
   *
   * @param componentId - Unique identifier for the component instance
   * @param tagId - ID of the tag to deselect
   * @returns Redux action for tag deselection
   */
  static deselectTagAction(componentId: string, tagId: string): UiSdlReduxAction<any>;

  /**
   * Reducer for handling tag deselection actions
   *
   * Removes the specified tag ID from the selectedTags array when a tag
   * is deselected by the user.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and tagId
   * @returns Updated state with the tag removed from selectedTags
   */
  static deselectTagReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Update the system prompt for metadata extraction
   *
   * Sets the systemPrompt field to the provided text. This action
   * is triggered when the user types in the system prompt textarea.
   *
   * @param componentId - Unique identifier for the component instance
   * @param prompt - New system prompt text
   * @returns Redux action for updating system prompt
   */
  static updateSystemPromptAction(componentId: string, prompt: string): UiSdlReduxAction<any>;

  /**
   * Reducer for handling system prompt updates
   *
   * Updates the systemPrompt field with the new text provided by the user.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and prompt
   * @returns Updated state with the new system prompt
   */
  static updateSystemPromptReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Get the current system prompt from the component state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns Current system prompt string
   */
  static getSystemPrompt(componentId: string, state: UiSdlReduxState): string;

  /**
   * Select an AI model for metadata extraction
   *
   * Sets the selectedModel field to the provided model ID. This action
   * is triggered when the user selects a model from the radio button group.
   *
   * @param componentId - Unique identifier for the component instance
   * @param modelId - ID of the selected AI model
   * @returns Redux action for model selection
   */
  static selectModelAction(componentId: string, modelId: string): UiSdlReduxAction<any>;

  /**
   * Reducer for handling model selection actions
   *
   * Sets the selectedModel field to the specified model ID when a model
   * is selected by the user.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and modelId
   * @returns Updated state with the new selected model
   */
  static selectModelReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Get the currently selected model from the component state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns Currently selected model ID
   */
  static getSelectedModel(componentId: string, state: UiSdlReduxState): string;

  /**
   * Set the Source Collection name used for preview and extraction
   *
   * Persists the provided Source Collection name into component state.
   *
   * @param componentId - Unique identifier for the component instance
   * @param sourceCollectionName - The Source Collection logical name
   */
  static setSourceCollectionNameAction(componentId: string, sourceCollectionName: string): UiSdlReduxAction<any>;

  /**
   * Reducer for setting the Source Collection name
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and sourceCollectionName
   * @returns Updated state with sourceCollectionName persisted
   */
  static setSourceCollectionNameReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Get the Source Collection name from component state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns Source Collection name string
   */
  static getSourceCollectionName(componentId: string, state: UiSdlReduxState): string;

  /**
   * Save the complete metadata extraction configuration
   *
   * Attempts to save the current configuration state. This action
   * triggers validation and, if successful, saves the configuration
   * for the metadata extraction node.
   *
   * @param componentId - Unique identifier for the component instance
   * @param config - Complete configuration object to save
   * @returns Redux action for saving configuration
   */
  static saveConfigurationAction(componentId: string, config: any): UiSdlReduxAction<any>;

  /**
   * Reducer for handling configuration save actions
   *
   * Saves the complete configuration object to the component state.
   * This reducer is called when the user completes the configuration.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and config
   * @returns Updated state with the saved configuration
   */
  static saveConfigurationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Set validation error messages
   *
   * Updates the validationErrors array with the provided error messages.
   * This action is triggered when validation fails or when errors are cleared.
   *
   * @param componentId - Unique identifier for the component instance
   * @param errors - Array of error messages to display
   * @returns Redux action for setting validation errors
   */
  static setValidationErrorsAction(componentId: string, errors: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Reducer for handling validation error updates
   *
   * Sets the validationErrors array with the provided error messages.
   * This reducer is called when validation fails or when errors are cleared.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and errors
   * @returns Updated state with the new validation errors
   */
  static setValidationErrorsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Get the current validation errors from the component state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns Array of validation error messages
   */
  static getValidationErrors(componentId: string, state: UiSdlReduxState): C3.Array<string | null>;

  /**
   * Trigger preview data functionality
   *
   * This action is triggered when the user clicks the Preview Data button.
   * It will open the preview data modal to show file contents and extraction results.
   *
   * @param componentId - Unique identifier for the component instance
   * @returns Redux action for preview data
   */
  static previewDataAction(componentId: string): UiSdlReduxAction<any>;

  /**
   * Create a new metadata tag
   *
   * This action is triggered when the user creates a new tag through the create tag modal.
   * It will create a new tag with the provided name, description, values, and values type.
   *
   * @param componentId - Unique identifier for the component instance
   * @param tagData - Object containing tag information (name, description, values, valuesType)
   * @returns Redux action for creating a tag
   */
  static createTagAction(componentId: string, tagData: any): UiSdlReduxAction<any>;

  /**
   * Set notification for tag creation status
   *
   * This action is triggered when tag creation succeeds or fails. It will display
   * a notification to the user indicating the operation result.
   *
   * @param componentId - Unique identifier for the component instance
   * @param notification - Notification object with type and message
   * @returns Redux action for setting notification
   */
  static setNotificationAction(componentId: string, notification: any): UiSdlReduxAction<any>;

  /**
   * Reducer for handling notification actions
   *
   * Sets the notification field with the provided notification object.
   * This reducer is called when tag creation succeeds or fails.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and notification
   * @returns Updated state with the notification set
   */
  static setNotificationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Produce the complete TSX file, including the declaration of the interface for the "props" based on the data
   * fields defined on the component type. This interface is always named with the type name plus "Props" and appended
   * to the existing source file.
   */
  static tsx(): string | null;

  /**
   * Produce the "props" interface for an arbitrary type. This will produce a TypeScript interface declaration that
   * includes all the data fields of the specified type, and the public data fields of types it mixes in. The details
   * can be controlled through the spec argument, but the defaults are what gets used by #tsx.
   *
   * @param type the type to examine
   * @param spec options for interface generation
   * @return TypeScript interface declaration
   */
  static buildProps(type: Type, spec?: ReactComponentPropsSpec | null): string | null;

  /**
   * The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
   */
  static tsxPath(): string | null;

  /**
   * If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
   */
  static importedModule(): any;

  /**
   * The render function must be implemented as the function the TSX implementation exports.
   */
  static render(props?: MetadataExtractionConfigFormReact | null): void;
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
