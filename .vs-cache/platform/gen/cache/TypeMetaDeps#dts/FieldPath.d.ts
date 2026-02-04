// TypeScript definitions for the C3 type FieldPath

/**
 * A "field path" is a simple expression for referencing a field from an Obj. The field can either be on the Obj
 * itself, in which case the path is just the name, or it can be a field on a child Obj or within a collection field.
 * A child field is represented by separating the names with periods (`address.city`).
 *
 * The "root" is the Obj from which the field path is valid. The "referenced" field is the last component of the path.
 *
 * The field path need not be valid in the sense that not all fields need to exist. If the #parse method is called
 * without failIfInvalid, it will be structurally complete, but the parts which don't exist will not have a
 * #fieldPath and children down the path will not have a #parentType.
 *
 * Path components may include collections and individual elements of the collection may be specified. In addition,
 * for collections whose elements are Objs the path may continue through them into fields of those Objs. An element
 * in a collection is specified using traditional array notation: `[` _elt_ `]`. For
 * {@link CollectionType#isIndexed indexable collections}, notably {@link Array} and {@link Set}, the _elt_ may be a
 * zero-based integer index (`[0]`). For {@link Map} and Set, and it may be the string serialized version of the key
 * plain (`[x]`) or quoted as a string (`["x"]`). If the key looks like an integer or contains a bracket, it must be
 * a quoted string. Quotes within the string must be escaped as usual, and either single- (`'`) or double-quotes (`"`)
 * may be used.
 *
 * For example, from the *Animal* type, the path "friends[0].name" will reference through the `friends` array field and
 * will have the value type `string` (since Animal.name is a string). When used with {@link Obj#fieldValueAtPath}, this
 * will get the name of the first friend. From *Octopus*, "hearts[systemic].active" will determine if the systemic
 * heart is active.
 *
 * @remarks this represents a value passed to a method that expects an instance of FieldPath
 */
declare interface IFieldPath {
}

/**
 * A "field path" is a simple expression for referencing a field from an Obj. The field can either be on the Obj
 * itself, in which case the path is just the name, or it can be a field on a child Obj or within a collection field.
 * A child field is represented by separating the names with periods (`address.city`).
 *
 * The "root" is the Obj from which the field path is valid. The "referenced" field is the last component of the path.
 *
 * The field path need not be valid in the sense that not all fields need to exist. If the #parse method is called
 * without failIfInvalid, it will be structurally complete, but the parts which don't exist will not have a
 * #fieldPath and children down the path will not have a #parentType.
 *
 * Path components may include collections and individual elements of the collection may be specified. In addition,
 * for collections whose elements are Objs the path may continue through them into fields of those Objs. An element
 * in a collection is specified using traditional array notation: `[` _elt_ `]`. For
 * {@link CollectionType#isIndexed indexable collections}, notably {@link Array} and {@link Set}, the _elt_ may be a
 * zero-based integer index (`[0]`). For {@link Map} and Set, and it may be the string serialized version of the key
 * plain (`[x]`) or quoted as a string (`["x"]`). If the key looks like an integer or contains a bracket, it must be
 * a quoted string. Quotes within the string must be escaped as usual, and either single- (`'`) or double-quotes (`"`)
 * may be used.
 *
 * For example, from the *Animal* type, the path "friends[0].name" will reference through the `friends` array field and
 * will have the value type `string` (since Animal.name is a string). When used with {@link Obj#fieldValueAtPath}, this
 * will get the name of the first friend. From *Octopus*, "hearts[systemic].active" will determine if the systemic
 * heart is active.
 *
 * @remarks this represents a made instance of FieldPath
 */
