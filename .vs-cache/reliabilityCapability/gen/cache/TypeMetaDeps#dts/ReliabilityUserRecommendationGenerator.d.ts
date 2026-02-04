// TypeScript definitions for the C3 type ReliabilityUserRecommendationGenerator

/**
 * Type which contains the recommendation generators for {@link ReliabilityUserRecommendation}s.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityUserRecommendationGenerator
 */
declare interface IReliabilityUserRecommendationGenerator {
}

/**
 * Type which contains the recommendation generators for {@link ReliabilityUserRecommendation}s.
 *
 * @remarks this represents a made instance of ReliabilityUserRecommendationGenerator
 */
declare class ReliabilityUserRecommendationGenerator {

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetCase} is created.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @return A {@link ReliabilityUserRecommendation} object for the new case.
   */
  static generateNewCaseRecommendation(args?: Map_Type<string, any>): ReliabilityUserRecommendation | null;

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetCase} is updated.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @return A {@link ReliabilityUserRecommendation} object for the updated case.
   */
  static generateUpdatedCaseRecommendation(args?: Map_Type<string, any>): ReliabilityUserRecommendation | null;

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link WorkOrder} is created.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @return A {@link ReliabilityUserRecommendation} object for the new work order.
   */
  static generateNewWorkOrderRecommendation(args?: Map_Type<string, any>): ReliabilityUserRecommendation | null;

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link WorkOrder} is updated.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @return A {@link ReliabilityUserRecommendation} object for the updated work order.
   */
  static generateUpdatedWorkOrderRecommendation(args?: Map_Type<string, any>): ReliabilityUserRecommendation | null;

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetAlert} is created.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @return A {@link ReliabilityUserRecommendation} object for the new alert.
   */
  static generateNewAlertRecommendation(args?: Map_Type<string, any>): ReliabilityUserRecommendation | null;

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link SensorHealthAlert} is created.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @return A {@link ReliabilityUserRecommendation} object for the new sensor alert.
   */
  static generateNewSensorAlertRecommendation(args?: Map_Type<string, any>): ReliabilityUserRecommendation | null;

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAsset} which has an {@link AssetClass} does not have a live model for too long.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @param daysAfterCreated
   *           Number of days after creation to wait before generating recommendation (default: 14).
   * @param daysWithDeployedModel
   *           Number of days with deployed model to wait before generating recommendation (default: 2).
   * @param renotifyAfterDays
   *           Number of days to wait before re-notifying (default: 7).
   * @return An array of {@link ReliabilityUserRecommendation} objects for model activation.
   */
  static generateActivateModelRecommendation(args?: Map_Type<string, any>, daysAfterCreated?: number = '14', daysWithDeployedModel?: number = '2', renotifyAfterDays?: number = '7'): Array_Type<ReliabilityUserRecommendation> | null;

  /**
   * Generates a {@link ReliabilityUserRecommendation} for when a {@link ReliabilityAssetAlert} is open for too long.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   * @param daysUnresolved
   *           Number of days the alert has been unresolved (default: 2).
   * @param renotifyAfterDays
   *           Number of days to wait before re-notifying (default: 2).
   * @return An array of {@link ReliabilityUserRecommendation} objects for unresolved alerts.
   */
  static generateUnresolvedAlertRecommendation(args?: Map_Type<string, any>, daysUnresolved?: number = '2', renotifyAfterDays?: number = '2'): Array_Type<ReliabilityUserRecommendation> | null;

  /**
   * Runs {@link UserRecommendationCategory#generateRecommendation} for categories which are based on some period of time elapsing. Used for {@link CronJob} purposes.
   * @param args
   *           A map containing arguments needed for recommendation generation.
   */
  static generateTimeBasedRecommendations(args?: Map_Type<string, any>): void;
}

