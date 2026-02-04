export interface UiSdlDataModifyPayload {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataModifyPayload;

  readonly field: string;
  withField(field: string): UiSdlDataModifyPayload;

  readonly newValue: string;
  withNewValue(newValue: string): UiSdlDataModifyPayload;
}

