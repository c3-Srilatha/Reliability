export interface UiSdlSelectedInputItemsSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSelectedInputItemsSetPayload;

  readonly selectedInputItems?: C3.Array<UiSdlSelectedInputItem | null>;
  withSelectedInputItems(selectedInputItems: C3.Array<UiSdlSelectedInputItem | null> | Array<IUiSdlSelectedInputItem | null>): UiSdlSelectedInputItemsSetPayload;
}

