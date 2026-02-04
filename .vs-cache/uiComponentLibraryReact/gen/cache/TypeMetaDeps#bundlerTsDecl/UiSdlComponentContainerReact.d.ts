export interface UiSdlComponentContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlComponentContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlComponentContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlComponentContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlComponentContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlComponentContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlComponentContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlComponentContainerReact;

  readonly padding?: number | null;
  withPadding(padding: number | null): UiSdlComponentContainerReact;

  readonly stretch?: boolean;
  withStretch(stretch: boolean): UiSdlComponentContainerReact;

  readonly column?: number | null;
  withColumn(column: number | null): UiSdlComponentContainerReact;

  readonly childComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withChildComponent(childComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlComponentContainerReact;
}

