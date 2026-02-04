// TypeScript definitions for the C3 type DocSiteExport.Guide

/**
 * Type containing logic specific to generating guide documentation. Guides are
 * a special kind of [.c3doc.md](FileExt#DOC) file that don't appear as topics, but
 * rather provide navigational structure for the documentation site.
 *
 * The structure of a guide represents how links should appear in a sidebar for navigation,
 * and thus its {@link Markdown} is more constrained than a regular topic. Only the following
 * elements are allowed:
 *
 * - [Headings](MarkdownHeading)
 *   - A heading can either be a [link](MarkdownLink) or [plain text](MarkdownText).
 *   - Only [H2](DocumentationBlockKind#H2)-[H6](DocumentationBlockKind#H6) headings are allowed.
 *   - The level of the heading doesn't matter and has no effect on the overall structure.
 * - [Lists](MarkdownList)
 *   - A list item can be a [link](MarkdownLink) or (if it has child lists) [plain text](MarkdownText).
 *   - Lists can be nested to create sub-sections.
 * - [Thematic breaks](MarkdownThematicBreak)
 *   - A thematic break must be preceded by a [list](MarkdownList).
 *
 * Front matter can contain the following keys:
 *
 * - `Topic Type` - **Must be `Manifest`**
 * - `Manifest Type`:
 *   - `Topic` - (default) for a topic guide.
 *   - `Type` - for a Type guide.
 * - `Manifest Order` - An integer that indicates the order in which the guide should appear in the sidebar.
 * - `Title` - A brief title for the guide.
 * - `Abstract` - A brief description of the guide.
 *
 * Here's an example of how a guide might look in Markdown:
 *
 * ```markdown
 * Topic Type: Manifest
 * Manifest Type: Topic
 * Manifest Order: 1
 * Title: C3 AI Data Integration Guide
 * Abstract: Build data integration pipelines and integrate data into the C3 AI Platform.
 *
 * ## Section 1
 *
 * * [Link title](some-topic-file.c3doc.md)
 * * [Another link title](another-topic-file.c3doc.md)
 *   * [Nested link title](nested-topic-file.c3doc.md)
 * * [Yet another link title](yet-another-topic-file.c3doc.md)
 *
 * ### Section 2
 *
 * - [Link title](some-topic-file.c3doc.md)
 * - [Another link title](another-topic-file.c3doc.md)
 *   - [Nested link title](nested-topic-file.c3doc.md)
 *
 * ---
 *
 * # Section 3
 *
 * 1. [Link title](some-topic-file.c3doc.md)
 * 2. [Another link title](another-topic-file.c3doc.md)
 *    + [Nested link title](nested-topic-file.c3doc.md)
 *      + [Further nested link title](further-nested-topic-file.c3doc.md)
 *    + [Yet another link title](yet-another-topic-file.c3doc.md)
 * ```
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.Guide
 */
declare namespace DocSiteExport {
  export interface IGuide {

    /**
     * The front matter value for the `Topic Type` key that indicates a [`.c3doc.md`](FileExt#DOC)
     * file is a guide (manifest).
     */
    TOPIC_TYPE: string;

    /**
     * The front matter value for the `Manifest Type` key that indicates a [`.c3doc.md`](FileExt#DOC)
     * file is specifically a Topic guide (manifest). This is the default if the key is omitted.
     */
    TOPIC_MANIFEST_TYPE: string;

    /**
     * The front matter value for the `Manifest Type` key that indicates a [`.c3doc.md`](FileExt#DOC)
     * file is specifically a Type guide (manifest).
     */
    TYPE_MANIFEST_TYPE: string;
  }
}

