// TypeScript definitions for the C3 type ShapInterpreter

/**
 * Configuration parameters and helper methods for the Shap Interpreter technique.
 * @see https://shap.readthedocs.io/en/latest/
 *
 * @remarks this represents a value passed to a method that expects an instance of ShapInterpreter
 */
declare interface IShapInterpreter<DX, DO> {

  /**
   * A name for this interpreter
   */
  name?: string | null;

  /**
   * The native SHAP explainer used to interpret a model.
   * List of currently supported SHAP explainers:
   * - KernelExplainer
   * - TreeExplainer
   * - GradientExplainer
   */
  explainer?: string | null;

  /**
   * If the {@link #explainer} is a native Python class, these kwargs will be used to initialize the explainer in
   * addition to a native model or its process function.
   */
  initKwargs?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * Keyword arguments for an {@link #explainer}'s interpret function. If the {@link #explainer} is a function, then
   * the native model being interpreted, or its process function, will also be passed in.
   */
  callKwargs?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * The {@link Action.Requirement minimal action requirement} in which all MlInterpreter methods for the pipe will be executed,
   * except {@link #interpret}, which may be overwritten by the pipe's action requirement, if set @see MlCustomPipe.actionRequirement.
   */
  actionRequirement?: string | null;

  /**
   * Maximum number of samples to use as background data.
   */
  MAX_SAMPLES?: number | null;

  /**
   * The background data to be used for the interpretability model. See {@link #needsBackgroundData}
   * to check if an interpreter has its required background data.
   */
  backgroundData?: DX | null;

  /**
   * A lambda function that samples and returns data. This sampler can be set in one of two ways:
   * 1. Use {@link #withRandomSampler}
   * This will set the {@link #sampler} to a lambda function that will randomly sample the specified fraction of the
   * data.
   * 2. Use {@link #withCustomSampler}
   * You can build and use your own sampler by passing in a native Python function or a {@link Lambda}
   *
   * The sampler will be assigned to the lambda function corresponding to the API that was **most recently called**.
   */
  sampler?: λFunction<DX | null, DX | null> | null;

  /**
   * A lambda function that returns {@link #backgroundData} as {@link Map} of {@link Data}.
   * This lambda is set with {@link #withCustomBackgroundDataByName}.
   */
  backgroundDataByNameLambda?: λFunction<DX | null, C3.Map<string | null, Data | null> | {[key: string | null]: IData | null}> | null;

  /**
   * A lambda function that constructs {@link backgroundData} from {@link Map}.
   * This lambda can be set with {@link #withBackgroundDataFromMap}.
   */
  backgroundDataFromMapLambda?: λBiFunction<string | null, C3.Map<string | null, Data | null>, DX | null> | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}
/**
 * Configuration parameters and helper methods for the Shap Interpreter technique.
 * @see https://shap.readthedocs.io/en/latest/
 *
 * @remarks this represents a made instance of ShapInterpreter
 */
declare class ShapInterpreter<DX, DO> extends Obj {

  /**
   * A name for this interpreter
   */
  readonly name?: string | null;
  withName(name: string | null): ShapInterpreter;

  /**
   * The native SHAP explainer used to interpret a model.
   * List of currently supported SHAP explainers:
   * - KernelExplainer
   * - TreeExplainer
   * - GradientExplainer
   */
  readonly explainer?: string | null;
  withExplainer(explainer: string | null): ShapInterpreter;

  /**
   * If the {@link #explainer} is a native Python class, these kwargs will be used to initialize the explainer in
   * addition to a native model or its process function.
   */
  readonly initKwargs?: C3.Map<string | null, any>;
  withInitKwargs(initKwargs: C3.Map<string | null, any> | {[key: string | null]: any}): ShapInterpreter;

  /**
   * Keyword arguments for an {@link #explainer}'s interpret function. If the {@link #explainer} is a function, then
   * the native model being interpreted, or its process function, will also be passed in.
   */
  readonly callKwargs?: C3.Map<string | null, any>;
  withCallKwargs(callKwargs: C3.Map<string | null, any> | {[key: string | null]: any}): ShapInterpreter;

  /**
   * The {@link Action.Requirement minimal action requirement} in which all MlInterpreter methods for the pipe will be executed,
   * except {@link #interpret}, which may be overwritten by the pipe's action requirement, if set @see MlCustomPipe.actionRequirement.
   */
  readonly actionRequirement?: string | null;
  withActionRequirement(actionRequirement: string | null): ShapInterpreter;

  /**
   * Maximum number of samples to use as background data.
   */
  readonly MAX_SAMPLES?: number | null;
  withMAX_SAMPLES(MAX_SAMPLES: number | null): ShapInterpreter;

  /**
   * The background data to be used for the interpretability model. See {@link #needsBackgroundData}
   * to check if an interpreter has its required background data.
   */
  readonly backgroundData?: DX | null;
  withBackgroundData(backgroundData: DX | null): ShapInterpreter;

  /**
   * A lambda function that samples and returns data. This sampler can be set in one of two ways:
   * 1. Use {@link #withRandomSampler}
   * This will set the {@link #sampler} to a lambda function that will randomly sample the specified fraction of the
   * data.
   * 2. Use {@link #withCustomSampler}
   * You can build and use your own sampler by passing in a native Python function or a {@link Lambda}
   *
   * The sampler will be assigned to the lambda function corresponding to the API that was **most recently called**.
   */
  readonly sampler?: λFunction<DX | null, DX | null> | null;
  withSampler(sampler: λFunction<DX | null, DX | null> | null): ShapInterpreter;

  /**
   * A lambda function that returns {@link #backgroundData} as {@link Map} of {@link Data}.
   * This lambda is set with {@link #withCustomBackgroundDataByName}.
   */
  readonly backgroundDataByNameLambda?: λFunction<DX | null, C3.Map<string | null, Data | null>> | null;
  withBackgroundDataByNameLambda(backgroundDataByNameLambda: λFunction<DX | null, C3.Map<string | null, Data | null> | {[key: string | null]: IData | null}> | null): ShapInterpreter;

  /**
   * A lambda function that constructs {@link backgroundData} from {@link Map}.
   * This lambda can be set with {@link #withBackgroundDataFromMap}.
   */
  readonly backgroundDataFromMapLambda?: λBiFunction<string | null, C3.Map<string | null, Data | null>, DX | null> | null;
  withBackgroundDataFromMapLambda(backgroundDataFromMapLambda: λBiFunction<string | null, C3.Map<string | null, Data | null>, DX | null> | null): ShapInterpreter;

  /**
   * Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
   * `args` and `kwargs` are of `ValueType` `any`.
   */
  _call_(args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>): any;

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
  static fromJson(json: any | null): ShapInterpreter<DX, DO> | null;

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
  static fromJsonString(json: string | null): ShapInterpreter<DX, DO> | null;

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
  static fromXmlString(xml: string | null): ShapInterpreter<DX, DO> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): ShapInterpreter<DX, DO> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ShapInterpreter<DX, DO>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ShapInterpreter<DX, DO>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ShapInterpreter<DX, DO>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ShapInterpreter<DX, DO> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ShapInterpreter<DX, DO> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ShapInterpreter<DX, DO>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ShapInterpreter<DX, DO>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ShapInterpreter<DX, DO>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ShapInterpreter<DX, DO>;

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
  withField(field: string, value: any, doNotConvert?: boolean): ShapInterpreter<DX, DO>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ShapInterpreter<DX, DO>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ShapInterpreter<DX, DO>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ShapInterpreter<DX, DO>;

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
  withoutFieldAtPath(path: string): ShapInterpreter<DX, DO>;

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
  withoutField(field: string | null): ShapInterpreter<DX, DO>;

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
  withoutField(field: FieldType | null): ShapInterpreter<DX, DO>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): ShapInterpreter<DX, DO>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ShapInterpreter<DX, DO>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ShapInterpreter<DX, DO>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ShapInterpreter<DX, DO>;

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
  defaultField(field: string): ShapInterpreter<DX, DO>;

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
  defaultField(field: FieldType): ShapInterpreter<DX, DO>;

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
  unsetField(field: string): ShapInterpreter<DX, DO>;

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
  unsetField(field: FieldType): ShapInterpreter<DX, DO>;

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
  removeField(field: string): ShapInterpreter<DX, DO>;

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
  removeField(field: FieldType): ShapInterpreter<DX, DO>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ShapInterpreter<DX, DO>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): ShapInterpreter<DX, DO>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ShapInterpreter<DX, DO>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ShapInterpreter<DX, DO>;

  mergeJson(json: any | null): ShapInterpreter<DX, DO>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ShapInterpreter<DX, DO>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): ShapInterpreter<DX, DO>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<ShapInterpreter<DX, DO> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<ShapInterpreter<DX, DO> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ShapInterpreter<DX, DO> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<ShapInterpreter<DX, DO> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ShapInterpreter<DX, DO> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, ShapInterpreter<DX, DO> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ShapInterpreter<DX, DO> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ShapInterpreter<DX, DO> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ShapInterpreter<DX, DO> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): ShapInterpreter<DX, DO>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): ShapInterpreter<DX, DO>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): ShapInterpreter<DX, DO>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ShapInterpreter<DX, DO>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): ShapInterpreter<DX, DO>;

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
  static make(fields: any, withDefaults?: boolean): ShapInterpreter<DX, DO>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): ShapInterpreter<DX, DO>;

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
  afterMake(): ShapInterpreter<DX, DO>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ShapInterpreter<DX, DO>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<ShapInterpreter<DX, DO>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): ShapInterpreter<DX, DO>;

  /**
   * The narrowed {@link MlInterpretResult} Type whose instance will be returned on {@link #interpret}.
   */
  get resultType(): Type;

  /**
   * Initialize an {@link MlInterpreter} with an explainer.
   *
   * @param explainer
   *           The primary algorithm for interpretation. See C3 Types that mixin {@link MlInterpreter} for their list
   *           of accepted explainers.
   * @param spec
   *           Customizations for an {@link MlInterpreter} and its explainer. If the explainer is a native Python class
   *           and either the spec or {@link MlInterpretSpec#initKwargs} are null, then the explainer will be
   *           initialized with empty arguments.
   */
  static fromExplainer(explainer: any, spec?: MlInterpretSpec | null): MlInterpreter<any, any>;

  /**
   * Make a new instance of a native explainer from a {@link MlAtomicPipe}. This method will utilize the
   * {@link #initKwargs} during initialization and be set to interpret the pipe's trained native model.
   *
   * @param pipe
   *           A trained {@link MlAtomicPipe} with a native model that can be interpreted by this {@link MlInterpreter}.
   * @return A native explainer
   */
  makeExplainer(pipe: MlAtomicPipe<any, any, any>): any;

  /**
   * Interpret the model associated with an {@link MlPipe} using the given data.
   *
   * Determines the {@link Action.Requirement} by combining the requirements for the pipe's {@link MlAtomicPipe#doProcess} and the interpreter's {@link #doInterpret}.
   * To find the requirement for the pipe, it checks for `actionRequirement` on the pipe, then on the overload of `doProcess`.
   * For the interpreter, it checks `actionRequirement` on the interpreter, and then on the overload for `doInterpret`.
   * Then, it attempts to find a common descendent of these two runtimes (pipe and interpreter)
   * If one is found, that is returned, otherwise return the requirement for the interpreter.
   *
   * @param pipe
   *           The trained {@link MlAtomicPipe} to be interpreted. {@link MlInterpreter} does not currently support
   *           interpreting {@link MlPipeline}s.
   * @param x
   *           The input data used to help interpret the underlying model in an {@link MlPipe}. For model-agnostic
   *           methods, the model's {@link #processFunc} will be used
   * @param spec
   *           Customizations for the interpretation.
   * @return A result that helps interpret the behavior of the {@link MlAtomicPipe}
   */
  interpret(pipe: MlAtomicPipe<any, any, any>, x?: DX | null, spec?: MlOperationSpec | null): MlInterpretResult<any>;

  /**
   * Convert the input into a native format and make a new explainer from the pipe.
   *
   * @param pipe
   *           A trained {@link MlAtomicPipe}.
   * @param x
   *           The input data being used for interpretation.
   * @return a native Python dictionary containing `x`, `context`, and `explainer`.
   */
  beforeInterpret(pipe: MlAtomicPipe<any, any, any>, x?: DX | null): any;

  /**
   * Use a native explainer to perform local interpretation on a model and input data.
   *
   * @param beforeInterpretOutputs
   *           A native Python dictionary containing `x` and `explainer`.
   * @return A native Python dictionary containing the interpretation results. This will include at least the
   * output produced by the native explainer, keyed as `interpretations`. This method does not return the outputs of
   * `process` on the {@link MlAtomicPipe} that is being interpreted. Please use {@link MlPipeline#interpret} to get
   * the results of `process` in addition to the result of this method.
   */
  doInterpret(beforeInterpretOutputs: any): any;

  /**
   * Assemble the results of interpretation into an instance that mixes {@link MlInterpretResult}. This method will
   * convert any native values into instances of C3 Types (i.e. np.ndarray to c3.Data).
   *
   * @param doInterpretOutputs
   *           A native Python dictionary containing a 1:1 mapping of field names on a type that mixes
   *           {@link MlInterpretResult} to their native values.
   */
  afterInterpret(doInterpretOutputs: any): MlInterpretResult<any>;

  /**
   * Convert native outputs of interpretations into instances of {@link ValueType}s. This method only supports the
   * conversion of floats, np.ndarray, and pd.DataFrame, as well as a native list of those types.
   *
   * @param nativeOutput
   *           A supported native object.
   * @return The native object as a {@link ValueType} instance.
   */
  convertNativeToInterpretOutputs(nativeOutput: any): any;

  /**
   * @return A new instance of {@link MlInterpreter} with field values specified by the `spec`.
   */
  static fromSpec(spec?: MlInterpretSpec | null): MlInterpreter<any, any>;

  /**
   * Prepare or setup this instance of {@link MlInterpreter} for model interpretation. This function will be called
   * automatically during {@link MlPipeline#train}.
   *
   * @param x
   *           The training input data for the {@link MlAtomicPipe} that is associated with this interpreter. This can
   *           be used to set configurations prior to interpretation.
   * @return A prepared {@link MlInterpreter} instance
   */
  prepare(x: DX): MlInterpreter<any, any>;

  /**
   * Method that returns {@link #backgroundData} as {@link Map} of {@link Data}.
   * key is user-defined name for each {@link Data} in {@link #backgroundData}.
   * Default implementation ensures `Data` and named `Tuple` of `Data` are handled by platform provided code.
   *
   * This method is mandatory to successfully register and load `MlPipeline` that contains interpreter instances
   * with background data from {@link ModelRegistry}.
   *
   * USER NOTE - Users can provide a `lambda` to successfully register and load `MlPipeline` that
   * contains interpreter instances with background data type (`DX`) different from default types handled by platform code.
   * See {@link #withCustomBackgroundDataByName}.
   * DEVELOPER NOTE - Developers can override this method in types that mixin `MlInterpreter.BackgroundDataMixin`
   * to change default implementation.
   */
  backgroundDataByName(): C3.Map<string | null, Data | null>;

  /**
   * Configure the {@MlInterpreter.BackgroundDataMixin} to employ a custom function to return {@link #backgroundData}
   * as {@link Map} of {@link Data}. key is user-defined name for each {@link Data} in {@link #backgroundData}.
   *
   * If a user configures this method, it is also required to configure the inverse function {@link #withCustomBackgroundDataFromMap}.
   * Example Usage:
   * ```py
   * def background_data_to_map(data):
   *    map_of_data = {}
   *    map_of_data['x1'] = data.x1
   *    map_of_data['x2'] = data.x2
   *    return map_of_data
   *
   * c3.MlInterpreter().withCustomBackgroundDataByName(background_data_to_map)
   * ```
   * @param func
   *           A function that returns background data as {@link Map}.
   * @return An instance of {@link MlInterpreter.BackgroundDataMixin}
   */
  withCustomBackgroundDataByName(func: λFunction<DX | null, C3.Map<string | null, Data | null>>): ShapInterpreter<DX, DO>;

  /**
   * Method that constructs {@link #backgroundData} as `DX` from {@link Map} of {@link Data}.
   * Default implementation ensures `Data` and named `Tuple` of `Data` are handled by platform provided code.
   * @param data
   *           A {@link Map} whose keys are same as {@link Map} returned by {@link #backgroundDataByName}.
   *
   * This method is required to successfully register and load `MlPipeline` that contains interpreter instances
   * with background data from {@link ModelRegistry}.
   *
   * USER NOTE - Users can provide a `lambda` to successfully register and load `MlPipeline` that
   * contains interpreter instances with background data type (`DX`) different from default types handled by platform code.
   * See {@link #withCustomBackgroundDataFromMap}.
   * DEVELOPER NOTE - Developers can override this method in types that mixin `MlInterpreter.BackgroundDataMixin`
   * to change default implementation.
   */
  backgroundDataFromMap(data?: C3.Map<string | null, Data | null>): DX | null;

  /**
   * Configure the {@MlInterpreter.BackgroundDataMixin} to employ a custom function to construct {@link #backgroundData}
   * from input {@link Map}. This function serves as inverse of {@link #withCustomBackgroundDataFromMap}.
   * Example Usage:
   * ```py
   * def background_data_from_map(backgroundType, data):
   *   data_as_dict = dict(data)
   *   type = c3.ValueType.fromString(backgroundType)
   *   data_as_dx = type.makeValue(x11=data_as_dict["x1"], x12=data_as_dict["x2"])
   *   return data_as_dx
   *
   * c3.MlInterpreter().withCustomBackgroundDataFromMap(background_data_from_map)
   * ```
   * @param func
   *           A function that constructs background data from {@link Map} of {@link Data}.
   * @return An instance of {@link MlInterpreter.BackgroundDataMixin}
   */
  withCustomBackgroundDataFromMap(func: λBiFunction<string | null, C3.Map<string | null, Data | null>, DX | null>): ShapInterpreter<DX, DO>;

  /**
   * Sample the input data. If the {@link #sampler} is specified, it will be applied directly onto the input data. If
   * there is no {@link #sampler} and this interpreter instance needs background data, then this method will use up to
   * {@link #MAX_SAMPLES} samples for background data. The data will be randomly sampled if the input data size exceeds
   * {@link #MAX_SAMPLES}.
   *
   * @param x
   *           The training input data for the {@link MlAtomicPipe} that is associated with this interpreter.
   * @return A new interpreter instance with sampled background data.
   */
  sample(x: DX): ShapInterpreter<DX, DO>;

  /**
   * Configure the {@MlInterpreter.BackgroundDataMixin} to employ a custom function to sample the input data and keep
   * the result as background data. This custom function's input is of type `DX`, and the expected output type is
   * `DX`. `DX` output from this custom function is persisted in platform code to enable multi-node execution.
   * If `DX` is a custom C3 Type and not one of {@link Data}, map or named tuple of {@link Data}, it is
   * essential that the custom function returns the persisted format of `DX`. See {@link Data.Persisted}.
   * Example Usage:
   * ```py
   * def sample_func(x):
   *    import numpy as np
   *    random_idx = np.random.randint(0, len(x), len(x) // 2)
   *    return x[random_idx]
   *
   * c3.MlInterpreter().withCustomSampler(sample_func)
   * ```
   * @param func
   *           A function that returns a sample of the training data to be used for background data.
   * @return An instance of {@link MlInterpreter.BackgroundDataMixin}
   */
  withCustomSampler(func: λFunction<DX | null, DX | null>): ShapInterpreter<DX, DO>;

  /**
   * Configure the {@MlInterpreter.BackgroundDataMixin} to randomly sample the input data to keep as background data/
   * Example Usage:
   * ```py
   * # Sample 32% of the dataset
   * c3.MlInterpreter().withRandomSampler(frac=0.32)
   *
   * # Sample 50 points from the dataset
   * c3.MlInterpreter().withRandomSampler(numSamples=50)
   * ```
   *
   * @param numSamples
   *          Number of points (rows) to sample from the input data.
   * @param frac
   *          Float representing the amount of input data to be sampled for background data. If both `numSamples` and
   *          `frac` are specified, `numSamples` will be prioritized.
   * @return An instance of {@link MlInterpreter.BackgroundDataMixin}
   */
  withRandomSampler(numSamples?: number | null, frac?: number | null): ShapInterpreter<DX, DO>;

  /**
   * @return True if this instance of {@MlInterpreter.BackgroundDataMixin} requires data but it is currently missing.
   */
  needsBackgroundData(): boolean;
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
