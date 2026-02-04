export interface UiSdlHeatMapDataValue {

  readonly value?: C3.Array<any>;
  withValue(value: C3.Array<any> | Array<any>): UiSdlHeatMapDataValue;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlHeatMapDataValue;

  readonly itemStyle?: any;
  withItemStyle(itemStyle: any): UiSdlHeatMapDataValue;
}

