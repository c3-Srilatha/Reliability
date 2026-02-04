// TypeScript definitions for the C3 type UiSdlCollectionListReact

/**
 * The react component type of {@link UiSdlCollectionList}.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlCollectionListReact
 */
declare interface IUiSdlCollectionListReact {

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
   * The specification used for retrieving data displayed by the list.
   */
  dataSpec?: IUiSdlCollectionListDataSpec | null;

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
   * Holds the data to display in the list.
   */
  dataCollection?: IUiSdlCollectionListDataCollection | null;

  /**
   * The component that handles the empty state.
   * It will appear if the collection list has no data.
   */
  emptyState?: IUiSdlComponentRef<UiSdlEmptyState | null> | null;

  /**
   * A list of identifiers of drag-and-drop kinds that may be added to this
   * list. If drag-and-drop functionality is desired for moving items between
   * lists, this prop should contain the {@link id} or
   * {@link itemDragDropKind} of all source lists, i.e. all lists whose items
   * may be dragged into this list.
   *
   * Applicable if and only if {@link droppable} is `true`.
   */
  acceptedDragAndDropKinds?: C3.Array<string | null> | Array<string | null>;

  /**
   * Extra HTML class names for the root element.
   */
  className?: string | null;

  /**
   * Define the index of the list item to be selected by default.
   * To be used in conjunction with.
   *
   * @see highlightSelected
   */
  defaultSelectedIndex?: number | null;

  /**
   * Whether items in the list are draggable.
   *
   * @see itemDragAndDropKind
   */
  draggable?: boolean;

  /**
   * Whether items may be dropped into this list.
   *
   * @see acceptedDragAndDropKinds
   */
  droppable?: boolean;

  /**
   * Whether to highlight the selected list item.
   */
  highlightSelected?: boolean;

  /**
   * Currently clicked collection list item data.
   */
  currentlyClickedData?: any | null;

  /**
   * Map of data type to icon class.
   * The icon class is when concatenated with `fa-` yields the
   * Font Awesome icon to render.
   *
   * Example:
   * if class = 'hashtag', the Font Awesome icon to render is `fa-hashtag`
   */
  iconsMap?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * Display the primary value inline with the secondary value.
   */
  inline?: boolean;

  /**
   * An identifier for the drag-and-drop kind to assign to each item in the
   * list. If not defined, {@link id} is used. Applicable if and only if
   * {@link draggable} is `true`.
   *
   * @see acceptedDragAndDropKinds
   */
  itemDragAndDropKind?: string | null;

  /**
   * The limit of number of items to be rendered in the list.
   */
  limit?: number | null;

  /**
   * Orientation of the list.
   */
  orientation?: string | null;

  /**
   * Whether items in this list can be removed.
   */
  removableItems?: boolean;

  /**
   * Whether or not the item should be removed from this list when dragged elsewhere, e.g. to another list.
   */
  removeItemWhenDroppedElsewhere?: boolean;

  /**
   * Whether items in this list can be reordered.
   */
  reorderable?: boolean;

  /**
   * Specify the spacing between list items.
   */
  rowSpacing?: string | null;

  /**
   * Whether to display division lines between items.
   */
  showDivider?: boolean;

  /**
   * Whether a tooltip should be shown on hovering over the secondary description.
   */
  showSecondaryDescriptionTooltip?: boolean;

  /**
   * Configuration of the title.
   */
  title?: string | null | IUiSdlDynamicValueSpec | null | null;
}

/**
 * The react component type of {@link UiSdlCollectionList}.
 *
 * @remarks this represents a made instance of UiSdlCollectionListReact
 */
