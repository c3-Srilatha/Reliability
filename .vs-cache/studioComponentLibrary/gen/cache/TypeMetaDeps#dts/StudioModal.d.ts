// TypeScript definitions for the C3 type StudioModal

/**
 * Custom modal component which has extended functionality versus the base
 * {@link UiSdlModal}
 * TODO PLAT-99511: Remove this once disableDefaultScroll is added to UiSdlModal,
 *                  and replace all components using it back to UiSdlModal.
 *
 * @remarks this represents a value passed to a method that expects an instance of StudioModal
 */
declare interface IStudioModal {

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
   * Components to render in the body of the modal container.
   */
  children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;

  /**
   * Correspond to SDLModal config.
   *
   * True if the modal should be closed when a stacked modal on top of it is closed.
   * The application should only allow stacked modals if the second modal is a
   * confirmation (or something similar in nature).
   */
  closeWithStackedModal?: boolean;

  /**
   * The preset size of the modal.
   */
  size?: string | null;

  /**
   * The open state of the modal.
   */
  open?: boolean;

  /**
   * Correspond to SDLModalBody config.
   *
   * Text to be rendered in the header section.
   */
  header?: IUiSdlModalHeaderConfig | null;

  /**
   * Text to be rendered in the header section beneath the header.
   */
  subHeader?: IUiSdlModalSubHeaderConfig | null;

  /**
   * Whether the modal should render a divider above content.
   */
  showTopDivider?: boolean;

  /**
   * Whether the modal should render a divider below content.
   */
  showBottomDivider?: boolean;

  /**
   * String content to be rendered in the body of the modal.
   * Note that if the translation value contains dynamic variables,
   * e.g. "Hello {name}", do not wrap the translation key with
   * '{~' and '~}'
   */
  content?: IUiSdlModalContentConfig | null;

  /**
   * Button layout configuration on the modal.
   */
  modalType?: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null;

  /**
   * Whether or not to disable the Primary Button.
   */
  disablePrimaryButton?: boolean;

  /**
   * Whether or not to disable the Secondary Button.
   */
  disableSecondaryButton?: boolean;

  /**
   * Whether or not to disable the Tertiary Button.
   */
  disableTertiaryButton?: boolean;

  /**
   * Whether or not to set primary button to loading (spinner).
   */
  isLoadingPrimaryButton?: boolean;

  /**
   * Whether or not to set secondary button to loading (spinner).
   */
  isLoadingSecondaryButton?: boolean;

  /**
   * Whether or not to set tertiary button to loading (spinner).
   */
  isLoadingTertiaryButton?: boolean;

  /**
   * Ms to debounce clicks on primary button.
   * Defaulted to 300ms.
   */
  primaryButtonClickDebounce?: number | null;

  /**
   * Ms to debounce clicks on secondary button.
   * Defaulted to 300ms.
   */
  secondaryButtonClickDebounce?: number | null;

  /**
   * Ms to debounce clicks on tertiary button.
   * Defaulted to 300ms.
   */
  tertiaryButtonClickDebounce?: number | null;

  /**
   * Disables the default body scroll behavior of the modal.
   * Note that it is advised to implement your own custom scroll behavior in the modal
   * body if you want to disable this.
   */
  disableDefaultScroll?: boolean;
}

/**
 * Custom modal component which has extended functionality versus the base
 * {@link UiSdlModal}
 * TODO PLAT-99511: Remove this once disableDefaultScroll is added to UiSdlModal,
 *                  and replace all components using it back to UiSdlModal.
 *
 * @remarks this represents a made instance of StudioModal
 */
