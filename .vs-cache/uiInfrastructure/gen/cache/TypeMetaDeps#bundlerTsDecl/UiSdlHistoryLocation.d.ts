export interface UiSdlHistoryLocation {

  readonly pathname?: string | null;
  withPathname(pathname: string | null): UiSdlHistoryLocation;

  readonly search?: string | null;
  withSearch(search: string | null): UiSdlHistoryLocation;

  readonly hash?: string | null;
  withHash(hash: string | null): UiSdlHistoryLocation;
}

