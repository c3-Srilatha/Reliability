export interface UnstructuredDINodeStatus {

  readonly status: string;
  withStatus(status: string): UnstructuredDINodeStatus;

  readonly statusMessage?: string | null;
  withStatusMessage(statusMessage: string | null): UnstructuredDINodeStatus;

  readonly icon?: string | null;
  withIcon(icon: string | null): UnstructuredDINodeStatus;
}

