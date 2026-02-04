export interface LighthouseConfigGroup {

  readonly title?: string | null;
  withTitle(title: string | null): LighthouseConfigGroup;

  readonly description?: string | null;
  withDescription(description: string | null): LighthouseConfigGroup;
}

