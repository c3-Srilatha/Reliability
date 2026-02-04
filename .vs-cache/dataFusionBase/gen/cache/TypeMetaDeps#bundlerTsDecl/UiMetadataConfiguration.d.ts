export interface UiMetadataConfiguration {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiMetadataConfiguration;

  readonly name: string;
  withName(name: string): UiMetadataConfiguration;
}

