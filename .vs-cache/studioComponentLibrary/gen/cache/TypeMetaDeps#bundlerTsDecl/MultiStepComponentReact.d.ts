export interface MultiStepComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MultiStepComponentReact;

  readonly id?: string | null;
  withId(id: string | null): MultiStepComponentReact;

  readonly name?: string | null;
  withName(name: string | null): MultiStepComponentReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MultiStepComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MultiStepComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MultiStepComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MultiStepComponentReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponentReact;

  readonly currentStepIndex?: number | null;
  withCurrentStepIndex(currentStepIndex: number | null): MultiStepComponentReact;

  readonly configurationSteps?: C3.Array<MultiStepComponentStep | null>;
  withConfigurationSteps(configurationSteps: C3.Array<MultiStepComponentStep | null> | Array<IMultiStepComponentStep | null>): MultiStepComponentReact;

  readonly stepInvalidated?: C3.Map<string | null, boolean>;
  withStepInvalidated(stepInvalidated: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): MultiStepComponentReact;

  readonly componentLoading?: boolean;
  withComponentLoading(componentLoading: boolean): MultiStepComponentReact;

  readonly componentNotification?: UiSdlInlineNotification | null;
  withComponentNotification(componentNotification: IUiSdlInlineNotification | null): MultiStepComponentReact;
}

