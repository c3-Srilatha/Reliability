export interface UiSdlCollapsibleComponentSubtitleUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCollapsibleComponentSubtitleUpdateAction;

  readonly payload?: UiSdlCollapsibleComponentSubtitleUpdatePayload | null;
  withPayload(payload: IUiSdlCollapsibleComponentSubtitleUpdatePayload | null): UiSdlCollapsibleComponentSubtitleUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCollapsibleComponentSubtitleUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCollapsibleComponentSubtitleUpdateAction;
}

