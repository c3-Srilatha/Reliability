// TypeScript definitions for the C3 type BatchExportSpec

/**
 * Specification of the options/parameters for the {@link Export.startExport} function.
 *
 * @remarks this represents a value passed to a method that expects an instance of BatchExportSpec
 */
declare interface IBatchExportSpec {

  /**
   * Prefix for the files.
   */
  fileUrlOrEncodedPathPrefix?: string | null;

  /**
   * Needs to be set to true if files with fileUrlOrEncodedPathPrefix pre-exist
   */
  deleteExisting?: boolean;

  /**
   * There will be exceptions if files with fileUrlOrEncodedPathPrefix pre-exist
   */
  failIfUrlNotEmpty?: boolean;

  /**
   * Content type
   */
  contentType?: string | null;

  /**
   * Content Encoding
   */
  contentEncoding?: string | null;

  /**
   * Number of files into which data must be exported. If numObjPerFile is specified, that takes precedence over numFiles.
   * This is also the the number of map jobs to spawn because one map job writes to one file.
   */
  numFiles?: number | null;

  /**
   * If set to true, random string will not be added to the file names
   * Because S3 supports write-read consistency but only eventual consistency for read-write-read pattern,
   * We need to make sure the same file which might be read before, would not get written and then read again
   */
  doNotRandomizeFileName?: boolean;

  /**
   * Filter expression.
   */
  filter?: string | null;

  /**
   * Order expression.
   * Doesn't work with cassandra target types in BatchExportSpec
   */
  order?: string | null;

  /**
   * Total number of objects to export
   * Doesn't work with cassandra target types
   */
  limit?: number | null;

  /**
   * Header when exported data as csv.
   * Required if the content type is csv
   */
  csvHeader?: string | null;

  /**
   * Optional format for a csv values. Key should be path used in a csv header.
   */
  csvFormat?: C3.Map<string | null, Format | null> | {[key: string | null]: IFormat | null};

  /**
   * Include spec when exporting data as xml.
   * Works only with {@link Persistable#exportData} function
   */
  xmlInclude?: string | null;

  /**
   * Include spec when exporting data as json.
   * Works only with {@link Persistable#exportData} function
   */
  jsonInclude?: string | null;

  /**
   * Type being exported or imported. It is used to export/import the data of this type.
   * It cannot be provided with targetAction. The api uses {@link Persistable#exportData} and
   * {@link Persistable#importData} api to export and import. To provide {@link ExportDataSpec} and
   * {@link ImportDataSpec} for the action, please use targetAction field.
   */
  targetType?: IType | null;

  /**
   * Contains the target type, action name and the arguments for the action.
   * In case of export, the output of the action is serialized to the targetPath.
   * In case of import, the action is called just with the imported data and ignores the provided arguments.
   * It cannot be provided with targetType.
   *
   * For export, the type of the first parameter of the targetAction needs to have a 'filter' or 'ids' field to
   * determine the set of objs that each invocation to targetAction will use. The user cannot specify a filter in the
   * obj. The filter has to be provided with {@link BatchExportSpec}.
   */
  targetAction?: IPartiallyAppliedAction | null;

  /**
   * Prefix to be applied to files being exported/imported
   */
  targetPath?: string | null;

  /**
   * Will be used to generate fileUrlOrEncodedPathPrefix if neither {@link fileList} nor
   * {@link fileUrlOrEncodedPathPrefix} is given
   */
  id?: string | null;

  /**
   * List of target files for the Export/Import Job.
   * If provided, it is going to override {@link fileUrlOrEncodedPathPrefix}.
   * For Export jobs, files will be created at the urls in the {@link fileList}.
   * For Import jobs, objs will be imported from the files in the {@link fileList}.
   */
  fileList?: IFileList | null;

  /**
   * The No. of batch jobs to be scheduled together
   */
  scheduleBatchSize?: number | null;

  /**
   * Number of objects to export per file. It takes precedence over numFiles if specified.
   * Doesn't work with cassandra target types
   */
  numObjPerFile?: number | null;
}

