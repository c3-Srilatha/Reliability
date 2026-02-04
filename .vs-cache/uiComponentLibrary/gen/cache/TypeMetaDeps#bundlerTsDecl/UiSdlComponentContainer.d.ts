export interface UiSdlComponentContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlComponentContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlComponentContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlComponentContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlComponentContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlComponentContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlComponentContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlComponentContainer;

  readonly padding?: number | null;
  withPadding(padding: number | null): UiSdlComponentContainer;

  readonly stretch?: boolean;
  withStretch(stretch: boolean): UiSdlComponentContainer;

  readonly column?: number | null;
  withColumn(column: number | null): UiSdlComponentContainer;

  readonly childComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withChildComponent(childComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlComponentContainer;
}

