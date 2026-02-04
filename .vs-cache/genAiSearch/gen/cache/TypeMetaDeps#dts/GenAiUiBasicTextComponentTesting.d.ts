// TypeScript definitions for the C3 type GenAiUiBasicTextComponentTesting

/**
 * This type provides a common set of functions to help with testing basicTextComponents
 *
 * @remarks this represents a value passed to a method that expects an instance of GenAiUiBasicTextComponentTesting
 */
declare interface IGenAiUiBasicTextComponentTesting {
}

/**
 * This type provides a common set of functions to help with testing basicTextComponents
 *
 * @remarks this represents a made instance of GenAiUiBasicTextComponentTesting
 */
declare class GenAiUiBasicTextComponentTesting {

  /**
   * Run all the common tests for a basicTextComponent.
   * @param component
   *         The React component to test.
   * @param props
   *         The props to pass to the component.
   * @param state
   *         The state to pass to the component.
   */
  static runSharedTextComponentTests(component?: ReactComponent, props?: any, state?: any): any | null;
}

