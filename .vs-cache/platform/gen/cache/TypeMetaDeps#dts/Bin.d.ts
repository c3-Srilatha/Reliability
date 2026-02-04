// TypeScript definitions for the C3 type Bin

/**
 * Helper class for binary data, implemented on `ByteBuffer` for Java, `ArrayBuffer` for JavaScript and `bytes` for
 * Python.
 *
 * @remarks this represents a value passed to a method that expects an instance of Bin
 */
declare interface IBin {
}

/**
 * Helper class for binary data, implemented on `ByteBuffer` for Java, `ArrayBuffer` for JavaScript and `bytes` for
 * Python.
 *
 * @remarks this represents a made instance of Bin
 */
declare class Bin {

  static myType(): Type | null;

  static myType(pkg: Pkg | null): Type | null;

  /**
   * Return a binary value that contains the contents of both specified values.
   */
  static concat(a: any | null, b: any | null): any | null;

  /**
   * Create a binary value from a Base64 encoded string. This will throw an error if the string is invalid.
   *
   * @see Base64
   */
  static fromBase64(s: string): any | null;

  /**
   * Create a binary value from a hexadecimal encoded string. Each pair of characters represents one byte in the
   * result. If the string is empty, this will return null, and will throw an error if the string is invalid.
   */
  static fromHex(s: string | null): any | null;

  /**
   * Check whether a binary value is null or has no content.
   */
  static isEmpty(b: any | null): boolean;

  /**
   * Check whether two binary values have the same content.
   */
  static isSame(a: any | null, b: any | null): boolean;

  /**
   * Read the contents of a binary as UTF-8 encoded text.
   */
  static readUtf8String(b: any | null): string | null;

  /**
   * Get the size of a binary value in bytes. This will return 0 for a null value.
   */
  static size(b: any | null): number;

  /**
   * Convert a string to a UTF-8 encoded binary value.
   */
  static wrap(s: string | null): any | null;

  /**
   * Produce a binary value containing the specified number of zero bytes. The return value will never be null,
   * but will be "empty" if the size is `0`.
   *
   * @param size
   *        number of bytes; must be non-negative
   */
  static zeroes(size: number): any | null;

  static fromBytes(bytes: C3.Array<number | null>, offset: number, len: number): any | null;

  static fromBytes(bytes: C3.Array<number | null>, offset: number): any | null;

  static fromBytes(bytes: C3.Array<number | null>): any | null;

  static fromBytes(bytes: C3.Array<number>, offset: number, len: number): any | null;

  static fromBytes(bytes: C3.Array<number>, offset: number): any | null;

  static fromBytes(bytes: C3.Array<number>): any | null;

  /**
   * Compress data with Snappy.
   */
  static compressSnappy(bb: any | null): any | null;

  /**
   * Compress data with Gzip.
   */
  static compressGzip(bb: any | null): any | null;

  /**
   * Decompress data compressed with Snappy.
   */
  static uncompressSnappy(bb: any | null): any | null;

  /**
   * Decompress data compressed with Gzip.
   */
  static uncompressGzip(bb: any | null): any | null;

  /**
   * Decompress UTF-8 data compressed with Snappy.
   */
  static uncompressSnappyString(bb: any | null): string | null;

  /**
   * Decompress UTF-8 data compressed with Gzip.
   */
  static uncompressGzipString(bb: any | null): string | null;

  /**
   * Determine if the specified binary has valid UTF-8 text. Note that this excludes nuls, most control characters
   * and byte sequences that aren't valid UTF-8 sequences. This will return true for pure ASCII text as well, since
   * it is a subset of UTF-8.
   * Note that some characters which are technically valid will flag the data as non-text. For example NUL (zero)
   * bytes and most control characters. These values, especially NUL are common in binary files and very uncommon in
   * text.
   *
   * @param bb
   *        binary data to examine
   * @return true if the data is valid UTF-8 text
   */
  static isUtf8Text(bb: any | null): boolean;

  /**
   * Determine if the specified binary has valid UTF-8 text. Note that this excludes nuls, most control characters
   * and byte sequences that aren't valid UTF-8 sequences. This will return true for pure ASCII text as well, since
   * it is a subset of UTF-8.
   * Note that some characters which are technically valid will flag the data as non-text. For example NUL (zero)
   * bytes and most control characters. These values, especially NUL are common in binary files and very uncommon in
   * text.
   *
   * @param bb
   *        binary data to examine
   * @param partial
   *        whether this is a subset of a larger block of data
   * @return true if the data is valid UTF-8 text
   */
  static isUtf8Text(bb: any | null, partial?: boolean): boolean;
}

