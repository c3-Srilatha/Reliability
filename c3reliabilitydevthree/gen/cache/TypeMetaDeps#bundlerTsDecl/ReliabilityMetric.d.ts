export interface ReliabilityMetric {

  readonly id: string;
  withId(id: string): ReliabilityMetric;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): ReliabilityMetric;

  readonly name: string;
  withName(name: string): ReliabilityMetric;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ReliabilityMetric;

  readonly version?: number | null;
  withVersion(version: number | null): ReliabilityMetric;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): ReliabilityMetric;

  readonly facilityFilterPaths?: C3.Array<string | null>;
  withFacilityFilterPaths(facilityFilterPaths: C3.Array<string | null> | Array<string | null>): ReliabilityMetric;

  readonly dependencyMetrics?: C3.Array<ReliabilityMetricDependencies | null>;
  withDependencyMetrics(dependencyMetrics: C3.Array<ReliabilityMetricDependencies | null> | Array<IReliabilityMetricDependencies | null>): ReliabilityMetric;

  readonly childMetrics?: C3.Array<ReliabilityMetricDependencies | null>;
  withChildMetrics(childMetrics: C3.Array<ReliabilityMetricDependencies | null> | Array<IReliabilityMetricDependencies | null>): ReliabilityMetric;

  readonly description: string;
  withDescription(description: string): ReliabilityMetric;

  readonly allowedUser?: User | null;
  withAllowedUser(allowedUser: IUser | null): ReliabilityMetric;

  readonly assets?: C3.Array<ReliabilityAsset | null>;
  withAssets(assets: C3.Array<ReliabilityAsset | null> | Array<IReliabilityAsset | null>): ReliabilityMetric;

  readonly permission?: string | null;
  withPermission(permission: string | null): ReliabilityMetric;

  readonly displayPermission?: string | null;
  withDisplayPermission(displayPermission: string | null): ReliabilityMetric;

  readonly expression: string;
  withExpression(expression: string): ReliabilityMetric;

  readonly expandedExpression: string;
  withExpandedExpression(expandedExpression: string): ReliabilityMetric;

  readonly facility: Facility;
  withFacility(facility: IFacility): ReliabilityMetric;

  readonly lastUpdated: DateTime;
  withLastUpdated(lastUpdated: IDateTime): ReliabilityMetric;

  readonly assetsDisplayStr?: string | null;
  withAssetsDisplayStr(assetsDisplayStr: string | null): ReliabilityMetric;

  readonly assetsDisplayStrInSidePanel?: string | null;
  withAssetsDisplayStrInSidePanel(assetsDisplayStrInSidePanel: string | null): ReliabilityMetric;
}

