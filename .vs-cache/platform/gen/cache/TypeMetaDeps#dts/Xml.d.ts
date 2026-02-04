// TypeScript definitions for the C3 type Xml

/**
 * @remarks this represents a value passed to a method that expects an instance of Xml
 */
declare interface IXml<T> {
}

/**
 * @remarks this represents a made instance of Xml
 */
declare class Xml<T> {

  /**
   * validates the xml - the schema can either be provided through the 'schema' annotation on the mixing type or
   * the content of the xsd can be passed explicitly here. The schema specified using the annotation must be stored
   * as an attachment in the C3 filesystem. The xml will be validated against this schema and W3C XML schema.
   *
   * @param xml the xml to validate
   * @param xsd (optional) if provided, validates xml using this instead of the one provided through 'schema' annotation
   */
  static validate(xml: string, xsd?: string | null): void;

  /**
   * serialize the given object to xml
   */
  static toXml(obj?: T | null): string | null;

  /**
   * deserialize the given xml to an object
   */
  static fromXml(xml?: string | null): T | null;

  /**
   * clear the Xsd Cache
   *   this action will clear the xsd cache on all the nodes in the Cluster
   *
   * @param schema - this optional parameter can be used to remove a single entry from the cache
   */
  static clearXsdCache(schema?: string | null): void;

  /**
   * INTERNAL function, do not invoke directly
   */
  static _clearNodeXsdCache(schema?: string | null): void;
}

