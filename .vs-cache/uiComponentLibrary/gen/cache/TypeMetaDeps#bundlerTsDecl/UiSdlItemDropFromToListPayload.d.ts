export interface UiSdlItemDropFromToListPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlItemDropFromToListPayload;

  readonly sourceData?: any | null;
  withSourceData(sourceData: any | null): UiSdlItemDropFromToListPayload;

  readonly targetData?: any | null;
  withTargetData(targetData: any | null): UiSdlItemDropFromToListPayload;
}

