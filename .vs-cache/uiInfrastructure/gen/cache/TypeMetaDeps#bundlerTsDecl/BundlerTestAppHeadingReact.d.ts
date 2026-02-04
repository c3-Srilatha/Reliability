export interface BundlerTestAppHeadingReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppHeadingReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppHeadingReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppHeadingReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppHeadingReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppHeadingReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppHeadingReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppHeadingReact;

  readonly headingLevel?: number | null;
  withHeadingLevel(headingLevel: number | null): BundlerTestAppHeadingReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppHeadingReact;

  readonly extraInfo?: BundlerTestAppReferenceType | null;
  withExtraInfo(extraInfo: IBundlerTestAppReferenceType | null): BundlerTestAppHeadingReact;
}

