// TypeScript definitions for the C3 type LukeTestStudioGenAiSidePanel

/**
 * {@link LukeTestComponent} for Studio Gen AI side panel custom component
 *
 * @remarks this represents a value passed to a method that expects an instance of LukeTestStudioGenAiSidePanel
 */
declare interface ILukeTestStudioGenAiSidePanel {

  /**
   * The Luke instance attached to this component.
   */
  luke: ILukeBrowser;

  /**
   * Selector for the Gen AI side panel
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
   * Selector for the action group button
   */
  actionGroupButtonSelector?: string | null;

  /**
   * Selector for the side panel header
   */
  sidePanelHeaderSelector?: string | null;

  /**
   * Selector for items
   */
  itemSelector?: string | null;

  /**
   * The selector for the close icon.  Only present if the {@link UiSdlSidePanel#header} has a
   * {@link UiSdlSidePanelHeader#closeIcon} defined.
   */
  closeIconSelector?: string | null;

  /**
   * The selector for the open icon.  Only present if the {@link UiSdlSidePanel#header} has a
   * {@link UiSdlSidePanelHeader#openIcon} defined.
   */
  openIconSelector?: string | null;

  /**
   * The selector of the side panel when the side panel is open
   */
  sidePanelOpenSelector?: string | null;

  /**
   * Selector for the Gen AI side panel
   */
  titleSelector?: string | null;

  /**
   * Selector for the open/close Gen AI side panel button
   */
  c3GenAiButtonSelector?: string | null;

  /**
   * Selector for the Gen AI side panel client message.
   */
  clientMessageSelector?: string | null;

  /**
   * Selector for the Gen AI side panel server message.
   */
  serverMessageSelector?: string | null;

  /**
   * Selector for the Gen AI side panel server message content.
   */
  serverMessageContentSelector?: string | null;

  /**
   * Selector for the Gen AI side panel message username.
   */
  messageUsernameSelector?: string | null;

  /**
   * Selector for the Gen AI side panel message timestamp.
   */
  messageTimestampSelector?: string | null;

  /**
   * Selector for the Gen AI side panel message content.
   */
  messageContentSelector?: string | null;

  /**
   * Selector for the Gen AI side panel message code block.
   */
  messageCodeBlockSelector?: string | null;

  /**
   * Selector for the Gen AI side panel message code block language.
   */
  messageCodeBlockLanguageSelector?: string | null;

  /**
   * Selector for the Gen AI side panel message code block copy button.
   */
  messageCodeBlockCopyButtonSelector?: string | null;

  /**
   * Selector for the Gen AI messages, including client and server messages.
   */
  allMessagesSelector?: string | null;

  /**
   * Selector for the Gen AI messages, including client and server messages.
   */
  errorMessageSelector?: string | null;

  /**
   * Selector for the thumbs up feedback button
   */
  thumbsUpSelector?: string | null;

  /**
   * Selector for the filled thumbs up feedback button
   */
  thumbsUpFilledSelector?: string | null;

  /**
   * Selector for the thumbs down feedback button
   */
  thumbsDownSelector?: string | null;

  /**
   * Selector for the filled thumbs down feedback button
   */
  thumbsDownFilledSelector?: string | null;

  /**
   * Selector for the Gen AI side panel server message pending state.
   */
  serverMessagePendingStateSelector?: string | null;

  /**
   * Selector for the Gen AI side panel text input.
   */
  textInputSelector?: string | null;

  /**
   * Selector for the Gen AI side panel text input when is temporarily disabled.
   */
  disabledTextInputSelector?: string | null;

  /**
   * Selector for the Gen AI side panel cancel query button
   */
  cancelServerResponseButtonSelector?: string | null;

  /**
   * Selector for the Gen AI side panel start new chat button
   */
  startNewChatButtonSelector?: string | null;

  /**
   * Selector for the Gen AI side panel hide/show arrow button
   */
  arrowButtonSelector?: string | null;

  /**
   * Selector for the Gen AI side panel expand/compress button
   */
  wideButtonSelector?: string | null;

  /**
   * Selector for the Gen AI side panel suggestion title
   */
  suggestionTitleSelector?: string | null;

  /**
   * Selector for the Gen AI side panel suggestion items
   */
  suggestionItemSelector?: string | null;
}

/**
 * {@link LukeTestComponent} for Studio Gen AI side panel custom component
 *
 * @remarks this represents a made instance of LukeTestStudioGenAiSidePanel
 */
