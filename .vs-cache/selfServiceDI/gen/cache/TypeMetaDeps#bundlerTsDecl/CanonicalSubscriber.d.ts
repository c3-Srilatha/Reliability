export interface CanonicalSubscriber {

  readonly sourceSystem?: string | null;
  withSourceSystem(sourceSystem: string | null): CanonicalSubscriber;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): CanonicalSubscriber;

  readonly sourcesId?: string | null;
  withSourcesId(sourcesId: string | null): CanonicalSubscriber;

  readonly sourceFileEncodedPath?: string | null;
  withSourceFileEncodedPath(sourceFileEncodedPath: string | null): CanonicalSubscriber;

  readonly sourceFileUrl?: string | null;
  withSourceFileUrl(sourceFileUrl: string | null): CanonicalSubscriber;

  readonly name: string;
  withName(name: string): CanonicalSubscriber;

  readonly followers: number;
  withFollowers(followers: number): CanonicalSubscriber;

  readonly avgLikes?: number | null;
  withAvgLikes(avgLikes: number | null): CanonicalSubscriber;

  readonly lastUpdated: string;
  withLastUpdated(lastUpdated: string): CanonicalSubscriber;

  readonly premiumSubscriber: number;
  withPremiumSubscriber(premiumSubscriber: number): CanonicalSubscriber;
}

