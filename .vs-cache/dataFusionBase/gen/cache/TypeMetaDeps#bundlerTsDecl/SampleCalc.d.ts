export interface SampleCalc {

  readonly id: string;
  withId(id: string): SampleCalc;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): SampleCalc;

  readonly name?: string | null;
  withName(name: string | null): SampleCalc;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SampleCalc;

  readonly version?: number | null;
  withVersion(version: number | null): SampleCalc;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): SampleCalc;

  readonly intField?: number | null;
  withIntField(intField: number | null): SampleCalc;

  readonly intField2?: number | null;
  withIntField2(intField2: number | null): SampleCalc;

  readonly doubleField?: number | null;
  withDoubleField(doubleField: number | null): SampleCalc;

  readonly arry?: C3.Array<number | null>;
  withArry(arry: C3.Array<number | null> | Array<number | null>): SampleCalc;

  readonly calcInt?: number | null;
  withCalcInt(calcInt: number | null): SampleCalc;

  readonly calcArry?: C3.Array<number | null>;
  withCalcArry(calcArry: C3.Array<number | null> | Array<number | null>): SampleCalc;

  readonly calcInt2?: number | null;
  withCalcInt2(calcInt2: number | null): SampleCalc;

  readonly calcInt3?: number | null;
  withCalcInt3(calcInt3: number | null): SampleCalc;

  readonly calcIntNested?: number | null;
  withCalcIntNested(calcIntNested: number | null): SampleCalc;
}

