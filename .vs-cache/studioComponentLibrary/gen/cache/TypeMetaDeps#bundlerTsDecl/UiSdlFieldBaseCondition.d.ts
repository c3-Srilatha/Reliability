export interface UiSdlFieldBaseCondition {

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldBaseCondition;

  readonly expectedValue?: any;
  withExpectedValue(expectedValue: any): UiSdlFieldBaseCondition;
}

