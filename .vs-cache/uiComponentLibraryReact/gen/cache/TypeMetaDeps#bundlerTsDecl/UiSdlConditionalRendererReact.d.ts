export interface UiSdlConditionalRendererReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlConditionalRendererReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlConditionalRendererReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlConditionalRendererReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlConditionalRendererReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlConditionalRendererReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlConditionalRendererReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlConditionalRendererReact;

  readonly condition?: UiSdlRenderCondition | null;
  withCondition(condition: IUiSdlRenderCondition | null): UiSdlConditionalRendererReact;

  readonly useElseComponentAsFallback?: boolean;
  withUseElseComponentAsFallback(useElseComponentAsFallback: boolean): UiSdlConditionalRendererReact;

  readonly thenComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withThenComponent(thenComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlConditionalRendererReact;

  readonly elseComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withElseComponent(elseComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlConditionalRendererReact;
}

