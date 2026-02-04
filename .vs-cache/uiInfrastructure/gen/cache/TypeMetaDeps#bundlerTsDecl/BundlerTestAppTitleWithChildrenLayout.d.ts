export interface BundlerTestAppTitleWithChildrenLayout {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppTitleWithChildrenLayout;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppTitleWithChildrenLayout;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppTitleWithChildrenLayout;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppTitleWithChildrenLayout;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppTitleWithChildrenLayout;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppTitleWithChildrenLayout;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppTitleWithChildrenLayout;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppTitleWithChildrenLayout;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppTitleWithChildrenLayout;
}