declare class UiSdlCollectionListReact extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCollectionListReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): UiSdlCollectionListReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): UiSdlCollectionListReact;

  /**
   * The specification used for retrieving data displayed by the list.
   */
  readonly dataSpec?: UiSdlCollectionListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCollectionListDataSpec | null): UiSdlCollectionListReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollectionListReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCollectionListReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCollectionListReact;

  /**
   * Holds the data to display in the list.
   */
  readonly dataCollection?: UiSdlCollectionListDataCollection | null;
  withDataCollection(dataCollection: IUiSdlCollectionListDataCollection | null): UiSdlCollectionListReact;

  /**
   * The component that handles the empty state.
   * It will appear if the collection list has no data.
   */
  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlCollectionListReact;

  /**
   * A list of identifiers of drag-and-drop kinds that may be added to this
   * list. If drag-and-drop functionality is desired for moving items between
   * lists, this prop should contain the {@link id} or
   * {@link itemDragDropKind} of all source lists, i.e. all lists whose items
   * may be dragged into this list.
   *
   * Applicable if and only if {@link droppable} is `true`.
   */
  readonly acceptedDragAndDropKinds?: C3.Array<string | null>;
  withAcceptedDragAndDropKinds(acceptedDragAndDropKinds: C3.Array<string | null> | Array<string | null>): UiSdlCollectionListReact;

  /**
   * Extra HTML class names for the root element.
   */
  readonly className?: string | null;
  withClassName(className: string | null): UiSdlCollectionListReact;

  /**
   * Define the index of the list item to be selected by default.
   * To be used in conjunction with.
   *
   * @see highlightSelected
   */
  readonly defaultSelectedIndex?: number | null;
  withDefaultSelectedIndex(defaultSelectedIndex: number | null): UiSdlCollectionListReact;

  /**
   * Whether items in the list are draggable.
   *
   * @see itemDragAndDropKind
   */
  readonly draggable?: boolean;
  withDraggable(draggable: boolean): UiSdlCollectionListReact;

  /**
   * Whether items may be dropped into this list.
   *
   * @see acceptedDragAndDropKinds
   */
  readonly droppable?: boolean;
  withDroppable(droppable: boolean): UiSdlCollectionListReact;

  /**
   * Whether to highlight the selected list item.
   */
  readonly highlightSelected?: boolean;
  withHighlightSelected(highlightSelected: boolean): UiSdlCollectionListReact;

  /**
   * Currently clicked collection list item data.
   */
  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlCollectionListReact;

  /**
   * Map of data type to icon class.
   * The icon class is when concatenated with `fa-` yields the
   * Font Awesome icon to render.
   *
   * Example:
   * if class = 'hashtag', the Font Awesome icon to render is `fa-hashtag`
   */
  readonly iconsMap?: C3.Map<string | null, string | null>;
  withIconsMap(iconsMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlCollectionListReact;

  /**
   * Display the primary value inline with the secondary value.
   */
  readonly inline?: boolean;
  withInline(inline: boolean): UiSdlCollectionListReact;

  /**
   * An identifier for the drag-and-drop kind to assign to each item in the
   * list. If not defined, {@link id} is used. Applicable if and only if
   * {@link draggable} is `true`.
   *
   * @see acceptedDragAndDropKinds
   */
  readonly itemDragAndDropKind?: string | null;
  withItemDragAndDropKind(itemDragAndDropKind: string | null): UiSdlCollectionListReact;

  /**
   * The limit of number of items to be rendered in the list.
   */
  readonly limit?: number | null;
  withLimit(limit: number | null): UiSdlCollectionListReact;

  /**
   * Orientation of the list.
   */
  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlCollectionListReact;

  /**
   * Whether items in this list can be removed.
   */
  readonly removableItems?: boolean;
  withRemovableItems(removableItems: boolean): UiSdlCollectionListReact;

  /**
   * Whether or not the item should be removed from this list when dragged elsewhere, e.g. to another list.
   */
  readonly removeItemWhenDroppedElsewhere?: boolean;
  withRemoveItemWhenDroppedElsewhere(removeItemWhenDroppedElsewhere: boolean): UiSdlCollectionListReact;

  /**
   * Whether items in this list can be reordered.
   */
  readonly reorderable?: boolean;
  withReorderable(reorderable: boolean): UiSdlCollectionListReact;

  /**
   * Specify the spacing between list items.
   */
  readonly rowSpacing?: string | null;
  withRowSpacing(rowSpacing: string | null): UiSdlCollectionListReact;

  /**
   * Whether to display division lines between items.
   */
  readonly showDivider?: boolean;
  withShowDivider(showDivider: boolean): UiSdlCollectionListReact;

  /**
   * Whether a tooltip should be shown on hovering over the secondary description.
   */
  readonly showSecondaryDescriptionTooltip?: boolean;
  withShowSecondaryDescriptionTooltip(showSecondaryDescriptionTooltip: boolean): UiSdlCollectionListReact;

  /**
   * Configuration of the title.
   */
  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCollectionListReact;

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
  static fromJson(json: any | null): UiSdlCollectionListReact | null;

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
  static fromJsonString(json: string | null): UiSdlCollectionListReact | null;

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
  static fromXmlString(xml: string | null): UiSdlCollectionListReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlCollectionListReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlCollectionListReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlCollectionListReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlCollectionListReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlCollectionListReact | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlCollectionListReact | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlCollectionListReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlCollectionListReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlCollectionListReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlCollectionListReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlCollectionListReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlCollectionListReact;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlCollectionListReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlCollectionListReact;

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
  withoutFieldAtPath(path: string): UiSdlCollectionListReact;

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
  withoutField(field: string | null): UiSdlCollectionListReact;

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
  withoutField(field: FieldType | null): UiSdlCollectionListReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlCollectionListReact;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlCollectionListReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlCollectionListReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlCollectionListReact;

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
  defaultField(field: string): UiSdlCollectionListReact;

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
  defaultField(field: FieldType): UiSdlCollectionListReact;

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
  unsetField(field: string): UiSdlCollectionListReact;

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
  unsetField(field: FieldType): UiSdlCollectionListReact;

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
  removeField(field: string): UiSdlCollectionListReact;

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
  removeField(field: FieldType): UiSdlCollectionListReact;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlCollectionListReact;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlCollectionListReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlCollectionListReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlCollectionListReact;

  mergeJson(json: any | null): UiSdlCollectionListReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlCollectionListReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlCollectionListReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlCollectionListReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlCollectionListReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlCollectionListReact | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlCollectionListReact | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlCollectionListReact | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlCollectionListReact | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlCollectionListReact | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlCollectionListReact | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlCollectionListReact | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlCollectionListReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlCollectionListReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlCollectionListReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlCollectionListReact;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlCollectionListReact;

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
  static make(fields: any, withDefaults?: boolean): UiSdlCollectionListReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): UiSdlCollectionListReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlCollectionListReact;

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
  afterMake(): UiSdlCollectionListReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlCollectionListReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlCollectionListReact>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlCollectionListReact;

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
  static render(props?: UiSdlCollectionListReact | null): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<UiSdlCollectionListReact | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<UiSdlCollectionListReact | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<UiSdlCollectionListReact | null>;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<UiSdlCollectionListReact | null> | null>;

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
  dependencies(): MetadataDeps<UiSdlCollectionListReact | null>;

  save(subPath?: string | null, contentType?: string | null): UiSdlCollectionListReact;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: UiSdlCollectionListReact | null, spec?: UpsertSpec | null): UiSdlCollectionListReact | null;

  upsert(srcObj?: UiSdlCollectionListReact | null, spec?: UpsertSpec | null): UiSdlCollectionListReact | null;

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
  static fromString(s: string | null): UiSdlCollectionListReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): UiSdlCollectionListReact | null;

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
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: UiSdlCollectionListReact, state: UiSdlReduxState): UiSdlCollectionListReact | null;

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
   * Triggered when the user clicks a row.
   *
   * @param id
   *            Id of the component.
   */
  static clickRowAction(id?: string | null, data?: any | null, index: number, label: string): UiSdlCollectionListRowClickAction;

  /**
   * A function that will be called when an item is removed from the list.
   *
   * @param id
   *           Id of the component.
   * @param data
   *           The data for the row.
   * @param index
   *           The index of the row to delete.
   * @returns A `ROW_DELETE` action for this instance.
   */
  static deleteRowAction(id?: string | null, data: any, index: number): UiSdlCollectionListRowDeleteAction;

  /**
   * A function that will be called when an item is from this list is dragged
   * and dropped elsewhere, e.g. to another list.
   *
   * @param id
   *           Id of the component.
   * @param sourceData
   *           Metadata for the item that was dropped.
   * @param targetData
   *           Metadata for the place at which the item was dropped.
   * @return A `ITEM_DROP_TO_LIST` action with the following payload properties:
   * - sourceData {json} Metadata for the item that was dropped.
   * - targetData {json} Metadata for the place at which the item was dropped.
   */
  static dropItemFromListAction(id?: string | null, sourceData?: any | null, targetData?: any | null): UiSdlItemDropFromToListAction;

  /**
   * A function that will be called when a new item is dragged and dropped
   * into this list.
   *
   * @param id
   *           Id of the component.
   * @param sourceData
   *           Metadata for the item that was dropped.
   * @param targetData
   *           Metadata for the place at which the item was dropped.
   * @return A `ITEM_DROP_TO_LIST` action with the following payload properties:
   * - sourceData {json} Metadata for the item that was dropped.
   * - targetData {json} Metadata for the place at which the item was dropped.
   */
  static dropItemToListAction(id?: string | null, sourceData?: any | null, targetData?: any | null): UiSdlItemDropFromToListAction;

  /**
   * A function that will be called when an item in this list is reordered.
   * Applicable if and only if {@link reorderable} is `true`.
   *
   * @param id
   *           Id of the component.
   * @param listId
   *           The identifier of the list that contains the item being
   *           reordered. See {@link #id}.
   * @param fromIndex
   *           The index of the reordered item, before reordering.
   * @param toIndex
   *           The index of the reordered item, after reordering. If the item is
   *           being moved to the end of the list, this will be the length of
   *           the list.
   * @return A `ITEM_REORDER` action with the following payload properties:
   * - listId {string} The identifier of the list that contains the item being
   *           reordered. See {@link #id}.
   * - fromIndex {int} The index of the reordered item, before reordering.
   * - toIndex {int} The index of the reordered item, after reordering.
   */
  static reorderItemAction(id?: string | null, listId: string, fromIndex: number, toIndex: number): UiSdlItemReorderAction;

  /**
   * Triggers `DATA_RECEIVE` action when an item in this list is reordered.
   *
   * @param state
   *           The current redux state.
   * @param action
   *           The action object.
   *
   * @returns An update instance of the state.
   */
  static itemReorderReducer(state?: UiSdlReduxState | null, action?: UiSdlItemReorderAction | null): UiSdlReduxState | null;

  /**
   * A function that is called when an item is removed from the list.
   *
   * @param id
   *            Id of the component.
   * @param sourceData
   *            Metadata for the item that was removed.
   * @return A `ITEM_REMOVE` action with the following payload properties:
   * - sourceData {json} Metadata for the item that was removed.
   * - componentId {string} Component id of the item.
   */
  static removeItemAction(id?: string | null, sourceData?: any | null): UiSdlItemDragRemoveAction;

  /**
   * A function that is called when an item starts being dragged.
   *
   * @param id
   *           Id of the component from which this action is being triggered.
   * @param sourceData
   *           Metadata for the item that is being dragged.
   * @return An 'ITEM_DRAG_START' action with the following payload properties:
   * - sourceData {json} Metadata for the item being dragged.
   */
  static dragStartItemAction(id?: string | null, sourceData?: any | null): UiSdlItemDragRemoveAction;

  /**
   * Effect to run when an item is dropped into this list.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @param componentId
   *           Component id of the item.
   * @returns Potentially modified Redux state.
   */
  static itemDropToListEffect(state?: UiSdlReduxState | null, action?: UiSdlItemDropFromToListAction | null, componentId: string): UiSdlReduxState | null;

  /**
   * Remove an item from the list.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @param componentId
   *           Component id of the item.
   * @returns Potentially modified Redux state.
   */
  static itemRemoveEffect(state?: UiSdlReduxState | null, action?: UiSdlItemDragRemoveAction | null, componentId: string): UiSdlReduxState | null;

  /**
   * Update {@link currentlyClickedData} state value.
   *
   * @param state
   *           Redux state.
   * @param action
   *           Redux action.
   * @returns Potentially modified Redux state.
   */
  static rowClickEffect(state?: UiSdlReduxState | null, action?: UiSdlCollectionListRowClickAction | null): UiSdlReduxState | null;
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
