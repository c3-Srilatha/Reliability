export interface UiSdlCardListLinkFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCardListLinkFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCardListLinkFieldSetting;

  readonly targetPage?: string | null;
  withTargetPage(targetPage: string | null): UiSdlCardListLinkFieldSetting;

  readonly route?: string | null;
  withRoute(route: string | null): UiSdlCardListLinkFieldSetting;

  readonly pageVariable?: string | null;
  withPageVariable(pageVariable: string | null): UiSdlCardListLinkFieldSetting;

  readonly internal?: boolean;
  withInternal(internal: boolean): UiSdlCardListLinkFieldSetting;
}

