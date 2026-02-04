// TypeScript definitions for the C3 type UiConfigSiteReact

/**
 * React component for {@link UiConfigSite}. Just returns {@link UiSdlSiteReact}.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiConfigSiteReact
 */
declare interface IUiConfigSiteReact {

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
   * @inheritdoc
   */
  tunnelConfiguration?: IUiSdlTunnelConfiguration;

  /**
   * The map of generated imports from {@link Ann#UiImportGenerator} that are of the structure {importName:  import object, function, string, etc.}
   */
  generatedImports?: Map_Type<string, any> | {[key: string]: any};

  /**
   * Children components to render.
   */
  children?: Array_Type<UiSdlComponentRef<UiSdlComponent<UiSdlNoData>>> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData>>>;

  /**
   * The modal to be shown when the user has been inactive for the time specified in {@link UiSdlSecurityConfig#inactivityWarningPeriod}.
   */
  inactivityWarningModal?: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData>>;

  /**
   * The route that determines what page will be rendered first.
   */
  initialRoute?: string;

  /**
   * The params passed to the page on first render
   */
  initialParams?: any;

  /**
   * The metadata ID of the current page.
   */
  currentPage?: string;

  /**
   * When not empty, imported modules
   */
  importsTunnel?: IUiSdlTunnelConfiguration;

  /**
   * The available routes for this site.
   */
  routes?: Array_Type<UiSdlRoute> | Array<IUiSdlRoute>;

  /**
   * A list of styles available to the application.
   */
  styles?: Array_Type<UiSdlThemeTemplate | UiSdlDensityTemplate> | Array<IUiSdlThemeTemplate | IUiSdlDensityTemplate>;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlThemeTemplate#id}.
   */
  themeId?: string;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlDensityTemplate#id}.
   */
  densityId?: string;

  /**
   * Private field to represent a `themeId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlThemeTemplate}
   */
  themeHiddenId?: string;

  /**
   * Private field to represent a `densityId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlDensityTemplate}
   */
  densityHiddenId?: string;

  /**
   * Data spec to get the available densities.
   */
  densityDataSpec?: IUiSdlThemeContextDataSpec;

  /**
   * Data spec to get the available themes.
   */
  styleDataSpec?: IUiSdlThemeContextDataSpec;

  /**
   * Storage place for the most recent {@link UiSdlDensityTemplate} fetched.
   */
  densityCollection?: Array_Type<UiSdlDensityTemplate> | Array<IUiSdlDensityTemplate>;

  /**
   * Storage place for the most recent {@link UiSdlThemeTemplate} fetched.
   */
  themeCollection?: Array_Type<UiSdlThemeTemplate> | Array<IUiSdlThemeTemplate>;

  /**
   * A list of RegExp patterns that indicate what routes can be handled by the router.
   *
   * If a route doesn't match any pattern, it will be ignored and reported via
   * {@see onUnhandledRoute}.
   */
  onlyAllowMatchingRoutes?: Array_Type<string> | Array<string>;

  /**
   * A map of WebWorkers that the site holds.
   */
  webWorkers?: Map_Type<string, UiSdlWebWorker> | {[key: string]: IUiSdlWebWorker};

  /**
   * If true, a browser history listener will be initialized and
   * used as source for the initial url and redirects will be published
   * to the browser history so the address bar is updated.
   *
   * Default value is 'false' because that is the most common use when a UiSdlSite has to be created
   * manually. The DefaultSite, the one used when no explicit UiSdlSite is created, is
   * using the browser history.
   */
  useBrowserHistory?: boolean;

  /**
   * Contains the user object in the redux store. It stores the logged in user's information
   */
  user?: IUser;

  userContext?: IUiSdlUserContext;

  /**
   * Contains the configs object in the redux store. It stores the site configuration information
   */
  configs?: Map_Type<string, any> | {[key: string]: any};
}

/**
 * React component for {@link UiConfigSite}. Just returns {@link UiSdlSiteReact}.
 *
 * @remarks this represents a made instance of UiConfigSiteReact
 */
