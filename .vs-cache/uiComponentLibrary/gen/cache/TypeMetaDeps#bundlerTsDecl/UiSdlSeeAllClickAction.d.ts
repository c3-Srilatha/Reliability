export interface UiSdlSeeAllClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSeeAllClickAction;

  readonly payload?: UiSdlSeeAllClickPayload | null;
  withPayload(payload: IUiSdlSeeAllClickPayload | null): UiSdlSeeAllClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSeeAllClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSeeAllClickAction;
}

