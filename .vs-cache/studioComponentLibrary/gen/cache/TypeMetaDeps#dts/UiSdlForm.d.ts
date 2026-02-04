// TypeScript definitions for the C3 type UiSdlForm

/**
 * Extension of UiSdlForm for dynamic behavior related to deriving fieldSets
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlForm
 */
declare interface IUiSdlForm {

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
  dataSpec?: IUiSdlFormDataSpec | null;

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
   * The title of the form.
   */
  title?: IUiSdlComponentTitle | null;

  /**
   * A mapping of field name to value.
   *
   * NOTE: the value of this field has to be a JSON object. JSON arrays may pass validation but should not be used.
   */
  formFieldValues?: any | null;

  /**
   * The field which contains the data backing the form.
   */
  dataRecord?: IObj | null;

  /**
   * This enum field determines whether the form is a multi-step form, or a traditional, single-step form.
   * Possible values are 'single', 'multiStep'.
   * Defaults to 'single'.
   */
  formType?: string | null;

  /**
   * The subtitle of the form.
   */
  subtitle?: IUiSdlComponentTitle | null;

  /**
   * The status and state for form.
   */
  formStatus?: IUiSdlFormStatus | null;

  /**
   * Whether store values through changeDefaultConfigAction
   */
  useDefaultConfig?: boolean;

  /**
   * Button configuration for the `Submit` button.
   */
  submitButtonText?: string | null;

  /**
   * Button configuration for the `Cancel` button.
   */
  cancelButtonText?: string | null;

  /**
   * Button configuration for the `Continue` button.
   */
  continueButtonText?: string | null;

  /**
   * Button configuration for the `Back` button.
   */
  backButtonText?: string | null;

  /**
   * When true the cancel and submit buttons will be hidden.  Useful when the form is used for collecting data and then
   * the developer needs more control for what they want to do with that information.
   */
  hideFooterButtons?: boolean;

  /**
   * Whether the primary action button is in the loading state.
   */
  primaryActionButtonLoading?: boolean;

  /**
   * Whether the secondary action button is in the loading state.
   */
  secondaryActionButtonLoading?: boolean;

  /**
   * Whether the primary action button is disabled.
   */
  primaryActionButtonDisabled?: boolean;

  /**
   * Whether the secondary action button is disabled.
   */
  secondaryActionButtonDisabled?: boolean;

  /**
   * A map of various fields and the associated validities. 'true' is considered valid, 'false' is considered invalid.
   * Additionally, if validity if null or undefined, it is indeterminate. This state is useful when you do not want to apply
   * any additional classes to the input and want to bring it to a state where it appears 'untouched'.
   */
  fieldValidity?: C3.Map<string | null, boolean> | {[key: string | null]: boolean};

  /**
   * Flag to determine if the form should be reset to the original data {@link UiSdlConnected#getInitialConfigFromState}
   * when the user clicks cancel.
   * If true clicking cancel will trigger {@link cancelFormAction} then {@link resetFormAction}.
   * If false clicking cancel will only trigger {@link cancelFormAction}.
   */
  clearOnCancel?: boolean;

  /**
   * Current step index for multi-step form.
   */
  currentStepIndex?: number | null;

  /**
   * Whether a custom submit action should be fired instead of the default submission actions.
   */
  customSubmit?: boolean;

  /**
   * Debounce timer for all the input fields in milliseconds. Default is 300.
   * You can still use individual debounceTime for each input element.
   */
  debounceTime?: number | null;

  /**
   * The orientation of the progress bar for {@link UiSdlMultiStepFormFieldSet}.
   */
  multiStepProgressBarOrientation?: string | null;

  /**
   * Flag to determine whether or not a multistep form could be filled out of order.
   * Only set this value to true if the form is multistep and contains NO REQUIRED FIELDS.
   * If this value is set to true for forms with required fields, then it is possible the form could be submitted
   * without the required fields filled in.
   */
  multiStepAnyOrder?: boolean;

  /**
   * Width of the form, int or double as percentage value or UiSdlFormWidth as value with its unit.
   */
  width?: number | null | number | null | IUiSdlFormWidth | null | null;

  /**
   * Max width of the form, int or double as percentage value or UiSdlFormWidth as value with its unit.
   * By default it uses css token: `$sdl-form-max-width` which is 770px. With this option you override this value
   */
  maxWidth?: number | null | number | null | IUiSdlFormWidth | null | null;

  /**
   * The data spec for the default action to take when form is valid and `Submit` button is clicked.
   */
  submitDataSpec?: IUiSdlFormSubmitDataSpec | null;

  /**
   * A dummy field that is here to satisfy the requirement for `uiSdlDataSpec`.
   */
  submitRecord?: IObj | null;
}

