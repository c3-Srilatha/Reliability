// TypeScript definitions for the C3 type Codec

/**
 * Base type for content encoding / decoding.
 *
 * @remarks this represents a value passed to a method that expects an instance of Codec
 */
declare interface ICodec {
}

/**
 * Base type for content encoding / decoding.
 *
 * @remarks this represents a made instance of Codec
 */
declare class Codec {

  /**
   * Lookup Codec type from Content Encoding name.
   */
  static typeFromContentEncoding(contentEncoding: string): Type;

  /**
   * Name of this Content Encoding. E.g. "gzip"
   */
  static contentEncoding(): string;

  /**
   * Encodes stream.
   */
  static encode(content: BytePushStream): BytePushStream;

  /**
   * Encodes bytes.
   */
  static encodeBytes(content: any): any;

  /**
   * Encodes bytes.
   */
  static encodeString(content: string): any;

  /**
   * Decodes stream.
   */
  static decode(content: ByteStream): ByteStream;

  /**
   * Decodes bytes.
   */
  static decodeBytes(content: any): any;

  /**
   * Decodes bytes.
   */
  static decodeString(content: any): string;
}

