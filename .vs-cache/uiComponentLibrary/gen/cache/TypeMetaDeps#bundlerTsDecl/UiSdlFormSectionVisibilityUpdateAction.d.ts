export interface UiSdlFormSectionVisibilityUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFormSectionVisibilityUpdateAction;

  readonly payload?: UiSdlFormSectionVisibilityUpdatePayload | null;
  withPayload(payload: IUiSdlFormSectionVisibilityUpdatePayload | null): UiSdlFormSectionVisibilityUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFormSectionVisibilityUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormSectionVisibilityUpdateAction;
}