/**
 * Type containing logic specific to generating guide documentation. Guides are
 * a special kind of [.c3doc.md](FileExt#DOC) file that don't appear as topics, but
 * rather provide navigational structure for the documentation site.
 *
 * The structure of a guide represents how links should appear in a sidebar for navigation,
 * and thus its {@link Markdown} is more constrained than a regular topic. Only the following
 * elements are allowed:
 *
 * - [Headings](MarkdownHeading)
 *   - A heading can either be a [link](MarkdownLink) or [plain text](MarkdownText).
 *   - Only [H2](DocumentationBlockKind#H2)-[H6](DocumentationBlockKind#H6) headings are allowed.
 *   - The level of the heading doesn't matter and has no effect on the overall structure.
 * - [Lists](MarkdownList)
 *   - A list item can be a [link](MarkdownLink) or (if it has child lists) [plain text](MarkdownText).
 *   - Lists can be nested to create sub-sections.
 * - [Thematic breaks](MarkdownThematicBreak)
 *   - A thematic break must be preceded by a [list](MarkdownList).
 *
 * Front matter can contain the following keys:
 *
 * - `Topic Type` - **Must be `Manifest`**
 * - `Manifest Type`:
 *   - `Topic` - (default) for a topic guide.
 *   - `Type` - for a Type guide.
 * - `Manifest Order` - An integer that indicates the order in which the guide should appear in the sidebar.
 * - `Title` - A brief title for the guide.
 * - `Abstract` - A brief description of the guide.
 *
 * Here's an example of how a guide might look in Markdown:
 *
 * ```markdown
 * Topic Type: Manifest
 * Manifest Type: Topic
 * Manifest Order: 1
 * Title: C3 AI Data Integration Guide
 * Abstract: Build data integration pipelines and integrate data into the C3 AI Platform.
 *
 * ## Section 1
 *
 * * [Link title](some-topic-file.c3doc.md)
 * * [Another link title](another-topic-file.c3doc.md)
 *   * [Nested link title](nested-topic-file.c3doc.md)
 * * [Yet another link title](yet-another-topic-file.c3doc.md)
 *
 * ### Section 2
 *
 * - [Link title](some-topic-file.c3doc.md)
 * - [Another link title](another-topic-file.c3doc.md)
 *   - [Nested link title](nested-topic-file.c3doc.md)
 *
 * ---
 *
 * # Section 3
 *
 * 1. [Link title](some-topic-file.c3doc.md)
 * 2. [Another link title](another-topic-file.c3doc.md)
 *    + [Nested link title](nested-topic-file.c3doc.md)
 *      + [Further nested link title](further-nested-topic-file.c3doc.md)
 *    + [Yet another link title](yet-another-topic-file.c3doc.md)
 * ```
 *
 * @remarks this represents a made instance of DocSiteExport.Guide
 */
declare namespace DocSiteExport {
  export class Guide {

    /**
     * The front matter value for the `Topic Type` key that indicates a [`.c3doc.md`](FileExt#DOC)
     * file is a guide (manifest).
     */
    readonly TOPIC_TYPE: string;
    withTOPIC_TYPE(TOPIC_TYPE: string): DocSiteExport.Guide;

    /**
     * The front matter value for the `Manifest Type` key that indicates a [`.c3doc.md`](FileExt#DOC)
     * file is specifically a Topic guide (manifest). This is the default if the key is omitted.
     */
    readonly TOPIC_MANIFEST_TYPE: string;
    withTOPIC_MANIFEST_TYPE(TOPIC_MANIFEST_TYPE: string): DocSiteExport.Guide;

    /**
     * The front matter value for the `Manifest Type` key that indicates a [`.c3doc.md`](FileExt#DOC)
     * file is specifically a Type guide (manifest).
     */
    readonly TYPE_MANIFEST_TYPE: string;
    withTYPE_MANIFEST_TYPE(TYPE_MANIFEST_TYPE: string): DocSiteExport.Guide;

    /**
     * Function to parse and write the documentation for a given guide.
     *
     * @param file
     *           The guide file to generate documentation for. If the file isn't marked with
     *           `Topic Type: Manifest`, nothing will happen.
     * @param pkgName
     *           The {@link Pkg} that documentation should be generated in the context of.
     *
     * @see DocSiteExport.Topic#parseAndWriteTopicDocumentation
     */
    static parseAndWriteGuide(file: Pkg.File, pkgName: string): void;

    /**
     * Function to find all the guides in the given {@link Pkg} and generate
     * documentation for them.
     *
     * @param pkgName
     *           The name of the {@link Pkg} to export guides for.
     */
    static exportGuides(pkgName: string): void;
  }
}

