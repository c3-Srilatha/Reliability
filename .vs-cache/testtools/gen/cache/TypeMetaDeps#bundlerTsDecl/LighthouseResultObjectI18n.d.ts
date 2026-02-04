export interface LighthouseResultObjectI18n {

  readonly rendererFormattedStrings?: C3.Map<string | null, string | null>;
  withRendererFormattedStrings(rendererFormattedStrings: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LighthouseResultObjectI18n;

  readonly icuMessagePaths?: C3.Map<string | null, any | null>;
  withIcuMessagePaths(icuMessagePaths: C3.Map<string | null, any | null> | {[key: string | null]: any | null}): LighthouseResultObjectI18n;
}

