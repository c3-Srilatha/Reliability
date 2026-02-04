export interface UiSdlExpectObservableSpec {

  readonly epic?: λBiFunction<UiSdlObservable | null, UiSdlObservable | null, UiSdlObservable | null> | null;
  withEpic(epic: λBiFunction<UiSdlObservable | null, UiSdlObservable | null, IUiSdlObservable | null> | null): UiSdlExpectObservableSpec;

  readonly input?: Pair<string | null, C3.Map<string | null, UiSdlReduxAction | null>> | null;
  withInput(input: IPair<string | null, C3.Map<string | null, UiSdlReduxAction | null>> | null): UiSdlExpectObservableSpec;

  readonly output?: Triple<string | null, C3.Map<string | null, UiSdlReduxAction | null>, C3.Map<string | null, any>> | null;
  withOutput(output: ITriple<string | null, C3.Map<string | null, UiSdlReduxAction | null>, C3.Map<string | null, any>> | null): UiSdlExpectObservableSpec;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}
