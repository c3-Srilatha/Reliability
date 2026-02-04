export interface UiSdlCollectionListRowDeleteAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCollectionListRowDeleteAction;

  readonly payload?: UiSdlCollectionListRowDeletePayload | null;
  withPayload(payload: IUiSdlCollectionListRowDeletePayload | null): UiSdlCollectionListRowDeleteAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCollectionListRowDeleteAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCollectionListRowDeleteAction;
}