/**
 * Extension of UiSdlForm for dynamic behavior related to deriving fieldSets
 *
 * @remarks this represents a made instance of UiSdlForm
 */
declare class UiSdlForm extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlForm;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): UiSdlForm;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): UiSdlForm;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlFormDataSpec | null;
  withDataSpec(dataSpec: IUiSdlFormDataSpec | null): UiSdlForm;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlForm;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlForm;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlForm;

  /**
   * The title of the form.
   */
  readonly title?: UiSdlComponentTitle | null;
  withTitle(title: IUiSdlComponentTitle | null): UiSdlForm;

  /**
   * A mapping of field name to value.
   *
   * NOTE: the value of this field has to be a JSON object. JSON arrays may pass validation but should not be used.
   */
  readonly formFieldValues?: any | null;
  withFormFieldValues(formFieldValues: any | null): UiSdlForm;

  /**
   * The field which contains the data backing the form.
   */
  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlForm;

  /**
   * This enum field determines whether the form is a multi-step form, or a traditional, single-step form.
   * Possible values are 'single', 'multiStep'.
   * Defaults to 'single'.
   */
  readonly formType?: string | null;
  withFormType(formType: string | null): UiSdlForm;

  /**
   * The subtitle of the form.
   */
  readonly subtitle?: UiSdlComponentTitle | null;
  withSubtitle(subtitle: IUiSdlComponentTitle | null): UiSdlForm;

  /**
   * The status and state for form.
   */
  readonly formStatus?: UiSdlFormStatus | null;
  withFormStatus(formStatus: IUiSdlFormStatus | null): UiSdlForm;

  /**
   * Whether store values through changeDefaultConfigAction
   */
  readonly useDefaultConfig?: boolean;
  withUseDefaultConfig(useDefaultConfig: boolean): UiSdlForm;

  /**
   * Button configuration for the `Submit` button.
   */
  readonly submitButtonText?: string | null;
  withSubmitButtonText(submitButtonText: string | null): UiSdlForm;

  /**
   * Button configuration for the `Cancel` button.
   */
  readonly cancelButtonText?: string | null;
  withCancelButtonText(cancelButtonText: string | null): UiSdlForm;

  /**
   * Button configuration for the `Continue` button.
   */
  readonly continueButtonText?: string | null;
  withContinueButtonText(continueButtonText: string | null): UiSdlForm;

  /**
   * Button configuration for the `Back` button.
   */
  readonly backButtonText?: string | null;
  withBackButtonText(backButtonText: string | null): UiSdlForm;

  /**
   * When true the cancel and submit buttons will be hidden.  Useful when the form is used for collecting data and then
   * the developer needs more control for what they want to do with that information.
   */
  readonly hideFooterButtons?: boolean;
  withHideFooterButtons(hideFooterButtons: boolean): UiSdlForm;

  /**
   * Whether the primary action button is in the loading state.
   */
  readonly primaryActionButtonLoading?: boolean;
  withPrimaryActionButtonLoading(primaryActionButtonLoading: boolean): UiSdlForm;

  /**
   * Whether the secondary action button is in the loading state.
   */
  readonly secondaryActionButtonLoading?: boolean;
  withSecondaryActionButtonLoading(secondaryActionButtonLoading: boolean): UiSdlForm;

  /**
   * Whether the primary action button is disabled.
   */
  readonly primaryActionButtonDisabled?: boolean;
  withPrimaryActionButtonDisabled(primaryActionButtonDisabled: boolean): UiSdlForm;

  /**
   * Whether the secondary action button is disabled.
   */
  readonly secondaryActionButtonDisabled?: boolean;
  withSecondaryActionButtonDisabled(secondaryActionButtonDisabled: boolean): UiSdlForm;

  /**
   * A map of various fields and the associated validities. 'true' is considered valid, 'false' is considered invalid.
   * Additionally, if validity if null or undefined, it is indeterminate. This state is useful when you do not want to apply
   * any additional classes to the input and want to bring it to a state where it appears 'untouched'.
   */
  readonly fieldValidity?: C3.Map<string | null, boolean>;
  withFieldValidity(fieldValidity: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): UiSdlForm;

  /**
   * Flag to determine if the form should be reset to the original data {@link UiSdlConnected#getInitialConfigFromState}
   * when the user clicks cancel.
   * If true clicking cancel will trigger {@link cancelFormAction} then {@link resetFormAction}.
   * If false clicking cancel will only trigger {@link cancelFormAction}.
   */
  readonly clearOnCancel?: boolean;
  withClearOnCancel(clearOnCancel: boolean): UiSdlForm;

  /**
   * Current step index for multi-step form.
   */
  readonly currentStepIndex?: number | null;
  withCurrentStepIndex(currentStepIndex: number | null): UiSdlForm;

  /**
   * Whether a custom submit action should be fired instead of the default submission actions.
   */
  readonly customSubmit?: boolean;
  withCustomSubmit(customSubmit: boolean): UiSdlForm;

  /**
   * Debounce timer for all the input fields in milliseconds. Default is 300.
   * You can still use individual debounceTime for each input element.
   */
  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlForm;

  /**
   * The orientation of the progress bar for {@link UiSdlMultiStepFormFieldSet}.
   */
  readonly multiStepProgressBarOrientation?: string | null;
  withMultiStepProgressBarOrientation(multiStepProgressBarOrientation: string | null): UiSdlForm;

  /**
   * Flag to determine whether or not a multistep form could be filled out of order.
   * Only set this value to true if the form is multistep and contains NO REQUIRED FIELDS.
   * If this value is set to true for forms with required fields, then it is possible the form could be submitted
   * without the required fields filled in.
   */
  readonly multiStepAnyOrder?: boolean;
  withMultiStepAnyOrder(multiStepAnyOrder: boolean): UiSdlForm;

  /**
   * Width of the form, int or double as percentage value or UiSdlFormWidth as value with its unit.
   */
  readonly width?: number | null | number | null | UiSdlFormWidth | null | null;
  withWidth(width: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlForm;

  /**
   * Max width of the form, int or double as percentage value or UiSdlFormWidth as value with its unit.
   * By default it uses css token: `$sdl-form-max-width` which is 770px. With this option you override this value
   */
  readonly maxWidth?: number | null | number | null | UiSdlFormWidth | null | null;
  withMaxWidth(maxWidth: number | null | number | null | IUiSdlFormWidth | null | null): UiSdlForm;

  /**
   * The data spec for the default action to take when form is valid and `Submit` button is clicked.
   */
  readonly submitDataSpec?: UiSdlFormSubmitDataSpec | null;
  withSubmitDataSpec(submitDataSpec: IUiSdlFormSubmitDataSpec | null): UiSdlForm;

  /**
   * A dummy field that is here to satisfy the requirement for `uiSdlDataSpec`.
   */
  readonly submitRecord?: Obj | null;
  withSubmitRecord(submitRecord: IObj | null): UiSdlForm;

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
  static fromJson(json: any | null): UiSdlForm | null;

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
  static fromJsonString(json: string | null): UiSdlForm | null;

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
  static fromXmlString(xml: string | null): UiSdlForm | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlForm | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlForm;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlForm;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlForm;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlForm | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlForm | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlForm;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlForm;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlForm;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlForm;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlForm;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlForm;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlForm;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlForm;

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
  withoutFieldAtPath(path: string): UiSdlForm;

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
  withoutField(field: string | null): UiSdlForm;

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
  withoutField(field: FieldType | null): UiSdlForm;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlForm;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlForm;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlForm;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlForm;

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
  defaultField(field: string): UiSdlForm;

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
  defaultField(field: FieldType): UiSdlForm;

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
  unsetField(field: string): UiSdlForm;

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
  unsetField(field: FieldType): UiSdlForm;

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
  removeField(field: string): UiSdlForm;

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
  removeField(field: FieldType): UiSdlForm;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlForm;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlForm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlForm;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlForm;

  mergeJson(json: any | null): UiSdlForm;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlForm;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlForm;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlForm | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlForm | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlForm | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlForm | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlForm | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlForm | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlForm | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlForm | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlForm | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlForm;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlForm;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlForm;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlForm;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlForm;

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
  static make(fields: any, withDefaults?: boolean): UiSdlForm;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlForm | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlForm;

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
  afterMake(): UiSdlForm;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlForm;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlForm>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlForm;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlForm | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlForm | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlForm | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlForm | null> | null>;

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
  dependencies(): MetadataDeps<UiSdlForm | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlForm;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlForm | null, spec?: UpsertSpec | null): UiSdlForm | null;

  upsert(srcObj?: UiSdlForm | null, spec?: UpsertSpec | null): UiSdlForm | null;

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
  static fromString(s: string | null): UiSdlForm | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlForm | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiSdlForm, state: UiSdlReduxState): UiSdlForm | null;

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
   * Dispatch an action for an input component with the fieldName and actionSuffix.
   *
   * @param id
   *           Id of the component.
   * @param fieldName
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   *
   * @returns A `TRIGGER_INPUT_ACTION_${actionSuffix}` action with the following properties:
   * - `payload.componentId` {string} The `id` of the component.
   * - `payload.field` {string} The `fieldName` of the input component.
   */
  static triggerInputAction(id?: string | null, fieldName?: string | null, actionSuffix?: string | null): UiSdlTriggerInputAction;

  /**
   * Triggered when input value changes.
   *
   * @param id
   *           Id of the component.
   * @param event
   *           Browser event.
   * @param data
   *           The data passed from the presentational components.
   *
   * @returns An `INPUT_CHANGE` action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for filtering.
   * - payload.value {any} The value(s) of the input.  Generally a string or int.
   * - meta.dataSourceId {string} The `id` of the data source to which the items belong.
   */
  static inputChangeAction(id: string, event?: any, data?: any): UiSdlInputChangeAction;

  /**
   * Listens for actions of type `INPUT_CHANGE`.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static inputChangeEffect(state: UiSdlReduxState, action: UiSdlInputChangeAction): UiSdlReduxState;

  /**
   * Triggered on mount with dynamically rendered form fields changes.
   *
   * @param id
   *           Id of the component.
   * @param childId
   *           Id of the child component
   *
   * @returns A `CHILD_COMPONENT_ID_STORE` action
   */
  static storeChildComponentIdsAction(id: string, childId: string): UiSdlStoreChildComponentIdAction;

  /**
   * Triggered when the user wants to change the `hidden` value of a form field
   *
   * @param id
   *           Id of the component.
   * @param fieldName
   *           Name of the form field.
   * @param hidden
   *           Whether to hide or show the field. Setting to true will hide the field
   *           and setting to false will show it.
   * @returns either a `FIELD_HIDE` action or `FIELD_SHOW` action, based on payload.hidden, with the following properties:
   * - payload.componentId {string} Id of the component
   * - payload.fieldName {string} Name of the form field
   */
  static hideShowFieldAction(id: string, fieldName?: string | null, hidden?: boolean): UiSdlFieldHideShowAction;

  /**
   * Helper function to hide or show an input.
   *
   * @param state
   *          Redux state.
   * @param fieldName
   *          Name of the field to be enabled/disabled.
   * @param hidden
   *          Whether to hide or show the field. Setting to true will hide the field
   *          and setting to false will show it.
   * @param componentId
   *          Id of the current component instance.
   *
   * @returns A new Redux state.
   */
  static fieldHideShowEffect(state: UiSdlReduxState, fieldName: string, hidden?: boolean, componentId: string): UiSdlReduxState;

  /**
   * Listens for actions of type `FIELD_HIDE` and sets the `hidden` property on the input to true.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static fieldHideEffect(state: UiSdlReduxState, action: UiSdlFieldHideShowAction): UiSdlReduxState;

  /**
   * Listens for actions of type `FIELD_SHOW` and sets the `hidden` property on the input to false.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static fieldShowEffect(state: UiSdlReduxState, action: UiSdlFieldHideShowAction): UiSdlReduxState;

  /**
   * Listens for actions of type `CHILD_COMPONENT_ID_STORE` and updates the redux store with children component ids.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static childComponentIdStoreReducer(state: UiSdlReduxState, action: UiSdlStoreChildComponentIdAction): UiSdlReduxState;

  /**
   * Listens for actions of type `LOADED_DATA_HANDLE` and refreshes the `formFieldValues` value to match
   * the actual data values in the fields.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static loadedDataHandleReducer(state: UiSdlReduxState, action: UiSdlLoadedDataHandleAction): UiSdlReduxState;

  /**
   * Helper function to massage the `UiSdlFormBase` fields to their appropriate structure for rendering.
   *
   * @param fieldSets
   *            The fieldSets as configured through the ui metadata file.
   * @param dataConfig
   *            The data object that is referenced from the rendering component. Is a key value pair where the
   *            keys are the unique strings and the value is a data source value.
   * @param componentDataSourceKey
   *            The key to refer to the component's data source. This key should be present in `dataConfig`.
   *
   * @returns json object with keys that reflect the inputs, `fieldSets` and `dataConfig`.
   *            `fieldSets` contains the appropriate structure for rendering the component.
   *            `dataConfig` contains all the references to data sources needed by the component.
   */
  static prepareFieldSetsForRendering(fieldSets?: any | null, dataConfig?: any | null, componentDataSourceKey?: string | null): any | null;

  /**
   * Getter method for retrieving the given component's {@link formFieldValues} from the given Redux state.
   *
   * @param componentId
   *           The form component's metadata ID.
   * @param state
   *           Redux state.
   *
   * @returns The components form field values.
   */
  static getFormFieldValuesFromState(componentId: string, state: UiSdlReduxState): C3.Map<string | null, any>;

  /**
   * Triggered when form status changes.
   *
   * @param id
   *            Id of the component.
   * @param formStatus
   *           The status, title, and message of the form status.
   *
   * @returns A `FORM_STATUS_UPDATE` action for this instance.
   */
  static updateFormStatusAction(id: string, formStatus?: UiSdlFormStatus | null): UiSdlFormStatusUpdateAction;

  /**
   * Listens for actions of type `FORM_STATUS_UPDATE`, then change the form status appropriately.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static formStatusUpdateReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when the form status should be cleared.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `FORM_STATUS_CLEAR` action for this instance.
   */
  static clearFormStatusAction(id: string): UiSdlFormStatusClearAction;

  /**
   * Listens for actions of type `FORM_STATUS_CLEAR`, then clear the form status.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static formStatusClearReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Triggered when a button state needs to be changed.
   * This can be loading state for a button.
   *
   * @param id
   *           Id of the component.
   * @param buttonType
   *           The button type clicked.  Valid values are
   *           'PRIMARY' or 'SECONDARY'.
   * @param loading
   *           Whether or not this button should be loading or not.
   *
   * @returns An `ACTION_BUTTON_STATE_CHANGE` action for this instance.
   */
  static changeActionButtonStateAction(id: string, buttonType: string, disable?: boolean, loading?: boolean): UiSdlActionButtonStateChangeAction;

  /**
   * Listens for actions of type `ACTION_BUTTON_STATE_CHANGE`, then renders the action button appropriately.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static actionButtonStateChangeEffect(state: UiSdlReduxState, action: UiSdlActionButtonStateChangeAction): UiSdlReduxState;

  /**
   * Triggered on each input when multiple inputs values change. This is used for backward compatibility only.
   *
   * @param id
   *           Id of the component.
   * @param event
   *           Browser event.
   * @param data
   *           The data passed from the presentational components.
   * @param inputHasChanged
   *           If the input has already been changed. If true, the state doesn't need to be changed any more.
   *
   * @returns An `INPUT_CHANGE` action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for filtering.
   * - payload.value {any} The value(s) of the input.  Generally a string or int.
   * - payload.inputHasChanged {boolean} Indicating whether the input has changed in the state.
   */
  static inputHasChangedAction(id: string, event?: any, data?: any, inputHasChanged?: boolean): UiSdlInputChangeAction;

  /**
   * Triggered when multiple inputs' values change at once. Also triggers `INPUT_CHANGE` action on each of the fields.
   *
   * @param id
   *            Id of the component.
   * @param data
   *           The data passed from the presentational components.
   *
   * @returns A `MULTIPLE_INPUTS_CHANGE` action for this instance.
   */
  static changeMultipleInputsAction(id: string, data?: any): UiSdlInputChangeAction;

  /**
   * Triggered on form mount and update, sets the defaults to revert to on FORM_RESET.
   *
   * @param id
   *            Id of the component.
   * @param config
   *           The array of UiSdlInputChangePayload objects to become the default input values.
   *
   * @returns A `DEFAULT_CONFIG_CHANGE` action for this instance.
   */
  static changeDefaultConfigAction(id: string, config?: any): UiSdlDefaultConfigChangeAction;

  /**
   * Triggered whenever a particular input is intended to be enabled or disabled.
   * @param id
   *            Id of the component.
   * @param field
   *            The field to be enabled/disabled.
   * @param disable
   *            Whtether to enable or to disable the input. Setting to true will disable the input and setting to false
   *            will enable it.
   *
   * @return An 'INPUT_(ENABLE|DISABLE)' action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for.
   */
  static enableDisableInputAction(id: string, field: string, disable?: boolean): UiSdlInputEnableDisableAction;

  /**
   * Listens for actions of type `INPUT_ENABLE`,and sets the 'disabled' property on the input to be false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static inputEnableEffect(state: UiSdlReduxState, action: UiSdlInputEnableDisableAction): UiSdlReduxState;

  /**
   * Listens for actions of type `INPUT_DISABLE`, and sets the 'disabled' property on the input to be true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static inputDisableEffect(state: UiSdlReduxState, action: UiSdlInputEnableDisableAction): UiSdlReduxState;

  /**
   * Helper function to enable or disable an input.
   *
   * @param state
   *          Redux state.
   * @param fieldName
   *          Name of the field to be enabled/disabled.
   * @param disable
   *          Whether to disable the field or not.
   * @param componentId
   *          Id of the current component instance.
   *
   * @returns A new Redux state.
   */
  static enableDisableInputEffect(state: UiSdlReduxState, fieldName: string, disable?: boolean, componentId: string): UiSdlReduxState;

  /**
   * Listens for actions of type `MULTIPLE_INPUTS_CHANGE` and updates the redux store with updated field values.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static multipleInputsChangeEffect(state: UiSdlReduxState, action: UiSdlInputChangeAction): UiSdlReduxState;

  /**
   * Listens for actions of type `DEFAULT_CONFIG_CHANGE` and updates the redux store with a default config to revert to on FORM_RESET.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static changeDefaultConfigReducer(state: UiSdlReduxState, action: UiSdlDefaultConfigChangeAction): UiSdlReduxState;

  /**
   * Triggers `INPUT_CHANGE` actions on all fields without changing the state.
   *
   * @param id
   *            Id of the component.
   * @param data
   *           The data passed from the presentational components.
   *
   * @returns A `MULTIPLE_INPUTS_CHANGE` action for this instance.
   */
  static multipleInputsChangeEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Helper function to recursively travel the fieldsets and fields and produce a flat list of all fields.
   *
   * @param fieldConfigs
   *           The set of top level fields to get the fields from.
   *
   * @returns A flat list of all fields in the fieldsets.
   */
  static getFields(fieldConfigs?: C3.Array<UiSdlFormFieldSet | null> | C3.Array<C3.Array<UiSdlFormFieldSet | null>> | C3.Array<UiSdlFieldSetFormFieldSetting | null> | null): C3.Array<UiSdlFieldSetFormFieldSetting | null>;

  /**
   * Helper function to find the configuration for the given field name from the given set of field configurations.
   *
   * @param fieldName
   *          The name of the field for which to find the configuration.
   * @param fieldSets
   *          Array of field sets to search for the configuration.
   * @returns The config for the given `fieldName`.
   */
  static configForField(fieldName: string, fieldSets?: C3.Array<UiSdlFormFieldSet | null> | C3.Array<UiSdlMultiStepFormFieldSet | null> | null): UiSdlFieldSetFormFieldSetting | null;

  /**
   * Sets the validity of various fields in the {@link fieldValidity} map.
   *
   * @param id
   *            Id of the component.
   * @param field
   *            The field to set the validity for.
   * @param valid
   *            The validity for the field.
   *
   * @returns A `FIELD_VALIDITY_UPDATE` action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for.
   * - payload.valid {boolean} The validity of the input.  true indicates input is valid, false indicates invalid,
   *                          null/undefined indicates indeterminate.
   */
  static updateFieldValidityAction(id: string, field: string, valid?: boolean): UiSdlFieldValidityUpdateAction;

  /**
   * Listens for actions of type `FIELD_VALIDITY_UPDATE`, and sets the {@link fieldValidity}
   * with the results of the external validation.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static fieldValidityUpdateEffect(state: UiSdlReduxState, action: UiSdlFieldValidityUpdateAction): UiSdlReduxState;

  /**
   * Triggered when the form needs to be reset to default configurations specified by
   * its UI metadata.
   *
   * @param id
   *            Id of the component.
   * @returns A `FORM_RESET` action for this instance.
   */
  static resetFormAction(id: string): UiSdlFormResetAction;

  /**
   * Listens for actions of type `FORM_RESET`, and creates a new instance of the uncontrolled
   * presentational react component using the default configurations specified by the UI metadata.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static formResetEffect(state: UiSdlReduxState, action: UiSdlFormResetAction): UiSdlReduxState;

  /**
   * Triggered when the validity of an input has to be checked by external async effects.
   *
   * @param id
   *           Id of the component.
   * @param field
   *           The field which was changed.
   * @param value
   *           The value of the input.
   *
   * @returns An `INPUT_EXTERNAL_VALIDITY` action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for.
   * - payload.value {any} The value of the input.
   */
  static externalValidateInputAction(id: string, field: string, value?: any): UiSdlInputExternalValidityAction;

  /**
   * Check the validation of all fields and submit the form.
   *
   * @param id
   *           Id of the component.
   * @param event
   *           Browser event
   *
   * @returns A `VALIDATE_AND_SUBMIT` action.
   */
  static validateAndSubmitAction(id: string, event?: any): UiSdlValidateAndSubmitAction;

  /**
   * Triggered when the user submits the form.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `FORM_SUBMIT` action for this instance.
   */
  static submitFormAction(id: string): UiSdlFormSubmitAction;

  /**
   * Private function to generate a form object from the {@link formFieldValues}.
   *
   * @param state
   *         The redux store state.
   * @param formDataSourceId
   *         Data source used for the original data on the form.
   * @param componentId
   *         Id of the current component instance.
   *
   * @returns The form object representing the {@link formFieldValues}.
   */
  static generateFormObject(state: UiSdlReduxState, formDataSourceId?: string | null, componentId?: string | null): C3.Map<string | null, any>;

  /**
   * Triggered when the user submits the form and {@link customSubmit} is set to true.
   *
   * @param id
   *           Id of the component.
   * @param event
   *           Browser event.
   *
   * @returns A `CUSTOM_FORM_SUBMIT` action for this instance.
   */
  static customSubmitFormAction(id: string, event?: any): UiSdlCustomFormSubmitAction;

  /**
   * Triggered when the user cancels the form.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `FORM_CANCEL` action for this instance.
   */
  static cancelFormAction(id: string): UiSdlFormCancelAction;

  /**
   * Triggered when input value changes so that it can be validated.
   *
   * @param id
   *           Id of the component.
   * @param event
   *           Browser event.
   * @param data
   *           The data passed from the presentational components.
   *
   * @returns An `INPUT_VALIDATE` action for this instance with the following properties:
   * - payload.field {string} The field the input is responsible for.
   * - payload.value {any} The value(s) of the input. Generally a string or int.
   */
  static validateInputAction(id: string, event?: any, data?: C3.Map<string | null, any>): UiSdlInputValidateAction;

  /**
   * Triggered after the input value has been validated
   *
   * @param id
   *           Id of the component.
   * @param fieldName
   *           Name of the form field.
   * @param fieldValue
   *           Value of the form field.
   * @returns an `INPUT_CHANGED` action for this instance with the following properties:
   * - payload.componentId {string} Id of the component
   * - payload.fieldName {string} Name of the form field
   * - payload.fieldValue {map<string, any>} Value of the form field
   */
  static changedInputAction(id: string, fieldName?: string | null, fieldValue?: C3.Map<string | null, any>): UiSdlInputChangedAction;

  /**
   * Triggered when the user wants to change the `required` value of a form input
   *
   * @param id
   *           Id of the component.
   * @param fieldName
   *           Name of the form field.
   * @param required
   *           Whether the field is required or not.
   * @returns an `INPUT_CHANGED` action for this instance with the following properties:
   * - payload.componentId {string} Id of the component
   * - payload.fieldName {string} Name of the form field
   * - payload.required {boolean} Whether the field is required or not
   */
  static requireFieldAction(id: string, fieldName?: string | null, required?: boolean): UiSdlFieldRequireAction;

  /**
   * Listens for actions of type `FIELD_REQUIRE`.
   *
   * @param actionStream
   *           UiSdlObservable action stream
   * @param stateStream
   *           UiSdlObservable state stream
   * @returns an UiSdlObservable action stream
   */
  static fieldRequireReducer(state: UiSdlReduxState, action: UiSdlFieldRequireAction): UiSdlReduxState;

  /**
   * Triggered when `VALIDATE_AND_SUBMIT` is triggered.
   *
   * @param id
   *            Id of the component.
   *
   * @returns A `BEFORE_SUBMIT_ACTION` action for this instance.
   */
  static beforeSubmitFormAction(id: string): UiSdlBeforeSubmitFormAction;

  /**
   * Triggered when `STEP_INDEX_UPDATE` is triggered.
   * @param id
   *            Id of the component.
   * @param updateToIndex
   *            Target step of the form.
   *
   * @returns A `STEP_INDEX_UPDATE` action for this instance.
   */
  static updateStepIndexAction(id: string, updateToIndex: number): UiSdlStepIndexUpdateAction;

  /**
   * Listens for actions of type `STEP_INDEX_UPDATE`.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static stepIndexUpdateEffect(state: UiSdlReduxState, action: UiSdlStepIndexUpdateAction): UiSdlReduxState;

  /**
   * Triggered when a form section should change its visibility.
   *
   * @param id
   *            Id of the component.
   * @param index
   *            The index of the form section in the form.
   * @param hidden
   *            True if the form section should be hidden.
   * @returns A `FORM_SECTION_VISIBILITY_UPDATE` action for this instance.
   */
  static updateFieldSetVisibilityAction(id: string, index?: number | null, hidden?: boolean): UiSdlFormSectionVisibilityUpdateAction;

  /**
   * Triggered when a form section is collapsed or opened.
   *
   * @param id
   *            Id of the component.
   * @param index
   *            The index of the form section in the form.
   * @param collapsed
   *            True if the form section should be collapsed.
   * @returns A `FORM_SECTION_COLLAPSED_STATE_UPDATE` action for this instance.
   */
  static updateFieldSetCollapseStateAction(id: string, index?: number | null, collapsed?: boolean): UiSdlFormSectionCollapseStateUpdateAction;

  /**
   * Listens for actions of type `FIELD_SET_ACTION_BUTTON_STATE_CHANGE` and update disabled state properly.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static fieldSetButtonStateChangeReducer(state: UiSdlReduxState, action: UiSdlFieldSetActionButtonStateChangeAction): UiSdlReduxState;

  /**
   * Listens for actions of type `FORM_SECTION_VISIBILITY_UPDATE` and sets the corresponding hidden value on the state on the
   * form section.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static fieldSetVisibilityUpdateEffect(state: UiSdlReduxState, action: UiSdlFormSectionVisibilityUpdateAction): UiSdlReduxState;

  /**
   * Listens for actions of type `FORM_SECTION_COLLAPSED_STATE_UPDATE` and sets the corresponding hidden value on the state on the
   * form section.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static fieldSetCollapseStateUpdateReducer(state: UiSdlReduxState, action: UiSdlFormSectionCollapseStateUpdateAction): UiSdlReduxState;

  /**
   * Triggered when a form section button state changed.
   *
   * @param id
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   * @param disable
   *           Boolean if button should be disabled or not.
   *
   * @returns A `FIELD_SET_ACTION_BUTTON_STATE_CHANGE` action.
   */
  static changeFieldSetActionButtonStateAction(id: string, actionSuffix: string, disable?: boolean): UiSdlFieldSetActionButtonStateChangeAction | null;

  /**
   * Triggered when a form section button is clicked.
   *
   * @param id
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   *
   * @returns A `FIELD_SET_ACTION_BUTTON_CLICK_${actionSuffix}` action.
   */
  static clickFieldSetButtonAction(id: string, actionSuffix: string): UiSdlFieldSetActionButtonClickAction | null;

  /**
   * Triggered when a form section link is clicked.
   *
   * @param id
   *           Id of the component.
   * @param actionSuffix
   *           The suffix of the action that should be triggered.
   *
   * @returns A `FIELD_SET_LINK_CLICK_${actionSuffix}` action.
   */
  static clickFieldSetLinkAction(id: string, actionSuffix: string): UiSdlFieldSetLinkClickAction | null;

  /**
   * Triggers `FIELD_VALIDITY_UPDATE` and `INPUT_EXTERNAL_VALIDITY` actions for each form field,
   * followed by a `BEFORE_SUBMIT_ACTION` action.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static validateAndSubmitEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers `ARGUMENTS_MERGE` and `DATA_REQUEST` actions for the {@link submitDataSpec}.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static formSubmitEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Validates the given form field (i.e. checks if required fields are present),
   * then triggers `FIELD_VALIDITY_UPDATE` and `INPUT_EXTERNAL_VALIDITY` actions as appropriate.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static validateInputEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers a `FORM_SUBMIT` action if the submit button is enabled.
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   *
   * @returns An Observable action stream.
   */
  static beforeSubmitFormEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Triggers a 'FIELD_VALIDITY_UPDATE' action based on the updated `required` field
   *
   * @param actionStream
   *           Observable action stream.
   * @param stateStream
   *           Observable state stream.
   * @returns an Observable action stream.
   */
  static fieldRequireEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Retrieves {@UiSdlForm#fieldValidity} from state.
   *
   * @param id
   *           The componentId of the form
   * @param state
   *           Redux state
   * @returns the fieldValidity of the form
   */
  static getFieldValidity(id?: string | null, state: UiSdlReduxState): C3.Map<string | null, boolean>;

  /**
   * An action to set the fieldSets of a UiSdlForm
   *
   * @param id
   *           The componentId of the form
   * @param fieldSets
   *           The fieldSets of the form
   * @param reset
   *           Whether to reset the form before setting the fieldSets
   * @returns a Redux action.
   */
  static setFieldSetsAction(id?: string | null, fieldSets?: C3.Array<UiSdlFormFieldSet | null>, reset?: boolean): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_FIELDSETS` and sets the form fieldsets in state
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setFieldSetsReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * An action to set the hintText of a field in the form
   *
   * @param id
   *           The componentId of the form
   * @param fieldName
   *           The field to set hint text for
   * @param hintText
   *           The text to display
   * @returns a Redux action.
   */
  static setHintTextAction(id?: string | null, fieldName?: string | null, hintText?: string | null): UiSdlReduxAction<any>;

  /**
   * An action to reset a UiSdlForm
   *
   * @param id
   *           The componentId of the form
   * @returns a Redux action.
   */
  static resetFormDynamicAction(id?: string | null): UiSdlReduxAction<any>;

  /**
   * Listens for actions of type `SET_HINT_TEXT` and sets the hintText for a field
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static setHintTextReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `RESET_FORM_DYNAMIC` and clears the form field values and validity.
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static dynamicFormResetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;
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
