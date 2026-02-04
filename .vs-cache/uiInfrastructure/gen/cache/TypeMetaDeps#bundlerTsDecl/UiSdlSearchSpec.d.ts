export interface UiSdlSearchSpec {

  readonly spec?: FetchSpec | null;
  withSpec(spec: IFetchSpec | null): UiSdlSearchSpec;

  readonly evaluateSpec?: EvaluateSpec | null;
  withEvaluateSpec(evaluateSpec: IEvaluateSpec | null): UiSdlSearchSpec;

  readonly sort?: C3.Array<UiSdlSortSpec | null>;
  withSort(sort: C3.Array<UiSdlSortSpec | null> | Array<IUiSdlSortSpec | null>): UiSdlSearchSpec;

  readonly typeName: string;
  withTypeName(typeName: string): UiSdlSearchSpec;
}

