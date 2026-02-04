export interface FilePartToUpload {

  readonly id?: string | null;
  withId(id: string | null): FilePartToUpload;

  readonly file?: any;
  withFile(file: any): FilePartToUpload;

  readonly url?: string | null;
  withUrl(url: string | null): FilePartToUpload;

  readonly uploadStatus?: string | null;
  withUploadStatus(uploadStatus: string | null): FilePartToUpload;

  readonly uploadRetries?: number | null;
  withUploadRetries(uploadRetries: number | null): FilePartToUpload;

  readonly uploadErrorMessage?: string | null;
  withUploadErrorMessage(uploadErrorMessage: string | null): FilePartToUpload;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): FilePartToUpload;
}

