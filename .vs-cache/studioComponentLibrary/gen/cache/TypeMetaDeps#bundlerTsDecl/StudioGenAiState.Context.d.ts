declare namespace StudioGenAiState {
  export interface Context {

    readonly key: string;
    withKey(key: string): StudioGenAiState.Context;

    readonly description: string;
    withDescription(description: string): StudioGenAiState.Context;

    readonly value?: any;
    withValue(value: any): StudioGenAiState.Context;

    readonly varName?: string | null;
    withVarName(varName: string | null): StudioGenAiState.Context;

    readonly getValue?: λFunction<UiSdlReduxState | null, any> | null;
    withGetValue(getValue: λFunction<UiSdlReduxState | null, any> | null): StudioGenAiState.Context;
  }
}


interface λFunction<T, R> {
  (t: T): R
}
