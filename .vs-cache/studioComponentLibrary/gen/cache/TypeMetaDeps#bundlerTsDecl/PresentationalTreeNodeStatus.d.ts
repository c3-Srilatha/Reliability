export interface PresentationalTreeNodeStatus {

  readonly status?: string | null;
  withStatus(status: string | null): PresentationalTreeNodeStatus;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): PresentationalTreeNodeStatus;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): PresentationalTreeNodeStatus;
}

