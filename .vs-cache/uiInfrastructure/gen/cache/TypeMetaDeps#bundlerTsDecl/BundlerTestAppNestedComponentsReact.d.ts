export interface BundlerTestAppNestedComponentsReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppNestedComponentsReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppNestedComponentsReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppNestedComponentsReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppNestedComponentsReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppNestedComponentsReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppNestedComponentsReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppNestedComponentsReact;

  readonly components?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withComponents(components: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppNestedComponentsReact;

  readonly children?: C3.Array<C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>>;
  withChildren(children: C3.Array<C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>> | Array<C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>>): BundlerTestAppNestedComponentsReact;
}

