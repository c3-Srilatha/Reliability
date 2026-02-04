// TypeScript definitions for the C3 type Hdf5

/**
 * @remarks this represents a value passed to a method that expects an instance of Hdf5
 */
declare interface IHdf5 {
}

/**
 * @remarks this represents a made instance of Hdf5
 */
declare class Hdf5 {

  /**
   * Deserializes content from various files led to by the path into a list of C3 Type instances.
   * @urlOrEncodedPath
   *           File path to stream data from
   * @see FileObjsOperSpec.targetType
   * @return json object
   */
  static readJson(urlOrEncodedPath: string, spec?: Hdf5FileObjsOperSpec | null): any | null;

  /**
   * Deserializes HDF5 content to raw json.
   */
  static readContentAsJson(contentLocation: string, content: any, spec?: Hdf5FileObjsOperSpec | null): any | null;

  /**
   * Deserializes HDF5 content to a dynamic type.
   */
  static readObj(content: Content, spec?: FileObjsOperSpec | null): Hdf5Obj | null;
}

