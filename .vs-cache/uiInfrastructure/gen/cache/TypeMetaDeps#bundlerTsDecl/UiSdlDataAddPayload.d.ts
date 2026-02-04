export interface UiSdlDataAddPayload {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDataAddPayload;

  readonly insertLocation?: string | null;
  withInsertLocation(insertLocation: string | null): UiSdlDataAddPayload;
}

