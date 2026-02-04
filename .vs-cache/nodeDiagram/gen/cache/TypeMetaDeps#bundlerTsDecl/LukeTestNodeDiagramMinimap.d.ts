export interface LukeTestNodeDiagramMinimap {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestNodeDiagramMinimap;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestNodeDiagramMinimap;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestNodeDiagramMinimap;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestNodeDiagramMinimap;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestNodeDiagramMinimap;

  readonly minimapSelector?: string | null;
  withMinimapSelector(minimapSelector: string | null): LukeTestNodeDiagramMinimap;

  readonly minimapControlsSelector?: string | null;
  withMinimapControlsSelector(minimapControlsSelector: string | null): LukeTestNodeDiagramMinimap;

  readonly minimapControlViewButtonSelector?: string | null;
  withMinimapControlViewButtonSelector(minimapControlViewButtonSelector: string | null): LukeTestNodeDiagramMinimap;
}

