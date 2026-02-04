// TypeScript definitions for the C3 type Genai.LukeTestPage

/**
 * Utility Type for GenAi Luke tests.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.LukeTestPage
 */
declare namespace Genai {
  export interface ILukeTestPage {

    /**
     * The Luke instance attached to this component.
     */
    luke: ILukeBrowser;

    /**
     * A parent selector that can be used to distinguish between multiple instances of a component within a page.
     * This can be leveraged to create 1-to-1 mappings between {@link UITestComponent}s so that functions
     * called on a component are limited only to the scope of that component in the UI.
     */
    parentSelector?: string;

    /**
     * The spinner that masks the component when data is loading
     */
    spinner?: string;

    /**
     * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
     * for within the {@link #parentSelector}.
     */
    renderingSelectors?: Array_Type<string> | Array<string>;

    /**
     * The maximum amount of time that Luke will retry an action
     */
    timeout?: number;

    /**
     * e.g. workbench.DataExplorerPage in
     * /Users/blakehowell/c3/c3base/base/tools/ui/C3Tools/pages/DataExplorer.c3ui
     */
    pageComponentId?: string;

    /**
     * Default user name
     */
    username?: string;

    /**
     * Default password
     */
    password?: string;

    /**
     * The path of URL. The path is rendered with `pathParams` to support dynamic paths.
     * Examples: `dashboard`, `/ai-studio/projects/show/{{projectId}}/exMachina/{{id}}`
     */
    path?: string;

    domain?: string;

    /**
     * Base url (possibly a vanity url) to access the page.
     * Example: `http://localhost:8080` and `https://pacificOcean.c3iot.com`
     */
    baseUrl?: string;

    /**
     * Parameters to populate the path with.
     * The keys must match the variables used inside `path` template field.
     * The values replace the variables used inside `path` template field when `getUrl` is called.
     */
    pathParams?: Map_Type<string, string> | {[key: string]: string};

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
    paramsId?: string;

    /**
     * Parameters that are passed as query params to the page. For example, if the the full URL is
     * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp`,
     * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation/{{paramsId}},
     * pathParams should be {paramsId: '4548a40d'}, and the additionalParams should be {endangered: true, teeth: 'sharp'}.
     */
    additionalParams?: any;

    /**
     * The fragment that need to be passed to the page. For example, if the the full URL is
     * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp#pacific`,
     * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation,
     * paramsId should be `4548a40d`,and the additionalParams are endangered=true&teeth=sharp
     * and the fragment is pacific. Pass the raw fragment here, since it will be encoded internally
     */
    fragment?: string;

    /**
     * The title of the page
     */
    title?: string;

    /**
     * Modal element
     */
    modalElement?: string;

    /**
     * Element of modal title
     */
    modalTitleElement?: string;

    /**
     * Element of modal body
     */
    modalBodyElement?: string;

    /**
     * Element that contains the breadcrumbs on the page
     */
    breadcrumbsEl?: string;

    /**
     * Selector for side sub menu minimize button
     * The button has the same class '.btn-minimize' regardless of whether or not the menu is minimized
     */
    sideSubMenuMinimizeButtonEl?: string;

    /**
     * Selector for side sub menu container
     */
    sideSubMenuContainerEl?: string;

    /**
     * Selector for side sub menu nav container, which are children of {@see sideSubMenuContainerEl}
     */
    sideSubMenuNavContainerEl?: string;

    /**
     * Dependency crumbs element
     */
    dependencyCrumbsEl?: string;

    /**
     * Selector for items in the side sub menu
     */
    sideSubMenuItemEl?: string;

    /**
     * Side menu collapse button
     */
    sideMenuCollapseButton?: string;

    /**
     * The id of the {@link PageGroup} for this page
     */
    pageGroup?: string;
  }
}

/**
 * Utility Type for GenAi Luke tests.
 *
 * @remarks this represents a made instance of Genai.LukeTestPage
 */
declare namespace Genai {
  export class LukeTestPage extends Obj  {

    /**
     * The Luke instance attached to this component.
     */
    readonly luke: LukeBrowser;
    withLuke(luke: ILukeBrowser): Genai.LukeTestPage;

    /**
     * A parent selector that can be used to distinguish between multiple instances of a component within a page.
     * This can be leveraged to create 1-to-1 mappings between {@link UITestComponent}s so that functions
     * called on a component are limited only to the scope of that component in the UI.
     */
    readonly parentSelector?: string;
    withParentSelector(parentSelector: string | null): Genai.LukeTestPage;

    /**
     * The spinner that masks the component when data is loading
     */
    readonly spinner?: string;
    withSpinner(spinner: string | null): Genai.LukeTestPage;

