export interface UiSdlCustomDynamicValueSpecParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlCustomDynamicValueSpecParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlCustomDynamicValueSpecParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlCustomDynamicValueSpecParam;

  readonly valueToAddFive?: number | null;
  withValueToAddFive(valueToAddFive: number | null): UiSdlCustomDynamicValueSpecParam;
}

