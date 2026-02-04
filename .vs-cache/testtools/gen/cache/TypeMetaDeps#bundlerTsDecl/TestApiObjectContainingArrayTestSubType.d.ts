export interface TestApiObjectContainingArrayTestSubType {

  readonly arrayOfObjects?: C3.Array<TestApiObjectContainingStringOrDateTimeTestType | null>;
  withArrayOfObjects(arrayOfObjects: C3.Array<TestApiObjectContainingStringOrDateTimeTestType | null> | Array<ITestApiObjectContainingStringOrDateTimeTestType | null>): TestApiObjectContainingArrayTestSubType;

  readonly a?: string | null;
  withA(a: string | null): TestApiObjectContainingArrayTestSubType;
}

