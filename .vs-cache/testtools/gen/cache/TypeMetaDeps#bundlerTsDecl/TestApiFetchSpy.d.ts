export interface TestApiFetchSpy {

  readonly actionMockId: string;
  withActionMockId(actionMockId: string): TestApiFetchSpy;

  readonly fetchTypeName: string;
  withFetchTypeName(fetchTypeName: string): TestApiFetchSpy;

  readonly specParameterName: string;
  withSpecParameterName(specParameterName: string): TestApiFetchSpy;

  readonly returnArray?: boolean;
  withReturnArray(returnArray: boolean): TestApiFetchSpy;
}

