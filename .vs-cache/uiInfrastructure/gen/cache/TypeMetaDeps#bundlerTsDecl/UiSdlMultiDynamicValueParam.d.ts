export interface UiSdlMultiDynamicValueParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlMultiDynamicValueParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlMultiDynamicValueParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlMultiDynamicValueParam;

  readonly params?: C3.Map<string | null, UiSdlDynamicValueSpecParam | null>;
  withParams(params: C3.Map<string | null, UiSdlDynamicValueSpecParam | null> | {[key: string | null]: IUiSdlDynamicValueSpecParam | null}): UiSdlMultiDynamicValueParam;
}

