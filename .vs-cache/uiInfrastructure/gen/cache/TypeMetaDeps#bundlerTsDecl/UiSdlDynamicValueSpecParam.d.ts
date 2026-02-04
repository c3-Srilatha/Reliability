export interface UiSdlDynamicValueSpecParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDynamicValueSpecParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlDynamicValueSpecParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlDynamicValueSpecParam;
}

