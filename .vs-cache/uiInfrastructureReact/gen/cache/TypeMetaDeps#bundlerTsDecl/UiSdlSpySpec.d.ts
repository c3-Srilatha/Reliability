export interface UiSdlSpySpec {

  readonly callThrough?: boolean;
  withCallThrough(callThrough: boolean): UiSdlSpySpec;

  readonly returnValue?: any;
  withReturnValue(returnValue: any): UiSdlSpySpec;

  readonly callFake?: λSupplier<any> | null;
  withCallFake(callFake: λSupplier<any> | null): UiSdlSpySpec;
}


interface λSupplier<R> {
  (): R
}