/**
 * Specification of the options/parameters for the {@link Export.startExport} function.
 *
 * @remarks this represents a made instance of BatchExportSpec
 */
declare class BatchExportSpec extends Obj {

  /**
   * Prefix for the files.
   */
  readonly fileUrlOrEncodedPathPrefix?: string | null;
  withFileUrlOrEncodedPathPrefix(fileUrlOrEncodedPathPrefix: string | null): BatchExportSpec;

  /**
   * Needs to be set to true if files with fileUrlOrEncodedPathPrefix pre-exist
   */
  readonly deleteExisting?: boolean;
  withDeleteExisting(deleteExisting: boolean): BatchExportSpec;

  /**
   * There will be exceptions if files with fileUrlOrEncodedPathPrefix pre-exist
   */
  readonly failIfUrlNotEmpty?: boolean;
  withFailIfUrlNotEmpty(failIfUrlNotEmpty: boolean): BatchExportSpec;

  /**
   * Content type
   */
  readonly contentType?: string | null;
  withContentType(contentType: string | null): BatchExportSpec;

  /**
   * Content Encoding
   */
  readonly contentEncoding?: string | null;
  withContentEncoding(contentEncoding: string | null): BatchExportSpec;

  /**
   * Number of files into which data must be exported. If numObjPerFile is specified, that takes precedence over numFiles.
   * This is also the the number of map jobs to spawn because one map job writes to one file.
   */
  readonly numFiles?: number | null;
  withNumFiles(numFiles: number | null): BatchExportSpec;

  /**
   * If set to true, random string will not be added to the file names
   * Because S3 supports write-read consistency but only eventual consistency for read-write-read pattern,
   * We need to make sure the same file which might be read before, would not get written and then read again
   */
  readonly doNotRandomizeFileName?: boolean;
  withDoNotRandomizeFileName(doNotRandomizeFileName: boolean): BatchExportSpec;

  /**
   * Filter expression.
   */
  readonly filter?: string | null;
  withFilter(filter: string | null): BatchExportSpec;

  /**
   * Order expression.
   * Doesn't work with cassandra target types in BatchExportSpec
   */
  readonly order?: string | null;
  withOrder(order: string | null): BatchExportSpec;

  /**
   * Total number of objects to export
   * Doesn't work with cassandra target types
   */
  readonly limit?: number | null;
  withLimit(limit: number | null): BatchExportSpec;

  /**
   * Header when exported data as csv.
   * Required if the content type is csv
   */
  readonly csvHeader?: string | null;
  withCsvHeader(csvHeader: string | null): BatchExportSpec;

  /**
   * Optional format for a csv values. Key should be path used in a csv header.
   */
  readonly csvFormat?: C3.Map<string | null, Format | null>;
  withCsvFormat(csvFormat: C3.Map<string | null, Format | null> | {[key: string | null]: IFormat | null}): BatchExportSpec;

  /**
   * Include spec when exporting data as xml.
   * Works only with {@link Persistable#exportData} function
   */
  readonly xmlInclude?: string | null;
  withXmlInclude(xmlInclude: string | null): BatchExportSpec;

  /**
   * Include spec when exporting data as json.
   * Works only with {@link Persistable#exportData} function
   */
  readonly jsonInclude?: string | null;
  withJsonInclude(jsonInclude: string | null): BatchExportSpec;

  /**
   * Type being exported or imported. It is used to export/import the data of this type.
   * It cannot be provided with targetAction. The api uses {@link Persistable#exportData} and
   * {@link Persistable#importData} api to export and import. To provide {@link ExportDataSpec} and
   * {@link ImportDataSpec} for the action, please use targetAction field.
   */
  readonly targetType?: Type | null;
  withTargetType(targetType: IType | null): BatchExportSpec;

