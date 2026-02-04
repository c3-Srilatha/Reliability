// TypeScript definitions for the C3 type CloneHelper

/**
 * @remarks this represents a value passed to a method that expects an instance of CloneHelper
 */
declare interface ICloneHelper {
}

/**
 * @remarks this represents a made instance of CloneHelper
 */
declare class CloneHelper {

  /**
   *  Given the name of a type and the name of an object to be cloned, return a name
   *  for the clone of the object based off of existing records of that type in the database.
   *  Records must have a `name` field.
   *  Naming convention
   *  ```
   *  File -> File-Copy1
   *  File -> File-Copy2
   *  File -> File-Copy3
   *  File-Copy1 -> File-Copy1-Copy1
   *  File-Copy1 -> File-Copy1-Copy2
   * ```
   *  @param typeName
   *            The name of the type that will make a fetch() call to get all existing records of that type in the database
   *  @param originalName
   *            The name of the object to be cloned
   *  @return The name to use for the clone
   */
  static generateCloneName(typeName: string, originalName: string): string;
}

