export interface UiSdlChildrenMetadataUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlChildrenMetadataUpdatePayload;

  readonly children?: C3.Array<any | null>;
  withChildren(children: C3.Array<any | null> | Array<any | null>): UiSdlChildrenMetadataUpdatePayload;

  readonly componentRefs?: C3.Array<any | null>;
  withComponentRefs(componentRefs: C3.Array<any | null> | Array<any | null>): UiSdlChildrenMetadataUpdatePayload;
}

