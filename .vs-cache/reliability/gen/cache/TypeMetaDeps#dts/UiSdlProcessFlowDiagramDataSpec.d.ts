// TypeScript definitions for the C3 type UiSdlProcessFlowDiagramDataSpec

/**
 * The specification of data retrieval for {@link UiSdlProcessFlowDiagram} instances .
 * There are three main types to consider that together form a hierarchy:
 * - The parent type that contains all the component in the diagram.
 * - The component type that is shown in each component of the diagram.
 * - The optional subcomponent type that is shown in the tooltip when hovering over a component in the diagram.
 *
 * Note that all images must be provisioned with the UI under `ui/content/`.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlProcessFlowDiagramDataSpec
 */
declare interface IUiSdlProcessFlowDiagramDataSpec {

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
  contextVars?: Map_Type<string, UiSdlDynamicValueSpecParam> | {[key: string]: IUiSdlDynamicValueSpecParam};

  /**
   * Whether or not this {@link UiSdlComponentDataSpec} should send requests even if context vars are not resolved
   * to a truthy value. Overrides {@link UiSdlConfig#ignoreRequestsWithFalsyContextVars}
   */
  sendRequestWithFalsyContextVars?: boolean;

  /**
   * When provided this will override the {@link UiSdlSite#tunnelConfiguration}.  To completely ignore any tunnel
   * configuration this should be explicitly set to empty object
   */
  tunnelConfiguration?: IUiSdlTunnelConfiguration;

  /**
   * List of data transform types, which will be applied after the data is
   * received but before saving it in the state.
   *
   * Constraint: These types must extend {@link UiSdlDataTransform}.
   */
  dataTransforms?: Array_Type<string> | Array<string>;

  /**
   * If the developer needs to define a specific API outside of the basic functionality provided by a components
   * dataSpec type.  Define the {@link UiSdlComponentAdvancedDataSpec#actionName}, and optionally
   * {@link UiSdlComponentAdvancedDataSpec#actionArgs} required for the API.
   */
  advancedDataSpec?: IUiSdlComponentAdvancedDataSpec;

  /**
   * The type used to populate the data for {@link UiSdlComponent}.
   * Note that v8 will be last version to support a type here. We want to migrate to using only
   * string for type name. Using our own typeRef type allows for backwards compatibility, so both
   * forms "MyDataType" and { typeName: "MyDataType "} are supported.
   */
  dataType: string;

  /**
   * The action to call.
   */
  actionName?: string;

  /**
   * Spec for using {@link Evaluatable#eval}.
   */
  evalSpec?: IEvalSpec;

  /**
   * Disable if you want to avoid sending the request for this dataSpec on the first render.
   * Other data requests for the same component will still be sent.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Disable if you want to avoid sending the request for this dataSpec after the first contextVar resolves.
   * Other data requests for the same component will still be sent.
   */
  ignoreFirstContextVarResolution?: boolean;

  /**
   * Disable if you want to avoid sending the request for this dataSpec after any contextVar resolves.
   * Other data requests for the same component will still be sent.
   */
  ignoreAllContextVarResolution?: boolean;

  /**
   * Any fields that are used in toPartiallyAppliedActions to request data
   * but are not defined inside sub types of {@link UiSdlComponentDataSpec}
   */
  dataSpecDependence?: Array_Type<UiSdlCrossTypeDataSpecDependence> | Array<IUiSdlCrossTypeDataSpecDependence>;

  /**
   * Mapping between fields that depend on each other. See {@link UiSdlFieldsDependenceMapping} for more.
   */
  fieldsDependenceMapping?: Array_Type<UiSdlFieldsDependenceMapping> | Array<IUiSdlFieldsDependenceMapping>;

