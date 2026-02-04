export interface UiSdlMetadataUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlMetadataUpdateAction;

  readonly payload?: UiSdlMetadataUpdatePayload | null;
  withPayload(payload: IUiSdlMetadataUpdatePayload | null): UiSdlMetadataUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlMetadataUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlMetadataUpdateAction;
}

