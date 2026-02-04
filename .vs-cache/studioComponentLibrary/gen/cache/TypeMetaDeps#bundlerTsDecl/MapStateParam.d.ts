export interface MapStateParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): MapStateParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): MapStateParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): MapStateParam;

  readonly mapState?: UiSdlDynamicValueSpecParam | null;
  withMapState(mapState: IUiSdlDynamicValueSpecParam | null): MapStateParam;

  readonly key?: UiSdlDynamicValueSpecParam | null;
  withKey(key: IUiSdlDynamicValueSpecParam | null): MapStateParam;

  readonly path?: string | null;
  withPath(path: string | null): MapStateParam;

  readonly action?: string | null;
  withAction(action: string | null): MapStateParam;
}

