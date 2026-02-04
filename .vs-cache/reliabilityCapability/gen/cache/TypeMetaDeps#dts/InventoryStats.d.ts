// TypeScript definitions for the C3 type InventoryStats

/**
 * Type housing important statistics and metrics related to a {@link InventorySeries}'s part such as
 * Days of Inventory On Hand, Average Lead Time and many more.
 *
 * @remarks this represents a value passed to a method that expects an instance of InventoryStats
 */
declare interface IInventoryStats {

  /**
   * Represents average daily usage of a part calculated as units consumed in a day.
   * Expressed in units/day.
   *
   * For example, Let’s say a 1000 valves were used in the last 100 days, average daily usage of valves would then be 10 (1000/100) units/day.
   */
  avgDailyUsage?: number;

  /**
   * The latest available total stock of a given part.
   * Obtained from {@link InventoryMeasurement#quantity}.
   */
  currentStock?: number;

  /**
   * Average lead time for a given part and supplier.
   * Typically represents number of days it would take for a part to be delivered from the day a {@link PurchaseOrder} was placed for it.
   * Expressed in days.
   * Note: This field is meant to be used for user provided average lead time and is not intended to be changed.
   */
  avgLeadTime?: number;

  /**
   * Calculates the average total time it takes from the moment a part is ordered from a supplier to the time it is
   * delivered and ready for use. This is unique to a part and it's supplier.
   * Same part supplied from different suppliers can have different average delivery times.
   * Expressed in days.
   * **Note**: If the user doesn't provide their own {#avgLeadTime},  only then this field is computed.
   *
   * For example, Let’s say {@link PurchaseOrder} for valves supplied from ACME
   * typically takes 3 days to be delivered, then average delivery time for valves from ACME is said to be 3 days.
   */
  calculatedAvgLeadTime?: number;

  /**
   * Reorder level (or minimum inventory level) is the lowest quantity of a particular part or material that a company maintains in inventory to ensure it doesn't run out of stock.
   * It serves as a buffer to prevent shortages during fluctuations in demand or delays in the supply chain.
   */
  reorderLevel?: number;

  /**
   * Reorder Quantity (or maximum inventory level) refers to the highest quantity of a particular part or material
   * that can be stored in inventory at any given time.
   *
   * Ideally, it should be the amount that can be stored without exceeding warehouse capacity or incurring unnecessary holding costs.
   */
  reorderQty?: number;

  /**
   * Days of Inventory on Hand (DOH) is a key inventory management metric that measures how many days a part's stock would last, assuming no new stock is replenished.
   * It gives insight into how efficiently a company is managing its inventory and how long its stock can support demand.
   *
   * For example, Let’s say currently there are 50 valves in stock and average daily usage of them is 10, that's effectively 5 days of valves on hand.
   */
  daysOnHand?: number;

  /**
   * DOH over lead time is a ratio representing a part's Days of Inventory on Hand (DOH) relative to the lead time for replenishing inventory.
   * It helps ensure that inventory levels are adequate to cover demand while waiting for new stock to arrive, preventing stockouts during the lead time.
   *
   * For example, if we have 5 days of valves on hand and it takes 5 days for re-ordering valves, we have the ratio of 1.
   */
  dohOverLeadTimeRatio?: number;
}

/**
 * Type housing important statistics and metrics related to a {@link InventorySeries}'s part such as
 * Days of Inventory On Hand, Average Lead Time and many more.
 *
 * @remarks this represents a made instance of InventoryStats
 */
declare class InventoryStats extends Obj  {

  /**
   * Represents average daily usage of a part calculated as units consumed in a day.
   * Expressed in units/day.
   *
   * For example, Let’s say a 1000 valves were used in the last 100 days, average daily usage of valves would then be 10 (1000/100) units/day.
   */
  readonly avgDailyUsage?: number;
  withAvgDailyUsage(avgDailyUsage: number | null): InventoryStats;

  /**
   * The latest available total stock of a given part.
   * Obtained from {@link InventoryMeasurement#quantity}.
   */
  readonly currentStock?: number;
  withCurrentStock(currentStock: number | null): InventoryStats;

  /**
   * Average lead time for a given part and supplier.
   * Typically represents number of days it would take for a part to be delivered from the day a {@link PurchaseOrder} was placed for it.
   * Expressed in days.
   * Note: This field is meant to be used for user provided average lead time and is not intended to be changed.
   */
  readonly avgLeadTime?: number;
  withAvgLeadTime(avgLeadTime: number | null): InventoryStats;

  /**
   * Calculates the average total time it takes from the moment a part is ordered from a supplier to the time it is
   * delivered and ready for use. This is unique to a part and it's supplier.
   * Same part supplied from different suppliers can have different average delivery times.
   * Expressed in days.
   * **Note**: If the user doesn't provide their own {#avgLeadTime},  only then this field is computed.
   *
   * For example, Let’s say {@link PurchaseOrder} for valves supplied from ACME
   * typically takes 3 days to be delivered, then average delivery time for valves from ACME is said to be 3 days.
   */
  readonly calculatedAvgLeadTime?: number;
  withCalculatedAvgLeadTime(calculatedAvgLeadTime: number | null): InventoryStats;

  /**
   * Reorder level (or minimum inventory level) is the lowest quantity of a particular part or material that a company maintains in inventory to ensure it doesn't run out of stock.
   * It serves as a buffer to prevent shortages during fluctuations in demand or delays in the supply chain.
   */
  readonly reorderLevel?: number;
  withReorderLevel(reorderLevel: number | null): InventoryStats;

  /**
   * Reorder Quantity (or maximum inventory level) refers to the highest quantity of a particular part or material
   * that can be stored in inventory at any given time.
   *
   * Ideally, it should be the amount that can be stored without exceeding warehouse capacity or incurring unnecessary holding costs.
   */
  readonly reorderQty?: number;
  withReorderQty(reorderQty: number | null): InventoryStats;

