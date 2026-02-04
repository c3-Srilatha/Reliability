export interface UiSdlComponentDataSpecStateParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlComponentDataSpecStateParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlComponentDataSpecStateParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlComponentDataSpecStateParam;

  readonly id?: string | null;
  withId(id: string | null): UiSdlComponentDataSpecStateParam;

  readonly path?: string | null;
  withPath(path: string | null): UiSdlComponentDataSpecStateParam;

  readonly action?: string | null;
  withAction(action: string | null): UiSdlComponentDataSpecStateParam;

  readonly componentType?: string | null;
  withComponentType(componentType: string | null): UiSdlComponentDataSpecStateParam;

  readonly stateType?: string | null;
  withStateType(stateType: string | null): UiSdlComponentDataSpecStateParam;

  readonly dataSpecField: string;
  withDataSpecField(dataSpecField: string): UiSdlComponentDataSpecStateParam;
}

