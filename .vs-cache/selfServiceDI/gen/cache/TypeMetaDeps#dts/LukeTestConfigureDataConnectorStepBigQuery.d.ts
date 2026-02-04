// TypeScript definitions for the C3 type LukeTestConfigureDataConnectorStepBigQuery

/**
 * The connector type for BigQuery connectors
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeTestConfigureDataConnectorStepBigQuery
 */
declare interface ILukeTestConfigureDataConnectorStepBigQuery {

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
   * The selfServiceDIPage associated with this connector
   */
  selfServiceDIPage?: ILukeTestSelfServiceDIPage | null;

  /**
   * The message banner component associated with this connector
   */
  messageBanner?: ILukeTestUiSdlMessageContainer | null;

  /**
   * The fetched json object for the connector SelfServiceDI.Ui.DataConnector
   */
  connectorJson?: any | null;

  /**
   * The name to be given in the form for the connector
   */
  connectorName?: string | null;

  /**
   * The description to be given in the form for the connector
   */
  connectorDescription?: string | null;

  /**
   * The connector category translation for the connector
   */
  connectorCategoryTranslationKey?: string | null;

  /**
   * The selector for the connectors catgory in the connector form
   */
  connectorFormConnectorCategorySelector?: string | null;

  /**
   * The selector for the information card title
   */
  informationCardTitleSelector?: string | null;

  /**
   * The selector for the information card subtitle
   */
  informationCardSubtitleSelector?: string | null;

  /**
   * The error inline notification component associated with this connector
   */
  errorInlineNotification?: ILukeTestUiSdlInlineNotification | null;

  /**
   * The overarching form component associated with this connector
   */
  form?: ILukeTestSelfServiceDIConnectorForm | null;

  /**
   * The Defintion List component for the landing page associated with this connector
   */
  landingPageConnectorNameAndDescription?: ILukeTestUiSdlDefinitionList | null;

  /**
   * A list of objects of form input values and the expected error messages
   * to be used when verifying the form
   * [ {
   *  invalidCredentialFields: [ 'listOf', 'fieldNames', 'toBe', 'invalid'],
   *  errorMessageKey: 'Expected.key.of.error.message',
   *  assertionDescription: 'Specific description to be returned if the assertion fails'
   * }, ... ]
   */
  additionalCredentialFormErrors?: C3.Array<any | null> | Array<any | null>;

  /**
   * The selector for the Successful checkmark icon in the connector form
   * when a test connection is successful
   */
  connectorFormSuccessCheckSelector?: string | null;

  /**
   * The selector for the Success message in the connector form
   * when a test connection is successful
   */
  connectorFormSuccessMessageSelector?: string | null;

  /**
   * The selector for the button loading spinner in the connector form
   */
  connectorFormLoadingSpinnerSelector?: string | null;

  /**
   * The selector for the search bar
   */
  searchBarSelector?: string | null;

  /**
   * When testing that leaving the current connector and selecting a new, different connector clears the form
   * this is the connector to select
   */
  backConnectorToSelect?: string | null;

  /**
   * The message to be displayed in the connector form when a test connection is successful
   */
  testConnectionSuccessMessage?: string | null;

  /**
   * The key for a missingRequiredFields error in the connector form
   */
  missingRequiredFieldsErrorKey?: string | null;

  /**
   * The key for when there are incorrect required fields in the connector form
   */
  incorrectRequiredFieldsErrorKey?: string | null;

  /**
   * The key for the succesful banner message after completing the connector form
   */
  bannerSuccessMessageKey?: string | null;
}

/**
 * The connector type for BigQuery connectors
 *
 * @remarks this represents a made instance of LukeTestConfigureDataConnectorStepBigQuery
 */
declare class LukeTestConfigureDataConnectorStepBigQuery extends Obj {

