// TypeScript definitions for the C3 type DocSiteExport.Utils

/**
 * Miscellaneous utility functions used by {@link DocSiteExport} and its sub-steps.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.Utils
 */
declare namespace DocSiteExport {
  export interface IUtils {
  }
}

/**
 * Miscellaneous utility functions used by {@link DocSiteExport} and its sub-steps.
 *
 * @remarks this represents a made instance of DocSiteExport.Utils
 */
declare namespace DocSiteExport {
  export class Utils {

    /**
     * Constructs a `DOC_SITE` artifact version from a given {@link Pkg#version}.
     * This appends a `docsite` [build identifier](https://semver.org/#spec-item-10)
     * to the given version.
     *
     * @param pkgVersion
     *           The fully-resolved version of the package.
     * @return The fully-resolved version of the package with a `docsite` build identifier appended.
     */
    static constructDocArtifactVersion(pkgVersion: string): string;

    /**
     * Returns the fully resolved version of the given package.
     *
     * @param pkg
     *           The package to resolve the version for.
     * @param resolvedVersionsMap
     *           See {@link DocSiteExport.DocGenSpec#resolvedVersionsMap}.
     * @return The fully resolved version of the package, or the package's `{major}.{minor}.{patch}`
     *         version if the resolved version isn't available.
     */
    static getResolvedVersion(pkg: Pkg, resolvedVersionsMap?: Map_Type<string, string>): string;

    /**
     * Returns a map of all dependencies of the given package with their fully resolved versions.
     *
     * @param pkg
     *           The package to resolve dependencies for.
     * @param resolvedVersionsMap
     *           See {@link DocSiteExport.DocGenSpec#resolvedVersionsMap}.
     * @return A map of package names to their fully resolved versions, or their `{major}.{minor}.{patch}`
     *         versions if the resolved version isn't available.
     */
    static getResolvedDependencies(pkg: Pkg, resolvedVersionsMap?: Map_Type<string, string>): Map_Type<string, string> | null;

    /**
     * Returns all [topic files](FileExt#DOC) in a given package.
     *
     * @param pkgName
     *           The name of the package to get [topic files](FileExt#DOC) for.
     * @param guide
     *           If `true`, return [guide](DocSiteExport.Guide) files. Otherwise, return
     *           regular [topic](DocSiteExport.Topic) files.
     * @return A list of all topic files in the given package. [Cache](Pkg.Category#CACHE)
     *         and [test](Pkg.File#isTest) files are always excluded.
     */
    static getTopicFiles(pkgName: string, guide?: boolean = 'false'): Array_Type<Pkg.File> | null;
  }
}

