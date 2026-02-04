export interface UiSdlFieldBasedDynamicValueSpecParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlFieldBasedDynamicValueSpecParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlFieldBasedDynamicValueSpecParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiSdlFieldBasedDynamicValueSpecParam;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFieldBasedDynamicValueSpecParam;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFieldBasedDynamicValueSpecParam;
}

