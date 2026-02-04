// TypeScript definitions for the C3 type UiSdlDataGridDataSpecColumnFieldSetting

/**
 * A specification that describe how to use each field of the {@link dataType} for display in the {@link UiSdlDataGrid}. A
 * single field is mapped to a single column, so an instance of this type specifies how to display a single column
 * (and its cells) within a grid.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlDataGridDataSpecColumnFieldSetting
 */
declare interface IUiSdlDataGridDataSpecColumnFieldSetting {

  /**
   * Provides a mapping from a data record returned by an api call, which may be in any shape,
   * to the shape required by the concrete data spec setting type implementation.
   */
  dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null};

  /**
   * The name of the field to which these settings apply
   */
  fieldName?: string | null;

  /**
   * Whether or not the content in this field is searchable in the {@link UiSdlDataGrid} search bar.
   */
  searchable?: boolean;

  /**
   * The label displayed in the corresponding column header.
   */
  label: string;

  /**
   * A component to render in the cells of this column, and should be a {@link UiSdlDataGridCell} component.
   * To use SDL presentational inputs out of the box without having to write custom templates, see types.
   * that extend {@link UiSdlDataGridCell}
   */
  customCellComponent?: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;

  /**
   * Optional class to apply to all cells of the column in the grid. For example, you can specify `text-left`, `text-right`, or `text-center` for alignment.
   */
  className?: string | null;

  /**
   * Whether or not this field is editable in a {@link UiSdlDataGrid}; setting to `true` would allows users to edit rows and
   * save changes.
   * Nested fields will need to be saved via a custom epic. See SPLY-481.
   */
  editable?: boolean;

  /**
   * Specify an icon name for the column field header.
   * cssLibrary/src/stylesheets/abstracts/_icons.scss
   */
  iconName?: string | null;

  /**
   * Width of the column.
   */
  width?: IUiSdlBaseDataGridDataSpecColumnWidth | null;

  /**
   * The alignment of the corresponding column in the {@link UiSdlDataGrid}.
   */
  alignment?: string | null;

  /**
   * The url to which the user is redirected upon clicking the cell value.
   *
   * TODO: UI-8455 Replace this value type with the new link configuration type.
   */
  redirectLink?: IUiSdlLinkTemplate | null;

  /**
   * The url to which the user is redirected upon clicking the header.
   */
  headerRedirectLink?: IUiSdlLinkTemplate | null;

  /**
   * The text to display when hovering over the column label.
   */
  tooltipText?: string | null;

  /**
   * Whether or not this field can be used to sort the data displayed in the {@link UiSdlDataGrid}.
   */
  sortable?: boolean;

  /**
   * If true, rows with null values in this column will always be sorted last, regardless of whether
   * the sort is in ascending or descending order.
   */
  sortNullsLast?: boolean;

  /**
   * If true, we will sort the columns in a case insensitive manner.
   * This should only be used when {@link sortable} is true, and the field is a string.
   */
  caseInsensitiveSort?: boolean;

  /**
   * Whether to use this field to order the grid on first render.
   * Due to type system limitation, a table can only have 1 defaultSortField.
   * If there are more than 1 defaultSortField defined, the last defined field will be sorted.
   */
  defaultSortField?: IUiSdlFieldSortableConfig | null;

  /**
   * Whether or not the column is hidden.
   * Related config: {@link UiSdlDataGrid#removableColumns}.
   */
  hidden?: boolean;

  /**
   * The formatting to apply to the primary field in the column.
   */
  format?: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;

  /**
   * The config for the sub information.
   */
  subInformation?: IUiSdlDataGridSubInformationDataSetting | null;

  /**
   * The config for displaying components instead of raw values in a column.
   * Currently only supports color wheels, but can be updated to include other components.
   */
  cellElement?: IUiSdlColorWheelDataGrid | null;

  /**
   * If provided, the displayed column text will be translated using this prefix with the cell value.
   */
  translatePrefix?: string | null;

  /**
   * The name of the Redux action to be triggered.
   * When supplied, if a cell is clicked in this column a Redux action will be triggered with this action suffix.
   */
  actionSuffix?: string | null;

  /**
   * If provided, specifies the color to display indicators based on column value.
   * The key is the data value of the cell, and the corresponding value is a color.
   */
  indicatorMapping?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * Property if provided, indicates which field should be used to map the color.
   */
  indicatorMappingField?: string | null;

  /**
   * Whether or not this column should always be visible on the grid. This is important with horizontal scrolling.
   * NOTE: sticky columns are not reorderable even if the {@link UiSdlBaseDataGrid#reorderableColumns} is true.
   */
  sticky?: boolean;
}

