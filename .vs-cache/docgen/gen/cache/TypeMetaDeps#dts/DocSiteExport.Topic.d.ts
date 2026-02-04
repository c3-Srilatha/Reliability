// TypeScript definitions for the C3 type DocSiteExport.Topic

/**
 * Type containing logic specific to generating topic documentation.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.Topic
 */
declare namespace DocSiteExport {
  export interface ITopic {
  }
}

/**
 * Type containing logic specific to generating topic documentation.
 *
 * @remarks this represents a made instance of DocSiteExport.Topic
 */
declare namespace DocSiteExport {
  export class Topic {

    /**
     * Function to parse and write the documentation for a given topic.
     *
     * @param file
     *           The topic file to generate documentation for. If the file is marked with
     *           `Topic Type: Manifest`, nothing will happen.
     * @param pkgName
     *           The {@link Pkg} that documentation should be generated in the context of.
     *
     * @see DocSiteExport.Guide#parseAndWriteGuide
     */
    static parseAndWriteTopicDocumentation(file: Pkg.File, pkgName: string): void;
  }
}

