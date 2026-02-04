export interface UiSdlCancelConfirmationModalOpenAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCancelConfirmationModalOpenAction;

  readonly payload?: UiSdlCancelConfirmationModalOpenPayload | null;
  withPayload(payload: IUiSdlCancelConfirmationModalOpenPayload | null): UiSdlCancelConfirmationModalOpenAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCancelConfirmationModalOpenAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCancelConfirmationModalOpenAction;
}

