export interface UiSdlDiagramNewEdgeInfo {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramNewEdgeInfo;

  readonly from?: string | null;
  withFrom(from: string | null): UiSdlDiagramNewEdgeInfo;

  readonly to?: string | null;
  withTo(to: string | null): UiSdlDiagramNewEdgeInfo;

  readonly relationship?: string | null;
  withRelationship(relationship: string | null): UiSdlDiagramNewEdgeInfo;

  readonly fromInfo?: string | null;
  withFromInfo(fromInfo: string | null): UiSdlDiagramNewEdgeInfo;

  readonly toInfo?: string | null;
  withToInfo(toInfo: string | null): UiSdlDiagramNewEdgeInfo;

  readonly involvement?: number | null;
  withInvolvement(involvement: number | null): UiSdlDiagramNewEdgeInfo;
}

