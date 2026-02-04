export interface TestApiPartialMatcher {

  readonly value?: any;
  withValue(value: any): TestApiPartialMatcher;

  readonly partialMatcherValueType?: string | null;
  withPartialMatcherValueType(partialMatcherValueType: string | null): TestApiPartialMatcher;
}

