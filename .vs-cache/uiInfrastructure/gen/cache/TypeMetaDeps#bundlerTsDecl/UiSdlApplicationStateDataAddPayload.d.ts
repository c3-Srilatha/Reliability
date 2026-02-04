export interface UiSdlApplicationStateDataAddPayload {

  readonly stateId: string;
  withStateId(stateId: string): UiSdlApplicationStateDataAddPayload;

  readonly id?: string | null;
  withId(id: string | null): UiSdlApplicationStateDataAddPayload;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlApplicationStateDataAddPayload;
}

