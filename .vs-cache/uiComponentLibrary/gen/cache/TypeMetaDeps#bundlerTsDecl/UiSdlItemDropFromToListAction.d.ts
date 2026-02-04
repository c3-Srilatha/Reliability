export interface UiSdlItemDropFromToListAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlItemDropFromToListAction;

  readonly payload?: UiSdlItemDropFromToListPayload | null;
  withPayload(payload: IUiSdlItemDropFromToListPayload | null): UiSdlItemDropFromToListAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlItemDropFromToListAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlItemDropFromToListAction;
}

