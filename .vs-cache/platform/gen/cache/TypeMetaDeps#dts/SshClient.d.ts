// TypeScript definitions for the C3 type SshClient

/**
 * Type used from **all-env** to execute commands through ssh on any instance in the cloud.
 *
 * @remarks this represents a value passed to a method that expects an instance of SshClient
 */
declare interface ISshClient {
}

/**
 * Type used from **all-env** to execute commands through ssh on any instance in the cloud.
 *
 * @remarks this represents a made instance of SshClient
 */
declare class SshClient {

  /**
   * Execute a command in the instance described by the SshEndPoint.
   *
   * @param endPoint
   *           SshEndPoint object that describes the target instance for the command.
   * @param command
   *           command to execute in the given instance.
   * @param debug
   *           trace the ssh commands (-vvv) if true.
   * @param pkFile
   *           if specified, absolute location for the pkfile to use. Defaults to the c3 user c3-kp-01.pem file.
   * @param userName
   *           user to execute the command as. Defaults to 'root'.
   *
   * @return String
   *           if the command is successful (exit-code == 0) stdout of the command executed.
   *           if the command ifailes (exit-code != 0) stderr of the command executed.
   */
  static exec(endPoint: SshEndPoint, command: string, debug?: boolean, pkFile?: string | null, userName?: string | null): string | null;

  /**
   * The SshEnpoints are cached for efficiency. The cache is never invalidated, so this action can be used
   * to empty it.
   */
  static clearEndPointCache(): void;
}

