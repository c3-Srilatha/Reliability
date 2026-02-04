// TypeScript definitions for the C3 type UiSdlDataContext

/**
 * A component that exposes UiSdlDataRedux reducers and epics. This component is a
 * child component of UiSdlSite.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlDataContext
 */
declare interface IUiSdlDataContext {

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
   * The data Redux namespace that indicates where the data is stored in the Redux state.
   */
  REDUX_METADATA_NAMESPACE?: string | null;

  /**
   * Mark the effect type to use when the corresponding trigger action is triggered.
   * Overwrite effectType if want to use different async effect.
   */
  effectTriggers?: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>;

  /**
   * The mapping between variable and UiSdlDynamicValueSpecParam the variable can resolve to. Recursive resolving is not
   * supported, the UiSdlDynamicValueSpecParam cannot return another UiSdlDynamicValueSpecParam (see UI-4758 for
   * proposed support).
   *
   *
   * @example
   * ```json
   * {
   *   "bulbAccount.id": {
   *     "type": "UiSdlPageParam",
   *     "path": "id"
   *   },
   *   "bulb.name": {
   *     "type": "UiSdlPageParam",
   *     "path": "name"
   *   }
   * }
   * ```
   */
  contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null};

  /**
   * Whether or not this {@link UiSdlComponentDataSpec} should send requests even if context vars are not resolved
   * to a truthy value. Overrides {@link UiSdlConfig#ignoreRequestsWithFalsyContextVars}
   */
  sendRequestWithFalsyContextVars?: boolean;

  /**
   * List of data transform types, which will be applied after the data is
   * received but before saving it in the state.
   *
   * Constraint: These types must extend {@link UiSdlDataTransform}.
   */
  dataTransforms?: C3.Array<string | null> | Array<string | null>;

  /**
   * When not empty, data and metadata will be retrieved from the specified tunnel.
   */
  tunnelConfiguration?: IUiSdlTunnelConfiguration | null;

  /**
   * The arguments to be provided with the data request.
   */
  c3arguments?: any | null;

  /**
   * Used when c3function in the `dataSource` is `fetch`.
   * The filter in the `dataSource` is combined with the values of the map when making the fetch request.
   * The key is the metadataId of the component updating the filter; the value is the filter.
   */
  additionalFilters?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * The changes that are made to the data source. This key is `id`; value is an array of fields modified .
   */
  edits?: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>};

  /**
   * The deleted record ids
   */
  deletions?: C3.Array<string | null> | Array<string | null>;

  /**
   * Newly added record
   */
  additions?: C3.Array<string | null> | Array<string | null>;

  /**
   * Record persist change error messages.
   */
  persistChangeErrors?: C3.Array<string | null> | Array<string | null>;

  /**
   * Children components to render within this component
   */
  children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
}

/**
 * A component that exposes UiSdlDataRedux reducers and epics. This component is a
 * child component of UiSdlSite.
 *
 * @remarks this represents a made instance of UiSdlDataContext
 */
