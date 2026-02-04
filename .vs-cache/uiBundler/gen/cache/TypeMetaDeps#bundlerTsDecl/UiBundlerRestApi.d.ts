export interface UiBundlerRestApi {

  readonly _latestVersion?: string | null;
  with_latestVersion(_latestVersion: string | null): UiBundlerRestApi;
}

