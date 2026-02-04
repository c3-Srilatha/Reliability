// TypeScript definitions for the C3 type Client

/**
 * This type provides convenience methods usable by client environments (action engines), such as Jupyter (Python).
 *
 * @remarks this represents a value passed to a method that expects an instance of Client
 */
declare interface IClient {
}

/**
 * This type provides convenience methods usable by client environments (action engines), such as Jupyter (Python).
 *
 * @remarks this represents a made instance of Client
 */
declare class Client {

  /**
   * Retrieves client context.
   *
   * @return information about the current user and application context
   */
  static init(validMinutes?: number | null): ClientContext | null;

  /**
   * Retrieves client context.
   *
   * @return information about the current user and tag context
   */
  static getTag(tagId: string): Tag | null;

  /**
   * An inline function to copy files from a remote source such as s3 to a local path on the machine from which this
   * inline action is executed.
   *
   * @param srcUrlOrEncodedPath
   *             Path prefix to source file(s). This argument is a fully qualified URL.
   *             This may be a path to a folder or a file. If this path specifies a file, this file will be placed in
   *             the local path specified by `localPath`. If this path specifies a directory, the contents of this
   *             directory will be copied into the local directory specified by `localPath`. Copying a folder will
   *             recursively copy all content in the folder. Note that the accepted syntax for this argument is much
   *             more strict that `uploadLocalClientFiles`'s `dstUrlOrEncodedPath` argument. To copy a remote
   *             directory, only the following syntax is currently accepted:
   *                 * `srcUrlOrEncodedPath = 's3://c3--env/fs/someTenant/someTag/directory/nestedDirectory/'`
   *             Note that not including a trailing `/` will cause this method to fail.
   *             Similarly, to copy a remote file, the following syntax must be followed:
   *                 * `srcUrlOrEncodedPath = 's3://c3--env/fs/someTenant/someTag/directory/nestedDirectory/someFile.txt'`
   * @param localPath
   *             Path prefix to destination file(s). This may be a path to a folder, or a file. Assuming our current
   *             working directory is `/Current/Directory/`, all of the following examples will result in a files being
   *             copied to the same local directory:
   *                 * `localPath = '/Current/Directory/Nested/Directory'`
   *                 * `localPath = './Nested/Directory'`
   *                 * `localPath = 'Nested/Directory'`
   *             Note that a trailing `/` is optional. If `localPath` specifies a file name (and `srcUrlOrEncodedPath`
   *             also specifies a file), the file will be copied to the local directory with the new file name specified
   *             by `localPath` (i.e. `copyFilesToLocalClient('s3://c3--env/fs/someTenant/someTag/y.txt', 'f.txt')` will
   *             result in a file with local path 'f.txt').
   * @return number files copied.
   */
  static copyFilesToLocalClient(srcUrlOrEncodedPath: string, localPath: string, spec?: FileOperationSpec | null): number;

  /**
   * An inline function to download list of files from a remote source such as s3 to local files
   * (potentially in memory).
   *
   * @param filesAndSrcPaths
   *           List of Pair of (file to download to, string representing url or encoded path of remote files to
   *           download).
   *           In python, the first element of each Pair should be a file object.
   *           This method will completely overwrite the given files.
   *           Callers are responsible for handling the lifecycle of the file objects
   *           (e.g. making sure the directory exists on disk, closing them).
   * @return number of files downloaded.
   */
  static downloadFiles(destFilesAndSrcPaths: C3.Array<Pair<any, string | null> | null>, spec?: FileOperationSpec | null): number;

  /**
   * An inline function to download one file from a remote source such as s3 to a local file (potentially in memory).
   *
   * @param destFile
   *           File to download to.
   *           In python, it should be a file object. This method will completely overwrite the given file.
   *           Callers are responsible for handling the lifecycle of the file object
   *           (e.g. making sure the directory exists on disk, closing them).
   * @param srcPath string representing url or encoded path of remote files to download.
   */
  static downloadFile(destFile: any, srcPath: string, spec?: FileOperationSpec | null): void;

