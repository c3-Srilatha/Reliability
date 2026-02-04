export interface UiSdlCollectionListRowClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCollectionListRowClickAction;

  readonly payload?: UiSdlCollectionListRowClickPayload | null;
  withPayload(payload: IUiSdlCollectionListRowClickPayload | null): UiSdlCollectionListRowClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCollectionListRowClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCollectionListRowClickAction;
}

