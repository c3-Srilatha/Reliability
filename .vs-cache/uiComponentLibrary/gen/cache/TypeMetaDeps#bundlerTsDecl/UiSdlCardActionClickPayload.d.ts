export interface UiSdlCardActionClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCardActionClickPayload;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCardActionClickPayload;

  readonly cardData?: any | null;
  withCardData(cardData: any | null): UiSdlCardActionClickPayload;
}

