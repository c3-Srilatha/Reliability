// TypeScript definitions for the C3 type ReliabilityConfigForm

/**
 * Helper type for forms based on application-wide configurations, e.g. {@link ReliabilityMLConfig}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityConfigForm
 */
declare interface IReliabilityConfigForm {

  /**
   * The fields to hide in the form for the given config type.
   * The key is the name of the config type, and the value is an array of field names to hide.
   */
  CONFIG_FIELDS_TO_HIDE?: Map_Type<string, Array_Type<string>> | {[key: string]: Array_Type<string> | Array<string>};
}

/**
 * Helper type for forms based on application-wide configurations, e.g. {@link ReliabilityMLConfig}.
 *
 * @remarks this represents a made instance of ReliabilityConfigForm
 */
declare class ReliabilityConfigForm {

  /**
   * The fields to hide in the form for the given config type.
   * The key is the name of the config type, and the value is an array of field names to hide.
   */
  readonly CONFIG_FIELDS_TO_HIDE?: Map_Type<string, Array_Type<string>>;
  withCONFIG_FIELDS_TO_HIDE(CONFIG_FIELDS_TO_HIDE: Map_Type<string, Array_Type<string>> | {[key: string]: Array_Type<string> | Array<string>} | null): ReliabilityConfigForm;

  /**
   * Function to dynamically generate a pre-filled form based on the fields of the given {@link Config} type.
   * @param configTypeName
   *           Name of config type for which form needs to be displayed
   * @return UI component for Form based on configTypeName
   */
  static getFormConfig(configTypeName: string): any | null;

  /**
   * Function to get the config. This is just a wrapper to {@link Singleton#inst} but necessary because we need to
   * add the name of the config type to the object.
   *
   * @param configTypeName
   *           The name of the config type to retrieve
   * @return The configuration object for the specified type
   */
  static getConfig(configTypeName: string): any | null;

  /**
   * Function to get the value of an array field in the config as a fetch result.
   * Used by the form grid components to pre-populate their values.
   * @param configTypeName The name of the config type.
   * @param path The path to the array field in the config.
   * @param spec This field is ignored, and is only present to work around form grid dataspec limitations.
   * @returns The field value wrapped into a fetch result.
   */
  static getConfigAsFetchResult(configTypeName: string, path: string, spec?: any): FetchResult<any> | null;

  /**
   * Function called upon form submit.
   *
   * @param formObject
   *           The form data object to be saved
   */
  static saveConfig(formObject: any): void;
}

