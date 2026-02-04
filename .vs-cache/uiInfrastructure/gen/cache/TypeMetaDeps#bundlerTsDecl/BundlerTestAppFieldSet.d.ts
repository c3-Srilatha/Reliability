export interface BundlerTestAppFieldSet {

  readonly fields?: C3.Array<BundlerTestAppFormFieldSetting | null>;
  withFields(fields: C3.Array<BundlerTestAppFormFieldSetting | null> | Array<IBundlerTestAppFormFieldSetting | null>): BundlerTestAppFieldSet;
}

