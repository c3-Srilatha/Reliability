export interface UiSdlSearchStringSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSearchStringSetPayload;

  readonly searchString?: string | null;
  withSearchString(searchString: string | null): UiSdlSearchStringSetPayload;
}

