export interface TestApiContext {

  readonly id?: string | null;
  withId(id: string | null): TestApiContext;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestApiContext;

  readonly name?: string | null;
  withName(name: string | null): TestApiContext;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestApiContext;

  readonly version?: number | null;
  withVersion(version: number | null): TestApiContext;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestApiContext;

  readonly filename?: string | null;
  withFilename(filename: string | null): TestApiContext;

  readonly debugEnabled?: boolean;
  withDebugEnabled(debugEnabled: boolean): TestApiContext;

  readonly setupOK?: boolean;
  withSetupOK(setupOK: boolean): TestApiContext;

  readonly localeChanged?: boolean;
  withLocaleChanged(localeChanged: boolean): TestApiContext;

  readonly originalLocale?: string | null;
  withOriginalLocale(originalLocale: string | null): TestApiContext;

  readonly removeLimit?: number | null;
  withRemoveLimit(removeLimit: number | null): TestApiContext;

  readonly parent?: TestApiContext | null;
  withParent(parent: ITestApiContext | null): TestApiContext;

  readonly failOnQueueErrors?: boolean;
  withFailOnQueueErrors(failOnQueueErrors: boolean): TestApiContext;

  readonly waitForTeardown?: number | null;
  withWaitForTeardown(waitForTeardown: number | null): TestApiContext;

  readonly queueBlacklist?: C3.Array<Type | null>;
  withQueueBlacklist(queueBlacklist: C3.Array<Type | null> | Array<IType | null>): TestApiContext;

  readonly tryToRecover?: number | null;
  withTryToRecover(tryToRecover: number | null): TestApiContext;

  readonly fsFiles?: C3.Array<string | null>;
  withFsFiles(fsFiles: C3.Array<string | null> | Array<string | null>): TestApiContext;

  readonly mocks?: C3.Array<Action.Spy | null>;
  withMocks(mocks: C3.Array<Action.Spy | null> | Array<IAction.Spy | null>): TestApiContext;

  readonly testApiObjs?: C3.Array<TestApiObj | null>;
  withTestApiObjs(testApiObjs: C3.Array<TestApiObj | null> | Array<ITestApiObj | null>): TestApiContext;

  readonly testUsers?: C3.Array<string | null>;
  withTestUsers(testUsers: C3.Array<string | null> | Array<string | null>): TestApiContext;

  readonly teardownFilters?: C3.Array<TestApiTearDownFilter | null>;
  withTeardownFilters(teardownFilters: C3.Array<TestApiTearDownFilter | null> | Array<ITestApiTearDownFilter | null>): TestApiContext;

  readonly uuidCounter?: number | null;
  withUuidCounter(uuidCounter: number | null): TestApiContext;

  readonly c3Queues?: C3.Array<Type | null>;
  withC3Queues(c3Queues: C3.Array<Type | null> | Array<IType | null>): TestApiContext;

  readonly vanityHostname?: string | null;
  withVanityHostname(vanityHostname: string | null): TestApiContext;
}

