export interface UiSdlApplicationStateValueParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlApplicationStateValueParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlApplicationStateValueParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlApplicationStateValueParam;

  readonly id?: string | null;
  withId(id: string | null): UiSdlApplicationStateValueParam;

  readonly path?: string | null;
  withPath(path: string | null): UiSdlApplicationStateValueParam;

  readonly action?: string | null;
  withAction(action: string | null): UiSdlApplicationStateValueParam;
}

