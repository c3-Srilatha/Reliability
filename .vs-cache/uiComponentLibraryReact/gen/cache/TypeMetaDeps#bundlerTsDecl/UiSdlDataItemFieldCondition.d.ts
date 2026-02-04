export interface UiSdlDataItemFieldCondition {

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlDataItemFieldCondition;

  readonly value?: any;
  withValue(value: any): UiSdlDataItemFieldCondition;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlDataItemFieldCondition;

  readonly dataItem?: any;
  withDataItem(dataItem: any): UiSdlDataItemFieldCondition;
}

