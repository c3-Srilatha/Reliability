export interface UiSdlAtomicButtonSetContentPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAtomicButtonSetContentPayload;

  readonly content?: string | null;
  withContent(content: string | null): UiSdlAtomicButtonSetContentPayload;
}

