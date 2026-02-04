export interface UiSdlDataGridDataSpecColumnFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly searchable?: boolean;
  withSearchable(searchable: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly label: string;
  withLabel(label: string): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly customCellComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withCustomCellComponent(customCellComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly editable?: boolean;
  withEditable(editable: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly iconName?: string | null;
  withIconName(iconName: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly width?: UiSdlBaseDataGridDataSpecColumnWidth | null;
  withWidth(width: IUiSdlBaseDataGridDataSpecColumnWidth | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly headerRedirectLink?: UiSdlLinkTemplate | null;
  withHeaderRedirectLink(headerRedirectLink: IUiSdlLinkTemplate | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly tooltipText?: string | null;
  withTooltipText(tooltipText: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly sortable?: boolean;
  withSortable(sortable: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly sortNullsLast?: boolean;
  withSortNullsLast(sortNullsLast: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly caseInsensitiveSort?: boolean;
  withCaseInsensitiveSort(caseInsensitiveSort: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly defaultSortField?: UiSdlFieldSortableConfig | null;
  withDefaultSortField(defaultSortField: IUiSdlFieldSortableConfig | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly subInformation?: UiSdlDataGridSubInformationDataSetting | null;
  withSubInformation(subInformation: IUiSdlDataGridSubInformationDataSetting | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly cellElement?: UiSdlColorWheelDataGrid | null;
  withCellElement(cellElement: IUiSdlColorWheelDataGrid | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly translatePrefix?: string | null;
  withTranslatePrefix(translatePrefix: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly indicatorMapping?: C3.Map<string | null, string | null>;
  withIndicatorMapping(indicatorMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly indicatorMappingField?: string | null;
  withIndicatorMappingField(indicatorMappingField: string | null): UiSdlDataGridDataSpecColumnFieldSetting;

  readonly sticky?: boolean;
  withSticky(sticky: boolean): UiSdlDataGridDataSpecColumnFieldSetting;
}

