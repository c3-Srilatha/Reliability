export interface StudioBreadcrumbReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioBreadcrumbReact;

  readonly id?: string | null;
  withId(id: string | null): StudioBreadcrumbReact;

  readonly name?: string | null;
  withName(name: string | null): StudioBreadcrumbReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioBreadcrumbReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioBreadcrumbReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioBreadcrumbReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioBreadcrumbReact;

  readonly classicBreadcrumb?: boolean;
  withClassicBreadcrumb(classicBreadcrumb: boolean): StudioBreadcrumbReact;

  readonly breadcrumbItems?: C3.Array<BreadcrumbItem | null>;
  withBreadcrumbItems(breadcrumbItems: C3.Array<BreadcrumbItem | null> | Array<IBreadcrumbItem | null>): StudioBreadcrumbReact;
}

