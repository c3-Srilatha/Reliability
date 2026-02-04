// TypeScript definitions for the C3 type ContentRef

/**
 * This type represents the reference to the content
 *
 * @remarks this represents a value passed to a method that expects an instance of ContentRef
 */
declare interface IContentRef {
}

/**
 * This type represents the reference to the content
 *
 * @remarks this represents a made instance of ContentRef
 */
declare class ContentRef {

  /**
   * Url of the referenced file
   */
  fileUrl(): string;

  /**
   * File for the instance of ContentRef
   */
  file(): File;

  /**
   * returns a stream of objs for the referenced content
   */
  readObjs(spec?: FileObjsOperSpec | null): Stream<Obj | null>;
}

