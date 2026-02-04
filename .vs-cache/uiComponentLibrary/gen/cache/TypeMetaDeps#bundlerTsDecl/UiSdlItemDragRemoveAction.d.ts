export interface UiSdlItemDragRemoveAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlItemDragRemoveAction;

  readonly payload?: UiSdlItemDragRemovePayload | null;
  withPayload(payload: IUiSdlItemDragRemovePayload | null): UiSdlItemDragRemoveAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlItemDragRemoveAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlItemDragRemoveAction;
}

