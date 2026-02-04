export interface UiSdlDataRecordMappingDependingField {

  readonly dependingField?: string | null;
  withDependingField(dependingField: string | null): UiSdlDataRecordMappingDependingField;

  readonly dependingValues?: C3.Map<string | null, string | null>;
  withDependingValues(dependingValues: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDataRecordMappingDependingField;
}