  /**
   * Controls whether context variables (`contextVars`) are automatically appended to the `filter` in the API call.
   *
   * By default, `contextVars` are automatically added to the `filter` of the API call. This behavior can be disabled
   * by setting `disableContextVarsFilter` to `true`. When disabled, the developer has full control over how and where
   * the `contextVars` are used.
   *
   * **Note**
   *    When `disableContextVarsFilter` is `true`, `contextVars` can still be explicitly referenced in the `filter` or
   *    other parts of the `dataSpec`. For example:
   *
   *   "dataSpec": {
   *     "disableContextVarsFilter": true,
   *     "contextVars": {
   *       "countryId": {
   *         "type": "UiSdlComponentStateParam",
   *         "componentType": "component",
   *         "id": "SDLDemo.FilterPanelWithContextVars",
   *         "path": "formFieldValues.country.value"
   *       }
   *     },
   *     "dataType": "SDLDemoRegion",
   *     "actionName": "fetch",
   *     "args": {
   *       "spec": {
   *         "include": "id",
   *         "filter": "1 == 1 && country.id == '${countryId}'"
   *       }
   *     }
   *   }
   */
  disableContextVarsFilter?: boolean;

  /**
   * The parent data type.
   */
  parentType: string;

  /**
   * The ID of the parent entity for which to render the process diagram.
   * Can also be a page parameter, e.g. `{{pageParams.assetId}}`.
   */
  entityId: string;

  /**
   * The field on the parent type that contains its component children.
   */
  componentsPath?: string;

  /**
   * The field on the component type that will be displayed in the tooltip.
   */
  componentDisplayField?: string;

  /**
   * The path from the component type to its risk score value.
   */
  componentRiskScorePath?: string;

  /**
   * The field on the component type that contains its risk level. If not provided,
   * {@link UiSdlProcessFlowDiagram#riskScoreThresholdHigh} and {@link UiSdlProcessFlowDiagram#riskScoreThresholdMedium}
   * will be used to calculate the risk level based on the risk score.
   */
  componentRiskLevelPath?: string;

  /**
   * The path from the component type to its sub-component children.
   * Note that this field and `subComponentRiskScorePath` must be filled to display sub-components.
   */
  componentSubComponentsPath?: string;

  /**
   * The field on the sub-component type that will be displayed in the tooltip.
   */
  subComponentDisplayName?: string;

  /**
   * The path from the sub-component type to its risk score value.
   * Note that this field and `componentSubComponentsPath` must be filled to display subcomponents.
   */
  subComponentRiskScorePath?: string;

  /**
   * The field on the sub-component type that contains its risk level. If not provided,
   * {@link UiSdlProcessFlowDiagram#riskScoreThresholdHigh} and {@link UiSdlProcessFlowDiagram#riskScoreThresholdMedium}
   * will be used to calculate the risk level based on the risk score.
   */
  subComponentRiskLevelPath?: string;

  /**
   * The path from the parent dataType to its {@link ProcessDiagramConfig} configurations.
   */
  diagramConfigPath?: string;

  /**
   * The field on the parent type that is used for the diagram image name.
   * The full image URL will be calculated by concatenating `imageUrlPrefix`, `imageNameField` and `imageUrlExtension`.
   */
  imageNameField?: string;

  /**
   * The path from the component type to its status value.
   */
  componentStatusPath?: string;

  /**
   * The prefix for the diagram image URL.
   */
  imageUrlPrefix?: string;

  /**
   * The diagram image extension.
   */
  imageUrlExtension?: string;
}

/**
 * The specification of data retrieval for {@link UiSdlProcessFlowDiagram} instances .
 * There are three main types to consider that together form a hierarchy:
 * - The parent type that contains all the component in the diagram.
 * - The component type that is shown in each component of the diagram.
 * - The optional subcomponent type that is shown in the tooltip when hovering over a component in the diagram.
 *
 * Note that all images must be provisioned with the UI under `ui/content/`.
 *
 * @remarks this represents a made instance of UiSdlProcessFlowDiagramDataSpec
 */
