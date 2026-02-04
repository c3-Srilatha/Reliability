export interface AssetMapApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AssetMapApplicationState;

  readonly id?: string | null;
  withId(id: string | null): AssetMapApplicationState;

  readonly name?: string | null;
  withName(name: string | null): AssetMapApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): AssetMapApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): AssetMapApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): AssetMapApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): AssetMapApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): AssetMapApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): AssetMapApplicationState;

  readonly selectedAssetId?: string | null;
  withSelectedAssetId(selectedAssetId: string | null): AssetMapApplicationState;

  readonly selectedAlertId?: string | null;
  withSelectedAlertId(selectedAlertId: string | null): AssetMapApplicationState;

  readonly selectedWorkOrderId?: string | null;
  withSelectedWorkOrderId(selectedWorkOrderId: string | null): AssetMapApplicationState;

  readonly selectedPartId?: string | null;
  withSelectedPartId(selectedPartId: string | null): AssetMapApplicationState;

  readonly sidePanelToShow?: string | null;
  withSidePanelToShow(sidePanelToShow: string | null): AssetMapApplicationState;

  readonly isFilterPanelOpen?: boolean;
  withIsFilterPanelOpen(isFilterPanelOpen: boolean): AssetMapApplicationState;

  readonly submittedFilterSpec?: string | null;
  withSubmittedFilterSpec(submittedFilterSpec: string | null): AssetMapApplicationState;
}

