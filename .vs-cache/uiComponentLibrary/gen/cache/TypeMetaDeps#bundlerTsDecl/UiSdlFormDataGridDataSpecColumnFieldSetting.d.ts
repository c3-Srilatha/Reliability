export interface UiSdlFormDataGridDataSpecColumnFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly label: string;
  withLabel(label: string): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly customCellComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withCustomCellComponent(customCellComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly editable?: boolean;
  withEditable(editable: boolean): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly iconName?: string | null;
  withIconName(iconName: string | null): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly width?: UiSdlBaseDataGridDataSpecColumnWidth | null;
  withWidth(width: IUiSdlBaseDataGridDataSpecColumnWidth | null): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly cellElement?: UiSdlTextInputFormDataGrid | null | UiSdlSelectInputFormDataGrid | null | UiSdlSearchInputFormDataGrid | null | UiSdlNumberInputFormDataGrid | null | UiSdlDateTimeInputFormDataGrid | null | null;
  withCellElement(cellElement: IUiSdlTextInputFormDataGrid | null | IUiSdlSelectInputFormDataGrid | null | IUiSdlSearchInputFormDataGrid | null | IUiSdlNumberInputFormDataGrid | null | IUiSdlDateTimeInputFormDataGrid | null | null): UiSdlFormDataGridDataSpecColumnFieldSetting;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlFormDataGridDataSpecColumnFieldSetting;
}

