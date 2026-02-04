export interface UiSdlDynamicValueSpecParamCondition {

  readonly operator?: string | null;
  withOperator(operator: string | null): UiSdlDynamicValueSpecParamCondition;

  readonly value?: any;
  withValue(value: any): UiSdlDynamicValueSpecParamCondition;

  readonly param: UiSdlDynamicValueSpecParam;
  withParam(param: IUiSdlDynamicValueSpecParam): UiSdlDynamicValueSpecParamCondition;
}

