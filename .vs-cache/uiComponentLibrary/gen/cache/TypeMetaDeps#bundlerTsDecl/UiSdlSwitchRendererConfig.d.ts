export interface UiSdlSwitchRendererConfig<ComponentType> {

  readonly condition?: UiSdlRenderSwitchCondition | null;
  withCondition(condition: IUiSdlRenderSwitchCondition | null): UiSdlSwitchRendererConfig;

  readonly componentsToRender?: C3.Map<any, ComponentType | null>;
  withComponentsToRender(componentsToRender: C3.Map<any, ComponentType | null> | {[key: any]: ComponentType | null}): UiSdlSwitchRendererConfig;

  readonly fallbackComponent?: ComponentType | null;
  withFallbackComponent(fallbackComponent: ComponentType | null): UiSdlSwitchRendererConfig;
}

