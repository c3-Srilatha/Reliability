// TypeScript definitions for the C3 type Streamable.Arg

/**
 * A base trait for all streamable types. Types that mix in this trait can be streamed to and from nodes in a
 * distributed system. E.g. a streamable type can be sent over a network connection or stored in a database without
 * materializing it's instance value(s) in memory.
 *
 * @see Stream
 * @see Content
 *
 * @remarks this represents a value passed to a method that expects an instance of Streamable.Arg
 */
declare namespace Streamable {
  export interface IArg {
  }
}

/**
 * A base trait for all streamable types. Types that mix in this trait can be streamed to and from nodes in a
 * distributed system. E.g. a streamable type can be sent over a network connection or stored in a database without
 * materializing it's instance value(s) in memory.
 *
 * @see Stream
 * @see Content
 *
 * @remarks this represents a made instance of Streamable.Arg
 */
declare namespace Streamable {
  export class Arg {

    /**
     * Constructs instance from given HTTP request. Expectation is that the request in not immediately consumed, and
     * content will eventually be read in a streaming manner by the instance.
     */
    static fromHttpRequest(req: HttpRequest): Streamable.Arg;
  }
}

