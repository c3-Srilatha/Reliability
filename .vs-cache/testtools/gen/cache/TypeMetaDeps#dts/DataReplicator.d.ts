// TypeScript definitions for the C3 type DataReplicator

/**
 * Data replication API that can be used to setup data before a PSR test for any base application
 *
 * @remarks this represents a value passed to a method that expects an instance of DataReplicator
 */
declare interface IDataReplicator {
}

/**
 * Data replication API that can be used to setup data before a PSR test for any base application
 *
 * @remarks this represents a made instance of DataReplicator
 */
declare class DataReplicator {

  /**
   * Main API for setting up data for PSR tests
   * @param spec
   *   {@link DataReplicatorSpec} instance that configures the replication, post-replication and sanity check processes during setup
   * @return Whether the sanity check passes successfully if provided in {@link DataReplicatorSpec}, true otherwise
   */
  static setupData(spec: DataReplicatorSpec): boolean;
}

