export interface UiSdlPageParamRenderCondition {

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlPageParamRenderCondition;

  readonly value?: any;
  withValue(value: any): UiSdlPageParamRenderCondition;

  readonly pageParamId?: string | null;
  withPageParamId(pageParamId: string | null): UiSdlPageParamRenderCondition;
}

