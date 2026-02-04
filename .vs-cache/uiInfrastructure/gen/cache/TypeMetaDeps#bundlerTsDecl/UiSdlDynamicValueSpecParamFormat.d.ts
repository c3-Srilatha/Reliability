export interface UiSdlDynamicValueSpecParamFormat<SPEC> {

  readonly spec: SPEC;
  withSpec(spec: SPEC): UiSdlDynamicValueSpecParamFormat;
}

