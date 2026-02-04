export interface LighthouseSpec {

  readonly url?: string | null;
  withUrl(url: string | null): LighthouseSpec;

  readonly flags?: LighthouseFlags | null;
  withFlags(flags: ILighthouseFlags | null): LighthouseSpec;

  readonly config?: LighthouseConfig | null;
  withConfig(config: ILighthouseConfig | null): LighthouseSpec;
}

