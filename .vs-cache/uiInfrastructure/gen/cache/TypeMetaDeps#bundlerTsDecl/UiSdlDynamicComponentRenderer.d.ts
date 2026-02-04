export interface UiSdlDynamicComponentRenderer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDynamicComponentRenderer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDynamicComponentRenderer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDynamicComponentRenderer;

  readonly dataSpec?: UiSdlDynamicComponentRendererDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDynamicComponentRendererDataSpec | null): UiSdlDynamicComponentRenderer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDynamicComponentRenderer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDynamicComponentRenderer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDynamicComponentRenderer;

  readonly metadataToRender?: UiSdlDynamicComponentMetadata | null;
  withMetadataToRender(metadataToRender: IUiSdlDynamicComponentMetadata | null): UiSdlDynamicComponentRenderer;

  readonly useInitialMetadata?: boolean;
  withUseInitialMetadata(useInitialMetadata: boolean): UiSdlDynamicComponentRenderer;

  readonly childIds?: C3.Array<string | null>;
  withChildIds(childIds: C3.Array<string | null> | Array<string | null>): UiSdlDynamicComponentRenderer;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDynamicComponentRenderer;

  readonly componentRefIds?: C3.Array<string | null>;
  withComponentRefIds(componentRefIds: C3.Array<string | null> | Array<string | null>): UiSdlDynamicComponentRenderer;
}

