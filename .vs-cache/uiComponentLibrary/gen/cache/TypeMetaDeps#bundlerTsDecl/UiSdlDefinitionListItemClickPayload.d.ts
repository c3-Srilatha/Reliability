export interface UiSdlDefinitionListItemClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDefinitionListItemClickPayload;

  readonly obj?: any | null;
  withObj(obj: any | null): UiSdlDefinitionListItemClickPayload;
}

