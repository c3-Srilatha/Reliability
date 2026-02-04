// TypeScript definitions for the C3 type AssetOnboardingImport

/**
 * Handles the import for the asset onboarding application
 *
 * @remarks this represents a value passed to a method that expects an instance of AssetOnboardingImport
 */
declare interface IAssetOnboardingImport {
}

/**
 * Handles the import for the asset onboarding application
 *
 * @remarks this represents a made instance of AssetOnboardingImport
 */
declare class AssetOnboardingImport {

  /**
   * Gets the workflow that is used to run the import. Creates it if it doesn't already exist.
   * @return The workflow to be executed for the import
   */
  static getWorkflow(): Workflow | null;

  /**
   * Gets the workflow and starts it. The workflow extracts all the files from the zip file, reads them and adds necessary changes to the application.
   * The workflow does not modify any existing entities, rather it just adds data.
   * @param spec
   *     Contains two main properties - path of uploaded zip file and the path where it will be unzipped.
   * @return The workflow run being executed for the import
   */
  static startImport(spec?: Map_Type<string, string>): Workflow.Run | null;
}

