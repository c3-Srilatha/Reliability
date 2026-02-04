// TypeScript definitions for the C3 type SourceSystemManager

/**
 * Represents a utility type for {@link SourceSystem}s.
 *
 * @remarks this represents a value passed to a method that expects an instance of SourceSystemManager
 */
declare interface ISourceSystemManager {
}

/**
 * Represents a utility type for {@link SourceSystem}s.
 *
 * @remarks this represents a made instance of SourceSystemManager
 */
declare class SourceSystemManager {

  /**
   * Checks the source system for connectivity.
   *
   * @param sourceSystemTypeName
   *            The type of the source system.
   * @param credentials
   *            The credentials of the target datastore. It must have a `name` field representing the actual instance name.
   * @return The ping result
   */
  static ping(sourceSystemTypeName: string, credentials?: any | null): PingResult | null;

  /**
   * See {@link SourceSystemManager#ping}
   *
   * @param sourceSystemName
   *            The target source system name
   * @return The ping result
   */
  static pingByName(sourceSystemName: string): PingResult | null;

  /**
   * Fetches the source system collections both remotely and locally, then merges them by name and provides information
   * on whether each collection resides in both environments and whether their schemas match.
   *
   * @param credentials
   *            The credential json of the target source system.
   * @param sourceSystemName
   *            The name of the target source system.
   * @param sourceSystemTypeName
   *            The type of the source system.
   * @param spec
   *            A specification used to filter the results
   * @return The merged list of remote and local {@link SourceCollectionUi} associated to the given source system.
   */
  static sourceSystemRemoteAndLocalCollectionsInfos(credentials?: any | null, sourceSystemName: string, sourceSystemTypeName: string, spec?: SourceCollectionUiSpec | null): C3.Array<SourceCollectionUi | null>;

  /**
   * See {@link SourceSystemManager#sourceSystemRemoteAndLocalCollectionsInfos}
   *
   * @param sourceSystemName
   *            The name of the target source system
   * @param spec
   *            A specification used to filter the result.
   * @return The merged list of remote and local {@link SourceCollectionUi} associated to the given source system.
   */
  static sourceSystemRemoteAndLocalCollectionsInfosByName(sourceSystemName: string, spec?: SourceCollectionUiSpec | null): C3.Array<SourceCollectionUi | null>;

  /**
   * Fetches the local source collections associated to the given sourceSystemName.
   *
   * @param sourceSystemName
   *            The name of the target source system
   * @param spec
   *            A specification used to filter the result.
   * @return The list of local {@link SourceCollectionUi}s associated to the given source system.
   */
  static sourceSystemLocalCollections(sourceSystemName: string, spec?: SourceCollectionUiSpec | null): C3.Array<any | null>;
}

