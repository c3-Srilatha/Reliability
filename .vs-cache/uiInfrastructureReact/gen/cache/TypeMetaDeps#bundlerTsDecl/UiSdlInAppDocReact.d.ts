export interface UiSdlInAppDocReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlInAppDocReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlInAppDocReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlInAppDocReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlInAppDocReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlInAppDocReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlInAppDocReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlInAppDocReact;

  readonly show?: boolean;
  withShow(show: boolean): UiSdlInAppDocReact;

  readonly disabledInAppButton?: boolean;
  withDisabledInAppButton(disabledInAppButton: boolean): UiSdlInAppDocReact;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlInAppDocReact;

  readonly loadDocEagerly?: boolean;
  withLoadDocEagerly(loadDocEagerly: boolean): UiSdlInAppDocReact;
}

