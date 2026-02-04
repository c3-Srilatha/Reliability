// TypeScript definitions for the C3 type FunctionLibraryUiManager

/**
 * @remarks this represents a value passed to a method that expects an instance of FunctionLibraryUiManager
 */
declare interface IFunctionLibraryUiManager {
}

/**
 * @remarks this represents a made instance of FunctionLibraryUiManager
 */
declare class FunctionLibraryUiManager {

  /**
   * Returns Expression function info including custom expression engine functions
   */
  static fetchExpressionEngineFunctionInfo(): C3.Array<ExpressionFunctionInfo | null>;
}

