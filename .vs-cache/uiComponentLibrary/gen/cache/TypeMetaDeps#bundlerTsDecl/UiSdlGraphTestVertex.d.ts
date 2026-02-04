export interface UiSdlGraphTestVertex {

  readonly id: string;
  withId(id: string): UiSdlGraphTestVertex;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): UiSdlGraphTestVertex;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphTestVertex;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphTestVertex;

  readonly version?: number | null;
  withVersion(version: number | null): UiSdlGraphTestVertex;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): UiSdlGraphTestVertex;

  readonly category?: string | null;
  withCategory(category: string | null): UiSdlGraphTestVertex;

  readonly symbolSize?: number | null;
  withSymbolSize(symbolSize: number | null): UiSdlGraphTestVertex;

  readonly value?: number | null;
  withValue(value: number | null): UiSdlGraphTestVertex;

  readonly xAxis?: number | null;
  withXAxis(xAxis: number | null): UiSdlGraphTestVertex;

  readonly yAxis?: number | null;
  withYAxis(yAxis: number | null): UiSdlGraphTestVertex;

  readonly event?: DateTime | null;
  withEvent(event: DateTime | Date | string | null): UiSdlGraphTestVertex;

  readonly location?: string | null;
  withLocation(location: string | null): UiSdlGraphTestVertex;
}

