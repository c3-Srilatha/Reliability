export interface UiSdlItemDragAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlItemDragAction;

  readonly payload?: UiSdlItemDragPayload | null;
  withPayload(payload: IUiSdlItemDragPayload | null): UiSdlItemDragAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlItemDragAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlItemDragAction;
}

