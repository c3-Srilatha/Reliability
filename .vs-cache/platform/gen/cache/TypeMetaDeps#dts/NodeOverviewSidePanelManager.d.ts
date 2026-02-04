// TypeScript definitions for the C3 type NodeOverviewSidePanelManager

/**
 * Util functions to get information for the NodeOverviewSidePanel, specifically the overview section.
 *
 * @remarks this represents a value passed to a method that expects an instance of NodeOverviewSidePanelManager
 */
declare interface INodeOverviewSidePanelManager {
}

/**
 * Util functions to get information for the NodeOverviewSidePanel, specifically the overview section.
 *
 * @remarks this represents a made instance of NodeOverviewSidePanelManager
 */
declare class NodeOverviewSidePanelManager {

  /**
   * Generate configuration for source system node overview side panel dynamic section.
   */
  static getOverviewSourceSystemSidePanelContent(graphNode: string): any | null;

  /**
   * Generate configuration for source system node overview side panel dynamic section.
   */
  static getOverviewSourceCollectionSidePanelContent(graphNode: string): any | null;

  /**
   * Generate configuration for overview section of node overview side panel.
   */
  static getOverviewSectionConfig(graphNode: string): any | null;

  /**
   * Returns data shown in node overview side panel overview section.
   * @param graphNode
   *          {@link GlobalCanvasGraphNode} to construct data for.
   */
  static getOverviewSectionData(graphNode?: GlobalCanvasGraphNode<GlobalCanvasGraphNodeData | null> | null): NodeOverviewSidePanelOverviewData | null;
}

