// TypeScript definitions for the C3 type VideoFrame

/**
 * Frame of a video
 *
 * @remarks this represents a value passed to a method that expects an instance of VideoFrame
 */
declare interface IVideoFrame {

  /**
   * Width in pixels of this media if known
   *
   * @see readMetadata
   * @see safeWidth
   */
  width?: number | null;

  /**
   * Height in pixels of this media if known
   *
   * @see readMetadata
   * @see safeWidth
   */
  height?: number | null;

  /**
   * Url of the source image file. In-memory content may not match content stored in the file system, but we keep this
   * reference to know what is source was.
   */
  contentLocation?: string | null;

  /**
   * A modifier to the media-type. When present, its value indicates what additional content
   * codings have been applied to the data, and thus what decoding mechanisms must be
   * applied in order to obtain the media-type referenced by the contentType.
   *
   * It is recommended to use #safeContentEncoding instead as it will attempt to guess content encoding.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding
   */
  contentEncoding?: string | null;

  /**
   * Describes the natural language(s) of the intended audience.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
   */
  contentLanguage?: string | null;

  /**
   * The size of the entity-body, in bytes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
   */
  contentLength?: number | null;

  /**
   * The media type of the content (MIME type).
   * This includes contentTypeParams such as delimiters, characters as well.
   * To specify delimiters please see {@link ContentType}
   * and use ContentType.make({mimeType:"test/csv", parameters: {delimiter : delimiter}})
   * Examples of accepted delimiters include "\\'", "\\t", "|", "\\\\", ";", etc
   * It is recommended to use #safeContentType instead as it will attempt to guess content type.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
   */
  contentType?: string | null;

  /**
   * Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
   * attachment locally.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
   */
  contentDisposition?: string | null;

  /**
   * The ETag response-header field provides the current value of the entity tag for the requested variant.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
   */
  eTag?: string | null;

  /**
   * The date and time at which the variant was last modified.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
   */
  lastModified?: DateTime | Date | string | null;

  /**
   * Id of user / identity who last last modified this content.
   */
  lastModifiedBy?: string | null;

  /**
   * An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  contentMD5?: string | null;

  /**
   * An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  contentSHA1?: string | null;

  /**
   * Field to maintain state whether content metadata was read or not.
   */
  hasMetadata?: boolean;

  /**
   * The actual content value.
   */
  content?: any | null;
}

/**
 * Frame of a video
 *
 * @remarks this represents a made instance of VideoFrame
 */
declare class VideoFrame extends Obj {

  /**
   * Width in pixels of this media if known
   *
   * @see readMetadata
   * @see safeWidth
   */
  readonly width?: number | null;
  withWidth(width: number | null): VideoFrame;

  /**
   * Height in pixels of this media if known
   *
   * @see readMetadata
   * @see safeWidth
   */
  readonly height?: number | null;
  withHeight(height: number | null): VideoFrame;

  /**
   * Url of the source image file. In-memory content may not match content stored in the file system, but we keep this
   * reference to know what is source was.
   */
  readonly contentLocation?: string | null;
  withContentLocation(contentLocation: string | null): VideoFrame;

  /**
   * A modifier to the media-type. When present, its value indicates what additional content
   * codings have been applied to the data, and thus what decoding mechanisms must be
   * applied in order to obtain the media-type referenced by the contentType.
   *
   * It is recommended to use #safeContentEncoding instead as it will attempt to guess content encoding.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Encoding
   */
  readonly contentEncoding?: string | null;
  withContentEncoding(contentEncoding: string | null): VideoFrame;

  /**
   * Describes the natural language(s) of the intended audience.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Language
   */
  readonly contentLanguage?: string | null;
  withContentLanguage(contentLanguage: string | null): VideoFrame;

  /**
   * The size of the entity-body, in bytes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length
   */
  readonly contentLength?: number | null;
  withContentLength(contentLength: number | null): VideoFrame;

  /**
   * The media type of the content (MIME type).
   * This includes contentTypeParams such as delimiters, characters as well.
   * To specify delimiters please see {@link ContentType}
   * and use ContentType.make({mimeType:"test/csv", parameters: {delimiter : delimiter}})
   * Examples of accepted delimiters include "\\'", "\\t", "|", "\\\\", ";", etc
   * It is recommended to use #safeContentType instead as it will attempt to guess content type.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
   */
  readonly contentType?: string | null;
  withContentType(contentType: string | null): VideoFrame;

