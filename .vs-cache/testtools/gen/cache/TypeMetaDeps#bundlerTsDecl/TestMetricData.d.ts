export interface TestMetricData {

  readonly id?: string | null;
  withId(id: string | null): TestMetricData;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): TestMetricData;

  readonly name?: string | null;
  withName(name: string | null): TestMetricData;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestMetricData;

  readonly version?: number | null;
  withVersion(version: number | null): TestMetricData;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): TestMetricData;

  readonly userUpdatedFields?: C3.Array<string | null>;
  withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): TestMetricData;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): TestMetricData;

  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): TestMetricData;

  readonly metricName: string;
  withMetricName(metricName: string): TestMetricData;

  readonly metricId: string;
  withMetricId(metricId: string): TestMetricData;

  readonly data: C3.Array<number | null>;
  withData(data: C3.Array<number | null> | Array<number | null>): TestMetricData;

  readonly missing?: C3.Array<number | null>;
  withMissing(missing: C3.Array<number | null> | Array<number | null>): TestMetricData;

  readonly isPredefined?: boolean;
  withIsPredefined(isPredefined: boolean): TestMetricData;

  readonly previewImg?: string | null;
  withPreviewImg(previewImg: string | null): TestMetricData;
}

