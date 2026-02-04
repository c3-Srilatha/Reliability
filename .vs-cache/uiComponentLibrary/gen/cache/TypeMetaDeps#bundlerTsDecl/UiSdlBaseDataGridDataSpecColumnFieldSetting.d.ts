export interface UiSdlBaseDataGridDataSpecColumnFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly label: string;
  withLabel(label: string): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly customCellComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withCustomCellComponent(customCellComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly editable?: boolean;
  withEditable(editable: boolean): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly iconName?: string | null;
  withIconName(iconName: string | null): UiSdlBaseDataGridDataSpecColumnFieldSetting;

  readonly width?: UiSdlBaseDataGridDataSpecColumnWidth | null;
  withWidth(width: IUiSdlBaseDataGridDataSpecColumnWidth | null): UiSdlBaseDataGridDataSpecColumnFieldSetting;
}

