// TypeScript definitions for the C3 type JarvisBaseToolkit.Step

/**
 * The abstract Type for all Jarvis steps in the package. All steps will mix in this Type.
 *
 * @remarks this represents a value passed to a method that expects an instance of JarvisBaseToolkit.Step
 */
declare namespace JarvisBaseToolkit {
  export interface IStep {
  }
}

/**
 * The abstract Type for all Jarvis steps in the package. All steps will mix in this Type.
 *
 * @remarks this represents a made instance of JarvisBaseToolkit.Step
 */
declare namespace JarvisBaseToolkit {
  export class Step {

    /**
     * The function to run the step in the Jarvis build.
     *
     * @param step
     *           The Jarvis step that is being run
     * @return The result of the step
     */
    static runStep(step: Jarvis.Step): Jarvis.Step.Result | null;
  }
}

