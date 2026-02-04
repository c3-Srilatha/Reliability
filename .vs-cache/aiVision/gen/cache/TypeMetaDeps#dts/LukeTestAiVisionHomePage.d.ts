// TypeScript definitions for the C3 type LukeTestAiVisionHomePage

/**
 * Representation of AiVisionHomePage for testing purposes.
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeTestAiVisionHomePage
 */
declare interface ILukeTestAiVisionHomePage {

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
   * e.g. workbench.DataExplorerPage in
   * /Users/blakehowell/c3/c3base/base/tools/ui/C3Tools/pages/DataExplorer.c3ui
   */
  pageComponentId?: string | null;

  /**
   * Default user name
   */
  username?: string | null;

  /**
   * Default password
   */
  password?: string | null;

  /**
   * The path of URL. The path is rendered with `pathParams` to support dynamic paths.
   * Examples: `dashboard`, `/ai-studio/projects/show/{{projectId}}/exMachina/{{id}}`
   */
  path?: string | null;

  domain?: string | null;

  /**
   * Base url (possibly a vanity url) to access the page.
   * Example: `http://localhost:8080` and `https://pacificOcean.c3iot.com`
   */
  baseUrl?: string | null;

  /**
   * Parameters to populate the path with.
   * The keys must match the variables used inside `path` template field.
   * The values replace the variables used inside `path` template field when `getUrl` is called.
   */
  pathParams?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * Id of page record. For example, "1234".
   *
   * If domain is `https://pacificOcean.c3iot.com/`, path is `sharkWatch/recommendation,
   * paramsId is `4548a40d`, the full URL will be
   * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d`
   *
   * paramsId is also referred to as `filename`, as specified in https://www.w3schools.com/html/html_urlencode.asp/.
   * For example, as in the url `scheme://prefix.domain:port/path/filename`
   */
  paramsId?: string | null;

  /**
   * Parameters that are passed as query params to the page. For example, if the the full URL is
   * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp`,
   * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation/{{paramsId}},
   * pathParams should be {paramsId: '4548a40d'}, and the additionalParams should be {endangered: true, teeth: 'sharp'}.
   */
  additionalParams?: any | null;

  /**
   * The fragment that need to be passed to the page. For example, if the the full URL is
   * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp#pacific`,
   * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation,
   * paramsId should be `4548a40d`,and the additionalParams are endangered=true&teeth=sharp
   * and the fragment is pacific. Pass the raw fragment here, since it will be encoded internally
   */
  fragment?: string | null;

  /**
   * The title of the page
   */
  title?: string | null;

  /**
   * Modal element
   */
  modalElement?: string | null;

  /**
   * Element of modal title
   */
  modalTitleElement?: string | null;

  /**
   * Element of modal body
   */
  modalBodyElement?: string | null;

  /**
   * Element that contains the breadcrumbs on the page
   */
  breadcrumbsEl?: string | null;

  /**
   * Selector for side sub menu minimize button
   * The button has the same class '.btn-minimize' regardless of whether or not the menu is minimized
   */
  sideSubMenuMinimizeButtonEl?: string | null;

  /**
   * Selector for side sub menu container
   */
  sideSubMenuContainerEl?: string | null;

  /**
   * Selector for side sub menu nav container, which are children of {@see sideSubMenuContainerEl}
   */
  sideSubMenuNavContainerEl?: string | null;

  /**
   * Dependency crumbs element
   */
  dependencyCrumbsEl?: string | null;

  /**
   * Selector for items in the side sub menu
   */
  sideSubMenuItemEl?: string | null;

  /**
   * Side menu collapse button
   */
  sideMenuCollapseButton?: string | null;

  /**
   * The id of the {@link PageGroup} for this page
   */
  pageGroup?: string | null;

  /**
   * The selector of the content frame.
   */
  contentFrameSelector?: string | null;

  /**
   * The selector of the content frame title.
   */
  contentFrameTitleSelector?: string | null;

  /**
   * The selector of the content frame segments.
   */
  contentFrameSegmentsSelector?: string | null;

  /**
   * The selector of the content frame first segment title.
   */
  contentFrameFirstSegmentTitleSelector?: string | null;

  /**
   * The selector of the content frame first segment buttons.
   */
  contentFrameFirstSegmentButtonsSelector?: string | null;

  /**
   * The selector of the content frame second segment title.
   */
  contentFrameSecSegmentTitleSelector?: string | null;

  /**
   * The selector of the content frame second segment content.
   */
  contentFrameSecSegmentContentSelector?: string | null;

