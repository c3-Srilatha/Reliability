// TypeScript definitions for the C3 type JarvisBaseToolkit.CodeAnalysisInit

/**
 * The Type that contains utility functions for running code analysis initialization Jarvis step.
 *
 * @remarks this represents a value passed to a method that expects an instance of JarvisBaseToolkit.CodeAnalysisInit
 */
declare namespace JarvisBaseToolkit {
  export interface ICodeAnalysisInit {
  }
}

/**
 * The Type that contains utility functions for running code analysis initialization Jarvis step.
 *
 * @remarks this represents a made instance of JarvisBaseToolkit.CodeAnalysisInit
 */
declare namespace JarvisBaseToolkit {
  export class CodeAnalysisInit {

    /**
     * The function to initialize code analysis for the Jarvis build.
     * The step will retrieve and store metadata needed for running code analysis.
     */
    static runStep(step: Jarvis.Step): Jarvis.Step.Result | null;

    /**
     * Function to get the contents of the `.c3standardsrc` file for the repository.
     *
     * @param step
     *           The Jarvis step that is being run
     * @return The `.c3standardsrc` file contents.
     */
    static c3standardsrcForRepository(step?: Jarvis.Step): any | null;

    /**
     * The helper function to get the source control spec for initializing code analysis for the Jarvis build.
     *
     * @param step
     *           The Jarvis step that is being run
     * @return The source control spec
     */
    static getSourceControlSpec(step?: Jarvis.Step): BaseCodeAnalyzer.SourceControlGadget.Spec | null;

    /**
     * The helper function to queue the document generation and code analysis steps for the Jarvis build.
     */
    static queueDocGenAndCodeAnalysisSteps(step?: Jarvis.Step): void;
  }
}

