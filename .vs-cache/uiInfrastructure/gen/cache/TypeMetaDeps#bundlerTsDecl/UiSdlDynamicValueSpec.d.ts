export interface UiSdlDynamicValueSpec {

  readonly dynamicValue?: string | null | UiSdlDynamicValueSpecParam | null | null;
  withDynamicValue(dynamicValue: string | null | IUiSdlDynamicValueSpecParam | null | null): UiSdlDynamicValueSpec;

  readonly vars?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withVars(vars: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlDynamicValueSpec;
}

