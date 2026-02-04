export interface UiSdlStoreChildComponentIdAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlStoreChildComponentIdAction;

  readonly payload?: UiSdlStoreChildComponentIdPayload | null;
  withPayload(payload: IUiSdlStoreChildComponentIdPayload | null): UiSdlStoreChildComponentIdAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlStoreChildComponentIdAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlStoreChildComponentIdAction;
}

