// TypeScript definitions for the C3 type JarvisBaseToolkit.CodeAnalysis

/**
 * The Type that contains utility functions for running code analysis Jarvis step.
 *
 * @remarks this represents a value passed to a method that expects an instance of JarvisBaseToolkit.CodeAnalysis
 */
declare namespace JarvisBaseToolkit {
  export interface ICodeAnalysis {
  }
}

/**
 * The Type that contains utility functions for running code analysis Jarvis step.
 *
 * @remarks this represents a made instance of JarvisBaseToolkit.CodeAnalysis
 */
declare namespace JarvisBaseToolkit {
  export class CodeAnalysis {

    /**
     * The function to run code analysis in the Jarvis build.
     * The step will analyze the given custom package and store the code analysis result in Jarvis report.
     * If the code analysis fails, the step will store the error message in Jarvis report and skip.
     */
    static runStep(step: Jarvis.Step): Jarvis.Step.Result | null;

    /**
     * The helper function to retrieve the uninstrumented code for code analysis.
     * If the package has been instrumented for code coverage collection, we must retrieve the
     * uninstrumented code to perform code analysis to avoid false positives.
     *
     * @param step
     *           The current Jarvis step
     * @returns the zip file containing the uninstrumented code
     */
    static getUninstrumentedArtifactZip(step?: Jarvis.Step): File | null;

    /**
     * Helper function to the previous version of a package for backward compatibility analysis.
     * The previous version is determined using the `major.minor.patch` portion of `curVersion`.
     * If mainlines are on the following versions, the should be compared as follows:
     *
     * | Branch          | Current Version | Compare To |
     * | --------------- | --------------- | ---------- |
     * | `develop`       | 18.3.0          | 18.2.0     |
     * | `release`       | 18.2.0          | 18.1.3     |
     * | `support/v18.1` | 18.1.3          | 18.1.2     |
     * | `support/v18.0` | 18.0.2          | 18.0.1     |
     *
     * @param pkgName
     *           The name of the package being analyzed.
     * @param pkgVersion
     *           The version of the package being analyzed.
     * @returns The previous version of the package if it exists, otherwise null.
     */
    static getPreviousVersion(pkgName: string, pkgVersion: string): string | null;

    /**
     * The helper function to store the result of code analysis in Jarvis report.
     *
     * @param spec
     *           The spec that contains the code analysis result and other information to be stored in Jarvis report
     */
    static filePkgResultReport(spec?: JarvisBaseToolkit.CodeAnalysis.FilePkgResultReportSpec): void;

    /**
     * Helper function to collect and store {@link BaseCodeAnalysis.AppInfo} in the centralized
     * repository as well as in the {@link Studio}'s local {@link ArtifactHub}.
     *
     * @param spec
     *           The spec that contains the configurations for collecting and storing app info.
     * @return A debugging message indicating the success or failure of the operation.
     */
    static registerAppInfo(spec: JarvisBaseToolkit.CodeAnalysis.RegisterAppInfoSpec): string;
  }
}

