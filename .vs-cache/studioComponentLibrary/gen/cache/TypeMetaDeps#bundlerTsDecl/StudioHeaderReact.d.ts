export interface StudioHeaderReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioHeaderReact;

  readonly id?: string | null;
  withId(id: string | null): StudioHeaderReact;

  readonly name?: string | null;
  withName(name: string | null): StudioHeaderReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioHeaderReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioHeaderReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioHeaderReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioHeaderReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): StudioHeaderReact;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | null): StudioHeaderReact;

  readonly tooltip?: string | null | UiSdlDynamicValueSpec | null | null;
  withTooltip(tooltip: string | null | IUiSdlDynamicValueSpec | null | null): StudioHeaderReact;

  readonly headerComponents?: C3.Array<StudioHeaderComponentRef | null>;
  withHeaderComponents(headerComponents: C3.Array<StudioHeaderComponentRef | null> | Array<IStudioHeaderComponentRef | null>): StudioHeaderReact;

  readonly iconActions?: C3.Array<UiSdlAction | null>;
  withIconActions(iconActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): StudioHeaderReact;

  readonly iconActionsCollapseThreshold?: number | null;
  withIconActionsCollapseThreshold(iconActionsCollapseThreshold: number | null): StudioHeaderReact;

  readonly pillComponent?: UiSdlComponentRef<StudioPillComponent | null> | null;
  withPillComponent(pillComponent: IUiSdlComponentRef<StudioPillComponent | null> | null): StudioHeaderReact;
}

