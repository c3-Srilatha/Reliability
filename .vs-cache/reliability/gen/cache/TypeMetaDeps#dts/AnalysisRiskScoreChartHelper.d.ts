// TypeScript definitions for the C3 type AnalysisRiskScoreChartHelper

/**
 * Helper type with helper functions for the Analysis Chart.
 *
 * @remarks this represents a value passed to a method that expects an instance of AnalysisRiskScoreChartHelper
 */
declare interface IAnalysisRiskScoreChartHelper {
}

/**
 * Helper type with helper functions for the Analysis Chart.
 *
 * @remarks this represents a made instance of AnalysisRiskScoreChartHelper
 */
declare class AnalysisRiskScoreChartHelper {

  /**
   * Fetches the feature options for the given assets with the asset name prepended.
   * The spec should just contain the filter for the assets to fetch
   * the feature options for.
   *
   * @param spec
   *           The fetch specification containing filters for assets
   * @param project
   *           The reliability ML project
   * @return A fetch result containing feature options with asset names prepended
   */
  static getFeatureOptionsForAssets(spec?: FetchSpec, project?: ReliabilityMl.Project): FetchResult<any> | null;

  /**
   * Fetches the sensor options for the given {@link ReliabilityAssetSensorRelation}s with the asset name prepended.
   * The spec should just contain the filter for the
   * {@link ReliabilityAssetSensorRelation}s to fetch the sensor options for.
   *
   * @param spec
   *           The fetch specification containing filters for asset sensor relations
   * @return A fetch result containing sensor options with asset names prepended
   */
  static getSensorOptionsForAssetSensorRelations(spec?: FetchSpec): FetchResult<any> | null;
}

