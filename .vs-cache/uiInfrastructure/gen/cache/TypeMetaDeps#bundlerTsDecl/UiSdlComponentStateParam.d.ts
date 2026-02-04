export interface UiSdlComponentStateParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlComponentStateParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlComponentStateParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlComponentStateParam;

  readonly id?: string | null;
  withId(id: string | null): UiSdlComponentStateParam;

  readonly path?: string | null;
  withPath(path: string | null): UiSdlComponentStateParam;

  readonly action?: string | null;
  withAction(action: string | null): UiSdlComponentStateParam;

  readonly componentType?: string | null;
  withComponentType(componentType: string | null): UiSdlComponentStateParam;

  readonly stateType?: string | null;
  withStateType(stateType: string | null): UiSdlComponentStateParam;
}

