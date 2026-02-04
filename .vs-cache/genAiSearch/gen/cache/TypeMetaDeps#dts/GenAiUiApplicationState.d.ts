// TypeScript definitions for the C3 type GenAiUiApplicationState

/**
 * {@link UiSdlApplicationState Application} of the Search Advantage application.
 *
 * @remarks this represents a value passed to a method that expects an instance of GenAiUiApplicationState
 */
declare interface IGenAiUiApplicationState {

  /**
   * Various system fields.
   */
  meta?: IMeta;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  dataSpec?: IUiSdlNoData;

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
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  REDUX_NAMESPACE?: string;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  effectTriggers?: Array_Type<UiSdlEffectTrigger> | Array<IUiSdlEffectTrigger>;

  /**
   * Indicates if the application is loading and the UI should show an overlay with a spinner.
   */
  isAppLoading?: boolean;

  /**
   * Project settings (ie: default and tutorial project)
   */
  projectSettings?: IGenai.Project.Settings;

  /**
   * UI Settings dependent on the backend configuration
   */
  uiSettings?: IGenAiUiConfig;

  /**
   * User Settings for the application (ie: active project for the user)
   */
  userSettings?: IGenai.App.UserSettings;

  /**
   * The result of sending the query string to the Generative AI model. Fills out answer, rationale,
   * and sources in the UI
   */
  generativeAiResult?: IGenai.Query.Result;

  /**
   * A representation of historical modififications to query results. This is specific to the scenario where a user
   * uses a UI feature, such as the Eval Spec Popover, to make a modification to a query result and apply changes.
   * A query result will only appear in this map if it was the result of such a modification.
   */
  queryResultHistoryCache?: Map_Type<string, any> | {[key: string]: any};

  /**
   * The most recent query string the User has input
   */
  queryString?: string;

  /**
   * An entity id selected from a component in the UI
   */
  selectedEntityId?: string;

  /**
   * A passage relation id selected from the search results grid
   */
  selectedPassageId?: string;

  /**
   * A source file selected from the Documents grid
   */
  selectedDocument?: IGenai.SourceFile;

  /**
   * Filterable metadata fields for the app instance
   */
  sourceMetadataFields?: Array_Type<DeclaredFieldType> | Array<IDeclaredFieldType>;

  /**
   * All metadata values associated with the fields in #sourceMetadataFields
   */
  sourceMetadataValues?: Map_Type<string, Set_Type<string>> | {[key: string]: Set_Type<string> | Array<string>};

  /**
   * Filters applied through the UI
   */
  uiFilters?: Array_Type<GenAiUiFilter> | Array<IGenAiUiFilter>;

  /**
   * Whether the chat input should be disabled
   */
  disableChat?: boolean;

  /**
   * Whether the full chat input should be disabled
   */
  disableChatInput?: boolean;

  /**
   * Whether the chat input should be disabled
   */
  disableSearch?: boolean;

  /**
   * Whether the query tool selector should be disabled
   */
  disableToolSelector?: boolean;

  /**
   * Whether to hide the 'Apply' button in the filters bar
   */
  hideFilterApply?: boolean;

  /**
   * Set of feature configuration values that are read-only to the user.
   */
  readOnlyConfig?: IGenai.App.ReadOnlyConfig;

  /**
   * The saved options for document syncing.
   */
  syncScheduleOptions?: IGenAiUiSyncScheduleOptions;

  /**
   * Whether or not the current application is in a free trial state.
   * This is a value of type Genai.Billing.SubscriptionPlan. It is set to any because Genai.Billing.SubscriptionPlan is not in this package.
   * ONLY USED IN SELF SERVICE APPLICATIONS
   */
  subscriptionPlan?: any;

  /**
   * Files fetched from the selected collection while uploading documents
   */
  storedCollectionFiles?: Array_Type<File> | Array<IFile>;

  /**
   * A category tag type selected from the TagsGrid
   */
  selectedTagType?: IGenai.SourceFile.Metadata.Category;

  /**
   * Whether the query tool options are currently loading. This allows us to delay some UI elements until loaded.
   */
  queryToolOptionsLoading?: boolean;

  /**
   * The query tool options available to the user. This allows the user to target a specific tool when submitting a
   * query.
   */
  queryToolOptions?: Array_Type<Genai.Agent.Tool.Config.UiOptions> | Array<IGenai.Agent.Tool.Config.UiOptions>;

  /**
   * The query tool options that are currently selected by the user for chat queries when allowMultipleToolSelection is set to true
   */
  chatQueryMultiToolSelections?: Array_Type<Genai.Agent.Tool.Config.UiOptions> | Array<IGenai.Agent.Tool.Config.UiOptions>;

  /**
   * The query tool option that is currently selected by the user for chat queries. Search queries are handled
   * separately via page params.
   */
  selectedChatQueryTool?: IGenai.Agent.Tool.Config.UiOptions;

  /**
   * A map of {@link Type#name} to the associated {@link TypeMeta} for quick lookup in the UI.
   */
  typeMetasCache?: Map_Type<string, TypeMeta> | {[key: string]: ITypeMeta};

  /**
   * The current conversation to display. Used in the Conversation Detail Page.
   */
  conversation?: IGenai.Conversation;

  /**
   * Whether to show unhelpful spec notification to user
   */
  showUnhelpfulSpecNotif?: boolean;

  /**
   * The planner options available to the user.
   * This allows the user to target a specific planner when submitting a query.
   */
  plannerOptions?: Array_Type<Genai.Agent.Persistable<any, any>> | Array<IGenai.Agent.Persistable<any, any>>;

  /**
   * The name of the config of the planner selected by the user.
   */
  selectedPlanner?: string;

  /**
   * Whether the planner options are currently loading. This allows us to delay some UI elements until loaded.
   */
  plannerOptionsLoading?: boolean;
}

/**
 * {@link UiSdlApplicationState Application} of the Search Advantage application.
 *
 * @remarks this represents a made instance of GenAiUiApplicationState
 */
