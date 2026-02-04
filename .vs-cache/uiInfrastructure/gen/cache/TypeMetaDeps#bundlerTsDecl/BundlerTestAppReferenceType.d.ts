export interface BundlerTestAppReferenceType {

  readonly fieldWithDefaultValue?: string | null;
  withFieldWithDefaultValue(fieldWithDefaultValue: string | null): BundlerTestAppReferenceType;

  readonly someField?: string | null;
  withSomeField(someField: string | null): BundlerTestAppReferenceType;
}

