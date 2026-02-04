export interface BundlerTestAppNestedComponents {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppNestedComponents;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppNestedComponents;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppNestedComponents;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppNestedComponents;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppNestedComponents;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppNestedComponents;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppNestedComponents;

  readonly components?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withComponents(components: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppNestedComponents;

  readonly children?: C3.Array<C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>>;
  withChildren(children: C3.Array<C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>> | Array<C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>>): BundlerTestAppNestedComponents;
}

