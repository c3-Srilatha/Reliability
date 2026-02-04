export interface PsrRandomizeNodeLayout {

  readonly autoLayout?: boolean;
  withAutoLayout(autoLayout: boolean): PsrRandomizeNodeLayout;

  readonly ignoreHiddenNodes?: boolean;
  withIgnoreHiddenNodes(ignoreHiddenNodes: boolean): PsrRandomizeNodeLayout;

  readonly localLayout?: boolean;
  withLocalLayout(localLayout: boolean): PsrRandomizeNodeLayout;

  readonly window?: number | null;
  withWindow(window: number | null): PsrRandomizeNodeLayout;
}

