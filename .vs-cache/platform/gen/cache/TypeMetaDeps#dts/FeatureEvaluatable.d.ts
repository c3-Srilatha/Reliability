// TypeScript definitions for the C3 type FeatureEvaluatable

/**
 * Base type for defining and evaluating {@link Feature}s in machine learning workflows on the C3 AI Agentic Platform.
 *
 * ## Replacement for MetricEvaluatable
 *
 * FeatureEvaluatable is the modern replacement for the deprecated {@link MetricEvaluatable} type as of version 8.
 * The replacement was made to provide a simplified API focused on machine learning workflows and Feature Store
 * integration. FeatureEvaluatable maintains backward compatibility by mixing {@link MetricEvaluatable}, ensuring
 * all existing MetricEvaluatable methods remain available during migration.
 *
 *
 * ## Purpose and Role
 *
 * FeatureEvaluatable serves as the foundation for feature evaluation in the C3 AI Agentic Platform ML pipeline.
 * Types that mix FeatureEvaluatable can define features that transform raw data into ML-ready representations.
 * Features are evaluated on-demand or materialized for performance, with results persisted in the Feature Store.
 *
 *
 * ## Integration with ML Infrastructure
 *
 * FeatureEvaluatable integrates with several key platform components:
 * - {@link Feature}: Individual feature definitions with transformation logic
 * - {@link Feature.Set}: Collections of features evaluated together with consistent intervals and alignment
 * - {@link Feature.Store}: Central repository for feature metadata, materialized values, and snapshots
 * - {@link MlSubject}: ML deployment integration for model training and inference
 * - {@link Data}: Return type containing evaluated feature values with subject and temporal dimensions
 *
 *
 * ## Migration from MetricEvaluatable
 *
 * MetricEvaluatable (deprecated in version 8) method equivalents in FeatureEvaluatable:
 *
 * | MetricEvaluatable (Deprecated) | FeatureEvaluatable Equivalent |
 * |--------------------------------|-------------------------------|
 * | `evalMetric`                 | `evalFeature`          |
 * | `evalMetrics()`                | `evalFeatureSet` or `evalFeatures` |
 * | `listMetrics()`                | `features`             |
 * | `rollupMetric()`               | Use `Feature.Set` with aggregation features |
 * | `evalMetricsWithMetadata()`    | `Feature.Set` with custom features |
 *
 * **Backward Compatibility**: Since FeatureEvaluatable mixes {@link MetricEvaluatable}, all existing
 * MetricEvaluatable methods remain available, ensuring smooth migration. Applications can migrate
 * incrementally, updating method calls as convenient while maintaining full functionality.
 *
 * See function definitions to find example usage.
 *
 * @remarks this represents a value passed to a method that expects an instance of FeatureEvaluatable
 */
declare interface IFeatureEvaluatable {
}

/**
 * Base type for defining and evaluating {@link Feature}s in machine learning workflows on the C3 AI Agentic Platform.
 *
 * ## Replacement for MetricEvaluatable
 *
 * FeatureEvaluatable is the modern replacement for the deprecated {@link MetricEvaluatable} type as of version 8.
 * The replacement was made to provide a simplified API focused on machine learning workflows and Feature Store
 * integration. FeatureEvaluatable maintains backward compatibility by mixing {@link MetricEvaluatable}, ensuring
 * all existing MetricEvaluatable methods remain available during migration.
 *
 *
 * ## Purpose and Role
 *
 * FeatureEvaluatable serves as the foundation for feature evaluation in the C3 AI Agentic Platform ML pipeline.
 * Types that mix FeatureEvaluatable can define features that transform raw data into ML-ready representations.
 * Features are evaluated on-demand or materialized for performance, with results persisted in the Feature Store.
 *
 *
 * ## Integration with ML Infrastructure
 *
 * FeatureEvaluatable integrates with several key platform components:
 * - {@link Feature}: Individual feature definitions with transformation logic
 * - {@link Feature.Set}: Collections of features evaluated together with consistent intervals and alignment
 * - {@link Feature.Store}: Central repository for feature metadata, materialized values, and snapshots
 * - {@link MlSubject}: ML deployment integration for model training and inference
 * - {@link Data}: Return type containing evaluated feature values with subject and temporal dimensions
 *
 *
 * ## Migration from MetricEvaluatable
 *
 * MetricEvaluatable (deprecated in version 8) method equivalents in FeatureEvaluatable:
 *
 * | MetricEvaluatable (Deprecated) | FeatureEvaluatable Equivalent |
 * |--------------------------------|-------------------------------|
 * | `evalMetric`                 | `evalFeature`          |
 * | `evalMetrics()`                | `evalFeatureSet` or `evalFeatures` |
 * | `listMetrics()`                | `features`             |
 * | `rollupMetric()`               | Use `Feature.Set` with aggregation features |
 * | `evalMetricsWithMetadata()`    | `Feature.Set` with custom features |
 *
 * **Backward Compatibility**: Since FeatureEvaluatable mixes {@link MetricEvaluatable}, all existing
 * MetricEvaluatable methods remain available, ensuring smooth migration. Applications can migrate
 * incrementally, updating method calls as convenient while maintaining full functionality.
 *
 * See function definitions to find example usage.
 *
 * @remarks this represents a made instance of FeatureEvaluatable
 */