declare class UiConfigSiteReact extends Obj  {

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): UiConfigSiteReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string;
  withId(id: string | null): UiConfigSiteReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string;
  withName(name: string | null): UiConfigSiteReact;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiConfigSiteReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiConfigSiteReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiConfigSiteReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiConfigSiteReact;

  /**
   * @inheritdoc
   */
  readonly tunnelConfiguration?: UiSdlTunnelConfiguration;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiConfigSiteReact;

  /**
   * The map of generated imports from {@link Ann#UiImportGenerator} that are of the structure {importName:  import object, function, string, etc.}
   */
  readonly generatedImports?: Map_Type<string, any>;
  withGeneratedImports(generatedImports: Map_Type<string, any> | {[key: string]: any} | null): UiConfigSiteReact;

  /**
   * Children components to render.
   */
  readonly children?: Array_Type<UiSdlComponentRef<UiSdlComponent<UiSdlNoData>>>;
  withChildren(children: Array_Type<UiSdlComponentRef<UiSdlComponent<UiSdlNoData>>> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData>>> | null): UiConfigSiteReact;

  /**
   * The modal to be shown when the user has been inactive for the time specified in {@link UiSdlSecurityConfig#inactivityWarningPeriod}.
   */
  readonly inactivityWarningModal?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData>>;
  withInactivityWarningModal(inactivityWarningModal: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData>> | null): UiConfigSiteReact;

  /**
   * The route that determines what page will be rendered first.
   */
  readonly initialRoute?: string;
  withInitialRoute(initialRoute: string | null): UiConfigSiteReact;

  /**
   * The params passed to the page on first render
   */
  readonly initialParams?: any;
  withInitialParams(initialParams: any | null): UiConfigSiteReact;

  /**
   * The metadata ID of the current page.
   */
  readonly currentPage?: string;
  withCurrentPage(currentPage: string | null): UiConfigSiteReact;

  /**
   * When not empty, imported modules
   */
  readonly importsTunnel?: UiSdlTunnelConfiguration;
  withImportsTunnel(importsTunnel: IUiSdlTunnelConfiguration | null): UiConfigSiteReact;

  /**
   * The available routes for this site.
   */
  readonly routes?: Array_Type<UiSdlRoute>;
  withRoutes(routes: Array_Type<UiSdlRoute> | Array<IUiSdlRoute> | null): UiConfigSiteReact;

  /**
   * A list of styles available to the application.
   */
  readonly styles?: Array_Type<UiSdlThemeTemplate | UiSdlDensityTemplate>;
  withStyles(styles: Array_Type<UiSdlThemeTemplate | UiSdlDensityTemplate> | Array<IUiSdlThemeTemplate | IUiSdlDensityTemplate> | null): UiConfigSiteReact;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlThemeTemplate#id}.
   */
  readonly themeId?: string;
  withThemeId(themeId: string | null): UiConfigSiteReact;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlDensityTemplate#id}.
   */
  readonly densityId?: string;
  withDensityId(densityId: string | null): UiConfigSiteReact;

  /**
   * Private field to represent a `themeId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlThemeTemplate}
   */
  readonly themeHiddenId?: string;
  withThemeHiddenId(themeHiddenId: string | null): UiConfigSiteReact;

  /**
   * Private field to represent a `densityId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlDensityTemplate}
   */
  readonly densityHiddenId?: string;
  withDensityHiddenId(densityHiddenId: string | null): UiConfigSiteReact;

  /**
   * Data spec to get the available densities.
   */
  readonly densityDataSpec?: UiSdlThemeContextDataSpec;
  withDensityDataSpec(densityDataSpec: IUiSdlThemeContextDataSpec | null): UiConfigSiteReact;

  /**
   * Data spec to get the available themes.
   */
  readonly styleDataSpec?: UiSdlThemeContextDataSpec;
  withStyleDataSpec(styleDataSpec: IUiSdlThemeContextDataSpec | null): UiConfigSiteReact;

  /**
   * Storage place for the most recent {@link UiSdlDensityTemplate} fetched.
   */
  readonly densityCollection?: Array_Type<UiSdlDensityTemplate>;
  withDensityCollection(densityCollection: Array_Type<UiSdlDensityTemplate> | Array<IUiSdlDensityTemplate> | null): UiConfigSiteReact;

  /**
   * Storage place for the most recent {@link UiSdlThemeTemplate} fetched.
   */
  readonly themeCollection?: Array_Type<UiSdlThemeTemplate>;
  withThemeCollection(themeCollection: Array_Type<UiSdlThemeTemplate> | Array<IUiSdlThemeTemplate> | null): UiConfigSiteReact;

  /**
   * A list of RegExp patterns that indicate what routes can be handled by the router.
   *
   * If a route doesn't match any pattern, it will be ignored and reported via
   * {@see onUnhandledRoute}.
   */
  readonly onlyAllowMatchingRoutes?: Array_Type<string>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: Array_Type<string> | Array<string> | null): UiConfigSiteReact;

  /**
   * A map of WebWorkers that the site holds.
   */
  readonly webWorkers?: Map_Type<string, UiSdlWebWorker>;
  withWebWorkers(webWorkers: Map_Type<string, UiSdlWebWorker> | {[key: string]: IUiSdlWebWorker} | null): UiConfigSiteReact;

  /**
   * If true, a browser history listener will be initialized and
   * used as source for the initial url and redirects will be published
   * to the browser history so the address bar is updated.
   *
   * Default value is 'false' because that is the most common use when a UiSdlSite has to be created
   * manually. The DefaultSite, the one used when no explicit UiSdlSite is created, is
   * using the browser history.
   */
  readonly useBrowserHistory?: boolean;
  withUseBrowserHistory(useBrowserHistory: boolean): UiConfigSiteReact;

  /**
   * Contains the user object in the redux store. It stores the logged in user's information
   */
  readonly user?: User;
  withUser(user: IUser | null): UiConfigSiteReact;

  readonly userContext?: UiSdlUserContext;
  withUserContext(userContext: IUiSdlUserContext | null): UiConfigSiteReact;

  /**
   * Contains the configs object in the redux store. It stores the site configuration information
   */
  readonly configs?: Map_Type<string, any>;
  withConfigs(configs: Map_Type<string, any> | {[key: string]: any} | null): UiConfigSiteReact;

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
  static fromJson(json: any): UiConfigSiteReact | null;

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
  static fromJsonString(json: string): UiConfigSiteReact | null;

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
  static fromXmlString(xml: string): UiConfigSiteReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): UiConfigSiteReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiConfigSiteReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiConfigSiteReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): UiConfigSiteReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<UiConfigSiteReact>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<UiConfigSiteReact>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): UiConfigSiteReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiConfigSiteReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiConfigSiteReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiConfigSiteReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiConfigSiteReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiConfigSiteReact;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): UiConfigSiteReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiConfigSiteReact;

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
  withoutFieldAtPath(path: string): UiConfigSiteReact;

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
  withoutField(field: string): UiConfigSiteReact;

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
  withoutField(field: FieldType): UiConfigSiteReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): UiConfigSiteReact;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): UiConfigSiteReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiConfigSiteReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): UiConfigSiteReact;

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
  defaultField(field: string): UiConfigSiteReact;

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
  defaultField(field: FieldType): UiConfigSiteReact;

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
  unsetField(field: string): UiConfigSiteReact;

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
  unsetField(field: FieldType): UiConfigSiteReact;

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
  removeField(field: string): UiConfigSiteReact;

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
  removeField(field: FieldType): UiConfigSiteReact;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): UiConfigSiteReact;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): UiConfigSiteReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): UiConfigSiteReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): UiConfigSiteReact;

  mergeJson(json: any): UiConfigSiteReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): UiConfigSiteReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): UiConfigSiteReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<UiConfigSiteReact>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<UiConfigSiteReact> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiConfigSiteReact> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<UiConfigSiteReact>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiConfigSiteReact> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, UiConfigSiteReact> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiConfigSiteReact> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiConfigSiteReact>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiConfigSiteReact>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): UiConfigSiteReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): UiConfigSiteReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): UiConfigSiteReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiConfigSiteReact;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): UiConfigSiteReact;

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
  static make(fields: any, withDefaults?: boolean): UiConfigSiteReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): UiConfigSiteReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): UiConfigSiteReact;

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
  afterMake(): UiConfigSiteReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiConfigSiteReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<UiConfigSiteReact> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): UiConfigSiteReact;

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
  static buildProps(type: Type, spec?: ReactComponentPropsSpec): string | null;

  /**
   * The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
   */
  static tsxPath(): string | null;

  /**
   * If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
   */
  static importedModule(): any | null;

  /**
   * The render function must be implemented as the function the TSX implementation exports.
   */
  static render(props?: UiConfigSiteReact): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<UiConfigSiteReact>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiConfigSiteReact>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<UiConfigSiteReact> | null;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<UiConfigSiteReact>> | null;

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
  dependencies(): MetadataDeps<UiConfigSiteReact>;

  save(subPath?: string, contentType?: string): UiConfigSiteReact;

  remove(spec?: UpsertSpec): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string): number;

  update(srcObj?: UiConfigSiteReact, spec?: UpsertSpec): UiConfigSiteReact | null;

  upsert(srcObj?: UiConfigSiteReact, spec?: UpsertSpec): UiConfigSiteReact | null;

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
  static fromString(s: string): UiConfigSiteReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): UiConfigSiteReact | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiConfigSiteReact, state: UiSdlReduxState): UiConfigSiteReact | null;

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
   * Callback triggered when a route was ignored based on onlyAllowMatchingRoutes.
   */
  static onUnhandledRoute(route?: string): void;

  /**
   * Function to start a worker and updated the {@link UiSdlSite#webWorkers} field.
   * @param workerId
   *            the id of the worker.
   * @param workerType
   *            the type name of the worker to be started, ex. {@link UiSdlTypeWorker}. If no type is provided, it will
   *            use the base type
   * @return the {@link UiSdlWebWorker} instance that was started
   */
  startWorker(workerId: string, workerType?: string = '\'UiSdlWebWorker\''): Promise<UiSdlWebWorker> | null;

  /**
   * Function to start the typeworker and update the {@link UiSdlSite#webWorkers} field.
   * @param tunnelConfiguration
   *            the tunnel configuration used when loading the types
   * @param workerId
   *            the id of the worker.
   * @param workerType
   *            the worker type.
   * @param forceReloadTypes
   *            Whether to force reload types from server
   * @param timeout
   *            The timeout for the webworker request
   * @return the instance that was started
   */
  startTypeWorker(tunnelConfiguration?: UiSdlTunnelConfiguration, workerId?: string, workerType?: string, forceReloadTypes?: boolean, timeout?: number): Promise<UiSdlWebWorker> | null;

  /**
   * Triggered whenever the global user information needs to be fetched from the server.
   * @param id
   *            Id of the component.
   *
   * @return a 'USER_GET' action for this instance with empty payload
   */
  static getUserAction(id?: string): UiSdlUserGetAction | null;

  /**
   * Triggered whenever the global user information needs to be set with fetched User details.
   * @param id
   *            Id of the component.
   * @param user
   *            The user object.
   *
   * @return an 'USER_INIT' action for this instance with the following properties:
   * - payload.user {json} The field that contains user data
   */
  static initUserAction(id?: string, user?: User): UiSdlUserInitAction | null;

  /**
   * Triggered whenever the global user information needs to be set with fetched {@link UiSdlUserContext} details.
   * @param id
   *            Id of the component.
   * @param user
   *            The {@link UiSdlUserContext} object.
   *
   * @return an 'USER_CONTEXT' action for this instance with the following properties:
   * - payload.user {json} The field that contains user context data
   */
  static initUserContextAction(id?: string, user?: UiSdlUserContext): UiSdlUserContextInitAction | null;

  /**
   * Triggered whenever there is a chunk loading error caused by a user logout.
   * @param id
   *           Id of the component.
   *
   * @return an 'USER_SESSION_EXPIRED' action for this instance.
   */
  static expiredUserSessionAction(id?: string): UiSdlUserSessionExpiredAction | null;

  /**
   * Triggered whenever the page parameters need to be updated.
   * @param id
   *            Id of the component.
   * @param pageParams
   *            The mapping of page params to their corresponding values.
   *
   * @return an 'PAGE_PARAMS_SET' action for this instance with the following properties:
   * - payload.pageParams {map<string, string | [string]>} The field that contains the page params
   */
  static setPageParamsAction(id?: string, pageParams?: Map_Type<string, string | Array_Type<string>>): UiSdlPageParamsSetAction | null;

  /**
   * Triggered whenever the current path needs to be updated.
   * @param id
   *            Id of the component.
   * @param currentPath
   *            The string which contains the current path.
   *
   * @return an 'CURRENT_PATH_SET' action for this instance with the following properties:
   * - payload.currentPath {string} The field that contains the current path.
   */
  static setCurrentPathAction(id?: string, currentPath?: string): UiSdlCurrentPathSetAction | null;

  /**
   * Triggered whenever the current path and page params have been successfully updated.
   *
   * @param id
   *            Id of the component.
   * @param currentPath
   *            The string which contains the current path.
   * @param pageParams
   *            The mapping of page params to their corresponding values.
   *
   * @return an 'PATH_AND_PARAMS_SET' action for this instance with the following properties:
   * - payload.currentPath {string} The field that contains the current path.
   * - payload.pageParams {map<string, string | [string]>} The field that contains the page params
   */
  static confirmPathAndPageParamsAction(id?: string, currentPath?: string, pageParams?: Map_Type<string, string | Array_Type<string>>): UiSdlPathAndPageParamsConfirmAction | null;

  /**
   * An action to update the site's tunnel configuration.
   * @param id
   *            Id of the component.
   * @param tunnelConfiguration
   *            The query string which contains the query params.
   *
   * @return an 'TUNNEL_CONFIGURATION_SET' action for this instance with the following properties:
   * - payload.queryString {string} The field that contains the query string.
   */
  static setTunnelConfigurationAction(id?: string, tunnelConfiguration?: UiSdlTunnelConfiguration): UiSdlTunnelConfigurationSetAction;

  /**
   * An action to update the site's configuration for the given path.
   * @param siteId
   *            The id of the site being used
   * @param typeName
   *            Name of the component.
   * @param configPath
   *            The path of the configuration to update.
   * @param configId
   *            Optional. The id of the configuration to update.
   * @param value
   *            The value to use for the configuration.  This is not limited strings but can also be objects.
   *
   * @return an 'CONFIG_SET' action for this instance with the following properties:
   * - payload.siteId {string} The current site id.
   * - payload.key {string} The combined path for the configuration.
   * - payload.value {any} The value assigned to the configuration key path.
   */
  static setConfigAction(siteId: string, typeName: string, configPath: string, configId?: string, value?: any): UiSdlConfigSetAction;

  /**
   * Triggered when the routes need to be set.
   * @param id
   *            Id of the site.
   * @param routes
   *            The routes available to this site.
   *
   * @return a 'ROUTES_SET' action for this instance with the following properties:
   * - payload.routes {[UiSdlRoute]} The field that contains the routes
   */
  static setRoutesAction(id?: string, routes?: Array_Type<UiSdlRoute>): UiSdlRoutesSetAction;

  /**
   * An action triggered when the user has been inactive. Internally it is used to show a modal.
   *
   * @see UiSdlSecurityConfig.inactivityWarningTime.
   *
   * @param siteId
   *            The id of the site being used
   *
   * @return an 'INACTIVITY_WARNING_MODAL_SHOW' action for this instance
   */
  static showInactivityWarningModalAction(siteId: string): UiSdlInactivityWarningModalShowAction;

  /**
   * An action to fetch the site configuration for the given type and path.
   * @param siteId
   *            The id of the site being used
   * @param typeName
   *            Name of the component.
   * @param configPath
   *            The path of the configuration to fetch.
   *
   * @return an 'CONFIG_GET' action for this instance with the following properties:
   * - payload.siteId {string} The current site id.
   * - payload.typeName {string} The name of the type used to fetch the configuration.
   * - payload.configPath {string} The path for the configuration.
   * - payload.configId {string} Optional, the ID for the instance of the config.
   */
  static getConfigAction(siteId: string, typeName: string, configPath: string, configId?: string): UiSdlConfigGetAction;

  /**
   * Listens for actions of type `USER_CONTEXT`, and sets the user context information in redux store.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static userContextReducer(state: UiSdlReduxState, action: UiSdlUserInitAction): UiSdlReduxState;

  /**
   * Listens for actions of type `PAGE_PARAMS_SET`, and builds a map of query parameters
   * from the query string and updates the state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static pageParamsSetReducer(state: UiSdlReduxState, action: UiSdlPageParamsSetAction): UiSdlReduxState;

  /**
   * Listens for actions of type `CURRENT_PATH_SET` and stores the currentPath into the state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static currentPathSetReducer(state: UiSdlReduxState, action: UiSdlCurrentPathSetAction): UiSdlReduxState;

  /**
   * Listens for actions of type `TUNNEL_CONFIGURATION_SET`, sets the given tunnel configuration in
   * the site's state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static tunnelConfigurationSetReducer(state: UiSdlReduxState, action: UiSdlTunnelConfiguration): UiSdlReduxState;

  /**
   * Listens for actions of type `ROUTES_SET` and updates the state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static routesSetReducer(state: UiSdlReduxState, action: UiSdlRoutesSetAction): UiSdlReduxState;

  /**
   * Listens for actions of type `USER_GET`, internally fetches user details by calling User.myUser()
   * through an ajax request.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   * @returns an UiSdlObservable action stream
   */
  static userGetEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `CHUNK_LOADING_ERROR` and returns an action to handle the error
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static chunkLoadingErrorEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `USER_SESSION_EXPIRED` and returns an action to redirect the user to a
   * `/session-expired` page
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static userSessionExpiredEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `CONFIG_GET`, internally gets the configuration and then sets it in the redux state.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   * @returns an UiSdlObservable action stream
   */
  static configGetEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type INACTIVITY_WARNING_MODAL_SHOW and returns the action to show the modal component
   * specified in the inactivityWarningModal field.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   * @returns an UiSdlObservable action stream of inactivityWarningModal.openCloseModalAction to open the modal
   */
  static showInactivityWarningModalEpic(actionStream?: UiSdlActionsObservable, stateStream?: UiSdlStatesObservable): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `CONFIG_SET`, sets the given tunnel configuration in
   * the site's state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static configSetReducer(state: UiSdlReduxState, action: UiSdlConfigSetAction): UiSdlReduxState;

  /**
   * Returns the metadata ID of the given site's current page.
   *
   * @param siteId
   *           The metadata ID of the {@link UiSdlSite}.
   * @param state
   *           Redux state
   * @returns the metadata ID of the site's current page.
   */
  static getCurrentPageFromState(siteId: string, state: UiSdlReduxState): string | null;

  /**
   * Returns the Id of the user for a given site.
   *
   * @param siteId
   *           The metadata ID of the {@link UiSdlSite}.
   * @param state
   *           Redux state
   * @returns the metadata ID of the site's current page.
   */
  static getCurrentUserFromState(siteId: string, state: UiSdlReduxState): string | null;

  /**
   * Returns the routes stored in the site's state.
   *
   * @param siteId
   *           The metadata ID of the {@link UiSdlSite}.
   * @param state
   *           Redux state
   * @returns the routes available to the site.
   */
  static getRoutesFromState(siteId: string, state: UiSdlReduxState): Array_Type<UiSdlRoute> | null;

  /**
   * Creates and starts a worker.
   *
   * @param workerId
   *           The id to be assigned to the worker.
   * @param WorkerClass
   *           The Class to be used to create a new instance of a worker from.
   * @returns the created worker.
   */
  static createAndStartWorker(workerId: string, WorkerClass: any): UiSdlWebWorker;

  /**
   * Returns an action for updating the current style.
   *
   * @param componentId
   *           Id of the component.
   * @param styleId
   *           Id of the {@link UiSdlThemeTemplate} to set as the current style.
   * @return a 'THEME_ID_SET' action for this instance with the following properties:
   * - payload.styleId {string} The id of the style to set as the current style.
   */
  static setThemeIdAction(componentId: string, styleId: string): UiSdlThemeIdSetAction | null;

  /**
   * Sets the current style id in the state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static themeIdSetReducer(state: UiSdlReduxState, action: UiSdlStyleIdSetAction): UiSdlReduxState;

  /**
   * Returns an action for updating the current style.
   *
   * @param componentId
   *           Id of the component.
   * @param styleId
   *           Id of the {@link UiSdlDensityTemplate} to set as the current style.
   * @return a 'DENSITY_ID_SET' action for this instance with the following properties:
   * - payload.styleId {string} The id of the style to set as the current style.
   */
  static setDensityIdAction(componentId: string, styleId: string): UiSdlDensityIdSetAction | null;

  /**
   * Sets the current style id in the state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static densityIdSetReducer(state: UiSdlReduxState, action: UiSdlStyleIdSetAction): UiSdlReduxState;

  /**
   * Returns an action for updating the current style.
   *
   * @param componentId
   *           Id of the component.
   * @param styleId
   *           Id of the {@link UiSdlThemeTemplate} or {@link UiSdlDensityTemplate} to set as the current style.
   * @param styleType
   *           Which of either `density` or `theme` needs to be updated
   * @return a 'HIDDEN_ID_SET' action for this instance with the following properties:
   * - payload.styleId {string} The id of the style to set as the current style.
   * - payload.styleType {string} Which theming id needs to be  updated.
   */
  static setHiddenIdAction(componentId: string, styleId: string, styleType: string): UiSdlHiddenThemingIdSetAction | null;

  /**
   * Sets the current style id in the state.
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static hiddenIdSetReducer(state: UiSdlReduxState, action: UiSdlStyleIdSetAction): UiSdlReduxState;
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
