// TypeScript definitions for the C3 type ToolsService

/**
 * This endpoint provides functions needed by tools clients.
 *
 * @remarks this represents a value passed to a method that expects an instance of ToolsService
 */
declare interface IToolsService {
}

/**
 * This endpoint provides functions needed by tools clients.
 *
 * @remarks this represents a made instance of ToolsService
 */
declare class ToolsService {

  /**
   * Return all types whose name start with the specified prefix.
   *
   * @param packageName
   *           the package relative to which types should be visible
   * @param typePrefix
   *           the prefix of the type name to be completed
   */
  static completeTypeName(packageName?: string | null, typePrefix: string): C3.Array<string | null>;

  /**
   * Return all type fields whose name start with the specified prefix.
   *
   * @param packageName
   *           the package relative to which types should be visible
   * @param typeName
   *           the name of the type to be inspected
   * @param fieldPrefix
   *           the prefix of the field name to be completed
   */
  static completeFieldName(packageName?: string | null, typeName: string, fieldPrefix: string): C3.Array<string | null>;

  /**
   * Return formatted documentation for a single type data field or function.
   *
   * @param packageName
   *           the package relative to which types should be visible
   * @param typeName
   *           the name of the type to be inspected
   * @param fieldName
   *           the name of the field to be documented
   * @param renderSpec
   *           options for documentation rendering
   */
  static documentField(packageName?: string | null, typeName: string, fieldName: string, renderSpec?: DocumentationRenderSpec | null): ContentValue | null;

  /**
   * Get all seed data file formats supported.
   */
  static seedFileFormats(): C3.Array<SeedFileFormat | null>;

  /**
   * Get the seed data file format for the specified extension or MIME type.
   *
   * @param format
   *           the seed data file extension or MIME type
   */
  static seedFileFormat(format: string): SeedFileFormat | null;
}

