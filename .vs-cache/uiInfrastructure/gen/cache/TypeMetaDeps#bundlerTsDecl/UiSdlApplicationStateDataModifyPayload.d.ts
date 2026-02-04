export interface UiSdlApplicationStateDataModifyPayload {

  readonly stateId: string;
  withStateId(stateId: string): UiSdlApplicationStateDataModifyPayload;

  readonly id?: string | null;
  withId(id: string | null): UiSdlApplicationStateDataModifyPayload;

  readonly dataPath?: string | null;
  withDataPath(dataPath: string | null): UiSdlApplicationStateDataModifyPayload;

  readonly field?: string | null;
  withField(field: string | null): UiSdlApplicationStateDataModifyPayload;

  readonly newValue?: string | null;
  withNewValue(newValue: string | null): UiSdlApplicationStateDataModifyPayload;
}

