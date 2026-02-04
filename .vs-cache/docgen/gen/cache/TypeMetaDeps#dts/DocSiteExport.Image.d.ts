// TypeScript definitions for the C3 type DocSiteExport.Image

/**
 * Type containing logic specific to exporting images from a {@link Pkg}.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocSiteExport.Image
 */
declare namespace DocSiteExport {
  export interface IImage {
  }
}

/**
 * Type containing logic specific to exporting images from a {@link Pkg}.
 *
 * @remarks this represents a made instance of DocSiteExport.Image
 */
declare namespace DocSiteExport {
  export class Image {

    /**
     * Exports all the images in the [current package](DocSiteExport.Config#pkgName), maintaining
     * the same [directory structure](Pkg.File#subPathWithCategory) as their source.
     */
    static exportImages(): void;
  }
}

