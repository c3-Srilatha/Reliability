export interface CesiumConfig {

  readonly url?: string | null;
  withUrl(url: string | null): CesiumConfig;

  readonly accessToken?: string | null;
  withAccessToken(accessToken: string | null): CesiumConfig;
}

