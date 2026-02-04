export interface LighthouseResultObjectStackPack {

  readonly id?: string | null;
  withId(id: string | null): LighthouseResultObjectStackPack;

  readonly title?: string | null;
  withTitle(title: string | null): LighthouseResultObjectStackPack;

  readonly iconDataURL?: string | null;
  withIconDataURL(iconDataURL: string | null): LighthouseResultObjectStackPack;

  readonly descriptions?: C3.Map<string | null, string | null>;
  withDescriptions(descriptions: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LighthouseResultObjectStackPack;
}

