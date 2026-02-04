export interface UiSdlGraphTestEdge {

  readonly id: string;
  withId(id: string): UiSdlGraphTestEdge;

  readonly from?: UiSdlGraphTestVertex | null;
  withFrom(from: IUiSdlGraphTestVertex | null): UiSdlGraphTestEdge;

  readonly to?: UiSdlGraphTestVertex | null;
  withTo(to: IUiSdlGraphTestVertex | null): UiSdlGraphTestEdge;

  readonly relationship?: string | null;
  withRelationship(relationship: string | null): UiSdlGraphTestEdge;

  readonly fromInfo?: string | null;
  withFromInfo(fromInfo: string | null): UiSdlGraphTestEdge;

  readonly toInfo?: string | null;
  withToInfo(toInfo: string | null): UiSdlGraphTestEdge;

  readonly involvement?: number | null;
  withInvolvement(involvement: number | null): UiSdlGraphTestEdge;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlGraphTestEdge;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphTestEdge;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphTestEdge;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlGraphTestEdge;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlGraphTestEdge;

  readonly transactions?: number | null;
  withTransactions(transactions: number | null): UiSdlGraphTestEdge;
}

