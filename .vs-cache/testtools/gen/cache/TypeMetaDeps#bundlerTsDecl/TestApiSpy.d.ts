export interface TestApiSpy {

  readonly actionMockId: string;
  withActionMockId(actionMockId: string): TestApiSpy;
}

