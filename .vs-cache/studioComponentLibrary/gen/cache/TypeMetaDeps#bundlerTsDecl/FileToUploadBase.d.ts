export interface FileToUploadBase {

  readonly id?: string | null;
  withId(id: string | null): FileToUploadBase;

  readonly file?: any;
  withFile(file: any): FileToUploadBase;

  readonly url?: string | null;
  withUrl(url: string | null): FileToUploadBase;
}

