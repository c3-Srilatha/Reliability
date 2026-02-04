declare namespace DocService {
  export interface LinkBuilder {

    readonly file?: Pkg.File | null;
    withFile(file: IPkg.File | null): DocService.LinkBuilder;

    readonly docDirPath?: string | null;
    withDocDirPath(docDirPath: string | null): DocService.LinkBuilder;
  }
}

