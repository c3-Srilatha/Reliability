// TypeScript definitions for the C3 type DocSiteExport.Notebook

/**
 * Type containing logic specific to exporting notebooks from a {@link Pkg}. Currently
 * only {@link JupyterNotebook}s are exported.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.Notebook
 */
declare namespace DocSiteExport {
  export interface INotebook {
  }
}

/**
 * Type containing logic specific to exporting notebooks from a {@link Pkg}. Currently
 * only {@link JupyterNotebook}s are exported.
 *
 * @remarks this represents a made instance of DocSiteExport.Notebook
 */
declare namespace DocSiteExport {
  export class Notebook {

    /**
     * Gets all valid {@link JupyterNotebook}s for the given package, filtering out test files
     * and notebooks from other packages.
     *
     * @param pkgName
     *           The name of the {@link Pkg} to get notebooks for.
     * @return An object containing validNotebooks (array of {notebook, file, fileContent}) and errors.
     */
    static getValidNotebooks(pkgName: string): any | null;

    /**
     * Exports all the {@link JupyterNotebook#externalFile}s in the [current package](DocSiteExport.Config#pkgName).
     */
    static exportJupyterNotebooks(): void;

    /**
     * Renders the given Jupyter notebooks to HTML.
     *
     * @param notebooks
     *           The notebooks to render. If [source](DocSiteExport.WriteContentSpec#source) doesn't
     *           exist on _any_ of the notebooks, a `ValueError` is raised.
     * @return The updated notebooks with the [html field](DocSiteExport.WriteContentSpec#html) populated.
     */
    static renderJupyterNotebooksToHtml(notebooks?: Array_Type<DocSiteExport.WriteContentSpec>): Array_Type<DocSiteExport.WriteContentSpec> | null;
  }
}

