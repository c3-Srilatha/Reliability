export interface ConditionalComponentContainerReact {

  readonly condition?: UiSdlRenderCondition | null;
  withCondition(condition: IUiSdlRenderCondition | null): ConditionalComponentContainerReact;

  readonly useElseComponentAsFallback?: boolean;
  withUseElseComponentAsFallback(useElseComponentAsFallback: boolean): ConditionalComponentContainerReact;

  readonly thenComponent?: UiSdlComponentContainer | null;
  withThenComponent(thenComponent: IUiSdlComponentContainer | null): ConditionalComponentContainerReact;

  readonly elseComponent?: UiSdlComponentContainer | null;
  withElseComponent(elseComponent: IUiSdlComponentContainer | null): ConditionalComponentContainerReact;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ConditionalComponentContainerReact;

  readonly id?: string | null;
  withId(id: string | null): ConditionalComponentContainerReact;

  readonly name?: string | null;
  withName(name: string | null): ConditionalComponentContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ConditionalComponentContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ConditionalComponentContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ConditionalComponentContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ConditionalComponentContainerReact;
}

