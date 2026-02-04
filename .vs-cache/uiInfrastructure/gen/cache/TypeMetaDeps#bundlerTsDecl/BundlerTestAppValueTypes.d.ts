export interface BundlerTestAppValueTypes {

  readonly anyValueType?: any;
  withAnyValueType(anyValueType: any): BundlerTestAppValueTypes;

  readonly referenceValueType?: BundlerTestAppComponent | null;
  withReferenceValueType(referenceValueType: IBundlerTestAppComponent | null): BundlerTestAppValueTypes;

  readonly arrayValueType?: C3.Array<BundlerTestAppComponent | null>;
  withArrayValueType(arrayValueType: C3.Array<BundlerTestAppComponent | null> | Array<IBundlerTestAppComponent | null>): BundlerTestAppValueTypes;

  readonly nestedArrayValueType?: C3.Array<C3.Array<BundlerTestAppComponent | null>>;
  withNestedArrayValueType(nestedArrayValueType: C3.Array<C3.Array<BundlerTestAppComponent | null>> | Array<C3.Array<BundlerTestAppComponent | null> | Array<IBundlerTestAppComponent | null>>): BundlerTestAppValueTypes;

  readonly anyOfWithNestedArraysValueType?: C3.Array<BundlerTestAppComponent | null> | C3.Array<C3.Array<BundlerTestAppComponent | null>> | null;
  withAnyOfWithNestedArraysValueType(anyOfWithNestedArraysValueType: C3.Array<BundlerTestAppComponent | null> | Array<IBundlerTestAppComponent | null> | C3.Array<C3.Array<BundlerTestAppComponent | null>> | Array<C3.Array<BundlerTestAppComponent | null> | Array<IBundlerTestAppComponent | null>> | null): BundlerTestAppValueTypes;

  readonly anyOfMultipleTypes?: BundlerTestAppAmbiguousType | null | BundlerTestAppComponent | null | null;
  withAnyOfMultipleTypes(anyOfMultipleTypes: IBundlerTestAppAmbiguousType | null | IBundlerTestAppComponent | null | null): BundlerTestAppValueTypes;
}

