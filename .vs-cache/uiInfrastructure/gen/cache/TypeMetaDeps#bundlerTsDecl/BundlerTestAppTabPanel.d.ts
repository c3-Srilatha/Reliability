export interface BundlerTestAppTabPanel {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppTabPanel;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppTabPanel;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppTabPanel;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppTabPanel;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppTabPanel;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppTabPanel;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppTabPanel;

  readonly header?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withHeader(header: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BundlerTestAppTabPanel;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppTabPanel;
}

