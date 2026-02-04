export interface TestApiPartialMatcherArrayContaining {

  readonly value?: any;
  withValue(value: any): TestApiPartialMatcherArrayContaining;

  readonly partialMatcherValueType?: string | null;
  withPartialMatcherValueType(partialMatcherValueType: string | null): TestApiPartialMatcherArrayContaining;
}

