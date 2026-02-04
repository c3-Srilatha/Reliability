export interface TestApiPartialMatcherObjectContaining {

  readonly value?: any;
  withValue(value: any): TestApiPartialMatcherObjectContaining;

  readonly partialMatcherValueType?: string | null;
  withPartialMatcherValueType(partialMatcherValueType: string | null): TestApiPartialMatcherObjectContaining;
}

