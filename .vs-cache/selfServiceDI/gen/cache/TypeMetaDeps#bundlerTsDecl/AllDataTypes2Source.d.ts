export interface AllDataTypes2Source {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): AllDataTypes2Source;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): AllDataTypes2Source;

  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): AllDataTypes2Source;

  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): AllDataTypes2Source;

  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): AllDataTypes2Source;

  readonly name: string;
  withName(name: string): AllDataTypes2Source;

  readonly followers: number;
  withFollowers(followers: number): AllDataTypes2Source;

  readonly avgLikes?: number | null;
  withAvgLikes(avgLikes: number | null): AllDataTypes2Source;

  readonly lastUpdated: string;
  withLastUpdated(lastUpdated: string): AllDataTypes2Source;

  readonly premiumSubscriber: number;
  withPremiumSubscriber(premiumSubscriber: number): AllDataTypes2Source;
}

