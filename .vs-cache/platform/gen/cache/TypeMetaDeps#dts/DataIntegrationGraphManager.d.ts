// TypeScript definitions for the C3 type DataIntegrationGraphManager

/**
 * @remarks this represents a value passed to a method that expects an instance of DataIntegrationGraphManager
 */
declare interface IDataIntegrationGraphManager {
}

/**
 * @remarks this represents a made instance of DataIntegrationGraphManager
 */
declare class DataIntegrationGraphManager {

  /**
   * Fetches data lineage.
   */
  static lineageGraph(): GlobalCanvasGraphAndContext | null;
}

