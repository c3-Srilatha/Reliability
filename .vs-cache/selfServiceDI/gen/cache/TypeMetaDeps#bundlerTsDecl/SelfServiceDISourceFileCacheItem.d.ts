export interface SelfServiceDISourceFileCacheItem {

  readonly sourceFile?: SourceFile | null;
  withSourceFile(sourceFile: ISourceFile | null): SelfServiceDISourceFileCacheItem;

  readonly status?: string | null;
  withStatus(status: string | null): SelfServiceDISourceFileCacheItem;
}

