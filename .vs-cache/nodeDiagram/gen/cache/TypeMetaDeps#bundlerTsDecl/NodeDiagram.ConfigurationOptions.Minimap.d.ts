declare namespace NodeDiagram.ConfigurationOptions {
  export interface Minimap {

    readonly dimensions?: [width: number | null, height: number | null] | null;
    withDimensions(dimensions: [width: number | null, height: number | null] | null): NodeDiagram.ConfigurationOptions.Minimap;

    readonly nodeClassTemplate?: string | null;
    withNodeClassTemplate(nodeClassTemplate: string | null): NodeDiagram.ConfigurationOptions.Minimap;
  }
}

