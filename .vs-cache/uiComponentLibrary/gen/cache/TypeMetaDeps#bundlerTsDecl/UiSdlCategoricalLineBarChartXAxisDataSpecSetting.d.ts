export interface UiSdlCategoricalLineBarChartXAxisDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCategoricalLineBarChartXAxisDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCategoricalLineBarChartXAxisDataSpecSetting;

  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlCategoricalLineBarChartXAxisDataSpecSetting;

  readonly sortDirection?: string | null;
  withSortDirection(sortDirection: string | null): UiSdlCategoricalLineBarChartXAxisDataSpecSetting;

  readonly sortedBasedOn?: string | null;
  withSortedBasedOn(sortedBasedOn: string | null): UiSdlCategoricalLineBarChartXAxisDataSpecSetting;

  readonly sortField?: string | null;
  withSortField(sortField: string | null): UiSdlCategoricalLineBarChartXAxisDataSpecSetting;
}

