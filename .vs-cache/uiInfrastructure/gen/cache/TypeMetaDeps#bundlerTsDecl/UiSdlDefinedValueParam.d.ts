export interface UiSdlDefinedValueParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDefinedValueParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlDefinedValueParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlDefinedValueParam;

  readonly value?: any;
  withValue(value: any): UiSdlDefinedValueParam;
}

