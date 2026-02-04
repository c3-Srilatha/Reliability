// TypeScript definitions for the C3 type LoadAnalyzer

/**
 * @remarks this represents a value passed to a method that expects an instance of LoadAnalyzer
 */
declare interface ILoadAnalyzer<M> {
}

/**
 * @remarks this represents a made instance of LoadAnalyzer
 */
declare class LoadAnalyzer<M> {

  /**
   * Generate Load Profile for input objects based on config and write results to usageSummaryType
   */
  static profile(object?: M | null, consumptionKPI?: string | null, weatherKPI?: string | null, config?: LoadAnalyzerConfig | null): void;

  /**
   * 1. Cluster all objects obtained from usageSummaryType
   * 2. Create cluster entries in clusterStatsType
   * 3. Update objects being clustered with references to their respective clusters.
   */
  static cluster(config?: LoadAnalyzerClusterConfig | null): void;

  /**
   * Generate stats for the cluster (mean, oneSigma and twoSigma) and persist those in the cluster object
   * @param: clusterIds for which cluster stats need to be calculated
   */
  static generateClusterStats(clusterIds?: C3.Array<string | null>, config?: LoadAnalyzerConfig | null): void;

  /**
   * Generate stats for all clusters
   */
  static generateClusterStatsAll(config?: LoadAnalyzerConfig | null): void;

  /**
   * For each clusterId cleanup:
   * 1. Null references to clusterId in Objects referencing it
   * 2. ClusterStats row representing the cluster
   */
  static purgeClusterStats(clusterIds?: C3.Array<string | null>, config?: LoadAnalyzerConfig | null): void;

  /**
   * For all clusterIds cleans up:
   * 1. Null references to clusterId in Objects referencing it
   * 2. ClusterStats row representing the cluster
   * 3. Timeseries data for ClusterMean, ClusterOneSigma and ClusterTwoSigma
   */
  static purgeAll(config?: LoadAnalyzerConfig | null): void;
}

