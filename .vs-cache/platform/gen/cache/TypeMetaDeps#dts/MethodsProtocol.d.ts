// TypeScript definitions for the C3 type MethodsProtocol

/**
 * Marker type indicating support for implementation language method application syntax e.g. call via `.func()`.
 *
 * Enhances base MethodProtocol by adding ability to query for all available method names.
 *
 * @remarks this represents a value passed to a method that expects an instance of MethodsProtocol
 */
declare interface IMethodsProtocol {
}

/**
 * Marker type indicating support for implementation language method application syntax e.g. call via `.func()`.
 *
 * Enhances base MethodProtocol by adding ability to query for all available method names.
 *
 * @remarks this represents a made instance of MethodsProtocol
 */
declare class MethodsProtocol {

  /**
   * Implements the `.func()` syntactic sugar in js and py.
   *
   * Language SDKs typically just dispatch this call to remote API or java
   *
   * Note that since typically implementation is shared across language SDKs and is in java args are `any` and can not
   * accept `native`
   *
   * An example of the subtype is Obj.c3typ that exposes `with<field name>` & `without<field name>` methods via this
   * protocol
   *
   * @param args positional arguments
   * @param kwargs arguments by name
   *
   * @see MethodType#firstKwargIndex
   * @see MethodType#call
   */
  _call_(name: string, args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>): any;

  /**
   * @return true if it is valid to call method by provided name on this instance
   */
  _isMethodNameValid_(name: string): boolean;

  /**
   * @return method names callable by this protocol; note that methods can change from instance to instance of the same
   *         subtype so it is not safe to cache then in SDKs by type; however implementation can cache them if needed.
   */
  _methodNames_(): C3.Array<string | null>;
}

