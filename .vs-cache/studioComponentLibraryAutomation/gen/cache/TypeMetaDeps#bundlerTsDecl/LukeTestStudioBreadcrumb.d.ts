export interface LukeTestStudioBreadcrumb {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioBreadcrumb;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioBreadcrumb;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioBreadcrumb;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioBreadcrumb;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioBreadcrumb;

  readonly iconSelector?: string | null;
  withIconSelector(iconSelector: string | null): LukeTestStudioBreadcrumb;

  readonly containerSelector?: string | null;
  withContainerSelector(containerSelector: string | null): LukeTestStudioBreadcrumb;

  readonly textSelector?: string | null;
  withTextSelector(textSelector: string | null): LukeTestStudioBreadcrumb;

  readonly greyTextSelector?: string | null;
  withGreyTextSelector(greyTextSelector: string | null): LukeTestStudioBreadcrumb;
}

