// TypeScript definitions for the C3 type FileInfoOverride

/**
 * @remarks this represents a value passed to a method that expects an instance of FileInfoOverride
 */
declare interface IFileInfoOverride {

  /**
   * Update the fileInfoOverride for a file
   * A user provided lambda function for determining Source File Info.
   * This field is optional and overrides default Source File Info inference from TenantConfig
   * if your filename parsed returns you SourceFileInfo like this
   * ```
   *  { src: 'MyTypeName', timestamp: '2017-01-01', customer: 'me'}
   * ```
   * But your type name is 'CanonicalMyTypeName'
   * you can create a lambda like this to override as below
   * ```
   * function f (file){
   *  var info = Canonical.parseFileName(file.safeUrl());
   *  return info.putFields('src', 'Canonical'+info.src);
   * }
   * var overrideLambda = Lambda.fromJavascript(f.toString());
   * ```
   */
  fileInfoOverride?: λFunction<File | null, ISourceFileInfo | null> | null;
}


interface λFunction<T, R> {
  (t: T): R
}
/**
 * @remarks this represents a made instance of FileInfoOverride
 */
declare class FileInfoOverride {

  /**
   * Update the fileInfoOverride for a file
   * A user provided lambda function for determining Source File Info.
   * This field is optional and overrides default Source File Info inference from TenantConfig
   * if your filename parsed returns you SourceFileInfo like this
   * ```
   *  { src: 'MyTypeName', timestamp: '2017-01-01', customer: 'me'}
   * ```
   * But your type name is 'CanonicalMyTypeName'
   * you can create a lambda like this to override as below
   * ```
   * function f (file){
   *  var info = Canonical.parseFileName(file.safeUrl());
   *  return info.putFields('src', 'Canonical'+info.src);
   * }
   * var overrideLambda = Lambda.fromJavascript(f.toString());
   * ```
   */
  readonly fileInfoOverride?: λFunction<File | null, SourceFileInfo | null> | null;
  withFileInfoOverride(fileInfoOverride: λFunction<File | null, ISourceFileInfo | null> | null): FileInfoOverride;
}


interface λFunction<T, R> {
  (t: T): R
}