declare class LukeTestStudioGenAiSidePanel extends Obj {

  /**
   * The Luke instance attached to this component.
   */
  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel
   */
  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * The spinner that masks the component when data is loading
   */
  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * An array of selectors used to determine whether the page/component exist or is rendered.  These selectors will be searched
   * for within the {@link #parentSelector}.
   */
  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioGenAiSidePanel;

  /**
   * The maximum amount of time that Luke will retry an action
   */
  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the action group button
   */
  readonly actionGroupButtonSelector?: string | null;
  withActionGroupButtonSelector(actionGroupButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the side panel header
   */
  readonly sidePanelHeaderSelector?: string | null;
  withSidePanelHeaderSelector(sidePanelHeaderSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for items
   */
  readonly itemSelector?: string | null;
  withItemSelector(itemSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * The selector for the close icon.  Only present if the {@link UiSdlSidePanel#header} has a
   * {@link UiSdlSidePanelHeader#closeIcon} defined.
   */
  readonly closeIconSelector?: string | null;
  withCloseIconSelector(closeIconSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * The selector for the open icon.  Only present if the {@link UiSdlSidePanel#header} has a
   * {@link UiSdlSidePanelHeader#openIcon} defined.
   */
  readonly openIconSelector?: string | null;
  withOpenIconSelector(openIconSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * The selector of the side panel when the side panel is open
   */
  readonly sidePanelOpenSelector?: string | null;
  withSidePanelOpenSelector(sidePanelOpenSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel
   */
  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the open/close Gen AI side panel button
   */
  readonly c3GenAiButtonSelector?: string | null;
  withC3GenAiButtonSelector(c3GenAiButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel client message.
   */
  readonly clientMessageSelector?: string | null;
  withClientMessageSelector(clientMessageSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel server message.
   */
  readonly serverMessageSelector?: string | null;
  withServerMessageSelector(serverMessageSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel server message content.
   */
  readonly serverMessageContentSelector?: string | null;
  withServerMessageContentSelector(serverMessageContentSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel message username.
   */
  readonly messageUsernameSelector?: string | null;
  withMessageUsernameSelector(messageUsernameSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel message timestamp.
   */
  readonly messageTimestampSelector?: string | null;
  withMessageTimestampSelector(messageTimestampSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel message content.
   */
  readonly messageContentSelector?: string | null;
  withMessageContentSelector(messageContentSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel message code block.
   */
  readonly messageCodeBlockSelector?: string | null;
  withMessageCodeBlockSelector(messageCodeBlockSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel message code block language.
   */
  readonly messageCodeBlockLanguageSelector?: string | null;
  withMessageCodeBlockLanguageSelector(messageCodeBlockLanguageSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel message code block copy button.
   */
  readonly messageCodeBlockCopyButtonSelector?: string | null;
  withMessageCodeBlockCopyButtonSelector(messageCodeBlockCopyButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI messages, including client and server messages.
   */
  readonly allMessagesSelector?: string | null;
  withAllMessagesSelector(allMessagesSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI messages, including client and server messages.
   */
  readonly errorMessageSelector?: string | null;
  withErrorMessageSelector(errorMessageSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the thumbs up feedback button
   */
  readonly thumbsUpSelector?: string | null;
  withThumbsUpSelector(thumbsUpSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the filled thumbs up feedback button
   */
  readonly thumbsUpFilledSelector?: string | null;
  withThumbsUpFilledSelector(thumbsUpFilledSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the thumbs down feedback button
   */
  readonly thumbsDownSelector?: string | null;
  withThumbsDownSelector(thumbsDownSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the filled thumbs down feedback button
   */
  readonly thumbsDownFilledSelector?: string | null;
  withThumbsDownFilledSelector(thumbsDownFilledSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel server message pending state.
   */
  readonly serverMessagePendingStateSelector?: string | null;
  withServerMessagePendingStateSelector(serverMessagePendingStateSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel text input.
   */
  readonly textInputSelector?: string | null;
  withTextInputSelector(textInputSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel text input when is temporarily disabled.
   */
  readonly disabledTextInputSelector?: string | null;
  withDisabledTextInputSelector(disabledTextInputSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel cancel query button
   */
  readonly cancelServerResponseButtonSelector?: string | null;
  withCancelServerResponseButtonSelector(cancelServerResponseButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel start new chat button
   */
  readonly startNewChatButtonSelector?: string | null;
  withStartNewChatButtonSelector(startNewChatButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel hide/show arrow button
   */
  readonly arrowButtonSelector?: string | null;
  withArrowButtonSelector(arrowButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel expand/compress button
   */
  readonly wideButtonSelector?: string | null;
  withWideButtonSelector(wideButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel suggestion title
   */
  readonly suggestionTitleSelector?: string | null;
  withSuggestionTitleSelector(suggestionTitleSelector: string | null): LukeTestStudioGenAiSidePanel;

  /**
   * Selector for the Gen AI side panel suggestion items
   */
  readonly suggestionItemSelector?: string | null;
  withSuggestionItemSelector(suggestionItemSelector: string | null): LukeTestStudioGenAiSidePanel;

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
  static fromJson(json: any | null): LukeTestStudioGenAiSidePanel | null;

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
  static fromJsonString(json: string | null): LukeTestStudioGenAiSidePanel | null;

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
  static fromXmlString(xml: string | null): LukeTestStudioGenAiSidePanel | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): LukeTestStudioGenAiSidePanel | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): LukeTestStudioGenAiSidePanel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestStudioGenAiSidePanel;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): LukeTestStudioGenAiSidePanel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestStudioGenAiSidePanel | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<LukeTestStudioGenAiSidePanel | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): LukeTestStudioGenAiSidePanel;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestStudioGenAiSidePanel;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): LukeTestStudioGenAiSidePanel;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): LukeTestStudioGenAiSidePanel;

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
  withField(field: string, value: any, doNotConvert?: boolean): LukeTestStudioGenAiSidePanel;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): LukeTestStudioGenAiSidePanel;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): LukeTestStudioGenAiSidePanel;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): LukeTestStudioGenAiSidePanel;

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
  withoutFieldAtPath(path: string): LukeTestStudioGenAiSidePanel;

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
  withoutField(field: string | null): LukeTestStudioGenAiSidePanel;

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
  withoutField(field: FieldType | null): LukeTestStudioGenAiSidePanel;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): LukeTestStudioGenAiSidePanel;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): LukeTestStudioGenAiSidePanel;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): LukeTestStudioGenAiSidePanel;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): LukeTestStudioGenAiSidePanel;

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
  defaultField(field: string): LukeTestStudioGenAiSidePanel;

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
  defaultField(field: FieldType): LukeTestStudioGenAiSidePanel;

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
  unsetField(field: string): LukeTestStudioGenAiSidePanel;

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
  unsetField(field: FieldType): LukeTestStudioGenAiSidePanel;

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
  removeField(field: string): LukeTestStudioGenAiSidePanel;

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
  removeField(field: FieldType): LukeTestStudioGenAiSidePanel;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): LukeTestStudioGenAiSidePanel;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): LukeTestStudioGenAiSidePanel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): LukeTestStudioGenAiSidePanel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): LukeTestStudioGenAiSidePanel;

  mergeJson(json: any | null): LukeTestStudioGenAiSidePanel;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): LukeTestStudioGenAiSidePanel;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): LukeTestStudioGenAiSidePanel;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<LukeTestStudioGenAiSidePanel | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<LukeTestStudioGenAiSidePanel | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<LukeTestStudioGenAiSidePanel | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<LukeTestStudioGenAiSidePanel | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<LukeTestStudioGenAiSidePanel | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, LukeTestStudioGenAiSidePanel | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, LukeTestStudioGenAiSidePanel | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<LukeTestStudioGenAiSidePanel | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<LukeTestStudioGenAiSidePanel | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): LukeTestStudioGenAiSidePanel;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): LukeTestStudioGenAiSidePanel;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): LukeTestStudioGenAiSidePanel;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): LukeTestStudioGenAiSidePanel;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): LukeTestStudioGenAiSidePanel;

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
  static make(fields: any, withDefaults?: boolean): LukeTestStudioGenAiSidePanel;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): LukeTestStudioGenAiSidePanel;

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
  afterMake(): LukeTestStudioGenAiSidePanel;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): LukeTestStudioGenAiSidePanel;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<LukeTestStudioGenAiSidePanel>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): LukeTestStudioGenAiSidePanel;

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
   * Opens the {@link UiSdlSidePanel}
   *
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved after opening the UiSdlSidePanel
   */
  open(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Closes the {@link UiSdlSidePanel}
   *
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved after closing the UiSdlSidePanel
   */
  close(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Checks if the {@link UiSdlSidePanel} is open
   *
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved as a boolean
   */
  isOpen(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Checks if the {@link UiSdlSidePanel} is closed
   *
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved as a boolean
   */
  isClosed(timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Click the specified action in the action group
   *
   * @param actionSelector
   *    Selector for the dropdown / action group button if non-dropdown
   * @param actionLabel
   *    Action label that user wishes to apply
   */
  clickHeaderAction(actionSelector: string, actionLabel?: string | null): void;

  /**
   * Checks if the {@link #parentSelector} has a CSS className.  Uses {@link LukeCore#search} to find the
   * {@link #parentSelector} on the page.  If there are multiple {@link UiSdlSidePanel}s on the page it will find the first
   * one.
   *
   * @param className
   *          The className to check for
   * @param timeout
   *          Timeout in seconds for the chain
   * @return a {@link LukeAsyncQueueNode} that will be resolved as a boolean
   */
  containerHasClassName(className: string, timeout?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks on the C3 Generative AI button to open/close the Gen AI side panel
   */
  clickGenAiButton(): LukeAsyncQueueNode | null;

  /**
   * Sets the given query in the Gen AI side panel text input
   */
  enterClientQuery(query?: string | null): LukeAsyncQueueNode | null;

  /**
   * Returns the text in the Gen AI side panel text input
   */
  clientQuery(): LukeAsyncQueueNode | null;

  /**
   * Submits the given query
   */
  submitClientQuery(query?: string | null): LukeAsyncQueueNode | null;

  /**
   * Returns the client message
   */
  clientMessage(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the client message username
   */
  clientMessageUsername(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the client message timestamp
   */
  clientMessageTimestamp(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the client message content
   */
  clientMessageContent(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the hyperlink on a client message content
   */
  clickClientMessageHyperlink(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for a code block in a client message
   */
  clientMessageCodeBlock(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for the code block language in a client message
   */
  clientMessageCodeBlockLanguage(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for the code block copy button in a client message
   */
  clientMessageCodeBlockCopyButton(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the server message
   */
  serverMessage(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the server message username
   */
  serverMessageUsername(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the server message timestamp
   */
  serverMessageTimestamp(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the server message content
   */
  serverMessageContent(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the hyperlink on a server message content
   */
  clickServerMessageHyperlink(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for a code block in a server message
   */
  serverMessageCodeBlock(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for the code block language in a server message
   */
  serverMessageCodeBlockLanguage(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for the code block copy button in a server message
   */
  serverMessageCodeBlockCopyButton(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches the server message thumbs up button
   */
  serverMessageThumbsUpButton(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the server message thumbs up button
   */
  clickServerMessageThumbsUpButton(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * * Searches the server message filled thumbs up button
   */
  serverMessageThumbsUpFilled(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches the server message thumbs down button
   */
  serverMessageThumbsDownButton(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Clicks the server message thumbs down button
   */
  clickServerMessageThumbsDownButton(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * * Searches the server message filled thumbs down button
   */
  serverMessageThumbsDownFilled(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Searches for a server message in pending state
   */
  serverMessagePendingState(): LukeAsyncQueueNode | null;

  /**
   * Searches for the disabled text input
   */
  disabledTextInput(): LukeAsyncQueueNode | null;

  /**
   * Searches for the cancel server response button
   */
  cancelServerResponseButton(): LukeAsyncQueueNode | null;

  /**
   * Cancels the server response from previous user query
   */
  cancelServerResponse(): LukeAsyncQueueNode | null;

  /**
   * Returns the total chat messages in Gen AI side panel
   */
  totalMessageCount(): LukeAsyncQueueNode | null;

  /**
   * Returns the total chat messages in Gen AI side panel
   */
  totalClientMessageCount(): LukeAsyncQueueNode | null;

  /**
   * Returns the total chat messages in Gen AI side panel
   */
  totalServerMessageCount(): LukeAsyncQueueNode | null;

  /**
   * Starts a new chat
   */
  startNewChat(): LukeAsyncQueueNode | null;

  /**
   * Returns the Gen AI suggestion title
   */
  suggestionTitle(): LukeAsyncQueueNode | null;

  /**
   * Searches for the Gen AI suggestions
   */
  suggestions(): LukeAsyncQueueNode | null;

  /**
   * Clicks in a given Gen AI suggestion
   */
  clickSuggestion(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Returns the text of a given error message.
   */
  errorMessage(index?: number | null): LukeAsyncQueueNode | null;

  /**
   * Changes the side panel width
   */
  changeSidePanelWidth(width?: number | null): LukeAsyncQueueNode | null;
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
