// TypeScript definitions for the C3 type MetadataExtractorPreviewDataContainerReact

/**
 * Metadata Extractor Preview Data Container React Component Type
 *
 * This type defines the React component interface for the preview data container.
 * It extends the base type with React-specific rendering capabilities.
 *
 * @remarks this represents a value passed to a method that expects an instance of MetadataExtractorPreviewDataContainerReact
 */
declare interface IMetadataExtractorPreviewDataContainerReact {

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
   * Currently selected file for preview
   */
  selectedFile?: string | null;

  /**
   * Collection of files available for preview
   */
  files?: C3.Array<any | null> | Array<any | null>;

  /**
   * Current extraction results
   */
  extractionResults?: C3.Array<any | null> | Array<any | null>;

  /**
   * Loading state for data fetching operations
   */
  loading?: boolean;

  /**
   * Error state for failed operations
   */
  error?: string | null;

  /**
   * Currently loaded file content for preview
   */
  fileContent?: any;

  /**
   * Loading state for file content reading operations
   */
  isReadingContent?: boolean;

  /**
   * Error state for file content reading failures
   */
  contentError?: string | null;

  /**
   * Files fetched from the SourceCollection for preview and processing
   *
   * This array contains file objects fetched from FileSourceCollection.listFiles.
   * Each file object includes metadata such as id, name, size, type, and kind.
   * This data is used for file selection and preview functionality.
   */
  sourceCollectionFiles?: C3.Array<any | null> | Array<any | null>;

  /**
   * Extracted tags rendered in the grid
   */
  extractedTags?: C3.Array<any | null> | Array<any | null>;

  /**
   * Whether tag extraction is running
   */
  isExtractingTags?: boolean;

  /**
   * Error during tag extraction
   */
  extractError?: string | null;
}

/**
 * Metadata Extractor Preview Data Container React Component Type
 *
 * This type defines the React component interface for the preview data container.
 * It extends the base type with React-specific rendering capabilities.
 *
 * @remarks this represents a made instance of MetadataExtractorPreviewDataContainerReact
 */
