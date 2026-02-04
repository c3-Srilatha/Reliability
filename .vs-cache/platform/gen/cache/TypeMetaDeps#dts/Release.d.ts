// TypeScript definitions for the C3 type Release

/**
 * @remarks this represents a value passed to a method that expects an instance of Release
 */
declare interface IRelease {
}

/**
 * @remarks this represents a made instance of Release
 */
declare class Release {

  static notes(minVersionMajor?: number | null, minVersionMinor?: number | null, minVersionPatch?: number | null): C3.Array<any | null>;
}

