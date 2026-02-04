// TypeScript definitions for the C3 type NotebookUnitTestRunner

/**
 * Test runner for testing jupyter notebook (`*.ipynb`) content. Test infrastructure will execute a
 * "unit" test by simulating the cell execution via the `nbconvert` python package.
 * For a heavier-weight "integration" test of the same content that uses the {@link Jupyter} service, see
 * {@link NotebookTestRunner}.
 *
 * @remarks this represents a value passed to a method that expects an instance of NotebookUnitTestRunner
 */
declare interface INotebookUnitTestRunner {
}

/**
 * Test runner for testing jupyter notebook (`*.ipynb`) content. Test infrastructure will execute a
 * "unit" test by simulating the cell execution via the `nbconvert` python package.
 * For a heavier-weight "integration" test of the same content that uses the {@link Jupyter} service, see
 * {@link NotebookTestRunner}.
 *
 * @remarks this represents a made instance of NotebookUnitTestRunner
 */
declare class NotebookUnitTestRunner {

  /**
   * Test an ipynb notebook.
   *
   * @param notebookContent
   *          the content of the ipynb.
   * @param fileName
   *          the name of the ipynb file.
   * @param pkgName
   *           {@link Pkg} name of Pkg to connect to. Should exist under the zoo repository.
   * @return test results.
   */
  static testNotebook(notebookContent: string, fileName: string, pkgName?: string | null): TestSuiteResult;

  /**
   * Execute the provided notebook content, using python's `nbconvert` package, and return results.
   * @param notebookContent
   *          the content of the ipynb.
   * @param fileName
   *          the name of the ipynb file.
   * @param serverUrl
   *          url to connect to the running c3 server.
   * @param runtimeName
   *          name of the runtime to use for this test.
   * @return test results.
   */
  static executeNotebookTest(notebookContent: string, fileName: string, serverUrl: string, runtimeName?: string | null): TestSuiteResult;
}

