export interface TabPanelParagraphDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): TabPanelParagraphDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): TabPanelParagraphDataSpecSetting;

  readonly label?: string | null;
  withLabel(label: string | null): TabPanelParagraphDataSpecSetting;

  readonly text?: UiSdlFieldBasedDataSpecSetting | null;
  withText(text: IUiSdlFieldBasedDataSpecSetting | null): TabPanelParagraphDataSpecSetting;
}

