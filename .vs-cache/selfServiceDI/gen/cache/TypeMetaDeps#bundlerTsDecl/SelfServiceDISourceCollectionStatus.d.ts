export interface SelfServiceDISourceCollectionStatus {

  static readonly UPLOADING: "UPLOADING";

  static readonly UPLOAD_FAILED: "UPLOAD_FAILED";

  static readonly UPLOAD_ERROR: "UPLOAD_ERROR";

  static readonly UPLOAD_INVALID: "UPLOAD_INVALID";

  static readonly UPLOAD_CANCELLED: "UPLOAD_CANCELLED";

  static readonly UPLOADED: "UPLOADED";

  static readonly PROCESSING: "PROCESSING";

  static readonly INTEGRATING: "INTEGRATING";

  static readonly PROCESS_FAILED: "PROCESS_FAILED";

  static readonly QUEUED_FOR_UPLOAD: "QUEUED_FOR_UPLOAD";

  static readonly QUEUED_FOR_INTEGRATION: "QUEUED_FOR_INTEGRATION";

  static readonly PROCESS_COMPLETED: "PROCESS_COMPLETED";
}

