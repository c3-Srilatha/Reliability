export interface UiMetadataConfigurationParam {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiMetadataConfigurationParam;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiMetadataConfigurationParam;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UiMetadataConfigurationParam;

  readonly configurationKey: string;
  withConfigurationKey(configurationKey: string): UiMetadataConfigurationParam;

  readonly instanceName?: string | null;
  withInstanceName(instanceName: string | null): UiMetadataConfigurationParam;
}

