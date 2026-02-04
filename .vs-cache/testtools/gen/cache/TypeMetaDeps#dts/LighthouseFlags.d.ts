// TypeScript definitions for the C3 type LighthouseFlags

/**
 * Example flags:
 *       {
 *         "output": "json"
 *       }
 *
 * @remarks this represents a value passed to a method that expects an instance of LighthouseFlags
 */
declare interface ILighthouseFlags {

  /**
   * Output format, e.g. 'json'
   */
  output?: string | null;

  /**
   * The locale to use for the output.
   * Example values: 'en-US'|'en'|'en-AU', etc.
   */
  locale?: string | null;

  /**
   * The maximum amount of time to wait for a page content render, in ms. If no content is rendered within this limit, the run is aborted with an error.
   */
  maxWaitForFcp?: number | null;

  /**
   * Max time to wait for page to load
   */
  maxWaitForLoad?: number | null;

  /**
   * The method used to throttle the network
   */
  throttlingMethod?: string | null;

  /**
   * Throttling settings
   */
  throttling?: ILighthouseConfigSettingsThrottling | null;

  /**
   * Internally disable device screen emulation
   */
  internalDisableDeviceScreenEmulation?: boolean;

  /**
   * Flag indicating the run should only audit.
   */
  auditMode?: boolean;

  /**
   * Flag indicating the run should only gather
   */
  gatherMode?: boolean;

  /**
   * Flag indicating that the browser storage should not be reset for the audit.
   */
  disableStorageReset?: boolean;

  /**
   * Emulation form.
   */
  emulatedFormFactor?: string | null;

  /**
   * The network request patterns that Lighthouse blocked while loading the page.
   */
  blockedUrlPatterns?: C3.Array<string | null> | Array<string | null>;

  /**
   * Additional trace categories
   */
  additionalTraceCategories?: C3.Array<string | null> | Array<string | null>;

  /**
   * Extra headers
   */
  extraHeaders?: C3.Array<string | null> | Array<string | null>;

  /**
   * Includes only the specified categories in the final report.
   * Additive with onlyAudits and reduces the time to audit a page.
   */
  onlyCategories?: C3.Array<string | null> | Array<string | null>;

  /**
   * Includes only the specified audits in the final report.
   * Additive with onlyCategories and reduces the time to audit a page.
   */
  onlyAudits?: C3.Array<string | null> | Array<string | null>;

  /**
   * Excludes the specified audits from the final report.
   * Takes priority over onlyCategories, not usable in conjuction with onlyAudits, and reduces the time to audit a page.
   */
  skipAudits?: C3.Array<string | null> | Array<string | null>;

  /**
   * How Lighthouse was run, e.g. from the Chrome extension or from the npm module.
   * Possible values: lr, node (default)
   */
  channel?: string | null;

  /**
   * Precomputed lantern estimates to use instead of observed analysis.
   */
  precomputedLanternData?: ILighthouseConfigSettingsPrecomputedLanternData | null;

  /**
   * The budget.json object for LightWallet.
   */
  budgets?: C3.Array<LighthouseConfigSettingsBudget | null> | Array<ILighthouseConfigSettingsBudget | null>;

  /**
   * The hostname running chrome
   */
  hostname?: string | null;

  /**
   * the port chrome is listening on, e.g. SKywalker report.
   */
  port?: number | null;

  /**
   * Lighthouse verbosity.
   */
  logLevel?: string | null;

  /**
   * The path to the config JSON.
   */
  configPath?: string | null;

  /**
   * Run the specified plugins.
   * A plugin is a node module that implements a set of checks that will be run by Lighthouse and added to the report as a new category
   * See https://github.com/GoogleChrome/lighthouse/blob/master/docs/plugins.md
   */
  plugins?: C3.Array<string | null> | Array<string | null>;
}

/**
 * Example flags:
 *       {
 *         "output": "json"
 *       }
 *
 * @remarks this represents a made instance of LighthouseFlags
 */
declare class LighthouseFlags extends Obj {

  /**
   * Output format, e.g. 'json'
   */
  readonly output?: string | null;
  withOutput(output: string | null): LighthouseFlags;

  /**
   * The locale to use for the output.
   * Example values: 'en-US'|'en'|'en-AU', etc.
   */
  readonly locale?: string | null;
  withLocale(locale: string | null): LighthouseFlags;

  /**
   * The maximum amount of time to wait for a page content render, in ms. If no content is rendered within this limit, the run is aborted with an error.
   */
  readonly maxWaitForFcp?: number | null;
  withMaxWaitForFcp(maxWaitForFcp: number | null): LighthouseFlags;

  /**
   * Max time to wait for page to load
   */
  readonly maxWaitForLoad?: number | null;
  withMaxWaitForLoad(maxWaitForLoad: number | null): LighthouseFlags;

  /**
   * The method used to throttle the network
   */
  readonly throttlingMethod?: string | null;
  withThrottlingMethod(throttlingMethod: string | null): LighthouseFlags;

  /**
   * Throttling settings
   */
  readonly throttling?: LighthouseConfigSettingsThrottling | null;
  withThrottling(throttling: ILighthouseConfigSettingsThrottling | null): LighthouseFlags;

  /**
   * Internally disable device screen emulation
   */
  readonly internalDisableDeviceScreenEmulation?: boolean;
  withInternalDisableDeviceScreenEmulation(internalDisableDeviceScreenEmulation: boolean): LighthouseFlags;

  /**
   * Flag indicating the run should only audit.
   */
  readonly auditMode?: boolean;
  withAuditMode(auditMode: boolean): LighthouseFlags;

