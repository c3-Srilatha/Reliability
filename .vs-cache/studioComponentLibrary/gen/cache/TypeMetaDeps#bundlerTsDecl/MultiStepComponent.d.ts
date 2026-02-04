export interface MultiStepComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MultiStepComponent;

  readonly id?: string | null;
  withId(id: string | null): MultiStepComponent;

  readonly name?: string | null;
  withName(name: string | null): MultiStepComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MultiStepComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MultiStepComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MultiStepComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MultiStepComponent;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): MultiStepComponent;

  readonly currentStepIndex?: number | null;
  withCurrentStepIndex(currentStepIndex: number | null): MultiStepComponent;

  readonly configurationSteps?: C3.Array<MultiStepComponentStep | null>;
  withConfigurationSteps(configurationSteps: C3.Array<MultiStepComponentStep | null> | Array<IMultiStepComponentStep | null>): MultiStepComponent;

  readonly stepInvalidated?: C3.Map<string | null, boolean>;
  withStepInvalidated(stepInvalidated: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): MultiStepComponent;

  readonly componentLoading?: boolean;
  withComponentLoading(componentLoading: boolean): MultiStepComponent;

  readonly componentNotification?: UiSdlInlineNotification | null;
  withComponentNotification(componentNotification: IUiSdlInlineNotification | null): MultiStepComponent;
}

