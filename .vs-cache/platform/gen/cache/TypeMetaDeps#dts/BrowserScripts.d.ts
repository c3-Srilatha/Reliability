// TypeScript definitions for the C3 type BrowserScripts

/**
 * Holding the implementation and documentation of browser scripts that can be used by any automation engine that
 * can execute scripts
 *
 * @remarks this represents a value passed to a method that expects an instance of BrowserScripts
 */
declare interface IBrowserScripts {
}

/**
 * Holding the implementation and documentation of browser scripts that can be used by any automation engine that
 * can execute scripts
 *
 * @remarks this represents a made instance of BrowserScripts
 */
declare class BrowserScripts {

  /**
   * Uses javascript dragStart and dragEnd events to simulate drag and drop
   * @param sourceNode
   *           The element to be dragged
   * @param destinationNode
   *           The element to be dragged over and dropped onto
   */
  static simulateDragAndDrop(sourceNodeSelector: string, destinationNodeSelector: string): void;
}

