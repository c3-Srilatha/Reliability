export interface UiSdlMultiRenderCondition {

  readonly conditions?: C3.Array<UiSdlComparisonCondition | null>;
  withConditions(conditions: C3.Array<UiSdlComparisonCondition | null> | Array<IUiSdlComparisonCondition | null>): UiSdlMultiRenderCondition;

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlMultiRenderCondition;
}

