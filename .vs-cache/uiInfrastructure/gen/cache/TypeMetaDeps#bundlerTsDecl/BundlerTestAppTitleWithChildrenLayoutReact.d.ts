export interface BundlerTestAppTitleWithChildrenLayoutReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppTitleWithChildrenLayoutReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppTitleWithChildrenLayoutReact;
}

