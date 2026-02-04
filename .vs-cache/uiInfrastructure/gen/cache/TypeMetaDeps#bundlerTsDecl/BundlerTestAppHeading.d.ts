export interface BundlerTestAppHeading {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppHeading;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppHeading;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppHeading;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppHeading;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppHeading;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppHeading;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppHeading;

  readonly headingLevel?: number | null;
  withHeadingLevel(headingLevel: number | null): BundlerTestAppHeading;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppHeading;

  readonly extraInfo?: BundlerTestAppReferenceType | null;
  withExtraInfo(extraInfo: IBundlerTestAppReferenceType | null): BundlerTestAppHeading;
}

