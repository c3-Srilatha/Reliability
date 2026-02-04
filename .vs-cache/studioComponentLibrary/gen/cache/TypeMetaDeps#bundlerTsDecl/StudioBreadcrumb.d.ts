export interface StudioBreadcrumb {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioBreadcrumb;

  readonly id?: string | null;
  withId(id: string | null): StudioBreadcrumb;

  readonly name?: string | null;
  withName(name: string | null): StudioBreadcrumb;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioBreadcrumb;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioBreadcrumb;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioBreadcrumb;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioBreadcrumb;

  readonly classicBreadcrumb?: boolean;
  withClassicBreadcrumb(classicBreadcrumb: boolean): StudioBreadcrumb;

  readonly breadcrumbItems?: C3.Array<BreadcrumbItem | null>;
  withBreadcrumbItems(breadcrumbItems: C3.Array<BreadcrumbItem | null> | Array<IBreadcrumbItem | null>): StudioBreadcrumb;
}

