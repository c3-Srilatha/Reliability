export interface UiSdlStatesObservable {

  readonly value?: UiSdlReduxState | null;
  withValue(value: IUiSdlReduxState | null): UiSdlStatesObservable;
}

