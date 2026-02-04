// TypeScript definitions for the C3 type CaseAndWorkOrderStatusCollectionListHelper

/**
 * Type to fetch data for the Case and Work Order Status Collection List on Overview Page.
 *
 * @remarks this represents a value passed to a method that expects an instance of CaseAndWorkOrderStatusCollectionListHelper
 */
declare interface ICaseAndWorkOrderStatusCollectionListHelper {
}

/**
 * Type to fetch data for the Case and Work Order Status Collection List on Overview Page.
 *
 * @remarks this represents a made instance of CaseAndWorkOrderStatusCollectionListHelper
 */
declare class CaseAndWorkOrderStatusCollectionListHelper {

  /**
   * Fetches counts of open and closed cases and work orders for the selected facilities.
   *
   * @param selectedFacilities A JSON string representing the list of selected facility IDs.
   * @returns A JSON object containing the aggregated counts of cases and work orders.
   *   - `objs`: An array containing the status data for latest open/closed cases and work orders.
   *   - `count`: The total count of categories (always 4 in this case).
   *   - `hasMore`: A boolean indicating whether more data is available (always false in this case).
   */
  static fetch(selectedFacilities?: string): any | null;
}

