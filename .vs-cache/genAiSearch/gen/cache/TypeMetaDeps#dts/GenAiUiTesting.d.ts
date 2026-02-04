// TypeScript definitions for the C3 type GenAiUiTesting

/**
 * This type provides a set of functions to help with testing UI components.
 *
 * @remarks this represents a value passed to a method that expects an instance of GenAiUiTesting
 */
declare interface IGenAiUiTesting {
}

/**
 * This type provides a set of functions to help with testing UI components.
 *
 * @remarks this represents a made instance of GenAiUiTesting
 */
declare class GenAiUiTesting {

  /**
   * Renders a React component with the given props, state, and translations.
   */
  static renderComponent(component?: ReactFunction, props?: any, state?: UiSdlReduxState, translations?: Map_Type<string, string>): any | null;

  /**
   * Asserts that the rendered result contains an element with the given selector and visibility.
   * @param renderedResult
   *           The rendered result to assert against.
   * @param selector
   *           The selector to search for.
   * @param visible
   *           Whether the element should be visible or not. Defaults to true.
   */
  static assertElement(renderedResult?: ReactFunction, selector?: string, visible?: boolean): void;

  /**
   * Asserts the provided text is present in the rendered result.
   * @param text
   *           The text to assert is present.
   * @param extraParams
   *           Additional parameters to pass to the assertion. Will be passed as the second argument to the assertion function.
   */
  static assertText(text?: string, extraParams?: any): void;

  /**
   * Clicks element that matches selector in rendered result container.
   * @param renderedResult
   *           The rendered result to search in.
   * @param selector
   *           The selector to search for.
   */
  static clickElement(renderedResult: ReactFunction, selector: string): void;

  /**
   * Clicks element by text
   * @param text
   *           Search for any element that exactly matches text.
   */
  static clickElementByText(text: string): void;

  /**
   * Asserts the count of elements that should match the provided selector.
   * @param renderedResult
   *           The rendered result to assert against.
   * @param selector
   *           The selector to search for.
   * @param count
   *           The count of elements that it is supposed to match with provided selector, within renderedResult.
   */
  static assertCount(renderedResult?: ReactFunction, selector?: string, count?: number): void;
}

