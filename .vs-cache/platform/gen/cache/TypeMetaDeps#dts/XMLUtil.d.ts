// TypeScript definitions for the C3 type XMLUtil

/**
 * @remarks this represents a value passed to a method that expects an instance of XMLUtil
 */
declare interface IXMLUtil {
}

/**
 * @remarks this represents a made instance of XMLUtil
 */
declare class XMLUtil {

  /**
   * Validate the xml file against a given schema file
   * If the xml is not valid, an exception will be thrown containing the validation error information
   * else it will return TRUE.
   * @return true if the xml file is valid
   */
  static validateXml(xmlFilePath?: string | null, xsdFilePath?: string | null): boolean;
}

