export interface UiSdlInAppDoc {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlInAppDoc;

  readonly id?: string | null;
  withId(id: string | null): UiSdlInAppDoc;

  readonly name?: string | null;
  withName(name: string | null): UiSdlInAppDoc;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlInAppDoc;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlInAppDoc;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlInAppDoc;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlInAppDoc;

  readonly show?: boolean;
  withShow(show: boolean): UiSdlInAppDoc;

  readonly disabledInAppButton?: boolean;
  withDisabledInAppButton(disabledInAppButton: boolean): UiSdlInAppDoc;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlInAppDoc;

  readonly loadDocEagerly?: boolean;
  withLoadDocEagerly(loadDocEagerly: boolean): UiSdlInAppDoc;
}

