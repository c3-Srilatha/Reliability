export interface UiSdlFormSectionCollapseStateUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFormSectionCollapseStateUpdateAction;

  readonly payload?: UiSdlFormSectionCollapseStateUpdatePayload | null;
  withPayload(payload: IUiSdlFormSectionCollapseStateUpdatePayload | null): UiSdlFormSectionCollapseStateUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFormSectionCollapseStateUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormSectionCollapseStateUpdateAction;
}

