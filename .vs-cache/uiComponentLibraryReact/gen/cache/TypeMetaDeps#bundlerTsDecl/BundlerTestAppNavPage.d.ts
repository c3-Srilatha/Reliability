export interface BundlerTestAppNavPage {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppNavPage;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppNavPage;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppNavPage;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppNavPage;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppNavPage;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppNavPage;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppNavPage;

  readonly allowedLink?: string | null;
  withAllowedLink(allowedLink: string | null): BundlerTestAppNavPage;

  readonly notAllowedLink?: string | null;
  withNotAllowedLink(notAllowedLink: string | null): BundlerTestAppNavPage;
}

