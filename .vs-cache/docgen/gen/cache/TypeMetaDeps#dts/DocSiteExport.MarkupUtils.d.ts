// TypeScript definitions for the C3 type DocSiteExport.MarkupUtils

/**
 * Type for traversing and/or modifying {@link DocumentationMarkup} nodes produced by the
 * {@link DocumentationRenderer}.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.MarkupUtils
 */
declare namespace DocSiteExport {
  export interface IMarkupUtils {
  }
}

/**
 * Type for traversing and/or modifying {@link DocumentationMarkup} nodes produced by the
 * {@link DocumentationRenderer}.
 *
 * @remarks this represents a made instance of DocSiteExport.MarkupUtils
 */
declare namespace DocSiteExport {
  export class MarkupUtils {

    /**
     * Helper function to traverse through {@link DocumentationMarkup} and do the following:
     *
     * - Enrich any {@link DocumentationReference}s by adding the following attributes
     *   to the references:
     *   - `pkgName`
     *   - `pkgVersion`
     *   - `exists` (boolean indicating whether the reference points to an existing resource)
     * - Enrich any {@link DocumentationImage}s by converting any relative [src paths](DocumentationImage#src)
     *   to absolute paths.
     *
     * @param markup
     *           The parsed documentation markup to traverse and enrich.
     * @param linkBuilder
     *           The link builder to use to enrich {@link DocumentationReference}s and
     *           {@link DocumentationImage}s.
     * @returns The enriched markup.
     */
    static enrichMarkup(markup: DocumentationMarkup, linkBuilder: DocSiteLinkBuilder): any | null;
  }
}

