// TypeScript definitions for the C3 type DataConnectorCredentialManagement

/**
 * @remarks this represents a value passed to a method that expects an instance of DataConnectorCredentialManagement
 */
declare interface IDataConnectorCredentialManagement {
}

/**
 * @remarks this represents a made instance of DataConnectorCredentialManagement
 */
declare class DataConnectorCredentialManagement {

  /**
   * Retrieve all credential of the data store type that the caller has access to.
   *
   * @param datastore
   *           The data store type.
   */
  static retrieveAll(datastore: string): C3.Array<FileSystemDataConnectorCredential | null | JdbcStoreDataConnectorCredential | null | JsonDataConnectorCredential | null | null>;

  /**
   * Create or update the credential in {@link JdbcCredentials}.
   */
  static upsert(credential: FileSystemDataConnectorCredential | null | JdbcStoreDataConnectorCredential | null | JsonDataConnectorCredential | null): boolean;

  /**
   * Remove the credential.
   */
  static remove(credential: FileSystemDataConnectorCredential | null | JdbcStoreDataConnectorCredential | null | JsonDataConnectorCredential | null): boolean;

  /**
   * Get the credential.
   *
   * @param credential
   *           The credential id
   */
  static get(credential?: string | null, datastore: string): FileSystemDataConnectorCredential | null | JdbcStoreDataConnectorCredential | null | JsonDataConnectorCredential | null | null;

  /**
   * Create the credential used for the storage service storing the shared files.
   *
   * @param credential
   *           The credential {@link FileSystemDataConnectorCredential}
   */
  static createSharedFileStorageCredential(credential: DataConnectorSharedFileStorageCredential): boolean;

  /**
   * Obtain the credential used for the storage service storing the shared files.
   */
  static sharedFileStorageCredential(): DataConnectorSharedFileStorageCredential | null;
}

