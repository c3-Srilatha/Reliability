// TypeScript definitions for the C3 type PostgreSQL

/**
 * This type provide interface to postgreSQL of a cluster.
 *
 * @remarks this represents a value passed to a method that expects an instance of PostgreSQL
 */
declare interface IPostgreSQL {
}

/**
 * This type provide interface to postgreSQL of a cluster.
 *
 * @remarks this represents a made instance of PostgreSQL
 */
declare class PostgreSQL {

  /**
   * check the postgreSQL status of the cluster
   * @param clusterId
   *        the cluster where to check postgreSQL status. If it is not provided, will use the current clusterId
   * @return postgreSQL status of given cluster
   *         return true if there is at least one available postgreSQL instance that is available
   *         return false if there is no available postgreSQL instance
   */
  static status(clusterId?: string | null): C3.Array<AwsRds | null>;

  /**
   * start postgreSQL for the cluster if not already exists
   * @param clusterId
   *        the cluster where to bring up postgreSQL. If it is not provided, will use the current clusterId
   * @param count
   *        the number of postgreSQL to bring up. If it is not provided, will use default 1
   */
  static start(clusterId?: string | null, count?: number | null): void;
}

