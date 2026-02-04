export interface UiSdlStateValueParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlStateValueParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlStateValueParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlStateValueParam;

  readonly id?: string | null;
  withId(id: string | null): UiSdlStateValueParam;

  readonly path?: string | null;
  withPath(path: string | null): UiSdlStateValueParam;

  readonly action?: string | null;
  withAction(action: string | null): UiSdlStateValueParam;
}

