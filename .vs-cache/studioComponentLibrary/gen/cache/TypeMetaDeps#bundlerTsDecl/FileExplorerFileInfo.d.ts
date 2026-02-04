export interface FileExplorerFileInfo {

  readonly filePath: string;
  withFilePath(filePath: string): FileExplorerFileInfo;

  readonly children?: C3.Array<string | null>;
  withChildren(children: C3.Array<string | null> | Array<string | null>): FileExplorerFileInfo;

  readonly isDir: boolean;
  withIsDir(isDir: boolean): FileExplorerFileInfo;

  readonly size?: number | null;
  withSize(size: number | null): FileExplorerFileInfo;

  readonly lastModified?: string | null;
  withLastModified(lastModified: string | null): FileExplorerFileInfo;

  readonly kind?: string | null;
  withKind(kind: string | null): FileExplorerFileInfo;

  readonly description?: string | null;
  withDescription(description: string | null): FileExplorerFileInfo;
}

