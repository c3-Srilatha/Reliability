export interface UiSdlReduxMetadata {

  readonly REDUX_METADATA_NAMESPACE?: string | null;
  withREDUX_METADATA_NAMESPACE(REDUX_METADATA_NAMESPACE: string | null): UiSdlReduxMetadata;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): UiSdlReduxMetadata;
}

