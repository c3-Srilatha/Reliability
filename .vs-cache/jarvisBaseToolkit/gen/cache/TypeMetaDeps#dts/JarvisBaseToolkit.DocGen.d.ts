// TypeScript definitions for the C3 type JarvisBaseToolkit.DocGen

/**
 * The Type that contains utility functions for running documentation generation Jarvis step.
 *
 * @remarks this represents a value passed to a method that expects an instance of JarvisBaseToolkit.DocGen
 */
declare namespace JarvisBaseToolkit {
  export interface IDocGen {
  }
}

/**
 * The Type that contains utility functions for running documentation generation Jarvis step.
 *
 * @remarks this represents a made instance of JarvisBaseToolkit.DocGen
 */
declare namespace JarvisBaseToolkit {
  export class DocGen {

    /**
     * The function to automatically generate documentation artifacts in a Jarvis build.
     *
     * This step runs two sub-steps:
     *
     * 1. Documentation generation for the C3 AI documentation site (through {@link DocSiteExport}).
     *
     *    The generated artifact's {@link SemanticVersion} has a `-docsite` suffix and
     *    has a `DOC_SITE` [kind](ArtifactHub.Artifact#kind).
     *
     * 2. Legacy documentation generation for the old C3 AI developer portal (through {@link DocExport}).
     *    This only runs if `documentationApplicationIdentifiers` have been specified.
     *
     *    The generated artifact's {@link SemanticVersion} has a `-documentation` suffix and
     *    has a `DOCUMENTATION` [kind](ArtifactHub.Artifact#kind).
     *
     * This step generates documentation artifacts for the package the step is run on.
     */
    static runStep(step: Jarvis.Step): Jarvis.Step.Result | null;

    /**
     * Function to run documentation generation for the C3 AI documentation site (through {@link DocSiteExport}).
     *
     * @param step
     *           The context of the current Jarvis step.
     * @param overrides
     *           Any overrides to provide for documentation generation.
     * @return Whether the step was successful, and any logs generated during the step.
     */
    static runDocGen(step: Jarvis.Step, overrides?: JarvisBaseToolkit.DocGen.Overrides):  | null;
  }
}

