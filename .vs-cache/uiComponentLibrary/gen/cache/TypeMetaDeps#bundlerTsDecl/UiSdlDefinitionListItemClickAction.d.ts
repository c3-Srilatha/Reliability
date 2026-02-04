export interface UiSdlDefinitionListItemClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDefinitionListItemClickAction;

  readonly payload?: UiSdlDefinitionListItemClickPayload | null;
  withPayload(payload: IUiSdlDefinitionListItemClickPayload | null): UiSdlDefinitionListItemClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDefinitionListItemClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDefinitionListItemClickAction;
}

