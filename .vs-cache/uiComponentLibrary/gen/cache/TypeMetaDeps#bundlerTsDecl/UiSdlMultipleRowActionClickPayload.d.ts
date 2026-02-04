export interface UiSdlMultipleRowActionClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlMultipleRowActionClickPayload;

  readonly dataItems?: C3.Array<string | null>;
  withDataItems(dataItems: C3.Array<string | null> | Array<string | null>): UiSdlMultipleRowActionClickPayload;
}