    /**
     * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
     * for within the {@link #parentSelector}.
     */
    readonly renderingSelectors?: Array_Type<string>;
    withRenderingSelectors(renderingSelectors: Array_Type<string> | Array<string> | null): Genai.LukeTestPage;

    /**
     * The maximum amount of time that Luke will retry an action
     */
    readonly timeout?: number;
    withTimeout(timeout: number | null): Genai.LukeTestPage;

    /**
     * e.g. workbench.DataExplorerPage in
     * /Users/blakehowell/c3/c3base/base/tools/ui/C3Tools/pages/DataExplorer.c3ui
     */
    readonly pageComponentId?: string;
    withPageComponentId(pageComponentId: string | null): Genai.LukeTestPage;

    /**
     * Default user name
     */
    readonly username?: string;
    withUsername(username: string | null): Genai.LukeTestPage;

    /**
     * Default password
     */
    readonly password?: string;
    withPassword(password: string | null): Genai.LukeTestPage;

    /**
     * The path of URL. The path is rendered with `pathParams` to support dynamic paths.
     * Examples: `dashboard`, `/ai-studio/projects/show/{{projectId}}/exMachina/{{id}}`
     */
    readonly path?: string;
    withPath(path: string | null): Genai.LukeTestPage;

    readonly domain?: string;
    withDomain(domain: string | null): Genai.LukeTestPage;

    /**
     * Base url (possibly a vanity url) to access the page.
     * Example: `http://localhost:8080` and `https://pacificOcean.c3iot.com`
     */
    readonly baseUrl?: string;
    withBaseUrl(baseUrl: string | null): Genai.LukeTestPage;

    /**
     * Parameters to populate the path with.
     * The keys must match the variables used inside `path` template field.
     * The values replace the variables used inside `path` template field when `getUrl` is called.
     */
    readonly pathParams?: Map_Type<string, string>;
    withPathParams(pathParams: Map_Type<string, string> | {[key: string]: string} | null): Genai.LukeTestPage;

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
    readonly paramsId?: string;
    withParamsId(paramsId: string | null): Genai.LukeTestPage;

    /**
     * Parameters that are passed as query params to the page. For example, if the the full URL is
     * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp`,
     * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation/{{paramsId}},
     * pathParams should be {paramsId: '4548a40d'}, and the additionalParams should be {endangered: true, teeth: 'sharp'}.
     */
    readonly additionalParams?: any;
    withAdditionalParams(additionalParams: any | null): Genai.LukeTestPage;

    /**
     * The fragment that need to be passed to the page. For example, if the the full URL is
     * `https://pacificOcean.c3iot.com/sharkWatch/recommendation/4548a40d?endagered=true&teeth=sharp#pacific`,
     * then domain should be `https://pacificOcean.c3iot.com/`, path should be `sharkWatch/recommendation,
     * paramsId should be `4548a40d`,and the additionalParams are endangered=true&teeth=sharp
     * and the fragment is pacific. Pass the raw fragment here, since it will be encoded internally
     */
    readonly fragment?: string;
    withFragment(fragment: string | null): Genai.LukeTestPage;

    /**
     * The title of the page
     */
    readonly title?: string;
    withTitle(title: string | null): Genai.LukeTestPage;

    /**
     * Modal element
     */
    readonly modalElement?: string;
    withModalElement(modalElement: string | null): Genai.LukeTestPage;

    /**
     * Element of modal title
     */
    readonly modalTitleElement?: string;
    withModalTitleElement(modalTitleElement: string | null): Genai.LukeTestPage;

    /**
     * Element of modal body
     */
    readonly modalBodyElement?: string;
    withModalBodyElement(modalBodyElement: string | null): Genai.LukeTestPage;

    /**
     * Element that contains the breadcrumbs on the page
     */
    readonly breadcrumbsEl?: string;
    withBreadcrumbsEl(breadcrumbsEl: string | null): Genai.LukeTestPage;

    /**
     * Selector for side sub menu minimize button
     * The button has the same class '.btn-minimize' regardless of whether or not the menu is minimized
     */
    readonly sideSubMenuMinimizeButtonEl?: string;
    withSideSubMenuMinimizeButtonEl(sideSubMenuMinimizeButtonEl: string | null): Genai.LukeTestPage;

    /**
     * Selector for side sub menu container
     */
    readonly sideSubMenuContainerEl?: string;
    withSideSubMenuContainerEl(sideSubMenuContainerEl: string | null): Genai.LukeTestPage;

    /**
     * Selector for side sub menu nav container, which are children of {@see sideSubMenuContainerEl}
     */
    readonly sideSubMenuNavContainerEl?: string;
    withSideSubMenuNavContainerEl(sideSubMenuNavContainerEl: string | null): Genai.LukeTestPage;

