// TypeScript definitions for the C3 type ByteStream

/**
 * The specialized BinaryStream type provides extra support for streams of bytes.
 * In particular, they can be processed as binary blocks instead of one byte at a time.
 *
 * @remarks this represents a value passed to a method that expects an instance of ByteStream
 */
declare interface IByteStream {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<ByteStream | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * The specialized BinaryStream type provides extra support for streams of bytes.
 * In particular, they can be processed as binary blocks instead of one byte at a time.
 *
 * @remarks this represents a made instance of ByteStream
 */
declare class ByteStream {

  /**
   * Callback lambda on close of this stream
   */
  readonly onClose?: λConsumer<ByteStream | null> | null;
  withOnClose(onClose: λConsumer<ByteStream | null> | null): ByteStream;

  /**
   * Constructs instance from given HTTP request. Expectation is that the request in not immediately consumed, and
   * content will eventually be read in a streaming manner by the instance.
   */
  static fromHttpRequest(req: HttpRequest): ByteStream;

  /**
   * Constructs instance of HTTP response from this instances. Expectation is that the response in not immediately
   * produced in memory, and HTTP response body will eventually be written in a streaming manner by the instance.
   */
  toHttpResponse(req: HttpRequest): HttpResponse;

  /**
   * Deallocates any potential resource and calls onClose if provided.
   */
  close(): void;

  /**
   * Discard any unconsumed items and release underlying resources.
   */
  doClose(): void;

  /**
   * @returns true if this Closable resource has been closed
   */
  closed(): boolean;

  /**
   * Consume the next block of values. Throws exception if stream is exhausted or closed.
   * This is generally the more efficient way to process the stream than using the {@link next} method.
   *
   * Correct usage is to only call `readBlock` after #hasNext returns true:
   * ```py
   * while s.hasNext():
   *    process(s.readBlock(0, 1024))
   * ```
   *
   * The offset is relative to the current position, so passing a positive value is equivalent to calling #skip.
   *
   * @param offset
   *           offset from the current position; defaults to 0.
   * @param len
   *           number of values to read; defaults to entire stream length.
   *
   * @return block of values up to the specified length or the size of the stream whichever is smaller
   */
  readBlock(offset?: number | null, len?: number | null): any | null;

  /**
   * Whether or not there is at least one more value to be consumed.
   */
  hasNext(): boolean;

  /**
   * Consume the next single value. Throws exception if stream is exhausted or closed.
   *
   * Correct usage is only to only call `next` after #hasNext returns true:
   * after #hasNext returns true:
   * ```py
   * while s.hasNext():
   *    process(s.next())
   * ```
   */
  next(): number | null;

  /**
   * Skip over the specified number of items.  If the the stream ends before the specified number of items have been
   * skipped, the return value will be smaller than the argument.
   *
   * @return number of items skipped
   */
  skip(n: number): number;

  /**
   * Return another stream on top of this one that allows modification of each single value via a lambda and returns a
   * new stream of those modified values. The current stream will be closed once the returned stream is consumed.
   *
   * @param mapper take each value and transform it
   */
  mapToSame(mapper: λFunction<number | null, number | null>): ByteStream;

  /**
   * Return another stream on top of this one that allows modification of each block via a lambda and returns a new
   * stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
   * Blocks of a default size, such as 10 KB, will be read.
   *
   * @param mapper take each block and transform it
   */
  mapBlocksToSame(mapper: λFunction<any, any | null>): ByteStream;

  /**
   * Return another stream on top of this one that allows modification of each block via a lambda and returns a new
   * stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
   * Blocks of the specifid size will be read.
   *
   * @param blockSize the maximum size of input blocks to read
   * @param mapper take each block and transform it
   */
  mapBlocksToSame(blockSize: number, mapper: λFunction<any, any | null>): ByteStream;

  /**
   * Return another stream which combines this one and the argument streams. The current and specified streams will be
   * closed once the returned stream is consumed.
   */
  concat(other: BlockStream<number | null, any | null>): ByteStream;

  /**
   * @return string from these bytes based on input charset and compression type.
   */
  readString(contentType?: string | null, contentEncoding?: string | null): string;

  /**
   * Drains this stream into a byte push stream and closes this stream, even if there is any exception. Target push
   * stream will be closed based on doNotCloseTarget.
   */
  drain(target: BytePushStream, doNotCloseTarget?: boolean): void;

  /**
   * Compresses the byte stream into out and closes both streams; if contentEncoding is 'identity' doesn't compress.
   */
  compress(out: BytePushStream, contentEncoding: string | null): void;

  /**
   * Uncompresses the stream; if contentEncoding is 'identity' returns the same stream. It's important to make sure
   * that resulting stream is closed so all the allocated resources are released properly.
   */
  uncompress(contentEncoding: string | null): ByteStream;

  /**
   * Transcodes this stream from contentType and contentEncoding into outContentType and outContentEncoding and closes
   * both streams.
   */
  transcode(contentType: string, contentEncoding: string, out: BytePushStream, outContentType: string, outContentEncoding: string): void;

  /**
   * @return character stream on top of this byte stream. It's important to make sure that resulting
   * stream is closed so all the allocated resources are released properly.
   */
  toCharStream(contentType?: string | null, contentEncoding?: string | null): CharStream;

  /**
   * @return a {@Link ContentStream} on top of this byte stream. It's important to make sure that resulting
   * stream is closed so all the allocated resources are released properly.
   */
  toContentStream(contentType?: string | null, contentEncoding?: string | null): ContentStream;

  /**
   * @return java.io.InputStream if this stream is backed by it.
   */
  asInputStream(failIfNot?: boolean): any;

  /**
   * @return new stream from a binary value.
   */
  static fromBinary(value: any | null): ByteStream;

  /**
   * @return new stream from a binary value.
   */
  static fromBytes(value: Stream<number | null> | null): ByteStream;

  /**
   * @return new stream from netty ByteBuf (https://netty.io/4.0/api/io/netty/buffer/ByteBuf.html)
   */
  static fromNettyByteBuf(byteBuf?: any): ByteStream | null;

  /**
   * Creates a new instance based on the native input/read stream:
   *  - Java: `java.io.InputStream`
   *  - JavaScript: [iterable/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
   */
  static fromNative(inputStream: any): ByteStream;

  /**
   * @return new stream from a text value.
   */
  static fromText(value?: string | null, charset?: string | null): ByteStream | null;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}
