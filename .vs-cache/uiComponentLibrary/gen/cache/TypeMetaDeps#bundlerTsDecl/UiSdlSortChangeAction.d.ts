export interface UiSdlSortChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSortChangeAction;

  readonly payload?: UiSdlSortChangePayload | null;
  withPayload(payload: IUiSdlSortChangePayload | null): UiSdlSortChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSortChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSortChangeAction;
}

