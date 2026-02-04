export interface UiSdlComparisonCondition {

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlComparisonCondition;

  readonly value?: any;
  withValue(value: any): UiSdlComparisonCondition;
}

