export interface ReliabilityMapAssetRelation {

  readonly id: string;
  withId(id: string): ReliabilityMapAssetRelation;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): ReliabilityMapAssetRelation;

  readonly name?: string | null;
  withName(name: string | null): ReliabilityMapAssetRelation;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ReliabilityMapAssetRelation;

  readonly version?: number | null;
  withVersion(version: number | null): ReliabilityMapAssetRelation;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): ReliabilityMapAssetRelation;

  readonly facilityFilterPaths?: C3.Array<string | null>;
  withFacilityFilterPaths(facilityFilterPaths: C3.Array<string | null> | Array<string | null>): ReliabilityMapAssetRelation;

  readonly from: ReliabilityAsset;
  withFrom(from: IReliabilityAsset): ReliabilityMapAssetRelation;

  readonly to: ReliabilityAsset;
  withTo(to: IReliabilityAsset): ReliabilityMapAssetRelation;

  readonly points?: C3.Array<LatLong | null>;
  withPoints(points: C3.Array<LatLong | null> | Array<ILatLong | null>): ReliabilityMapAssetRelation;

  readonly facilities?: C3.Array<Facility | null>;
  withFacilities(facilities: C3.Array<Facility | null> | Array<IFacility | null>): ReliabilityMapAssetRelation;
}

