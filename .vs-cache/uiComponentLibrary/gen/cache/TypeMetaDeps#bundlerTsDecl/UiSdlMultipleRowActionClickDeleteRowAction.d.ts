export interface UiSdlMultipleRowActionClickDeleteRowAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlMultipleRowActionClickDeleteRowAction;

  readonly payload?: UiSdlMultipleRowActionClickDeleteRowPayload | null;
  withPayload(payload: IUiSdlMultipleRowActionClickDeleteRowPayload | null): UiSdlMultipleRowActionClickDeleteRowAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlMultipleRowActionClickDeleteRowAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlMultipleRowActionClickDeleteRowAction;
}

