// TypeScript definitions for the C3 type FileSystemEngine

/**
 * Represents a file system engine and configuration.
 *
 * @remarks this represents a value passed to a method that expects an instance of FileSystemEngine
 */
declare interface IFileSystemEngine {
}

/**
 * Represents a file system engine and configuration.
 *
 * @remarks this represents a made instance of FileSystemEngine
 */
declare class FileSystemEngine {

  /**
   * @return default FileSystem.
   */
  static defaultFs(): FileSystem;
}