  /**
   * The selector of the Cesuim viewer.
   */
  cesiumViewerSelector?: string | null;

  /**
   * The selector of the Legend wrapper.
   */
  legendWrapperSelector?: string | null;

  /**
   * The selector of the Legend title.
   */
  legendTitleSelector?: string | null;

  /**
   * The selector of the Legend groups.
   */
  legendGroupsSelector?: string | null;

  /**
   * The selector of the Map controls.
   */
  mapControlsSelector?: string | null;

  /**
   * The selector of the location wrapper.
   */
  locationWrapperSelector?: string | null;

  /**
   * The selector of the location button.
   */
  locationButtonSelector?: string | null;

  /**
   * The selector of the location input.
   */
  locationInputSelector?: string | null;

  /**
   * The selector of the map angle.
   */
  mapAngleSelector?: string | null;

  /**
   * The selector of the dropdown map angle.
   */
  dropdownMapAngleSelector?: string | null;

  /**
   * The selector of the navigation controls.
   */
  navigationControlSelector?: string | null;

  /**
   * The selector of the zoom in and zoom out buttons.
   */
  navigationZoomSelector?: string | null;

  /**
   * The selector of the timeline.
   */
  timelineSelector?: string | null;

  /**
   * The selector of the speed timeline control.
   */
  speedControlSelector?: string | null;

  /**
   * The selector of the play button.
   */
  playButtonSelector?: string | null;

  /**
   * The selector of the pause button.
   */
  pauseButtonSelector?: string | null;

  /**
   * The selector of the tooltip.
   */
  tooltipSelector?: string | null;
}

/**
 * Representation of AiVisionHomePage for testing purposes.
 *
 * @remarks this represents a made instance of LukeTestAiVisionHomePage
 */
declare class LukeTestAiVisionHomePage extends Obj {

  /**
   * The Luke instance attached to this component.
   */
  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestAiVisionHomePage;

  /**
   * A parent selector that can be used to distinguish between multiple instances of a component within a page.
   * This can be leveraged to create 1-to-1 mappings between {@link UITestComponent}s so that functions
   * called on a component are limited only to the scope of that component in the UI.
   */
  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The spinner that masks the component when data is loading
   */
  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestAiVisionHomePage;

  /**
   * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
   * for within the {@link #parentSelector}.
   */
  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestAiVisionHomePage;

  /**
   * The maximum amount of time that Luke will retry an action
   */
  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestAiVisionHomePage;

  /**
   * e.g. workbench.DataExplorerPage in
   * /Users/blakehowell/c3/c3base/base/tools/ui/C3Tools/pages/DataExplorer.c3ui
   */
  readonly pageComponentId?: string | null;
  withPageComponentId(pageComponentId: string | null): LukeTestAiVisionHomePage;

  /**
   * Default user name
   */
  readonly username?: string | null;
  withUsername(username: string | null): LukeTestAiVisionHomePage;

  /**
   * Default password
   */
  readonly password?: string | null;
  withPassword(password: string | null): LukeTestAiVisionHomePage;

  /**
   * The path of URL. The path is rendered with `pathParams` to support dynamic paths.
   * Examples: `dashboard`, `/ai-studio/projects/show/{{projectId}}/exMachina/{{id}}`
   */
  readonly path?: string | null;
  withPath(path: string | null): LukeTestAiVisionHomePage;

  readonly domain?: string | null;
  withDomain(domain: string | null): LukeTestAiVisionHomePage;

  /**
   * Base url (possibly a vanity url) to access the page.
   * Example: `http://localhost:8080` and `https://pacificOcean.c3iot.com`
   */
  readonly baseUrl?: string | null;
  withBaseUrl(baseUrl: string | null): LukeTestAiVisionHomePage;

