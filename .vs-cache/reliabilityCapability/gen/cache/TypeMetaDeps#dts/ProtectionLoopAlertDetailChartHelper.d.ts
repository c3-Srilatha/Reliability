// TypeScript definitions for the C3 type ProtectionLoopAlertDetailChartHelper

/**
 * Type to fetch chart config for Protection Loop Alert Detail Chart
 *
 * @remarks this represents a value passed to a method that expects an instance of ProtectionLoopAlertDetailChartHelper
 */
declare interface IProtectionLoopAlertDetailChartHelper {
}

/**
 * Type to fetch chart config for Protection Loop Alert Detail Chart
 *
 * @remarks this represents a made instance of ProtectionLoopAlertDetailChartHelper
 */
declare class ProtectionLoopAlertDetailChartHelper {

  /**
   * Function to fetch protection loop alert detail chart config.
   */
  static getChartConfig(spec?: ProtectionLoopAlertDetailChartHelper.Spec, alert: ProtectionLoopAlert): any | null;
}

