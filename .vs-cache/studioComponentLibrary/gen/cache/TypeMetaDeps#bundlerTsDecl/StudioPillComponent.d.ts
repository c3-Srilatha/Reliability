export interface StudioPillComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioPillComponent;

  readonly id?: string | null;
  withId(id: string | null): StudioPillComponent;

  readonly name?: string | null;
  withName(name: string | null): StudioPillComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioPillComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioPillComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioPillComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioPillComponent;

  readonly content: string;
  withContent(content: string): StudioPillComponent;

  readonly contentMap?: Obj | null;
  withContentMap(contentMap: IObj | null): StudioPillComponent;

  readonly icon?: string | null;
  withIcon(icon: string | null): StudioPillComponent;

  readonly iconMap?: Obj | null;
  withIconMap(iconMap: IObj | null): StudioPillComponent;

  readonly color?: string | null;
  withColor(color: string | null): StudioPillComponent;

  readonly colorMap?: Obj | null;
  withColorMap(colorMap: IObj | null): StudioPillComponent;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): StudioPillComponent;

  readonly onClick?: λNullConsumer | null;
  withOnClick(onClick: λNullConsumer | null): StudioPillComponent;

  readonly tooltipPosition?: string | null;
  withTooltipPosition(tooltipPosition: string | null): StudioPillComponent;
}


interface λNullConsumer {
  (): void
}
