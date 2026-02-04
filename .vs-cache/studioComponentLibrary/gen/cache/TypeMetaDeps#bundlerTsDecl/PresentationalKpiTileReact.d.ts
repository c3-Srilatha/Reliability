export interface PresentationalKpiTileReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PresentationalKpiTileReact;

  readonly id?: string | null;
  withId(id: string | null): PresentationalKpiTileReact;

  readonly name?: string | null;
  withName(name: string | null): PresentationalKpiTileReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PresentationalKpiTileReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PresentationalKpiTileReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PresentationalKpiTileReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PresentationalKpiTileReact;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): PresentationalKpiTileReact;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): PresentationalKpiTileReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): PresentationalKpiTileReact;

  readonly value?: string | null;
  withValue(value: string | null): PresentationalKpiTileReact;

  readonly tooltipText?: string | null | UiSdlDynamicValueSpec | null | null;
  withTooltipText(tooltipText: string | null | IUiSdlDynamicValueSpec | null | null): PresentationalKpiTileReact;
}

