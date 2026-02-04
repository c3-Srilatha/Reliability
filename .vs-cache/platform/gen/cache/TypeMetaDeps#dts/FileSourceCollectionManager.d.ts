// TypeScript definitions for the C3 type FileSourceCollectionManager

/**
 * Represents a utility type for {@link FileSourceCollection}s.
 *
 * @remarks this represents a value passed to a method that expects an instance of FileSourceCollectionManager
 */
declare interface IFileSourceCollectionManager {
}

/**
 * Represents a utility type for {@link FileSourceCollection}s.
 *
 * @remarks this represents a made instance of FileSourceCollectionManager
 */
declare class FileSourceCollectionManager {

  /**
   * Infers the source type metadata associated to the remote source collection.
   *
   * @param sourceSystemName
   *            The name of the source system for the target source collection.
   * @param sourceSystemTypeName
   *            The type name for the target source system of the source collection.
   * @param sourceCollectionName
   *            The target source collection name.
   * @return A json representing the type metadata associated to the remote collection.
   */
  static remoteCollectionSourceBySourceSystem(sourceSystemName: string, sourceCollectionName: string, credentials?: any | null): TypeMeta | null;

  /**
   * See {@link FileSourceCollectionManager#remoteCollectionSourceBySourceSystem}
   *
   * @param sourceSystemName
   *            The source system id for the target source collection.
   * @param sourceCollectionName
   *            The target source collection name.
   * @return A json representing the type metadata associated to the remote collection.
   */
  static remoteCollectionSourceBySourceSystemName(sourceSystemName: string, sourceCollectionName: string): TypeMeta | null;

  /**
   * Adds a file to a {@link FileSourceCollection}
   * @param fileName The file name
   * @param content The file content
   * @param sourceCollection The File Source Collection
   *
   * @return boolean Returns true if the action completes successfully
   */
  static addFileToCollection(fileName: string, content: string, sourceCollection: FileSourceCollection): boolean;

  /**
   * Compares the fields names and data types of the local source collection from the remote version
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

