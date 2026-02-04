export interface FileUploadStatus {

  static readonly QUEUED: "QUEUED";

  static readonly UPLOADING: "UPLOADING";

  static readonly SUCCESSFUL: "SUCCESSFUL";

  static readonly ERROR: "ERROR";

  static readonly INVALID: "INVALID";

  static readonly INVALID_SIZE: "INVALID_SIZE";

  static readonly CANCELLED: "CANCELLED";
}

