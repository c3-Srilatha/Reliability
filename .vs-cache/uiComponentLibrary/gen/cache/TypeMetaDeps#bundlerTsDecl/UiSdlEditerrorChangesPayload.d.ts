export interface UiSdlEditerrorChangesPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlEditerrorChangesPayload;

  readonly editErrors?: C3.Map<string | null, C3.Map<string | null, string | null>>;
  withEditErrors(editErrors: C3.Map<string | null, C3.Map<string | null, string | null>> | {[key: string | null]: C3.Map<string | null, string | null> | {[key: string | null]: string | null}}): UiSdlEditerrorChangesPayload;
}

