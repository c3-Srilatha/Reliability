export interface UiSdlMapFixedCentering {

  readonly longitude?: number | null;
  withLongitude(longitude: number | null): UiSdlMapFixedCentering;

  readonly latitude?: number | null;
  withLatitude(latitude: number | null): UiSdlMapFixedCentering;
}

