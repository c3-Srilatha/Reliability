// TypeScript definitions for the C3 type Sftp

/**
 * Type used to transfer content using SFTP.
 *
 * Only username/password authentication is supported.
 *
 * @remarks this represents a value passed to a method that expects an instance of Sftp
 */
declare interface ISftp {
}

/**
 * Type used to transfer content using SFTP.
 *
 * Only username/password authentication is supported.
 *
 * @remarks this represents a made instance of Sftp
 */
declare class Sftp {

  /**
   * Upload content to the specified sftp url.
   *
   * @param url
   *          Fully specified sftp url: sftp://username:password@hostname/file-path
   * @param content
   *          AbstractContent to upload to the specified sftp url.
   */
  static put(url: string, content: Content): void;
}