declare class UiSdlProcessFlowDiagramDataSpec extends Obj  {

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
  readonly contextVars?: Map_Type<string, UiSdlDynamicValueSpecParam>;
  withContextVars(contextVars: Map_Type<string, UiSdlDynamicValueSpecParam> | {[key: string]: IUiSdlDynamicValueSpecParam} | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Whether or not this {@link UiSdlComponentDataSpec} should send requests even if context vars are not resolved
   * to a truthy value. Overrides {@link UiSdlConfig#ignoreRequestsWithFalsyContextVars}
   */
  readonly sendRequestWithFalsyContextVars?: boolean;
  withSendRequestWithFalsyContextVars(sendRequestWithFalsyContextVars: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * When provided this will override the {@link UiSdlSite#tunnelConfiguration}.  To completely ignore any tunnel
   * configuration this should be explicitly set to empty object
   */
  readonly tunnelConfiguration?: UiSdlTunnelConfiguration;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * List of data transform types, which will be applied after the data is
   * received but before saving it in the state.
   *
   * Constraint: These types must extend {@link UiSdlDataTransform}.
   */
  readonly dataTransforms?: Array_Type<string>;
  withDataTransforms(dataTransforms: Array_Type<string> | Array<string> | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * If the developer needs to define a specific API outside of the basic functionality provided by a components
   * dataSpec type.  Define the {@link UiSdlComponentAdvancedDataSpec#actionName}, and optionally
   * {@link UiSdlComponentAdvancedDataSpec#actionArgs} required for the API.
   */
  readonly advancedDataSpec?: UiSdlComponentAdvancedDataSpec;
  withAdvancedDataSpec(advancedDataSpec: IUiSdlComponentAdvancedDataSpec | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The type used to populate the data for {@link UiSdlComponent}.
   * Note that v8 will be last version to support a type here. We want to migrate to using only
   * string for type name. Using our own typeRef type allows for backwards compatibility, so both
   * forms "MyDataType" and { typeName: "MyDataType "} are supported.
   */
  readonly dataType: string;
  withDataType(dataType: string): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The action to call.
   */
  readonly actionName?: string;
  withActionName(actionName: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Spec for using {@link Evaluatable#eval}.
   */
  readonly evalSpec?: EvalSpec;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Disable if you want to avoid sending the request for this dataSpec on the first render.
   * Other data requests for the same component will still be sent.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Disable if you want to avoid sending the request for this dataSpec after the first contextVar resolves.
   * Other data requests for the same component will still be sent.
   */
  readonly ignoreFirstContextVarResolution?: boolean;
  withIgnoreFirstContextVarResolution(ignoreFirstContextVarResolution: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Disable if you want to avoid sending the request for this dataSpec after any contextVar resolves.
   * Other data requests for the same component will still be sent.
   */
  readonly ignoreAllContextVarResolution?: boolean;
  withIgnoreAllContextVarResolution(ignoreAllContextVarResolution: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Any fields that are used in toPartiallyAppliedActions to request data
   * but are not defined inside sub types of {@link UiSdlComponentDataSpec}
   */
  readonly dataSpecDependence?: Array_Type<UiSdlCrossTypeDataSpecDependence>;
  withDataSpecDependence(dataSpecDependence: Array_Type<UiSdlCrossTypeDataSpecDependence> | Array<IUiSdlCrossTypeDataSpecDependence> | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Mapping between fields that depend on each other. See {@link UiSdlFieldsDependenceMapping} for more.
   */
  readonly fieldsDependenceMapping?: Array_Type<UiSdlFieldsDependenceMapping>;
  withFieldsDependenceMapping(fieldsDependenceMapping: Array_Type<UiSdlFieldsDependenceMapping> | Array<IUiSdlFieldsDependenceMapping> | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Controls whether context variables (`contextVars`) are automatically appended to the `filter` in the API call.
   *
   * By default, `contextVars` are automatically added to the `filter` of the API call. This behavior can be disabled
   * by setting `disableContextVarsFilter` to `true`. When disabled, the developer has full control over how and where
   * the `contextVars` are used.
   *
   * **Note**
   *    When `disableContextVarsFilter` is `true`, `contextVars` can still be explicitly referenced in the `filter` or
   *    other parts of the `dataSpec`. For example:
   *
   *   "dataSpec": {
   *     "disableContextVarsFilter": true,
   *     "contextVars": {
   *       "countryId": {
   *         "type": "UiSdlComponentStateParam",
   *         "componentType": "component",
   *         "id": "SDLDemo.FilterPanelWithContextVars",
   *         "path": "formFieldValues.country.value"
   *       }
   *     },
   *     "dataType": "SDLDemoRegion",
   *     "actionName": "fetch",
   *     "args": {
   *       "spec": {
   *         "include": "id",
   *         "filter": "1 == 1 && country.id == '${countryId}'"
   *       }
   *     }
   *   }
   */
  readonly disableContextVarsFilter?: boolean;
  withDisableContextVarsFilter(disableContextVarsFilter: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The parent data type.
   */
  readonly parentType: string;
  withParentType(parentType: string): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The ID of the parent entity for which to render the process diagram.
   * Can also be a page parameter, e.g. `{{pageParams.assetId}}`.
   */
  readonly entityId: string;
  withEntityId(entityId: string): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The field on the parent type that contains its component children.
   */
  readonly componentsPath?: string;
  withComponentsPath(componentsPath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The field on the component type that will be displayed in the tooltip.
   */
  readonly componentDisplayField?: string;
  withComponentDisplayField(componentDisplayField: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The path from the component type to its risk score value.
   */
  readonly componentRiskScorePath?: string;
  withComponentRiskScorePath(componentRiskScorePath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The field on the component type that contains its risk level. If not provided,
   * {@link UiSdlProcessFlowDiagram#riskScoreThresholdHigh} and {@link UiSdlProcessFlowDiagram#riskScoreThresholdMedium}
   * will be used to calculate the risk level based on the risk score.
   */
  readonly componentRiskLevelPath?: string;
  withComponentRiskLevelPath(componentRiskLevelPath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The path from the component type to its sub-component children.
   * Note that this field and `subComponentRiskScorePath` must be filled to display sub-components.
   */
  readonly componentSubComponentsPath?: string;
  withComponentSubComponentsPath(componentSubComponentsPath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The field on the sub-component type that will be displayed in the tooltip.
   */
  readonly subComponentDisplayName?: string;
  withSubComponentDisplayName(subComponentDisplayName: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The path from the sub-component type to its risk score value.
   * Note that this field and `componentSubComponentsPath` must be filled to display subcomponents.
   */
  readonly subComponentRiskScorePath?: string;
  withSubComponentRiskScorePath(subComponentRiskScorePath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The field on the sub-component type that contains its risk level. If not provided,
   * {@link UiSdlProcessFlowDiagram#riskScoreThresholdHigh} and {@link UiSdlProcessFlowDiagram#riskScoreThresholdMedium}
   * will be used to calculate the risk level based on the risk score.
   */
  readonly subComponentRiskLevelPath?: string;
  withSubComponentRiskLevelPath(subComponentRiskLevelPath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The path from the parent dataType to its {@link ProcessDiagramConfig} configurations.
   */
  readonly diagramConfigPath?: string;
  withDiagramConfigPath(diagramConfigPath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The field on the parent type that is used for the diagram image name.
   * The full image URL will be calculated by concatenating `imageUrlPrefix`, `imageNameField` and `imageUrlExtension`.
   */
  readonly imageNameField?: string;
  withImageNameField(imageNameField: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The path from the component type to its status value.
   */
  readonly componentStatusPath?: string;
  withComponentStatusPath(componentStatusPath: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The prefix for the diagram image URL.
   */
  readonly imageUrlPrefix?: string;
  withImageUrlPrefix(imageUrlPrefix: string | null): UiSdlProcessFlowDiagramDataSpec;

  /**
   * The diagram image extension.
   */
  readonly imageUrlExtension?: string;
  withImageUrlExtension(imageUrlExtension: string | null): UiSdlProcessFlowDiagramDataSpec;

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
  static fromJson(json: any): UiSdlProcessFlowDiagramDataSpec | null;

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
  static fromJsonString(json: string): UiSdlProcessFlowDiagramDataSpec | null;

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
  static fromXmlString(xml: string): UiSdlProcessFlowDiagramDataSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): UiSdlProcessFlowDiagramDataSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlProcessFlowDiagramDataSpec>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<UiSdlProcessFlowDiagramDataSpec>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlProcessFlowDiagramDataSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  withoutFieldAtPath(path: string): UiSdlProcessFlowDiagramDataSpec;

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
  withoutField(field: string): UiSdlProcessFlowDiagramDataSpec;

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
  withoutField(field: FieldType): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): UiSdlProcessFlowDiagramDataSpec;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): UiSdlProcessFlowDiagramDataSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlProcessFlowDiagramDataSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): UiSdlProcessFlowDiagramDataSpec;

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
  defaultField(field: string): UiSdlProcessFlowDiagramDataSpec;

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
  defaultField(field: FieldType): UiSdlProcessFlowDiagramDataSpec;

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
  unsetField(field: string): UiSdlProcessFlowDiagramDataSpec;

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
  unsetField(field: FieldType): UiSdlProcessFlowDiagramDataSpec;

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
  removeField(field: string): UiSdlProcessFlowDiagramDataSpec;

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
  removeField(field: FieldType): UiSdlProcessFlowDiagramDataSpec;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): UiSdlProcessFlowDiagramDataSpec;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): UiSdlProcessFlowDiagramDataSpec;

  mergeJson(json: any): UiSdlProcessFlowDiagramDataSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<UiSdlProcessFlowDiagramDataSpec>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<UiSdlProcessFlowDiagramDataSpec> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlProcessFlowDiagramDataSpec> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<UiSdlProcessFlowDiagramDataSpec>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlProcessFlowDiagramDataSpec> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, UiSdlProcessFlowDiagramDataSpec> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlProcessFlowDiagramDataSpec> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlProcessFlowDiagramDataSpec>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlProcessFlowDiagramDataSpec>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): UiSdlProcessFlowDiagramDataSpec;

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
  static make(fields: any, withDefaults?: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlProcessFlowDiagramDataSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<UiSdlProcessFlowDiagramDataSpec> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): UiSdlProcessFlowDiagramDataSpec;

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
  static applyDataTransforms(dataTransforms?: Array_Type<string>, inputData?: any, context?: UiSdlDataTransform<any, any>): any | null;

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
  static applyTransformArgs(actionArgs?: Map_Type<string, any>, actionArgsTransforms?: Array_Type<string>, componentId?: string, state: UiSdlReduxState, context?: UiSdlDataTransform.Context): Map_Type<string, any> | null;

  /**
   * Extracts the data type name from {@link dataType}, if it exists.
   *
   * @param dataSpec
   *           The data spec from which to extract a data type name.
   * @returns The name of the data type, or undefined if none exists.
   */
  static getDataTypeName(dataSpec?: UiSdlProcessFlowDiagramDataSpec): string | null;

  /**
   * Given a dataSpec object, and a target field key, traverse the object and return the value
   * of the target field, or an empty array.
   *
   * @param baseObject
   *           A base object to be search against. Most likely a dataSpec or component config.
   * @param targetField
   *           A field in the base object that user wants to retrieve.
   * @returns The value of target field, or an empty array if none exists.
   */
  static recursivelyGetField(baseObject?: any, targetField?: string): Array_Type<any> | null;

  /**
   * Converts the data spec to an array of partially applied actions.
   * If the returned array length is greater than 1, a unique `actionId` must be specified in all returned {@link UiSdlPartiallyAppliedActionInfo}
   *
   * @param config
   *          Field config
   * @param component
   *          Component config
   */
  toPartiallyAppliedActions(config?: Map_Type<string, any>, component?: Map_Type<string, any>): Array_Type<UiSdlPartiallyAppliedActionInfo> | null;

  /**
   * Converts the advanced data spec to an array of 1 partially applied action.
   *
   * @param config
   *          Advanced data spec config
   */
  static toPartiallyAppliedAdvancedActions(config?: Map_Type<string, any>): Array_Type<UiSdlPartiallyAppliedActionInfo> | null;

  /**
   * A helper function to generate a filter from the component's context vars, adding on to an existing filter string if provided.
   *
   * @param filter
   *          An existing filter string
   * @param contextVars
   *          The context vars
   */
  static generateFilterFromContextVars(filter?: Filter, contextVars?: Map_Type<string, any>, disableContextVarsFilter?: boolean = 'false'): Filter | null;

  /**
   * A helper function to generate a filter from the component's dataSpec dataPath and contextVars.
   *
   * @param filter
   *          An existing Filter
   * @param componentId
   *          The component id
   * @param state
   *          Redux State
   * @param dataPath
   *          The path to the filter or actionArgs filter
   * @param disableContextVarsFilter
   *          Whether to not generate filter from context vars. By default this is false
   *
   * @returns Filter
   */
  static generateFilterFromDataPathAndContextVars(filter?: Filter, componentId?: string, state: UiSdlReduxState, dataPath?: Array_Type<string>, disableContextVarsFilter?: boolean = 'false', specField?: string = '\'dataSpec\''): Filter | null;
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