  /**
   * Whether content should be displayed inline in the browser as a web page or part of a web page or downloaded as an
   * attachment locally.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition
   */
  readonly contentDisposition?: string | null;
  withContentDisposition(contentDisposition: string | null): VideoFrame;

  /**
   * The ETag response-header field provides the current value of the entity tag for the requested variant.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag
   */
  readonly eTag?: string | null;
  withETag(eTag: string | null): VideoFrame;

  /**
   * The date and time at which the variant was last modified.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified
   */
  readonly lastModified?: DateTime | null;
  withLastModified(lastModified: DateTime | Date | string | null): VideoFrame;

  /**
   * Id of user / identity who last last modified this content.
   */
  readonly lastModifiedBy?: string | null;
  withLastModifiedBy(lastModifiedBy: string | null): VideoFrame;

  /**
   * An MD5 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  readonly contentMD5?: string | null;
  withContentMD5(contentMD5: string | null): VideoFrame;

  /**
   * An SHA1 digest of the entity-body for the purpose of providing an end-to-end message integrity check
   * as well as supporting content-based caching (ETag).
   */
  readonly contentSHA1?: string | null;
  withContentSHA1(contentSHA1: string | null): VideoFrame;

  /**
   * Field to maintain state whether content metadata was read or not.
   */
  readonly hasMetadata?: boolean;
  withHasMetadata(hasMetadata: boolean): VideoFrame;

