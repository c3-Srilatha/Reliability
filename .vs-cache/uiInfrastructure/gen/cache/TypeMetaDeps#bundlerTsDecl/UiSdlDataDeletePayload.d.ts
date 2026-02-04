export interface UiSdlDataDeletePayload {

  readonly ids: C3.Array<string | null>;
  withIds(ids: C3.Array<string | null> | Array<string | null>): UiSdlDataDeletePayload;
}

