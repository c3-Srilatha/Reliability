export interface UiSdlComponentDataSpecSortableFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlComponentDataSpecSortableFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlComponentDataSpecSortableFieldSetting;

  readonly sortable?: boolean;
  withSortable(sortable: boolean): UiSdlComponentDataSpecSortableFieldSetting;

  readonly sortOrder?: string | null;
  withSortOrder(sortOrder: string | null): UiSdlComponentDataSpecSortableFieldSetting;
}

