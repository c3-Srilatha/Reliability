export interface UiSdlCollapsibleComponentSubtitleUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCollapsibleComponentSubtitleUpdatePayload;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlCollapsibleComponentSubtitleUpdatePayload;
}