declare class GenAiUiApplicationState extends Obj  {

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): GenAiUiApplicationState;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string;
  withId(id: string | null): GenAiUiApplicationState;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string;
  withName(name: string | null): GenAiUiApplicationState;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData;
  withDataSpec(dataSpec: IUiSdlNoData | null): GenAiUiApplicationState;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): GenAiUiApplicationState;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): GenAiUiApplicationState;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): GenAiUiApplicationState;

  /**
   * The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
   */
  readonly REDUX_NAMESPACE?: string;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): GenAiUiApplicationState;

  /**
   * Collection of extra async {@link UiSdlEffectTrigger}.
   */
  readonly effectTriggers?: Array_Type<UiSdlEffectTrigger>;
  withEffectTriggers(effectTriggers: Array_Type<UiSdlEffectTrigger> | Array<IUiSdlEffectTrigger> | null): GenAiUiApplicationState;

  /**
   * Indicates if the application is loading and the UI should show an overlay with a spinner.
   */
  readonly isAppLoading?: boolean;
  withIsAppLoading(isAppLoading: boolean): GenAiUiApplicationState;

  /**
   * Project settings (ie: default and tutorial project)
   */
  readonly projectSettings?: Genai.Project.Settings;
  withProjectSettings(projectSettings: IGenai.Project.Settings | null): GenAiUiApplicationState;

  /**
   * UI Settings dependent on the backend configuration
   */
  readonly uiSettings?: GenAiUiConfig;
  withUiSettings(uiSettings: IGenAiUiConfig | null): GenAiUiApplicationState;

  /**
   * User Settings for the application (ie: active project for the user)
   */
  readonly userSettings?: Genai.App.UserSettings;
  withUserSettings(userSettings: IGenai.App.UserSettings | null): GenAiUiApplicationState;

  /**
   * The result of sending the query string to the Generative AI model. Fills out answer, rationale,
   * and sources in the UI
   */
  readonly generativeAiResult?: Genai.Query.Result;
  withGenerativeAiResult(generativeAiResult: IGenai.Query.Result | null): GenAiUiApplicationState;

  /**
   * A representation of historical modififications to query results. This is specific to the scenario where a user
   * uses a UI feature, such as the Eval Spec Popover, to make a modification to a query result and apply changes.
   * A query result will only appear in this map if it was the result of such a modification.
   */
  readonly queryResultHistoryCache?: Map_Type<string, any>;
  withQueryResultHistoryCache(queryResultHistoryCache: Map_Type<string, any> | {[key: string]: any} | null): GenAiUiApplicationState;

  /**
   * The most recent query string the User has input
   */
  readonly queryString?: string;
  withQueryString(queryString: string | null): GenAiUiApplicationState;

  /**
   * An entity id selected from a component in the UI
   */
  readonly selectedEntityId?: string;
  withSelectedEntityId(selectedEntityId: string | null): GenAiUiApplicationState;

  /**
   * A passage relation id selected from the search results grid
   */
  readonly selectedPassageId?: string;
  withSelectedPassageId(selectedPassageId: string | null): GenAiUiApplicationState;

  /**
   * A source file selected from the Documents grid
   */
  readonly selectedDocument?: Genai.SourceFile;
  withSelectedDocument(selectedDocument: IGenai.SourceFile | null): GenAiUiApplicationState;

  /**
   * Filterable metadata fields for the app instance
   */
  readonly sourceMetadataFields?: Array_Type<DeclaredFieldType>;
  withSourceMetadataFields(sourceMetadataFields: Array_Type<DeclaredFieldType> | Array<IDeclaredFieldType> | null): GenAiUiApplicationState;

  /**
   * All metadata values associated with the fields in #sourceMetadataFields
   */
  readonly sourceMetadataValues?: Map_Type<string, Set_Type<string>>;
  withSourceMetadataValues(sourceMetadataValues: Map_Type<string, Set_Type<string>> | {[key: string]: Set_Type<string> | Array<string>} | null): GenAiUiApplicationState;

  /**
   * Filters applied through the UI
   */
  readonly uiFilters?: Array_Type<GenAiUiFilter>;
  withUiFilters(uiFilters: Array_Type<GenAiUiFilter> | Array<IGenAiUiFilter> | null): GenAiUiApplicationState;

  /**
   * Whether the chat input should be disabled
   */
  readonly disableChat?: boolean;
  withDisableChat(disableChat: boolean): GenAiUiApplicationState;

  /**
   * Whether the full chat input should be disabled
   */
  readonly disableChatInput?: boolean;
  withDisableChatInput(disableChatInput: boolean): GenAiUiApplicationState;

  /**
   * Whether the chat input should be disabled
   */
  readonly disableSearch?: boolean;
  withDisableSearch(disableSearch: boolean): GenAiUiApplicationState;

  /**
   * Whether the query tool selector should be disabled
   */
  readonly disableToolSelector?: boolean;
  withDisableToolSelector(disableToolSelector: boolean): GenAiUiApplicationState;

  /**
   * Whether to hide the 'Apply' button in the filters bar
   */
  readonly hideFilterApply?: boolean;
  withHideFilterApply(hideFilterApply: boolean): GenAiUiApplicationState;

  /**
   * Set of feature configuration values that are read-only to the user.
   */
  readonly readOnlyConfig?: Genai.App.ReadOnlyConfig;
  withReadOnlyConfig(readOnlyConfig: IGenai.App.ReadOnlyConfig | null): GenAiUiApplicationState;

  /**
   * The saved options for document syncing.
   */
  readonly syncScheduleOptions?: GenAiUiSyncScheduleOptions;
  withSyncScheduleOptions(syncScheduleOptions: IGenAiUiSyncScheduleOptions | null): GenAiUiApplicationState;

  /**
   * Whether or not the current application is in a free trial state.
   * This is a value of type Genai.Billing.SubscriptionPlan. It is set to any because Genai.Billing.SubscriptionPlan is not in this package.
   * ONLY USED IN SELF SERVICE APPLICATIONS
   */
  readonly subscriptionPlan?: any;
  withSubscriptionPlan(subscriptionPlan: any | null): GenAiUiApplicationState;

  /**
   * Files fetched from the selected collection while uploading documents
   */
  readonly storedCollectionFiles?: Array_Type<File>;
  withStoredCollectionFiles(storedCollectionFiles: Array_Type<File> | Array<IFile> | null): GenAiUiApplicationState;

  /**
   * A category tag type selected from the TagsGrid
   */
  readonly selectedTagType?: Genai.SourceFile.Metadata.Category;
  withSelectedTagType(selectedTagType: IGenai.SourceFile.Metadata.Category | null): GenAiUiApplicationState;

  /**
   * Whether the query tool options are currently loading. This allows us to delay some UI elements until loaded.
   */
  readonly queryToolOptionsLoading?: boolean;
  withQueryToolOptionsLoading(queryToolOptionsLoading: boolean): GenAiUiApplicationState;

  /**
   * The query tool options available to the user. This allows the user to target a specific tool when submitting a
   * query.
   */
  readonly queryToolOptions?: Array_Type<Genai.Agent.Tool.Config.UiOptions>;
  withQueryToolOptions(queryToolOptions: Array_Type<Genai.Agent.Tool.Config.UiOptions> | Array<IGenai.Agent.Tool.Config.UiOptions> | null): GenAiUiApplicationState;

  /**
   * The query tool options that are currently selected by the user for chat queries when allowMultipleToolSelection is set to true
   */
  readonly chatQueryMultiToolSelections?: Array_Type<Genai.Agent.Tool.Config.UiOptions>;
  withChatQueryMultiToolSelections(chatQueryMultiToolSelections: Array_Type<Genai.Agent.Tool.Config.UiOptions> | Array<IGenai.Agent.Tool.Config.UiOptions> | null): GenAiUiApplicationState;

  /**
   * The query tool option that is currently selected by the user for chat queries. Search queries are handled
   * separately via page params.
   */
  readonly selectedChatQueryTool?: Genai.Agent.Tool.Config.UiOptions;
  withSelectedChatQueryTool(selectedChatQueryTool: IGenai.Agent.Tool.Config.UiOptions | null): GenAiUiApplicationState;

  /**
   * A map of {@link Type#name} to the associated {@link TypeMeta} for quick lookup in the UI.
   */
  readonly typeMetasCache?: Map_Type<string, TypeMeta>;
  withTypeMetasCache(typeMetasCache: Map_Type<string, TypeMeta> | {[key: string]: ITypeMeta} | null): GenAiUiApplicationState;

  /**
   * The current conversation to display. Used in the Conversation Detail Page.
   */
  readonly conversation?: Genai.Conversation;
  withConversation(conversation: IGenai.Conversation | null): GenAiUiApplicationState;

  /**
   * Whether to show unhelpful spec notification to user
   */
  readonly showUnhelpfulSpecNotif?: boolean;
  withShowUnhelpfulSpecNotif(showUnhelpfulSpecNotif: boolean): GenAiUiApplicationState;

  /**
   * The planner options available to the user.
   * This allows the user to target a specific planner when submitting a query.
   */
  readonly plannerOptions?: Array_Type<Genai.Agent.Persistable<any, any>>;
  withPlannerOptions(plannerOptions: Array_Type<Genai.Agent.Persistable<any, any>> | Array<IGenai.Agent.Persistable<any, any>> | null): GenAiUiApplicationState;

  /**
   * The name of the config of the planner selected by the user.
   */
  readonly selectedPlanner?: string;
  withSelectedPlanner(selectedPlanner: string | null): GenAiUiApplicationState;

  /**
   * Whether the planner options are currently loading. This allows us to delay some UI elements until loaded.
   */
  readonly plannerOptionsLoading?: boolean;
  withPlannerOptionsLoading(plannerOptionsLoading: boolean): GenAiUiApplicationState;

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
  static fromJson(json: any): GenAiUiApplicationState | null;

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
  static fromJsonString(json: string): GenAiUiApplicationState | null;

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
  static fromXmlString(xml: string): GenAiUiApplicationState | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): GenAiUiApplicationState | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): GenAiUiApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenAiUiApplicationState;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenAiUiApplicationState;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<GenAiUiApplicationState>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<GenAiUiApplicationState>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): GenAiUiApplicationState;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenAiUiApplicationState;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenAiUiApplicationState;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): GenAiUiApplicationState;

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
  withField(field: string, value: any, doNotConvert?: boolean): GenAiUiApplicationState;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): GenAiUiApplicationState;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): GenAiUiApplicationState;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): GenAiUiApplicationState;

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
  withoutFieldAtPath(path: string): GenAiUiApplicationState;

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
  withoutField(field: string): GenAiUiApplicationState;

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
  withoutField(field: FieldType): GenAiUiApplicationState;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): GenAiUiApplicationState;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): GenAiUiApplicationState;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): GenAiUiApplicationState;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): GenAiUiApplicationState;

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
  defaultField(field: string): GenAiUiApplicationState;

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
  defaultField(field: FieldType): GenAiUiApplicationState;

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
  unsetField(field: string): GenAiUiApplicationState;

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
  unsetField(field: FieldType): GenAiUiApplicationState;

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
  removeField(field: string): GenAiUiApplicationState;

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
  removeField(field: FieldType): GenAiUiApplicationState;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): GenAiUiApplicationState;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): GenAiUiApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): GenAiUiApplicationState;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): GenAiUiApplicationState;

  mergeJson(json: any): GenAiUiApplicationState;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): GenAiUiApplicationState;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): GenAiUiApplicationState;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<GenAiUiApplicationState>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<GenAiUiApplicationState> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<GenAiUiApplicationState> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<GenAiUiApplicationState>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<GenAiUiApplicationState> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, GenAiUiApplicationState> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, GenAiUiApplicationState> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<GenAiUiApplicationState>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<GenAiUiApplicationState>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): GenAiUiApplicationState;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): GenAiUiApplicationState;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): GenAiUiApplicationState;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): GenAiUiApplicationState;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): GenAiUiApplicationState;

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
  static make(fields: any, withDefaults?: boolean): GenAiUiApplicationState;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): GenAiUiApplicationState | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): GenAiUiApplicationState;

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
  afterMake(): GenAiUiApplicationState;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): GenAiUiApplicationState;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<GenAiUiApplicationState> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): GenAiUiApplicationState;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<GenAiUiApplicationState>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<GenAiUiApplicationState>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<GenAiUiApplicationState> | null;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<GenAiUiApplicationState>> | null;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec): number;

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
  static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

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
  static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec): boolean;

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
  singletonMap(): Map_Type<string, WithKey>;

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<GenAiUiApplicationState>;

  save(subPath?: string, contentType?: string): GenAiUiApplicationState;

  remove(spec?: UpsertSpec): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string): number;

  update(srcObj?: GenAiUiApplicationState, spec?: UpsertSpec): GenAiUiApplicationState | null;

  upsert(srcObj?: GenAiUiApplicationState, spec?: UpsertSpec): GenAiUiApplicationState | null;

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
  static fromString(s: string): GenAiUiApplicationState | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): GenAiUiApplicationState | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: GenAiUiApplicationState, state: UiSdlReduxState): GenAiUiApplicationState | null;

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
   * Gets the namespace for this state
   * @return the namespace
   */
  static getStateNamespace(): string | null;

  /**
   * Gets the namespace for the initial state
   * @return the namespace
   */
  static getInitialStateNamespace(): string | null;

  /**
   * Gets the entire path to the state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the state
   */
  static getConfigStatePath(id?: string): Array_Type<string> | null;

  /**
   * Gets the enire path to the initial state
   * @param id
   *           The id of the stateful entity
   * @return an array of the entire path to the initial state
   */
  static getInitialConfigStatePath(id?: string): Array_Type<string> | null;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getConfigFromState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setConfigInState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @returns The config value as UiSdlImmutableJS
   */
  static getInitialConfigFromState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlImmutableJS<any> | null;

  /**
   * Helper method to retrieve initial config values from the state.
   *
   * @param id The stateful entity holding the config
   * @param state The Redux state
   * @param dataPath The path to the config
   * @param value The value to set
   * @returns The new state as UiSdlImmutableJS
   */
  static setInitialConfigInState(id?: string, state?: UiSdlReduxState, dataPath?: Array_Type<string>, value?: any): UiSdlImmutableJS<any> | null;

  /**
   * Determines whether or not the `UiSdlState` can update state outside of its own state
   * @return true if the `UiSdlState` should not be able to set state outside of its own state
   */
  static isLimitEffectOnState(): boolean;

  /**
   * Retrieves config value from application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static getConfigFromApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlReduxState;

  /**
   * Sets config value in application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @param value
   *           The config value to set.
   * @returns Redux state.
   */
  static setConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>, value: any): UiSdlReduxState;

  /**
   * Remove config value in the state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @returns Redux state.
   */
  static removeConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: Array_Type<string>): UiSdlReduxState;

  /**
   * Triggers when the `UiSdlApplicationState` is initialized.
   *
   * @param stateId
   *            Id of the state.
   * @return a 'APPLICATION_STATE_INITIALIZE' action.
   */
  static initializeApplicationStateAction(stateId: string): UiSdlApplicationStateInitializeAction;

  /**
   * Action to delete data in a certain slice of the application state
   *
   * @param stateId
   *            Id of the state.
   * @param ids
   *            Ids of the objects to be deleted
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_DELETE' action.
   */
  static applicationStateDeleteDataAction(stateId: string, ids?: Array_Type<string>, dataPath?: string): UiSdlApplicationStateDataDeleteAction;

  /**
   * Action to add data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_DATA_ADD' action.
   */
  static applicationStateAddDataAction(stateId: string, id?: string, dataPath?: string): UiSdlApplicationStateDataAddAction;

  /**
   * Action to modify data to a certain slice in the application state
   *
   * @param stateId
   *            Id of the state.
   * @param id
   *            Id of the newly added object
   * @param dataPath
   *            slice of the application state to put the new object in
   * @return a 'APPLICATION_STATE_MODIFY_ADD' action.
   */
  static applicationStateModifyDataAction(stateId: string, id?: string, dataPath?: string, field?: string, newValue?: any): UiSdlApplicationStateDataModifyAction;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_DELETE' and delete objects in the application state.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataDeleteEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataDeleteAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_ADD' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataAddEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataAddAction): UiSdlReduxState;

  /**
   * Listens to actions of 'APPLICATION_STATE_DATA_MODIFY' and add new data to the specified data path in the payload.
   *
   * @param state
   *            Redux state.
   * @param action
   *            Redux action.
   * @return the new Redux state.
   */
  static applicationStateDataModifyEffect(state: UiSdlReduxState, action: UiSdlApplicationStateDataModifyAction): UiSdlReduxState;

  /**
   * Generates a function that is able to return the application metadata from the redux state.
   * @param applicationId
   *            The application ID to generate a selector for
   * @return a function that can return the metadata for the applicationID when given the redux state
   */
  static generateSelector(applicationId?: string): λFunction<UiSdlReduxState | null, UiSdlImmutableJS<UiSdlApplicationState> | null> | null;

  /**
   * Gets the ReadOnlyConfig stored in application state
   */
  static getReadOnlyConfig(state: UiSdlReduxState): Genai.App.ReadOnlyConfig | null;

  /**
   * Listens for actions of type `GENERATIVE_AI_RESULT_SET` to update #queryResultHistoryCache in
   * application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static addQueryResultHistoryCacheEntryReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered as the User submits the query from the {@link GenAiUiFuzzySearch} components in the application.
   * @param id
   *           The id of the application state.
   * @param generativeAiResultForUi
   *           The result from calling {@link Genai.Query.Result#getForUi}.
   * @return a Redux action
   */
  static setQueryResultAction(id: string, generativeAiResultForUi: Genai.Query.Result.GetForUiResult): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `GENERATIVE_AI_RESULT_SET`, and sets a provided payload {@link Genai.Query.Result} into the application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static generativeAiResultSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the user submits feedback.
   * @param id
   *           The id of the application state.
   * @param genAiResultId
   *           The result they are rating.
   * @param helpful
   *           Thumbs up/thumbs down
   * @param selections
   *           The selections the user made.
   * @return a Redux action
   */
  static applyLeaveFeedbackAction(id: string, genAiResultId: string, helpful: boolean, selections?: Array_Type<any>, comment?: string, trajectoryStepId?: string): UiSdlReduxAction<any>;

  /**
   * Triggered as the User interacts with the {@link GenAiUiFuzzySearch} components in the application.
   * @param id
   *           The id of the application state.
   * @param queryString
   *           The queryString the User has input into the search.
   * @return a Redux action
   */
  static setQueryStringAction(id: string, queryString: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `QUERY_STRING_SET`, and sets a provided payload queryString into the application state.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static queryStringSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `ENTITY_ID_SET` and sets a provided payload entity Id into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static entityIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `PASSAGE_ID_SET` and sets the provided payload passage Id into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static passageIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `BLUEPRINT_STEP_ID` and sets the provided payload blueprint step Id into the
   * application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static blueprintStepIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the user clicks a row in the `GenAiUi.DocumentsGrid`.
   * @param id
   *           The id of the application state.
   * @param document
   *           The source file document
   * @return a Redux action
   */
  static setDocumentDetailSelectionAction(id: string, document: Genai.SourceFile): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `DOCUMENT_DETAIL_SELECTION_SET` and sets the provided payload for the selected
   * Document into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static documentDetailSelectionSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Trigger this action to signify that a data spec is currently polling. This can be used to conditionally avoid
   * re-starting a new polling process if the data spec is already polling.
   */
  static setIsPollingAction(id: string, dataSpecId: string, isPolling: boolean, startPolling?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_IS_POLLING` and sets the polling state the application state.
   */
  static setIsPollingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the `GenAiUi.SearchResultPage` component is initially rendered.
   * Stores the fields of {@link Genai.SourceFile.Metadata} into application state to use for the filter UX.
   * @param id
   *           The id of the application state.
   * @param fields
   *           The filterable metadata fields.
   * @return a Redux action
   */
  static setSourceMetadataFieldsAction(id: string, fields: Array_Type<DeclaredFieldType>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SOURCE_METADATA_FIELDS_SET` and sets the filterable metadata fields in application state.
   */
  static setSourceMetadataFieldsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the `GenAiUi.SearchResultPage` component is initially rendered.
   * Stores the values of {@link Genai.SourceFile.Metadata} into application state to use for fuzzy search in the filter UX.
   * @param id
   *           The id of the application state.
   * @param values
   *           The values of the filterable metadata fields.
   * @return a Redux action
   */
  static setSourceMetadataValuesAction(id: string, values: Map_Type<string, Set_Type<string>>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SOURCE_METADATA_VALUES_SET` and sets the metadata values in application state.
   */
  static setSourceMetadataValuesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered to load the settings of the application state. For example, it is used
   * to reload the settings after the active project is changed from the UI.
   */
  static loadSettingsAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered when the app is initially rendered.
   * Stores the User Settings into application state.
   * @param id
   *           The id of the application state.
   * @param projectSettings
   *           The project settings to set in the application state.
   * @return a Redux action
   */
  static setProjectSettingsAction(id: string, projectSettings: Genai.Project.Settings): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `PROJECT_SETTINGS_SET` and sets the project settings the application state.
   */
  static setProjectSettingsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the `GenAiUi.SearchResultPage` component is initially rendered.
   * Stores the UI Settings dependent on the Genai.ChatBot configuration into application state.
   * @param id
   *           The id of the application state.
   * @param uiSettings
   *           The UI Settings to set in the application state.
   * @return a Redux action
   */
  static setUiSettingsAction(id: string, uiSettings?: GenAiUiConfig): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `UI_SETTINGS_SET` and sets the UI Settings the application state.
   */
  static setUiSettingsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Stores the translation config for multi-lingual configuration into application state.
   * @param id
   *           The id of the application state.
   * @param translatorConfig
   *           Whether translation config is enabled to set in the application state.
   * @return a Redux action
   */
  static setTranslatorConfigAction(id: string, translatorConfig?: Genai.Translator.Config): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `TRANSLATOR_CONFIG_SET` and sets the translation config the application state.
   */
  static setTranslatorConfigReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the app is initially rendered.
   * Stores the User Settings into application state.
   * @param id
   *           The id of the application state.
   * @param userSettings
   *           The user settings to set in the application state.
   * @return a Redux action
   */
  static setUserSettingsAction(id: string, userSettings: Genai.App.UserSettings): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `USER_SETTINGS_SET` and sets the user settings the application state.
   */
  static setUserSettingsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `DISABLE_CHAT_SET` and sets whether the chat is disabled in
   * the application state.
   */
  static setDisableChatAction(id: string, shouldDisable?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `DISABLE_CHAT_SET` and sets whether the chat reducer is disabled
   * in the application state.
   */
  static setDisableChatReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Stores the `shouldDisable` field into the application state to determine whether to disable the search input.
   * @param id
   *           The id of the application state.
   * @param shouldDisable
   *           Whether to disable the search input.
   * @return a Redux action
   */
  static setDisableSearchAction(id: string, shouldDisable?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `DISABLE_SEARCH_SET` and sets shouldDisable into the application state.
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setDisableSearchReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered to disable the tool selector, (e.g. the user selects Math Agent by clicking on the calculator icon in a grid)
   * Stores the `shouldDisable` field into the application state to determine whether to disable the tool selector.
   * @param id
   *           The id of the application state.
   * @param shouldDisable
   *           Whether to disable the tool selector.
   * @return a Redux action
   */
  static setDisableToolSelectorAction(id: string, shouldDisable?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `DISABLE_TOOL_SELECTOR` and sets disableToolSelector into the application state.
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setDisableToolSelectorReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the training admin selects option yes in the eval spec popover.
   * Stores the `shouldDisable` field into the application state to determine whether to disable the chat input.
   * @param id
   *           The id of the application state.
   * @param shouldDisable
   *           Whether to disable the chat input.
   * @return a Redux action
   */
  static setDisableChatInputAction(id: string, shouldDisable?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `DISABLE_CHAT_INPUT_SET` and sets shouldDisable into the application state.
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setDisableChatInputReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the user selects relational database query in the negative feedback popover.
   * Stores the `shouldHighlight` field in the state to determine whether to highlight the eval spec popover button.
   * Stores the `queryOrigin` field in the state to record the query type.
   * @param id
   *           The id of the application state.
   * @param shouldHighlight
   *           Whether to highlight the eval spec popover button.
   * @param queryOrigin
   *           The query type from where the action was triggered.
   * @return a Redux action
   */
  static setEvalSpecPopoverHighlightAction(id: string, shouldHighlight: boolean, queryOrigin: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `HIGHLIGHT_EVAL_SPEC_POPOVER_SET` and sets shouldHighlight and queryOrigin
   * into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setEvalSpecPopoverHighlightReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action creator for actions of type `HIDE_FILTER_APPLY_SET`
   */
  static setHideFilterApplyAction(id: string, shouldDisable?: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `HIDE_FILTER_APPLY_SET`
   */
  static setHideFilterApplyReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Reducer for actions of type `UI_FILTERS_SET`
   */
  static setUiFiltersReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Helper function to get the UI filters from the application state.
   */
  static getUiFilters(state: UiSdlReduxState): Array_Type<GenAiUiFilter> | null;

  /**
   * Triggered when a app blocking operation is triggered or has finished processing.
   * Stores the "isAppLoading" field in the state to determine whether to render the spinner.
   * @param id
   *           The id of the application state.
   * @param isAppLoading
   *           Whether the UI should show the app-level spinner or not.
   * @return a Redux action
   */
  static setIsAppLoadingAction(id: string, isAppLoading?: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `IS_APP_LOADING_SET`
   */
  static setIsAppLoadingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the Application state is initially rendered.
   * Stores the current subscription plan, regardless if free or paid, in the application state.
   * @param id
   *           The id the application state.
   * @param subscriptionPlan
   *           The current subscription plan.
   * @return a Redux action
   */
  static setSubscriptionPlanAction(id: string, subscriptionPlan?: any): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `SUBSCRIPTION_PLAN_SET`
   */
  static setSubscriptionPlanReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action creator for actions of type `REFRESH_QUERY_TOOL_OPTIONS`
   */
  static refreshQueryToolOptionsAction(): UiSdlReduxAction<any>;

  /**
   * Triggered on initial page load to set the query tool options loading state while the #queryToolOptions are
   * being loaded.
   */
  static setQueryToolOptionsLoadingAction(queryToolOptions?: Array_Type<Genai.Agent.Tool.Config.UiOptions>): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `QUERY_TOOL_OPTIONS_LOADING_SET`
   */
  static setQueryToolOptionsLoadingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered on initial page load to set the available query tool options. If multiple options exist, they will be
   * presented to the user next to the search input, allowing the user to select a specific tool when running queries.
   */
  static setQueryToolOptionsAction(queryToolOptions?: Array_Type<Genai.Agent.Tool.Config.UiOptions>): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `QUERY_TOOL_OPTIONS_SET`
   */
  static setQueryToolOptionsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered a) on page load if {@link GenAiUiConfig#queryToolSelectorVisibility} is set to "full" or "hideAllOption",
   * and b) when the user sets the query tool from action button dropdown next to the search input.
   */
  static setSearchQueryToolSelectionAction(searchQueryToolSelection?: Genai.Agent.Tool.Config.UiOptions, payloadPath?: Array_Type<string>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SEARCH_QUERY_TOOL_SELECTION_SET` and sets the selected query tool in the application state.
   */
  static searchQueryToolSelectionSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when allowMultipleToolSelection is set to true and
   * when the user selects query tools from the action button dropdown next to the search input.
   */
  static setSearchQueryMultiToolSelectionAction(searchQueryMultiToolSelection?: Array_Type<Genai.Agent.Tool.Config.UiOptions>, payloadPath?: Array_Type<string>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SEARCH_QUERY_MULTI_TOOL_SELECTION_SET` and sets the selected query tools in the application state.
   */
  static searchQueryMultiToolSelectionSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when allowMultipleToolSelection is set to true and
   * when the user selects query tools from the action button dropdown next to the search input for chat queries
   */
  static setChatQueryMultiToolSelectionsAction(chatQueryMultiToolSelections?: Array_Type<Genai.Agent.Tool.Config.UiOptions>, payloadPath?: Array_Type<string>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CHAT_QUERY_MULTI_TOOL_SELECTIONS_SET` and sets the selected query tools for chat queries in the application state.
   */
  static chatQueryMultiToolSelectionsSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * If {@link GenAiUiConfig#queryToolSelectorVisibility} is set to "full" or "hideAllOption", this is triggered upon
   * search to set the selected _chat_ query tool in application state. Note that this query tool selection is specific
   * to chat queries and is maintained separately from the one that lives in page params. That one controls the
   * selected query tool for searches. This is also triggered when the user changes the chat query tool from the UI.
   */
  static setChatQueryToolSelectionAction(chatQueryToolSelection?: Genai.Agent.Tool.Config.UiOptions, payloadPath?: Array_Type<string>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CHAT_QUERY_TOOL_SELECTION_SET` and sets the selected query tool in the application state.
   */
  static chatQueryToolSelectionSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered on load of the User Management page and when the users have changed
   * (see UserManagement.ApplicationState.USERS_CHANGED). Fetches information used by the User Management page and any
   * children components on the page.
   */
  static setUserManagementPageSettingsAction(id: string, userManagementPageSettings?: Genai.UserManagement.UiHelpers.PageSettings): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `USER_MANAGEMENT_PAGE_SETTINGS_SET`
   */
  static setUserManagementPageSettingsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action creator for actions of type `SET_AVAILABLE_SOURCES`
   */
  static setAvailableSourcesAction(sources?: Array_Type<Genai.SourceFile>): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `SET_AVAILABLE_SOURCES`
   */
  static setAvailableSourcesReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the data model listener is started.
   */
  static startDataModelListenerAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered periodically to poll the server side app state.
   */
  static refreshServerSideAppStateAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered to set the server side app state in client side.
   */
  static setServerSideAppStateAction(id: string): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `SERVER_SIDE_APP_STATE_SET`
   */
  static setServerSideAppStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Gets the server-side app state stored in application state
   */
  static getServerSideAppState(state: UiSdlReduxState): Genai.App.State | null;

  /**
   * Triggered on page load, it feches the canary mode status for the app and sets it in the application state.
   */
  static setReadOnlyConfigAction(id: string, readOnlyConfig?: Genai.App.ReadOnlyConfig): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `READ_ONLY_CONFIG_SET`
   */
  static setReadOnlyConfigReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Stores the files under the selected collection
   */
  static setStoredCollectionFilesAction(id: string, files?: Array_Type<File>): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `STORED_COLLECTION_FILES_SET`
   */
  static storedCollectionFilesSetEffect(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when a stream chunk is received. Sets the partially received answer in the UI.
   */
  static setStreamedAnswerAction(id: string, partialAnswer?: string): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `STREAMED_ANSWER_SET`
   */
  static streamedAnswerSetEffect(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when streaming begins.
   * Sets the typewriter delay to the configured amount in {@link Genai.Streaming.Config}.
   */
  static setTypewriterDelayAction(id: string, delay?: number): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `TYPEWRITER_DELAY_SET`
   */
  static typewriterDelaySetEffect(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to trigger loading/refreshing of the {@link TypeMeta}s cache.
   *
   * @return a `REFRESH_TYPE_METAS_CACHE` action
   */
  static refreshTypeMetasCacheAction(): UiSdlReduxAction<any>;

  /**
   * An action to update the #typeMetasCache.
   *
   * @param typeMetas
   *           The {@link TypeMeta}s to add to the cache
   *
   * @return a `SET_TYPE_METAS_CACHE` action
   */
  static setTypeMetasCacheAction(typeMetas?: Array_Type<TypeMeta>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_TYPE_METAS_CACHE` and updates the #typeMetasCache.
   */
  static setTypeMetasCacheReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the user clicks a row in the `GenAiUi.TagsGrid`.
   * @param stateId
   *           The id of the application state.
   * @param tagType
   *           The category tag type to be set in the application state.
   * @return a Redux action
   */
  static setTagTypeAction(stateId: string, tagType: Genai.SourceFile.Metadata.Category): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_TAG_TYPE` and sets the provided payload for the selected
   * TagType into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static tagTypeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the user loads into the query detail page.
   * Sets the current conversation to the one derived by the query ID in the URL params.
   */
  static setConversationAction(id: string, conversation?: Genai.Conversation): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `CONVERSATION_SET` and sets the provided conversation into app state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setConversationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to set the currently selected conversation for renaming/deletion.
   *
   * @param stateId
   *           The id of the application state.
   * @param conversation
   *           The {@link Genai.Conversation} to set as selected
   * @return a new Redux state
   */
  static setSelectedConversationAction(stateId: string, conversation: Genai.Conversation): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SELECTED_CONVERSATION_SET` and sets the currently selected conversation.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setSelectedConversationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to set the conversation history to show in the side panel.
   *
   * @param stateId
   *           The id of the application state.
   * @param conversations
   *           The recent {@link Genai.Conversation}s
   * @return a new Redux state
   */
  static setRecentConversationsAction(stateId: string, conversations: Array_Type<Genai.Conversation>): UiSdlReduxAction<any>;

  /**
   * Listens to actions of type 'RECENT_CONVERSATIONS_SET' and sets the conversation history to show in the side panel.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setRecentConversationsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to remove a conversation from the conversation history list shown in the side panel.
   *
   * @param stateId
   *           The id of the application state.
   * @param conversationId
   *           The id of the {@link Genai.Conversation} to remove
   * @return a new Redux state
   */
  static removeRecentConversationAction(stateId: string, conversationId: string): UiSdlReduxAction<any>;

  /**
   * Listens to actions of type `RECENT_CONVERSATION_REMOVE` and removes conversation from the conversation history.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static removeRecentConversationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action to add a conversation from the conversation history list shown in the side panel.
   *
   * @param stateId
   *           The id of the application state.
   * @param conversation
   *           The {@link Genai.Conversation} to add to the history.
   * @return a new Redux state
   */
  static addRecentConversationAction(stateId: string, conversation: Genai.Conversation): UiSdlReduxAction<any>;

  /**
   * Listens to actions of type `RECENT_CONVERSATION_ADD` and adds conversation to the conversation history.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static addRecentConversationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when user has edited the spec and indicated query result to be unhelpful.
   * Stores the `showUnhelpfulSpecNotif` field in the state to determine whether to render the unhelpful spec notification.
   * Stores the `queryOrigin` field in the state to record the query type.
   * @param id
   *           The id of the application state.
   * @param showUnhelpfulSpecNotif
   *           Whether to show unhelpful spec notification to user
   * @param queryOrigin
   *           The query type from where the action was triggered.
   * @return a Redux action
   */
  static setShowUnhelpfulSpecNotifAction(id: string, showUnhelpfulSpecNotif: boolean, queryOrigin: string): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SHOW_UNHELPFUL_SPEC_NOTIF_SET` and sets showUnhelpfulSpecNotif and queryOrigin
   * into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setShowUnhelpfulSpecNotifReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Action creator for actions of type `SET_PROJECTS_MODE`
   */
  static setProjectsModeAction(usingProjects?: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `SET_PROJECTS_MODE`
   */
  static setProjectsModeReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered to set the {@link Genai.Agent.Tool.Util.Attributor.Spec} setting to state in client side. This variable represents if the feature is enable/disable.
   */
  static setAttributionEnabledStateAction(id: string, visibility: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `IS_ATTRIBUTION_ENABLED_STATE_SET`
   */
  static setAttributionEnabledStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the user select if the corroboration results should be display/hide in the UI.
   */
  static setShowCorroborationResultStateAction(id: string, showCorroborationResult: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `SHOW_CORROBORATION_RESULT_STATE_SET`
   */
  static setShowCorroborationResultStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Kicks off a `SEARCH_QUERY_SUBMIT` action with the {@link Genai.Query} that the user clicked.
   */
  static submitSearchQueryAction(id: string, searchQuery: Genai.Query): UiSdlReduxAction<any> | null;

  /**
   * Triggered when the app is initially rendered.
   * Stores the {@link Genai.LogoImages.Config} into application state.
   * @param id
   *           The id of the application state.
   * @param images
   *           The {@link Genai.LogoImages.Config} to be set in the application state.
   * @return a Redux action
   */
  static setImagesLogoStateAction(id: string, images: Genai.LogoImages.Config): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_IMAGES_LOGO` and sets the {@link Genai.LogoImages.Config} into the application state.
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setImagesLogoStateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered on initial page load to set the available planner options. If multiple options exist, they will be
   * presented to the user next to the search input, allowing the user to select a specific planner when running queries.
   * @param id
   *           The id of the application state.
   * @param plannerOptions
   *           List of planner options available to the user.
   * @return a Redux action
   */
  static setPlannerOptionsAction(id?: string, plannerOptions?: Array_Type<Genai.Agent.Persistable<any, any>>): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `PLANNER_OPTIONS_SET` and sets the provided payload for the plan and execute options
   * into the application state.
   */
  static setPlannerOptionsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered a) on page load if {@link GenAiUiConfig#queryToolSelectorVisibility} is set to "full" or "hideAllOption",
   * and b) when the user sets the planner from action button dropdown next to the search input.
   * @param id
   *           The id of the application state.
   * @param selectedPlanner
   *           The planner selected by the user or the default planner.
   * @param toggle
   *           Whether to show the planner selection.
   * @return a Redux action
   */
  static setPlannerSelectionAction(id?: string, selectedPlanner?: Genai.Agent.Planner, toggle?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `PLANNER_SELECTION_SET` and sets the selected planner in the application state.
   */
  static plannerSelectionSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the page is loaded or refreshed to set the planner options.
   * @param id
   *           The id of the application state.
   */
  static refreshPlannerOptionsAction(id?: string): UiSdlReduxAction<any>;

  /**
   * Triggered on initial page load to set the query tool options loading state while the #queryToolOptions are
   * being loaded.
   *
   * @param id
   *           The id of the application state.
   * @param isLoading
   *           Whether the planner options are currently loading.
   */
  static setPlannerOptionsLoadingAction(id?: string, isLoading?: boolean): UiSdlReduxAction<any>;

  /**
   * Reducer for actions of type `PLANNER_OPTIONS_LOADING_SET`
   */
  static setPlannerOptionsLoadingReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the user selects a few shot example to see its details.
   * Stores the `currentFewShot` field in the state to determine the selected few shot example.
   * @param stateId
   *           The id of the application state.
   * @param currentFewShot
   *           The selected few shot value.
   * @return a Redux action
   */
  static setModelConfigCurrentFewShotAction(stateId: string, currentFewShot?: Genai.FewShotExample): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_MODEL_CONFIG_CURRENT_FEW_SHOT` and sets the provided payload for the current few shot
   * into the application state.
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setModelConfigCurrentFewShotReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Initiates an `ADD_TAG_TO_DOCUMENT` action to add a {@link Genai.SourceFile.Metadata.Tag} to the specified {@link Genai.SourceFile}.
   *
   * @param id
   *        The id of the application state.
   * @param activeAction
   *       The action that was triggered.
   * @param requestPayload
   *        The payload to be sent with the action to manage the {@link Genai.SourceFile.Metadata.Tag}.
   */
  static addTagToDocumentAction(id?: string, activeAction?: string, requestPayload?: any): UiSdlReduxAction<any>;

  /**
   * Initiates an `EDIT_TAG_IN_DOCUMENT` action to modify a {@link Genai.SourceFile.Metadata.Tag} within a specified {@link Genai.SourceFile}.
   *
   * @param id
   *        The id of the application state.
   * @param activeAction
   *        The action that was triggered.
   * @param requestPayload
   *        The payload to be sent with the action to manage the {@link Genai.SourceFile.Metadata.Tag}.
   */
  static editTagInDocumentAction(id?: string, activeAction?: string, requestPayload?: any): UiSdlReduxAction<any>;

  /**
   * Initiates a `REMOVE_TAG_FROM_DOCUMENT` action to remove a {@link Genai.SourceFile.Metadata.Tag} from a specified {@link Genai.SourceFile}.
   *
   * @param id
   *        The id of the application state.
   * @param activeAction
   *        The action that was triggered.
   * @param requestPayload
   *        The payload to be sent with the action to manage the {@link Genai.SourceFile.Metadata.Tag}.
   */
  static removeTagFromDocumentAction(id?: string, activeAction?: string, requestPayload?: any): UiSdlReduxAction<any>;

  /**
   * Triggered when the user clicks a row in the `GenAiUi.CredentialsGrid`.
   * @param id
   *           The id of the application state.
   * @param credential
   *           The credential to be set in the application state.
   * @return a Redux action
   */
  static setCredentialSelectedAction(id: string, credential: Genai.Llm.ExternalLlm.Config): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_CREDENTIAL_SELECTED` and sets the provided payload for the selected
   * credential into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setCredentialSelectedReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the authFields data is loaded.
   * @param id
   *           The id of the application state.
   * @param authFields
   *           The authFields to be set in the application state.
   * @return a Redux action
   */
  static setAuthFieldsSelectedAction(id: string, authFields: any): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_AUTH_FIELDS_SELECTED` and sets the provided payload for the selected
   * authFields into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setAuthFieldsSelectedReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the user clicks a row in the `GenAiUi.CredentialsGrid`.
   * @param id
   *           The id of the application state.
   * @param llm
   *           The LLM to be set in the application state.
   * @return a Redux action
   */
  static setLLMSelectedAction(id: string, llm: Genai.UnstructuredQuery.Engine.ModelConfig): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_LLM_SELECTED` and sets the provided payload for the selected
   * LLM into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setLLMSelectedReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the LLM Params data is loaded.
   * @param id
   *           The id of the application state.
   * @param LLMParams
   *           The LMM params to be set in the application state.
   * @return a Redux action
   */
  static setLLMParamsSelectedAction(id: string, LLMParams: any): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_LLM_PARAMS_SELECTED` and sets the provided payload for the selected
   * LLMParams into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setLLMParamsSelectedReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;

  /**
   * Triggered when the user edit a field on a form in LLM pages.
   * @param id
   *           The id of the application state.
   * @param actionForm
   *           The form that was edited.
   * @param isValid
   *           The boolean value that indicates if the form is valid.
   * @return a Redux action
   */
  static setLLMsFormSValidationAction(id: string, actionForm: string, isValid: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_LLM_FORMS_VALIDATION` and sets the provided payload for the selected
   * LLM into the application state.
   *
   * @param state
   *           Redux State
   * @param action
   *           Redux action
   * @return a new Redux state
   */
  static setLLMsFormSValidationReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxAction<any>;
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
