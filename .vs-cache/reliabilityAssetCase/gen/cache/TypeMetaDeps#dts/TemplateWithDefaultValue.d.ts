// TypeScript definitions for the C3 type TemplateWithDefaultValue

/**
 * The {@link Value} type representing a template with the ability to format
 * with default values for missing variables.
 *
 * @remarks this represents a value passed to a method that expects an instance of TemplateWithDefaultValue
 */
declare interface ITemplateWithDefaultValue {
}

/**
 * The {@link Value} type representing a template with the ability to format
 * with default values for missing variables.
 *
 * @remarks this represents a made instance of TemplateWithDefaultValue
 */
declare class TemplateWithDefaultValue {

  /**
   * Fill the {@link Template} by the `defaultValue` for variables not provided in the `bindings`
   *
   * @param id
   *        The identifier of the template to format.
   * @param bindings
   *        A JSON object containing variable bindings for the template.
   * @param defaultValue
   *        The value to use for missing variables in the template.
   * @return The formatted template as a string, with default values for missing variables.
   */
  static format(id: string, bindings?: any, defaultValue?: string): string;
}