declare class FieldPath {

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
  static fromString(s: string | null): FieldPath | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): FieldPath | null;

  /**
   * Get the actual type information for the root type referenced by name.
   */
  rootType(failIfInvalid?: boolean): Type | null;

  /**
   * Get the actual type information for the root type referenced by name.
   */
  rootTypeMeta(failIfInvalid?: boolean): TypeMeta | null;

  /**
   * The root of the field path
   */
  root(): FieldPath;

  /**
   * Get the actual type information for the immediate type of the referenced field.
   */
  parentType(failIfInvalid?: boolean): Type | null;

  /**
   * Get the actual type information for the immediate type of the referenced field.
   */
  parentTypeMeta(failIfInvalid?: boolean): TypeMeta | null;

  /**
   * If the path ends with a reference field or a collection of references, return the type of the reference.
   */
  dereference(failIfInvalid?: boolean): Type | null;

  /**
   * If the path ends with a reference field or a collection of references, return the type of the reference.
   */
  dereferenceMeta(failIfInvalid?: boolean): TypeMeta | null;

  /**
   * Get the name of the referenced field (last component of the path).
   */
  leafName(failIfInvalid?: boolean): string | null;

  /**
   * Get the declaration of the referenced field (last component of the path).
   */
  leafFieldType(failIfInvalid?: boolean): FieldType | null;

  /**
   * Parse the path on the given type
   */
  static parse(type: Type, path: string, failIfInvalid?: boolean): FieldPath | null;

  /**
   * Parse the path with the parent FieldPath on the given type for the given field type
   */
  static parseChild(parent: FieldPath, type: Type, ft: FieldType): FieldPath | null;

  /**
   * Immediate parent field in the path.
   */
  parent(): FieldPath | null;

  /**
   * If this element of the path is a collection index, the index value. An `int` index is used for indexable
   * collections, such as arrays and sets (and maps if indexed). A `string` index is used for unique collections
   * such as sets (elements) and maps (keys).
   */
  index(): number | null | string | null | null;

  /**
   * Whether this element of the path includes a collection index.
   *
   * @see #index
   */
  isIndexed(): boolean;

  /**
   * Dot separated path of this field from the root to the first deepest ancestor type.
   * Null if root type is including stored type.
   */
  pathToIncludingStoredType(): FieldPath | null;

  /**
   * First ancestor field path that is a map.
   */
  includingMapField(): FieldPath | null;

  /**
   * Collection type of first ancestor field path that is a collection.
   */
  includingMapType(): CollectionType | null;

  /**
   * Fully qualified dot separated path of this field including root type name.
   */
  qualifiedPath(): string | null;

  /**
   * Reference type of this field if it's a reference or collection of reference.
   */
  referenceType(): ReferenceType | null;

  /**
   * Dot separated path of this field in the root type.
   */
  pathInRootType(): string | null;

  /**
   * @return if field is persistable
   */
  isPersistable(): boolean;

  /**
   * @return true if field is a collection
   */
  isCollection(): boolean;

  /**
   * Dot separated path of this field in the first persistable ancestor type.
   */
  pathInIncludingStoredType(): string | null;

  /**
   * Dot separated path of this field in the specified type. This type should be in the parent chain of this field otherwise
   * path in the root type will be returned.
   */
  pathInIncludingType(type: Type): string | null;

  /**
   * Dot separated path of this field in the first persistable ancestor type or first ancestor collection.
   */
  pathInIncludingStoredTypeOrCollection(): string | null;

  /**
   * First ancestor type that is persistable.
   */
  includingStoredType(): Type | null;

  /**
   * Field type of this field.
   */
  fieldType(): FieldType | null;

  /**
   * Leaf field type by traversing from given Obj instance.
   */
  fieldTypeFromObj(inst: Obj): FieldType | null;

  /**
   * Name of this field.
   */
  name(): string | null;

  /**
   * Name of this field, including the collection index if any.
   */
  nameAndIndex(serialized?: boolean): string | null;

  /**
   * Value type of this field.
   */
  valueType(): ValueType | null;

  /**
   * For paths which go through collection fields column type is array of valueType otherwise valueType.
   */
  columnType(): ValueType | null;

  /**
   * First collection field from the parent chain where this field is persisted. Generally speaking field is persisted
   * either in the parent persistable type, or in the first ancestor persistable type or in a first ancestor collection.
   */
  includingCollection(): FieldPath | null;

  /**
   * First non-included reference field from the parent chain where this field is persisted.
   */
  includingStoredField(): FieldPath | null;

  /**
   * Walk the path by calling action for each field starting from root
   */
  each(action: λConsumer<FieldPath>): void;

  /**
   * Walk the path by calling action for each field starting from root
   */
  each(action: λTriConsumer<FieldPath, number, boolean>): void;

  /**
   * Walk the path by calling action and accumulating result into a single value
   */
  fold(folder: λBiFunction<FieldPath, T | null, T | null>): T | null;

  /**
   * Walk the path by calling action and accumulating result into a single value
   */
  fold(initial?: T | null, folder: λQuadFunction<FieldPath, number, boolean, T | null, T | null>): T | null;

  /**
   * Creates a new field path as a copy of this one, replacing the field type
   * with the requested field type
   *
   * @param fieldType
   *        requested new field type
   * @return new field type based on this one with the new requested field type
   */
  withFieldType(fieldType: FieldType): FieldPath;

  /**
   * True if this field has an annotation `hasUnique` set
   */
  isUnique(): boolean;

  /**
   * Traverses this reference or reference collection by adding a new child
   * field based on fieldName and returns new FieldPath.
   * <p>
   * If verify argument is set to true then will throw an exception if fieldName is invalid
   */
  traverse(fieldName: string, failIfInvalid?: boolean): FieldPath | null;

  /**
   * Traverses this reference or reference collection by adding a new child
   * field based on fieldName and returns new FieldPath.
   * <p>
   * If verify argument is set to true then will throw an exception if fieldName is invalid
   */
  traverse(fieldParentType: Type, fieldName: string, failIfInvalid?: boolean): FieldPath | null;

  /**
   * Adds a field path to the end of this field path for a ref type and field type. The ref type may be different than
   * the ref type for this field path as this is used to create field paths for calc expressions that reference
   * extension fields not defined in the base reference type
   */
  append(refType: Type, ft: FieldType): FieldPath;

  /**
   * Adds a field path to the end of this field path for a ref type and field type. The ref type may be different than
   * the ref type for this field path as this is used to create field paths for calc expressions that reference
   * extension fields not defined in the base reference type
   */
  append(refType: TypeMeta, ft: FieldType): FieldPath;

  /**
   * First field in the original path.
   */
  first(): FieldPath;

  /**
   * @return true if this field is any kind of fkey ref (one-2-one or one-2-many or many-2-many)
   */
  isFkeyRef(): boolean;

  /**
   * @return whether this value type is an fkey reference arry field.
   */
  isFkeyRefArray(): boolean;

  /**
   * @return field path that is a key in the source type for a read only one to many relationship.
   */
  fkeyRefKey(): string | null;

  /**
   * @return field path that is a key in the source type for a read only one to many relationship.
   */
  fkeyRefKeyField(): FieldPath | null;

  /**
   * @return field path that is a foreign key in the reference type for a read only one to many
   *         relationship.
   */
  fkeyRefFkey(): string | null;

  /**
   * @return field path that is a foreign key in the reference type for a read only one to many
   *         relationship.
   */
  fkeyRefFkeyField(): FieldPath | null;

  /**
   * @return order spec to be used for a read only one to many relationship.
   */
  fkeyRefOrder(): string | null;

  /**
   * @return A new field path constructed by appending the input field path to this field path from this field path's root
   *          type.
   */
  traverseFieldPath(fieldPath: string): FieldPath | null;

  /**
   * @return A new field path constructed by traversing this field or serialized field from this field path's root type
   */
  traverseSer(fieldName: string, failIfMissing?: boolean): FieldPath | null;

  /**
   * @return Array of field paths of the reference type of this field. If this field is not a ref or ref array
   *         or map returns empty array.
   */
  children(): C3.Array<FieldPath | null>;

  /**
   * @return The physical table name to use in relational queries for the collection.
   */
  collectionTableName(doNotFailOnError?: boolean): string | null;

  /**
   * @return The CollectionType for the field if the field is a collection field and null otherwise.
   */
  collectionType(): CollectionType | null;

  /**
   * @return the list of all fields that the calc expression that this field depends on if it is calculated.
   */
  calcExprDepFields(): C3.Array<FieldPath | null>;

  /**
   * Serialization name of this field.
   */
  serName(): string | null;

  /**
   * Fully serialized path of this field.
   */
  fullSerPath(): string | null;
}


interface λTriConsumer<T, U, V> {
  (t: T, u: U, v: V): void
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}
