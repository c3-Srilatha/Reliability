export interface UiSdlBreadcrumbDataMapping {

  readonly typeName: string;
  withTypeName(typeName: string): UiSdlBreadcrumbDataMapping;

  readonly field: string;
  withField(field: string): UiSdlBreadcrumbDataMapping;
}

