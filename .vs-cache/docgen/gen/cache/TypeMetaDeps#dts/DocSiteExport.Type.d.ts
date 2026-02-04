// TypeScript definitions for the C3 type DocSiteExport.Type

/**
 * Type containing logic specific to generating Type documentation.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.Type
 */
declare namespace DocSiteExport {
  export interface IType {
  }
}

/**
 * Type containing logic specific to generating Type documentation.
 *
 * @remarks this represents a made instance of DocSiteExport.Type
 */
declare namespace DocSiteExport {
  export class Type {

    /**
     * Function to parse and write the documentation for a given Type.
     *
     * @param typeName
     *           The name of the Type to generate documentation for.
     * @param pkgName
     *           The {@link Pkg} that documentation should be generated in the context of.
     * @param skipExamples
     *           If true, {@link DocumentationParserSpec#exampleAllLangs} will be set to false.
     */
    static parseAndWriteTypeDocumentation(typeName: string, pkgName: string, skipExamples?: boolean = 'false'): void;
  }
}