declare class StudioModal extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioModal;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): StudioModal;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): StudioModal;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioModal;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioModal;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioModal;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioModal;

  /**
   * Components to render in the body of the modal container.
   */
  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): StudioModal;

  /**
   * Correspond to SDLModal config.
   *
   * True if the modal should be closed when a stacked modal on top of it is closed.
   * The application should only allow stacked modals if the second modal is a
   * confirmation (or something similar in nature).
   */
  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): StudioModal;

  /**
   * The preset size of the modal.
   */
  readonly size?: string | null;
  withSize(size: string | null): StudioModal;

  /**
   * The open state of the modal.
   */
  readonly open?: boolean;
  withOpen(open: boolean): StudioModal;

  /**
   * Correspond to SDLModalBody config.
   *
   * Text to be rendered in the header section.
   */
  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): StudioModal;

  /**
   * Text to be rendered in the header section beneath the header.
   */
  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): StudioModal;

  /**
   * Whether the modal should render a divider above content.
   */
  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): StudioModal;

  /**
   * Whether the modal should render a divider below content.
   */
  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): StudioModal;

  /**
   * String content to be rendered in the body of the modal.
   * Note that if the translation value contains dynamic variables,
   * e.g. "Hello {name}", do not wrap the translation key with
   * '{~' and '~}'
   */
  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): StudioModal;

  /**
   * Button layout configuration on the modal.
   */
  readonly modalType?: UiSdlOneButtonModal | null | UiSdlTwoButtonModal | null | UiSdlThreeButtonModal | null | null;
  withModalType(modalType: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null): StudioModal;

  /**
   * Whether or not to disable the Primary Button.
   */
  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): StudioModal;

  /**
   * Whether or not to disable the Secondary Button.
   */
  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): StudioModal;

  /**
   * Whether or not to disable the Tertiary Button.
   */
  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): StudioModal;

  /**
   * Whether or not to set primary button to loading (spinner).
   */
  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): StudioModal;

  /**
   * Whether or not to set secondary button to loading (spinner).
   */
  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): StudioModal;

  /**
   * Whether or not to set tertiary button to loading (spinner).
   */
  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): StudioModal;

  /**
   * Ms to debounce clicks on primary button.
   * Defaulted to 300ms.
   */
  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): StudioModal;

  /**
   * Ms to debounce clicks on secondary button.
   * Defaulted to 300ms.
   */
  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): StudioModal;

  /**
   * Ms to debounce clicks on tertiary button.
   * Defaulted to 300ms.
   */
  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): StudioModal;

  /**
   * Disables the default body scroll behavior of the modal.
   * Note that it is advised to implement your own custom scroll behavior in the modal
   * body if you want to disable this.
   */
  readonly disableDefaultScroll?: boolean;
  withDisableDefaultScroll(disableDefaultScroll: boolean): StudioModal;

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
  static fromJson(json: any | null): StudioModal | null;

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
  static fromJsonString(json: string | null): StudioModal | null;

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
  static fromXmlString(xml: string | null): StudioModal | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): StudioModal | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): StudioModal;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): StudioModal;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): StudioModal;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<StudioModal | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<StudioModal | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): StudioModal;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): StudioModal;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): StudioModal;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): StudioModal;

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
  withField(field: string, value: any, doNotConvert?: boolean): StudioModal;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): StudioModal;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): StudioModal;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): StudioModal;

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
  withoutFieldAtPath(path: string): StudioModal;

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
  withoutField(field: string | null): StudioModal;

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
  withoutField(field: FieldType | null): StudioModal;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): StudioModal;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): StudioModal;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): StudioModal;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): StudioModal;

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
  defaultField(field: string): StudioModal;

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
  defaultField(field: FieldType): StudioModal;

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
  unsetField(field: string): StudioModal;

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
  unsetField(field: FieldType): StudioModal;

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
  removeField(field: string): StudioModal;

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
  removeField(field: FieldType): StudioModal;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): StudioModal;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): StudioModal;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): StudioModal;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): StudioModal;

  mergeJson(json: any | null): StudioModal;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): StudioModal;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): StudioModal;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<StudioModal | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<StudioModal | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<StudioModal | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<StudioModal | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<StudioModal | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, StudioModal | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, StudioModal | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<StudioModal | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<StudioModal | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): StudioModal;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): StudioModal;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): StudioModal;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): StudioModal;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): StudioModal;

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
  static make(fields: any, withDefaults?: boolean): StudioModal;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): StudioModal | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): StudioModal;

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
  afterMake(): StudioModal;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): StudioModal;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<StudioModal>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): StudioModal;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<StudioModal | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<StudioModal | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<StudioModal | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<StudioModal | null> | null>;

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
  dependencies(): MetadataDeps<StudioModal | null>;

  save(subPath?: string | null, contentType?: string | null): StudioModal;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: StudioModal | null, spec?: UpsertSpec | null): StudioModal | null;

  upsert(srcObj?: StudioModal | null, spec?: UpsertSpec | null): StudioModal | null;

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
  static fromString(s: string | null): StudioModal | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): StudioModal | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: StudioModal, state: UiSdlReduxState): StudioModal | null;

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
   * Triggered when the modal is opened or closed.
   *
   * @param id
   *          Id of the component.
   * @param open
   *          If true the modal was opened.  If false the modal was closed.
   *
   * @returns A `MODAL_(OPEN|CLOSE)` action for this instance.
   *   - payload {boolean} The status to set the {@link open} field to.
   */
  static openCloseModalAction(id: string, open?: boolean): UiSdlModalOpenCloseAction;

  /**
   * Listens for actions of type `MODAL_OPEN` and sets internal field {@link open} to true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static modalOpenReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Listens for actions of type `MODAL_CLOSE` and sets internal field {@link open} to false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns A new Redux state.
   */
  static modalCloseReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Update component metadata.
   *
   * @param id
   *          Id of the component.
   * @param metadata
   *          Metadata to update.
   *
   * @return A `METADATA_UPDATE` action for this instance.
   */
  static updateMetadataAction(id: string, metadata?: any | null): UiSdlMetadataUpdateAction;

  /**
   * Triggered externally by epics intending to update the modal's button text. A use case is when
   * the alert modal or confirm modal needs to be displayed with button texts updated on the fly.
   *
   * @param id
   *           Id of the component.
   * @param buttonType
   *           The type of the button whose text is to be updated. Should be one of "PRIMARY", "SECONDARY"
   *           or "TERTIARY".
   * @param buttonText
   *           The text corresponding to the button.
   *
   * @returns A `MODAL_BUTTON_TEXT_UPDATE` action for this instance.
   *   - payload {object} The object with the buttonType and buttonText specified.
   */
  static updateModalButtonTextAction(id: string, buttonType?: string | null, buttonText?: string | null): UiSdlModalButtonTextUpdateAction;

  /**
   * Triggered externally by epics intending to update the modal's content. A use case is when
   * the alert modal or confirm modal needs to be displayed with the modal content updated on the fly.
   *
   * @param id
   *           Id of the component.
   * @param content
   *           The modal object.
   *
   * @returns A `MODAL_CONTENT_UPDATE` action for this instance.
   *   - payload {object} The object with the content specified.
   */
  updateModalContentAction(id: string, content?: string | null | UiSdlDynamicValueSpec | null | null): UiSdlModalContentUpdateAction;

  /**
   * Triggered externally by epics intending to update the modal's header. A use case is when
   * the modal needs to be displayed with the modal header updated on the fly.
   *
   * @param id
   *            Id of the component.
   * @param header
   *           The modal object.
   *
   * @returns A `MODAL_HEADER_UPDATE` action for this instance.
   *   - payload {object} The object with the header specified.
   */
  static updateModalHeaderAction(id: string, header?: string | null): UiSdlModalHeaderUpdateAction;

  /**
   * Triggered when a button needs to be disabled or enabled.
   *
   * @param id
   *           Id of the component.
   * @param buttonType
   *           The button type clicked.
   * @param disable
   *           Whether or not this button should be disabled or enabled.
   *
   * @returns A `(DISABLE|ENABLE)_(PRIMARY|SECONDARY|TERTIARY)_BUTTON` action for this instance.
   */
  static disableEnableButtonAction(id: string, buttonType?: string | null, disable?: boolean): UiSdlDisableEnableButtonAction;

  /**
   * Triggered when the loading state of a modal button needs to be changed (turn spinner on/off).
   *
   * @param id
   *           Id of the component.
   * @param buttonType
   *           The button type clicked.
   *
   * @returns A 'LOADING_(ON|OFF)_(PRIMARY|SECONDARY|TERTIARY)_BUTTON' action for this instance.
   */
  static loadingOnOffButtonAction(id: string, buttonType: string, on?: boolean): UiSdlLoadingOnOffButtonAction;

  /**
   * Triggered when the action buttons are clicked.
   * Note: Add an effect function with the actionType: '(PRIMARY|SECONDARY|TERTIARY)_BUTTON_CLICK'
   *       to add custom functionality for the modal action buttons.
   *
   * @param id
   *           Id of the component.
   * @param buttonType
   *           The button type clicked.
   *
   * @returns A `(PRIMARY|SECONDARY|TERTIARY)_BUTTON_CLICK` action for this instance.
   */
  static clickButtonAction(id: string, buttonType?: string | null): UiSdlButtonClickAction;

  /**
   * Listens for actions of type `METADATA_UPDATE` and update metadata.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static metadataUpdateReducer(state: UiSdlReduxState, action: UiSdlMetadataUpdateAction): UiSdlReduxState;

  /**
   * Listen for actions of type `DISABLE_PRIMARY_BUTTON`
   * and sets the internal {@link disablePrimaryButton} to true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static primaryButtonDisableReducer(state: UiSdlReduxState, action: UiSdlDisableEnableButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `DISABLE_SECONDARY_BUTTON`
   * and sets the internal {@link disableSecondaryButton} to false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static secondaryButtonDisableReducer(state: UiSdlReduxState, action: UiSdlDisableEnableButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `DISABLE_TERTIARY_BUTTON`
   * and sets the internal {@link disableTertiaryButton} to true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static tertiaryButtonDisableReducer(state: UiSdlReduxState, action: UiSdlDisableEnableButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `ENABLE_PRIMARY_BUTTON`
   * and sets the internal {@link disablePrimaryButton} to false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static primaryButtonEnableReducer(state: UiSdlReduxState, action: UiSdlDisableEnableButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `ENABLE_SECONDARY_BUTTON`
   * and sets the internal {@link disableSecondaryButton} to true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static secondaryButtonEnableReducer(state: UiSdlReduxState, action: UiSdlDisableEnableButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `ENABLE_TERTIARY_BUTTON`
   * and sets the internal {@link disableTertiaryButton} to false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static tertiaryButtonEnableReducer(state: UiSdlReduxState, action: UiSdlDisableEnableButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `LOADING_ON_PRIMARY_BUTTON`
   * and sets the internal {@link isLoadingPrimaryButton} to true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static primaryButtonLoadingOnReducer(state: UiSdlReduxState, action: UiSdlLoadingOnOffButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `LOADING_ON_SECONDARY_BUTTON`
   * and sets the internal {@link isLoadingSecondaryButton} to true.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static secondaryButtonLoadingOnReducer(state: UiSdlReduxState, action: UiSdlLoadingOnOffButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `LOADING_ON_TERTIARY_BUTTON`
   * and sets the internal {@link isLoadingTertiaryButton} to true
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  static tertiaryButtonLoadingOnReducer(state: UiSdlReduxState, action: UiSdlLoadingOnOffButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `LOADING_OFF_PRIMARY_BUTTON`
   * and sets the internal {@link isLoadingPrimaryButton} to false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static primaryButtonLoadingOffReducer(state: UiSdlReduxState, action: UiSdlLoadingOnOffButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `LOADING_OFF_SECONDARY_BUTTON`
   * and sets the internal {@link isLoadingSecondaryButton} to false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static secondaryButtonLoadingOffReducer(state: UiSdlReduxState, action: UiSdlLoadingOnOffButtonAction): UiSdlReduxState;

  /**
   * Listen for actions of type `LOADING_OFF_TERTIARY_BUTTON`
   * and sets the internal {@link isLoadingTertiaryButton} to false.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static tertiaryButtonLoadingOffReducer(state: UiSdlReduxState, action: UiSdlLoadingOnOffButtonAction): UiSdlReduxState;

  /**
   * Listens to actions of type 'MODAL_BUTTON_TEXT_UPDATE' and internally sets the {@link modalType#primaryButtonLabel}, {@link modalType#secondaryButtonLabel}, and {@link modalType#tertiaryButtonLabel} of the
   * modal to what was specified in the payload.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static modalButtonTextUpdateReducer(state: UiSdlReduxState, action: UiSdlModalButtonTextUpdateAction): UiSdlReduxState;

  /**
   * Listens to actions of type 'MODAL_CONTENT_UPDATE' and internally sets the {@link content} of the
   * modal to what was specified in the payload.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static modalContentUpdateReducer(state: UiSdlReduxState, action: UiSdlModalContentUpdateAction): UiSdlReduxState;

  /**
   * Listens to actions of type 'MODAL_HEADER_UPDATE' and internally sets the {@link header} of the
   * modal to what was specified in the payload.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   *
   * @returns A new Redux state.
   */
  static modalHeaderUpdateReducer(state: UiSdlReduxState, action: UiSdlModalHeaderUpdateAction): UiSdlReduxState;
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
