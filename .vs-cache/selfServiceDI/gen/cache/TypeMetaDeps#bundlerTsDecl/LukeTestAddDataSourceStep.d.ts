export interface LukeTestAddDataSourceStep {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestAddDataSourceStep;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestAddDataSourceStep;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestAddDataSourceStep;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestAddDataSourceStep;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestAddDataSourceStep;

  readonly selfServiceDIPage?: LukeTestSelfServiceDIPage | null;
  withSelfServiceDIPage(selfServiceDIPage: ILukeTestSelfServiceDIPage | null): LukeTestAddDataSourceStep;
}

