export interface UiSdlHistory {

  readonly length?: number | null;
  withLength(length: number | null): UiSdlHistory;

  readonly location?: UiSdlHistoryLocation | null;
  withLocation(location: IUiSdlHistoryLocation | null): UiSdlHistory;

  readonly action?: string | null;
  withAction(action: string | null): UiSdlHistory;
}

