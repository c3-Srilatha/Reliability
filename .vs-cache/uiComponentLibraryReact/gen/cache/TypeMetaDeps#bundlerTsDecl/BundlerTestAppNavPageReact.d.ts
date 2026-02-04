export interface BundlerTestAppNavPageReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppNavPageReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppNavPageReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppNavPageReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppNavPageReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppNavPageReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppNavPageReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppNavPageReact;

  readonly allowedLink?: string | null;
  withAllowedLink(allowedLink: string | null): BundlerTestAppNavPageReact;

  readonly notAllowedLink?: string | null;
  withNotAllowedLink(notAllowedLink: string | null): BundlerTestAppNavPageReact;
}

