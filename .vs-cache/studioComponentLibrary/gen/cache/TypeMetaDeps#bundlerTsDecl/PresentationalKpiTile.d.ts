export interface PresentationalKpiTile {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): PresentationalKpiTile;

  readonly id?: string | null;
  withId(id: string | null): PresentationalKpiTile;

  readonly name?: string | null;
  withName(name: string | null): PresentationalKpiTile;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): PresentationalKpiTile;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): PresentationalKpiTile;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): PresentationalKpiTile;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): PresentationalKpiTile;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): PresentationalKpiTile;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): PresentationalKpiTile;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): PresentationalKpiTile;

  readonly value?: string | null;
  withValue(value: string | null): PresentationalKpiTile;

  readonly tooltipText?: string | null | UiSdlDynamicValueSpec | null | null;
  withTooltipText(tooltipText: string | null | IUiSdlDynamicValueSpec | null | null): PresentationalKpiTile;
}