  /**
   * The actual content value.
   */
  readonly content?: any | null;
  withContent(content: any | null): VideoFrame;

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
  static fromJson(json: any | null): VideoFrame | null;

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
  static fromJsonString(json: string | null): VideoFrame | null;

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
  static fromXmlString(xml: string | null): VideoFrame | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): VideoFrame | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): VideoFrame;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): VideoFrame;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): VideoFrame;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<VideoFrame | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<VideoFrame | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): VideoFrame;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): VideoFrame;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): VideoFrame;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): VideoFrame;

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
  withField(field: string, value: any, doNotConvert?: boolean): VideoFrame;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): VideoFrame;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): VideoFrame;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): VideoFrame;

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
  withoutFieldAtPath(path: string): VideoFrame;

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
  withoutField(field: string | null): VideoFrame;

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
  withoutField(field: FieldType | null): VideoFrame;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): VideoFrame;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): VideoFrame;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): VideoFrame;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): VideoFrame;

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
  defaultField(field: string): VideoFrame;

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
  defaultField(field: FieldType): VideoFrame;

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
  unsetField(field: string): VideoFrame;

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
  unsetField(field: FieldType): VideoFrame;

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
  removeField(field: string): VideoFrame;

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
  removeField(field: FieldType): VideoFrame;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): VideoFrame;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): VideoFrame;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): VideoFrame;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): VideoFrame;

  mergeJson(json: any | null): VideoFrame;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): VideoFrame;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): VideoFrame;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<VideoFrame | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<VideoFrame | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<VideoFrame | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<VideoFrame | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<VideoFrame | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, VideoFrame | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, VideoFrame | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<VideoFrame | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<VideoFrame | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): VideoFrame;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): VideoFrame;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): VideoFrame;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): VideoFrame;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): VideoFrame;

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
  static make(fields: any, withDefaults?: boolean): VideoFrame;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): VideoFrame;

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
  afterMake(): VideoFrame;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): VideoFrame;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<VideoFrame>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): VideoFrame;

  /**
   * @return width in pixels of this visual media
   *
   * @see readMetadata
   */
  safeWidth(): number;

  /**
   * @return height in pixels of this visual media
   *
   * @see readMetadata
   */
  safeHeight(): number;

  /**
   * Reads metadata such as #width and #height. Note if media metadata has not been read it is more efficient to
   * call #readMetadata first before calling #safeWidth and #safeHeight
   */
  readMediaMetadata(): VideoFrame;

  /**
   * @return instance of the Visual Media from provided content and optionally reads metadata
   */
  static fromContent(content: Content, readMetadata?: boolean): VideoFrame;

  /**
   * Constructs instance of the Visual media from provided binary content and optionally reads metadata. It is advisable
   * to specify content type but if skipped then best effort is made to guess the visual media type.
   */
  static fromRawBinary(data: any, contentType?: string | null, width?: number | null, height?: number | null): VideoFrame;

  /**
   * Constructs instance of the visual media from provided base64 encoded content and optionally reads visual media metadata. It is
   * advisable to specify content type but if skipped then best effort is made to guess the content type.
   */
  static fromBase64String(data: string, contentType?: string | null, width?: number | null, height?: number | null): VideoFrame;

  /**
   * @return binary data for this Visual Media
   */
  rawBinary(): any | null;

  /**
   * @return binary data for this Image with specified MediaType.
   */
  rawBinary(mediaType?: string | null): any;

  /**
   * Updates visual media with provided binary data
   */
  withRawBinary(data: any, contentType?: string | null, width?: number | null, height?: number | null): VideoFrame;

  /**
   * @return base64 string encoded data for this Image
   */
  base64String(): string | null;

  /**
   * Updates visual media with provided base64 encoded data
   */
  withBase64String(data: string, contentType?: string | null, width?: number | null, height?: number | null): VideoFrame;

  /**
   * Saves content of the this Media as File.
   */
  saveToFile(encodedPathOrUrl: string): File;

  /**
   * Render image as HTML.
   */
  renderer(): HtmlRenderer | null;

  /**
   * Do not generate java signatures for these methods and instead implement in py
   */
  _repr_(): string | null;

  /**
   * Implementation of _repr_html_() function
   */
  _reprHtml_(): string | null;

  /**
   * Read Image from file. If prefix is {@link Data#LOCAL_FOLDER_PREFIX}, then the file will be loaded from
   * the local process of the caller of this function, as opposed to from the C3 {@link FileSystem}.
   * @param file
   *    url of the file to instantiate an Image from.
   * @param failIfMissing
   *    iff set, then function will fail if a file cannot be found at the provided url.
   * @return the instantiated Image.
   */
  static fromFile(file: string, failIfMissing?: boolean): Image | null;

  /**
   * Read Image from binary
   * If `mediaType` is not specified, an attempt will be made to auto-detect the image type.
   * Supported formats are: SVG (should be passed explicitly), JPEG, PNG, BMP, WBMP, GIF.
   */
  static fromMediaContent(img: any, mediaType?: string | null, url?: string | null): Image;

  /**
   * @return a C3 Image from a Java native image.
   */
  static fromBufferedImage(bi?: any, spec?: ImageOperSpec | null): Image;

  /**
   * @return a copy of the image converted to ImageContent
   */
  toImageContent(): ImageContent;

  /**
   * Saves image to the specified directory. Filename is taken from #contentLocation
   */
  save(file: string, mediaType?: string | null): void;

  /**
   * Image type
   *
   * @see readMetadata
   * @see safeImageType
   */
  get imageType(): string;

  /**
   * Returns MediaType of the Image
   */
  get mediaType(): string;

  /**
   * @return the [Data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) containing this image
   */
  get dataUrl(): string;

  /**
   * @return name of image file without extension if name is known. Otherwise null will be returned.
   */
  get fileNameNoExt(): string | null;

  /**
   * Draws a list of {@link BoundingBox} on a copy of this image.
   */
  draw(boxes: C3.Array<BoundingBox | null>, spec?: BoundingBoxDrawingSpec | null): Image;

  /**
   * Scale with scaling factor.
   *
   * @param scale
   *           Scaling factor. Should be positive number.
   */
  scale(scale: number): Image;

  /**
   * Scale the image to the newWidth and newHeight
   *
   * @param newWidth
   *           New width of the image. Should be positive number.
   * @param newHeight
   *           New height of the image. Should be positive number.
   */
  resize(newWidth: number, newHeight: number): Image;

  /**
   * Crop the image at the topLeft or bottomRight values provided.
   *
   * `topLeftX + width` should be smaller or equal than the image's width and `topLeftY + height` smaller or equal than the image's height.
   * Otherwise error will be thrown.
   */
  crop(topLeftX: number, topLeftY: number, width: number, height: number): Image;

  /**
   * Flip image. If no parameter is given will flip horizontally.
   */
  flip(vertically?: boolean): Image;

  /**
   * Rotate image.
   */
  rotate(angle: number): Image;

  /**
   * Convert image to grayscale.
   */
  toGrayscale(): Image;

  /**
   * Return color of the pixel encoded as ARGB.
   * (0, 0) is a top-left corner.
   * Throw an error if coordinates are out of range.
   */
  rgb(x: number, y: number): number;

  /**
   * @return an array of integer pixels row-to-row, with each pixel encoded as ARGB.
   */
  rgbData(): C3.Array<number | null>;

  /**
   * @return true if this is a text content (not simply plain text but csv, json, xml etc).
   * I.e. readString is meaningful on a Content.
   */
  isAnyText(): boolean;

  /**
   * Helper method for isAnyText() implementation which takes in the `mediaType` of the `ContentTypeInfo` subTypes
   * ({@link ContentType}, {@link ContentMeta}).
   */
  isAnyTextImpl(mediaType: string): boolean;

  /**
   * @return true if this is a plain text content (i.e. not specifically csv, json, xml etc).
   */
  isPlainText(): boolean;

  /**
   * @return true if this is a unknown binary content (i.e. not specifically c3Binary or parquet).
   */
  isBinary(): boolean;

  /**
   * @return true if this is a csv content.
   */
  isCsv(): boolean;

  /**
   * @return true if this is a green button csv content.
   */
  isGreenButtonCsv(): boolean;

  /**
   * @return true if this is a green button xml content.
   */
  isGreenButtonXml(): boolean;

  /**
   * @return true if this is a json content.
   */
  isJson(): boolean;

  /**
   * @return true if this is a json content. http://jsonlines.org/.
   */
  isJsonLines(): boolean;

  /**
   * @return true if this is YAML content.
   *
   * @see https://yaml.org/
   */
  isYaml(): boolean;

  /**
   * @return true if this is a xml content.
   */
  isXml(): boolean;

  /**
   * @return true if this is a xlsx content.
   */
  isXlsx(): boolean;

  /**
   * @return true if this is a X12-EDI content.
   */
  isEdi(): boolean;

  /**
   * @return true if this is c3 binary content.
   */
  isC3Binary(): boolean;

  /**
   * @return true if this is a c3 type content.
   */
  isC3Type(): boolean;

  /**
   * @return true if this is a JavaScript content.
   */
  isJavaScript(): boolean;

  /**
   * @return true if this is a Python content.
   */
  isPython(): boolean;

  /**
   * @return true if this is a R content.
   */
  isR(): boolean;

  /**
   * @return true if this is a ruby source code content.
   */
  isRuby(): boolean;

  /**
   * @return true if this is a Java content.
   */
  isJava(): boolean;

  /**
   * @return true if this is a Java Script content.
   */
  isTypeScript(): boolean;

  /**
   * @return true if this is any source code content.
   */
  isAnyCode(): boolean;

  /**
   * @return true if this is an Apache Avro content.
   */
  isAvro(): boolean;

  /**
   * @return true if this is an Apache Parquet content.
   */
  isParquet(): boolean;

  /**
   * @return true if this is HDF5 content.
   */
  isHdf5(): boolean;

  /**
   * @return true if this is HTML content.
   */
  isHtml(): boolean;

  /**
   * @return true if this is a Zip file content.
   */
  isZip(): boolean;

  /**
   * @return true if this is a Dsl file content.
   */
  isDsl(): boolean;

  /**
   * @return true if this is a Type Dsl file content.
   */
  isTypeDsl(): boolean;

  /**
   * @return true if this is a UI Dsl file content.
   */
  isUiDsl(): boolean;

  /**
   * @return true if this is a (c3) Doc file content.
   */
  isDoc(): boolean;

  /**
   * @return true if this is a Markdown file content.
   */
  isMarkdown(): boolean;

  /**
   * @return true if this is a an image content.
   */
  isImage(): boolean;

  /**
   * @return true if this is a SVG content.
   */
  isSvg(): boolean;

  /**
   * @return true if this is a PNG content.
   */
  isPng(): boolean;

  /**
   * @return true if this is a JPEG content.
   */
  isJpeg(): boolean;

  /**
   * @return character set if this content is text.
   */
  charset(): string | null;

  /**
   * @return URL for this content. Note that it is best to use this method instead of other optional fields like
   * contentLocation or url (for other sub types). Throws error if URL is not available.
   */
  safeUrl(): string | null;

  /**
   * @return parsed content URL.
   */
  parseUrl(): Url;

  /**
   * @return Content Type if provided or best guess based on file name.
   */
  safeContentType(): string;

  /**
   * @return Content Encoding if provides or best guess based on file name.
   */
  safeContentEncoding(): string;

  /**
   * @return content type custom parameters.
   */
  contentTypeParams(): C3.Map<string | null, string | null>;

  /**
   * @return parsed content type.
   */
  parseContentType(): ContentType;

  /**
   * @return content type and encoding if known or best guess based on available info; first part of the pair is
   *         content type.
   */
  guessContentTypeAndEncoding(): Pair<string | null, string | null>;

  /**
   * Retrieves directory url if the content location points to a file.
   */
  directoryUrl(): string;

  /**
   * Retrieves name if the content location points to a file.
   */
  fileName(): string | null;

  /**
   * Retrieves extension of the file referenced by content location or `null` if file doesn't have an extension.
   * The extension includes the leading dot (e.g., ".py", ".json").
   *
   * @see #fileExtWithoutDot
   * @see #hasFileExt
   * @see FileExt
   */
  fileExt(): string | null;

  /**
   * Retrieves extension of the file referenced by content location without the leading dot or `null` if file doesn't have an extension.
   * Returns the extension without the dot (e.g., "py", "json").
   *
   * @see #fileExt
   * @see #hasFileExt
   * @see FileExt
   */
  fileExtWithoutDot(): string | null;

  /**
   * Retrieves primary extension of the file referenced by content location or `null` if file doesn't have it. Primary
   * extension is last token after last `.`; e.g. for `file.tar.gz` it will return `gz`.
   */
  filePrimaryExt(): string | null;

  /**
   * Retrieves secondary extension of the file referenced by content location or `null` if file doesn't have it.
   * Secondary extension is second to last token before last `.`; e.g. for `file.tar.gz` it will return `tar`.
   */
  fileSecondaryExt(): string | null;

  /**
   * Changes file name in this instance.
   */
  withFileName(fileName: string | null): VideoFrame;

  /**
   * Changes file extension in this instance.
   */
  withFileExt(fileExt: string | null): VideoFrame;

  /**
   * Check whether this content has the specified file extension (case insensitive).
   * Handles extensions with and without '.' prefix, as well as compound extensions.
   *
   * @param ext file extension to check, with or without period (e.g., "py" or ".py")
   * @see #fileExt
   * @see FileExt
   */
  hasFileExt(ext: string): boolean;

  /**
   * Helper methods for sub-types to implement safeUrl;
   *
   * @return url passed as param if not void or this.contentLocation if set or throws exception.
   */
  safeUrlImpl(url?: string | null): string | null;

  /**
   * @return {@link eTag} if present otherwise read eTag from File located at {@link contentLocation}. Throws exception
   * if contentLocation is not present
   */
  safeETag(): string | null;

  /**
   * Adds an id and generates an in memory content location.
   * if suffix provided, will use suffix instead of random uuid.
   */
  identify(suffix?: string | null): VideoFrame;

  /**
   * @return true if this content can't be modified.
   */
  isReadOnly(): boolean;

  /**
   * @return true if this content can't be read.
   */
  isWriteOnly(): boolean;

  /**
   * @return true if this content is empty; i.e. contentLength <= 0.
   */
  isEmpty(spec?: FileOperationSpec | null): boolean;

  /**
   * Reads the content metadata if hasMetadata field is false otherwise simply returns current instance. If metadata
   * or metadata handling is missing in the backing store then makes the best guess at it based on file extension from
   * content location. Also sets hasMetadata flag so that consecutive calls are fast.
   *
   * If metadata can change after hasMetadata flag was set then make sure to first call clearMetadata.
   *
   * @see FileOperationSpec.peekForMetadata
   *
   * @return abstract content with metadata.
   */
  readMetadata(spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Removes any existing metadata on the file and re-reads it. This will guarantee the metadata to update even if
   * hasMetadata flag is set to true. This is used when content might have incomplete or outdated metadata and
   * needs to be refreshed.
   */
  refreshMetadata(spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Best guess at missing metadata attributes. E.g. gets content length by reading the content; contentType and
   * encoding from contentLocation; etc. It's recommended to call readMetadata before calling guessMetadata to avoid
   * extra IO.
   *
   * Also sets {@link Content#hasMetadata} to true.
   *
   * @see FileOperationSpec.peekForMetadata
   *
   * @return abstract content with metadata.
   */
  guessMetadata(spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Clears the content metadata; e.g. if it's known to be invalid.
   */
  clearMetadata(): VideoFrame;

  /**
   * @return clone of this content with metadata from provided input.
   */
  withMetadata(meta?: ContentMeta | null): VideoFrame;

  /**
   * Supported fields from {@link ContentMeta} for thus content kind; e.g. contentLength, lastModified, etc
   */
  static metadataFields(): C3.Array<string | null>;

  /**
   * @return byte push stream to be used for writing raw encoded data into this content object. E.g. if
   * contentEncoding is set expectation is that data is already encoded (compressed). It is highly recommended to use
   * higher level apis instead.
   */
  encodedPushStream(spec?: FileOperationSpec | null): Pair<VideoFrame | null, BytePushStream | null>;

  /**
   * @return byte push stream to be used for writing un-encoded data into this content object.
   */
  pushStream(spec?: FileOperationSpec | null): Pair<VideoFrame | null, BytePushStream | null>;

  /**
   * @return character push stream to be used for writing un-encoded data into this content object.
   */
  charPushStream(spec?: FileOperationSpec | null): Pair<VideoFrame | null, CharPushStream | null>;

  /**
   * Reads the raw (possibly compressed) content as byte stream. E.g. if contentEncoding is set then data is going
   * to be encoded (compressed). It is highly recommended to use higher level apis instead.
   *
   * @return the content as byte stream.
   */
  encodedStream(spec?: FileOperationSpec | null): Pair<VideoFrame | null, ByteStream | null> | null;

  /**
   * Reads the de-coded (uncompressed) content as byte stream.
   *
   * @see FileOperationSpec.peekForMetadata
   *
   * @return the content as byte stream.
   */
  stream(spec?: FileOperationSpec | null): ByteStream | null;

  /**
   * Reads the de-coded (uncompressed) content as character stream.
   *
   * @see FileOperationSpec.peekForMetadata
   *
   * @return the content as character stream.
   */
  charStream(spec?: FileOperationSpec | null): CharStream | null;

  /**
   * Reads the content. IMPORTANT to avoid using read with increasing offset to read content in blocks. It is strongly
   * recommended to use stream based methods in such cases.
   *
   * @see FileOperationSpec.peekForMetadata
   *
   * @param offset
   *           offset in bytes; defaults to 0.
   * @param len
   *           number of bytes to read; defaults to entire file size.
   * @return the content.
   */
  read(offset?: number | null, len?: number | null, spec?: FileOperationSpec | null): any | null;

  /**
   * Reads the encoded content.
   *
   * @return the encoded content.
   */
  readEncoded(spec?: FileOperationSpec | null): any | null;

  /**
   * Reads the content as ContentValue.
   *
   * @see FileOperationSpec.peekForMetadata
   *
   * @param offset
   *           offset in bytes defaults to 0
   * @param len
   *           number of bytes to read; defaults to entire file size.
   * @return the content.
   */
  readContentValue(offset?: number | null, len?: number | null, spec?: FileOperationSpec | null): ContentValue;

  /**
   * Reads the content as string. IMPORTANT to avoid using readString with increasing offset to read full content in
   * blocks. It is strongly recommended to use stream based methods in such cases.
   *
   * @see FileOperationSpec.peekForMetadata
   *
   * @param offset
   *           offset in bytes defaults to 0
   * @param len
   *           maximum length of the string; defaults to entire file size.
   * @return the content.
   */
  readString(offset?: number | null, len?: number | null, spec?: FileOperationSpec | null): string | null;

  /**
   * Deserializes content from file into a single C3 Type instance. Throws exception if file contains more then one
   * instance.
   *
   * @see FileObjsOperSpec.targetType
   *
   * @return single object or null if file is empty
   */
  readObj(spec?: FileObjsOperSpec | null): Obj | null;

  /**
   * Deserializes content from file into a list of C3 Type instances.
   *
   * @see FileObjsOperSpec.targetType
   *
   * @return stream of objects
   */
  readObjs(spec?: FileObjsOperSpec | null): Stream<Obj | null>;

  /**
   * Deserializes content from file into a json objects.
   *
   * @return a json object
   */
  readJson(spec?: FileObjsOperSpec | null): any | null;

  /**
   * Deserializes content from file into a list of json objects.
   *
   * @return stream of json objects
   */
  readJsonLines(spec?: FileObjsOperSpec | null): Stream<any | null>;

  /**
   * Reads CSV file header if content contains it or retrieves header from file metadata or spec#csvHeader.
   *
   * @return CSV header
   */
  readCsvHeader(spec?: FileObjsOperSpec | null): C3.Array<string | null>;

  /**
   * Deserializes content from CSV content into a stream of row i.e. column values. Note that first element in the
   * stream will be CSV header read either from content or from it's metadata or from spec#csvHeader.
   *
   * @return stream of parsed CSV rows
   */
  readCsvRows(spec?: FileObjsOperSpec | null): Stream<C3.Array<string | null>>;

  /**
   * @return the first line of the text content.
   */
  readFirstLine(): string | null;

  /**
   * @returns text content lines.
   */
  readLines(): Stream<string | null>;

  /**
   * Match regex patterns against content lines.
   *
   * @param patterns Array of compiled regex patterns to match
   * @param spec Controls matching behavior (mode, limits, etc)
   * @return Match results
   */
  grep(patterns: C3.Array<RegexPattern | null>, spec?: Content.GrepSpec | null): Content.GrepResult;

  /**
   * Match a single regex pattern against content lines.
   * Returns the first match found with captured groups.
   *
   * @param pattern Regex pattern string to match
   * @return First match result (or no-match result with score=0 if not found)
   */
  grep(pattern: string): StringPatternMatch;

  /**
   * Match a single regex pattern against content lines.
   * Returns the first match found with captured groups.
   *
   * @param pattern Compiled regex pattern to match
   * @return First match result (or no-match result with score=0 if not found)
   */
  grep(pattern: RegexPattern): StringPatternMatch;

  /**
   * Truncates file and replaces it's content with provided binary content.
   *
   * @param content
   *           content that needs to be written
   */
  writeStream(content: ByteStream | null, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Truncates file and replaces it's content with provided binary content.
   */
  writeInputStream(inputStream: any, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Truncates file and replaces its content with provided binary content from zipInputStream
   */
  writeZipInputStream(zipInputStream: any, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Truncates file and replaces it's encoded content with provided binary content.
   *
   * @param content
   *           encoded content that needs to be written
   */
  writeEncodedStream(encodedContent: ByteStream | null, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Truncates file and replaces it's encoded content with provided binary content.
   */
  writeEncodedInputStream(inputStream: any, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Truncates file and replaces it's content with provided binary content.
   *
   * @param content
   *           content that needs to be written
   */
  write(content: any | null, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Truncates file and replaces it's encoded content with provided binary content.
   *
   * @param content
   *           encoded content that needs to be written
   */
  writeEncoded(encodedContent: any | null, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Truncates file and replaces it's content with provided string.
   *
   * @param content
   *           content that needs to be written
   */
  writeString(content: string | null, spec?: FileOperationSpec | null): VideoFrame;

  /**
   * Serializes content from a single c3 objects into a file.
   *
   * @param obj
   *          obj that needs to be written
   * @param spec
   *          file operation spec giving more information about how obj should be written
   */
  writeObj(obj: Obj | null, spec?: FileObjsOperSpec | null): VideoFrame;

  /**
   * Serializes content from a list of c3 objects into a file.
   *
   * @param objs
   *          objs that need to be written
   * @param spec
   *          file operation spec giving more information about how objs should be written
   * @return pair of update instance of this content and number of objs written
   */
  writeObjs(objs: Stream<Obj | null> | null, spec?: FileObjsOperSpec | null): Pair<Content | null, number | null>;

  /**
   * Serializes content from a list of c3 objects into a file.
   *
   * @param objs
   *          objs that need to be written
   * @param spec
   *          file operation spec giving more information about how objs should be written
   * @return pair of update instance of this content and number of objs written
   */
  startWriteObjs(spec?: FileObjsOperSpec | null): Pair<VideoFrame | null, PushStream<Obj | null> | null>;

  /**
   * Serialization target type if this content is instance(s) of C3 type.
   *
   * @see FileObjsOperSpec.targetType
   */
  serType(spec?: FileObjsOperSpec | null): Type | null;

  /**
   * If this content target type is Source type then transform content into corresponding C3 Type instances.
   * Source Type is determined from content itself (via #serType).
   */
  transformSource(transformSpec?: SourceTransformSpec | null, spec?: FileObjsOperSpec | null): SourceTransformResult | null;

  /**
   * Checks if content type and encoding is matching the given values.
   */
  contentTypeAndEncodingMatch(contentType?: string | null, contentEncoding?: string | null, spec?: FileOperationSpec | null): boolean;

  /**
   * Compresses the given content.
   *
   * @param contentEncoding
   *            compression content encoding; default is gzip.
   */
  compress(contentEncoding?: string | null, spec?: FileCompressSpec | null): VideoFrame;

  /**
   * Uncompresses content.
   */
  uncompress(spec?: FileCompressSpec | null): VideoFrame;

  /**
   * Rewrites existing content using the new content type. E.g. converts UTF-8 string to iso-8859-1.
   *
   * @param contentType
   *            new content type.
   * @param contentEncoding
   *            new content encoding.
   */
  transcode(contentType: string, contentEncoding: string, spec?: FileCompressSpec | null): VideoFrame;

  /**
   * Copies content to a given target.
   */
  copyContentTo(target: VideoFrame, spec?: FileOperationSpec | null): void;

  /**
   * Copies content to a given target.
   */
  copyContentToStream(target: BytePushStream, doNotCloseTarget?: boolean, spec?: FileOperationSpec | null): void;

  /**
   * Computes the cksum of the file (same as unix utility cksum)
   * @param userEncodedContent
   *           If true, the cksum will skill the decoding of the file
   * @return the checksum of the file
   */
  cksum(useEncodedContent?: boolean, spec?: FileOperationSpec | null): number;

  /**
   * @return md5 from metadata if it exists otherwise compute from content and return.
   */
  safeMd5(spec?: FileOperationSpec | null): string;

  /**
   * @return result of OS `grep` utility over this content.
   */
  osGrep(pattern: string, args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `sed` utility over this content.
   */
  osSed(script: string, args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `awk` utility over this content.
   */
  osAwk(program: string, args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `sort` utility over this content.
   */
  osSort(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `tsort` utility over this content.
   */
  osTSort(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `uniq` utility over this content.
   */
  osUniq(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `expand` utility over this content.
   */
  osExpand(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `unexpand` utility over this content.
   */
  osUnexpand(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `head` utility over this content.
   */
  osHead(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `tail` utility over this content.
   */
  osTail(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `wc` utility over this content.
   */
  osWc(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS `fold` utility over this content.
   */
  osFold(args?: C3.Array<string | null>, spec?: FileOperationSpec | null): CharStream;

  /**
   * @return result of OS command pipeline over this content.
   */
  osCommands(commands: C3.Array<string | null> | null, spec?: FileOperationSpec | null): ByteStream;

  /**
   * Reads this content as ContentValue.
   */
  toContentValue(spec?: FileOperationSpec | null): ContentValue;

  /**
   * @return content that is always empty even if data is written to it.
   */
  static nullContent(): Content;

  /**
   * Encodes given string into a binary based on contentType and contentEncoding.
   */
  static encode(content: string, contentType?: string | null, contentEncoding?: string | null): any;

  /**
   * Decodes given binary into a string based on contentType and contentEncoding.
   */
  static decode(content: any, contentType?: string | null, contentEncoding?: string | null): string;

  /**
   * Applied lambda action to filter content and return stream of lines
   */
  filterContentLines(action?: λFunction<string | null, string | null> | null): CharStream | null;

  /**
   * Infer serialization type from this content.
   */
  inferType(spec?: InferTypeSpec | null): InferValueTypeResult;

  /**
   * returns Avro and parquet in stringified json.
   */
  avroParquetSchema(failIfMissing?: boolean): string | null;

  /**
   * Creates a new Content by merging the two contents
   */
  concat(other: Content | null): VideoFrame;

  /**
   * Creates a new Content by merging the incoming binary data with current content
   */
  concat(other: any | null): VideoFrame;

  hyperLogLogForCsv(): C3.Map<number | null, HyperLogLog | null>;

  /**
   * Creates the read once content from provided C3 stream
   */
  static fromStream(stream: Stream<any> | null, contentType?: string | null, contentEncoding?: string | null): Content;

  /**
   * Creates the read once content from provided C3 byte-stream
   */
  static fromByteStream(encodedStream: ByteStream | null, contentType?: string | null, contentEncoding?: string | null): Content;

  /**
   * Creates the read once content from provided C3 byte-stream
   */
  static fromCharStream(charStream: CharStream | null, contentType?: string | null, contentEncoding?: string | null): Content;

  /**
   * Creates the content value from a binary value.
   */
  static fromBinary(encodedBinary: any, contentType?: string | null, contentEncoding?: string | null): Content;

  /**
   * Creates the content value from a string value.
   */
  static fromText(text: string | null, contentType?: string | null, contentEncoding?: string | null): Content;

  /**
   * Creates the content from lambda
   */
  static fromLambda(contentProducer?: λSupplier<any | null> | null): Content | null;

  /**
   * Creates write once content from a Java OutputStream.
   */
  static fromJavaOutputStream(outputStream?: any): Content;

  /**
   * Creates the content value from a Java resource.
   */
  static fromJavaResource(javaResourcePath: string | null, failIfMissing?: boolean): Content;

  /**
   * Creates a list of content values from files.
   */
  static readLocalFiles(url: string): C3.Array<Content | null>;

  /**
   * Retry logic for failed content operations
   *
   * @param supplier
   *          The supplier to retry when an exception is thrown
   * @param desc
   *          The description of the function being retried
   * @param spec
   *          The file operation spec with retryable parameters
   */
  callWithRetry(supplier: λSupplier<T | null>, desc: string, spec?: FileOperationSpec | null): T | null;

  static fromString(s: string | null, contentType?: string | null): ContentValue;

  /**
   * Private property to cache parsed image. It should optimize operations on images.
   */
  get parsedContent(): any;
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
