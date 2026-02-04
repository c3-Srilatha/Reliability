// TypeScript definitions for the C3 type DocExport

/**
 * Type to generate and export documentation for package.
 *
 * To generate application documentation, run the following command in the static console of the application for which
 * you want to generate documentation:
 *
 * ```javascript
 * DocExport.generateDocumentation({ includePlatformDocumentation: false });
 * ```
 *
 * To generate platform documentation, run the following command in the static console of a cluster on which the target
 * platform version is deployed:
 *
 * ```javascript
 * DocExport.generateDocumentation({ includePlatformDocumentation: true });
 * ```
 *
 * @remarks this represents a value passed to a method that expects an instance of DocExport
 */
declare interface IDocExport {
}

/**
 * Type to generate and export documentation for package.
 *
 * To generate application documentation, run the following command in the static console of the application for which
 * you want to generate documentation:
 *
 * ```javascript
 * DocExport.generateDocumentation({ includePlatformDocumentation: false });
 * ```
 *
 * To generate platform documentation, run the following command in the static console of a cluster on which the target
 * platform version is deployed:
 *
 * ```javascript
 * DocExport.generateDocumentation({ includePlatformDocumentation: true });
 * ```
 *
 * @remarks this represents a made instance of DocExport
 */
declare class DocExport {

  /**
   * Documentation generation is stateful, i.e, variables are stored in state to be used by asynchronously running
   * jobs. This function flushes all the information stored in state before each documentation generation run.
   *
   * @param spec
   *           Spec to control documentation generation reset.
   */
  static resetDocumentationGeneration(): void;

  /**
   * Documentation generation is stateful, i.e, variables are stored in state to be used by asynchronously running
   * jobs. This function setups up the environment variables necessary for documentation generation.
   *
   * @param spec
   *           The documentation generation spec.
   */
  static setDocExportConfig(spec?: DocExport.DocGenSpec): any | null;

  /**
   * Helper to get config value for {@link DocExportConfig}.
   *
   * @param configKey
   *           The config key for which to get a value for from {@link DocExportConfig}.
   * @returns the value of the config key in {@link DocExportConfig}.
   */
  static getDocExportConfigValue(configKey?: string): any | null;

  /**
   * Generates a TypeDoc object for a specific type.
   *
   * @param typeName
   *           The name of the Type to generate Type documentation for.
   * @param version
   *           The release version to tag the Type documentation with.
   */
  static genTypeDoc(typeName?: string, version?: string): void;

  /**
   * Constructs topic metadata from a documentation topic file.
   *
   * @param fileMeta
   *           An instance of a metadata file for a documentation topic.
   * @returns topic metadata as a json object
   */
  static getTopicMetadata(file?: Pkg.File): any | null;

  /**
   * Generates a TopicDoc object for a documentation topic
   *
   * @param docPath
   *           Topic metadata path.
   * @param version
   *           The release version to tag the topic documentation with.
   * @returns the TopicDoc instance for the documentation at {@param docPath}.
   */
  static genTopicDoc(docPath?: string, version?: string): TopicDoc | null;

  /**
   * Returns HTML documentation for a C3 Type.
   *
   * @param typeName
   *           The name of the Type to get content for.
   * @returns Type documentation as HTML/string
   */
  static getTypeContent(typeName?: string): string | null;

  /**
   * Given a guide spec, extracts the guide content and returns a {@link GuideDoc} object.
   *
   * @param spec
   *           The spec to extract guide content.
   * @returns the extracted guide content.
   */
  static extractGuideContent(spec?: DocExport.ExtractGuideContentSpec): GuideDoc | null;

  /**
   * Generate metadata for a guide and associated topics and save to a file.
   *
   * @param fileName
   *           Name of the guide to generate documentation for.
   * @param version
   *           The package version to tag the documentation with.
   */
  static genGuideDoc(file?: Pkg.File, version?: string): void;

  /**
   * Generate metadata for a notebook and save to a file. Provided a spec with metadata about a Jupyter notebook,
   * adds markdown cell to guide users to live notebook.
   *
   * @param notebookSpecs
   *           The {@link NotebookSpec NotebookSpecs} for which to generate documentation artifacts.
   * @return a list of converted notebooks to be used for post-processing and exporting.
   */
  static convertJupyterNotebooksToHtml(notebookSpecs?: Array_Type<DocExport.NotebookSpec>): Array_Type<DocExport.ConvertedNotebook> | null;

  /**
   * Function to post-process converted Jupyter notebook files. Once Jupyter notebooks are converted to an HTML
   * string, the images must be extracted from the HTML string and placed as a `.png` file in a different directory
   * for the developer portal to be able to process during upload.
   *
   * The notebook's HTML content, along with the extracted images, are stored in the
   * {@link DocExport.Subdirectory#TUTORIAL_NOTEBOOK_ARTIFACTS} subdirectory.
   *
   * @param spec
   *           The Spec to be used for converting .
   * @returns the list of tags for the passed in {@link TypeMeta}.
   */
  static postProcessAndExportNotebooks(spec?: DocExport.PostProcessNotebookSpec): void;

  /**
   * Function to get list of tags for the provided Type meta.
   *
   * @param typeMeta
   *           The type meta to get tags for.
   * @returns the list of tags for the passed in {@link TypeMeta}.
   */
  static getTypeTags(typeMeta?: TypeMeta): Array_Type<string> | null;

