export interface AiVisionFlight {

  readonly id: string;
  withId(id: string): AiVisionFlight;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): AiVisionFlight;

  readonly name?: string | null;
  withName(name: string | null): AiVisionFlight;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AiVisionFlight;

  readonly version?: number | null;
  withVersion(version: number | null): AiVisionFlight;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): AiVisionFlight;

  readonly planeId?: string | null;
  withPlaneId(planeId: string | null): AiVisionFlight;

  readonly flightNumber?: string | null;
  withFlightNumber(flightNumber: string | null): AiVisionFlight;

  readonly departureAirport?: string | null;
  withDepartureAirport(departureAirport: string | null): AiVisionFlight;

  readonly arrivalAirport?: string | null;
  withArrivalAirport(arrivalAirport: string | null): AiVisionFlight;
}

