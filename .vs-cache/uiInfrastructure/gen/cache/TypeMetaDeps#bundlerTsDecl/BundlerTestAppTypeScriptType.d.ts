export interface BundlerTestAppTypeScriptType {

  readonly timeZone?: TimeZone | null;
  withTimeZone(timeZone: ITimeZone | null): BundlerTestAppTypeScriptType;
}

