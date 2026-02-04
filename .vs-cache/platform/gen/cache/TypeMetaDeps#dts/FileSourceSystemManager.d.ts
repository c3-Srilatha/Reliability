// TypeScript definitions for the C3 type FileSourceSystemManager

/**
 * Represents a utility type for local {@link FileSourceSystem}s.
 *
 * @remarks this represents a value passed to a method that expects an instance of FileSourceSystemManager
 */
declare interface IFileSourceSystemManager {
}

/**
 * Represents a utility type for local {@link FileSourceSystem}s.
 *
 * @remarks this represents a made instance of FileSourceSystemManager
 */
declare class FileSourceSystemManager {

  /**
   * Checks the source system for connectivity.
   *
   * @param credentials
   *            The credentials for the target source system.
   * @return The ping result.
   */
  static ping(credentials?: any | null): PingResult | null;

  /**
   * See {@link FileSourceSystemManager#ping}
   *
   * @param sourceSystemName
   *            The target source system name
   * @return The ping result
   */
  static pingByName(sourceSystemName: string): PingResult | null;

  /**
   * Fetches the source system collections from the remote location.
   * NOTE:
   * - The source collections returned do not have the `source` field set as as a TypeRef, the corresponding
   *   type has to exist. But it is not always the case. Call `SourceCollectionManager.remoteCollectionSource` to get the
   *   source type metadata.
   *
   * @param credentials
   *            The credentials for the target source system.
   * @param spec
   *            The spec to customize the results.
   * @param sourceSystemName
   *            The name for the target source system.
   * @return The list of names of remote {@link FileSourceCollection}s associated to the given source system.
   */
  static sourceSystemRemoteCollections(credentials?: any | null, sourceSystemName: string, spec?: SourceCollectionUiSpec | null): C3.Array<string | null>;

  /**
   * Gets extra information regarding the FileSourceSystem's source collections.
   * - The map key is the source collection name.
   *
   * @param sourceSystem
   *            The target source system.
   * @return Extra information regarding the FileSourceSystem's source collections.
   */
  static sourceCollectionsExtra(sourceSystem: any): any | null;
}