  /**
   * Writes type, topic, or guide content to the file system.
   * @param content
   *           HTML content to write to the file.
   * @param version
   *           The release version.
   * @param fileType
   *           Type of documentation content to write.
   * @param fileName
   *           Name of the documentation file.
   * @param packageName
   *           Package the topic or guide resides in.
   */
  static writeFile(content?: DOC, version?: string, fileType?: string, fileName?: string, packageName?: string): void;

  /**
   * Register an OAuth application with the platform.  This "application" will be used to
   * generate the token used by the Developer Portal.  The token will have the permissions of the user
   * generating the token.
   */
  static registerOAuthApplication(): string | null;

  /**
   * Generate an OAuth token to be used by the Developer portal.
   *
   * @param accessTokenDuration
   *           Validity period of the access token. Typically expressed in hours or days. e.g. 2h, 1d, 90d, etc.
   * @returns the OAuth token.
   */
  static generateOAuthToken(accessTokenDuration?: string): string | null;

  /**
   * Function to trigger the {@link GuideDocExport} batch job.
   *
   * @param packageVersions
   *           A map from a package name to its semantic version.
   * @param batchSize
   *           The batch size to use when calling the {@link GuideDocExport} function to parallelize
   *           documentation generation.
   * @returns The {@link GuideDocExport} batch job.
   */
  static exportGuideDoc(packageVersions?: Map_Type<string, string>, batchSize?: number = '10'): GuideDocExport | null;

  /**
   * Function to trigger the {@link TopicDocExport} batch job.
   *
   * @param packageVersions
   *           A map from a package name to its semantic version.
   * @param batchSize
   *           The batch size to use when calling the {@link TopicDocExport} function to parallelize
   *           documentation generation.
   * @returns The {@link TopicDocExport} batch job.
   */
  static exportTopicDoc(packageVersions?: Map_Type<string, string>, batchSize?: number = '30'): TopicDocExport | null;

  /**
   * Function to trigger the {@link TypeDocExport} batch job.
   *
   * @param packageVersions
   *           A map from a package name to its semantic version.
   * @param batchSize
   *           The batch size to use when calling the {@link TypeDocExport} function to parallelize
   *           documentation generation.
   * @returns The {@link TypeDocExport} batch job.
   */
  static exportTypeDoc(packageVersions?: Map_Type<string, string>, batchSize?: number = '300'): TypeDocExport | null;

  /**
   * Function to create and write {@link NotebookDoc} for seeded {@link JupyterNotebook}s.
   * Fetches all `JupyterNotebook` instances, adds markdown cell to guide users to live notebook, and writes generated
   * file to the filesystem to be exported.
   *
   * The tutorial notebooks are stored in the {@link DocExport.Subdirectory.TUTORIAL_NOTEBOOK_ARTIFACTS} subdirectory.
   *
   * @param packageVersions
   *           A map from a package name to its semantic version.
   *
   * @see #getFileExportUrl
   */
  static exportTutorialNotebooks(packageVersions?: Map_Type<string, string>): any | null;

  /**
   * Function to export the {@link DocExport.Error errors} to a file.
   *
   * @param errorCount
   *           The number of {@link DocExport.Error errors} caught in this run.
   * @returns The number of errors exported.
   */
  static exportErrors(): number | null;

  /**
   * Prepares a topic to be written to the file system.  Needs to first find the file,
   * get content and then call an API to write to a file.
   *
   * @param fileName
   *           Name of the topic or type file
   * @param version
   *           The release version.
   * @param packageName
   *           Package the type, topic, or guide resides in.
   */
  static writeTopicDocumentationToFileSystem(fileName?: string, version?: string, packageName?: string): void;

  /**
   * **IMPORTANT:** If running this function multiple times, make sure to call #resetDocumentationGeneration
   *                before each run.
   *
   * Generates type, topic, and guide documentation for the dependent packages (e.g. jarvis, esg, etc).
   *
   * @param spec
   *          The documentation generation spec.
   * @returns execution metadata related to documentation artifact generation run.
   */
  static generateDocumentation(spec?: DocExport.DocGenSpec): any | null;

  /**
   * Retrieve the list of generated documentation zip files.
   *
   * IMPORTANT: This is a legacy interface which is called by the developer portal to list and validate
   * the documentation artifacts uploaded to an env on which `docgen` is deployed.
   *
   * DO NOT REMOVE this function without checking with the Documentation team.
   */
  static listFiles(version?: string): Array_Type<string> | null;

  /**
   * Function to set the file export link for a subdirectory. The file can be exported by using the following code
   * snippet in the static console.
   *
   * ```javascript
   * function downloadZip(fileUrl, exportFileName) {
   *   var link = document.createElement('a');
   *   link.href = fileUrl;
   *   link.download = exportFileName;
   *   link.click();
   * }
   * ```
   *
   * For example, documentation artifacts can be downloaded as a zip by running the following the static console:
   *
   * ```javascript
   * var fileUrl = DocExport.getFileExportUrl(DocExport.Subdirectory.DOCUMENTATION_ARTIFACTS);
   * downloadZip(fileUrl, 'documentation-artifact.zip');
   * ```
   *
   * @param subdirectory
   *           The subdirectory for which to return an export link.
   * @returns the file export url to use.
   */
  static getFileExportUrl(subdirectory: string): string | null;
}

