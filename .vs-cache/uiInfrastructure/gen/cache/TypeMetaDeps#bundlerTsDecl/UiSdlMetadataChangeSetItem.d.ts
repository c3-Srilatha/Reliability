export interface UiSdlMetadataChangeSetItem {

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlMetadataChangeSetItem;

  readonly configurableUiMetadata?: UiSdlComponentsAndPages | null;
  withConfigurableUiMetadata(configurableUiMetadata: IUiSdlComponentsAndPages | null): UiSdlMetadataChangeSetItem;
}

