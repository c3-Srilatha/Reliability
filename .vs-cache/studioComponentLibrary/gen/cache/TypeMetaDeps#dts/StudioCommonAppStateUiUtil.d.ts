// TypeScript definitions for the C3 type StudioCommonAppStateUiUtil

/**
 * UI Helper functions for Studio's application states.
 *
 * @remarks this represents a value passed to a method that expects an instance of StudioCommonAppStateUiUtil
 */
declare interface IStudioCommonAppStateUiUtil {
}

/**
 * UI Helper functions for Studio's application states.
 *
 * @remarks this represents a made instance of StudioCommonAppStateUiUtil
 */
declare class StudioCommonAppStateUiUtil {

  /**
   * Clears the app state for id.
   *
   * @param id
   *            The id of the application state to be cleared
   * @param state
   *            The redux state
   *
   * @return the updated UiSdlReduxState
   */
  static clearAppState(id?: string | null, state: UiSdlReduxState): UiSdlReduxState;

  /**
   * Clears the component state for the corresponding component id.
   *
   * @param componentId
   *             The id of the component state to be cleared.
   * @return the updated UiSdlReduxState
   */
  static clearComponentState(componentId: string, state: UiSdlReduxState): UiSdlReduxState;

  /**
   * Sets or removes config value in application state.
   * If the value is undefined, the dataPath will be removed from the application state.
   *
   * @param stateId
   *           Id of the state.
   * @param state
   *           Redux state.
   * @param dataPath
   *           The path to the config value.
   * @param value
   *           The config value to set.
   * @returns Redux state.
   */
  static setOrRemoveConfigInApplicationState(stateId: string, state: UiSdlReduxState, dataPath?: C3.Array<string | null>, value: any): UiSdlReduxState;
}

