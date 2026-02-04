// TypeScript definitions for the C3 type GenAiUiThemeActions

/**
 * Helper action methods related to the theme used in the UI
 *
 * @remarks this represents a value passed to a method that expects an instance of GenAiUiThemeActions
 */
declare interface IGenAiUiThemeActions {
}

/**
 * Helper action methods related to the theme used in the UI
 *
 * @remarks this represents a made instance of GenAiUiThemeActions
 */
declare class GenAiUiThemeActions {

  /**
   * Returns an action to set the theme to light or dark. This should be called within an epic.
   */
  static setThemeAction(theme?: string): UiSdlStyleIdSetAction | null;

  /**
   * Returns an action to toggle the theme between light/dark. This should be called within an epic.
   */
  static toggleThemeAction(): UiSdlStyleIdSetAction | null;
}

