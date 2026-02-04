// TypeScript definitions for the C3 type DocExport.FileManager

/**
 * Enum to represent documentation Types.
 *
 * @remarks this represents a value passed to a method that expects an instance of DocExport.FileManager
 */
declare namespace DocExport {
  export interface IFileManager {
  }
}

/**
 * Enum to represent documentation Types.
 *
 * @remarks this represents a made instance of DocExport.FileManager
 */
declare namespace DocExport {
  export class FileManager {

    /**
     * Function to get the file to which the {@link DocExport.Error} instances are written provided the temporary
     * directory url.
     *
     * @param tmpDirectoryUrl
     *          The temporary directory url in which the error file exists.
     * @returns the file where the {@link DocExport.Error} instances are written in the provided directory url.
     */
    static getErrorExportFile(tmpDirectoryUrl: string): File | null;
  }
}

