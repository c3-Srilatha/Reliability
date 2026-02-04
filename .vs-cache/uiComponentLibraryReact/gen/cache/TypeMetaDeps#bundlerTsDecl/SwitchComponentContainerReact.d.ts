export interface SwitchComponentContainerReact {

  readonly condition?: UiSdlRenderSwitchCondition | null;
  withCondition(condition: IUiSdlRenderSwitchCondition | null): SwitchComponentContainerReact;

  readonly componentsToRender?: C3.Map<any, UiSdlComponentContainer | null>;
  withComponentsToRender(componentsToRender: C3.Map<any, UiSdlComponentContainer | null> | {[key: any]: IUiSdlComponentContainer | null}): SwitchComponentContainerReact;

  readonly fallbackComponent?: UiSdlComponentContainer | null;
  withFallbackComponent(fallbackComponent: IUiSdlComponentContainer | null): SwitchComponentContainerReact;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SwitchComponentContainerReact;

  readonly id?: string | null;
  withId(id: string | null): SwitchComponentContainerReact;

  readonly name?: string | null;
  withName(name: string | null): SwitchComponentContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SwitchComponentContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SwitchComponentContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SwitchComponentContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SwitchComponentContainerReact;
}

