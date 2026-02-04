export interface TestActionMockDecl {

  readonly input?: C3.Map<string | null, any>;
  withInput(input: C3.Map<string | null, any> | {[key: string | null]: any}): TestActionMockDecl;

  readonly result?: any;
  withResult(result: any): TestActionMockDecl;

  readonly rootUrl?: string | null;
  withRootUrl(rootUrl: string | null): TestActionMockDecl;

  readonly refreshMocks?: boolean;
  withRefreshMocks(refreshMocks: boolean): TestActionMockDecl;

  readonly useUniqueResponses?: boolean;
  withUseUniqueResponses(useUniqueResponses: boolean): TestActionMockDecl;

  readonly claims?: Lambda<λBiPredicate<Action.Spy | null, C3.Map<string | null, any>> | null> | null;
  withClaims(claims: ILambda<λBiPredicate<Action.Spy | null, C3.Map<string | null, any>> | null> | null): TestActionMockDecl;

  readonly impl?: Lambda<λBiFunction<Action.Spy | null, C3.Map<string | null, any>, any> | null> | null;
  withImpl(impl: ILambda<λBiFunction<Action.Spy | null, C3.Map<string | null, any>, any> | null> | null): TestActionMockDecl;

  readonly spyType?: Type | null;
  withSpyType(spyType: IType | null): TestActionMockDecl;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λBiPredicate<T, U> {
  (t: T, u: U): boolean
}
