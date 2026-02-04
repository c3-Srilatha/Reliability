export interface UiSdlTranslationContext {

  readonly value: C3.Map<string | null, string | null>;
  withValue(value: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlTranslationContext;
}

