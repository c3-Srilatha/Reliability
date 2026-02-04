export interface UiSdlSortColumnChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSortColumnChangeAction;

  readonly payload?: UiSdlSortColumnChangePayload | null;
  withPayload(payload: IUiSdlSortColumnChangePayload | null): UiSdlSortColumnChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSortColumnChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSortColumnChangeAction;
}

