// TypeScript definitions for the C3 type ExecutionEnvironment

/**
 * Instances of this type can apply lambda or execute the job in the corresponding context that instance of this type
 * represents. Execution context can be a Cluster, Server Node, Tenant and Tag.
 *
 * @see TagAware
 * @see TenantAware
 * @see TenantTagAware
 * @see ServerNodeAware
 * @see ClusterAware
 * @see Cluster
 *
 * @remarks this represents a value passed to a method that expects an instance of ExecutionEnvironment
 */
declare interface IExecutionEnvironment {
}

/**
 * Instances of this type can apply lambda or execute the job in the corresponding context that instance of this type
 * represents. Execution context can be a Cluster, Server Node, Tenant and Tag.
 *
 * @see TagAware
 * @see TenantAware
 * @see TenantTagAware
 * @see ServerNodeAware
 * @see ClusterAware
 * @see Cluster
 *
 * @remarks this represents a made instance of ExecutionEnvironment
 */
declare class ExecutionEnvironment {

  /**
   * C3 Type of this instance.
   */
  type(): Type;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ExecutionEnvironment;

  /**
   * Apply provided lambda in the context of this instance.
   */
  apply(action: λSupplier<any>, authToken?: string | null): any;

  /**
   * @return execution target cluster root URL; i.e. `ClusterAware#cluster` if provided or `null` otherwise.
   */
  targetCluster(): string | null;

  /**
   * @return execution target server node id; i.e. `ServerNodeAware#serverNodeId` if provided or `null` otherwise.
   */
  targetServerNodeId(): string | null;

  /**
   * @return execution target server node ip address; i.e. `ServerNodeAware#serverIpAddress` if provided or `null`
   *         otherwise.
   */
  targetServerIpAddress(): string | null;

  /**
   * @return execution target server node http port; i.e. `ServerNodeAware#httpPort` if provided or `null` otherwise.
   */
  targetServerHttpPort(): number | null;

  /**
   * @return execution target tenant id; i.e. `TenantAware#tenant` if provided otherwise if `ClusterAware#cluster` is
   *         not set then current tenant. However if `ClusterAware#cluster` is set and `TenantAware#tenant` is not then
   *         target cluster assumed to be single tenant and this method will return `null`.
   */
  targetTenant(): string | null;

  /**
   * @return execution target tag id; i.e. `TagAware#tag` if provided otherwise `c3` if sub type is also `TenantAware`
   *         and it's `TenantAware#tenant` is set. In all other cases will return `null`.
   */
  targetTag(): string | null;

  /**
   * @return `true` if target as cluster i.e. any node in that cluster.
   */
  isClusterAware(): boolean;

  /**
   * @return `true` if target as a specific server node.
   */
  isServerNodeAware(): boolean;

  /**
   * @return `true` if this execution environment has a specific target tenant.
   */
  isTenantAware(): boolean;

  /**
   * @return `true` if this execution environment has a specific target tag.
   */
  isTagAware(): boolean;

  /**
   * @return end-point URL for this execution environment for given kind. Defaults to API.
   */
  endpoint(kind?: string | null): string;
}


interface λSupplier<R> {
  (): R
}
