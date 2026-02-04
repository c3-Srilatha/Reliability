export interface UiSdlMetadataChangeSet {

  readonly created?: UiSdlMetadataChangeSetItem | null;
  withCreated(created: IUiSdlMetadataChangeSetItem | null): UiSdlMetadataChangeSet;

  readonly updated?: ObjUpdate<UiSdlMetadataChangeSetItem | null> | null;
  withUpdated(updated: IObjUpdate<UiSdlMetadataChangeSetItem | null> | null): UiSdlMetadataChangeSet;

  readonly removed?: UiSdlMetadataChangeSetItem | null;
  withRemoved(removed: IUiSdlMetadataChangeSetItem | null): UiSdlMetadataChangeSet;
}

