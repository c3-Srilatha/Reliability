// TypeScript definitions for the C3 type ModelSetupUiUtil

/**
 * Contains Util functions for Model Setup UI.
 *
 * @remarks this represents a value passed to a method that expects an instance of ModelSetupUiUtil
 */
declare interface IModelSetupUiUtil {
}

/**
 * Contains Util functions for Model Setup UI.
 *
 * @remarks this represents a made instance of ModelSetupUiUtil
 */
declare class ModelSetupUiUtil {

  /**
   * Returns an rxjs observable that outputs next step or previous step actions on given progress indicator.
   * The observable can also output actions that cause side effects.
   * @param action
   *          The action that triggered the epic calling this function.
   * @param state
   *          The redux state at the point this function was called.
   * @param shouldGoNext
   *          If true, indicates that moving to the next step should be attempted. If false, moves to the previous step.
   * @param progressIndicatorId
   *          The progress indicator on which to perform actions.
   * @param idToActionFunctionMap
   *          Map of step ids to functions to call when attempting to go to next step. The function should return
   *          an object with two properties, `shouldGoNext` and `action`. If `shouldGoNext` is true, progress
   *          indicator moves to the next step. Otherwise, it does not. `action` is the side effect action
   *          that will be dispatched.
   * @return An observable of redux actions
   */
  static changeStep(action: UiSdlReduxAction<any>, state: UiSdlReduxState, progressIndicatorId: string, shouldGoNext?: boolean, idToActionFunctionMap?: Map_Type<string, any>): any | null;
}

