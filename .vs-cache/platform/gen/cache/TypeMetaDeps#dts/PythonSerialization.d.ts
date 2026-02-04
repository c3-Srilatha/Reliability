// TypeScript definitions for the C3 type PythonSerialization

/**
 * @remarks this represents a value passed to a method that expects an instance of PythonSerialization
 */
declare interface IPythonSerialization {
}

/**
 * @remarks this represents a made instance of PythonSerialization
 */
declare class PythonSerialization {

  /**
   * Serialize (with dill) and compress (with zlib) a python object.
   */
  static serialize(obj?: any): string | null;

  /**
   * Decompress (with zlib) and deserialize (with dill) input into a python object.
   * This function works when `serialized` is a string or a python bytes object (C3's Binary)
   * NOTE: if `serialized` is a string, it must be base64 encoded.
   */
  static deserialize(serialized?: string | null): any;

  /**
   * This method is used for making imported methods and classes serializable.
   * If the class / method to be serialized is imported (e.g. in another file), dill will not include its definition
   * during serialization since it only serializes classes / methods defined in __main__.
   * This function works around the issue by re-compiling the class / method in the scope of __main__ to "trick"
   * pickle / dill to believe that the class / method came from __main__.
   *
   * @param obj
   *           The class or function to make serializable
   * @param doNotCleanUp
   *           If true, the class / method will not be cleaned up from __main__.
   * @return
   *           The native class
   */
  static serializable(obj?: any, doNotCleanUp?: boolean): any;
}

