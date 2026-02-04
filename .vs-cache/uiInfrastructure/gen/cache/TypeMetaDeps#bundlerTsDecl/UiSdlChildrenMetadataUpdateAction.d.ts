export interface UiSdlChildrenMetadataUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChildrenMetadataUpdateAction;

  readonly payload?: UiSdlChildrenMetadataUpdatePayload | null;
  withPayload(payload: IUiSdlChildrenMetadataUpdatePayload | null): UiSdlChildrenMetadataUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChildrenMetadataUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChildrenMetadataUpdateAction;
}

