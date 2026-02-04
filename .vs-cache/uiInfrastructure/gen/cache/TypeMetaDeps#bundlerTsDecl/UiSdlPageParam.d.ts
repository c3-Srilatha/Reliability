export interface UiSdlPageParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlPageParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlPageParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlPageParam;

  readonly path?: string | null;
  withPath(path: string | null): UiSdlPageParam;
}

