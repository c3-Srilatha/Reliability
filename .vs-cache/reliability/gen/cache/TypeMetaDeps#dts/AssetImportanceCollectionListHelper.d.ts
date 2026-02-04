// TypeScript definitions for the C3 type AssetImportanceCollectionListHelper

/**
 * Type to fetch data for the AssetImportance Collection List on Overview Page.
 *
 * @remarks this represents a value passed to a method that expects an instance of AssetImportanceCollectionListHelper
 */
declare interface IAssetImportanceCollectionListHelper {
}

/**
 * Type to fetch data for the AssetImportance Collection List on Overview Page.
 *
 * @remarks this represents a made instance of AssetImportanceCollectionListHelper
 */
declare class AssetImportanceCollectionListHelper {

  /**
   * Fetches the most important assets with and without alerts for the selected facilities.
   *
   * @param selectedFacilities A JSON string representing the list of selected facility IDs.
   * @returns A JSON object containing the aggregated counts of the most important assets.
   *   - `objs`: An array containing the asset importance objs count and data.
   *   - `count`: The total count of AssetImportance objs (always 2 in this case).
   *   - `hasMore`: A boolean indicating whether more data is available (always false in this case).
   */
  static fetchMostImportantAssets(selectedFacilities?: string): any | null;
}