declare class FeatureEvaluatable extends Obj {

  /**
   * Get a renderer that will show info on the metrics available for this source object to HTML.
   */
  renderer(): HtmlRenderer | null;

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
  static fromJson(json: any | null): FeatureEvaluatable | null;

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
  static fromJsonString(json: string | null): FeatureEvaluatable | null;

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
  static fromXmlString(xml: string | null): FeatureEvaluatable | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): FeatureEvaluatable | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): FeatureEvaluatable;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): FeatureEvaluatable;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): FeatureEvaluatable;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<FeatureEvaluatable | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<FeatureEvaluatable | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): FeatureEvaluatable;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): FeatureEvaluatable;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): FeatureEvaluatable;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): FeatureEvaluatable;

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
  withField(field: string, value: any, doNotConvert?: boolean): FeatureEvaluatable;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): FeatureEvaluatable;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): FeatureEvaluatable;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): FeatureEvaluatable;

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
  withoutFieldAtPath(path: string): FeatureEvaluatable;

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
  withoutField(field: string | null): FeatureEvaluatable;

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
  withoutField(field: FieldType | null): FeatureEvaluatable;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): FeatureEvaluatable;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): FeatureEvaluatable;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): FeatureEvaluatable;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): FeatureEvaluatable;

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
  defaultField(field: string): FeatureEvaluatable;

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
  defaultField(field: FieldType): FeatureEvaluatable;

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
  unsetField(field: string): FeatureEvaluatable;

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
  unsetField(field: FieldType): FeatureEvaluatable;

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
  removeField(field: string): FeatureEvaluatable;

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
  removeField(field: FieldType): FeatureEvaluatable;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): FeatureEvaluatable;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): FeatureEvaluatable;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): FeatureEvaluatable;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): FeatureEvaluatable;

  mergeJson(json: any | null): FeatureEvaluatable;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): FeatureEvaluatable;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): FeatureEvaluatable;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<FeatureEvaluatable | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<FeatureEvaluatable | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<FeatureEvaluatable | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<FeatureEvaluatable | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<FeatureEvaluatable | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, FeatureEvaluatable | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, FeatureEvaluatable | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<FeatureEvaluatable | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<FeatureEvaluatable | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): FeatureEvaluatable;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): FeatureEvaluatable;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): FeatureEvaluatable;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): FeatureEvaluatable;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): FeatureEvaluatable;

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
  static make(fields: any, withDefaults?: boolean): FeatureEvaluatable;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): FeatureEvaluatable;

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
  afterMake(): FeatureEvaluatable;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): FeatureEvaluatable;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<FeatureEvaluatable>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): FeatureEvaluatable;

  /**
   * API for returning a list of simple and compound metrics applicable for this type (alphabetically sorted)
   * @return a list of metrics
   */
  static listMetrics(): C3.Array<Metric | null>;

  /**
   * List of simple and compound metrics for this type
   * @return ListMetricsResult
   */
  static listMetricsByKind(): ListMetricsResult | null;

  /**
   * Returns the simple metric associated with the source type OR the parent if the one for source doesn't exist
   * @return the SimpleMetric for the source type or parent type based on whats present
   */
  static getSimpleMetric(metricName: string): SimpleMetric | null;

  /**
   * API to be used for evaluating single source with single metric
   * @param spec
   *          The spec which specifies the sourceId / start / end / metricName / grain
   * @return a Timeseries for the given spec
   */
  static evalMetric(spec?: EvalMetricSpec | null): Timeseries<any> | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return the result of evaluation containing multiple source and multiple metrics
   */
  static evalMetrics(spec?: EvalMetricsSpec | null): EvalMetricsResult | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return stream of evaluation containing multiple source and multiple metrics one source at a time
   */
  static evalMetricsStream(spec?: EvalMetricsSpec | null): EvalMetricsResultStream | null;

  /**
   * This api should be used when all the metrics in the spec are aggregate metrics and are expected to return only a scalar value
   * Since evalMetrics and evalMetric api's return Timeseries for aggregate metrics with the same value repeated in data field
   * this api will be handy for just accessing the scalar value easily
   * @param spec
   *          EvalMetricsSpec specifying start / end / interval / ids (source ids) / expressions (this should be aggregate expressions ONLY)
   *          The onus of passing aggregate metrics is on the user and the api will pick the first value from the result
   *          and stick it in as the scalar value with the appropriate unit
   * @return The map of srcId -> expression -> Aggregated value with unit
   */
  static evalAggregateMetrics(spec?: EvalMetricsSpec | null): C3.Map<string | null, C3.Map<string | null, Dimension | null>>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries for that 1 Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information
   * @return 1 timeseries which is an aggregation of all the sources' timeseries
   */
  static rollupMetric(spec?: RollupMetricSpec | null): Timeseries<any> | null;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetrics(spec?: RollupMetricSpec | null): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric by passing custom metrics on the fly
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetricsWithMetadata(spec?: RollupMetricSpec | null, overrideMetrics?: C3.Array<Metric | null>): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * Returns all the variables in the given expression
   * @param expression
   *                The expression for which you need to find variables
   * @return a list of all the variables in the metric expression
   */
  static metricVariables(expression: string): C3.Array<MetricVariable | null>;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return the result which contains the result of metric evaluations for various sources
   */
  static evalMetricsWithMetadata(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResult | null;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return stream of result which contains the result of metric evaluations for various sources one source at a time
   */
  static evalMetricsWithMetadataStream(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResultStream | null;

  /**
   * The api should be used to export all the source data to s3
   * This includes extracting the relational data, timeseries data and tsDecl data
   * It internally creates a map reduce job to write data to s3
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @param numObjPerFile (optional)
   *          Number of objects per file to be created in S3
   * @param typeForSrcIds (optional)
   *          If this type is specified then ids for exporting src type objects will be picked from this type and not
   *          from the spec object
   * @return the export job object for tracking status
   */
  static exportMetricsDataJob(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null, numObjPerFile?: number | null, typeForSrcIds?: Type | null): Export | null;

  /**
   * API used to import all the exported data in s3
   * @param filePrefix (optional)
   *          Optional filePrefix to used to get files from S3
   * @return the import job object for tracking status
   */
  static importMetricsDataJob(filePrefix?: string | null): Import | null;

  /**
   * The api should be used to download data for all the metrics / sources specified in the EvalMetricsSpec
   * This includes extracting the relational data, timeseries data and tsDecl data
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @return an ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static extractMetricsData(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null): ExportedObj | null;

  /**
   * API is supposed to import the data that was exported using the extractMetricsData api
   * @param input
   *          Input is a map of typeName to array of array of objects grouped by a batch size
   *          ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static importMetricsData(input?: ExportedObj | null): void;

  /**
   * This api is used to refresh metrics cache. Subsequent evalMetrics call should serve results from cache. Metrics cache should be defined
   * via "<type-name>-MetricsCacheConfig" TenantConfig. Only metrics that are specified in "<type-name>-MetricsCacheConfig" will be cached.
   * There is no invalidation of this cache and should be refreshed manually
   * @param ids
   *          The src ids that need to be cached.
   * @param metricNames (optional)
   *          The list of metrics that need to be cached. This could be simple and/or compound or a mix.
   *                                          This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param startDate (optional)
   *          Optional evaluation start date for caching metrics
   * @param endDate (optional)
   *          Optional evaluation end date for caching metrics
   */
  static refreshMetricsCache(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null): void;

  /**
   * This api should be used to kick of the metrics cache refresh map reduce job
   * @param metricNames (optional)
   *                The list of metrics whose cache needs to be refreshed. This could be simple and/ or compound or a mix
   *                This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param filter (optional)
   *                Filter out certain source ids
   * @param startDate (optional)
   *                Optional start date for caching metrics
   * @param endDate (optional)
   *                Optional end date for caching metrics
   */
  static startMetricsCacheRefreshJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null): MetricsCacheRefreshJob | null;

  /**
   * This provides the status for the metrics cache refresh job
   */
  static metricsCacheRefreshJobStatus(): MapReduceStatus | null;

  /**
   * API to generate stats like min / max / avg / count / gaps/ unavailable / earliest data point / latest data point
   * for a metric source combination in a given time range
   * @param ids
   *         list of ids that stats need to be computed for
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static generateMetricsStats(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): void;

  /**
   * Helper function to kick off metrics stats generation for metrics & sources combination for a given time range
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param batchSize
   *         No of sources to be included in 1 map reduce job: Default: 100
   * @param filter
   *         Filter criteria on the source type
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static startMetricsStatsJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): MetricsStatsJob | null;

  /**
   * API to report the status of currently running metrics stats job
   */
  static metricsStatsJobStatus(): MapReduceStatus | null;

  /**
   * Provides histogram data for a given set of ids and metrics.
   *
   * The period of histogram data can be specified through either period parameter or start and end parameters,
   * and period parameter has higher priority than start and end parameters which means the internal API will choose
   * period other than start and end if period parameter is available.
   *
   * @param ids
   *          Array of source ids
   * @param metricName
   *          CompoundMetricId
   * @param period
   *          Time period (e.g., last12m, 2012, 2013, 2014)
   * @param start
   *          Start of benchmarking period
   * @param end
   *          End of benchmarking period
   * @param ignoreZeroValues
   *          Flag indicates whether to ignore zero values.
   *          If true, any points with a zero value will not be factored into the histogram
   * @param binningType
   *          Whether to bin by 'value' or 'quantile'
   * @param numberBins
   *          How many bins to split the data into
   * @return Histogram data contains buckets info and data info
   */
  static getDistribution(ids: C3.Array<string | null> | null, metricName: string, period?: string | null, start?: DateTime | null, end?: DateTime | null, ignoreZeroValues?: boolean, binningType?: string | null, numberBins?: number | null): HistogramEvaluationResult | null;

  /**
   * Compute stats for every timeseries obtained by the metric / source combination
   * @param spec
   *          Provide the spec for which stats need to be computed
   * @return stats for every timeseries obtained for every source metric combination
   */
  static evalMetricsStats(spec: EvalMetricsSpec): C3.Map<string | null, C3.Map<string | null, TimeseriesStats | null>>;

  /**
   * The motivation for Eval Metrics Batch mode is to compile expressions, pre-fetch sources, plug-in variables and
   * bindings for the expressions exactly once and call evaluate metrics for various time ranges multiple times
   * This ends up re-using the fnd cache/ asTimeseries cache too
   * Initializes (Compiles expressions, pre-fetches sources, etc) eval metrics in batch mode
   * @param spec
   *          EvalMetricsSpec containing all the metrics and the largest time-period that the individual runs are
   *          going to be called with
   * @return a cache key that eval metrics produces for this spec (this cache is on the current action)
   */
  static startEvalMetricsBatch(spec: EvalMetricsSpec): string | null;

  /**
   * Cleans up and closes the eval metrics batch
   * @param keys
   *              Cleans up the eval metrics batch objects for the given cache keys
   * @return the current number of the cached evaluator instances
   */
  static endEvalMetricsBatch(key: string): number | null;

  /**
   * Runs evalMetrics for the given start and end by using the cached copy of the objects in startEvalMetricsBatch
   * @param key
   *              Cache key to use to load cached objects (prefetched objects, spec, compiled exprs) during evalMetrics
   * @param start
   *              start date for metrics evaluation
   * @param end
   *              end date for metrics evaluation
   * @return EvalMetricsResult for the given start and end and the spec from the cached key
   */
  static evalMetricsBatch(key: string, start: DateTime, end: DateTime): EvalMetricsResult | null;

  /**
   * API to retrieve the eval metrics batch key based on the spec. Returns null if nothing is found
   * @param spec
   *          Eval metrics spec to be used to figure out the eval metrics batch key
   * return the eval metrics batch key for the spec or null if one does not exist
   */
  static evalMetricsBatchKey(spec: EvalMetricsSpec): string | null;

  /**
   * Specifies whether the 'child' EvalMetricsSpec is a subset of 'this' EvalMetricsSpec
   * This currently supports checking for only time range subset. If ids / metrics / grain / timezone/ cache/ unitId/
   * filter/ limit / include do not match as is it will return false.
   * @param this
   *          Parent EvalMetricsSpec which acts as the superset
   * @param child
   *          Child EvalMetricsSpec which acts as the subset
   * @return whether child is a subset of this EvalMetricsSpec
   */
  static isSubset(parent: EvalMetricsSpec, child: EvalMetricsSpec): boolean;

  /**
   * API to estimate the size of objects in eval metrics batch cache.
   * This will give a breakdown of the metric evaluator instance (compiled exprs, source fetch with hierarchies, other
   * info to be used during evaluation), normalized data cache, and tsDecl cache
   * @param key
   *        Eval Metrics Batch cache key for which size needs to be estimated
   * @return object that gives the size of evaluator, normalized data cache and tsDecl cache
   */
  static estimateEvalMetricsBatchCacheSize(key: string): EvalMetricsBatchCacheSize | null;

  /**
   * Lists all the cached keys in the eval metrics batch
   * @return list of keys
   */
  static listEvalMetricsBatchKeys(): C3.Array<string | null>;

  /**
   * Get EvalPlan to be used to metric data export. This method will return the hierarchies constructed and
   * src type fetch spec
   * @param Eval metrics spec that would be used for evalMetrics
   * @return EvalPlan with hierarchies and srcTypeFetchSpec populated
   */
  static getExportEvalPlan(spec?: EvalMetricsSpec | null): EvalPlan | null;

  /**
   * For internal use only:
   * Generate eval metrics spec from existing spec and overridden metrics. This is particularly useful when spec has bindings
   * with multiple values. In case of no / single bindings this will return the same spec back to be used for evaluation
   */
  static generateEvalMetricsSpec(spec: EvalMetricsSpec, overrideMetrics?: C3.Array<Metric | null>): Pair<EvalMetricsSpec | null, C3.Array<Metric | null>>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<FeatureEvaluatable | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<FeatureEvaluatable | null>;

  /**
   * Abstract method inherited from {@link Fetchable} for fetching object streams.
   *
   * @see Fetchable#fetchObjStream
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<FeatureEvaluatable | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<FeatureEvaluatable | null> | null>;

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
   * This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
   * Support column alias for evaluate & evalMetrics by passing an ObjNode
   * e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
   * e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
   */
  static eval(spec?: EvalSpec | null): Data | null;

  /**
   * Abstract method inherited from {@link Evaluatable} for evaluating expressions.
   *
   * @see Evaluatable#evaluate
   */
  static evaluate(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Abstract method inherited from {@link Evaluatable} for evaluating tuple streams.
   *
   * @see Evaluatable#evaluateTupleStream
   */
  static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple | null>;

  /**
   * Abstract method inherited from {@link Evaluatable} for evaluating PII-sensitive data.
   *
   * @see Evaluatable#evaluatePii
   */
  static evaluatePii(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Abstract method inherited from {@link Evaluatable} for time series evaluation.
   *
   * @see Evaluatable#tsEval
   */
  static tsEval(spec: TSEvalSpec): Obj | null;

  /**
   * Returns a stream of all features defined for this type.
   *
   * This method provides access to all {@link Feature} definitions associated with the type. Features are
   * returned as a stream. The stream includes both explicitly defined features and any inherited features from parent types.
   *
   *
   * @return
   *   Stream of {@link Feature} objects defined for this type. The stream may be empty if no features are
   *   defined. Stream elements are not guaranteed to be in any particular order.
   *
   * Example usage:
   * ```python
   * # List all features for a type
   * turbine = c3.WindTurbine.make({'id': 'TURBINE-1'})
   * feature_stream = c3.WindTurbine.features()
   *
   * # Process features
   * for feature in feature_stream:
   *   print(f"Feature: {feature.name}, Type: {feature.subjectType}")
   *
   * # Filter features by criteria
   * numeric_features = [f for f in c3.WindTurbine.features() if f.valueType == 'Double']
   * ```
   *
   * @see Feature
   * @see Feature.Set
   */
  static features(): Stream<Feature | null>;

  /**
   * Evaluates a single feature for this instance and returns the computed data.
   *
   * This method retrieves or computes feature values for the current subject instance. If the feature is
   * materialized in the {@link Feature.Store}, values are retrieved from storage. Otherwise, the feature's
   * transformation logic is executed on-demand.
   *
   * The evaluation can be customized using {@link EvalFeatureSpec} to specify temporal ranges, intervals,
   * alignment, and other evaluation parameters. The returned {@link Data} object contains the feature values
   * with subject and temporal dimensions.
   *
   * @param feature
   *   Feature name identifying which feature to evaluate. Must correspond to a {@link Feature} defined for
   *   this type. If the feature does not exist, an error is thrown.
   * @param spec
   *   Optional specification to customize evaluation behavior. Supports parameters including start/end dates,
   *   interval, alignment, and timezone. If not provided, default evaluation parameters are used.
   * @return
   *   {@link Data} object containing evaluated feature values. The data structure includes a subject column
   *   identifying this instance and temporal columns based on the feature's interval configuration. Feature
   *   values are returned in the column matching the feature name.
   *
   * Example usage:
   * ```python
   * # Evaluate a single feature for a wind turbine
   * turbine = c3.WindTurbine.make({'id': 'TURBINE-1'})
   * power_data = turbine.evalFeature(
   *   feature='activePowerAvgFeature',
   *   start='2018-01-01',
   *   end='2022-01-01'
   * )
   *
   * # Evaluate with custom interval
   * speed_data = turbine.evalFeature(
   *   feature='generatorRotationSpeedAvgFeature',
   *   start='2018-01-01',
   *   end='2022-01-01',
   *   interval='HOUR'
   * )
   * ```
   *
   * @see #evalFeatureSet
   * @see #evalFeatures
   * @see Feature
   * @see EvalFeatureSpec
   * @see Data
   */
  evalFeature(feature: string, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluates all features in a feature set for this instance and returns the computed data.
   *
   * This method evaluates multiple features together as defined in a {@link Feature.Set}. If the
   * feature set is materialized, values are retrieved from the {@link Feature.Store}. Otherwise, features are
   * computed on-demand.
   *
   * The returned {@link Data} object contains columns for each feature in the set, with consistent temporal
   * alignment as specified by the feature set configuration.
   *
   * @param featureSet
   *   {@link Feature.Set} defining which features to evaluate and how to align them. The feature set must be
   *   compatible with this type (i.e., subjectType must match or be a parent type). If the feature set
   *   references features not defined for this type, an error is thrown.
   * @param spec
   *   Optional specification to customize evaluation behavior. Supports parameters including start/end dates
   *   that constrain the temporal range within the feature set's boundaries. If not provided, the feature
   *   set's default temporal range is used.
   * @return
   *   {@link Data} object containing evaluated feature values for all features in the set. The data structure
   *   includes a subject column identifying this instance, temporal columns based on the feature set's
   *   interval, and one column per feature containing the evaluated values.
   *
   *
   * Example usage:
   * ```python
   * # Create and materialize a feature set
   * turbine = c3.WindTurbine.make({'id': 'TURBINE-1'})
   * feature_set = c3.Feature.Set(
   *   name='windTurbineModelFeatures',
   *   subjectType=c3.WindTurbine,
   *   features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'],
   *   interval='HOUR'
   * ).create()
   * feature_set.materialize(filter=f"id == 'TURBINE-1'", start="2018-02-01", end="2018-03-01")
   *
   * # Evaluate feature set for the turbine
   * feature_data = turbine.evalFeatureSet(
   *   featureSet=feature_set,
   *   start='2018-02-01',
   *   end='2018-03-01'
   * )
   * ```
   *
   * @see #evalFeature
   * @see #evalFeatureSetBatch
   * @see Feature.Set
   * @see EvalFeatureSpec
   * @see Data
   */
  evalFeatureSet(featureSet: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluates a feature set for multiple subject instances and returns the computed data.
   *
   * The order of subjects in the returned {@link Data} matches the order provided in the batch parameter,
   * ensuring consistent subject ordering for downstream ML pipelines.
   *
   *
   * @param batch
   *   List of subject instances to evaluate. Subjects must be instances of types compatible with the feature
   *   set's subjectType. The order of subjects in this list determines the order in the returned data. Duplicate
   *   subjects are allowed and will result in duplicate rows in the output.
   * @param featureSet
   *   {@link Feature.Set} defining which features to evaluate. The feature set's subjectType must be compatible
   *   with the types of subjects in the batch. If the feature set is materialized, values are retrieved from
   *   storage; otherwise, features are computed on-demand.
   * @param spec
   *   Optional specification to customize evaluation behavior. Supports parameters including start/end dates
   *   that constrain the temporal range. If not provided, the feature set's default temporal range is used.
   * @return
   *   {@link Data} object containing evaluated feature values for all subjects and features. The data includes
   *   a subject column with values in the same order as the batch parameter, temporal columns based on the
   *   feature set's interval, and one column per feature.
   *
   * Error conditions:
   * - Throws error if feature value types are inconsistent across subjects
   * - Throws error if subjects are incompatible with feature set's subjectType
   * - Throws error if feature set references undefined features
   *
   *
   * Example usage:
   * ```python
   * # Create and materialize feature set
   * feature_set = c3.Feature.Set(
   *   name='windTurbineModelFeatures',
   *   subjectType=c3.WindTurbine,
   *   features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'],
   *   interval='HOUR'
   * ).create()
   * feature_set.materialize(filter="status=='active'", start='2018-02-01', end='2018-03-01')
   *
   * # Evaluate for multiple turbines
   * training_data = c3.WindTurbine.evalFeatureSetBatch(
   *   batch=['TURBINE-1', 'TURBINE-2', 'TURBINE-3'],
   *   featureSet=feature_set,
   *   start='2018-02-01',
   *   end='2018-03-01'
   * )
   * ```
   *
   * @see #evalFeatureSet
   * @see #evalFeatureSetBatch(filter, featureSet, spec)
   * @see Feature.Set
   * @see EvalFeatureSpec
   * @see Data
   */
  static evalFeatureSetBatch(batch: C3.Array<FeatureEvaluatable | null>, featureSet: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluates a feature set for subject instances matching a filter expression.
   *
   * Subjects are fetched using the filter and ordered by id (ascending). Throws error if feature value types
   * are inconsistent across subjects.
   *
   * @param filter
   *   Filter expression to select subjects.
   * @param featureSet
   *   {@link Feature.Set} defining which features to evaluate.
   * @param spec
   *   Optional specification for time ranges and evaluation parameters.
   * @return
   *   {@link Data} object with evaluated feature values for all matching subjects.
   *
   * Example usage:
   * ```python
   * # Create and materialize feature set
   * feature_set = c3.Feature.Set(
   *   name='windTurbineModelFeatures',
   *   subjectType=c3.WindTurbine,
   *   features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'],
   *   interval='HOUR'
   * ).create()
   * feature_set.materialize(filter="status=='active' && commissionDate < '2018-01-01'", start='2018-02-01', end='2018-03-01')
   *
   * # Evaluate for turbines matching filter
   * training_data = c3.WindTurbine.evalFeatureSetBatch(
   *   filter="status=='active' && commissionDate < '2018-01-01'",
   *   featureSet=feature_set,
   *   start='2018-02-01',
   *   end='2018-03-01'
   * )
   * ```
   *
   * @see #evalFeatureSet
   * @see #evalFeatureSetBatch(batch, featureSet, spec)
   * @see Feature.Set
   * @see EvalFeatureSpec
   */
  static evalFeatureSetBatch(filter: string, featureSet: Feature.Set, spec?: EvalFeatureSpec | null): Data | null;

  /**
   * Evaluates multiple features for this instance.
   *
   * Beta method for ad-hoc feature evaluation. Feature names must be distinct. Column order matches input order.
   *
   * @param features
   *   List of distinct feature names to evaluate.
   * @param spec
   *   Optional specification for time ranges and evaluation parameters.
   * @return
   *   {@link Data} object with evaluated feature values.
   *
   * Example usage (internal):
   * ```python
   * turbine = c3.WindTurbine.make({'id': 'TURBINE-1'})
   * feature_data = turbine.evalFeatures(
   *   features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'],
   *   start='2018-02-01',
   *   end='2018-03-01',
   *   interval='MONTH'
   * )
   * ```
   *
   * @see #evalFeature
   * @see #evalFeatureSet
   * @see #evalFeaturesBatch
   * @see EvalFeaturesSpec
   */
  evalFeatures(features: C3.Array<string | null>, spec?: EvalFeaturesSpec | null): Data | null;

  /**
   * Evaluates multiple features for a batch of subject instances.
   *
   * Beta method for batch ad-hoc feature evaluation. Feature names must be distinct. Subject and column order
   * match input order.
   *
   * @param batch
   *   List of subject instances to evaluate.
   * @param features
   *   List of distinct feature names to evaluate.
   * @param spec
   *   Optional specification for time ranges and evaluation parameters.
   * @return
   *   {@link Data} object with evaluated feature values for all subjects.
   *
   * Example usage (internal):
   * ```python
   * feature_data = c3.WindTurbine.evalFeaturesBatch(
   *   batch=['TURBINE-1', 'TURBINE-2'],
   *   features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'],
   *   start='2018-02-01',
   *   end='2018-03-01',
   *   interval='MONTH'
   * )
   * ```
   *
   * @see #evalFeatures
   * @see #evalFeatureSetBatch
   * @see #evalFeaturesBatch(filter, features, spec)
   * @see EvalFeaturesSpec
   */
  static evalFeaturesBatch(batch: C3.Array<FeatureEvaluatable | null>, features: C3.Array<string | null>, spec?: EvalFeaturesSpec | null): Data | null;

  /**
   * Evaluates multiple features for subject instances matching a filter expression.
   *
   * Beta method for filtered ad-hoc feature evaluation. Subjects are ordered by id (ascending). Feature names
   * must be distinct.
   *
   * @param filter
   *   Filter expression to select subjects.
   * @param features
   *   List of distinct feature names to evaluate.
   * @param spec
   *   Optional specification for time ranges and evaluation parameters.
   * @return
   *   {@link Data} object with evaluated feature values for all matching subjects.
   *
   * Example usage (internal):
   * ```python
   * feature_data = c3.WindTurbine.evalFeaturesBatch(
   *   filter="status=='active'",
   *   features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'],
   *   start='2018-02-01',
   *   end='2018-03-01',
   *   interval='MONTH'
   * )
   * ```
   *
   * @see #evalFeatures
   * @see #evalFeatureSetBatch
   * @see #evalFeaturesBatch(batch, features, spec)
   * @see EvalFeaturesSpec
   */
  static evalFeaturesBatch(filter: string, features: C3.Array<string | null>, spec?: EvalFeaturesSpec | null): Data | null;

  /**
   * Creates a Data instance with subject and datetimes columns.
   *
   * Internal utility for creating temporal scaffolding in feature evaluation.
   *
   * @param dates
   *   List of datetime values for temporal points.
   * @return
   *   {@link Data} object with subject and datetimes columns.
   * @see #dataFromTimeRanges
   */
  dataFromDates(dates?: C3.Array<DateTime | null>): Data | null;

  /**
   * Creates a Data instance with subject and timeranges columns.
   *
   * Internal utility for creating temporal scaffolding for interval-based features.
   *
   * @param timeRanges
   *   List of {@link TimeRange} values for temporal windows.
   * @return
   *   {@link Data} object with subject and timeranges columns.
   * @see #dataFromDates
   * @see TimeRange
   */
  dataFromTimeRanges(timeRanges?: C3.Array<TimeRange | null>): Data | null;
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
