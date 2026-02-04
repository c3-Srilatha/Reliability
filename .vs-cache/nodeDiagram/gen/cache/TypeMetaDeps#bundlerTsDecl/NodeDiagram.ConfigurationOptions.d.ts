declare namespace NodeDiagram {
  export interface ConfigurationOptions {

    readonly multiSelectable?: boolean;
    withMultiSelectable(multiSelectable: boolean): NodeDiagram.ConfigurationOptions;

    readonly isDeleteEnabled?: boolean;
    withIsDeleteEnabled(isDeleteEnabled: boolean): NodeDiagram.ConfigurationOptions;

    readonly layout?: NodeDiagramLayout | null;
    withLayout(layout: INodeDiagramLayout | null): NodeDiagram.ConfigurationOptions;

    readonly onlyRenderVisibleElements?: boolean;
    withOnlyRenderVisibleElements(onlyRenderVisibleElements: boolean): NodeDiagram.ConfigurationOptions;

    readonly minZoomLevel?: number | null;
    withMinZoomLevel(minZoomLevel: number | null): NodeDiagram.ConfigurationOptions;

    readonly maxZoomLevel?: number | null;
    withMaxZoomLevel(maxZoomLevel: number | null): NodeDiagram.ConfigurationOptions;

    readonly minimap?: NodeDiagram.ConfigurationOptions.Minimap | null;
    withMinimap(minimap: INodeDiagram.ConfigurationOptions.Minimap | null): NodeDiagram.ConfigurationOptions;
  }
}

