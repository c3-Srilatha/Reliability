export interface UiSdlConditionalComponentContainer {

  readonly condition?: UiSdlRenderCondition | null;
  withCondition(condition: IUiSdlRenderCondition | null): UiSdlConditionalComponentContainer;

  readonly useElseComponentAsFallback?: boolean;
  withUseElseComponentAsFallback(useElseComponentAsFallback: boolean): UiSdlConditionalComponentContainer;

  readonly thenComponent?: UiSdlComponentContainer | null;
  withThenComponent(thenComponent: IUiSdlComponentContainer | null): UiSdlConditionalComponentContainer;

  readonly elseComponent?: UiSdlComponentContainer | null;
  withElseComponent(elseComponent: IUiSdlComponentContainer | null): UiSdlConditionalComponentContainer;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlConditionalComponentContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlConditionalComponentContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlConditionalComponentContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlConditionalComponentContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlConditionalComponentContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlConditionalComponentContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlConditionalComponentContainer;
}

