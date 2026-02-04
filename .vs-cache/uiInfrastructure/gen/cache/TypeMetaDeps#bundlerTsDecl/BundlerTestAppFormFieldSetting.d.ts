export interface BundlerTestAppFormFieldSetting {

  readonly inputElement?: BundlerTestAppSingleSearch | null | BundlerTestAppSearchFilter | null | null;
  withInputElement(inputElement: IBundlerTestAppSingleSearch | null | IBundlerTestAppSearchFilter | null | null): BundlerTestAppFormFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): BundlerTestAppFormFieldSetting;
}

