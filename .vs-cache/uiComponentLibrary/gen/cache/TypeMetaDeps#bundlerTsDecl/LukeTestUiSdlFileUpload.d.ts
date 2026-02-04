export interface LukeTestUiSdlFileUpload {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestUiSdlFileUpload;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestUiSdlFileUpload;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestUiSdlFileUpload;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestUiSdlFileUpload;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestUiSdlFileUpload;

  readonly componentSelector?: string | null;
  withComponentSelector(componentSelector: string | null): LukeTestUiSdlFileUpload;

  readonly fileInputSelector?: string | null;
  withFileInputSelector(fileInputSelector: string | null): LukeTestUiSdlFileUpload;

  readonly fileUploadCollectionSelector?: string | null;
  withFileUploadCollectionSelector(fileUploadCollectionSelector: string | null): LukeTestUiSdlFileUpload;
}

