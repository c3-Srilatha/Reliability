// TypeScript definitions for the C3 type SourceControlApi

/**
 * APIs shared among various source control systems
 *
 * @remarks this represents a value passed to a method that expects an instance of SourceControlApi
 */
declare interface ISourceControlApi {
}

/**
 * APIs shared among various source control systems
 *
 * @remarks this represents a made instance of SourceControlApi
 */
declare class SourceControlApi {

  /**
   * Given a local file system source control repo path and a path to a C3 repository, returns all package names and
   * all .c3pkg.json {@link File}s for the packages.
   *
   * @param pathToLocalC3Repo
   *            The full file system path to the source control C3 local repository (e.g. `/home/jenkins/workspace/mybranch/c3server/repo/server`)
   * @return json with `packageNames: [string]` and `packageJsons: [File]`
   */
  static allSourceControlPackages(pathToLocalC3Repo: string): any | null;

  /**
   * Traverses the upstream dependencies from `downstreamPackages` as specified in all package `package.json`s.
   * Traverses until the specified `depth`.
   * @param downstreamPackages
   *            The array of downstream packages to start the upstream traversal from
   * @param packageJsons
   *            The {@link File} to all package's `package.json`
   * @param depth
   *           The depth (number of tiers) to traverse. If not specified, or <= -1, all tiers will be traversed
   * @return the list of dependent package names for the root packages until the depth specified
   */
  static packageUpstreamDependencies(downstreamPackages?: C3.Array<string | null>, packageJsons?: C3.Array<File | null>, depth?: number | null): C3.Array<string | null>;

  /**
   * Given a map of packages to changed files, generate a list of all the packages that have changed and
   * any other packages that depend on those packages, directly or indirectly.
   * If a repository.json or a java file changes, all packages will be included as affected.
   *
   * @param repoDiff
   *            A representation of file changes in the repository
   * @param pathToLocalRepo
   *            The file system path to the already-cloned repo. (e.g. `/home/jenkins/workspace/mybranch/c3server`)
   * @param repoDir
   *            The directory of the C3 repository within the source control repository, e.g. `'base'`.
   *            If there are multiple C3 repositories within the same source control, this should be run
   *            individually on each.
   * @param depth
   *           The depth (number of tiers) to traverse. If not specified, or <= -1, all tiers will be traversed
   * @param maxFilesCount
   *           Returns all packages if the number of affected files in diff is >= maxFilesCount.
   *           This is because there is a limit on the number of files returned by compare API (300 for GitHub).
   * @return the names of the affected packages.
   */
  static packagesAffectedFromRepositoryDiff(repoDiff?: SourceControlRepositoryDiff | null, pathToLocalRepo: string, repoDir: string, depth?: number | null, maxFilesCount?: number | null): C3.Array<string | null>;

  /**
   * Parse file patches with the diff file format.
   *
   * @param diff
   *    The file diff string
   * @return
   *    A @see SourceControlFileDiff} containing the changes on the file
   */
  static parseDiff(diff: string): SourceControlFileDiff | null;
}

