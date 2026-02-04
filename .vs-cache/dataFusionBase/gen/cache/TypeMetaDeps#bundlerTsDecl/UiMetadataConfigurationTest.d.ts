export interface UiMetadataConfigurationTest {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiMetadataConfigurationTest;

  readonly name: string;
  withName(name: string): UiMetadataConfigurationTest;
}