  /**
   * Days of Inventory on Hand (DOH) is a key inventory management metric that measures how many days a part's stock would last, assuming no new stock is replenished.
   * It gives insight into how efficiently a company is managing its inventory and how long its stock can support demand.
   *
   * For example, Let’s say currently there are 50 valves in stock and average daily usage of them is 10, that's effectively 5 days of valves on hand.
   */
  readonly daysOnHand?: number;
  withDaysOnHand(daysOnHand: number | null): InventoryStats;

  /**
   * DOH over lead time is a ratio representing a part's Days of Inventory on Hand (DOH) relative to the lead time for replenishing inventory.
   * It helps ensure that inventory levels are adequate to cover demand while waiting for new stock to arrive, preventing stockouts during the lead time.
   *
   * For example, if we have 5 days of valves on hand and it takes 5 days for re-ordering valves, we have the ratio of 1.
   */
  readonly dohOverLeadTimeRatio?: number;
  withDohOverLeadTimeRatio(dohOverLeadTimeRatio: number | null): InventoryStats;

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
  static fromJson(json: any): InventoryStats | null;

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
  static fromJsonString(json: string): InventoryStats | null;

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
  static fromXmlString(xml: string): InventoryStats | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): InventoryStats | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): InventoryStats;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): InventoryStats;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): InventoryStats;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<InventoryStats>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<InventoryStats>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): InventoryStats;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): InventoryStats;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): InventoryStats;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): InventoryStats;

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
  withField(field: string, value: any, doNotConvert?: boolean): InventoryStats;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): InventoryStats;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): InventoryStats;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): InventoryStats;

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
  withoutFieldAtPath(path: string): InventoryStats;

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
  withoutField(field: string): InventoryStats;

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
  withoutField(field: FieldType): InventoryStats;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): InventoryStats;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): InventoryStats;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): InventoryStats;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): InventoryStats;

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
  defaultField(field: string): InventoryStats;

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
  defaultField(field: FieldType): InventoryStats;

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
  unsetField(field: string): InventoryStats;

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
  unsetField(field: FieldType): InventoryStats;

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
  removeField(field: string): InventoryStats;

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
  removeField(field: FieldType): InventoryStats;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): InventoryStats;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): InventoryStats;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): InventoryStats;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): InventoryStats;

  mergeJson(json: any): InventoryStats;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): InventoryStats;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): InventoryStats;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<InventoryStats>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<InventoryStats> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<InventoryStats> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<InventoryStats>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<InventoryStats> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, InventoryStats> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, InventoryStats> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<InventoryStats>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<InventoryStats>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): InventoryStats;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): InventoryStats;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): InventoryStats;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): InventoryStats;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): InventoryStats;

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
  static make(fields: any, withDefaults?: boolean): InventoryStats;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): InventoryStats;

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
  afterMake(): InventoryStats;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): InventoryStats;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<InventoryStats> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): InventoryStats;

  /**
   * Calculates {#avgDailyUsage} and {#daysOnHand}.
   *
   * The formula used to calculate the stats are as follows:
   * - `avgDailyUsage`: (Total quantity of a Part used by {@link WorkOrderStatusEnum} {@link WorkOrder}s in provided time window) / (No of days in provided time window).
   * - `daysOnHand`: (Total quantity of a Part available currently) / (avgDailyUsage). (as calculated above).
   * - `calculatedAvgLeadTime`: (Summation of (Lead Time * Quantities received) across all receipts) / (Total quantities received across all receipts).
   *                  where, Lead Time is the difference between {@link PurchaseOrderLineReceipt#deliveredDate} and parent {@link PurchaseOrder#purchaseDate}
   * **NOTE:** It's important to note that it defaults to user provided {#avgLeadTime}. Calculation is done as per above formula only in the cases user provided {#avgLeadTime} is missing.
   *             However, when {#avgLeadTime} is 0, the calculation is performed as well.
   *
   * For example, Consider we have a total of 1000 valves used in the past 100 days and current available of inventory of valves in 2000.
   * Also, let's say we had a {@link PurchaseOrderLine} of valves delivered over 4 {@link PurchaseOrderLineReceipt} in the past.
   *
   * Example: Also, let's say we had a {@link PurchaseOrderLine} with purchase date 2024-10-01 delivered over 4 {@link PurchaseOrderLineReceipt} as shown below
   *
   * | POLRs | Delivered Date | Lead Time | Delivered Quantity |
   * |-------|----------------|-----------|---------------------|
   * | 1     | 2024-10-06     | 5 days    | 25                  |
   * | 2     | 2024-10-11     | 10 days   | 25                  |
   * | 3     | 2024-10-16     | 15 days   | 25                  |
   * | 4     | 2024-10-21     | 20 days   | 25                  |
   *
   * - `avgDailyUsage` is calculated as 1000 / 100 = 10 valves per day.
   * - `daysOnHand` is calculated as 2000 / 10 = 200 days on hand.
   * - `calculatedAvgLeadTime` is calculated as ((5 * 25) + (10 *25) + (15 * 25) + (20 * 25)) / (25 + 25 + 25 + 25) => 12.5
   *
   * @param seriesObj
   *          The {@link InventorySeries} instance, for which the stats have to be calculated.
   * @param lookBackTimeRange
   *          The {@link TimeRange} which will be used in calculation fo the stats.
   *
   * @returns instance of {@link InventorySeries} object with {#avgDailyUsage}, {#daysOnHand}, and {#calculatedAvgLeadTime} populated.
   */
  static calculateInventoryStats(seriesObj: InventorySeries, lookBackTimeRange?: TimeRange): InventorySeries;
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