  /**
   * The Luke instance attached to this component.
   */
  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * A parent selector that can be used to distinguish between multiple instances of a component within a page.
   * This can be leveraged to create 1-to-1 mappings between {@link UITestComponent}s so that functions
   * called on a component are limited only to the scope of that component in the UI.
   */
  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The spinner that masks the component when data is loading
   */
  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
   * for within the {@link #parentSelector}.
   */
  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The maximum amount of time that Luke will retry an action
   */
  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selfServiceDIPage associated with this connector
   */
  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The message banner component associated with this connector
   */
  readonly messageBanner?: LukeTestUiSdlMessageContainer | null;
  withMessageBanner(messageBanner: ILukeTestUiSdlMessageContainer | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The fetched json object for the connector SelfServiceDI.Ui.DataConnector
   */
  readonly connectorJson?: any | null;
  withConnectorJson(connectorJson: any | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The name to be given in the form for the connector
   */
  readonly connectorName?: string | null;
  withConnectorName(connectorName: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The description to be given in the form for the connector
   */
  readonly connectorDescription?: string | null;
  withConnectorDescription(connectorDescription: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The connector category translation for the connector
   */
  readonly connectorCategoryTranslationKey?: string | null;
  withConnectorCategoryTranslationKey(connectorCategoryTranslationKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selector for the connectors catgory in the connector form
   */
  readonly connectorFormConnectorCategorySelector?: string | null;
  withConnectorFormConnectorCategorySelector(connectorFormConnectorCategorySelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selector for the information card title
   */
  readonly informationCardTitleSelector?: string | null;
  withInformationCardTitleSelector(informationCardTitleSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selector for the information card subtitle
   */
  readonly informationCardSubtitleSelector?: string | null;
  withInformationCardSubtitleSelector(informationCardSubtitleSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The error inline notification component associated with this connector
   */
  readonly errorInlineNotification?: LukeTestUiSdlInlineNotification | null;
  withErrorInlineNotification(errorInlineNotification: ILukeTestUiSdlInlineNotification | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The overarching form component associated with this connector
   */
  readonly form?: LukeTestSelfServiceDIConnectorForm | null;
  withForm(form: ILukeTestSelfServiceDIConnectorForm | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The Defintion List component for the landing page associated with this connector
   */
  readonly landingPageConnectorNameAndDescription?: LukeTestUiSdlDefinitionList | null;
  withLandingPageConnectorNameAndDescription(landingPageConnectorNameAndDescription: ILukeTestUiSdlDefinitionList | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * A list of objects of form input values and the expected error messages
   * to be used when verifying the form
   * [ {
   *  invalidCredentialFields: [ 'listOf', 'fieldNames', 'toBe', 'invalid'],
   *  errorMessageKey: 'Expected.key.of.error.message',
   *  assertionDescription: 'Specific description to be returned if the assertion fails'
   * }, ... ]
   */
  readonly additionalCredentialFormErrors?: C3.Array<any | null>;
  withAdditionalCredentialFormErrors(additionalCredentialFormErrors: C3.Array<any | null> | Array<any | null>): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selector for the Successful checkmark icon in the connector form
   * when a test connection is successful
   */
  readonly connectorFormSuccessCheckSelector?: string | null;
  withConnectorFormSuccessCheckSelector(connectorFormSuccessCheckSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selector for the Success message in the connector form
   * when a test connection is successful
   */
  readonly connectorFormSuccessMessageSelector?: string | null;
  withConnectorFormSuccessMessageSelector(connectorFormSuccessMessageSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selector for the button loading spinner in the connector form
   */
  readonly connectorFormLoadingSpinnerSelector?: string | null;
  withConnectorFormLoadingSpinnerSelector(connectorFormLoadingSpinnerSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The selector for the search bar
   */
  readonly searchBarSelector?: string | null;
  withSearchBarSelector(searchBarSelector: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * When testing that leaving the current connector and selecting a new, different connector clears the form
   * this is the connector to select
   */
  readonly backConnectorToSelect?: string | null;
  withBackConnectorToSelect(backConnectorToSelect: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The message to be displayed in the connector form when a test connection is successful
   */
  readonly testConnectionSuccessMessage?: string | null;
  withTestConnectionSuccessMessage(testConnectionSuccessMessage: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The key for a missingRequiredFields error in the connector form
   */
  readonly missingRequiredFieldsErrorKey?: string | null;
  withMissingRequiredFieldsErrorKey(missingRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The key for when there are incorrect required fields in the connector form
   */
  readonly incorrectRequiredFieldsErrorKey?: string | null;
  withIncorrectRequiredFieldsErrorKey(incorrectRequiredFieldsErrorKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * The key for the succesful banner message after completing the connector form
   */
  readonly bannerSuccessMessageKey?: string | null;
  withBannerSuccessMessageKey(bannerSuccessMessageKey: string | null): LukeTestConfigureDataConnectorStepBigQuery;

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
  static fromJson(json: any | null): LukeTestConfigureDataConnectorStepBigQuery | null;

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
  static fromJsonString(json: string | null): LukeTestConfigureDataConnectorStepBigQuery | null;

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
  static fromXmlString(xml: string | null): LukeTestConfigureDataConnectorStepBigQuery | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeTestConfigureDataConnectorStepBigQuery | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestConfigureDataConnectorStepBigQuery | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestConfigureDataConnectorStepBigQuery | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeTestConfigureDataConnectorStepBigQuery;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  withoutFieldAtPath(path: string): LukeTestConfigureDataConnectorStepBigQuery;

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
  withoutField(field: string | null): LukeTestConfigureDataConnectorStepBigQuery;

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
  withoutField(field: FieldType | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeTestConfigureDataConnectorStepBigQuery;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeTestConfigureDataConnectorStepBigQuery;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeTestConfigureDataConnectorStepBigQuery;

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
  defaultField(field: string): LukeTestConfigureDataConnectorStepBigQuery;

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
  defaultField(field: FieldType): LukeTestConfigureDataConnectorStepBigQuery;

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
  unsetField(field: string): LukeTestConfigureDataConnectorStepBigQuery;

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
  unsetField(field: FieldType): LukeTestConfigureDataConnectorStepBigQuery;

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
  removeField(field: string): LukeTestConfigureDataConnectorStepBigQuery;

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
  removeField(field: FieldType): LukeTestConfigureDataConnectorStepBigQuery;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeTestConfigureDataConnectorStepBigQuery;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeTestConfigureDataConnectorStepBigQuery;

  mergeJson(json: any | null): LukeTestConfigureDataConnectorStepBigQuery;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeTestConfigureDataConnectorStepBigQuery | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeTestConfigureDataConnectorStepBigQuery | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeTestConfigureDataConnectorStepBigQuery | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeTestConfigureDataConnectorStepBigQuery | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeTestConfigureDataConnectorStepBigQuery | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeTestConfigureDataConnectorStepBigQuery | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeTestConfigureDataConnectorStepBigQuery | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeTestConfigureDataConnectorStepBigQuery | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeTestConfigureDataConnectorStepBigQuery | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  static make(fields: any, withDefaults?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeTestConfigureDataConnectorStepBigQuery;

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
  afterMake(): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeTestConfigureDataConnectorStepBigQuery;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeTestConfigureDataConnectorStepBigQuery>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeTestConfigureDataConnectorStepBigQuery;

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
   * TODO: PLAT-114794
   * Takes in an object of the credential keys and boolean values where
   * true means the field is valid and false means the field is invalid
   * and returns an object of the credential keys and their valid/ invalid values
   *
   * @return an object of the credential keys and their valid/ invalid values
   */
  getCredentials(): CloudCredentials | null;

  /**
   * Verifies
   * data connector group
   * banner Image
   * banner title
   * banner subtitle
   */
  verifyDataConnectorCategory(): void;

  /**
   * Gets the connector tree view id
   */
  getConnectorTreeViewId(): string | null;

  /**
   * Asserts that the form currently has no error, sets the name input to an invalid name, and
   * asserts that the form now has an error
   */
  setInvalidName(): void;

  /**
   * In step 1 of the Add Data Source flow, this function searches for the current connector,
   * selects it, and proceeds to the connector form
   */
  selectCurrentConnector(): void;

  /**
   * Verifies that the form has no banner error or inline errors
   */
  verifyNoConfigureFormErrors(): void;

  /**
   * Verifies that the name input field is empty
   */
  verifyEmptyNameField(): void;

  /**
   * Cancels form and verifies the connector properly resets the form
   */
  verifyCancellationLogic(): void;

  /**
   * goes back on form and verifies
   * the form and all errors are cleared if a different connector is selected
   * the form and all errors are persisted if the same connector is selected
   */
  verifyBackLogic(): void;

  /**
   * Once form is properly filled out, this function clicks test connection and verifies
   * loading spinner
   * no errors
   * the test connection button is disabled
   * success green chackmark
   * loading spinner is gone
   * @param wait
   *           Whether to wait before and after clicking test connection
   */
  verifyTestConnectionButton(wait?: boolean): void;

  /**
   * Once form is properly filled out, this function clicks complete and verifies
   * no errors
   * spinner
   * form closed and landing page rendered
   * the success banner
   * connector was added to treeview
   * the correct logo is displayed in treeview
   * checkmark next to connector
   * the newly added connector is selectable
   * the 3dots gives three options when selected
   */
  verifyCompleteLogic(): void;

  /**
   * Verifies there is a form error,
   * Verifies the hintText
   * Verifies inline error
   *
   * @param formFieldHintText
   *           The expected hint text of the form field
   */
  verifyInputError(formFieldHintText?: string | null): void;

  /**
   * Verifies the name field of the form
   */
  verifyName(): void;

  /**
   * Verifies the description field of the form
   */
  verifyDescription(): void;

  /**
   * Verifies the name and description inputs work as expected
   */
  verifyNameAndDescription(): void;

  /**
   * Creates an instance of the proper connector
   * based on the connector.name
   *
   * connector.name == 'kafka' => LukeTestKAFKA
   *
   * @param connector
   *           The connector to be created
   * @return The connector instance
   */
  static createConnector(connector: Obj): LukeTestSelfServiceDIConnector | null;

  /**
   * Verifies the form for a failed connection
   * @param credentials
   *           The inputted credentials to be given in the form for the connector
   *           clientId
   *           accessToken
   *           refreshToken
   *           projectId
   *           clientSecret
   * @param errorMessageKey
   *           The error message key to be given in the form for the connector
   * @param assertionDescription
   *           The description to be given if the assertion fails
   */
  verifyFormError(credentials?: CloudCredentials | null, errorMessageKey?: string | null, assertionDescription?: string | null): void;

  /**
   * Verifies the form for a successful connection
   * @param credentials
   *           clientId
   *           accessToken
   *           refreshToken
   *           projectId
   *           clientSecret
   */
  verifyFormSuccess(): void;

  /**
   * Function that verifies the connector form
   */
  verifyForm(): void;

  /**
   * Generates an invalid name, override if forms need to have specific invalid names
   * @param key
   *           The key of the specific field within the credentials
   * @return The invalid name
   */
  generateInvalidInput(key?: string | null): string | null;

  /**
   * TODO: PLAT-114794 should internally call the function to get valid credentials and override the field's provided in invalidFormFieldsList
   * Generates invalid credentials based on the invalidFormFieldsList
   * @param invalidFormFieldsList
   *           The list of invalid form fields to generate invalid credentials for
   * @return The generated invalid credentials
   */
  generateIncorrectCredentials(invalidFormFieldsList?: any | null): CloudCredentials | null;

  /**
   * Verifies the form errors defined in additionalCredentialFormErrors
   * which should be overridden in the child connector specific classes
   */
  verifyFormErrors(): void;

  /**
   * Function that verifies the landing page after successful connection
   */
  verifyLandingPage(): void;

  /**
   * Function that completes the step without all the verifications
   * assumes that the test starts from the landing page
   * completes at the landing page
   */
  completeStep(): void;
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
