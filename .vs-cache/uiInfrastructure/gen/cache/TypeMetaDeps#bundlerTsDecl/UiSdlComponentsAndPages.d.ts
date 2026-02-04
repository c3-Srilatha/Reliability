export interface UiSdlComponentsAndPages {

  readonly componentById?: C3.Map<string | null, any | null>;
  withComponentById(componentById: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): UiSdlComponentsAndPages;

  readonly pageById?: C3.Map<string | null, any | null>;
  withPageById(pageById: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): UiSdlComponentsAndPages;
}

