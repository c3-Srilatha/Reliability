export interface FileToUpload {

  readonly id?: string | null;
  withId(id: string | null): FileToUpload;

  readonly file?: any;
  withFile(file: any): FileToUpload;

  readonly url?: string | null;
  withUrl(url: string | null): FileToUpload;

  readonly name?: string | null;
  withName(name: string | null): FileToUpload;

  readonly uploadStatus?: string | null;
  withUploadStatus(uploadStatus: string | null): FileToUpload;

  readonly uploadError?: string | null;
  withUploadError(uploadError: string | null): FileToUpload;

  readonly multipartSliceSize?: number | null;
  withMultipartSliceSize(multipartSliceSize: number | null): FileToUpload;

  readonly parts?: C3.Array<FilePartToUpload | null>;
  withParts(parts: C3.Array<FilePartToUpload | null> | Array<IFilePartToUpload | null>): FileToUpload;

  readonly inferredSource?: C3.Array<any | null>;
  withInferredSource(inferredSource: C3.Array<any | null> | Array<any | null>): FileToUpload;
}

