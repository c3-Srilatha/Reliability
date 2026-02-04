// TypeScript definitions for the C3 type BundlerTestAppSiteReact

/**
 * A chart component for testing {@link UiSdlMetadataBundler} and {@link UiSdlMetadataLoader}.
 *
 * @remarks this represents a value passed to a method that expects an instance of BundlerTestAppSiteReact
 */
declare interface IBundlerTestAppSiteReact {

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
   * @inheritdoc
   */
  tunnelConfiguration?: IUiSdlTunnelConfiguration | null;

  /**
   * The map of generated imports from {@link Ann#UiImportGenerator} that are of the structure {importName:  import object, function, string, etc.}
   */
  generatedImports?: C3.Map<string | null, any> | {[key: string | null]: any};

  /**
   * Children components to render.
   */
  children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;

  /**
   * The modal to be shown when the user has been inactive for the time specified in {@link UiSdlSecurityConfig#inactivityWarningPeriod}.
   */
  inactivityWarningModal?: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;

  /**
   * The route that determines what page will be rendered first.
   */
  initialRoute?: string | null;

  /**
   * The params passed to the page on first render
   */
  initialParams?: any | null;

  /**
   * The metadata ID of the current page.
   */
  currentPage?: string | null;

  /**
   * When not empty, imported modules
   */
  importsTunnel?: IUiSdlTunnelConfiguration | null;

  /**
   * The available routes for this site.
   */
  routes?: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>;

  /**
   * A list of styles available to the application.
   */
  styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlThemeTemplate#id}.
   */
  themeId?: string | null;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlDensityTemplate#id}.
   */
  densityId?: string | null;

  /**
   * Private field to represent a `themeId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlThemeTemplate}
   */
  themeHiddenId?: string | null;

  /**
   * Private field to represent a `densityId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlDensityTemplate}
   */
  densityHiddenId?: string | null;

  /**
   * Data spec to get the available densities.
   */
  densityDataSpec?: IUiSdlThemeContextDataSpec | null;

  /**
   * Data spec to get the available themes.
   */
  styleDataSpec?: IUiSdlThemeContextDataSpec | null;

  /**
   * Storage place for the most recent {@link UiSdlDensityTemplate} fetched.
   */
  densityCollection?: C3.Array<UiSdlDensityTemplate | null> | Array<IUiSdlDensityTemplate | null>;

  /**
   * Storage place for the most recent {@link UiSdlThemeTemplate} fetched.
   */
  themeCollection?: C3.Array<UiSdlThemeTemplate | null> | Array<IUiSdlThemeTemplate | null>;

  /**
   * A list of RegExp patterns that indicate what routes can be handled by the router.
   *
   * If a route doesn't match any pattern, it will be ignored and reported via
   * {@see onUnhandledRoute}.
   */
  onlyAllowMatchingRoutes?: C3.Array<string | null> | Array<string | null>;

  /**
   * A map of WebWorkers that the site holds.
   */
  webWorkers?: C3.Map<string | null, UiSdlWebWorker | null> | {[key: string | null]: IUiSdlWebWorker | null};

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
  user?: IUser | null;

  userContext?: IUiSdlUserContext | null;

  /**
   * Contains the configs object in the redux store. It stores the site configuration information
   */
  configs?: C3.Map<string | null, any> | {[key: string | null]: any};

  bundlerType?: string | null;
}

/**
 * A chart component for testing {@link UiSdlMetadataBundler} and {@link UiSdlMetadataLoader}.
 *
 * @remarks this represents a made instance of BundlerTestAppSiteReact
 */
