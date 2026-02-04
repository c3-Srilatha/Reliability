export interface UiSdlItemDropPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlItemDropPayload;

  readonly sourceData?: any | null;
  withSourceData(sourceData: any | null): UiSdlItemDropPayload;

  readonly targetData?: any | null;
  withTargetData(targetData: any | null): UiSdlItemDropPayload;
}

