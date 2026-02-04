export interface UiMetadataConfigurationTest2 {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiMetadataConfigurationTest2;

  readonly name: string;
  withName(name: string): UiMetadataConfigurationTest2;

  readonly description?: string | null;
  withDescription(description: string | null): UiMetadataConfigurationTest2;
}

