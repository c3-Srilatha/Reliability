export interface LukeTestReactComponentsHelper {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestReactComponentsHelper;
}

