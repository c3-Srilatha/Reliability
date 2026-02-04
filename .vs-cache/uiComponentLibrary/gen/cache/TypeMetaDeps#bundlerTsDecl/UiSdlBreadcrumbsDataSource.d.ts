export interface UiSdlBreadcrumbsDataSource {

  readonly staticText?: string | null;
  withStaticText(staticText: string | null): UiSdlBreadcrumbsDataSource;

  readonly dataType?: Type | null;
  withDataType(dataType: IType | null): UiSdlBreadcrumbsDataSource;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlBreadcrumbsDataSource;
}

