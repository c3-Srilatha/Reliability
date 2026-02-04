export interface TestApiObjectContainingStringOrDateTimeTestType {

  readonly val?: string | null | DateTime | null | null;
  withVal(val: string | null | DateTime | Date | string | null | null): TestApiObjectContainingStringOrDateTimeTestType;
}