/**
 * A specification that describe how to use each field of the {@link dataType} for display in the {@link UiSdlDataGrid}. A
 * single field is mapped to a single column, so an instance of this type specifies how to display a single column
 * (and its cells) within a grid.
 *
 * @remarks this represents a made instance of UiSdlDataGridDataSpecColumnFieldSetting
 */
declare class UiSdlDataGridDataSpecColumnFieldSetting extends Obj {

  /**
   * Provides a mapping from a data record returned by an api call, which may be in any shape,
   * to the shape required by the concrete data spec setting type implementation.
   */
  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The name of the field to which these settings apply
   */
  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Whether or not the content in this field is searchable in the {@link UiSdlDataGrid} search bar.
   */
  readonly searchable?: boolean;
  withSearchable(searchable: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The label displayed in the corresponding column header.
   */
  readonly label: string;
  withLabel(label: string): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * A component to render in the cells of this column, and should be a {@link UiSdlDataGridCell} component.
   * To use SDL presentational inputs out of the box without having to write custom templates, see types.
   * that extend {@link UiSdlDataGridCell}
   */
  readonly customCellComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withCustomCellComponent(customCellComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Optional class to apply to all cells of the column in the grid. For example, you can specify `text-left`, `text-right`, or `text-center` for alignment.
   */
  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Whether or not this field is editable in a {@link UiSdlDataGrid}; setting to `true` would allows users to edit rows and
   * save changes.
   * Nested fields will need to be saved via a custom epic. See SPLY-481.
   */
  readonly editable?: boolean;
  withEditable(editable: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Specify an icon name for the column field header.
   * cssLibrary/src/stylesheets/abstracts/_icons.scss
   */
  readonly iconName?: string | null;
  withIconName(iconName: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Width of the column.
   */
  readonly width?: UiSdlBaseDataGridDataSpecColumnWidth | null;
  withWidth(width: IUiSdlBaseDataGridDataSpecColumnWidth | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The alignment of the corresponding column in the {@link UiSdlDataGrid}.
   */
  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The url to which the user is redirected upon clicking the cell value.
   *
   * TODO: UI-8455 Replace this value type with the new link configuration type.
   */
  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The url to which the user is redirected upon clicking the header.
   */
  readonly headerRedirectLink?: UiSdlLinkTemplate | null;
  withHeaderRedirectLink(headerRedirectLink: IUiSdlLinkTemplate | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The text to display when hovering over the column label.
   */
  readonly tooltipText?: string | null;
  withTooltipText(tooltipText: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Whether or not this field can be used to sort the data displayed in the {@link UiSdlDataGrid}.
   */
  readonly sortable?: boolean;
  withSortable(sortable: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * If true, rows with null values in this column will always be sorted last, regardless of whether
   * the sort is in ascending or descending order.
   */
  readonly sortNullsLast?: boolean;
  withSortNullsLast(sortNullsLast: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * If true, we will sort the columns in a case insensitive manner.
   * This should only be used when {@link sortable} is true, and the field is a string.
   */
  readonly caseInsensitiveSort?: boolean;
  withCaseInsensitiveSort(caseInsensitiveSort: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Whether to use this field to order the grid on first render.
   * Due to type system limitation, a table can only have 1 defaultSortField.
   * If there are more than 1 defaultSortField defined, the last defined field will be sorted.
   */
  readonly defaultSortField?: UiSdlFieldSortableConfig | null;
  withDefaultSortField(defaultSortField: IUiSdlFieldSortableConfig | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Whether or not the column is hidden.
   * Related config: {@link UiSdlDataGrid#removableColumns}.
   */
  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The formatting to apply to the primary field in the column.
   */
  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The config for the sub information.
   */
  readonly subInformation?: UiSdlDataGridSubInformationDataSetting | null;
  withSubInformation(subInformation: IUiSdlDataGridSubInformationDataSetting | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The config for displaying components instead of raw values in a column.
   * Currently only supports color wheels, but can be updated to include other components.
   */
  readonly cellElement?: UiSdlColorWheelDataGrid | null;
  withCellElement(cellElement: IUiSdlColorWheelDataGrid | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * If provided, the displayed column text will be translated using this prefix with the cell value.
   */
  readonly translatePrefix?: string | null;
  withTranslatePrefix(translatePrefix: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * The name of the Redux action to be triggered.
   * When supplied, if a cell is clicked in this column a Redux action will be triggered with this action suffix.
   */
  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * If provided, specifies the color to display indicators based on column value.
   * The key is the data value of the cell, and the corresponding value is a color.
   */
  readonly indicatorMapping?: C3.Map<string | null, string | null>;
  withIndicatorMapping(indicatorMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Property if provided, indicates which field should be used to map the color.
   */
  readonly indicatorMappingField?: string | null;
  withIndicatorMappingField(indicatorMappingField: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Whether or not this column should always be visible on the grid. This is important with horizontal scrolling.
   * NOTE: sticky columns are not reorderable even if the {@link UiSdlBaseDataGrid#reorderableColumns} is true.
   */
  readonly sticky?: boolean;
  withSticky(sticky: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  static fromJson(json: any | null): UiSdlDataGridDataSpecColumnFieldSetting | null;

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
  static fromJsonString(json: string | null): UiSdlDataGridDataSpecColumnFieldSetting | null;

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
  static fromXmlString(xml: string | null): UiSdlDataGridDataSpecColumnFieldSetting | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlDataGridDataSpecColumnFieldSetting | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlDataGridDataSpecColumnFieldSetting | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlDataGridDataSpecColumnFieldSetting | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withoutFieldAtPath(path: string): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withoutField(field: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withoutField(field: FieldType | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlDataGridDataSpecColumnFieldSetting;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlDataGridDataSpecColumnFieldSetting;

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
  defaultField(field: string): UiSdlDataGridDataSpecColumnFieldSetting;

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
  defaultField(field: FieldType): UiSdlDataGridDataSpecColumnFieldSetting;

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
  unsetField(field: string): UiSdlDataGridDataSpecColumnFieldSetting;

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
  unsetField(field: FieldType): UiSdlDataGridDataSpecColumnFieldSetting;

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
  removeField(field: string): UiSdlDataGridDataSpecColumnFieldSetting;

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
  removeField(field: FieldType): UiSdlDataGridDataSpecColumnFieldSetting;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlDataGridDataSpecColumnFieldSetting;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlDataGridDataSpecColumnFieldSetting;

  mergeJson(json: any | null): UiSdlDataGridDataSpecColumnFieldSetting;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlDataGridDataSpecColumnFieldSetting | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlDataGridDataSpecColumnFieldSetting | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlDataGridDataSpecColumnFieldSetting | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlDataGridDataSpecColumnFieldSetting | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlDataGridDataSpecColumnFieldSetting | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlDataGridDataSpecColumnFieldSetting | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlDataGridDataSpecColumnFieldSetting | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlDataGridDataSpecColumnFieldSetting | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlDataGridDataSpecColumnFieldSetting | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  static make(fields: any, withDefaults?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

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
  afterMake(): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlDataGridDataSpecColumnFieldSetting;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlDataGridDataSpecColumnFieldSetting>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlDataGridDataSpecColumnFieldSetting;
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
