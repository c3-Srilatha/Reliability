export interface UiSdlDefinitionListDataSpecFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlDefinitionListDataSpecFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlDefinitionListDataSpecFieldSetting;

  readonly formatSpec?: UiSdlDynamicValueSpec | null;
  withFormatSpec(formatSpec: IUiSdlDynamicValueSpec | null): UiSdlDefinitionListDataSpecFieldSetting;

  readonly fieldFontLarge?: boolean;
  withFieldFontLarge(fieldFontLarge: boolean): UiSdlDefinitionListDataSpecFieldSetting;

  readonly valueIconMap?: C3.Map<string | null, string | null>;
  withValueIconMap(valueIconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDefinitionListDataSpecFieldSetting;

  readonly labelIcon?: string | null;
  withLabelIcon(labelIcon: string | null): UiSdlDefinitionListDataSpecFieldSetting;

  readonly tooltipText?: string | null | UiSdlDynamicValueSpec | null | null;
  withTooltipText(tooltipText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDefinitionListDataSpecFieldSetting;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlDefinitionListDataSpecFieldSetting;

  readonly subInfo?: string | null | UiSdlDefinitionListSubInfoFieldSetting | null | null;
  withSubInfo(subInfo: string | null | IUiSdlDefinitionListSubInfoFieldSetting | null | null): UiSdlDefinitionListDataSpecFieldSetting;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlDefinitionListDataSpecFieldSetting;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): UiSdlDefinitionListDataSpecFieldSetting;

  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlDefinitionListDataSpecFieldSetting;
}

