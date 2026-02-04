// TypeScript definitions for the C3 type CallableProtocol

/**
 * Protocol to enable calling types with two arguments. In Python, instances of types that mix CallableProtocol are
 * directly callable.
 *
 * @remarks this represents a value passed to a method that expects an instance of CallableProtocol
 */
declare interface ICallableProtocol {
}

/**
 * Protocol to enable calling types with two arguments. In Python, instances of types that mix CallableProtocol are
 * directly callable.
 *
 * @remarks this represents a made instance of CallableProtocol
 */
declare class CallableProtocol {

  /**
   * Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
   * `args` and `kwargs` are of `ValueType` `any`.
   */
  _call_(args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>): any;
}

