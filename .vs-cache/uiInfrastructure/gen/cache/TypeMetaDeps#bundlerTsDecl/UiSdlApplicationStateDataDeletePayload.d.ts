export interface UiSdlApplicationStateDataDeletePayload {

  readonly stateId: string;
  withStateId(stateId: string): UiSdlApplicationStateDataDeletePayload;

  readonly ids?: C3.Array<string | null>;
  withIds(ids: C3.Array<string | null> | Array<string | null>): UiSdlApplicationStateDataDeletePayload;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlApplicationStateDataDeletePayload;
}

