// TypeScript definitions for the C3 type SourceCollectionManager

/**
 * Represents a utility type for {@link SourceCollection}s.
 *
 * @remarks this represents a value passed to a method that expects an instance of SourceCollectionManager
 */
declare interface ISourceCollectionManager {
}

/**
 * Represents a utility type for {@link SourceCollection}s.
 *
 * @remarks this represents a made instance of SourceCollectionManager
 */
declare class SourceCollectionManager {

  /**
   * Infers the source type metadata associated to the remote source collection.
   * The json output has the structure of a {@link Type}.
   *
   * @param sourceSystemName
   *            The name of the target source system.
   * @param sourceSystemTypeName
   *            The type name of the target source system.
   * @param sourceCollectionName
   *            The target source collection name.
   * @param credentials
   *            The credentials for the target source system.
   * @return A json representing the type metadata associated to the remote collection.
   */
  static remoteCollectionSourceBySourceSystem(sourceSystemName: string, sourceSystemTypeName: string, sourceCollectionName: string, credentials?: any | null): TypeMeta | null;

  /**
   * See {@link SourceCollectionManager#remoteCollectionSourceBySourceSystem}
   *
   * @param sourceSystemName
   *            The target source system name.
   * @param sourceCollectionName
   *            The target source collection name.
   * @return A json representing the type metadata associated to the remote collection.
   */
  static remoteCollectionSourceBySourceSystemName(sourceSystemName: string, sourceCollectionName: string): TypeMeta | null;

  /**
   * Infers the source type metadata from the given array of fields names with associated values.
   * The json output has the structure of a {@link Type}.
   *
   * @param sourceFieldsValues
   *            Array of the fields and values to infer the {@link ValueType}s from.
   *            - The content of the array is a json keyed on the field names and whose values are the
   *              fields values.
   * @return A json representing the type metadata associated to the given data.
   */
  static remoteCollectionSchemaByData(sourceFieldsValues: C3.Array<any | null>): any | null;

  /**
   * Return the list of {@link SourceCollectionManager#remoteCollectionSchemaByData}
   *
   * @param sourcesFieldsValues
   *            Array of the various sources to infer the schema from.
   * @return A list of json representing the type metadata associated to each data source.
   */
  static remoteCollectionSchemasByData(sourcesFieldsValues: C3.Array<C3.Array<any | null>>): C3.Array<any | null>;

  /**
   * Gets the source type metadata associated to the local source collection.
   * The json output has the structure of a {@link Type}.
   *
   * @param sourceCollectionName
   *            The target source collection name
   * @return A json representing the type metadata associated to the local source collection.
   */
  static localCollectionSourceBySourceCollectionName(sourceCollectionName: string): TypeMeta | null;

  /**
   * Gets the source collection type from the given source system type name.
   *
   * @param sourceSystemTypeName
   *            The target sourceSystem type name.
   * @return The source collection type associated to the given source system type name.
   */
  static sourceCollectionTypeBySourceSystemTypeName(sourceSystemTypeName: string): Type | null;

  /**
   * Compares the fields names or schema name and data types of the local source collection from the remote version
   *
   * @param sourceCollectionName
   *            name of the source collection
   * @param localFields
   *            field types in local source
   * @param remoteFields
   *            field types in remote source
   * @return The source collection type associated to the given source system type name.
   */
  static localSourceCollectionFieldsMismatchesWithRemote(sourceCollectionName?: string | null, localFields?: C3.Array<DeclaredFieldType | null>, remoteFields?: C3.Array<DeclaredFieldType | null>): C3.Map<string | null, string | null>;
}

