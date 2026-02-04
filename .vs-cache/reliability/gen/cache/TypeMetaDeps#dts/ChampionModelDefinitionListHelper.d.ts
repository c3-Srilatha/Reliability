// TypeScript definitions for the C3 type ChampionModelDefinitionListHelper

/**
 * Helper type to get Current Champion Model Information
 *
 * @remarks this represents a value passed to a method that expects an instance of ChampionModelDefinitionListHelper
 */
declare interface IChampionModelDefinitionListHelper {
}

/**
 * Helper type to get Current Champion Model Information
 *
 * @remarks this represents a made instance of ChampionModelDefinitionListHelper
 */
declare class ChampionModelDefinitionListHelper {

  /**
   * Returns Current Champion Model
   *
   * @param spec
   *           The specification object containing parameters for retrieving the champion model
   * @return The current champion model data
   */
  static get(spec?: any): any | null;
}

