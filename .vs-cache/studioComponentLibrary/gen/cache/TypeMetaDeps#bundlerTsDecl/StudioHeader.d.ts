export interface StudioHeader {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioHeader;

  readonly id?: string | null;
  withId(id: string | null): StudioHeader;

  readonly name?: string | null;
  withName(name: string | null): StudioHeader;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioHeader;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioHeader;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioHeader;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioHeader;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): StudioHeader;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | null): StudioHeader;

  readonly tooltip?: string | null | UiSdlDynamicValueSpec | null | null;
  withTooltip(tooltip: string | null | IUiSdlDynamicValueSpec | null | null): StudioHeader;

  readonly headerComponents?: C3.Array<StudioHeaderComponentRef | null>;
  withHeaderComponents(headerComponents: C3.Array<StudioHeaderComponentRef | null> | Array<IStudioHeaderComponentRef | null>): StudioHeader;

  readonly iconActions?: C3.Array<UiSdlAction | null>;
  withIconActions(iconActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): StudioHeader;

  readonly iconActionsCollapseThreshold?: number | null;
  withIconActionsCollapseThreshold(iconActionsCollapseThreshold: number | null): StudioHeader;

  readonly pillComponent?: UiSdlComponentRef<StudioPillComponent | null> | null;
  withPillComponent(pillComponent: IUiSdlComponentRef<StudioPillComponent | null> | null): StudioHeader;
}