declare class UiSdlDataContext extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDataContext;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): UiSdlDataContext;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): UiSdlDataContext;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDataContext;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDataContext;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDataContext;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDataContext;

  /**
   * The data Redux namespace that indicates where the data is stored in the Redux state.
   */
  readonly REDUX_METADATA_NAMESPACE?: string | null;
  withREDUX_METADATA_NAMESPACE(REDUX_METADATA_NAMESPACE: string | null): UiSdlDataContext;

  /**
   * Mark the effect type to use when the corresponding trigger action is triggered.
   * Overwrite effectType if want to use different async effect.
   */
  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlDataContext;

  /**
   * The mapping between variable and UiSdlDynamicValueSpecParam the variable can resolve to. Recursive resolving is not
   * supported, the UiSdlDynamicValueSpecParam cannot return another UiSdlDynamicValueSpecParam (see UI-4758 for
   * proposed support).
   *
   *
   * @example
   * ```json
   * {
   *   "bulbAccount.id": {
   *     "type": "UiSdlPageParam",
   *     "path": "id"
   *   },
   *   "bulb.name": {
   *     "type": "UiSdlPageParam",
   *     "path": "name"
   *   }
   * }
   * ```
   */
  readonly contextVars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withContextVars(contextVars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDataContext;

  /**
   * Whether or not this {@link UiSdlComponentDataSpec} should send requests even if context vars are not resolved
   * to a truthy value. Overrides {@link UiSdlConfig#ignoreRequestsWithFalsyContextVars}
   */
  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlDataContext;

  /**
   * List of data transform types, which will be applied after the data is
   * received but before saving it in the state.
   *
   * Constraint: These types must extend {@link UiSdlDataTransform}.
   */
  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  /**
   * When not empty, data and metadata will be retrieved from the specified tunnel.
   */
  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDataContext;

  /**
   * The arguments to be provided with the data request.
   */
  readonly c3arguments?: any | null;
  withC3arguments(c3arguments: any | null): UiSdlDataContext;

  /**
   * Used when c3function in the `dataSource` is `fetch`.
   * The filter in the `dataSource` is combined with the values of the map when making the fetch request.
   * The key is the metadataId of the component updating the filter; the value is the filter.
   */
  readonly additionalFilters?: C3.Map<string | null, string | null>;
  withAdditionalFilters(additionalFilters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataContext;

  /**
   * The changes that are made to the data source. This key is `id`; value is an array of fields modified .
   */
  readonly edits?: C3.Map<string | null, C3.Array<string | null>>;
  withEdits(edits: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): UiSdlDataContext;

  /**
   * The deleted record ids
   */
  readonly deletions?: C3.Array<string | null>;
  withDeletions(deletions: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  /**
   * Newly added record
   */
  readonly additions?: C3.Array<string | null>;
  withAdditions(additions: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  /**
   * Record persist change error messages.
   */
  readonly persistChangeErrors?: C3.Array<string | null>;
  withPersistChangeErrors(persistChangeErrors: C3.Array<string | null> | Array<string | null>): UiSdlDataContext;

  /**
   * Children components to render within this component
   */
  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDataContext;

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
  static fromJson(json: any | null): UiSdlDataContext | null;

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
  static fromJsonString(json: string | null): UiSdlDataContext | null;

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
  static fromXmlString(xml: string | null): UiSdlDataContext | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlDataContext | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlDataContext;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlDataContext;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlDataContext;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlDataContext | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlDataContext | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlDataContext;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlDataContext;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlDataContext;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlDataContext;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlDataContext;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlDataContext;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlDataContext;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlDataContext;

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
  withoutFieldAtPath(path: string): UiSdlDataContext;

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
  withoutField(field: string | null): UiSdlDataContext;

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
  withoutField(field: FieldType | null): UiSdlDataContext;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlDataContext;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlDataContext;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlDataContext;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlDataContext;

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
  defaultField(field: string): UiSdlDataContext;

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
  defaultField(field: FieldType): UiSdlDataContext;

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
  unsetField(field: string): UiSdlDataContext;

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
  unsetField(field: FieldType): UiSdlDataContext;

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
  removeField(field: string): UiSdlDataContext;

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
  removeField(field: FieldType): UiSdlDataContext;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlDataContext;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlDataContext;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlDataContext;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlDataContext;

  mergeJson(json: any | null): UiSdlDataContext;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlDataContext;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlDataContext;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlDataContext | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlDataContext | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlDataContext | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlDataContext | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlDataContext | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlDataContext | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlDataContext | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlDataContext | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlDataContext | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlDataContext;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlDataContext;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlDataContext;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlDataContext;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlDataContext;

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
  static make(fields: any, withDefaults?: boolean): UiSdlDataContext;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlDataContext | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlDataContext;

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
  afterMake(): UiSdlDataContext;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlDataContext;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlDataContext>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlDataContext;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlDataContext | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlDataContext | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlDataContext | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlDataContext | null> | null>;

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
  dependencies(): MetadataDeps<UiSdlDataContext | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlDataContext;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlDataContext | null, spec?: UpsertSpec | null): UiSdlDataContext | null;

  upsert(srcObj?: UiSdlDataContext | null, spec?: UpsertSpec | null): UiSdlDataContext | null;

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
  static fromString(s: string | null): UiSdlDataContext | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlDataContext | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiSdlDataContext, state: UiSdlReduxState): UiSdlDataContext | null;

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
   * Applies the transforms to the input data in the order in which they are specified.
   * @param dataTransforms
   *            The {@link UiSdlDataTransform} to apply
   * @param inputData
   *            The data to apply the transforms to
   * @param context
   *            the context of the transformation
   * @returns the output of applying all the transforms
   */
  static applyDataTransforms(dataTransforms?: C3.Array<string | null>, inputData?: any, context?: UiSdlDataTransform<any, any> | null): any;

  /**
   * Applies {@link UiSdlDataTransform#transformArgs} to the action arguments.
   *
   * @param actionArgs
   *            The action arguments object to be sent to backend
   * @param actionArgsTransforms
   *            The {@link UiSdlDataTransform#transformArgs} to apply
   * @param componentId
   *            Component id
   * @param state
   *            Redux state.
   * @param context
   *            the context of the transformation
   * @returns the transformed action arguments
   */
  static applyTransformArgs(actionArgs?: C3.Map<string | null, any>, actionArgsTransforms?: C3.Array<string | null>, componentId?: string | null, state: UiSdlReduxState, context?: UiSdlDataTransform.Context | null): C3.Map<string | null, any>;

  /**
   * UI Trigger. Update persist change error action will replace new error messages to {@link persistChangeErrors} and
   * update the state
   * @param id
   *            Id of the component.
   */
  static updatePersistChangeErrorAction(id?: string | null, errors?: C3.Array<string | null>): UiSdlPersistChangeErrorUpdateAction | null;

  /**
   * UI Trigger. Creates a Merge Arguments action that will deeply merge
   * the passed object into this data source's arguments
   * When c3function in the `dataSource` is `fetch`, and `sourceMetadataId` is provided,
   * filter updates will be saved in {@link additionalFilters}, and the original filter in the arguments is not changed.
   * @param id
   *            Id of the component.
   * @params args:
   *              New arguments for the data source.
   * @params sourceMetadataId:
   *              metadataId of the component calling this function.
   * @return {@link UiSdlArgumentsMergeAction} with payload = `{args: args, sourceMetadataId: sourceMetadataId}`
   */
  static mergeArgumentsAction(id: string, args: C3.Map<string | null, any>, sourceMetadataId?: string | null): UiSdlArgumentsMergeAction;

  /**
   * UI Trigger. Creates a Update Data Type action that will set the new data type into the dataSource.
   * @param id
   *            Id of the component.
   * @params newType:
   *              New type for the data source.
   * @return {@link UiSdlDataTypeUpdateAction} with payload = `newType`
   */
  updateDataTypeAction(id?: string | null, newType: string): UiSdlDataTypeUpdateAction;

  /**
   * UI Trigger. Creates a Update Data config action that will set the new data config
   * including c3type, c3function, and args for the dataSource.
   * @param id
   *            Id of the component.
   * @params newConfig:
   *              New config for the data source.
   *              {
   *                typeName: 'Building',  // c3 type name
   *                actionName: 'fetch', // c3 action name
   *                args: {   // c3 spec
   *                  spec: {
   *                    filter: '1 == 1'
   *                  }
   *                },
   *              }
   * @params contextVars:
   *              An object that holds context variable information.
   * @return {@link UiSdlDataConfigUpdateAction} with payload = `newConfig`
   */
  updateDataConfigAction(id?: string | null, newConfig: C3.Map<string | null, any>, contextVars?: C3.Map<string | null, any>, metadataId?: string | null): UiSdlDataConfigUpdateAction;

  /**
   * Triggered when the user saves data and updates the count of the data grid
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `UPDATE_DATA_COUNT` action for this instance.
   */
  static updateCountDataAction(id?: string | null): UiSdlUpdateDataCountAction | null;

  /**
   * UI Trigger. Creates a Request Data action that starts a remote request
   * to receive this data source's data.
   * @param id
   *            Id of the component.
   * @param actionTransforms
   *            The names of the transforms to apply.  Transforms must mix {@link UiSdlDataTransform}
   * @param mode
   *            The mode to insert the received data.
   * @param args
   *            The arguments to be provided with the data request.
   * @param dataSourceComponentId
   *            The id of the component that is requesting data.
   *            Note: developer manually triggering this action should set this parameter to the id of the component that is requesting data.
   */
  requestDataAction(id?: string | null, actionTransforms?: C3.Array<string | null>, mode?: string | null, args?: any | null, dataSourceComponentId?: string | null): UiSdlDataRequestAction;

  /**
   * UI Trigger. Creates a Cancel Request Data action that cancels a remote
   * request to receive this data source's data. Any pending ajax calls will
   * be cancelled.@param id
   *            Id of the component.
   */
  cancelRequestDataAction(id?: string | null): UiSdlCancelDataRequestAction;

  /**
   * Trigger when an API request has finished, regardless if the request
   * was successful or not.
   *
   * @param id
   *            Id of the component.
   * @param response
   *           The API response data
   * @param isError
   *           `false` if the request was successful, `true` otherwise
   * @param dataSourceComponentId
   *           The id of the component that is receiving data.
   *
   * @returns a `DATA_RECEIVE` action for this instance with the following properties:
   * - payload: {any} The API response data
   * - meta.dataSourceId {string} The `id` of this data source
   * - error {boolean} `false` if the request was successful, `true` otherwise
   */
  static receiveDataAction(id?: string | null, response?: any, isError?: boolean, dataSourceComponentId?: string | null): UiSdlDataReceiveAction;

  /**
   * Trigger when an API request has finished and the request failed with error.
   *
   * @param id
   *            Id of the component.
   * @param errorMessage
   *            The API response error message
   *
   * @returns a `ERROR_RECEIVE` action for this instance with the following properties:
   * - payload: {string} The API response error message
   * - meta.dataSourceId {string} The `id` of this data source
   */
  static receiveErrorAction(id?: string | null, errorMessage?: string | null): UiSdlErrorReceiveAction;

  /**
   * Trigger to set data in a data source manually.
   * @param id
   *            Id of the component.
   */
  static setDataAction(id?: string | null, originalData?: any, modifiedData?: any): UiSdlDataSetAction;

  /**
   * Trigger to notify that data has loaded
   * @param id
   *            Id of the component.
   */
  static loadedDataAction(id?: string | null, response?: any, isError?: boolean): UiSdlDataLoadedAction;

  /**
   * Trigger a handle loaded data action after receiving new data.
   * @param id
   *            Id of the component.
   * @returns an `LOADED_DATA_HANDLE` action for this instance.
   */
  handleLoadedDataAction(id?: string | null): UiSdlLoadedDataHandleAction | null;

  /**
   * Trigger to save and persit change to the data source
   *
   * @param id
   *            Id of the component.
   * @param dataSourceComponentId
   *            The id of the component that is saving data.
   * @returns a `DATA_SAVE` action for this instance with the following properties:
   * - meta: { dataSourceId: string } The id of data source.
   */
  saveDataAction(id?: string | null, dataSourceComponentId?: string | null): UiSdlDataSaveAction;

  /**
   * Trigger to delete records from the data source
   *
   * @param id
   *            Id of the component's datasource.
   * @param ids
   *        An array of ids of the records to delete
   *
   * @returns a `DATA_DELETE` action for this instance with the following properties:
   * - payload: {[string]} The ids of the record to delete
   */
  deleteDataAction(id?: string | null, ids: C3.Array<string | null>): UiSdlDataDeleteAction;

  /**
   * Trigger to add a new record to the data source
   *
   * @param id
   *            Id of the component's datasource.
   * @param itemId
   *        The id of the record to add
   * @param isError
   *        Whether the record added is an error
   * @param insertLocation
   *        The location to insert the new record in the existing object array.  If `PREPEND` row will be added to
   *         the beginning of array, `APPEND` will be added to end of array
   *
   * @returns a `DATA_ADD` action for this instance with the following properties:
   * - payload: {id: string} The id of the record to add
   */
  static addDataAction(id?: string | null, itemId?: string | null, isError?: boolean, insertLocation?: string | null): UiSdlDataAddAction;

  /**
   * Trigger to create an unique id
   *
   * @param id
   *            Id of the component.
   * @returns a `ID_CREATE` action for this instance
   */
  createUniqueIdAction(id?: string | null): UiSdlIdCreateAction;

  /**
   * Trigger to modify a record from the data source
   *
   * @param id
   *            Id of the component's datasource.
   * @param itemId
   *        The id of the record to modify
   *
   * @param fieldName
   *        The field name of the record to modify
   *
   * @param newValue
   *        New value of given field
   *
   * @returns a `DATA_MODIFY` action for this instance with the following properties:
   * - payload: {id: string, field: string, newValue: string}
   */
  static modifyDataAction(id?: string | null, itemId?: string | null, fieldName: string, newValue: string): UiSdlDataModifyAction;

  /**
   * Trigger to cancel change of records from the data source
   *
   * @param id
   *            Id of the component.
   * @param loadOriginalData
   *        Whether to load original data into modified data.
   * @returns a `CHANGE_CANCEL` action
   */
  cancelChangeAction(id?: string | null, loadOriginalData?: boolean): UiSdlChangeCancelAction;

  /**
   * Returns an object containing this data source's data plus any modifications.
   * It will be merged into the props of React components that
   * include a reference to this data source in their `data` config
   * @param id
   *        Id of the component.
   * @param state
   *        current redux state
   * @return an object for the metadata of the dataSource
   */
  mapStateToData(id?: string | null, state: UiSdlReduxState): UiSdlReduxState;

  /**
   * Returns an object containing this data source's data without any modifications.
   * It will be merged into the props of React components that
   * include a reference to this data source in their `dataOriginal` config
   * @param id
   *           Id of the data source.
   * @param state
   *        current redux state
   * @return an object for the metadata of the dataSource
   */
  mapStateToOriginalData(id: string, state: UiSdlReduxState): UiSdlReduxState;

  /**
   * Returns an object containing this data source's metadata.
   * It will be merged into the props of React components that
   * include a reference to this data source in their `dataSourceMetadata` config
   * @param id
   *           Id of the data source.
   * @param state
   *        current redux state
   * @return an object for the metadata of the dataSource
   */
  mapStateToMetadata(id: string, state: UiSdlReduxState): UiSdlReduxState;

  /**
   * Returns an array containing data items that have been added during the page lifecycle.
   * It will be merged into the props of React components that
   * include a reference to this data source in their `dataSourceMetadata` config
   * @param state
   *        current redux state
   * @return an object for the metadata of the dataSource
   */
  mapStateToDataAdditions(state: UiSdlReduxState): any;

  /**
   * Sets data in the state.  Depending on the action sets it in modified or original slice of redux state
   */
  dataSetEffect(state: UiSdlReduxState, action: UiSdlDataSetAction): UiSdlReduxState;

  /**
   * Set new error message to state
   */
  persistChangeErrorUpdateEffect(state: UiSdlReduxState, action: UiSdlPersistChangeErrorUpdateAction): UiSdlReduxState;

  /**
   * Listens for actions of type `LOADED_DATA_HANDLE` and performs side effect on new loaded data.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static loadedDataHandleReducer(state?: UiSdlReduxState | null, action?: UiSdlLoadedDataHandleAction | null): UiSdlReduxState | null;

  /**
   * Sets the received data into the data source state
   */
  dataReceiveEffect(state: UiSdlReduxState, action: UiSdlDataReceiveAction): UiSdlReduxState;

  /**
   * Sets the received error into the data source state
   */
  errorReceiveEffect(state: UiSdlReduxState, action: UiSdlErrorReceiveAction): UiSdlReduxState;

  /**
   * Deeply merges the passed arguments.
   */
  argumentsMergeEffect(state: UiSdlReduxState, action: UiSdlArgumentsMergeAction): UiSdlReduxState;

  /**
   * Update dataSource data type.
   */
  dataTypeUpdateEffect(state: UiSdlReduxState, action: UiSdlDataTypeUpdateAction): UiSdlReduxState;

  /**
   * Update dataSource data config.
   */
  dataConfigUpdateEffect(state: UiSdlReduxState, action: UiSdlDataConfigUpdateAction): UiSdlReduxState;

  /**
   * Listens for actions of type `DATA_DELETE` and updates modified data and {@link deletions}
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  dataDeleteReducer(state: UiSdlReduxState, action: UiSdlDataDeleteAction): UiSdlReduxState;

  /**
   * Listens for actions of type `DATA_ADD` and updates modified data and {@link additions}
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  dataAddEffect(state: UiSdlReduxState, action: UiSdlDataAddAction): UiSdlReduxState;

  /**
   * Listens for actions of type `DATA_MODIFY` and updates modified data and {@link edits}
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  dataModifyEffect(state: UiSdlReduxState, action: UiSdlDataModifyAction): UiSdlReduxState;

  /**
   * Listens for actions of type `CHANGE_CANCEL` and reset modified data and {@link edits} and {@link deletions}
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  changeCancelEffect(state: UiSdlReduxState, action: UiSdlChangeCancelAction): UiSdlReduxState;

  /**
   * Returns an RxJS ajax observable for a particular server side API.
   * @param siteId
   *           The site id for which to retrieve the tunnel configuration.
   * @param state
   *           Redux state
   * @param typeName
   *           the action type
   * @param actionName
   *           the action name
   * @param actionArguments
   *           the action arguments
   * @param timeoutSecs
   *            the number of seconds before the tunneled request will timeout
   * @param tunnelConfiguration
   *           The optional tunnel configuration to provide.  If provided this will take precedence over the one found
   *            from the {@link UiSdlSite} matching the {#siteId} param
   *
   * @return an ajax UiSdlObservable that resolves to the request response
   * @see https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/ajax.md#returns
   */
  tunneledAjax(siteId?: string | null, state: UiSdlReduxState, typeName?: string | null, actionName?: string | null, actionArguments?: C3.Map<string | null, any>, timeoutSecs?: number | null, tunnelConfiguration?: UiSdlTunnelConfiguration | null): UiSdlObservable;

  /**
   * Returns an RxJS ajax observable for a particular server side API.
   * @param typeName the action type
   * @param actionName the action name
   * @param actionArguments the action arguments
   * @param tunnelConfiguration the optional tunnelConfiguration
   *
   * @return an ajax UiSdlObservable that resolves to the request response
   * @see https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/ajax.md#returns
   */
  static ajax(typeName?: string | null, actionName?: string | null, actionArguments?: C3.Map<string | null, any>, tunnelConfiguration?: UiSdlTunnelConfiguration | null): UiSdlObservable;

  /**
   * Listens for actions of type 'DATA_RECEIVE' and triggers an action with type "DATA_LOADED".
   *
   * @param actionStream A stream of actions of this AsyncEffect actionType
   * @param stateStream An observable that emits the application state
   * @return an action stream
   */
  dataReceiveEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;
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
