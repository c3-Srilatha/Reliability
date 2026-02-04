export interface NodeDiagramUpdate {

  readonly updateType?: string | null | string | null | null;
  withUpdateType(updateType: string | null | string | null | null): NodeDiagramUpdate;

  readonly data?: any | null;
  withData(data: any | null): NodeDiagramUpdate;
}

