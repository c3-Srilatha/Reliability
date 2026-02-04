// TypeScript definitions for the C3 type JarvisBaseToolkit

/**
 * The Type that contains utility functions for running custom Jarvis steps.
 *
 * @remarks this represents a value passed to a method that expects an instance of JarvisBaseToolkit
 */
declare interface IJarvisBaseToolkit {
}

/**
 * The Type that contains utility functions for running custom Jarvis steps.
 *
 * @remarks this represents a made instance of JarvisBaseToolkit
 */
declare class JarvisBaseToolkit {

  /**
   * The function that returns whether the code coverage is enabled for the current Jarvis build.
   * If the code coverage is enabled, the code will be instrumented to collect code coverage data.
   *
   * @returns the boolean value indicating whether the code coverage is enabled for the current Jarvis build
   */
  static isCodeCoverageEnabled(): boolean;

  /**
   * Helper function to detect if artifacts should be registered to an upstream {@link ArtifactHub}.
   *
   * @return A boolean value indicating whether the artifacts should be registered to an upstream
   *         {@link ArtifactHub}.
   */
  static shouldRegisterUpstream(): boolean;

  /**
   * Function to fetch the build configurations for the current Jarvis build. This information is used to
   * monitor variables affecting the code analysis process.
   *
   * @param step
   *           The current Jarvis step
   * @return JSON object containing the build configurations for the current Jarvis build.
   */
  static collectBuildConfigurations(step?: Jarvis.Step): any | null;

  /**
   * Function to check if a branch matches any of the given regexes.
   *
   * @param branch
   *           The branch name to check.
   * @param branchRegexes
   *           The regexes to match against the branch name. If a string is provided, it's
   *           treated as a JSON string of an array of regexes (since Jarvis configs are
   *           JSON strings).
   * @return Whether the branch name matches any of the given regexes. The _entire_ branch
   *         name is matched against the regex.
   *
   *         ```
   *         ┌─────────────┬──────────────────────┬──────────┐
   *         │ Regex       │ Branch               │ Matches? │
   *         ├─────────────┼──────────────────────┼──────────┤
   *         │ release     │ release              │ Yes      │
   *         │             │ release/v10.0        │ No       │
   *         │             │ hotfix/release/v10.0 │ No       │
   *         ├─────────────┼──────────────────────┼──────────┤
   *         │ release/v.* │ release              │ No       │
   *         │             │ release/v10.0        │ Yes      │
   *         │             │ hotfix/release/v10.0 │ No       │
   *         ├─────────────┼──────────────────────┼──────────┤
   *         │ .*release.* │ release              │ Yes      │
   *         │             │ release/v10.0        │ Yes      │
   *         │             │ hotfix/release/v10.0 │ Yes      │
   *         └─────────────┴──────────────────────┴──────────┘
   *         ```
   */
  static branchMatches(branch: string, branchRegexes?: Array_Type<string> | string): boolean;

  /**
   * Function that returns whether legacy documentation artifact generation is enabled
   * for the current Jarvis build. Checks if `generateDocumentationArtifacts` is enabled
   * and if the current branch is included in `documentationArtifactGenerationBranches`.
   *
   * @param step
   *           The Jarvis step that is being run
   * @return Whether legacy documentation artifact generation is enabled for the current build
   *
   * @see isDocGenEnabled
   */
  static isLegacyDocGenEnabled(step?: Jarvis.Step): boolean;

  /**
   * Function that returns whether documentation artifact generation us enabled for
   * the current Jarvis build. Checks if `generateDocArtifacts` is enabled
   * and if the current branch is included in `docArtifactGenerationBranches`.
   *
   * @param step
   *           The Jarvis step that is being run
   * @return Whether documentation artifact generation is enabled for the current build
   */
  static isDocGenEnabled(step?: Jarvis.Step): boolean;

  /**
   * Function that returns code analysis should be executed and reported.
   *
   * @param step
   *           The Jarvis step that is being run
   * @return Whether code analysis is enabled for the current build
   */
  static shouldRunCodeAnalysis(step?: Jarvis.Step): boolean;
}

