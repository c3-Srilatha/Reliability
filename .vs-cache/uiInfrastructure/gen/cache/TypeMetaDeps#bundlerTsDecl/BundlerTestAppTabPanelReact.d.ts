export interface BundlerTestAppTabPanelReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppTabPanelReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppTabPanelReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppTabPanelReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppTabPanelReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppTabPanelReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppTabPanelReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppTabPanelReact;

  readonly header?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withHeader(header: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BundlerTestAppTabPanelReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppTabPanelReact;
}

