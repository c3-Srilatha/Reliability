export interface UiSdlMetadataLoader {

  readonly EXPOSED_PATH_PREFIX?: string | null;
  withEXPOSED_PATH_PREFIX(EXPOSED_PATH_PREFIX: string | null): UiSdlMetadataLoader;

  readonly PATH_CATEGORY_TYPES?: string | null;
  withPATH_CATEGORY_TYPES(PATH_CATEGORY_TYPES: string | null): UiSdlMetadataLoader;

  readonly PATH_CATEGORY_TYPESYS_TYPES?: string | null;
  withPATH_CATEGORY_TYPESYS_TYPES(PATH_CATEGORY_TYPESYS_TYPES: string | null): UiSdlMetadataLoader;

  readonly PATH_CATEGORY_EPICS?: string | null;
  withPATH_CATEGORY_EPICS(PATH_CATEGORY_EPICS: string | null): UiSdlMetadataLoader;

  readonly PATH_CATEGORY_STYLES?: string | null;
  withPATH_CATEGORY_STYLES(PATH_CATEGORY_STYLES: string | null): UiSdlMetadataLoader;

  readonly PATH_CATEGORY_TESTS?: string | null;
  withPATH_CATEGORY_TESTS(PATH_CATEGORY_TESTS: string | null): UiSdlMetadataLoader;

  readonly PATH_CATEGORY_PLUGGABLES?: string | null;
  withPATH_CATEGORY_PLUGGABLES(PATH_CATEGORY_PLUGGABLES: string | null): UiSdlMetadataLoader;
}

