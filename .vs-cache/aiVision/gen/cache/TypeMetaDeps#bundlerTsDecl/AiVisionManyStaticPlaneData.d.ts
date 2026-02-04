export interface AiVisionManyStaticPlaneData {

  readonly id: string;
  withId(id: string): AiVisionManyStaticPlaneData;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): AiVisionManyStaticPlaneData;

  readonly name?: string | null;
  withName(name: string | null): AiVisionManyStaticPlaneData;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AiVisionManyStaticPlaneData;

  readonly version?: number | null;
  withVersion(version: number | null): AiVisionManyStaticPlaneData;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): AiVisionManyStaticPlaneData;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): AiVisionManyStaticPlaneData;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): AiVisionManyStaticPlaneData;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): AiVisionManyStaticPlaneData;

  readonly location?: string | null;
  withLocation(location: string | null): AiVisionManyStaticPlaneData;

  readonly latitude?: number | null;
  withLatitude(latitude: number | null): AiVisionManyStaticPlaneData;

  readonly longitude?: number | null;
  withLongitude(longitude: number | null): AiVisionManyStaticPlaneData;

  readonly altitude?: number | null;
  withAltitude(altitude: number | null): AiVisionManyStaticPlaneData;

  readonly color?: string | null;
  withColor(color: string | null): AiVisionManyStaticPlaneData;

  readonly riskOfDelay?: string | null;
  withRiskOfDelay(riskOfDelay: string | null): AiVisionManyStaticPlaneData;

  readonly grounded?: boolean;
  withGrounded(grounded: boolean): AiVisionManyStaticPlaneData;

  readonly orientation?: number | null;
  withOrientation(orientation: number | null): AiVisionManyStaticPlaneData;
}