    /**
     * Dependency crumbs element
     */
    readonly dependencyCrumbsEl?: string;
    withDependencyCrumbsEl(dependencyCrumbsEl: string | null): Genai.LukeTestPage;

    /**
     * Selector for items in the side sub menu
     */
    readonly sideSubMenuItemEl?: string;
    withSideSubMenuItemEl(sideSubMenuItemEl: string | null): Genai.LukeTestPage;

    /**
     * Side menu collapse button
     */
    readonly sideMenuCollapseButton?: string;
    withSideMenuCollapseButton(sideMenuCollapseButton: string | null): Genai.LukeTestPage;

    /**
     * The id of the {@link PageGroup} for this page
     */
    readonly pageGroup?: string;
    withPageGroup(pageGroup: string | null): Genai.LukeTestPage;

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
    static fromJson(json: any): Genai.LukeTestPage | null;

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
    static fromJsonString(json: string): Genai.LukeTestPage | null;

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
    static fromXmlString(xml: string): Genai.LukeTestPage | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.LukeTestPage | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.LukeTestPage;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.LukeTestPage;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.LukeTestPage;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.LukeTestPage>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.LukeTestPage>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.LukeTestPage;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.LukeTestPage;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.LukeTestPage;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.LukeTestPage;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.LukeTestPage;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.LukeTestPage;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.LukeTestPage;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.LukeTestPage;

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
    withoutFieldAtPath(path: string): Genai.LukeTestPage;

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
    withoutField(field: string): Genai.LukeTestPage;

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
    withoutField(field: FieldType): Genai.LukeTestPage;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.LukeTestPage;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.LukeTestPage;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.LukeTestPage;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.LukeTestPage;

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
    defaultField(field: string): Genai.LukeTestPage;

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
    defaultField(field: FieldType): Genai.LukeTestPage;

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
    unsetField(field: string): Genai.LukeTestPage;

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
    unsetField(field: FieldType): Genai.LukeTestPage;

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
    removeField(field: string): Genai.LukeTestPage;

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
    removeField(field: FieldType): Genai.LukeTestPage;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.LukeTestPage;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.LukeTestPage;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.LukeTestPage;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.LukeTestPage;

    mergeJson(json: any): Genai.LukeTestPage;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.LukeTestPage;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.LukeTestPage;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.LukeTestPage>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.LukeTestPage> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.LukeTestPage> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.LukeTestPage>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.LukeTestPage> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.LukeTestPage> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.LukeTestPage> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.LukeTestPage>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.LukeTestPage>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.LukeTestPage;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.LukeTestPage;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.LukeTestPage;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.LukeTestPage;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.LukeTestPage;

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
    static make(fields: any, withDefaults?: boolean): Genai.LukeTestPage;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.LukeTestPage;

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
    afterMake(): Genai.LukeTestPage;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.LukeTestPage;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.LukeTestPage> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.LukeTestPage;

    /**
     * Make assertions that collectively decide whether the component is properly rendered.
     * @example
     * function rendered() {
     *   this.luke.search(this.gridEl).visible().assert('toEqual', true);
     *   this.luke.searchAll(this.itemEl).attr('length').assert('toBeGreaterThan', 5);
     *   this.luke.search(this.messageEl).text().assert('toEqual', 'Welcome');
     * }
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
    search(selector: string, resolveOnFound?: boolean, timeout?: number): LukeWebElement<any> | null;

    /**
     * Searches for element using selectorMap in Genai.LukeTestPage.js.
     */
    search(selectorKey: string): LukeAsyncQueueNode | null;

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
    searchAll(selector: string, resolveOnFound?: boolean, timeout?: number): LukeAsyncQueueNode | null;

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
    searchForElementWithText(selector: string, text: string, resolveOnFound?: boolean, timeout?: number): LukeWebElement<any> | null;

    /**
     * Searches for element by text using selectorMap in Genai.LukeTestPage.js.
     */
    searchForElementWithText(selectorKey: string, text: string): LukeAsyncQueueNode | null;

    /**
     * Click on elements on current session only within the component's {@link parentSelector}. Clicks on first element
     * if found.
     *
     * @param  selector
     *            The search query
     * @param timeout
     *          Timeout in seconds for the chain
     */
    click(selector: string, timeout?: number): LukeAsyncQueueNode | null;

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
     * Reloads browser.
     */
    reloadPage(): void;

    /**
     * Opens a LukeTestPage as a user with a given role.
     */
    static openWithRole(client: LukeBrowser, role: string, path?: string): Genai.LukeTestPage.Impersonated | null;

    /**
     * Enters query from home/search page
     */
    query(searchQuery: string): void;

    /**
     * Configures specified tool as the only UI selectable tool and tool in toolkit
     */
    configureDefaultTool(toolId: string): void;
  }
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
