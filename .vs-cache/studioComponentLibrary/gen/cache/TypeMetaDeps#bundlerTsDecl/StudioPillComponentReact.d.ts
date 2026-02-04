export interface StudioPillComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioPillComponentReact;

  readonly id?: string | null;
  withId(id: string | null): StudioPillComponentReact;

  readonly name?: string | null;
  withName(name: string | null): StudioPillComponentReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioPillComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioPillComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioPillComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioPillComponentReact;

  readonly content: string;
  withContent(content: string): StudioPillComponentReact;

  readonly contentMap?: Obj | null;
  withContentMap(contentMap: IObj | null): StudioPillComponentReact;

  readonly icon?: string | null;
  withIcon(icon: string | null): StudioPillComponentReact;

  readonly iconMap?: Obj | null;
  withIconMap(iconMap: IObj | null): StudioPillComponentReact;

  readonly color?: string | null;
  withColor(color: string | null): StudioPillComponentReact;

  readonly colorMap?: Obj | null;
  withColorMap(colorMap: IObj | null): StudioPillComponentReact;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): StudioPillComponentReact;

  readonly onClick?: λNullConsumer | null;
  withOnClick(onClick: λNullConsumer | null): StudioPillComponentReact;

  readonly tooltipPosition?: string | null;
  withTooltipPosition(tooltipPosition: string | null): StudioPillComponentReact;
}


interface λNullConsumer {
  (): void
}
