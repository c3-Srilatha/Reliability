// TypeScript definitions for the C3 type Curl

/**
 * This type helps to generate curl commands for file uploads, imports and other api commands
 *
 * @remarks this represents a value passed to a method that expects an instance of Curl
 */
declare interface ICurl {
}

/**
 * This type helps to generate curl commands for file uploads, imports and other api commands
 *
 * @remarks this represents a made instance of Curl
 */
declare class Curl {

  /**
   * Generate curl command for FileSourceCollection given {@link CurlFileSpec}
   */
  static file(spec: CurlFileSpec): string;

  /**
   * Generate curl command for import given {@link CurlImportSpec}
   */
  static import(spec: CurlImportSpec): string;

  /**
   * Generate curl command for apis given {@link CurlApiSpec}
   */
  static api(spec: CurlApiSpec): string;
}