  /**
   * Parameters to populate the path with.
   * The keys must match the variables used inside `path` template field.
   * The values replace the variables used inside `path` template field when `getUrl` is called.
   */
  readonly pathParams?: C3.Map<string | null, string | null>;
  withPathParams(pathParams: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LukeTestAiVisionHomePage;

  /**
   * Id of page record. For example, "1234".
   *
   * If domain is `https://pacificOcean.c3iot.com/`, path is `sharkWatch/recommendation,
   * paramsId is `4548a40d`, the full URL will be
   * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d`
   *
   * paramsId is also referred to as `filename`, as specified in https://www.w3schools.com/html/html_urlencode.asp/.
   * For example, as in the url `scheme://prefix.domain:port/path/filename`
   */
  readonly paramsId?: string | null;
  withParamsId(paramsId: string | null): LukeTestAiVisionHomePage;

  /**
   * Parameters that are passed as query params to the page. For example, if the the full URL is
   * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp`,
   * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation/{{paramsId}},
   * pathParams should be {paramsId: '4548a40d'}, and the additionalParams should be {endangered: true, teeth: 'sharp'}.
   */
  readonly additionalParams?: any | null;
  withAdditionalParams(additionalParams: any | null): LukeTestAiVisionHomePage;

  /**
   * The fragment that need to be passed to the page. For example, if the the full URL is
   * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp#pacific`,
   * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation,
   * paramsId should be `4548a40d`,and the additionalParams are endangered=true&teeth=sharp
   * and the fragment is pacific. Pass the raw fragment here, since it will be encoded internally
   */
  readonly fragment?: string | null;
  withFragment(fragment: string | null): LukeTestAiVisionHomePage;

  /**
   * The title of the page
   */
  readonly title?: string | null;
  withTitle(title: string | null): LukeTestAiVisionHomePage;

  /**
   * Modal element
   */
  readonly modalElement?: string | null;
  withModalElement(modalElement: string | null): LukeTestAiVisionHomePage;

  /**
   * Element of modal title
   */
  readonly modalTitleElement?: string | null;
  withModalTitleElement(modalTitleElement: string | null): LukeTestAiVisionHomePage;

  /**
   * Element of modal body
   */
  readonly modalBodyElement?: string | null;
  withModalBodyElement(modalBodyElement: string | null): LukeTestAiVisionHomePage;

  /**
   * Element that contains the breadcrumbs on the page
   */
  readonly breadcrumbsEl?: string | null;
  withBreadcrumbsEl(breadcrumbsEl: string | null): LukeTestAiVisionHomePage;

  /**
   * Selector for side sub menu minimize button
   * The button has the same class '.btn-minimize' regardless of whether or not the menu is minimized
   */
  readonly sideSubMenuMinimizeButtonEl?: string | null;
  withSideSubMenuMinimizeButtonEl(sideSubMenuMinimizeButtonEl: string | null): LukeTestAiVisionHomePage;

  /**
   * Selector for side sub menu container
   */
  readonly sideSubMenuContainerEl?: string | null;
  withSideSubMenuContainerEl(sideSubMenuContainerEl: string | null): LukeTestAiVisionHomePage;

  /**
   * Selector for side sub menu nav container, which are children of {@see sideSubMenuContainerEl}
   */
  readonly sideSubMenuNavContainerEl?: string | null;
  withSideSubMenuNavContainerEl(sideSubMenuNavContainerEl: string | null): LukeTestAiVisionHomePage;

  /**
   * Dependency crumbs element
   */
  readonly dependencyCrumbsEl?: string | null;
  withDependencyCrumbsEl(dependencyCrumbsEl: string | null): LukeTestAiVisionHomePage;

  /**
   * Selector for items in the side sub menu
   */
  readonly sideSubMenuItemEl?: string | null;
  withSideSubMenuItemEl(sideSubMenuItemEl: string | null): LukeTestAiVisionHomePage;

  /**
   * Side menu collapse button
   */
  readonly sideMenuCollapseButton?: string | null;
  withSideMenuCollapseButton(sideMenuCollapseButton: string | null): LukeTestAiVisionHomePage;

  /**
   * The id of the {@link PageGroup} for this page
   */
  readonly pageGroup?: string | null;
  withPageGroup(pageGroup: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the content frame.
   */
  readonly contentFrameSelector?: string | null;
  withContentFrameSelector(contentFrameSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the content frame title.
   */
  readonly contentFrameTitleSelector?: string | null;
  withContentFrameTitleSelector(contentFrameTitleSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the content frame segments.
   */
  readonly contentFrameSegmentsSelector?: string | null;
  withContentFrameSegmentsSelector(contentFrameSegmentsSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the content frame first segment title.
   */
  readonly contentFrameFirstSegmentTitleSelector?: string | null;
  withContentFrameFirstSegmentTitleSelector(contentFrameFirstSegmentTitleSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the content frame first segment buttons.
   */
  readonly contentFrameFirstSegmentButtonsSelector?: string | null;
  withContentFrameFirstSegmentButtonsSelector(contentFrameFirstSegmentButtonsSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the content frame second segment title.
   */
  readonly contentFrameSecSegmentTitleSelector?: string | null;
  withContentFrameSecSegmentTitleSelector(contentFrameSecSegmentTitleSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the content frame second segment content.
   */
  readonly contentFrameSecSegmentContentSelector?: string | null;
  withContentFrameSecSegmentContentSelector(contentFrameSecSegmentContentSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the Cesuim viewer.
   */
  readonly cesiumViewerSelector?: string | null;
  withCesiumViewerSelector(cesiumViewerSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the Legend wrapper.
   */
  readonly legendWrapperSelector?: string | null;
  withLegendWrapperSelector(legendWrapperSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the Legend title.
   */
  readonly legendTitleSelector?: string | null;
  withLegendTitleSelector(legendTitleSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the Legend groups.
   */
  readonly legendGroupsSelector?: string | null;
  withLegendGroupsSelector(legendGroupsSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the Map controls.
   */
  readonly mapControlsSelector?: string | null;
  withMapControlsSelector(mapControlsSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the location wrapper.
   */
  readonly locationWrapperSelector?: string | null;
  withLocationWrapperSelector(locationWrapperSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the location button.
   */
  readonly locationButtonSelector?: string | null;
  withLocationButtonSelector(locationButtonSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the location input.
   */
  readonly locationInputSelector?: string | null;
  withLocationInputSelector(locationInputSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the map angle.
   */
  readonly mapAngleSelector?: string | null;
  withMapAngleSelector(mapAngleSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the dropdown map angle.
   */
  readonly dropdownMapAngleSelector?: string | null;
  withDropdownMapAngleSelector(dropdownMapAngleSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the navigation controls.
   */
  readonly navigationControlSelector?: string | null;
  withNavigationControlSelector(navigationControlSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the zoom in and zoom out buttons.
   */
  readonly navigationZoomSelector?: string | null;
  withNavigationZoomSelector(navigationZoomSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the timeline.
   */
  readonly timelineSelector?: string | null;
  withTimelineSelector(timelineSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the speed timeline control.
   */
  readonly speedControlSelector?: string | null;
  withSpeedControlSelector(speedControlSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the play button.
   */
  readonly playButtonSelector?: string | null;
  withPlayButtonSelector(playButtonSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the pause button.
   */
  readonly pauseButtonSelector?: string | null;
  withPauseButtonSelector(pauseButtonSelector: string | null): LukeTestAiVisionHomePage;

  /**
   * The selector of the tooltip.
   */
  readonly tooltipSelector?: string | null;
  withTooltipSelector(tooltipSelector: string | null): LukeTestAiVisionHomePage;

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
  static fromJson(json: any | null): LukeTestAiVisionHomePage | null;

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
  static fromJsonString(json: string | null): LukeTestAiVisionHomePage | null;

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
  static fromXmlString(xml: string | null): LukeTestAiVisionHomePage | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeTestAiVisionHomePage | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeTestAiVisionHomePage;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestAiVisionHomePage;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestAiVisionHomePage;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestAiVisionHomePage | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestAiVisionHomePage | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeTestAiVisionHomePage;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestAiVisionHomePage;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestAiVisionHomePage;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeTestAiVisionHomePage;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeTestAiVisionHomePage;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeTestAiVisionHomePage;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeTestAiVisionHomePage;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeTestAiVisionHomePage;

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
  withoutFieldAtPath(path: string): LukeTestAiVisionHomePage;

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
  withoutField(field: string | null): LukeTestAiVisionHomePage;

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
  withoutField(field: FieldType | null): LukeTestAiVisionHomePage;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeTestAiVisionHomePage;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeTestAiVisionHomePage;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeTestAiVisionHomePage;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeTestAiVisionHomePage;

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
  defaultField(field: string): LukeTestAiVisionHomePage;

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
  defaultField(field: FieldType): LukeTestAiVisionHomePage;

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
  unsetField(field: string): LukeTestAiVisionHomePage;

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
  unsetField(field: FieldType): LukeTestAiVisionHomePage;

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
  removeField(field: string): LukeTestAiVisionHomePage;

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
  removeField(field: FieldType): LukeTestAiVisionHomePage;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeTestAiVisionHomePage;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeTestAiVisionHomePage;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeTestAiVisionHomePage;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeTestAiVisionHomePage;

  mergeJson(json: any | null): LukeTestAiVisionHomePage;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeTestAiVisionHomePage;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeTestAiVisionHomePage;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeTestAiVisionHomePage | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeTestAiVisionHomePage | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeTestAiVisionHomePage | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeTestAiVisionHomePage | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeTestAiVisionHomePage | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeTestAiVisionHomePage | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeTestAiVisionHomePage | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeTestAiVisionHomePage | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeTestAiVisionHomePage | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeTestAiVisionHomePage;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeTestAiVisionHomePage;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeTestAiVisionHomePage;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeTestAiVisionHomePage;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeTestAiVisionHomePage;

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
  static make(fields: any, withDefaults?: boolean): LukeTestAiVisionHomePage;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeTestAiVisionHomePage;

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
  afterMake(): LukeTestAiVisionHomePage;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeTestAiVisionHomePage;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeTestAiVisionHomePage>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeTestAiVisionHomePage;

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
   * Opens the page without any unnecessary wait logic so that its load time can be measured
   */
  openForMeasuringLoadTime(): void;

  /**
   * Open page function using credential specified by {@link username} and {@link password}. When using {@link LukeBrowser}
   * engine, the username and password will be used as login only if the url of the page has a different domain from the
   * Luke Playground page. That means if you want to use a special user account for testing UI hosted on the same server as Luke Playground,
   * you will need to create a {@link VanityUrl} with a different domain. For example, if Luke Playground is hosted at http://localhost:8080/index_browser.html,
   * and your UI is hosted at http://localhost:8080/my-app, the UI page will always have the same login as the Luke Playground, because they are of the same domain.
   * In order to use a different login for testing, you can create a vanity url with a different domain (for instance, http://my-ui:8080/my-app).
   * As such, a different login can be used for testing the UI. This restriction does not exist in cross-domain / cross-server testing.
   *
   * Note that, like any other Luke API, openPage is asynchronous. It basically schedules a retriable task
   * to open the page in the future. If the API is not run in a context where {@link Luke#run} gets triggered
   * automatically (e.g. in {@link LukeCore#runJasmine}), you will need to call {@link Luke#run} to trigger the run.
   */
  openPage(): void;

  /**
   * Get the url of this page
   */
  getUrl(): string | null;

  /**
   * Returns the value of the content frame selector.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the content frame.
   */
  getContentFrame(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the content frame title.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the content frame title.
   */
  getContentFrameTitle(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the content frame segments.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the content frame segments.
   */
  getContentFrameSegments(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the content frame first segment title.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the content frame first segment title.
   */
  getContentFrameFirstSegmentTitle(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the content frame first segment buttons.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the content frame first segment buttons.
   */
  getContentFrameFirstSegmentButtons(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the content frame second segment title.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the content frame second segment title.
   */
  getContentFrameSecSegmentTitle(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the content frame second segment content.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the content frame second segment content.
   */
  getContentFrameSecSegmentContent(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the Cesuim viewer.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the Cesuim viewer.
   */
  getCesiumViewer(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the Legend wrapper.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the Legend wrapper.
   */
  getLegendWrapper(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the Legend title.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the Legend title.
   */
  getLegendTitle(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the Legend groups.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the Legend groups.
   */
  getLegendGroups(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the Map controls.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the Map controls.
   */
  getMapControls(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the location wrapper.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the location wrapper.
   */
  getLocationWrapper(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the location button.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the location button.
   */
  getLocationButton(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the location input.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the location input.
   */
  getLocationInput(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the map angle.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the map angle.
   */
  getMapAngle(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the dropdown map angle.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the dropdown map angle.
   */
  getDropdownMapAngle(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the navigation controls.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the navigation controls.
   */
  getNavigationControl(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the navigation zoom.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the navigation zoom.
   */
  getNavigationZoom(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the timeline.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the timeline.
   */
  getTimeline(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the speed control.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the speed control.
   */
  getSpeedControl(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the play button.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the play button.
   */
  getPlayButton(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the pause button.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the pause button.
   */
  getPauseButton(): LukeAsyncQueueNode | null;

  /**
   * Returns the value of the tooltip.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved with the tooltip.
   */
  getTooltip(): LukeAsyncQueueNode | null;

  /**
   * Clicks the play timeline button.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved after the button is clicked.
   */
  playTimeline(): LukeAsyncQueueNode | null;

  /**
   * Clicks map angle control button.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved after the button is clicked.
   */
  openMapAngleOptions(): LukeAsyncQueueNode | null;

  /**
   * Clicks the search location button.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved after the input is clicked.
   */
  clickSearchLocation(): LukeAsyncQueueNode | null;

  /**
   * Waits the execution for a period of time
   */
  wait(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Moves the mouse around the cesium viewer.
   *
   * @returns a {@link LukeAsyncQueueNode} that will be resolved after the mouse is moved.
   */
  moveAroundViewer(): LukeAsyncQueueNode | null;
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