  /**
   * Flag indicating the run should only gather
   */
  readonly gatherMode?: boolean;
  withGatherMode(gatherMode: boolean): LighthouseFlags;

  /**
   * Flag indicating that the browser storage should not be reset for the audit.
   */
  readonly disableStorageReset?: boolean;
  withDisableStorageReset(disableStorageReset: boolean): LighthouseFlags;

  /**
   * Emulation form.
   */
  readonly emulatedFormFactor?: string | null;
  withEmulatedFormFactor(emulatedFormFactor: string | null): LighthouseFlags;

  /**
   * The network request patterns that Lighthouse blocked while loading the page.
   */
  readonly blockedUrlPatterns?: C3.Array<string | null>;
  withBlockedUrlPatterns(blockedUrlPatterns: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  /**
   * Additional trace categories
   */
  readonly additionalTraceCategories?: C3.Array<string | null>;
  withAdditionalTraceCategories(additionalTraceCategories: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  /**
   * Extra headers
   */
  readonly extraHeaders?: C3.Array<string | null>;
  withExtraHeaders(extraHeaders: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  /**
   * Includes only the specified categories in the final report.
   * Additive with onlyAudits and reduces the time to audit a page.
   */
  readonly onlyCategories?: C3.Array<string | null>;
  withOnlyCategories(onlyCategories: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  /**
   * Includes only the specified audits in the final report.
   * Additive with onlyCategories and reduces the time to audit a page.
   */
  readonly onlyAudits?: C3.Array<string | null>;
  withOnlyAudits(onlyAudits: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  /**
   * Excludes the specified audits from the final report.
   * Takes priority over onlyCategories, not usable in conjuction with onlyAudits, and reduces the time to audit a page.
   */
  readonly skipAudits?: C3.Array<string | null>;
  withSkipAudits(skipAudits: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

  /**
   * How Lighthouse was run, e.g. from the Chrome extension or from the npm module.
   * Possible values: lr, node (default)
   */
  readonly channel?: string | null;
  withChannel(channel: string | null): LighthouseFlags;

  /**
   * Precomputed lantern estimates to use instead of observed analysis.
   */
  readonly precomputedLanternData?: LighthouseConfigSettingsPrecomputedLanternData | null;
  withPrecomputedLanternData(precomputedLanternData: ILighthouseConfigSettingsPrecomputedLanternData | null): LighthouseFlags;

  /**
   * The budget.json object for LightWallet.
   */
  readonly budgets?: C3.Array<LighthouseConfigSettingsBudget | null>;
  withBudgets(budgets: C3.Array<LighthouseConfigSettingsBudget | null> | Array<ILighthouseConfigSettingsBudget | null>): LighthouseFlags;

  /**
   * The hostname running chrome
   */
  readonly hostname?: string | null;
  withHostname(hostname: string | null): LighthouseFlags;

  /**
   * the port chrome is listening on, e.g. SKywalker report.
   */
  readonly port?: number | null;
  withPort(port: number | null): LighthouseFlags;

  /**
   * Lighthouse verbosity.
   */
  readonly logLevel?: string | null;
  withLogLevel(logLevel: string | null): LighthouseFlags;

  /**
   * The path to the config JSON.
   */
  readonly configPath?: string | null;
  withConfigPath(configPath: string | null): LighthouseFlags;

  /**
   * Run the specified plugins.
   * A plugin is a node module that implements a set of checks that will be run by Lighthouse and added to the report as a new category
   * See https://github.com/GoogleChrome/lighthouse/blob/master/docs/plugins.md
   */
  readonly plugins?: C3.Array<string | null>;
  withPlugins(plugins: C3.Array<string | null> | Array<string | null>): LighthouseFlags;

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
  static fromJson(json: any | null): LighthouseFlags | null;

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
  static fromJsonString(json: string | null): LighthouseFlags | null;

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
  static fromXmlString(xml: string | null): LighthouseFlags | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LighthouseFlags | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LighthouseFlags;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LighthouseFlags;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LighthouseFlags;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LighthouseFlags | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LighthouseFlags | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LighthouseFlags;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LighthouseFlags;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LighthouseFlags;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LighthouseFlags;

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
  withField(field: string, value: any, doNotConvert?: boolean): LighthouseFlags;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LighthouseFlags;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LighthouseFlags;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LighthouseFlags;

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
  withoutFieldAtPath(path: string): LighthouseFlags;

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
  withoutField(field: string | null): LighthouseFlags;

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
  withoutField(field: FieldType | null): LighthouseFlags;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LighthouseFlags;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LighthouseFlags;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LighthouseFlags;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LighthouseFlags;

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
  defaultField(field: string): LighthouseFlags;

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
  defaultField(field: FieldType): LighthouseFlags;

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
  unsetField(field: string): LighthouseFlags;

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
  unsetField(field: FieldType): LighthouseFlags;

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
  removeField(field: string): LighthouseFlags;

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
  removeField(field: FieldType): LighthouseFlags;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LighthouseFlags;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LighthouseFlags;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LighthouseFlags;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LighthouseFlags;

  mergeJson(json: any | null): LighthouseFlags;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LighthouseFlags;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LighthouseFlags;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LighthouseFlags | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LighthouseFlags | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LighthouseFlags | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LighthouseFlags | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LighthouseFlags | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LighthouseFlags | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LighthouseFlags | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LighthouseFlags | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LighthouseFlags | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LighthouseFlags;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LighthouseFlags;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LighthouseFlags;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LighthouseFlags;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LighthouseFlags;

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
  static make(fields: any, withDefaults?: boolean): LighthouseFlags;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LighthouseFlags;

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
  afterMake(): LighthouseFlags;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LighthouseFlags;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LighthouseFlags>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LighthouseFlags;
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
