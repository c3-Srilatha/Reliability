export interface UiSdlModalHeaderConfig {

  readonly text?: string | null;
  withText(text: string | null): UiSdlModalHeaderConfig;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlModalHeaderConfig;
}

