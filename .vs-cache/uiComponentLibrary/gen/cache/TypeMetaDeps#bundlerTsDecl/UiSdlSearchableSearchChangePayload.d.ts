export interface UiSdlSearchableSearchChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSearchableSearchChangePayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSearchableSearchChangePayload;

  readonly idValue?: string | null;
  withIdValue(idValue: string | null): UiSdlSearchableSearchChangePayload;
}

