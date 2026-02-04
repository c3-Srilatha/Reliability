export interface UiSdlFieldHideShowPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFieldHideShowPayload;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFieldHideShowPayload;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlFieldHideShowPayload;
}