  /**
   * Contains the target type, action name and the arguments for the action.
   * In case of export, the output of the action is serialized to the targetPath.
   * In case of import, the action is called just with the imported data and ignores the provided arguments.
   * It cannot be provided with targetType.
   *
   * For export, the type of the first parameter of the targetAction needs to have a 'filter' or 'ids' field to
   * determine the set of objs that each invocation to targetAction will use. The user cannot specify a filter in the
   * obj. The filter has to be provided with {@link BatchExportSpec}.
   */
  readonly targetAction?: PartiallyAppliedAction | null;
  withTargetAction(targetAction: IPartiallyAppliedAction | null): BatchExportSpec;

  /**
   * Prefix to be applied to files being exported/imported
   */
  readonly targetPath?: string | null;
  withTargetPath(targetPath: string | null): BatchExportSpec;

  /**
   * Will be used to generate fileUrlOrEncodedPathPrefix if neither {@link fileList} nor
   * {@link fileUrlOrEncodedPathPrefix} is given
   */
  readonly id?: string | null;
  withId(id: string | null): BatchExportSpec;

  /**
   * List of target files for the Export/Import Job.
   * If provided, it is going to override {@link fileUrlOrEncodedPathPrefix}.
   * For Export jobs, files will be created at the urls in the {@link fileList}.
   * For Import jobs, objs will be imported from the files in the {@link fileList}.
   */
  readonly fileList?: FileList | null;
  withFileList(fileList: IFileList | null): BatchExportSpec;

  /**
   * The No. of batch jobs to be scheduled together
   */
  readonly scheduleBatchSize?: number | null;
  withScheduleBatchSize(scheduleBatchSize: number | null): BatchExportSpec;

  /**
   * Number of objects to export per file. It takes precedence over numFiles if specified.
   * Doesn't work with cassandra target types
   */
  readonly numObjPerFile?: number | null;
  withNumObjPerFile(numObjPerFile: number | null): BatchExportSpec;

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
  static fromJson(json: any | null): BatchExportSpec | null;

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
  static fromJsonString(json: string | null): BatchExportSpec | null;

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
  static fromXmlString(xml: string | null): BatchExportSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): BatchExportSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BatchExportSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BatchExportSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BatchExportSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BatchExportSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BatchExportSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): BatchExportSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BatchExportSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BatchExportSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): BatchExportSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): BatchExportSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): BatchExportSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): BatchExportSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BatchExportSpec;

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
  withoutFieldAtPath(path: string): BatchExportSpec;

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
  withoutField(field: string | null): BatchExportSpec;

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
  withoutField(field: FieldType | null): BatchExportSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): BatchExportSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): BatchExportSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): BatchExportSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): BatchExportSpec;

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
  defaultField(field: string): BatchExportSpec;

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
  defaultField(field: FieldType): BatchExportSpec;

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
  unsetField(field: string): BatchExportSpec;

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
  unsetField(field: FieldType): BatchExportSpec;

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
  removeField(field: string): BatchExportSpec;

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
  removeField(field: FieldType): BatchExportSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): BatchExportSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): BatchExportSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): BatchExportSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): BatchExportSpec;

  mergeJson(json: any | null): BatchExportSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): BatchExportSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): BatchExportSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<BatchExportSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<BatchExportSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<BatchExportSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<BatchExportSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<BatchExportSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, BatchExportSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, BatchExportSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<BatchExportSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<BatchExportSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): BatchExportSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): BatchExportSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): BatchExportSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): BatchExportSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): BatchExportSpec;

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
  static make(fields: any, withDefaults?: boolean): BatchExportSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): BatchExportSpec;

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
  afterMake(): BatchExportSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): BatchExportSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<BatchExportSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): BatchExportSpec;

  /**
   * Returns true if the Export/Import spec has non-empty {@link fileList}.
   */
  hasFileList(): boolean;

  /**
   * Returns the file url at the given index stored in {@link fileList}.
   */
  fileUrl(indx: number, failIfOutOfBounds?: boolean): string | null;

  /**
   * Returns the file at the given index stored in {@link fileList}.
   */
  file(indx: number, failIfOutOfBounds?: boolean): File | null;
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
