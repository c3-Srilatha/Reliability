export interface UiSdlConditionalRenderConfig<ComponentType> {

  readonly condition?: UiSdlRenderCondition | null;
  withCondition(condition: IUiSdlRenderCondition | null): UiSdlConditionalRenderConfig;

  readonly useElseComponentAsFallback?: boolean;
  withUseElseComponentAsFallback(useElseComponentAsFallback: boolean): UiSdlConditionalRenderConfig;

  readonly thenComponent?: ComponentType | null;
  withThenComponent(thenComponent: ComponentType | null): UiSdlConditionalRenderConfig;

  readonly elseComponent?: ComponentType | null;
  withElseComponent(elseComponent: ComponentType | null): UiSdlConditionalRenderConfig;
}

