export interface UiSdlConditionalRenderer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlConditionalRenderer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlConditionalRenderer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlConditionalRenderer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlConditionalRenderer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlConditionalRenderer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlConditionalRenderer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlConditionalRenderer;

  readonly condition?: UiSdlRenderCondition | null;
  withCondition(condition: IUiSdlRenderCondition | null): UiSdlConditionalRenderer;

  readonly useElseComponentAsFallback?: boolean;
  withUseElseComponentAsFallback(useElseComponentAsFallback: boolean): UiSdlConditionalRenderer;

  readonly thenComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withThenComponent(thenComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlConditionalRenderer;

  readonly elseComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withElseComponent(elseComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlConditionalRenderer;
}

