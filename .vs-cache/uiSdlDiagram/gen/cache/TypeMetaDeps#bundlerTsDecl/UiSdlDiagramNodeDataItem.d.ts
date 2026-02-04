export interface UiSdlDiagramNodeDataItem {

  readonly obj?: C3.Map<string | null, any>;
  withObj(obj: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDiagramNodeDataItem;
}

