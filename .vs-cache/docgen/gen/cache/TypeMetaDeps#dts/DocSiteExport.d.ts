// TypeScript definitions for the C3 type DocSiteExport

/**
 * Type to generate and export documentation for package.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport
 */
declare interface IDocSiteExport {
}

/**
 * Type to generate and export documentation for package.
 *
 * @remarks this represents a made instance of DocSiteExport
 */
declare class DocSiteExport {

  /**
   * Documentation generation is stateful, i.e, variables are stored in state to be
   * used by asynchronously running jobs. This function sets up the environment variables
   * necessary for documentation generation.
   *
   * @param spec
   *           The documentation generation spec.
   */
  static setDocSiteExportConfig(spec: DocSiteExport.DocGenSpec): void;

  /**
   * Documentation generation is stateful, i.e, variables are stored in state to be
   * used by asynchronously running jobs. This function flushes all the information
   * stored in state.
   */
  static resetDocSiteExportState(): void;

  /**
   * @returns The base directory where all documentation artifacts are stored for the
   *          current run. Looks like `{tmpDirectoryUrl}/{pkgName}/{pkgVersion}`.
   */
  static baseDir(): string;

  /**
   * Function to write the generated documentation for the [current package](DocSiteExport.Config#pkgName)
   * to {@link DocSiteExport.Subdirectory#DOCUMENTATION_ARTIFACTS} (within {@link DocSiteExport.Config#tmpDirectoryUrl}).
   * Multiple kinds of content can be generated from the same file.
   *
   * @param spec
   *           The spec for what content to write for a specific file.
   */
  static writeContent(spec?: DocSiteExport.WriteContentSpec): void;

  /**
   * Function to trigger a {@link DocSiteExport.Type.Job}.
   *
   * @param batchSize
   *           The batch size to use to parallelize documentation generation.
   * @param skipExamples
   *           See {@link DocSiteExport.Type.Job.Options#skipExamples}.
   * @returns A new batch job.
   */
  static exportTypeDocs(batchSize: number, skipExamples?: boolean = 'false'): DocSiteExport.Type.Job | null;

  /**
   * Function to trigger the {@link DocSiteExport.Topic.Job}.
   *
   * @param batchSize
   *           The batch size to use to parallelize documentation generation.
   * @returns A new batch job.
   */
  static exportTopicDocs(batchSize: number): DocSiteExport.Topic.Job | null;

  /**
   * Function to run {@link DocSiteExport.Guide#exportGuides} with {@link DocSiteExport.Config#pkgName}.
   */
  static exportGuides(): void;

  /**
   * Exports the following information to a `meta.json` {@link File}:
   *
   *   - `pkgName` - {@link DocSiteExport.DocGenSpec#pkgName}
   *   - `pkgVersion` - {@link Pkg#version}
   *   - `dependencyVersions` - {@link Pkg#dependencyResolvedVersions}
   *
   * @param resolvedVersionsMap
   *           See {@link DocSiteExport.DocGenSpec#resolvedVersionsMap}.
   */
  static exportPkgMetadata(resolvedVersionsMap?: Map_Type<string, string>): void;

  /**
   * Exports the URL aliases for the documentation artifacts.
   */
  static exportUrlAliases(): void;

  /**
   * Exports any {@link DocSiteExport.Error}s created during documentation generation
   * to an `errors.json` {@link File}, grouped by [severity](DocSiteExport.Error#severity).
   *
   * @returns The errors encountered during the run, grouped by [severity](DocSiteExport.Error#severity).
   */
  static exportErrors(): Map_Type<string, Array_Type<DocSiteExport.Error>>;

  /**
   * @returns A `.zip` of all files generated under [tmpDirectoryUrl](DocSiteExport.Config#tmpDirectoryUrl).
   */
  static zipExportedFiles(): File | null;

  /**
   * Generates documentation for:
   *
   * - [Types](FileExt#TYPE)
   * - [Topics](FileExt#DOC)
   * - Guides
   *
   * Exports the source content for:
   *
   * - Images
   * - {@link JupyterNotebook}s
   *
   * [Test files](Pkg.File#isTest) and [private Types](TypeMeta#declaredPrivate) are skipped.
   *
   * The output file structure will look like:
   *
   * ```
   * reliability/
   * └── 18.0/
   *     ├── documentation/
   *     │   ├── type/
   *     │   │   └── ReliabilityAsset/
   *     │   │       ├── parsed.json
   *     │   │       ├── rendered.html
   *     │   │       └── meta.json
   *     │   ├── topic/
   *     │   │   └── how-to-deploy-rel/
   *     │   │       ├── source.c3doc.md
   *     │   │       ├── parsed.json
   *     │   │       ├── rendered.html
   *     │   │       └── meta.json
   *     │   ├── guide/
   *     │   │   └── rel-dev-guide/
   *     │   │       ├── source.c3doc.md
   *     │   │       └── parsed.json
   *     │   ├── typeGuide/
   *     │   │   └── rel-types-guide/
   *     │   │       ├── source.c3doc.md
   *     │   │       └── parsed.json
   *     │   ├── image/
   *     │   │   └── paths
   *     │   └── jupyterNotebook/
   *     │       └── TrainModelsQuickstart/
   *     │           ├── source.ipynb
   *     │           ├── rendered.html
   *     │           └── meta.json
   *     ├── community/
   *     │   ├── src/
   *     │   │   └── doc
   *     │   └── file-url-aliases.json
   *     ├── meta.json
   *     └── errors.json
   * ```
   *
   * To download the generated documentation, use the following snippet:
   *
   * ```javascript
   * const pkgName = '<pkgName>';
   * const { zipFile } = DocSiteExport.generateDocumentation({ pkgName });
   *
   * const link = document.createElement('a');
   * link.download = `${pkgName}-documentation.zip`;
   * link.href = C3.File.make(zipFile).apiEndpoint('GET', true);
   * document.body.appendChild(link);
   * link.click();
   * document.body.removeChild(link);
   * delete link;
   * ```
   *
   * @param spec
   *          The documentation generation spec.
   * @returns Execution metadata related to documentation artifact generation run.
   */
  static generateDocumentation(spec?: DocSiteExport.DocGenSpec): any | null;
}

