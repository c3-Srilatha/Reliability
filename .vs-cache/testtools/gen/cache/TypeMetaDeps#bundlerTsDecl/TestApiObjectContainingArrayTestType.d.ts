export interface TestApiObjectContainingArrayTestType {

  readonly arrayOfObjects?: C3.Array<TestApiObjectContainingStringOrDateTimeTestType | null>;
  withArrayOfObjects(arrayOfObjects: C3.Array<TestApiObjectContainingStringOrDateTimeTestType | null> | Array<ITestApiObjectContainingStringOrDateTimeTestType | null>): TestApiObjectContainingArrayTestType;
}

