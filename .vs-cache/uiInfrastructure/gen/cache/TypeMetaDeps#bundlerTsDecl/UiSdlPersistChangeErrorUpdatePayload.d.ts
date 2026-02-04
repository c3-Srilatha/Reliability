export interface UiSdlPersistChangeErrorUpdatePayload {

  readonly errors?: C3.Array<string | null>;
  withErrors(errors: C3.Array<string | null> | Array<string | null>): UiSdlPersistChangeErrorUpdatePayload;
}