  /**
   * An inline function to upload files from a local path on the machine from which this inline action is
   * executed to a remote source such as s3. This operation is recursive in the given directory.
   *
   * @param localPath
   *             Path prefix to source file(s). This can be the path to a file or a folder.
   *             If this path specifies a file, this file will be placed in the remote path specified by
   *             `dstUrlOrEncodedPath`. If this path specifies a directory, the contents of this directory will be
   *             copied into the directory specified by `dstUrlOrEncodedPath`. Copying a folder will recursively copy
   *             all content in the folder. Assuming our current working directory is `/Current/Directory/`,
   *             all of the following examples will result in a files being copied from the same local directory:
   *                 * `localPath = '/Current/Directory/Nested/Directory'`
   *                 * `localPath = './Nested/Directory'`
   *                 * `localPath = 'Nested/Directory'`
   *             Note that a trailing `/` is optional if `localPath` specifies a directory (and not a file).
   * @param dstUrlOrEncodedPath
   *             Path prefix to destination file(s). This argument is a fully qualified URL, or a relative encoded path.
   *             If the encoded path starts with a leading `/`, then it is expected to contain "mount", root folder,
   *             or remote host (depending on file system). The following examples will all result in a file being
   *             placed in the same remote directory:
   *                * `dstUrlOrEncodedPath = 's3://c3--env/fs/someTenant/someTag/directory/nestedDirectory'`
   *                * `dstUrlOrEncodedPath = '/c3--env/fs/someTenant/someTag/directory/nestedDirectory'`
   *                * `dstUrlOrEncodedPath = 'directory/nestedDirectory'`
   *                * `dstUrlOrEncodedPath = './directory/nestedDirectory'`
   *            Note that a trailing `/` is optional. Also note that the file will always retain its local name when
   *            copied to the remote file system. If you try to provide a file name in `dstUrlOrEncodedPath`, that file
   *            name will just become part of the file's path (i.e. `uploadLocalClientFiles('f.txt', 'y.txt')` will
   *            result in a file with remote path 'y.txt/f.txt').
   *
   *
   *
   * @return number files copied.
   */
  static uploadLocalClientFiles(localPath: string, dstUrlOrEncodedPath: string, spec?: FileOperationSpec | null): number;

  /**
   * An inline function to upload list of files to a remote source such as s3.
   *
   * @param filesAndDestPaths
   *           List of Pair of (file to be uploaded, string representing url or encoded path to upload to).
   *           In python, the first element of each Pair should be a file object.
   *           NOTE: the file object will be closed as a result of this function
   * @return number of files uploaded.
   */
  static uploadFiles(filesAndDestPaths: C3.Array<Pair<any, string | null> | null>, spec?: FileOperationSpec | null): number;

  /**
   * An inline function to upload one file to a remote source such as s3 from a local file (potentially in memory).
   *
   * @param srcFile
   *           File to upload.
   *           In python, it should be a file object.
   *           NOTE: the file object will be closed as a result of this function
   * @param dstPath string representing url or encoded path of remote file to upload to.
   */
  static uploadFile(srcFile: any, dstPath: string, spec?: FileOperationSpec | null): void;

  /**
   * Call func in concurrent threads with arguments from args, subjected to maxConcurrency.
   * @param func Function to execute. In Python, it should be a callable.
   * @param args List of arguments to invoke the function with. In python, each element should be a tuple.
   * @param maxConcurrency Maximum number of concurrent threads to execute. If not specified, it will be set to the number of CPUs.
   * @return list of return values.
   *
   * WARNING: Return list is not guaranteed to have the same length or ordering as args.
   */
  static executeConcurrently(func: any, args: C3.Array<any>, maxConcurrency?: number | null): C3.Array<any>;

  /**
   * Call func in concurrent threads with arguments from args.
   *
   * @param func
   *         Function to execute. In Python, it should be a callable.
   * @param spec
   *         Customization for retry. For example, max number of retries and sleep time between retries.
   */
  static retry(func: λNullConsumer, spec?: RetrySpec | null): void;
}


interface λNullConsumer {
  (): void
}
