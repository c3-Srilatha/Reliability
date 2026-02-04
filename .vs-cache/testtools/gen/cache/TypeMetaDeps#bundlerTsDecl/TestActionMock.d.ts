export interface TestActionMock {

  readonly id: string;
  withId(id: string): TestActionMock;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestActionMock;

  readonly name?: string | null;
  withName(name: string | null): TestActionMock;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestActionMock;

  readonly version?: number | null;
  withVersion(version: number | null): TestActionMock;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestActionMock;

  readonly targetAction: ActionRef;
  withTargetAction(targetAction: IActionRef): TestActionMock;

  readonly callThrough?: boolean;
  withCallThrough(callThrough: boolean): TestActionMock;

  readonly decl: TestActionMockDecl;
  withDecl(decl: ITestActionMockDecl): TestActionMock;

  readonly group?: string | null;
  withGroup(group: string | null): TestActionMock;

  readonly sequence?: number | null;
  withSequence(sequence: number | null): TestActionMock;

  readonly actionSpy?: Action.Spy | null;
  withActionSpy(actionSpy: IAction.Spy | null): TestActionMock;
}

