export interface UiSdlDynamicComponentRendererReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDynamicComponentRendererReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDynamicComponentRendererReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDynamicComponentRendererReact;

  readonly dataSpec?: UiSdlDynamicComponentRendererDataSpec | null;
  withDataSpec(dataSpec: IUiSdlDynamicComponentRendererDataSpec | null): UiSdlDynamicComponentRendererReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDynamicComponentRendererReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDynamicComponentRendererReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDynamicComponentRendererReact;

  readonly metadataToRender?: UiSdlDynamicComponentMetadata | null;
  withMetadataToRender(metadataToRender: IUiSdlDynamicComponentMetadata | null): UiSdlDynamicComponentRendererReact;

  readonly useInitialMetadata?: boolean;
  withUseInitialMetadata(useInitialMetadata: boolean): UiSdlDynamicComponentRendererReact;

  readonly childIds?: C3.Array<string | null>;
  withChildIds(childIds: C3.Array<string | null> | Array<string | null>): UiSdlDynamicComponentRendererReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDynamicComponentRendererReact;

  readonly componentRefIds?: C3.Array<string | null>;
  withComponentRefIds(componentRefIds: C3.Array<string | null> | Array<string | null>): UiSdlDynamicComponentRendererReact;
}

