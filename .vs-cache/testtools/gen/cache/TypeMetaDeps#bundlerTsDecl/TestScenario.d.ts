export interface TestScenario {

  readonly id?: string | null;
  withId(id: string | null): TestScenario;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestScenario;

  readonly name?: string | null;
  withName(name: string | null): TestScenario;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestScenario;

  readonly version?: number | null;
  withVersion(version: number | null): TestScenario;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestScenario;

  readonly description: string;
  withDescription(description: string): TestScenario;

  readonly metric: CompoundMetric;
  withMetric(metric: ICompoundMetric): TestScenario;

  readonly testData: C3.Array<TestMetricData | null>;
  withTestData(testData: C3.Array<TestMetricData | null> | Array<ITestMetricData | null>): TestScenario;

  readonly datetimes: C3.Array<DateTime | null>;
  withDatetimes(datetimes: C3.Array<DateTime | null> | Array<DateTime | Date | string | null>): TestScenario;

  readonly sourceType: Type;
  withSourceType(sourceType: IType): TestScenario;

  readonly interval: string;
  withInterval(interval: string): TestScenario;
}