declare class MetadataExtractorPreviewDataContainerReact extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Currently selected file for preview
   */
  readonly selectedFile?: string | null;
  withSelectedFile(selectedFile: string | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Collection of files available for preview
   */
  readonly files?: C3.Array<any | null>;
  withFiles(files: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  /**
   * Current extraction results
   */
  readonly extractionResults?: C3.Array<any | null>;
  withExtractionResults(extractionResults: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  /**
   * Loading state for data fetching operations
   */
  readonly loading?: boolean;
  withLoading(loading: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Error state for failed operations
   */
  readonly error?: string | null;
  withError(error: string | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Currently loaded file content for preview
   */
  readonly fileContent?: any;
  withFileContent(fileContent: any): MetadataExtractorPreviewDataContainerReact;

  /**
   * Loading state for file content reading operations
   */
  readonly isReadingContent?: boolean;
  withIsReadingContent(isReadingContent: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Error state for file content reading failures
   */
  readonly contentError?: string | null;
  withContentError(contentError: string | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Files fetched from the SourceCollection for preview and processing
   *
   * This array contains file objects fetched from FileSourceCollection.listFiles.
   * Each file object includes metadata such as id, name, size, type, and kind.
   * This data is used for file selection and preview functionality.
   */
  readonly sourceCollectionFiles?: C3.Array<any | null>;
  withSourceCollectionFiles(sourceCollectionFiles: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  /**
   * Extracted tags rendered in the grid
   */
  readonly extractedTags?: C3.Array<any | null>;
  withExtractedTags(extractedTags: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  /**
   * Whether tag extraction is running
   */
  readonly isExtractingTags?: boolean;
  withIsExtractingTags(isExtractingTags: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Error during tag extraction
   */
  readonly extractError?: string | null;
  withExtractError(extractError: string | null): MetadataExtractorPreviewDataContainerReact;

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
  static fromJson(json: any | null): MetadataExtractorPreviewDataContainerReact | null;

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
  static fromJsonString(json: string | null): MetadataExtractorPreviewDataContainerReact | null;

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
  static fromXmlString(xml: string | null): MetadataExtractorPreviewDataContainerReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): MetadataExtractorPreviewDataContainerReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): MetadataExtractorPreviewDataContainerReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MetadataExtractorPreviewDataContainerReact | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MetadataExtractorPreviewDataContainerReact | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): MetadataExtractorPreviewDataContainerReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  withoutFieldAtPath(path: string): MetadataExtractorPreviewDataContainerReact;

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
  withoutField(field: string | null): MetadataExtractorPreviewDataContainerReact;

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
  withoutField(field: FieldType | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): MetadataExtractorPreviewDataContainerReact;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): MetadataExtractorPreviewDataContainerReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): MetadataExtractorPreviewDataContainerReact;

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
  defaultField(field: string): MetadataExtractorPreviewDataContainerReact;

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
  defaultField(field: FieldType): MetadataExtractorPreviewDataContainerReact;

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
  unsetField(field: string): MetadataExtractorPreviewDataContainerReact;

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
  unsetField(field: FieldType): MetadataExtractorPreviewDataContainerReact;

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
  removeField(field: string): MetadataExtractorPreviewDataContainerReact;

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
  removeField(field: FieldType): MetadataExtractorPreviewDataContainerReact;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): MetadataExtractorPreviewDataContainerReact;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): MetadataExtractorPreviewDataContainerReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): MetadataExtractorPreviewDataContainerReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): MetadataExtractorPreviewDataContainerReact;

  mergeJson(json: any | null): MetadataExtractorPreviewDataContainerReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<MetadataExtractorPreviewDataContainerReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<MetadataExtractorPreviewDataContainerReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<MetadataExtractorPreviewDataContainerReact | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<MetadataExtractorPreviewDataContainerReact | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<MetadataExtractorPreviewDataContainerReact | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, MetadataExtractorPreviewDataContainerReact | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, MetadataExtractorPreviewDataContainerReact | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<MetadataExtractorPreviewDataContainerReact | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<MetadataExtractorPreviewDataContainerReact | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): MetadataExtractorPreviewDataContainerReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  static make(fields: any, withDefaults?: boolean): MetadataExtractorPreviewDataContainerReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): MetadataExtractorPreviewDataContainerReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): MetadataExtractorPreviewDataContainerReact;

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
  afterMake(): MetadataExtractorPreviewDataContainerReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): MetadataExtractorPreviewDataContainerReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<MetadataExtractorPreviewDataContainerReact>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): MetadataExtractorPreviewDataContainerReact;

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
  static render(props?: MetadataExtractorPreviewDataContainerReact | null): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<MetadataExtractorPreviewDataContainerReact | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<MetadataExtractorPreviewDataContainerReact | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<MetadataExtractorPreviewDataContainerReact | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<MetadataExtractorPreviewDataContainerReact | null> | null>;

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
  dependencies(): MetadataDeps<MetadataExtractorPreviewDataContainerReact | null>;

  save(subPath?: string | null, contentType?: string | null): MetadataExtractorPreviewDataContainerReact;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: MetadataExtractorPreviewDataContainerReact | null, spec?: UpsertSpec | null): MetadataExtractorPreviewDataContainerReact | null;

  upsert(srcObj?: MetadataExtractorPreviewDataContainerReact | null, spec?: UpsertSpec | null): MetadataExtractorPreviewDataContainerReact | null;

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
  static fromString(s: string | null): MetadataExtractorPreviewDataContainerReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): MetadataExtractorPreviewDataContainerReact | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: MetadataExtractorPreviewDataContainerReact, state: UiSdlReduxState): MetadataExtractorPreviewDataContainerReact | null;

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
   * Fetch files from a SourceCollection for preview and processing
   *
   * This action triggers the fetching of files from FileSourceCollection.listFiles.
   * It requires a sourceCollectionName parameter to specify which collection to fetch from.
   * The epic will handle the async operation and dispatch a success/failure action.
   *
   * @param componentId - Unique identifier for the component instance
   * @param sourceCollectionName - Name of the SourceCollection to fetch files from
   * @returns Redux action for fetching source collection files
   */
  static fetchSourceCollectionFilesAction(componentId: string, sourceCollectionName: string): UiSdlReduxAction<any>;

  /**
   * Action for successful source collection files fetch
   *
   * This action is dispatched when files are successfully fetched from a SourceCollection.
   * It contains the fetched files data and component ID.
   *
   * @param componentId - Unique identifier for the component instance
   * @param files - Array of files fetched from the SourceCollection
   * @returns Redux action for successful file fetch
   */
  static fetchSourceCollectionFilesSuccessAction(componentId: string, files: C3.Array<any | null>): UiSdlReduxAction<any>;

  /**
   * Action for failed source collection files fetch
   *
   * This action is dispatched when file fetching fails from a SourceCollection.
   * It contains the error message and component ID.
   *
   * @param componentId - Unique identifier for the component instance
   * @param error - Error message describing the failure
   * @returns Redux action for failed file fetch
   */
  static fetchSourceCollectionFilesFailureAction(componentId: string, error: string): UiSdlReduxAction<any>;

  /**
   * Reducer for handling source collection files fetch actions
   *
   * This reducer is called when files are successfully fetched from a SourceCollection.
   * It updates the sourceCollectionFiles field with the fetched file data.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and files
   * @returns Updated state with the fetched source collection files
   */
  static fetchSourceCollectionFilesSuccessReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Get the currently fetched source collection files from the component state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns Array of source collection files
   */
  static getSourceCollectionFiles(componentId: string, state: UiSdlReduxState): C3.Array<any | null>;

  /**
   * Read the content of a selected file for preview
   *
   * This action triggers the reading of file content from File.readContentValue.
   * It requires a fileUrl parameter to specify which file to read.
   * The epic will handle the async operation and dispatch success/failure actions
   * based on the API response.
   *
   * @param componentId - Unique identifier for the component instance
   * @param fileUrl - URL of the file to read content from
   * @returns Redux action for reading file content
   */
  static readFileContentAction(componentId: string, fileUrl: string): UiSdlReduxAction<any>;

  /**
   * Action for successful file content reading
   *
   * This action is dispatched when file content is successfully read.
   * It contains the file content data and component ID.
   *
   * @param componentId - Unique identifier for the component instance
   * @param fileContent - Content of the file that was read
   * @param fileMetadata - Metadata about the file (optional)
   * @returns Redux action for successful file content reading
   */
  static readFileContentSuccessAction(componentId: string, fileContent: any, fileMetadata: any): UiSdlReduxAction<any>;

  /**
   * Action for failed file content reading
   *
   * This action is dispatched when file content reading fails.
   * It contains the error message and component ID.
   *
   * @param componentId - Unique identifier for the component instance
   * @param error - Error message describing the failure
   * @returns Redux action for failed file content reading
   */
  static readFileContentFailureAction(componentId: string, error: string): UiSdlReduxAction<any>;

  /**
   * Reducer for handling file content reading success actions
   *
   * This reducer is called when file content is successfully read.
   * It updates the fileContent, isReadingContent, and contentError fields.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId, fileContent, and fileMetadata
   * @returns Updated state with the file content and cleared loading/error states
   */
  static readFileContentSuccessReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Reducer for handling file content reading failure actions
   *
   * This reducer is called when file content reading fails.
   * It updates the contentError field and clears the loading state.
   *
   * @param state - Current application state
   * @param action - Redux action containing componentId and error
   * @returns Updated state with the error message and cleared loading state
   */
  static readFileContentFailureReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Get the currently loaded file content from the component state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns The file content or null if not loaded
   */
  static getFileContent(componentId: string, state: UiSdlReduxState): any;

  /**
   * Get the current file content reading loading state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns True if currently reading file content, false otherwise
   */
  static getIsReadingContent(componentId: string, state: UiSdlReduxState): boolean;

  /**
   * Get the current file content reading error state
   *
   * @param componentId - Unique identifier for the component instance
   * @param state - Current application state
   * @returns Error message if file content reading failed, empty string otherwise
   */
  static getContentError(componentId: string, state: UiSdlReduxState): string;

  /**
   * Trigger tag extraction for a file
   */
  static extractTagsAction(componentId: string, fileUrl: string, llmClientName?: string | null, categoryIds: C3.Array<string | null>, systemPrompt?: string | null): UiSdlReduxAction<any>;

  /**
   * Store successful extraction results
   */
  static extractTagsSuccessReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Store extraction error
   */
  static extractTagsFailureReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Selector for extracted tags
   */
  static getExtractedTags(componentId: string, state: UiSdlReduxState): C3.Array<any | null>;

  /**
   * Selector for loading state
   */
  static getIsExtractingTags(componentId: string, state: UiSdlReduxState): boolean;

  /**
   * Selector for error
   */
  static getExtractError(componentId: string, state: UiSdlReduxState): string;

  /**
   * Set extracting tags loading state
   */
  static setExtractingTagsAction(componentId: string, isExtracting: boolean): UiSdlReduxAction<any>;

  /**
   * Set extraction error state
   */
  static setExtractErrorAction(componentId: string, error: string): UiSdlReduxAction<any>;

  /**
   * Reducer for setting extracting tags loading state
   */
  static setExtractingTagsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Reducer for setting extraction error state
   */
  static setExtractErrorReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Epic for fetching files from a SourceCollection
   *
   * This epic handles the async operation of fetching files from FileSourceCollection.listFiles.
   * It listens for FETCH_SOURCE_COLLECTION_FILES actions and dispatches success/failure actions
   * based on the API response.
   *
   * @param actionStream - Stream of Redux actions
   * @param stateStream - Stream of Redux state
   * @returns Observable of Redux actions
   */
  static fetchSourceCollectionFilesEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Epic for reading file content
   *
   * This epic handles the async operation of reading file content from File.readContentValue.
   * It listens for READ_FILE_CONTENT actions and dispatches success/failure actions
   * based on the API response.
   *
   * @param actionStream - Stream of Redux actions
   * @param stateStream - Stream of Redux state
   * @returns Observable of Redux actions
   */
  static readFileContentEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Epic for metadata tag extraction
   *
   * Triggers GenaiCore.Unstructured.ProcessorComponent.TagExtraction.metadataExtraction with
   * llm client by name and tag categories by ID references.
   */
  static extractTagsEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;
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