declare class BundlerTestAppSiteReact extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSiteReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSiteReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSiteReact;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerTestAppSiteReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSiteReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSiteReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSiteReact;

  /**
   * @inheritdoc
   */
  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): BundlerTestAppSiteReact;

  /**
   * The map of generated imports from {@link Ann#UiImportGenerator} that are of the structure {importName:  import object, function, string, etc.}
   */
  readonly generatedImports?: C3.Map<string | null, any>;
  withGeneratedImports(generatedImports: C3.Map<string | null, any> | {[key: string | null]: any}): BundlerTestAppSiteReact;

  /**
   * Children components to render.
   */
  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppSiteReact;

  /**
   * The modal to be shown when the user has been inactive for the time specified in {@link UiSdlSecurityConfig#inactivityWarningPeriod}.
   */
  readonly inactivityWarningModal?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withInactivityWarningModal(inactivityWarningModal: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BundlerTestAppSiteReact;

  /**
   * The route that determines what page will be rendered first.
   */
  readonly initialRoute?: string | null;
  withInitialRoute(initialRoute: string | null): BundlerTestAppSiteReact;

  /**
   * The params passed to the page on first render
   */
  readonly initialParams?: any | null;
  withInitialParams(initialParams: any | null): BundlerTestAppSiteReact;

  /**
   * The metadata ID of the current page.
   */
  readonly currentPage?: string | null;
  withCurrentPage(currentPage: string | null): BundlerTestAppSiteReact;

  /**
   * When not empty, imported modules
   */
  readonly importsTunnel?: UiSdlTunnelConfiguration | null;
  withImportsTunnel(importsTunnel: IUiSdlTunnelConfiguration | null): BundlerTestAppSiteReact;

  /**
   * The available routes for this site.
   */
  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): BundlerTestAppSiteReact;

  /**
   * A list of styles available to the application.
   */
  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): BundlerTestAppSiteReact;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlThemeTemplate#id}.
   */
  readonly themeId?: string | null;
  withThemeId(themeId: string | null): BundlerTestAppSiteReact;

  /**
   * The id of the current style. Should correspond to a {@link UiSdlDensityTemplate#id}.
   */
  readonly densityId?: string | null;
  withDensityId(densityId: string | null): BundlerTestAppSiteReact;

  /**
   * Private field to represent a `themeId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlThemeTemplate}
   */
  readonly themeHiddenId?: string | null;
  withThemeHiddenId(themeHiddenId: string | null): BundlerTestAppSiteReact;

  /**
   * Private field to represent a `densityId` that can't yet be found. This is required to limit the number of network requests made searching for {@link UiSdlDensityTemplate}
   */
  readonly densityHiddenId?: string | null;
  withDensityHiddenId(densityHiddenId: string | null): BundlerTestAppSiteReact;

  /**
   * Data spec to get the available densities.
   */
  readonly densityDataSpec?: UiSdlThemeContextDataSpec | null;
  withDensityDataSpec(densityDataSpec: IUiSdlThemeContextDataSpec | null): BundlerTestAppSiteReact;

  /**
   * Data spec to get the available themes.
   */
  readonly styleDataSpec?: UiSdlThemeContextDataSpec | null;
  withStyleDataSpec(styleDataSpec: IUiSdlThemeContextDataSpec | null): BundlerTestAppSiteReact;

  /**
   * Storage place for the most recent {@link UiSdlDensityTemplate} fetched.
   */
  readonly densityCollection?: C3.Array<UiSdlDensityTemplate | null>;
  withDensityCollection(densityCollection: C3.Array<UiSdlDensityTemplate | null> | Array<IUiSdlDensityTemplate | null>): BundlerTestAppSiteReact;

  /**
   * Storage place for the most recent {@link UiSdlThemeTemplate} fetched.
   */
  readonly themeCollection?: C3.Array<UiSdlThemeTemplate | null>;
  withThemeCollection(themeCollection: C3.Array<UiSdlThemeTemplate | null> | Array<IUiSdlThemeTemplate | null>): BundlerTestAppSiteReact;

  /**
   * A list of RegExp patterns that indicate what routes can be handled by the router.
   *
   * If a route doesn't match any pattern, it will be ignored and reported via
   * {@see onUnhandledRoute}.
   */
  readonly onlyAllowMatchingRoutes?: C3.Array<string | null>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: C3.Array<string | null> | Array<string | null>): BundlerTestAppSiteReact;

  /**
   * A map of WebWorkers that the site holds.
   */
  readonly webWorkers?: C3.Map<string | null, UiSdlWebWorker | null>;
  withWebWorkers(webWorkers: C3.Map<string | null, UiSdlWebWorker | null> | {[key: string | null]: IUiSdlWebWorker | null}): BundlerTestAppSiteReact;

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
  withUseBrowserHistory(useBrowserHistory: boolean): BundlerTestAppSiteReact;

  /**
   * Contains the user object in the redux store. It stores the logged in user's information
   */
  readonly user?: User | null;
  withUser(user: IUser | null): BundlerTestAppSiteReact;

  readonly userContext?: UiSdlUserContext | null;
  withUserContext(userContext: IUiSdlUserContext | null): BundlerTestAppSiteReact;

  /**
   * Contains the configs object in the redux store. It stores the site configuration information
   */
  readonly configs?: C3.Map<string | null, any>;
  withConfigs(configs: C3.Map<string | null, any> | {[key: string | null]: any}): BundlerTestAppSiteReact;

  readonly bundlerType?: string | null;
  withBundlerType(bundlerType: string | null): BundlerTestAppSiteReact;

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
  static fromJson(json: any | null): BundlerTestAppSiteReact | null;

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
  static fromJsonString(json: string | null): BundlerTestAppSiteReact | null;

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
  static fromXmlString(xml: string | null): BundlerTestAppSiteReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): BundlerTestAppSiteReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BundlerTestAppSiteReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BundlerTestAppSiteReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BundlerTestAppSiteReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BundlerTestAppSiteReact | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BundlerTestAppSiteReact | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): BundlerTestAppSiteReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BundlerTestAppSiteReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BundlerTestAppSiteReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): BundlerTestAppSiteReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): BundlerTestAppSiteReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): BundlerTestAppSiteReact;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): BundlerTestAppSiteReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BundlerTestAppSiteReact;

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
  withoutFieldAtPath(path: string): BundlerTestAppSiteReact;

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
  withoutField(field: string | null): BundlerTestAppSiteReact;

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
  withoutField(field: FieldType | null): BundlerTestAppSiteReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): BundlerTestAppSiteReact;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): BundlerTestAppSiteReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): BundlerTestAppSiteReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): BundlerTestAppSiteReact;

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
  defaultField(field: string): BundlerTestAppSiteReact;

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
  defaultField(field: FieldType): BundlerTestAppSiteReact;

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
  unsetField(field: string): BundlerTestAppSiteReact;

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
  unsetField(field: FieldType): BundlerTestAppSiteReact;

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
  removeField(field: string): BundlerTestAppSiteReact;

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
  removeField(field: FieldType): BundlerTestAppSiteReact;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): BundlerTestAppSiteReact;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): BundlerTestAppSiteReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): BundlerTestAppSiteReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): BundlerTestAppSiteReact;

  mergeJson(json: any | null): BundlerTestAppSiteReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): BundlerTestAppSiteReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): BundlerTestAppSiteReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<BundlerTestAppSiteReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<BundlerTestAppSiteReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<BundlerTestAppSiteReact | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<BundlerTestAppSiteReact | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<BundlerTestAppSiteReact | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, BundlerTestAppSiteReact | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, BundlerTestAppSiteReact | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<BundlerTestAppSiteReact | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<BundlerTestAppSiteReact | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): BundlerTestAppSiteReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): BundlerTestAppSiteReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): BundlerTestAppSiteReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): BundlerTestAppSiteReact;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): BundlerTestAppSiteReact;

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
  static make(fields: any, withDefaults?: boolean): BundlerTestAppSiteReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): BundlerTestAppSiteReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): BundlerTestAppSiteReact;

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
  afterMake(): BundlerTestAppSiteReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): BundlerTestAppSiteReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<BundlerTestAppSiteReact>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): BundlerTestAppSiteReact;

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
  static render(props?: BundlerTestAppSiteReact | null): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<BundlerTestAppSiteReact | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<BundlerTestAppSiteReact | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<BundlerTestAppSiteReact | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<BundlerTestAppSiteReact | null> | null>;

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
  dependencies(): MetadataDeps<BundlerTestAppSiteReact | null>;

  save(subPath?: string | null, contentType?: string | null): BundlerTestAppSiteReact;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: BundlerTestAppSiteReact | null, spec?: UpsertSpec | null): BundlerTestAppSiteReact | null;

  upsert(srcObj?: BundlerTestAppSiteReact | null, spec?: UpsertSpec | null): BundlerTestAppSiteReact | null;

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
  static fromString(s: string | null): BundlerTestAppSiteReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): BundlerTestAppSiteReact | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: BundlerTestAppSiteReact, state: UiSdlReduxState): BundlerTestAppSiteReact | null;

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
  static onUnhandledRoute(route?: string | null): void;

  /**
   * Function to start a worker and updated the {@link UiSdlSite#webWorkers} field.
   * @param workerId
   *            the id of the worker.
   * @param workerType
   *            the type name of the worker to be started, ex. {@link UiSdlTypeWorker}. If no type is provided, it will
   *            use the base type
   * @return the {@link UiSdlWebWorker} instance that was started
   */
  startWorker(workerId: string, workerType?: string | null): C3.Promise<UiSdlWebWorker | null> | null;

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
  startTypeWorker(tunnelConfiguration?: UiSdlTunnelConfiguration | null, workerId?: string | null, workerType?: string | null, forceReloadTypes?: boolean, timeout?: number | null): C3.Promise<UiSdlWebWorker | null> | null;

  /**
   * Triggered whenever the global user information needs to be fetched from the server.
   * @param id
   *            Id of the component.
   *
   * @return a 'USER_GET' action for this instance with empty payload
   */
  static getUserAction(id?: string | null): UiSdlUserGetAction | null;

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
  static initUserAction(id?: string | null, user?: User | null): UiSdlUserInitAction | null;

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
  static initUserContextAction(id?: string | null, user?: UiSdlUserContext | null): UiSdlUserContextInitAction | null;

  /**
   * Triggered whenever there is a chunk loading error caused by a user logout.
   * @param id
   *           Id of the component.
   *
   * @return an 'USER_SESSION_EXPIRED' action for this instance.
   */
  static expiredUserSessionAction(id?: string | null): UiSdlUserSessionExpiredAction | null;

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
  static setPageParamsAction(id?: string | null, pageParams?: C3.Map<string | null, string | null | C3.Array<string | null> | null>): UiSdlPageParamsSetAction | null;

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
  static setCurrentPathAction(id?: string | null, currentPath?: string | null): UiSdlCurrentPathSetAction | null;

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
  static confirmPathAndPageParamsAction(id?: string | null, currentPath?: string | null, pageParams?: C3.Map<string | null, string | null | C3.Array<string | null> | null>): UiSdlPathAndPageParamsConfirmAction | null;

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
  static setTunnelConfigurationAction(id?: string | null, tunnelConfiguration?: UiSdlTunnelConfiguration | null): UiSdlTunnelConfigurationSetAction;

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
  static setConfigAction(siteId: string, typeName: string, configPath: string, configId?: string | null, value?: any): UiSdlConfigSetAction;

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
  static setRoutesAction(id?: string | null, routes?: C3.Array<UiSdlRoute | null>): UiSdlRoutesSetAction;

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
  static getConfigAction(siteId: string, typeName: string, configPath: string, configId?: string | null): UiSdlConfigGetAction;

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
  static userGetEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `CHUNK_LOADING_ERROR` and returns an action to handle the error
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static chunkLoadingErrorEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

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
  static userSessionExpiredEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type `CONFIG_GET`, internally gets the configuration and then sets it in the redux state.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   * @returns an UiSdlObservable action stream
   */
  static configGetEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

  /**
   * Listens for actions of type INACTIVITY_WARNING_MODAL_SHOW and returns the action to show the modal component
   * specified in the inactivityWarningModal field.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   * @returns an UiSdlObservable action stream of inactivityWarningModal.openCloseModalAction to open the modal
   */
  static showInactivityWarningModalEpic(actionStream?: UiSdlActionsObservable | null, stateStream?: UiSdlStatesObservable | null): UiSdlActionsObservable | null;

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
  static getRoutesFromState(siteId: string, state: UiSdlReduxState): C3.Array<UiSdlRoute | null>;

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
